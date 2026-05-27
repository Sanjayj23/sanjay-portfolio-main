import { motion } from "framer-motion";
import { ScrapSection } from "./ScrapSection.jsx";
import { HandNote, Paper, Washi } from "./Paper.jsx";
import { PinIcon } from "./InlineIcons.jsx";
import { MiniDoodle } from "./MiniDoodle.jsx";
import { DoodleIcon } from "./Doodle.jsx";
import { heroPortrait } from "../data/portfolio.js";
import { LazyImage } from "./LazyImage.jsx";

export function Hero() {
  return (
    <ScrapSection id="hero" doodles="hero" className="hero">
      <div className="hero-grid">
        <Paper as="article" className="hero-paper" torn>
          <PinIcon className="corner-pin" />
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.72, delay: 0.12 }}
          >
            Portfolio
          </motion.h1>
          <p className="hero-role">Creative Generalist</p>
          <p className="hero-subtitle">&amp; Visual Storyteller</p>
          <div className="ribbon">From charcoal on paper to AI-generated frames.</div>
          <div className="hero-meta">
            <span>IIT Kanpur, India</span>
            <a className="scroll-prompt" href="#about">
              Scroll to enter the work
            </a>
          </div>
          <MiniDoodle variant="squiggleWide" className="hero-squiggle" size="180px" />
          <MiniDoodle variant="starSmall" className="hero-star-accent" size="32px" />
        </Paper>

        <motion.div
          className="portrait-stack"
          initial={{ opacity: 0, rotate: -1, y: 24 }}
          animate={{ opacity: 1, rotate: 0, y: 0 }}
          transition={{ duration: 0.75, delay: 0.22 }}
        >
          <Washi dark style={{ top: "-8px", right: "26px", "--tilt": "5deg" }}>
            IITK 2027
          </Washi>
          <div className="polaroid paper-hover">
            <svg className="paperclip" viewBox="0 0 60 70" aria-hidden="true">
              <path d="M18 62V19c0-9 14-9 14 0v31c0 13-21 13-21-1V20" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <LazyImage
              eager
              src={heroPortrait.src}
              alt={heroPortrait.alt}
              className="portrait-window"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
            <div className="portrait-caption">Sanjay</div>
            <div className="portrait-year">Creative Generalist</div>
          </div>
          <HandNote className="portrait-note">charcoal to code to camera</HandNote>
          <span className="polaroid-corner-doodle">
            <DoodleIcon type="camera" />
          </span>
          <MiniDoodle variant="loop" className="portrait-loop" size="40px" white />
        </motion.div>
      </div>
    </ScrapSection>
  );
}
