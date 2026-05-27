import { toolkit } from "../data/portfolio.js";
import { ScrapSection } from "./ScrapSection.jsx";
import { SectionHeader } from "./SectionHeader.jsx";
import { Washi } from "./Paper.jsx";
import { DoodleIcon } from "./Doodle.jsx";
import { MiniDoodle } from "./MiniDoodle.jsx";

const icons = ["charcoal", "pencil", "film"];
const cornerVariants = ["starSmall", "sparkle", "loop"];

export function Toolkit() {
  return (
    <ScrapSection id="toolkit">
      <SectionHeader number="02" title="The Toolkit" subtitle="Three disciplines. One sensibility." />
      <div className="toolkit-binder">
        {toolkit.map((group, index) => (
          <article className="binder-card paper-hover" key={group.title}>
            <Washi style={{ top: "12px", right: "18px", "--tilt": index % 2 ? "-3deg" : "4deg" }}>
              {group.tape}
            </Washi>
            <h3 className="binder-title">{group.title}</h3>
            <div className="tag-list">
              {group.skills.map((skill) => (
                <span className="tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
            <span className="binder-doodle">
              <DoodleIcon type={icons[index]} />
            </span>
            <MiniDoodle variant={cornerVariants[index]} className="binder-corner-doodle" size="28px" />
            <MiniDoodle variant="dots" className="binder-dots" size="48px" />
          </article>
        ))}
      </div>
    </ScrapSection>
  );
}
