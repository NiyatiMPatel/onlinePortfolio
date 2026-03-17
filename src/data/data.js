import {
 Github,
 Linkedin,
 Mail,
 Code2,
 Palette,
 Layout,
 Database,
 FileCheck,
 Wrench,
 GitBranch,
 Bot,
 Layers,
 Zap,
 Globe,
 Box,
 Cpu,
 Rocket,
 LayoutDashboard
} from "lucide-react";

import skillswapImg from "../assets/projects/skillSwap.png";
import sounddzignImg from "../assets/projects/soundZ.png";
import expenseImg from "../assets/projects/expense.png";
import foodOrderImg from "../assets/projects/meals.png";
import ecommerceImg from "../assets/projects/fashion.png";
import jsPracticeImg from "../assets/projects/superapp.png";

// PERSONAL CONTACT DETAILS
export const linkedin = "https://www.linkedin.com/in/niyati-mukesh-patel"
export const github = "https://github.com/NiyatiMPatel"
export const mail = "patel_niyati@outlook.com"
export const year = new Date().getFullYear()

// SOCIAL MEDIA LINKS
export const socialMedia = [
 { icon: Github, href: github, label: "GitHub" },
 { icon: Linkedin, href: linkedin, label: "LinkedIn" },
 { icon: Mail, href: `mailto:${mail}`, label: "Email" },
]

// ABOUT SECTION

export const focusAreas = [
 "Component-based UI development",
 "Performance optimization",
 "API integration",
 "Modern frontend tooling",
 "AI-assisted development workflows",
];

export const education = [
 {
  degree: "Master of Engineering in Telecommunications",
  school: "Melbourne Institute of Technology",
  year: "2018",
 },
 {
  degree: "Bachelor of Engineering in Electronics",
  school: "Atharva College of Engineering",
  year: "2015",
 },
];

// SKILLS SECTION
export const categories = [
 {
  title: "Core Frontend",
  icon: Code2,
  color: "from-blue-500/20 to-indigo-500/20",
  skills: [
   "HTML5",
   "CSS3",
   "JavaScript"
  ]
 },

 {
  title: "React Ecosystem",
  icon: Layout,
  color: "from-cyan-500/20 to-teal-500/20",
  skills: [
   "React",
   "JSX",
   "React Router"
  ]
 },

 {
  title: "Styling & UI",
  icon: Palette,
  color: "from-pink-500/20 to-purple-500/20",
  skills: [
   "SCSS / Sass",
   "CSS Modules",
   "Bootstrap",
   "Tailwind CSS",
   "Material UI",
   "Ant Design"
  ]
 },

 {
  title: "State Management",
  icon: Database,
  color: "from-emerald-500/20 to-green-500/20",
  skills: [
   "Redux Toolkit",
   "Context API",
   "React Query"
  ]
 },

 {
  title: "API & Data Fetching",
  icon: Database,
  color: "from-green-500/20 to-lime-500/20",
  skills: [
   "Axios",
   "Fetch API"
  ]
 },

 {
  title: "Forms & Validation",
  icon: FileCheck,
  color: "from-amber-500/20 to-orange-500/20",
  skills: [
   "Formik",
   "Yup"
  ]
 },

 {
  title: "Build Tools & Package Managers",
  icon: Wrench,
  color: "from-slate-500/20 to-zinc-500/20",
  skills: [
   "Vite",
   "Webpack",
   "npm"
  ]
 },

 {
  title: "Design & Collaboration Tools",
  icon: Wrench,
  color: "from-indigo-500/20 to-violet-500/20",
  skills: [
   "Figma",
   "Zeplin",
   "Postman",
   "Jira",
   "Azure DevOps"
  ]
 },

 {
  title: "Version Control",
  icon: GitBranch,
  color: "from-violet-500/20 to-purple-500/20",
  skills: [
   "Git",
   "GitHub",
   "GitLab"
  ]
 },

 {
  title: "AI Development Tools",
  icon: Bot,
  color: "from-primary/20 to-accent/20",
  skills: [
   "Claude",
   "Lovable",
   "Cursor",
   "Windsurf",
  ]
 }
];

// EXPERIENCE SECTION
export const experiences = [
 {
  role: "Frontend Developer",
  company: "Openspace Services Pvt Ltd",
  period: "Oct 2022 – Jun 2023",
  color: "from-primary to-accent",
  icon: "🚀",
  highlights: [
   "Built modular React scaffolds with reusable components",
   "Implemented authentication and routing systems",
   "Integrated REST APIs using Axios, React Query, and Redux",
   "Worked on an admin portal serving 10,000+ users",
   "Collaborated in Agile cross-functional teams",
  ],
 },
 {
  role: "Frontend Associate",
  company: "Moorabbin Wholesale Farmers Market",
  period: "May 2020 – Aug 2022",
  color: "from-accent to-primary",
  icon: "🎨",
  highlights: [
   "Converted Figma and Adobe XD designs into production UI",
   "Developed responsive mobile-first layouts",
   "Ensured cross-browser compatibility",
   "Maintained and optimized frontend applications",
  ],
 },
 {
  role: "Project Engineer",
  company: "Exel Galaxy Technology Services",
  period: "Nov 2017 – Apr 2020",
  color: "from-primary via-accent to-primary",
  icon: "⚙️",
  highlights: [
   "Supported telecom project deployments",
   "Worked on system integration and testing",
   "Maintained technical documentation",
  ],
 },
];

