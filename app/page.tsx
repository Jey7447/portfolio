"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Menu,
  X,
  Database,
  Globe2,
  Workflow,
  Terminal,
  Check,
} from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const projects = [
  {
    number: "01",
    title: "CarePlus Medical Centre",
    type: "Healthcare · Automation",
    description: "Appointment notifications, SMS delivery tracking, patient feedback and database workflows.",
    stack: ["Next.js", "Supabase", "n8n", "Twilio"],
    href: "/work/careplus",
    image: "/careplus/careplus-dashboard.webp",
    visual: "careplus",
    status: "System case study",
  },
  {
    number: "02",
    title: "DMDA Voting Portal",
    type: "Security · Backend",
    description: "Code-gated voting with single-use access, ballot validation and audit logging.",
    stack: ["React", "TypeScript", "Supabase", "n8n"],
    href: "/work/dmda",
    image: "/dmda/voter-auth.webp",
    visual: "dmda",
    status: "Live deployment",
  },
  {
    number: "03",
    title: "Bakery Order Tracker",
    type: "Operations · Web App",
    description: "Structured order management connected to status changes and workflow automation.",
    stack: ["TypeScript", "Web App", "Automation"],
    href: "/work/bakery",
    visual: "bakery",
    status: "System case study",
  },
  {
    number: "04",
    title: "ProductForge AI",
    type: "AI · Product",
    description: "An AI product workflow for turning structured inputs into useful product output.",
    stack: ["Next.js", "TypeScript", "AI"],
    href: "/work/productforge",
    visual: "productforge",
    status: "System case study",
  },
];

const services = [
  { icon: Globe2, number: "01", title: "FULL-STACK DEVELOPMENT", text: "Websites and applications that connect a strong interface to the data, APIs and logic underneath.", tags: ["Next.js", "TypeScript", "React", "Supabase"] },
  { icon: Workflow, number: "02", title: "AI & AUTOMATION", text: "Workflows that connect services, trigger actions and reduce repetitive operational work.", tags: ["n8n", "APIs", "Webhooks", "AI"] },
  { icon: Database, number: "03", title: "BACKEND & SYSTEMS", text: "Databases, authentication and application logic designed around reliable flows and clear ownership of data.", tags: ["PostgreSQL", "Supabase", "Auth", "SQL"] },
];

const process = [
  ["01", "UNDERSTAND", "Clarify the problem, users, constraints and what success actually means."],
  ["02", "ARCHITECT", "Map the interface, data model, integrations and automation before building."],
  ["03", "BUILD", "Develop in focused pieces, test the important paths and keep the system understandable."],
  ["04", "CONNECT", "Wire APIs, webhooks and workflows so the pieces behave like one system."],
  ["05", "REFINE", "Deploy, observe, fix friction and improve what matters."],
];

