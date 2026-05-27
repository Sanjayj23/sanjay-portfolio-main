import { motion } from "framer-motion";
import { MiniDoodle } from "./MiniDoodle.jsx";

export function SectionHeader({ number, title, subtitle }) {
  return (
    <>
      <motion.div
        className="section-title-wrap"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
      >
        <span className="ghost-number">{number}</span>
        <span className="section-kicker">{number}</span>
        <h2 className="section-heading">{title}</h2>
        <MiniDoodle variant="squiggle" className="title-squiggle" size="140px" />
        <MiniDoodle variant="sparkle" className="title-sparkle" size="36px" />
      </motion.div>
      {subtitle ? (
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </>
  );
}
