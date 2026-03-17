// import { motion } from "motion/react";
import * as motion from "motion/react-client";
import SectionHeading from "./SectionHeading";
import { categories } from "../data/data";

const Skills = () => (
  <section id="skills" className="relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl pointer-events-none" />

    <div className="section-container">
      <SectionHeading
        title="Skills & Technologies"
        subtitle="Tools and technologies I work with daily."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 p-5 hover-lift hover:border-primary/30 transition-all duration-500"
          >
            {/* Gradient glow on hover */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <cat.icon size={18} className="text-primary" />
                </div>
                <h3 className="font-semibold text-sm">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.3, delay: i * 0.04 + si * 0.03 }}
                    className="px-2.5 py-1 text-xs rounded-md bg-secondary/80 text-muted-foreground border border-border/30 hover:text-primary hover:border-primary/30 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
