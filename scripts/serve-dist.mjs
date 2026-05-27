import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const root = join(process.cwd(), "dist");
const port = Number(process.env.PORT || 4174);

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".json": "application/json; charset=utf-8",
};

function resolveFile(url) {
  const requested = normalize(decodeURIComponent(url.split("?")[0]));
  const clean = requested === "/" ? "/index.html" : requested;
  const file = join(root, clean);
  if (existsSync(file) && statSync(file).isFile()) return file;
  return join(root, "index.html");
}

createServer((request, response) => {
  const file = resolveFile(request.url || "/");
  response.writeHead(200, {
    "Content-Type": types[extname(file)] || "application/octet-stream",
    "Cache-Control": "no-store",
  });
  createReadStream(file).pipe(response);
}).listen(port, "127.0.0.1", () => {
  console.log(`Serving dist at http://127.0.0.1:${port}`);
});
