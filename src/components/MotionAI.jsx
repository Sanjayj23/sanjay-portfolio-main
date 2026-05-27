import { useState } from "react";
import { motionCards } from "../data/portfolio.js";
import { Paper, Washi } from "./Paper.jsx";
import { ScrapSection } from "./ScrapSection.jsx";
import { SectionHeader } from "./SectionHeader.jsx";
import { MiniDoodle } from "./MiniDoodle.jsx";
import { DoodleIcon } from "./Doodle.jsx";
import { LazyImage } from "./LazyImage.jsx";

function PlayIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path d="M12 8 31 20 12 32Z" />
    </svg>
  );
}

function VideoModal({ url, title, onClose }) {
  return (
    <div className="video-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className="video-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose} aria-label="Close video">
          ✕
        </button>
        <div className="video-modal-frame">
          <iframe
            src={url}
            title={title}
            allowFullScreen
            frameBorder="0"
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </div>
      </div>
    </div>
  );
}

export function MotionAI() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <ScrapSection id="motion">
      <SectionHeader number="06" title="Motion & AI" subtitle="Where craft meets computation." />
      <div className="motion-grid">
        {motionCards.map((card, index) => (
          <Paper as="article" className="motion-card" key={card.title} transition={{ duration: 0.6, delay: index * 0.08 }}>
            <Washi style={{ top: "-9px", right: "18px", "--tilt": index % 2 ? "-2deg" : "3deg" }}>
              cut 0{index + 1}
            </Washi>
            <button
              className="video-thumb"
              onClick={() => setActiveVideo({ url: card.videoUrl, title: card.title })}
              aria-label={`Play ${card.title}`}
            >
              <LazyImage
                className="video-thumb-img"
                src={card.thumbnailUrl}
                alt={`${card.title} thumbnail`}
              />
              <span className="video-thumb-overlay" aria-hidden="true" />
              <span className="video-thumb-frame" aria-hidden="true" />
              <span className="play-circle">
                <PlayIcon />
              </span>
            </button>
            <span className="card-corner-doodle card-corner-doodle-bl">
              <DoodleIcon type="film" />
            </span>
            <MiniDoodle variant="loop" className="motion-loop" size="30px" />
            <div className="motion-body">
              <span className="badge">{card.badge}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </Paper>
        ))}
      </div>

      {activeVideo && (
        <VideoModal
          url={activeVideo.url}
          title={activeVideo.title}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </ScrapSection>
  );
}
