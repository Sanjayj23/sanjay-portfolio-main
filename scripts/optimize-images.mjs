import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "public", "images");

/** [filename, remoteUrl, maxWidth] — aggressive caps for smallest files */
const assets = [
  ["hero", "https://i.ibb.co/YBbfCPcX/Chat-GPT-Image-May-27-2026-03-48-52-PM.png", 480],
  ["manifesto", "https://i.ibb.co/xSpRN2Q3/Whats-App-Image-2026-05-27-at-10-24-39-PM.jpg", 400],
  ["twin-divinities", "https://i.ibb.co/6RYQV2t4/Chat-GPT-Image-May-27-2026-07-11-10-PM.png", 400],
  ["portrait-crosshatch", "https://i.ibb.co/spCPKkrJ/Chat-GPT-Image-May-27-2026-07-15-08-PM.png", 400],
  ["the-embrace", "https://i.ibb.co/3ms9rjPy/Chat-GPT-Image-May-27-2026-07-17-57-PM.png", 400],
  ["white-silence", "https://i.ibb.co/Kj6Wv1Fc/Chat-GPT-Image-May-27-2026-07-22-31-PM.png", 400],
  ["dissolving-edge", "https://i.ibb.co/1fKBrq9Y/Chat-GPT-Image-May-27-2026-07-24-30-PM.png", 400],
  ["signal-static", "https://i.ibb.co/RqkJVd1/4.png", 400],
  ["forest-serenade", "https://i.ibb.co/wNK2Yvs5/4th.png", 400],
  ["reach", "https://i.ibb.co/xtXzM76L/art.png", 400],
  ["last-train", "https://i.ibb.co/3mNFgDtB/Untitled-Artwork-3-1.png", 400],
  ["antaragni-logo", "https://i.ibb.co/cSMXxfXR/Chat-GPT-Image-May-27-2026-07-35-31-PM.png", 400],
  ["fac-merch", "https://i.ibb.co/PZY4Nzfc/3.png", 400],
  ["cult-sweatshirt", "https://i.ibb.co/Rp5C8Wnc/IMG-20260217-WA0007.jpg", 400],
  ["udghosh-jersey", "https://i.ibb.co/gZN797st/The-wait-is-over-Presenting-the-official-Udghosh-2024-jersey-where-passion-meets-performanc.jpg", 400],
  ["stapati-logo", "https://i.ibb.co/zhX6MfLq/IMG-20210821-WA0028.jpg", 400],
  ["campaign-battle", "https://i.ibb.co/jkphNBsy/1-REBEL-7.png", 440],
  ["campaign-dramatics", "https://i.ibb.co/ycQ3bYVF/4-Denisha-ghumra.png", 440],
  ["campaign-mr-ms", "https://i.ibb.co/kgYJTFpp/Whats-App-Image-2024-10-16-at-02-38-28.jpg", 440],
  ["campaign-comic", "https://i.ibb.co/ynvr56bg/Whats-App-Image-2024-10-19-at-18-30-30.jpg", 440],
  ["thumb-aamdhane", "https://img.youtube.com/vi/2eFBOJiOTlU/mqdefault.jpg", 240],
  ["thumb-inferno", "https://img.youtube.com/vi/XSZ6v-mGN4Y/mqdefault.jpg", 240],
  ["thumb-sola", "https://img.youtube.com/vi/GDTWvmr_94I/mqdefault.jpg", 240],
];

/** Very low quality — prioritizes file size over fidelity */
const QUALITY = 28;
const ALPHA_QUALITY = 20;

const webpOptions = {
  quality: QUALITY,
  alphaQuality: ALPHA_QUALITY,
  effort: 6,
  smartSubsample: true,
  nearLossless: false,
};

async function fetchBuffer(url) {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const map = {};

  for (const [name, url, maxWidth] of assets) {
    const file = `${name}.webp`;
    try {
      const input = await fetchBuffer(url);
      const outPath = path.join(outDir, file);
      await sharp(input)
        .rotate()
        .resize({ width: maxWidth, withoutEnlargement: true })
        .webp(webpOptions)
        .toFile(outPath);

      const { size } = await import("node:fs/promises").then((fs) =>
        fs.stat(outPath).then((s) => ({ size: s.size }))
      );
      map[url] = `/images/${file}`;
      console.log(`OK  ${file} (${(size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.warn(`SKIP ${name}: ${err.message}`);
      map[url] = url;
    }
  }

  const js = `/** Auto-generated — run: npm run optimize-images */\nexport const imageSrc = ${JSON.stringify(map, null, 2)};\n\nexport function img(url) {\n  return imageSrc[url] ?? url;\n}\n`;

  await writeFile(path.join(root, "src", "data", "imageSrc.js"), js);
  console.log("Wrote src/data/imageSrc.js");
}

main();
