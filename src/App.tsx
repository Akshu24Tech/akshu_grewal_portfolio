/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import {
  Cpu,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
  BrainCircuit,
  Workflow,
  Palette,
  Zap,
} from "lucide-react";
import { useRef } from "react";

const SKILLS = [
  {
    name: "AI & LLM Orchestration",
    icon: <BrainCircuit className="w-5 h-5" />,
    items: ["LangGraph", "Agentic Workflows", "RAG Systems", "Human-in-the-Loop"],
  },
  {
    name: "Machine Learning",
    icon: <Cpu className="w-5 h-5" />,
    items: ["Neural Networks", "Transformers", "Scikit-learn", "TensorFlow", "PyTorch"],
  },
  {
    name: "Automation & Tools",
    icon: <Workflow className="w-5 h-5" />,
    items: ["n8n", "Zapier", "Streamlit", "Git/GitHub", "SQL"],
  },
  {
    name: "Design & UI/UX",
    icon: <Palette className="w-5 h-5" />,
    items: ["Figma", "Adobe Creative Suite", "Canva", "UI/UX Strategy"],
  },
];

const PROJECTS = [
  {
    title: "Finance Advisor Agent",
    description:
      "Orchestrated specialized sub-agents via Google ADK to deliver personalized, risk-aware investment recommendations using Gemini's reasoning.",
    tags: ["Google ADK", "Python", "Multi-Agent", "Gemini"],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800&h=600",
    github: "https://github.com/Akshu24Tech/google_adk/tree/main/finance_advisor",
  },
  {
    title: "Voice-Enabled HITL Coding Agent",
    description:
      "Voice-first assistant with a self-correcting code agent. Features dual memory and LangGraph HITL interrupt gates for human approval.",
    tags: ["LangGraph", "Deepgram", "Streamlit", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800&h=600",
    github: "https://github.com/Akshu24Tech/Lang-Graph/tree/main/voice-chatbot-hitl",
  },
  {
    title: "Universal Self-RAG Pipeline",
    description:
      "Self-Reflective RAG that autonomously decides when to retrieve vs. answer directly, with automated query rewriting on retrieval failure.",
    tags: ["LangGraph", "RAG", "Vector DBs"],
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800&h=600",
    github: "https://github.com/Akshu24Tech/Self-RAG",
  },
  {
    title: "Second-Hand Sniper",
    description:
      "3-agent pipeline that monitors marketplaces and auto-drafts negotiation messages. Built during Google × Kaggle AI Agents Intensive.",
    tags: ["Multi-Agent", "Python", "Hackathon"],
    image: "https://picsum.photos/seed/sniper/800/600",
    github: "https://github.com/Akshu24Tech/Capstone-Agent",
  },
];

const EXPERIENCE = [
  {
    role: "AI Intern",
    company: "Mirai School of Technology",
    period: "Jul 2025 – Aug 2025",
    desc: "Architected an Autonomous AI Travel Planner using n8n and Lovable.ai. Designed automation logic and delivered human-in-the-loop oversight workflows.",
  },
  {
    role: "AI/ML Intern",
    company: "AD Infocom Systems",
    period: "May 2025 – Jun 2025",
    desc: "Implemented supervised ML algorithms tailored to business use-cases and contributed to enterprise-level AI pipelines.",
  },
  {
    role: "Graphic and Design Lead",
    company: "GDG on Campus Gurugram University",
    period: "Sept 2024 – Present",
    desc: "Spearheading technical strategy and branding for AI/ML initiatives, bridging community engagement and technical execution.",
  },
];

/** Reusable boxed section label used on every section header */
function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-3 mb-6">
      <span className="section-index">{index}</span>
      <span className="section-tag">{label}</span>
    </div>
  );
}

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen">

      {/* ── Noise overlay (skill design system) ── */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* ── Fixed video background ── */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/30 to-[#050505] z-10" />
        <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
          <video
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      </div>

      {/* ── Floating pill navbar ── */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 px-6 py-3 flex items-center gap-8 pill-nav">
        <span className="font-serif text-lg font-light tracking-widest text-white mr-4">AKSHU</span>
        {["Work", "Skills", "Contact"].map((item, i) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors hover:-translate-y-px"
          >
            {item}
          </motion.a>
        ))}
        <a
          href="mailto:akshug2004@gmail.com"
          className="ml-4 px-4 py-1.5 rounded-full bg-[#C9A84C] text-black text-[10px] font-mono uppercase tracking-widest hover:scale-[1.03] transition-transform"
        >
          Hire Me
        </a>
      </nav>

      {/* ── Hero ── */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 0.8, -0.8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/40 mb-4 block">
              AI Engineer · Agentic Systems · RAG
            </span>
            <h1 className="font-serif text-6xl md:text-8xl font-light tracking-tighter mb-6 text-glow">
              Akshu <br />
              <span className="italic text-[#C9A84C]">Grewal</span>
            </h1>
            <p className="max-w-2xl mx-auto text-white/60 font-light leading-relaxed text-sm md:text-base mb-12">
              I don't just train models — I build intelligent systems that reason, act, and solve complex problems autonomously.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <a
                href="#work"
                className="cta-btn"
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

      {/* ── Work / Projects ── */}
      <section id="work" className="relative z-20 py-32 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <SectionLabel index="01" label="Projects" />
            <h2 className="section-heading">Key Projects</h2>
            <p className="text-white/50 font-light mt-4">
              Engineering the next generation of autonomous AI agents and LLM-powered systems.
            </p>
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
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-70" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap justify-between items-end gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[8px] uppercase tracking-widest px-2 py-1 border border-[#C9A84C]/40 rounded-full bg-black/40 backdrop-blur-sm text-[#C9A84C]/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
              <h3 className="font-serif text-2xl font-light mb-2 group-hover:translate-x-2 transition-transform duration-500">
                {project.title}
              </h3>
              <p className="text-white/40 text-sm font-light leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="relative z-20 py-32 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
            <div>
              <SectionLabel index="02" label="Journey" />
              <h2 className="section-heading">Experience</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="exp-card group"
              >
                <span className="font-mono text-[10px] text-[#C9A84C]/60 uppercase tracking-widest mb-2 block">
                  {exp.period}
                </span>
                <h3 className="font-serif text-2xl font-light mb-1 group-hover:text-[#C9A84C] transition-colors duration-300">
                  {exp.role}
                </h3>
                <h4 className="text-white/40 text-sm mb-4 uppercase tracking-wider">{exp.company}</h4>
                <p className="text-white/50 font-light text-sm leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="relative z-20 py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionLabel index="03" label="Expertise" />
              <h2 className="section-heading">Technical<br />Expertise</h2>
              <p className="text-white/50 font-light max-w-md mt-4 mb-12">
                Bridging complex AI backends with intuitive, human-centric design.
              </p>
              <div className="flex gap-6">
                <div className="flex flex-col">
                  <span className="font-serif text-4xl italic text-[#C9A84C]">B.Tech</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">CSE (AI)</span>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="flex flex-col">
                  <span className="font-serif text-4xl italic text-[#C9A84C]">GDG</span>
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
                  className="skill-card group"
                >
                  <div className="mb-4 text-[#C9A84C]/60 group-hover:text-[#C9A84C] transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="font-medium text-sm uppercase tracking-widest mb-4 text-white/80">
                    {skill.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-[#C9A84C]/20 text-[#C9A84C]/60 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors cursor-default"
                      >
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

      {/* ── Manifesto strip (from skill) ── */}
      <section className="relative z-20 py-24 overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-[#0D0D12]" />
        <div className="relative max-w-5xl mx-auto px-8 text-center">
          <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">
            Most AI portfolios show you what someone did.
          </p>
          <p className="font-serif text-4xl md:text-6xl font-light italic leading-tight">
            Mine shows you what I can do for{" "}
            <span className="text-[#C9A84C]">your product.</span>
          </p>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="relative z-20 py-32 px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionLabel index="04" label="Get in Touch" />
          <h2 className="section-heading text-6xl md:text-8xl mx-auto">Let's Connect</h2>
          <p className="text-white/50 font-light max-w-lg mx-auto mt-6 mb-16">
            Seeking AI Engineering internships and collaborations in autonomous systems.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-20">
            <a
              href="mailto:akshug2004@gmail.com"
              className="group flex items-center gap-3 text-lg font-light hover:text-white transition-colors hover:-translate-y-px"
            >
              <div className="w-12 h-12 rounded-full border border-[#C9A84C]/30 flex items-center justify-center group-hover:bg-[#C9A84C] group-hover:text-black group-hover:border-[#C9A84C] transition-all duration-500">
                <Mail className="w-5 h-5" />
              </div>
              <span>akshug2004@gmail.com</span>
            </a>
          </div>

          <div className="flex justify-center gap-12 border-t border-white/5 pt-20">
            {[
              { icon: <Github />, label: "GitHub", url: "https://github.com/Akshu24Tech" },
              { icon: <Linkedin />, label: "LinkedIn", url: "https://www.linkedin.com/in/akshu-grewal" },
              { icon: <Twitter />, label: "Twitter", url: "https://share.google/OGleSwV4XzbtCCuU0" },
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-white/20 hover:text-[#C9A84C] hover:-translate-y-px transition-all duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-20 py-10 px-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 rounded-t-[3rem] bg-[#0D0D12]">
        <div className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
          © 2026 Akshu Grewal — AI Engineer
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">Available for Work</span>
        </div>
        <div className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
          Haryana, India
        </div>
      </footer>
    </div>
  );
}
