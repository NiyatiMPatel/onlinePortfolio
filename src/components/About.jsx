import { GraduationCap, Briefcase, Sparkles, ArrowRight } from "lucide-react";
// import { motion } from "motion/react";
import * as motion from "motion/react-client";
import { focusAreas, education } from "../data/data";
import SectionHeading from "./SectionHeading";

const About = () => (
  <section id="about" className="relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/3 blur-3xl pointer-events-none" />
    <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-accent/3 blur-3xl pointer-events-none" />

    <div className="section-container">
      <SectionHeading
        title="About Me"
        subtitle="My background, education, and professional focus."
      />

      <div className="grid md:grid-cols-2 gap-12">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Briefcase size={18} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Professional Bio</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Niyati Patel is a frontend developer focused on building scalable
            and maintainable React applications. She enjoys translating product
            requirements and design systems into intuitive user interfaces while
            ensuring performance and maintainability.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Recently, she has been exploring AI-assisted development workflows,
            leveraging tools like Claude, Lovable, Cursor, and Windsurf to
            accelerate prototyping and feature development.
          </p>

          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <Sparkles size={18} className="text-accent" />
            </div>
            <h3 className="text-lg font-semibold">Focus Areas</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {focusAreas.map((area, i) => (
              <motion.span
                key={area}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group px-3 py-1.5 text-sm rounded-lg bg-secondary/80 text-muted-foreground border border-border/50 hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                <span className="inline-flex items-center gap-1">
                  <ArrowRight
                    size={12}
                    className="opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary"
                  />
                  {area}
                </span>
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <GraduationCap size={18} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300 group"
              >
                <div className="absolute -left-[6px] top-1 w-3 h-3 rounded-full bg-primary/30 group-hover:bg-primary group-hover:shadow-[0_0_10px_hsl(var(--primary)/0.4)] transition-all duration-300">
                  <div className="absolute inset-0.5 rounded-full bg-primary" />
                </div>
                <p className="font-medium group-hover:text-primary transition-colors">
                  {edu.degree}
                </p>
                <p className="text-muted-foreground text-sm">{edu.school}</p>
                <p className="text-primary text-sm code-font mt-1">
                  {edu.year}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats card */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 grid grid-cols-3 gap-3"
          >
            {[
              { value: "5+", label: "Years Exp" },
              { value: "10K+", label: "Users Served" },
              { value: "15+", label: "Projects" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
