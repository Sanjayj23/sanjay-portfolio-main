import { aboutText, chips, manifestoImage } from "../data/portfolio.js";
import { LazyImage } from "./LazyImage.jsx";
import { ChipIcon } from "./InlineIcons.jsx";
import { HandNote, Paper, Washi } from "./Paper.jsx";
import { ScrapSection } from "./ScrapSection.jsx";
import { SectionHeader } from "./SectionHeader.jsx";
import { MiniDoodle } from "./MiniDoodle.jsx";
import { DoodleIcon } from "./Doodle.jsx";

export function About() {
  const icons = ["pin", "cap", "medal"];

  return (
    <ScrapSection id="about" alt>
      <SectionHeader number="01" title="About Me" />
      <div className="about-grid">
        <aside className="polaroid manifesto-photo paper-hover">
          <Washi style={{ top: "-12px", left: "28px", "--tilt": "-5deg" }}>
            first language: charcoal
          </Washi>
          <MiniDoodle variant="heart" className="manifesto-heart" size="28px" />
          <div className="portrait-window">
            <LazyImage
              src={manifestoImage.src}
              alt={manifestoImage.alt}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <div className="portrait-caption">manifesto</div>
          <div className="portrait-year">Studio note</div>
        </aside>

        <Paper as="article" className="about-paper">
          <HandNote style={{ top: "18px", right: "24px" }}>not a tool-chaser</HandNote>
          <span className="card-corner-doodle card-corner-doodle-br">
            <DoodleIcon type="pencil" />
          </span>
          <MiniDoodle variant="zigzag" className="about-zigzag" size="64px" />
          <p>{aboutText}</p>
          <div className="quote-strip">
            <div className="vertical-note">Why it works</div>
            <blockquote>
              "I don't just use creative tools. I understand why something is beautiful - and that changes everything."
            </blockquote>
          </div>
        </Paper>
      </div>

      <div className="info-chips">
        {chips.map((chip, index) => (
          <span className="chip" key={chip}>
            <ChipIcon type={icons[index]} />
            {chip}
            <MiniDoodle variant={index % 2 ? "check" : "sparkle"} className="chip-doodle" size="20px" />
          </span>
        ))}
      </div>
    </ScrapSection>
  );
}
