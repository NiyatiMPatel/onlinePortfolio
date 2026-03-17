// import { motion } from "motion/react";
import * as motion from "motion/react-client";
import { Building2, Calendar, ChevronRight, Zap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experiences } from "../data/data";

const Experience = () => (
  <section id="experience" className="relative overflow-hidden">
    {/* Decorative background */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/3 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
    </div>

    <div className="section-container relative z-10">
      <SectionHeading
        title="Experience"
        subtitle="My professional journey and career milestones."
      />

      <div className="max-w-4xl mx-auto relative">
        {/* Central timeline line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-6 md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 md:-translate-x-px"
        />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className={`relative mb-12 last:mb-0 md:w-[calc(50%-2rem)] ${
              i % 2 === 0 ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"
            } pl-16 md:pl-0`}
          >
            {/* Timeline node */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 0.4,
                delay: i * 0.15 + 0.2,
                type: "spring",
                stiffness: 200,
              }}
              className={`absolute ${
                i % 2 === 0
                  ? "left-4 md:-right-[1.65rem] md:left-auto"
                  : "left-4 md:-left-[1.65rem]"
              } top-8 z-10`}
            >
              <div className="w-5 h-5 rounded-full bg-background border-2 border-primary shadow-[0_0_12px_hsl(var(--primary)/0.4)] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              </div>
            </motion.div>

            {/* Connector line (mobile) */}
            <div className="absolute left-[1.45rem] top-8 w-8 h-px bg-border md:hidden" />

            {/* Card */}
            <div className="group relative rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 overflow-hidden hover-lift transition-all duration-500 hover:border-primary/30">
              {/* Top gradient accent */}
              <div className={`h-1 bg-gradient-to-r ${exp.color}`} />

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl mt-0.5">{exp.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                        <Building2 size={13} className="text-primary/60" />
                        {exp.company}
                      </span>
                      <span className="text-border">•</span>
                      <span className="inline-flex items-center gap-1 text-xs text-primary code-font">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2.5">
                  {exp.highlights.map((h, hi) => (
                    <motion.li
                      key={h}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.5 }}
                      transition={{ duration: 0.3, delay: i * 0.1 + hi * 0.06 }}
                      className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-muted-foreground/90 transition-colors"
                    >
                      <ChevronRight
                        size={14}
                        className="text-accent mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform"
                      />
                      <span>{h}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom tag */}
                <div className="mt-4 pt-3 border-t border-border/50">
                  <div className="flex items-center gap-1 text-xs text-primary/60">
                    <Zap size={11} />
                    <span className="code-font">
                      {exp.highlights.length} key contributions
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