// PROJECTS SECTION
export const projects = [
 {
  label: "Featured Work",
  projects: [
   {
    title: "SkillSwap",
    subtitle: "Peer-to-Peer Skills Exchange Platform",
    description:
     "A serverless full-stack platform enabling users to exchange skills through real-time matching. Built with Supabase backend and React, featuring auth, RLS, and bookmarking.",
    badge: "Serverless Full-Stack",
    badgeIcon: Layers,
    highlights: [
     "Supabase Auth with Row Level Security",
     "Real-time skill discovery & matching",
     "Bookmarking & category filtering",
    ],
    tech: ["Lovable", "Cursor", "React 19", "Redux Toolkit", "Supabase", "PostgreSQL"],
    image: skillswapImg,
    links: { github: "https://github.com/NiyatiMPatel/SkillSwap", live: "https://skillshar.netlify.app/" },
    featured: true,
   },
  ],
 },
 {
  label: "Frontend Projects",
  projects: [
   {
    title: "SoundDZign",
    subtitle: "Performance-Optimized Homepage",
    description:
     "A React 19 homepage leveraging lazy loading, Suspense boundaries, and SCSS modules to achieve near-perfect Lighthouse scores.",
    badge: "Performance Optimization",
    badgeIcon: Zap,
    highlights: [
     "React Suspense & lazy-loaded sections",
     "Optimized Lighthouse performance",
    ],
    tech: ["React 19", "Vite", "Bootstrap", "SCSS"],
    image: sounddzignImg,
    links: { github: "https://github.com/NiyatiMPatel/soundDZign", live: "https://sounddzignn.netlify.app/" },
   },
   {
    title: "Food Order App",
    subtitle: "Restaurant Ordering Interface",
    description:
     "A context-driven restaurant ordering UI with real-time cart management, quantity adjustments, and a modal-based checkout experience.",
    badge: "State Management",
    badgeIcon: Box,
    highlights: [
     "Context API cart system",
     "Modal-based cart & checkout",
     "Dynamic quantity adjustments",
    ],
    tech: ["React", "Context API", "Fetch", "CSS Modules"],
    image: foodOrderImg,
    links: { github: "https://github.com/NiyatiMPatel/react-food-order-app", live: "https://niyatimpatel.github.io/food-order-app-project/" },
   },
   {
    title: "Expense Tracker",
    subtitle: "Financial Management Tool",
    description:
     "A React expense management app with interactive charts and chronological tracking, helping users visualize spending patterns at a glance.",
    badge: "Data Visualization",
    badgeIcon: Globe,
    highlights: [
     "Interactive expense charts",
     "Add, delete & filter expenses",
     "Responsive mobile-first layout",
    ],
    tech: ["React", "CSS Modules", "Javascript"],
    image: expenseImg,
    links: { github: "https://github.com/NiyatiMPatel/expense-tracker-app", live: "https://niyatimpatel.github.io/react-expense-tracker/" },
   },

  ],
 },
 {
  label: "Foundations",
  projects: [
   {
    title: "JS Practice Platform",
    subtitle: "Interactive Learning Exercises",
    description:
     "A collection of 11+ hands-on exercises covering core JavaScript concepts — from DOM manipulation and event handling to form validation.",
    badge: "Core JavaScript",
    badgeIcon: Cpu,
    highlights: [
     "11+ interactive exercises",
     "DOM manipulation patterns",
     "Event handling & validation",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    image: jsPracticeImg,
    links: { github: "https://github.com/NiyatiMPatel/js-assignment", live: "https://javascript-super-app.netlify.app/" },
   },
   {
    title: "E-Commerce Website",
    subtitle: "Multi-page Responsive Platform",
    description:
     "A fully responsive multi-page e-commerce site demonstrating modern layout techniques, product filtering, and interactive UI components.",
    badge: "Responsive Design",
    badgeIcon: Code2,
    highlights: [
     "Product catalog with filtering",
     "Shopping cart & wishlist",
     "Responsive Bootstrap layout",
    ],
    tech: ["HTML5", "CSS3", "Bootstrap"],
    image: ecommerceImg,
    links: { github: "https://github.com/NiyatiMPatel/assignment-2", live: "https://vendor-fashion.netlify.app/" },
   },

  ],
 },
];

// SERVICES SECTION
export const services = [
 {
  icon: Globe,
  title: "Portfolio Website Development",
  description: "Custom personal or professional websites built with modern React architecture.",
  gradient: "from-primary to-accent",
 },
 {
  icon: Rocket,
  title: "Landing Page Development",
  description: "High-performance marketing and product landing pages optimized for responsiveness and usability.",
  gradient: "from-accent to-primary",
 },
 {
  icon: LayoutDashboard,
  title: "Dashboard & Web App Development",
  description: "Interactive admin panels, data dashboards, and scalable frontend applications using React and modern state management.",
  gradient: "from-primary via-accent to-primary",
 },
];