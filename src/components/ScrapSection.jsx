import clsx from "clsx";
import { DoodleLayer } from "./DoodleLayer.jsx";

export function ScrapSection({ id, doodles, alt = false, className, children }) {
  return (
    <section id={id} className={clsx("scrap-section", alt && "alt", className)} data-section={id}>
      <DoodleLayer name={doodles ?? id} />
      <div className="scrap-binding" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <span className="binding-hole" key={i} />
        ))}
      </div>
      <span className="scrap-fold scrap-fold-tl" aria-hidden="true" />
      <span className="scrap-fold scrap-fold-br" aria-hidden="true" />
      <div className="texture-field" aria-hidden="true">
        <span className="brush-loop brush-a" />
        <span className="brush-loop brush-b" />
        <span className="stitch-line stitch-a" />
        <span className="stitch-line stitch-b" />
        <span className="margin-line" />
      </div>
      <div className="section-inner">{children}</div>
    </section>
  );
}
