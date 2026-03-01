/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  experience,
  fadeInUp,
  profile,
  projects,
  skills,
  staggerContainer,
} from "./portfolioContent";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SiteHeader from "./components/SiteHeader";

function App() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 md:px-10 md:py-10">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-14 top-10 h-44 w-44 rounded-full bg-orange-200/40 blur-3xl md:h-56 md:w-56"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-14 top-20 h-44 w-44 rounded-full bg-cyan-200/40 blur-3xl md:h-56 md:w-56"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15 }}
      />

      <SiteHeader />

      <motion.main variants={staggerContainer} initial="hidden" animate="visible" className="space-y-16 md:space-y-20">
        <AboutSection profile={profile} skills={skills} fadeInUp={fadeInUp} />
        <ExperienceSection experience={experience} fadeInUp={fadeInUp} />
        <ProjectsSection projects={projects} fadeInUp={fadeInUp} />
        <ContactSection profile={profile} fadeInUp={fadeInUp} />
      </motion.main>
    </div>
  );
}

export default App;
