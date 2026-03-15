import { useState } from "react";
import ContactForm from "./ContactForm";
import { motion } from "motion/react";
import { socialMedia } from "../data/data";
import SectionHeading from "./SectionHeading";
import Modal from "./Modal";
import { Download, Sparkles } from "lucide-react";
import Resume from "../assets/Frontend-Developer-Niyati-Patel.pdf";

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const onSuccess = () => {
    setSubmitStatus("success");
    setModalVisible(true);
  };

  const onError = () => {
    setSubmitStatus("fail");
    setModalVisible(true);
  };

  return (
    <>
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute top-20 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

        <div className="section-container">
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a project in mind? Let's work together."
          />

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Form */}
            <ContactForm onSuccess={onSuccess} onError={onError} />
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2 text-sm text-primary/60">
                <Sparkles size={14} />
                <span className="code-font">
                  Let's build something together
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>

              <div className="space-y-3">
                {socialMedia.map(({ icon: Icon, label, href }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all group p-2 -ml-2 rounded-lg hover:bg-primary/5"
                  >
                    <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                      <Icon size={18} />
                    </div>
                    <span className="text-sm">{label}</span>
                  </motion.a>
                ))}
              </div>

              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                // download
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border/50 text-sm font-medium hover:border-primary/50 hover-lift hover:bg-primary/5 transition-all"
              >
                <Download
                  size={16}
                  className="group-hover:-translate-y-0.5 transition-transform"
                />{" "}
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      {!!modalVisible && (
        <Modal status={submitStatus} setIsVisible={setModalVisible} />
      )}
    </>
  );
};

export default Contact;
