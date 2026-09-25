"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Check, Cpu, Workflow, Database, Globe2, Terminal, Sparkles } from "lucide-react";
import { useState } from "react";

const projects = [
  { number: "01", title: "CarePlus Medical Centre", type: "Healthcare automation system", description: "A connected appointment and patient-communication system that orchestrates notifications, delivery status, feedback, and database updates.", stack: ["Next.js", "Supabase", "PostgreSQL", "n8n", "Twilio"], accent: "lime" },
  { number: "02", title: "DMDA Voting Portal", type: "Secure voting platform", description: "A code-gated voting experience with one-vote participation rules, session controls, ballot validation, and database-backed election logic.", stack: ["Next.js", "Supabase", "PostgreSQL", "n8n"], accent: "blue" },
  { number: "03", title: "Bakery Order Tracker", type: "Operations web app", description: "A practical order-management workflow designed to turn incoming bakery orders into a clearer operational process.", stack: ["TypeScript", "Web App", "Automation"], accent: "orange" },
  { number: "04", title: "VoiceStudioJey", type: "AI voice product", description: "An AI-focused product experience exploring voice workflows, product UX, and production-ready deployment patterns.", stack: ["TypeScript", "AI", "Next.js"], accent: "violet" },
];

const services = [
  { icon: Globe2, title: "Web Development", text: "Fast, responsive websites and web applications built around real business requirements." },
  { icon: Workflow, title: "AI & Automation", text: "Workflow systems, API integrations and AI-assisted processes that remove repetitive work." },
  { icon: Database, title: "Backend & Systems", text: "Reliable databases, authentication, APIs and application architecture that can grow with the product." },
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  return (
    <main>
      <div className="noise" />
      <nav className="nav"><a href="#top" className="brand">J<span>.</span></a><div className="navlinks"><a href="#work">Work</a><a href="#services">Services</a><a href="#process">Process</a><a href="#contact">Contact</a></div><a href="#contact" className="navcta">Let&apos;s talk <ArrowUpRight size={15}/></a><button className="menubtn" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">{menu?<X/>:<Menu/>}</button></nav>
      {menu && <div className="mobilemenu"><a href="#work" onClick={()=>setMenu(false)}>Work</a><a href="#services" onClick={()=>setMenu(false)}>Services</a><a href="#process" onClick={()=>setMenu(false)}>Process</a><a href="#contact" onClick={()=>setMenu(false)}>Contact</a></div>}

      <section id="top" className="hero wrap">
        <div className="eyebrow"><span className="dot"/> AVAILABLE FOR SELECTED PROJECTS <span className="line"/> LAGOS · NIGERIA</div>
        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7}}>I build digital<br/><em>systems</em> that work.</motion.h1>
        <div className="hero-bottom"><p>Full-stack development, AI automation and backend systems for businesses that need more than a pretty interface.</p><div className="hero-actions"><a className="button primary" href="#work">Explore the work <ArrowDown size={16}/></a><a className="textlink" href="#contact">Start a project <ArrowUpRight size={16}/></a></div></div>
        <div className="hero-grid"><div><span>01</span><strong>BUILD</strong></div><div><span>02</span><strong>AUTOMATE</strong></div><div><span>03</span><strong>SHIP</strong></div></div>
      </section>

      <section className="marquee"><div>SOFTWARE <span>✦</span> AUTOMATION <span>✦</span> SYSTEMS <span>✦</span> SOFTWARE <span>✦</span> AUTOMATION <span>✦</span> SYSTEMS <span>✦</span></div></section>

      <section id="work" className="section wrap"><div className="sectionhead"><div><span className="kicker">SELECTED WORK</span><h2>Proof over promises.</h2></div><p>Real systems, real constraints, real implementation. Each project is a look at how I approach problems from interface to infrastructure.</p></div>
        <div className="projects">{projects.map((p,i)=><motion.article className={`project ${p.accent}`} key={p.title} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{delay:i*.08}}><div className="projecttop"><span>{p.number} / CASE STUDY</span><ArrowUpRight size={18}/></div><div className="projectvisual"><div className="gridbg"/><div className="terminal"><div className="termbar"><span/><span/><span/></div><div className="termbody"><span>~/systems/{p.title.toLowerCase().replaceAll(" ","-")}</span><b>● operational</b><div className="pulse"/></div></div></div><div className="projectinfo"><div><span className="projecttype">{p.type}</span><h3>{p.title}</h3></div><p>{p.description}</p></div><div className="tags">{p.stack.map(s=><span key={s}>{s}</span>)}</div></motion.article>)}</div>
      </section>

      <section id="services" className="section dark"><div className="wrap"><div className="sectionhead"><div><span className="kicker">CAPABILITIES</span><h2>What I build.</h2></div><p>Technology is the tool. The goal is a system that makes the business easier to run.</p></div><div className="services">{services.map((s,i)=>{const Icon=s.icon;return <motion.div className="service" key={s.title} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.1}}><div className="serviceicon"><Icon size={22}/></div><div><span>0{i+1}</span><h3>{s.title}</h3><p>{s.text}</p></div><ArrowUpRight className="servicearrow"/></motion.div>})}</div></div></section>

      <section id="process" className="section wrap process"><div className="sectionhead"><div><span className="kicker">HOW I WORK</span><h2>From problem<br/>to production.</h2></div><p>A clear process keeps technical decisions connected to the outcome. No black box, no unnecessary complexity.</p></div><div className="steps">{[["01","Understand","Start with the problem, the users and the business constraint."],["02","Design","Map the experience, data and system architecture before building."],["03","Build","Develop the product in small, testable pieces with the right tools."],["04","Automate","Connect services, APIs and workflows where manual work can disappear."],["05","Ship","Deploy, verify and improve based on what happens in the real world."]].map((s,i)=><div className="step" key={s[0]}><span>{s[0]}</span><div><h3>{s[1]}</h3><p>{s[2]}</p></div>{i<4&&<ArrowDown className="stepicon" size={18}/>}</div>)}</div></section>

      <section className="manifesto"><div className="wrap"><Terminal size={28}/><h2>Good software should feel<br/><span>obvious.</span></h2><p>Complexity belongs behind the interface — not in the experience.</p></div></section>

      <section id="contact" className="contact wrap"><div className="contactcopy"><span className="kicker">HAVE A PROBLEM WORTH SOLVING?</span><h2>Let&apos;s build<br/><em>something useful.</em></h2><p>Tell me what you&apos;re trying to build, automate or improve. I&apos;ll help turn the idea into a clear technical path.</p></div><div className="contactcard"><div className="contactcardtop"><Sparkles size={18}/><span>START A CONVERSATION</span></div><a href="mailto:hello@jesse.dev" className="email">hello@jesse.dev <ArrowUpRight/></a><div className="socials"><a href="https://github.com/Jey7447" target="_blank"><Github size={17}/> GitHub</a><a href="#"><Linkedin size={17}/> LinkedIn</a><a href="mailto:hello@jesse.dev"><Mail size={17}/> Email</a></div></div></section>

      <footer className="footer wrap"><span>© 2026 Jesse. Built with intent.</span><span>Software · Automation · Systems</span><a href="#top">Back to top <ArrowUpRight size={14}/></a></footer>
    </main>
  );
}
