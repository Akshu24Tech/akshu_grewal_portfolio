/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import {
  Code2,
  Cpu,
  Globe,
  Layers,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
  ExternalLink,
  Terminal,
  BrainCircuit,
  Workflow,
  Palette
} from "lucide-react";
import { useRef } from "react";
// import { RemotionPlayer } from "./components/RemotionPlayer";

const SKILLS = [
  {
    name: "AI & LLM Orchestration",
    icon: <BrainCircuit className="w-5 h-5" />,
    items: ["LangGraph", "Agentic Workflows", "RAG Systems", "Human-in-the-Loop"]
  },
  {
    name: "Machine Learning",
    icon: <Cpu className="w-5 h-5" />,
    items: ["Neural Networks", "Transformers", "Scikit-learn", "TensorFlow", "PyTorch"]
  },
  {
    name: "Automation & Tools",
    icon: <Workflow className="w-5 h-5" />,
    items: ["n8n", "Zapier", "Streamlit", "Git/GitHub", "SQL"]
  },
  {
    name: "Design & UI/UX",
    icon: <Palette className="w-5 h-5" />,
    items: ["Figma", "Adobe Creative Suite", "Canva", "UI/UX Strategy"]
  },
];

const PROJECTS = [
  {
    title: "Autonomous Coding Agent",
    description: "A Python-based agent using LangGraph capable of writing, executing, and self-debugging code with built-in safety layers.",
    tags: ["Python", "LangGraph", "Agentic AI"],
    image: "https://picsum.photos/seed/coding-agent/800/600",
    github: "https://github.com/Akshu24Tech/Lang-Graph/tree/main/voice-chatbot-hitl"
  },
  {
    title: "Second Hand Sniper",
    description: "Multi-agent orchestration system developed for a Google x Kaggle event to automate discovery and evaluation of product deals.",
    tags: ["Multi-Agent", "LLMs", "Python"],
    image: "https://picsum.photos/seed/sniper/800/600",
    github: "https://github.com/Akshu24Tech/Capstone-Agent"
  },
  {
    title: "AI Travel Planner",
    description: "Integrated multiple APIs via n8n and Lovable.ai to create an automated, real-world itinerary generator.",
    tags: ["n8n", "Automation", "APIs"],
    image: "https://picsum.photos/seed/travel/800/600",
    github: "#"
  }
];

const EXPERIENCE = [
  {
    role: "Graphic and Design Lead",
    company: "GDG on Campus Gurugram University",
    period: "Sept 2024 - Present",
    desc: "Spearheading technical strategy and branding for AI/ML initiatives, bridging community engagement and technical execution."
  },
  {
    role: "AI Intern",
    company: "Mirai School of Technology",
    period: "July 2025 - Aug 2025",
    desc: "Architected an Autonomous AI Travel Planner using n8n and Lovable.ai, automating complex itinerary generation."
  },
  {
    role: "AI Intern",
    company: "AD Infosys",
    period: "May 2025 - June 2025",
    desc: "Implemented Machine Learning algorithms for specific business use-cases and worked with real-world datasets."
  }
];

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Background Animation & Video Overlay */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505] z-10" />

        {/* Video Background - Inspired by user upload */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          {/* Subtle overlay to ensure text legibility */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Remotion AI Layer Removed */}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-serif text-2xl font-light tracking-widest"
        >
          AKSHU
        </motion.div>
        <div className="flex gap-8 text-xs uppercase tracking-[0.2em] font-medium">
          {["Work", "Skills", "Contact"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="hover:text-white transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [0, 1, -1, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/40 mb-4 block">
              AI Engineer | Agentic Systems & RAG
            </span>
            <h1 className="font-serif text-6xl md:text-8xl font-light tracking-tighter mb-6 text-glow">
              Akshu <br />
              <span className="italic">Grewal</span>
            </h1>
            <p className="max-w-2xl mx-auto text-white/60 font-light leading-relaxed text-sm md:text-base mb-12">
              I don’t just train models; I build intelligent systems that reason, act, and solve complex problems autonomously.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <a
                href="#work"
                className="inline-block px-10 py-4 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-500 font-mono text-xs uppercase tracking-[0.3em] rounded-sm"
              >
                Explore My Work
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[8px] uppercase tracking-widest text-white/20">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 text-white/20 animate-bounce" />
        </motion.div>
      </section>

      {/* Work Section */}
      <section id="work" className="relative z-20 py-32 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-5xl md:text-6xl font-light mb-6 italic">Key Projects</h2>
            <p className="text-white/50 font-light">Engineering the next generation of autonomous AI agents and LLM-powered systems.</p>
          </div>
          <div className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
            01 / Projects
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[8px] uppercase tracking-widest px-2 py-1 border border-white/20 rounded-full bg-black/40 backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white hover:text-black transition-all duration-300 text-[10px] font-mono uppercase tracking-widest border border-white/10"
                    >
                      <Github className="w-3 h-3" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="font-serif text-2xl font-light mb-2 group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
              <p className="text-white/40 text-sm font-light leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative z-20 py-32 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
            <h2 className="font-serif text-5xl md:text-6xl font-light italic">Experience</h2>
            <div className="font-mono text-[10px] text-white/20 uppercase tracking-widest">02 / Journey</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l border-white/10 pl-8 py-4"
              >
                <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-2 block">{exp.period}</span>
                <h3 className="font-serif text-2xl font-light mb-1">{exp.role}</h3>
                <h4 className="text-white/40 text-sm mb-4 uppercase tracking-wider">{exp.company}</h4>
                <p className="text-white/50 font-light text-sm leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-20 py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl font-light mb-8 italic">Technical <br />Expertise</h2>
              <p className="text-white/50 font-light max-w-md mb-12">
                Bridging the gap between complex AI backends and intuitive human-centric design.
              </p>
              <div className="flex gap-6">
                <div className="flex flex-col">
                  <span className="font-serif text-4xl italic">B.Tech</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">CSE (AI)</span>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="flex flex-col">
                  <span className="font-serif text-4xl italic">GDG</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">Campus Lead</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SKILLS.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 glass rounded-2xl hover:bg-white/[0.08] transition-colors group"
                >
                  <div className="mb-4 text-white/40 group-hover:text-white transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="font-medium text-sm uppercase tracking-widest mb-4">{skill.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map(item => (
                      <span key={item} className="text-[10px] text-white/40 font-mono">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-20 py-32 px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-6xl md:text-8xl font-light mb-12 italic">Let's Connect</h2>
          <p className="text-white/50 font-light max-w-lg mx-auto mb-16">
            Seeking AI Engineering internships and collaborations in autonomous systems.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-20">
            <a href="mailto:akshug2004@gmail.com" className="group flex items-center gap-3 text-lg font-light hover:text-white transition-colors">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <Mail className="w-5 h-5" />
              </div>
              <span>akshug2004@gmail.com</span>
            </a>
          </div>

          <div className="flex justify-center gap-12 border-t border-white/5 pt-20">
            {[
              { icon: <Github />, label: "GitHub", url: "https://github.com/Akshu24Tech" },
              { icon: <Linkedin />, label: "LinkedIn", url: "https://www.linkedin.com/in/akshu-grewal" },
              { icon: <Twitter />, label: "Twitter", url: "https://share.google/OGleSwV4XzbtCCuU0" }
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-white/20 hover:text-white transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 py-12 px-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
          © 2024 Akshu Grewal — AI Engineer
        </div>
        <div className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
          Haryana, India
        </div>
      </footer>
    </div>
  );
}
