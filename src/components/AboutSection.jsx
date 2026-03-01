/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaEnvelope, FaReact } from "react-icons/fa";
import emmaPortrait from "../img/_MG_5664[1].jpg";

function AboutSection({ profile, skills, fadeInUp }) {
  return (
    <section id="about" className="grid gap-8 md:grid-cols-2 md:items-center md:gap-10">
      <motion.div variants={fadeInUp} transition={{ duration: 0.7 }}>
        <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-700">
          <FaReact /> {profile.role}
        </p>
        <h2 className="mb-4 text-3xl font-black leading-tight text-slate-900 sm:text-4xl md:text-5xl">
          Emmanuel Ishaya builds polished web experiences that feel fast and professional.
        </h2>
        <p className="mb-6 text-base leading-relaxed text-slate-700">
          I specialize in React development and create responsive, accessible interfaces with clean code and smooth
          interactions.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href="#projects"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-700 sm:w-auto"
          >
            View Projects <FaArrowRight />
          </a>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:text-blue-700 sm:w-auto"
          >
            Contact Me <FaEnvelope />
          </a>
        </div>
      </motion.div>

      <div className="space-y-6 md:max-w-md md:justify-self-end">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="relative mx-auto w-full max-w-xs rounded-3xl border border-slate-200 bg-white/85 p-3 shadow-xl shadow-slate-200/70 backdrop-blur sm:max-w-sm"
        >
          <motion.img
            src={emmaPortrait}
            alt="Portrait of Emmanuel Ishaya"
            className="h-[340px] w-full rounded-2xl object-cover object-top sm:h-[430px]"
            animate={{
              scale: [1, 1.03, 1],
              rotate: [0, -1, 0, 1, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.05, rotate: 0 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-xl shadow-slate-200/70 backdrop-blur sm:p-8"
        >
          <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-slate-900">
            <FaCode className="text-blue-700" /> Core Skills
          </h3>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <li key={skill} className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-800">
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
