import { Suspense, lazy } from "react";
import { LazyMotion, domAnimation } from "motion/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
const About = lazy(() => import("../components/About"));
const Skills = lazy(() => import("../components/Skills"));
const Experience = lazy(() => import("../components/Experience"));
const Projects = lazy(() => import("../components/Projects"));
const Services = lazy(() => import("../components/Services"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));

const Index = () => (
  <div className="min-h-screen bg-background">
    <LazyMotion features={domAnimation}>
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </Suspense>
    </LazyMotion>
  </div>
);

export default Index;
