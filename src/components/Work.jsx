import { motion } from "framer-motion";
import { workGroups } from "../data/portfolio.js";
import { Paper } from "./Paper.jsx";
import { ScrapSection } from "./ScrapSection.jsx";
import { SectionHeader } from "./SectionHeader.jsx";
import { MiniDoodle } from "./MiniDoodle.jsx";
import { LazyImage } from "./LazyImage.jsx";

function gridClass(group) {
  const base = group.columns;
  if (group.works.length === 5 && !base.includes("four")) {
    return `${base} work-grid-balanced`;
  }
  return base;
}

export function Work() {
  return (
    <ScrapSection id="range">
      <SectionHeader
        number="04"
        title="The Range"
        subtitle={<span className="gold">Traditional - Digital - Brand</span>}
      />

      {workGroups.map((group) => (
        <div className="range-group" key={group.label}>
          <span className="range-label">
            {group.label}
            <MiniDoodle variant="arrow" className="range-arrow" size="22px" white />
          </span>
          <div className={gridClass(group)}>
            {group.works.map(([title, text, imageUrl], index) => (
              <Paper
                as="article"
                className="work-card"
                key={title}
                transition={{ duration: 0.6, delay: index * 0.04 }}
              >
                <motion.div
                  className={imageUrl ? "art-placeholder has-piece" : "art-placeholder"}
                  whileHover={{ scale: 1.012 }}
                >
                  {imageUrl ? (
                    <div className="art-mat">
                      <LazyImage src={imageUrl} alt={title} className="art-piece" />
                    </div>
                  ) : (
                    <span>{title}</span>
                  )}
                </motion.div>
                <MiniDoodle
                  variant={index % 3 === 0 ? "starSmall" : index % 3 === 1 ? "plus" : "circleBurst"}
                  className="work-card-doodle"
                  size="26px"
                />
                <div className="work-info">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Paper>
            ))}
          </div>
        </div>
      ))}
    </ScrapSection>
  );
}
