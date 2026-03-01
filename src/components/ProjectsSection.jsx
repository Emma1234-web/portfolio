/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function ProjectsSection({ projects, fadeInUp }) {
  return (
    <section id="projects">
      <motion.h3
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-2xl font-black text-slate-900 sm:mb-8 sm:text-3xl"
      >
        Featured Projects
      </motion.h3>
      <div className="grid gap-5 md:grid-cols-3 md:gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70"
          >
            <h4 className="mb-3 text-lg font-extrabold text-slate-900">{project.title}</h4>
            <p className="mb-5 text-sm leading-relaxed text-slate-700">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span key={item} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold tracking-wide text-blue-700">
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