const stackGroups = [
  ["FRONTEND", "Next.js · React · TypeScript · Tailwind"],
  ["BACKEND", "Supabase · PostgreSQL · REST APIs"],
  ["AUTOMATION", "n8n · Webhooks · Twilio · Integrations"],
  ["AI", "LLM workflows · AI-assisted product features"],
];

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  if (project.image) {
    return (
      <div className="home-project-image">
        <Image src={project.image} alt={`${project.title} interface preview`} fill sizes="(max-width: 760px) 100vw, (max-width: 1200px) 92vw, 1180px" priority={project.number === "01"} />
        <div className="home-project-image-overlay" />
        <div className="home-project-image-label"><span>LIVE EVIDENCE</span><span>{project.status}</span></div>
      </div>
    );
  }

  return (
    <div className={"home-system-visual " + project.visual}>
      <div className="home-system-grid" />
      {project.visual === "dmda" && (
        <div className="home-system-stack">
          <div className="home-system-card"><span>AUTHENTICATION</span><strong>single-use access</strong><i><Check size={12} /></i></div>
          <div className="home-system-connector" />
          <div className="home-system-card offset"><span>BALLOT ENGINE</span><strong>validated submission</strong><i><Check size={12} /></i></div>
          <div className="home-system-connector" />
          <div className="home-system-card"><span>DATABASE</span><strong>auditable results</strong><i><Check size={12} /></i></div>
        </div>
      )}
      {project.visual === "bakery" && (
        <div className="home-order-board">
          <span>ORDER PIPELINE</span>
          <div><b>NEW</b><b>PREPARING</b><b>READY</b></div>
          <div className="home-order-row"><i />Birthday cake <em>12:40</em></div>
          <div className="home-order-row"><i />Pastry box <em>13:10</em></div>
          <div className="home-order-row"><i />Custom order <em>14:30</em></div>
        </div>
      )}
      {project.visual === "productforge" && (
        <div className="home-ai-flow">
          <div className="home-ai-node">IDEA</div><ArrowDown className="home-ai-arrow" />
          <div className="home-ai-node featured">STRUCTURE</div><ArrowDown className="home-ai-arrow" />
          <div className="home-ai-node">OUTPUT</div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [activeService, setActiveService] = useState(0);

  return (
    <main className="home-page">
      <div className="noise" />
      <nav className="nav home-nav">
        <a href="#top" className="brand" aria-label="Jesse Briska home">J<span>.</span></a>
        <div className="navlinks"><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#process">Process</a><a href="#contact">Contact</a></div>
        <div className="nav-actions">
          <ThemeToggle />
          <a href="#contact" className="navcta">Let&apos;s talk <ArrowUpRight size={15} /></a>
          <button className="menubtn" onClick={() => setMenu(!menu)} aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu}>{menu ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </nav>

      {menu && <div className="mobilemenu home-mobilemenu"><a href="#work" onClick={() => setMenu(false)}>Work</a><a href="#services" onClick={() => setMenu(false)}>Services</a><a href="#about" onClick={() => setMenu(false)}>About</a><a href="#process" onClick={() => setMenu(false)}>Process</a><a href="#contact" onClick={() => setMenu(false)}>Contact</a></div>}

      <section id="top" className="home-hero wrap">
        <div className="home-hero-topline"><span><i className="home-status-dot" /> AVAILABLE FOR SELECTED PROJECTS</span><span>PORTFOLIO / 2026</span></div>
        <div className="home-hero-grid">
          <div className="home-hero-copy">
            <motion.p className="home-hero-intro" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>Jesse Briska · Software · Automation · Systems</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }}>I build<br /><em>digital systems</em><br />that work.</motion.h1>
            <div className="home-hero-actions"><a className="home-button" href="#work">View selected work <ArrowDown size={16} /></a><a className="home-textlink" href="#contact">Let&apos;s talk <ArrowUpRight size={16} /></a></div>
          </div>
          <div className="home-hero-aside">
            <div className="home-hero-note"><span>WHAT I DO</span><p>Full-stack development, AI automation and backend systems for people and businesses that need useful software — not just a pretty screen.</p></div>
            <div className="home-hero-diagram">
              <div className="home-diagram-label">SYSTEM / 001</div><div className="home-diagram-line" />
              <div className="home-diagram-node main">BUILD</div><div className="home-diagram-branch branch-a">AUTOMATE</div><div className="home-diagram-branch branch-b">CONNECT</div><div className="home-diagram-branch branch-c">SHIP</div>
              <span className="home-diagram-orbit orbit-a" /><span className="home-diagram-orbit orbit-b" />
            </div>
          </div>
        </div>
        <div className="home-hero-meta"><span>01 — BUILD</span><span>02 — AUTOMATE</span><span>03 — CONNECT</span><span>04 — SHIP</span></div>
      </section>

      <div className="home-marquee"><div>SOFTWARE <span>✦</span> AUTOMATION <span>✦</span> SYSTEMS <span>✦</span> SOFTWARE <span>✦</span> AUTOMATION <span>✦</span> SYSTEMS <span>✦</span></div></div>

      <section id="work" className="home-section wrap">
        <div className="home-section-head"><div><span className="home-kicker">SELECTED WORK / 04</span><h2>Proof over promises.</h2></div><p>Projects built around real requirements, data, workflows and constraints. Start with a case study and go deeper into the system.</p></div>
        <div className="home-projects">
          {projects.map((project, i) => (
            <motion.article className={"home-project " + (i === 0 ? "home-project-featured" : i === 3 ? "home-project-productforge" : "home-project-standard")} key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.55, delay: i * 0.06 }}>
              <div className="home-project-head"><span>{project.number} / {project.type}</span><a href={project.href}>CASE STUDY <ArrowUpRight size={14} /></a></div>
              <ProjectVisual project={project} />
              <div className="home-project-info"><div><h3>{project.title}</h3><p>{project.description}</p></div><div className="home-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="services" className="home-dark-section">
        <div className="wrap home-section">
          <div className="home-section-head"><div><span className="home-kicker">CAPABILITIES</span><h2>What I build.</h2></div><p>Three connected disciplines. One goal: make the system useful, understandable and easier to operate.</p></div>
          <div className="home-services">
            {services.map((service, i) => {
              const Icon = service.icon;
              const open = activeService === i;
              return (
                <div className={open ? "home-service open" : "home-service"} key={service.title}>
                  <button id={`service-trigger-${i}`} onClick={() => setActiveService(open ? -1 : i)} aria-expanded={open} aria-controls={`service-detail-${i}`}><span className="home-service-number">{service.number}</span><span className="home-service-icon"><Icon size={19} /></span><strong>{service.title}</strong><ArrowUpRight className="home-service-arrow" size={21} /></button>
                  <div id={`service-detail-${i}`} className="home-service-detail"><p>{service.text}</p><div>{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="home-section wrap">
        <div className="home-section-head home-process-head"><div><span className="home-kicker">HOW I WORK</span><h2>From problem<br />to production.</h2></div><p>A clear process keeps technical decisions connected to the outcome. No black box, no unnecessary complexity.</p></div>
        <div className="home-process-list">
          {process.map((item, i) => (
            <motion.div className="home-process-row" key={item[0]} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p>{i < process.length - 1 && <ArrowDown size={16} />}
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="home-about wrap">
        <div><span className="home-kicker">A LITTLE ABOUT ME</span><h2>Engineering taught me to think in systems. Software gave me another medium to build them.</h2></div>
        <div className="home-about-copy"><p>I work across interfaces, databases, APIs and automation — looking at the whole flow instead of treating each piece as a separate task.</p><p>I care about clean structure, useful interactions and systems that can actually be understood after they ship.</p><div className="home-stack">{stackGroups.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><div className="home-identity"><span>JESSE BRISKA</span><strong>Software · Automation · Systems</strong><small>Mechanical Engineering · University of Jos</small></div></div>
      </section>

      <section id="contact" className="home-contact wrap">
        <div className="home-contact-copy"><span className="home-kicker">HAVE A PROJECT IN MIND?</span><h2>Let&apos;s build<br /><em>something useful.</em></h2><p>Tell me what you&apos;re trying to build, automate or improve. We can turn the idea into a clear technical path.</p></div>
        <div className="home-contact-card"><div className="home-contact-top"><Terminal size={17} /><span>START A CONVERSATION</span></div><a className="home-contact-link" href="mailto:jessebriska2@gmail.com">jessebriska2@gmail.com <ArrowUpRight size={18} /></a><div className="home-socials"><a href="https://github.com/Jey7447" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href="https://www.linkedin.com/in/briska-jesse-a8b864322/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href="https://x.com/JBART7447" target="_blank" rel="noreferrer"><span aria-hidden="true" className="home-x-icon">𝕏</span> X</a><a href="https://wa.me/2349033019841" target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a><a href="#work"><ArrowDown size={16} /> View work</a></div></div>
      </section>

      <footer className="home-footer wrap"><span>© 2026 Jesse Briska. Built with intent.</span><span>Software · Automation · Systems</span><a href="#top">Back to top <ArrowUpRight size={14} /></a></footer>
    </main>
  );
}
