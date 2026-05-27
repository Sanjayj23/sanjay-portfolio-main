import clsx from "clsx";
import { doodlePlacements } from "../data/doodles.js";
import { DoodleIcon } from "./Doodle.jsx";

export function DoodleLayer({ name }) {
  const set = doodlePlacements[name] ?? [];

  return (
    <div className="doodle-layer" aria-hidden="true">
      {set.map(([type, x, top, size, rot, opacity], index) => (
        <div
          className={clsx("doodle", index % 2 === 0 ? "doodle-float-a" : "doodle-float-b")}
          key={`${name}-${type}-${index}`}
          style={{
            "--x": `${x}%`,
            "--y": `${top}%`,
            "--s": `${size}px`,
            "--r": `${rot}deg`,
            "--o": opacity,
          }}
        >
          <DoodleIcon type={type} />
        </div>
      ))}
    </div>
  );
}
