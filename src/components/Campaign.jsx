import { campaignPosts, campaignStats } from "../data/portfolio.js";
import { DoodleIcon } from "./Doodle.jsx";
import { MiniDoodle } from "./MiniDoodle.jsx";
import { Paper } from "./Paper.jsx";
import { ScrapSection } from "./ScrapSection.jsx";
import { SectionHeader } from "./SectionHeader.jsx";
import { LazyImage } from "./LazyImage.jsx";
export function Campaign() {
  return (
    <ScrapSection id="campaign" alt>
      <SectionHeader
        number="05"
        title="Campaign Deep Dive"
        subtitle={<span className="gold">Antaragni '24 - IIT Kanpur's 59th Annual Cultural Fest</span>}
      />

      <div className="campaign-layout">
        <div className="campaign-intro">
          <Paper as="article" className="campaign-copy">
            Antaragni is one of Asia's largest college cultural festivals - over 350 colleges, four days, 130,000+
            attendees. I designed the judge reveal campaign across Battle Underground, Dramatics, Mr &amp; Ms
            Antaragni, and Comic Kaun. Every post had to carry 30+ sponsor logos without losing visual punch.
            No second chances on the timeline.
            <span className="campaign-doodle">
              <DoodleIcon type="asterisk" />
            </span>
          </Paper>

          <div className="campaign-stats stat-grid">
            {campaignStats.map(([number, label], index) => (
              <div className="stat-tile paper-hover" key={label}>
                <MiniDoodle variant={index % 2 ? "sparkle" : "starSmall"} className="stat-doodle" size="24px" white />
                <span className="stat-number">{number}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="campaign-posts">
          {campaignPosts.map((post, index) => (
          <div className="post-placeholder paper-hover" key={post.label}>
              <MiniDoodle variant="zigzag" className="post-zigzag" size="48px" white />
              <span className="post-index">0{index + 1}</span>
              {post.imageUrl ? (
                <LazyImage
                  src={post.imageUrl}
                  alt={post.label}
                  className="post-image"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", zIndex: 2 }}
                />
              ) : (
                <span>{post.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </ScrapSection>
  );
}
