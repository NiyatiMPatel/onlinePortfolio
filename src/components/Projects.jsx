import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { projects } from "../data/data";

const ProjectCard = ({ project, index, isFeatured }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.15 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`group relative rounded-2xl bg-card/60 backdrop-blur-sm border border-border/40 overflow-hidden flex flex-col transition-all duration-500 hover:border-primary/40 ${
      isFeatured ? "md:col-span-2 lg:col-span-3 gradient-border" : ""
    }`}
    whileHover={{ y: -6, transition: { duration: 0.3 } }}
  >
    {/* Hover glow */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

    {/* Image */}
    <div
      className={`relative overflow-hidden ${isFeatured ? "h-56 md:h-72" : "h-44"}`}
    >
      <img
        src={project.image}
        alt={`${project.title} preview`}
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

      {/* Badge */}
      <div className="absolute bottom-3 left-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-semibold rounded-full bg-primary/20 text-primary backdrop-blur-md border border-primary/20 code-font uppercase tracking-wider">
          <project.badgeIcon size={12} />
          {project.badge}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="relative z-10 p-5 md:p-6 flex flex-col flex-1">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3
            className={`font-bold group-hover:text-primary transition-colors ${isFeatured ? "text-xl md:text-2xl" : "text-base"}`}
          >
            {project.title}
          </h3>
          <p className="text-primary/60 text-xs code-font mt-0.5">
            {project.subtitle}
          </p>
        </div>
        <div className="flex gap-1.5 flex-shrink-0 ml-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all border border-transparent hover:border-border/50"
              aria-label="Source Code"
            >
              <Github size={15} />
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20"
              aria-label="Live Demo"
            >
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>

      <p
        className={`text-muted-foreground leading-relaxed mb-4 ${isFeatured ? "text-sm md:text-base max-w-2xl" : "text-sm"}`}
      >
        {project.description}
      </p>

      {/* Highlights */}
      <ul className="space-y-2 mb-4 flex-1">
        {project.highlights.map((h) => (
          <li
            key={h}
            className="text-xs text-muted-foreground/90 flex items-start gap-2.5"
          >
            <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      {/* Tech + Actions footer */}
      <div className="flex items-center justify-between gap-3 pt-3 border-t border-border/30">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] rounded-md bg-secondary/80 text-muted-foreground code-font border border-border/30"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-2 flex-shrink-0">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all code-font border border-primary/20"
            >
              <ExternalLink size={11} />
              Live Demo
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium rounded-lg bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all code-font border border-border/30"
            >
              <Github size={11} />
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="projects" className="relative overflow-hidden">
    <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-accent/3 blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-primary/3 blur-3xl pointer-events-none" />

    <div className="section-container relative z-10">
      <SectionHeading
        title="Projects"
        subtitle="Featured work and personal experiments."
      />

      <div className="space-y-16">
        {projects.map((cat) => (
          <div key={cat.label}>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4 }}
              className="text-sm code-font text-muted-foreground/70 uppercase tracking-[0.2em] mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-gradient-to-r from-primary/50 to-transparent" />
              {cat.label}
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.projects.map((project, i) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={i}
                  isFeatured={project.featured}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
