import { impactStats, timeline } from "../data/portfolio.js";
import { Paper } from "./Paper.jsx";
import { ScrapSection } from "./ScrapSection.jsx";
import { SectionHeader } from "./SectionHeader.jsx";
import { MiniDoodle } from "./MiniDoodle.jsx";
import { DoodleIcon } from "./Doodle.jsx";

export function Leadership() {
  return (
    <ScrapSection id="leadership" alt>
      <SectionHeader number="07" title="Leadership" />

      <div className="impact-strip">
        {impactStats.map(([number, label], index) => (
          <Paper as="div" className="impact-tile" key={label} transition={{ duration: 0.55, delay: index * 0.05 }}>
            <MiniDoodle variant="sparkle" className="impact-sparkle" size="22px" />
            <span className="impact-number">{number}</span>
            <span className="stat-label">{label}</span>
          </Paper>
        ))}
      </div>

      <div className="timeline">
        {timeline.map((item, index) => (
          <Paper as="article" className="timeline-card" key={`${item.year}-${item.title}`} transition={{ duration: 0.55, delay: index * 0.06 }}>
            <span className="year-tag">{item.year}</span>
            <span className="card-corner-doodle card-corner-doodle-tr">
              <DoodleIcon type="crown" />
            </span>
            <MiniDoodle variant="underline" className="timeline-underline" size="80px" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Paper>
        ))}
      </div>
    </ScrapSection>
  );
}
