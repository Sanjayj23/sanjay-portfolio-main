import { experienceColumns } from "../data/portfolio.js";
import { Paper, Washi } from "./Paper.jsx";
import { ScrapSection } from "./ScrapSection.jsx";
import { SectionHeader } from "./SectionHeader.jsx";
import { MiniDoodle } from "./MiniDoodle.jsx";
import { DoodleIcon } from "./Doodle.jsx";

const cardDoodles = ["star", "crown", "film"];

export function Experience() {
  return (
    <ScrapSection id="experience" alt>
      <SectionHeader number="03" title="Experiences" />
      <div className="experience-grid">
        {experienceColumns.map((column, index) => (
          <Paper
            as="article"
            className="experience-card"
            key={column.title}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <Washi style={{ top: "-10px", left: "22px", "--tilt": index % 2 ? "2deg" : "-2deg" }}>
              {column.label}
            </Washi>
            <h3 className="card-title">{column.title}</h3>
            <ul>
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <span className="experience-index">{column.index}</span>
            <span className="card-corner-doodle card-corner-doodle-tr">
              <DoodleIcon type={cardDoodles[index]} />
            </span>
            <MiniDoodle variant="check" className="experience-check" size="24px" />
          </Paper>
        ))}
      </div>
    </ScrapSection>
  );
}
