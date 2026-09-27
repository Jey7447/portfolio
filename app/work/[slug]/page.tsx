import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Database, GitBranch, Workflow } from "lucide-react";
import CaseStudyInteractive from "@/components/case-study-interactive";
import CaseHeroSlideshow from "@/components/case-hero-slideshow";
import InteractiveSystemFlow from "@/components/interactive-system-flow";

const cases = {
  careplus: {
    number: "01",
    type: "Healthcare automation system",
    title: "CarePlus Medical Centre",
    intro: "A connected appointment and patient-communication system built around automation, delivery tracking and structured clinical operations.",
    brief: {
      problem: "Imagine running a medical centre where patient information, doctors, appointments, notifications and feedback all have to be kept up to date every day. When those records live in different places or depend too much on manual follow-up, it becomes difficult for the people running the centre to know what is happening at a glance. An appointment can be scheduled, a patient may need a reminder, a doctor may need to be notified, and later the patient may need to receive a feedback request. The real need was not simply another website. It was a central place for the team to keep operational information organised and a system that could help move important tasks forward without someone having to remember every step.",
      solution: "I approached the project as an operations system rather than just a collection of pages. The centre gets a structured place to manage patients, doctors and appointments, while the communication side is connected to those records. When an appointment reaches the right point, the system can prepare the appropriate notifications, keep track of whether messages were sent or delivered, and record what happened afterwards. Feedback requests can also be picked up as part of the wider process. The result is a clearer picture of the patient journey and the work around each appointment, giving the people operating the centre a more organised foundation to work from."
    },
    stack: ["Next.js", "Supabase", "PostgreSQL", "n8n", "Twilio"],
    repo: "https://github.com/Jey7447/careplus-medical-centre",
    problem: "Appointment communication involves several moving parts: patient records, appointment timing, notifications, delivery status and feedback. The project focuses on connecting those pieces into a traceable workflow instead of treating each message as an isolated action.",
    problemHeading: "Connect the moving parts.",
    builtHeading: "Turn the workflow into a traceable system.",
    built: [
      "Appointment and patient-facing web interfaces",
      "Supabase/PostgreSQL data model for operational records",
      "n8n orchestration for appointment notifications",
      "Twilio delivery-status tracking for sent, delivered, failed and undelivered messages",
      "Patient feedback notification workflow and database updates"
    ],
    architecture: ["Appointment data", "n8n orchestration", "Twilio", "Supabase / PostgreSQL", "Feedback workflow"],
    architectureLabels: ["DATA", "ORCHESTRATION", "DELIVERY", "STATE", "FEEDBACK"],
    note: "The portfolio describes the system that was built and tested during development; it does not claim a production deployment or clinical outcome.",
    evidence: [
      { src: "/careplus/careplus-dashboard.webp", label: "Product interface", title: "Operations dashboard", text: "A working operations interface for appointments, patients, notifications and feedback." },
      { src: "/careplus/careplus-orchestrator.webp", label: "Automation architecture", title: "Appointment notification orchestration", text: "Postgres-triggered logic retrieves appointment context, checks status and creates the required patient and doctor notifications." },
      { src: "/careplus/careplus-sms-tracker.webp", label: "Event-driven messaging", title: "SMS delivery status tracking", text: "Twilio callbacks are routed by delivery state and written back to the notification record." },
      { src: "/careplus/careplus-schema.webp", label: "Data architecture", title: "Supabase / PostgreSQL schema", text: "Relational data connects appointments, patients, doctors, branches, feedback and notification records." },
      { src: "/careplus/careplus-feedback.webp", label: "Feedback automation", title: "Patient feedback notifications", text: "Scheduled workflow logic finds pending feedback requests, prepares notifications and hands them to the outbound notification layer." }
    ]
  },
  dmda: {
    number: "02",
    type: "Secure voting platform",
    title: "DMDA Voting Portal",
    intro: "A code-gated election platform designed around single-use voter access, ballot validation and database-backed election rules.",
    brief: {
      problem: "For a community election, the challenge is bigger than putting candidates on a screen. The organisers need to know that the people entering the election are actually registered to vote, that a voting code cannot simply be passed around and reused, and that each person is given the correct ballot. At the same time, the process needs to feel simple for the voter: receive access, enter the code, see the ballot, make the selections and submit once. The project was about turning those rules into a voting experience that ordinary participants could understand while giving the people managing the election a reliable record of what was happening.",
      solution: "I built the portal so the complicated rules stay behind a straightforward voter experience. A registered voter enters a one-time access code, the system checks that access against the election, and an authorised voting session is created. The ballot is then generated from the actual election configuration, while the database checks the submitted choices before accepting the vote. Election state, voter participation and voting records are kept together so the process has a clear source of truth. The goal was to make the experience feel simple on the surface while making the important rules difficult to bypass underneath."
    },
    stack: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "n8n"],
    repo: null,
    live: "https://dmda-voting-portal.vercel.app/",
    problem: "The portal needed to restrict participation to registered voters, prevent reuse of voting access, validate ballots and keep election state consistent at the database layer.",
    problemHeading: "Enforce the rules before the vote.",
    builtHeading: "Put the election logic behind the interface.",
    built: [
      "Voter credential and access-code flow",
      "Single-use voting sessions",
      "Ballot validation against positions and candidates",
      "Database routines for authentication, ballot submission and results",
      "Election open/close state and participation controls",
      "Audit-oriented database structure"
    ],
    architecture: ["Voter access code", "Authentication routine", "Voting session", "Ballot validation", "PostgreSQL"],
    architectureLabels: ["ACCESS", "AUTH", "SESSION", "VALIDATION", "RECORD"],
    note: "The repository is private, so implementation details are summarized here without exposing the source.",
    evidence: [
      { src: "/dmda/voter authentication.webp.png", label: "VOTER ACCESS", title: "Voter authentication", text: "The voter-facing entry point gates access with a one-time voting code before a voting session can be established." },
      { src: "/dmda/voter-ballot.webp.png", label: "VOTER EXPERIENCE", title: "Authenticated ballot interface", text: "After authentication, voters receive the official ballot and make selections across the configured election positions." },
      { src: "/dmda/admin-dashboard.webp.png", label: "ADMINISTRATION", title: "Election administration dashboard", text: "An operational view for election state, registered voters, votes cast, remaining voters and turnout activity." },
      { src: "/dmda/authentication-workflow.webp.png", label: "AUTOMATION", title: "Voter authentication workflow", text: "n8n receives the authentication request, executes the PostgreSQL authentication routine and returns the result to the portal." },
      { src: "/dmda/get-ballot-workflow.webp.png", label: "BALLOT DELIVERY", title: "Ballot retrieval workflow", text: "The ballot webhook passes the active voting session into PostgreSQL, retrieves the configured ballot and returns it to the voter interface." },
      { src: "/dmda/database-schema.webp.png", label: "DATA ARCHITECTURE", title: "Supabase / PostgreSQL election schema", text: "The relational model connects voters, credentials, elections, positions, candidates, voting sessions, ballots and ballot choices." }
    ]
  },
  productforge: {
    number: "04",
    type: "AI product workflow",
    title: "ProductForge AI",
    intro: "An AI-focused product workflow project exploring how structured product ideas can move from input to useful generated output.",
    brief: {
      problem: "A product idea can start with something as simple as, “I have an idea for an app,” but turning that thought into something useful usually takes much more work. Important details can be missing, requirements can be scattered across notes, and it can be difficult to know what to define first. The idea behind ProductForge AI was to make that early stage less overwhelming by giving someone a clearer way to explain what they want to build. Instead of expecting a person to know exactly how to write a technical specification, the experience guides the idea into a more organised form.",
      solution: "I created a structured experience where a person can provide the important parts of a product idea, organise the context around it, and then pass that information into an AI-assisted generation process. The AI is not treated as a replacement for the person with the idea; it is used to help turn the starting point into something more organised and actionable. The result is presented back through the web interface so the user can move from a rough concept toward a clearer product direction without having to understand all of the technical work happening underneath."
    },
    stack: ["Next.js", "TypeScript", "AI", "Web App"],
    repo: "https://github.com/Jey7447/productforge-ai",
    problem: "Product work often starts with scattered ideas and incomplete requirements. ProductForge AI explores a more structured interface for turning an initial product concept into organized, actionable output.",
    problemHeading: "Give the idea a structure.",
    builtHeading: "Move from input to usable output.",
    built: [
      "Product-focused web interface",
      "Structured input and output workflow",
      "AI-assisted product generation concepts",
      "Reusable frontend architecture for an AI product experience"
    ],
    architecture: ["Product idea", "Structured input", "AI workflow", "Generated output"],
    architectureLabels: ["IDEA", "STRUCTURE", "AI", "OUTPUT"],
    note: "This case study describes the project implementation without inventing business results or production metrics.",
    evidence: []
  },
  bakery: {
    number: "03",
    type: "Operations web app",
    title: "Bakery Order Tracker",
    intro: "A practical order-management system focused on turning incoming bakery orders into a clearer, trackable operational workflow.",
    brief: {
      problem: "For a bakery, an order is more than a name and a list of items. Someone has to receive it, understand what the customer asked for, keep track of when it is needed, prepare it, and know whether it is still waiting or already handled. When that information is spread across messages, notes or separate manual updates, it is easy for the people working behind the scenes to lose track of what needs attention. The project was built around a simple operational need: give the bakery one clear place to see its orders and understand where each one currently stands.",
      solution: "I turned each incoming order into a structured record that can be followed through its different stages. Instead of asking staff to remember the latest update or search through conversations, the system gives them an operational view of the orders that need attention and their current status. The aim is straightforward: make the state of the work visible, reduce unnecessary manual coordination, and give the people handling orders a clearer picture of what has come in, what is being worked on, and what still needs to be completed."
    },
    stack: ["TypeScript", "Web App", "Automation"],
    repo: "https://github.com/Jey7447/brendas-bakery-order-tracker",
    problem: "Order information becomes difficult to manage when it is scattered across manual updates and disconnected steps. This project focuses on giving the workflow a structured place to capture, track and update orders.",
    problemHeading: "Make the order state visible.",
    builtHeading: "Turn manual steps into a trackable flow.",
    built: [
      "Order-focused web interface",
      "Structured order data and status tracking",
      "Operational workflow for moving orders through stages",
      "Automation-oriented architecture for reducing manual updates"
    ],
    architecture: ["Incoming order", "Structured record", "Status workflow", "Operations view"],
    architectureLabels: ["INPUT", "RECORD", "STATUS", "OPERATIONS"],
    note: "The project is presented as implementation work, without inventing business performance metrics that have not been measured.",
    evidence: []
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

  const flowDescriptions: Record<CaseKey, readonly string[]> = {
    careplus: [
      "Appointment context enters from the operational data layer, providing the timing and people needed for the communication workflow.",
      "n8n coordinates the notification logic, checks appointment state and creates the required notification records.",
      "Twilio handles outbound SMS delivery and sends status callbacks back into the system.",
      "Supabase / PostgreSQL stores the operational records and notification lifecycle state.",
      "The feedback workflow finds pending feedback requests and hands prepared notifications to the outbound layer."
    ],
    dmda: [
      "The registered voter enters a one-time voting code through the DMDA voter portal. Only eligible credentials can begin the voting flow.",
      "n8n receives the authentication request and invokes the PostgreSQL authentication routine, which checks the voter credential and election access rules.",
      "A valid authentication request establishes a voting session that carries the voter's authorized access through the ballot flow.",
      "The submission path validates the ballot against the configured election positions and candidates before accepting the vote.",
      "PostgreSQL remains the system of record for voters, credentials, elections, sessions, ballots, choices and participation state."
    ],
    bakery: [
      "An incoming order enters the system as a structured record instead of remaining as an isolated manual update.",
      "The order record carries the information needed by the operational workflow, including customer and order details.",
      "Status changes move the order through defined stages so its current state is visible to the people handling it.",
      "The operations view provides a single place to review and update active orders."
    ],
    productforge: [
      "A product idea enters through a structured interface rather than an unbounded text prompt.",
      "The input is organized into the fields and context needed by the product-generation workflow.",
      "The AI layer processes that structured context to produce an organized product-oriented output.",
      "The generated result is presented back through the web interface as the next usable artifact."
    ]
  };

  return (
    <main className="case-page">
      <nav className="case-nav">
        <Link href="/" className="brand">J<span>.</span></Link>
        <Link href="/" className="backlink"><ArrowLeft size={15} /> Back home</Link>
      </nav>

      <header className="case-hero case-wrap">
        {"evidence" in project && project.evidence && project.evidence.length > 0 && (
          <CaseHeroSlideshow
            images={project.evidence.map((item) => item.src)}
            labels={project.evidence.map((item) => item.title)}
          />
        )}
        <div className="case-hero-content">
          <span className="kicker">{project.number} / {project.type}</span>
          <h1>{project.title}</h1>
        <p>{project.intro}</p>
        <div className="case-actions">
          {project.repo ? (
            <a href={project.repo} className="case-button">
              Repository <ArrowUpRight size={16} />
            </a>
          ) : (
            <span className="case-private">Private repository</span>
          )}
          {"live" in project && project.live && (
            <a href={project.live} className="case-button" target="_blank" rel="noreferrer">
              Live demo <ArrowUpRight size={16} />
            </a>
          )}
          <Link href="/#contact" className="case-textlink">Discuss a project <ArrowUpRight size={16} /></Link>
        </div>
        </div>
      </header>

      <section className="case-brief case-wrap" aria-labelledby="case-brief-title">
        <div className="case-brief-head">
          <span className="kicker">PROJECT BRIEF</span>
          <h2 id="case-brief-title">The problem, in plain language.</h2>
          <p>A short overview of what the project needed to solve and how the system addressed it.</p>
        </div>
        <div className="case-brief-grid">
          <article>
            <span className="case-brief-index">01 / THE PROBLEM</span>
            <p>{project.brief.problem}</p>
          </article>
          <article>
            <span className="case-brief-index">02 / THE SOLUTION</span>
            <p>{project.brief.solution}</p>
          </article>
        </div>
      </section>

      <section className="case-visual case-wrap" aria-label="System architecture visual">
        <div className="case-grid" />
        <div className="architecture-map">
          <div className="architecture-head">
            <span className="kicker">SYSTEM MAP</span>
            <span>{project.number} / {slug.toUpperCase()}</span>
          </div>
          <div className="architecture-flow">
            {project.architecture.map((item, index) => (
              <div className="architecture-node-wrap" key={item}>
                <div className="architecture-node">
                  <span>0{index + 1}</span>
                  <strong>{item}</strong>
                  <small>{project.architectureLabels[index]}</small>
                </div>
                {index < project.architecture.length - 1 && <div className="architecture-arrow"><ArrowUpRight size={18} /></div>}
              </div>
            ))}
          </div>
          <div className="architecture-status"><CheckCircle2 size={14} /> Architecture mapped from the project implementation</div>
        </div>
      </section>

      {"evidence" in project && project.evidence && project.evidence.length > 0 && (
        <CaseStudyInteractive
          evidence={project.evidence}
          workflowNodes={
            slug === "careplus"
              ? {
                  orchestrator: [
                    { id: "postgres-trigger", label: "Postgres Trigger", x: 14.5, y: 54, description: "Starts the appointment notification workflow when the relevant database event fires." },
                    { id: "get-appointment", label: "Get Appointment with Patient and Doctor", x: 31.5, y: 54, description: "Queries the appointment context needed to determine who should be notified and why." },
                    { id: "status-check", label: "Appointment Status is Scheduled?", x: 48.5, y: 54, description: "Branches the workflow so notifications are only created for appointments that meet the expected status condition." },
                    { id: "doctor-notification", label: "Create Doctor Notification", x: 64.5, y: 25, description: "Creates the doctor-facing notification record when the scheduled branch requires it." },
                    { id: "patient-notification", label: "Create Patient Notification", x: 64.5, y: 78, description: "Creates the patient-facing notification record for the appointment." },
                    { id: "outbound-notification", label: "Call CarePlus — Outbound Notification", x: 84, y: 56, description: "Hands the prepared notification records to the outbound notification workflow for delivery." }
                  ],
                  feedback: [
                    { id: "schedule-trigger", label: "Schedule Trigger", x: 25.5, y: 55, description: "Runs the feedback workflow on its configured schedule so pending feedback requests can be processed without a manual trigger." },
                    { id: "find-feedback", label: "Find Pending Feedback Notifications", x: 42, y: 55, description: "Queries the database for feedback requests that are ready for notification." },
                    { id: "prepare-feedback", label: "Prepare Feedback Notification", x: 59, y: 55, description: "Builds the notification payload and prepares it for the outbound notification layer." },
                    { id: "call-outbound", label: "Call CarePlus — Outbound Notification", x: 75, y: 55, description: "Passes the prepared feedback notification into the outbound notification workflow for delivery." }
                  ],
                  sms: [
                    { id: "twilio-callback", label: "Twilio SMS Status Callback", x: 31, y: 54, description: "Receives Twilio's delivery-status callback for an outbound message." },
                    { id: "route-status", label: "Route SMS Status", x: 46, y: 54, description: "Reads the Twilio status and routes the callback into the matching delivery-state branch." },
                    { id: "find-sent", label: "Find Notification by Twilio SID", x: 58, y: 21, description: "Finds the notification record associated with the Twilio Message SID for the sent state." },
                    { id: "update-sent", label: "Update Notification — Sent", x: 72, y: 21, description: "Writes the sent state and related delivery metadata back to the notification record." },
                    { id: "find-delivered", label: "Find Notification by Twilio SID1", x: 58, y: 43, description: "Looks up the notification record for a delivered callback." },
                    { id: "mark-delivered", label: "Mark Patient Notification Delivered", x: 72, y: 43, description: "Marks the patient notification as delivered in the database." },
                    { id: "find-failed", label: "Find Notification by Twilio SID2", x: 58, y: 64, description: "Looks up the notification record for a failed callback." },
                    { id: "mark-failed", label: "Mark Patient Notification Failed", x: 72, y: 64, description: "Records the failed delivery state against the patient notification." },
                    { id: "find-undelivered", label: "Find Notification by Twilio SID3", x: 58, y: 84, description: "Looks up the notification record for an undelivered callback." },
                    { id: "mark-undelivered", label: "Mark Patient Notification Undelivered", x: 72, y: 84, description: "Records the undelivered state so the notification lifecycle remains traceable." }
                  ]
                }
              : slug === "dmda"
                ? {
                    authentication: [
                      { id: "auth-webhook", label: "Voter Authentication Webhook", x: 25, y: 54, description: "Receives the voter code from the portal and starts the authentication request." },
                      { id: "auth-postgres", label: "Authenticate Voter", x: 50, y: 54, description: "Runs the PostgreSQL authentication routine that validates the voter credential and election access." },
                      { id: "auth-return", label: "Return Authentication Result", x: 75, y: 54, description: "Returns the authentication result to the voter portal so an approved session can continue." }
                    ],
                    ballot: [
                      { id: "ballot-webhook", label: "Get Ballot Webhook", x: 25, y: 54, description: "Receives the authenticated voting session from the portal and starts ballot retrieval." },
                      { id: "ballot-postgres", label: "Get Ballot", x: 50, y: 54, description: "Runs the PostgreSQL ballot routine to retrieve the active election positions and candidates for the session." },
                      { id: "ballot-return", label: "Return Ballot", x: 75, y: 54, description: "Returns the validated ballot payload to the voter interface for selection and review." }
                    ]
                  }
                : undefined
          }
        />
      )}

      <section className="case-content case-wrap">
        <div className="case-main">
          <article>
            <span className="kicker">THE PROBLEM</span>
            <h2>{project.problemHeading}</h2>
            <p>{project.problem}</p>
          </article>

          <article>
            <span className="kicker">WHAT I BUILT</span>
            <h2>{project.builtHeading}</h2>
            <ul className="case-list">
              {project.built.map((item) => (
                <li key={item}><CheckCircle2 size={17} /> <span>{item}</span></li>
              ))}
            </ul>
          </article>

          <InteractiveSystemFlow
            architecture={project.architecture}
            architectureLabels={project.architectureLabels}
            descriptions={flowDescriptions[slug as CaseKey]}
          />
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
        <Link href="/"><ArrowLeft size={15} /> Back to homepage</Link>
        <div className="case-footer-center">Jesse Briska · Software · Automation · Systems</div>
        <Link href="/#contact" className="case-footer-cta">Start a project <ArrowUpRight size={15} /></Link>
      </footer>
    </main>
  );
}
