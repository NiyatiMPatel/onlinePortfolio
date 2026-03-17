// import { motion } from "motion/react";
import * as motion from "motion/react-client";
import SectionHeading from "./SectionHeading";
import { ArrowRight } from "lucide-react";
import { services } from "../data/data";

const Services = () => (
  <section id="services" className="relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/3 blur-3xl pointer-events-none" />

    <div className="section-container">
      <SectionHeading
        title="Services"
        subtitle="Frontend development services I offer."
      />

      <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="group relative rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 p-6 text-center hover-lift hover:border-primary/30 transition-all duration-500 overflow-hidden"
          >
            {/* Background glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            <div className="relative z-10">
              <div
                className={`w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${service.gradient} p-[1px]`}
              >
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center group-hover:bg-card/80 transition-colors">
                  <service.icon
                    size={24}
                    className="text-primary group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              {/* <div className="flex items-center justify-center gap-1 text-xs text-primary/60 group-hover:text-primary transition-colors">
                <span className="code-font">Learn more</span>
                <ArrowRight
                  size={12}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div> */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
