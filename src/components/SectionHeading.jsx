// import { motion } from "motion/react";
import * as motion from "motion/react-client";

const SectionHeading = ({ title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.5 }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="inline-block mb-3"
    >
      <span className="code-font text-primary/60 text-xs tracking-widest uppercase">
        {"// "}
        {title}
      </span>
    </motion.div>
    <h2 className="text-3xl md:text-5xl font-bold mb-3">
      <span className="gradient-text">{title}</span>
    </h2>
    {subtitle && (
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
        {subtitle}
      </p>
    )}
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-4 mx-auto h-1 rounded-full bg-gradient-to-r from-primary to-accent"
    />
  </motion.div>
);

export default SectionHeading;
