/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

function ContactSection({ profile, fadeInUp }) {
  return (
    <section id="contact" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 sm:p-8">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h3 className="mb-2 text-2xl font-black text-slate-900">Let's Build Something Great</h3>
          <p className="mb-1 text-sm text-slate-700">Open to freelance, internship, and full-time frontend roles.</p>
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600">
            <FaMapMarkerAlt /> Based in {profile.location}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-700 sm:w-auto"
          >
            <FaEnvelope /> Email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-slate-400 sm:w-auto"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-slate-400 sm:w-auto"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactSection;
