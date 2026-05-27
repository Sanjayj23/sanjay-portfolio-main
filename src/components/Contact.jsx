import { DoodleIcon } from "./Doodle.jsx";
import { MailIcon } from "./InlineIcons.jsx";
import { Paper, Washi } from "./Paper.jsx";
import { ScrapSection } from "./ScrapSection.jsx";
import { MiniDoodle } from "./MiniDoodle.jsx";

const EMAIL = "sanjayj23@iitk.ac.in";
const PHONE = "7908604833";

export function Contact() {
  return (
    <ScrapSection id="contact" className="contact-section">
      <Paper as="article" className="closing-sheet" torn>
        <Washi dark className="center-tape" style={{ "--tilt": "-2deg" }}>
          last page
        </Washi>
        <span className="section-kicker">08</span>
        <h2 className="closing-quote">
          Let&apos;s make something worth remembering.
        </h2>
        <a
          className="hello-button"
          href={`mailto:${EMAIL}?subject=${encodeURIComponent("Hello from your portfolio")}`}
        >
          <MailIcon />
          Say Hello
        </a>
        <div className="social-lines">
          <a href={`mailto:${EMAIL}`}>Email: {EMAIL}</a>
          <a href={`tel:+91${PHONE}`}>Contact: {PHONE}</a>
        </div>
        <MiniDoodle variant="squiggleWide" className="closing-squiggle" size="160px" />
        <MiniDoodle variant="heart" className="closing-heart" size="32px" />
        <span className="closing-crown">
          <DoodleIcon type="crown" />
        </span>
        <span className="card-corner-doodle card-corner-doodle-tl">
          <DoodleIcon type="sparkles" />
        </span>
      </Paper>
    </ScrapSection>
  );
}
