import { About } from "./components/About.jsx";
import { Campaign } from "./components/Campaign.jsx";
import { Contact } from "./components/Contact.jsx";
import { Experience } from "./components/Experience.jsx";
import { Hero } from "./components/Hero.jsx";
import { Leadership } from "./components/Leadership.jsx";
import { MotionAI } from "./components/MotionAI.jsx";
import { Navigation } from "./components/Navigation.jsx";
import { Toolkit } from "./components/Toolkit.jsx";
import { Work } from "./components/Work.jsx";
import { useActiveSection } from "./hooks/useActiveSection.js";

const sectionIds = [
  "about",
  "toolkit",
  "experience",
  "range",
  "campaign",
  "motion",
  "leadership",
  "contact",
];

export default function App() {
  const active = useActiveSection(sectionIds);

  return (
    <>
      <Navigation active={active} />
      <main id="top">
        <Hero />
        <About />
        <Toolkit />
        <Experience />
        <Work />
        <Campaign />
        <MotionAI />
        <Leadership />
        <Contact />
      </main>
    </>
  );
}
