import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Database, GitBranch, Workflow } from "lucide-react";

const cases = {
  careplus: {
    number: "01",
    type: "Healthcare automation system",
    title: "CarePlus Medical Centre",
    intro: "A connected appointment and patient-communication system built around automation, delivery tracking and structured clinical operations.",
    stack: ["Next.js", "Supabase", "PostgreSQL", "n8n", "Twilio"],
    repo: "https://github.com/Jey7447/careplus-medical-centre",
    problem: "Appointment communication involves several moving parts: patient records, appointment timing, notifications, delivery status and feedback. The project focuses on connecting those pieces into a traceable workflow instead of treating each message as an isolated action.",
    built: [
      "Appointment and patient-facing web interfaces",
      "Supabase/PostgreSQL data model for operational records",
      "n8n orchestration for appointment notifications",
      "Twilio delivery-status tracking for sent, delivered, failed and undelivered messages",
      "Patient feedback notification workflow and database updates"
    ],
    architecture: ["Appointment data", "n8n orchestration", "Twilio", "Supabase / PostgreSQL", "Feedback workflow"],
    note: "The portfolio describes the system that was built and tested during development; it does not claim a production deployment or clinical outcome."
  },
  dmda: {
    number: "02",
    type: "Secure voting platform",
    title: "DMDA Voting Portal",
    intro: "A code-gated election platform designed around single-use voter access, ballot validation and database-backed election rules.",
    stack: ["Next.js", "Supabase", "PostgreSQL", "n8n"],
    repo: null,
    problem: "The portal needed to restrict participation to registered voters, prevent reuse of voting access, validate ballots and keep election state consistent at the database layer.",
    built: [
      "Voter credential and access-code flow",
      "Single-use voting sessions",
      "Ballot validation against positions and candidates",
      "Database routines for authentication, ballot submission and results",
      "Election open/close state and participation controls",
      "Audit-oriented database structure"
    ],
    architecture: ["Voter access code", "Authentication routine", "Voting session", "Ballot validation", "PostgreSQL"],
    note: "The repository is private, so implementation details are summarized here without exposing the source."
  },
  bakery: {
    number: "03",
    type: "Operations web app",
    title: "Bakery Order Tracker",
    intro: "A practical order-management system focused on turning incoming bakery orders into a clearer, trackable operational workflow.",
    stack: ["TypeScript", "Web App", "Automation"],
    repo: "https://github.com/Jey7447/brendas-bakery-order-tracker",
    problem: "Order information becomes difficult to manage when it is scattered across manual updates and disconnected steps. This project focuses on giving the workflow a structured place to capture, track and update orders.",
    built: [
      "Order-focused web interface",
      "Structured order data and status tracking",
      "Operational workflow for moving orders through stages",
      "Automation-oriented architecture for reducing manual updates"
    ],
    architecture: ["Incoming order", "Structured record", "Status workflow", "Operations view"],
    note: "The project is presented as implementation work, without inventing business performance metrics that have not been measured."
  }
} as const;

type CaseKey = keyof typeof cases;

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = cases[slug as CaseKey];

  if (!project) {
    return (
      <main className="case-page">
        <div className="case-wrap">
          <Link href="/" className="backlink"><ArrowLeft size={16} /> Back home</Link>
          <h1>Case study not found.</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="case-page">
      <nav className="case-nav">
        <Link href="/" className="brand">J<span>.</span></Link>
        <Link href="/#work" className="backlink"><ArrowLeft size={15} /> Selected work</Link>
      </nav>

      <header className="case-hero case-wrap">
        <span className="kicker">{project.number} / {project.type}</span>
        <h1>{project.title}</h1>
        <p>{project.intro}</p>
        <div className="case-actions">
          {project.repo ? (
            <a href={project.repo} target="_blank" rel="noreferrer" className="case-button">
              Repository <ArrowUpRight size={16} />
            </a>
          ) : (
            <span className="case-private">Private repository</span>
          )}
          <Link href="/#contact" className="case-textlink">Discuss a project <ArrowUpRight size={16} /></Link>
        </div>
      </header>

      <section className="case-visual case-wrap">
        <div className="case-grid" />
        <div className="case-console">
          <div className="case-console-bar"><i /><i /><i /></div>
          <div className="case-console-body">
            <span>~/systems/{slug}</span>
            <b><CheckCircle2 size={13} /> system architecture</b>
            <div className="architecture-line">
              {project.architecture.map((item, index) => (
                <span key={item}>{item}{index < project.architecture.length - 1 ? " → " : ""}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="case-content case-wrap">
        <div className="case-main">
          <article>
            <span className="kicker">THE PROBLEM</span>
            <h2>Start with the constraint.</h2>
            <p>{project.problem}</p>
          </article>

          <article>
            <span className="kicker">WHAT I BUILT</span>
            <h2>From interface to infrastructure.</h2>
            <ul className="case-list">
              {project.built.map((item) => (
                <li key={item}><CheckCircle2 size={17} /> <span>{item}</span></li>
              ))}
            </ul>
          </article>

          <article>
            <span className="kicker">SYSTEM FLOW</span>
            <h2>How the pieces connect.</h2>
            <div className="flow">
              {project.architecture.map((item, index) => (
                <div className="flow-item" key={item}>
                  <span>0{index + 1}</span>
                  <strong>{item}</strong>
                  {index < project.architecture.length - 1 && <ArrowUpRight size={15} />}
                </div>
              ))}
            </div>
          </article>
        </div>

        <aside className="case-aside">
          <div className="aside-card">
            <span className="kicker">STACK</span>
            <div className="case-tags">
              {project.stack.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div className="aside-card">
            <span className="kicker">SYSTEM LAYERS</span>
            <div className="layer"><Workflow size={17} /><span>Workflow orchestration</span></div>
            <div className="layer"><Database size={17} /><span>Data & application state</span></div>
            <div className="layer"><GitBranch size={17} /><span>Integration & delivery</span></div>
          </div>
          <div className="aside-note">{project.note}</div>
        </aside>
      </section>

      <footer className="case-footer case-wrap">
        <Link href="/#work"><ArrowLeft size={15} /> Back to selected work</Link>
        <span>Jesse Briska · Software · Automation · Systems</span>
      </footer>
    </main>
  );
}
