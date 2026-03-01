/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function ExperienceSection({ experience, fadeInUp }) {
  return (
    <section className="grid gap-5 md:grid-cols-2 md:gap-6">
      {experience.map((item, index) => (
        <motion.article
          key={item.role + item.company}
          variants={fadeInUp}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.1 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70"
        >
          <p className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-blue-700">
            <FaBriefcase /> {item.period}
          </p>
          <h4 className="text-lg font-extrabold text-slate-900">{item.role}</h4>
          <p className="mb-3 text-sm font-semibold text-slate-700">{item.company}</p>
          <p className="text-sm leading-relaxed text-slate-700">{item.summary}</p>
        </motion.article>
      ))}
    </section>
  );
}

export default ExperienceSection;
