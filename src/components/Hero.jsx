import { ArrowDown, Mail, Download, FolderOpen } from "lucide-react";
// import { motion } from "motion/react";
import * as motion from "motion/react-client";
import profile320 from "../assets/profile-320.webp";
import profile480 from "../assets/profile-480.webp";
import profile640 from "../assets/profile-640.webp";
import Resume from "../assets/Frontend-Developer-Niyati-Patel.pdf";
import { socialMedia } from "../data/data";

const Hero = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background effects */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{ left: `${15 + i * 18}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [-20, 20, -20], opacity: [0.2, 0.6, 0.2] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="code-font text-primary text-sm mb-4"
            >
              {"// Hello, World!"}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4"
            >
              <span className="gradient-text">Niyati Patel</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-primary font-medium mb-4"
            >
              Frontend Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground max-w-xl mb-4 leading-relaxed"
            >
              Specializing in React and modern web technologies, focused on
              building performant, user-centric web applications.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="text-muted-foreground/80 text-sm max-w-xl mb-8 leading-relaxed"
            >
              Passionate about transforming product ideas and design systems
              into scalable frontend architectures. Exploring AI-assisted
              development workflows using Claude, Lovable, Cursor, and Windsurf.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 justify-center md:justify-start mb-8"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover-lift text-sm"
              >
                <FolderOpen
                  size={16}
                  className="group-hover:rotate-6 transition-transform"
                />{" "}
                View Projects
              </button>
              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/50 text-foreground font-medium hover-lift hover:border-primary/50 hover:bg-primary/5 text-sm transition-all"
              >
                <Download
                  size={16}
                  className="group-hover:-translate-y-0.5 transition-transform"
                />{" "}
                Download Resume
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/50 text-foreground font-medium hover-lift hover:border-accent/50 hover:bg-accent/5 text-sm transition-all"
              >
                <Mail
                  size={16}
                  className="group-hover:scale-110 transition-transform"
                />{" "}
                Contact Me
              </button>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3 justify-center md:justify-start"
            >
              {socialMedia.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl bg-secondary/80 text-muted-foreground hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_hsl(var(--primary)/0.15)] transition-all duration-300"
                  aria-label={label}
                >
                  <Icon
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-accent opacity-30 group-hover:opacity-50 transition-opacity" />
              <img
                src={profile480}
                srcSet={`${profile320} 320w, ${profile480} 480w, ${profile640} 640w`}
                sizes="(max-width: 768px) 224px, 288px"
                alt="Niyati Patel - Frontend Developer"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-2 border-border/50"
              />
              {/* Orbiting dot */}
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_hsl(var(--accent)/0.5)]"
                style={{ top: "10%", left: "10%" }}
                animate={{
                  top: ["10%", "0%", "10%", "80%", "90%", "80%", "10%"],
                  left: ["10%", "50%", "90%", "90%", "50%", "10%", "10%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollTo("about")}
            className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-[10px] code-font tracking-widest uppercase">
              Scroll
            </span>
            <ArrowDown size={16} className="animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
