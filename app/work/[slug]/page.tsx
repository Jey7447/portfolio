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
      "A central interface for keeping track of patients, doctors and appointments",
      "Organised records that keep important medical-centre information together",
      "Automatic appointment reminders and notifications for the people who need them",
      "Message delivery tracking so staff can see whether important notifications went through",
      "A feedback process that helps the centre follow up with patients after their appointments"
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
      "A simple voter entry point using a one-time access code",
      "A protected voting session that keeps each voter's access tied to their participation",
      "A ballot that only shows the positions and choices configured for the election",
      "Checks that make sure submitted votes follow the election's rules before they are recorded",
      "Controls for opening, closing and tracking participation in an election",
      "A clear record of voters, elections and votes so the organisers have one place to refer back to"
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
      "A guided place for someone to describe and shape a product idea",
      "A structured way to organise the important information behind the idea",
      "An AI-assisted step that turns the supplied context into more useful product output",
      "A reusable interface designed to make the experience clear from the first idea through to the generated result"
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
      "A clear place to receive and review customer orders",
      "A consistent record for each order and the information needed to fulfil it",
      "Visible order stages so staff can quickly see what is waiting, in progress or completed",
      "A workflow designed to reduce repetitive manual updates and keep the team working from the same information"
    ],
    architecture: ["Incoming order", "Structured record", "Status workflow", "Operations view"],
    architectureLabels: ["INPUT", "RECORD", "STATUS", "OPERATIONS"],
    note: "The project is presented as implementation work, without inventing business performance metrics that have not been measured.",
    evidence: [
      { src: "/bakery/01-storefront.png", label: "CUSTOMER EXPERIENCE", title: "Bakery storefront", text: "A customer-facing bakery experience with a clear menu, product discovery and a direct path into ordering." },
      { src: "/bakery/02-menu.png", label: "PRODUCT CATALOG", title: "Product menu", text: "The menu organizes cakes, cupcakes and pastries into a visual catalog with category filtering and add-to-order actions." },
      { src: "/bakery/03-checkout.png", label: "ORDER FLOW", title: "Customer checkout", text: "A structured checkout collects customer details, delivery timing and address information while keeping the order summary visible." },
      { src: "/bakery/04-order-tracking.png", label: "ORDER TRACKING", title: "Order journey", text: "Customers receive an order reference and a visible progress journey from order received through delivery." },
      { src: "/bakery/05-dashboard.png", label: "OPERATIONS", title: "Order management dashboard", text: "The internal workspace gives Brenda a single place to review orders, search, filter, track payment and update order status." },
      { src: "/bakery/06-new-order-automation.png", label: "AUTOMATION", title: "New order workflow", text: "An n8n workflow receives a new order, prepares the data, records it in Google Sheets and sends confirmation messages." }
    ]
  },
  "reputation-feedback": {
    number: "05",
    type: "AI · Automation · Operations",
    title: "Reputation & Feedback Intelligence Engine",
    intro: "A multi-location feedback intelligence system that turns customer feedback into structured analysis, routing, alerts and human-reviewed response workflows.",
    brief: {
      problem: "Customer feedback is useful only when the team can understand it and act on it. Raw comments and ratings can quickly become difficult to review when feedback comes from multiple locations and needs to be assessed for sentiment, severity and follow-up. The capstone focused on creating a central system that could take incoming feedback, add structured AI analysis, consider previous negative feedback when deciding how to route an issue, and give managers a clear place to review what needs attention.",
      solution: "I built the project as a connected feedback intelligence workflow rather than a standalone dashboard. Feedback is stored in Supabase/PostgreSQL, analyzed for sentiment, severity and confidence, then routed according to the resulting context and feedback history. Higher-risk cases can create manager alerts, while the system can prepare response drafts for human review. The dashboard brings those records together so managers can see feedback, alerts, analysis and response-review state from one operational view."
    },
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "n8n", "AI"],
    repo: "https://github.com/Jey7447/reputation-feedback-dashboard",
    problem: "The system needed to turn raw customer feedback into structured intelligence that could be reviewed, routed and acted on across multiple locations without losing the original record or the history behind a repeated issue.",
    problemHeading: "Turn feedback into something the team can act on.",
    builtHeading: "Connect analysis, routing and human review.",
    built: [
      "A protected manager dashboard for reviewing feedback and operational alerts",
      "Structured feedback records tied back to visits, customers and locations",
      "AI-assisted sentiment, severity and confidence analysis stored with the feedback",
      "History-aware routing that can recognise repeated negative feedback instead of treating each submission in isolation",
      "Manager alerts for higher-severity cases and a clear alert lifecycle",
      "AI-generated response drafts that remain in human review before they are treated as final responses"
    ],
    architecture: ["Customer feedback", "AI analysis", "History & routing", "Alerts / response draft", "Manager review"],
    architectureLabels: ["INPUT", "INTELLIGENCE", "CONTEXT", "ACTION", "HUMAN"],
    note: "This is a completed TS Academy capstone project. The case study describes the implemented workflow and tested application behavior without inventing customer outcomes or production-scale performance claims.",
    evidence: [
      { src: "/capstone/01-reputation-command-center.png", label: "COMMAND CENTER", title: "Reputation Command Center", text: "A manager-facing dashboard that brings feedback volume, sentiment, routing state and open work into one operational view." },
      { src: "/capstone/02-feedback-records.png", label: "FEEDBACK RECORDS", title: "Feedback records and AI analysis", text: "Feedback submissions are shown with ratings, sentiment, severity, confidence and routing state so each case can be reviewed with its analysis attached." },
      { src: "/capstone/03-response-draft-and-approval.png", label: "RESPONSE REVIEW", title: "AI response draft and approval", text: "A generated response moves through human review before approval and delivery, keeping the final customer response under manager control." },
      { src: "/capstone/04-approved-response-delivery-workflow.png", label: "DELIVERY AUTOMATION", title: "Approved response delivery", text: "The approved response workflow retrieves the reviewed response, sends it through the outbound channel and records the delivery state." },
      { src: "/capstone/05-feedback-intelligence-and-routing-workflow.png", label: "AI + ROUTING", title: "Feedback intelligence and routing", text: "The n8n workflow receives feedback, runs AI analysis, checks confidence and history, then routes the case toward review, alerts or response handling." },
      { src: "/capstone/06-feedback-request-orchestrator-workflow.png", label: "REQUEST ORCHESTRATION", title: "Feedback request orchestrator", text: "The request workflow prepares the feedback link, retrieves customer details, sends the request and records that the notification was sent." },
      { src: "/capstone/07-latest-feedback-and-manager-alerts.png", label: "OPERATIONS", title: "Latest feedback and manager alerts", text: "The operational view brings recent feedback, routing states and manager alert activity together for follow-up." },
      { src: "/capstone/08-manager-alert-detail.png", label: "ESCALATION", title: "Manager alert detail", text: "A high-severity feedback case is surfaced with its analysis, routing context, response state and resolution history." }
    ]
  },
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
      "An appointment enters the system with the timing and people involved, giving the workflow the information it needs to act.",
      "The automation checks the appointment and prepares the right notifications without requiring each step to be handled manually.",
      "Text messages are sent through Twilio, which also reports back whether each message was sent or delivered.",
      "The database keeps the appointments, people and notification history together so the team can trace what happened.",
      "After an appointment, the feedback process can find people who still need a follow-up message and send the request through the same notification system."
    ],
    dmda: [
      "A registered voter starts by entering a one-time access code through the voting portal. The system checks that the code belongs to an eligible voter.",
      "The access request is checked against the election rules before the voter is allowed to continue.",
      "Once approved, the voter gets a secure session that carries their authorised access through the voting process.",
      "Before a vote is accepted, the system checks that the selections match the positions and choices configured for that election.",
      "The database keeps the election, voter participation and vote records together so there is one consistent record of what happened."
    ],
    bakery: [
      "A new bakery order is captured in one organised record instead of being left across separate messages or notes.",
      "The order keeps the customer and order details together so the people handling it have the information they need in one place.",
      "As work progresses, the order moves through clear stages so everyone can see what is waiting, being prepared or completed.",
      "The operations view gives the team one place to review active orders and keep their status up to date."
    ],
    productforge: [
      "Someone starts with a product idea and explains it through a guided interface instead of needing to know how to write a technical specification.",
      "The important details are organised into a clear structure so the idea has enough context to work with.",
      "The AI uses that context to turn the starting idea into a more organised and useful product output.",
      "The result is returned through the web interface so the person can review and continue working from it."
    ],
    "reputation-feedback": [
      "A customer feedback submission is stored with the location and visit context needed to understand where the issue came from.",
      "The analysis workflow adds structured sentiment, severity and confidence information so the feedback can be interpreted consistently.",
      "Previous feedback history can be considered when routing repeated negative issues instead of treating every submission as an isolated event.",
      "Higher-severity cases can create manager alerts while the response workflow prepares a draft for manager review.",
      "Managers use the dashboard to review feedback, alerts and response status from one operational view."
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
                    { id: "postgres-trigger", label: "Postgres Trigger", x: 14.5, y: 54, description: "Starts the appointment communication process when the relevant appointment event occurs." },
                    { id: "get-appointment", label: "Get Appointment with Patient and Doctor", x: 31.5, y: 54, description: "Gathers the appointment details needed to understand who should receive a message and what the message is about." },
                    { id: "status-check", label: "Appointment Status is Scheduled?", x: 48.5, y: 54, description: "Checks whether the appointment is ready for notification before creating any messages." },
                    { id: "doctor-notification", label: "Create Doctor Notification", x: 64.5, y: 25, description: "Prepares a notification for the doctor when the appointment requires one." },
                    { id: "patient-notification", label: "Create Patient Notification", x: 64.5, y: 78, description: "Prepares a notification for the patient about the appointment." },
                    { id: "outbound-notification", label: "Call CarePlus — Outbound Notification", x: 84, y: 56, description: "Passes the prepared messages to the part of the system responsible for sending them." }
                  ],
                  feedback: [
                    { id: "schedule-trigger", label: "Schedule Trigger", x: 25.5, y: 55, description: "Runs on its schedule so the system can look for patients who are ready to receive a feedback request." },
                    { id: "find-feedback", label: "Find Pending Feedback Notifications", x: 42, y: 55, description: "Finds feedback requests that are waiting to be sent." },
                    { id: "prepare-feedback", label: "Prepare Feedback Notification", x: 59, y: 55, description: "Prepares the feedback message with the information needed for delivery." },
                    { id: "call-outbound", label: "Call CarePlus — Outbound Notification", x: 75, y: 55, description: "Sends the prepared feedback request into the same message-delivery process." }
                  ],
                  sms: [
                    { id: "twilio-callback", label: "Twilio SMS Status Callback", x: 31, y: 54, description: "Receives an update from the messaging service about what happened to an outgoing text." },
                    { id: "route-status", label: "Route SMS Status", x: 46, y: 54, description: "Looks at the message update and sends it to the correct status path." },
                    { id: "find-sent", label: "Find Notification by Twilio SID", x: 58, y: 21, description: "Finds the original message record so its latest status can be saved." },
                    { id: "update-sent", label: "Update Notification — Sent", x: 72, y: 21, description: "Records that the message was sent and keeps the related delivery information." },
                    { id: "find-delivered", label: "Find Notification by Twilio SID1", x: 58, y: 43, description: "Finds the original message when the delivery service reports that it arrived." },
                    { id: "mark-delivered", label: "Mark Patient Notification Delivered", x: 72, y: 43, description: "Records that the patient message was delivered." },
                    { id: "find-failed", label: "Find Notification by Twilio SID2", x: 58, y: 64, description: "Finds the original message when delivery was unsuccessful." },
                    { id: "mark-failed", label: "Mark Patient Notification Failed", x: 72, y: 64, description: "Records that the patient message could not be delivered successfully." },
                    { id: "find-undelivered", label: "Find Notification by Twilio SID3", x: 58, y: 84, description: "Finds the original message when the delivery service reports that it remains undelivered." },
                    { id: "mark-undelivered", label: "Mark Patient Notification Undelivered", x: 72, y: 84, description: "Records the undelivered status so the team can see what happened to the message." }
                  ]
                }
              : slug === "reputation-feedback"
                ? {
                    feedbackIntelligence: [
                      { id: "feedback-webhook", label: "Feedback Submitted", x: 10, y: 52, description: "Receives the submitted feedback and starts the intelligence workflow." },
                      { id: "prepare-feedback", label: "Recover / Prepare Feedback", x: 19, y: 52, description: "Loads the feedback context needed for analysis and downstream routing." },
                      { id: "claim-feedback", label: "Claim Feedback for Processing", x: 29, y: 52, description: "Claims the record so the same feedback is not processed repeatedly." },
                      { id: "analyze-feedback", label: "Analyze Feedback with AI", x: 40, y: 52, description: "Generates sentiment, severity, confidence and supporting analysis from the submitted feedback." },
                      { id: "parse-analysis", label: "Parse AI Analysis", x: 50, y: 52, description: "Converts the model response into structured fields the workflow and database can use." },
                      { id: "update-analysis", label: "Update Feedback Analysis", x: 60, y: 52, description: "Stores the AI analysis alongside the original feedback record." },
                      { id: "confidence-check", label: "Check Analysis Confidence", x: 69, y: 52, description: "Checks whether the analysis meets the confidence threshold before automated routing continues." },
                      { id: "history-check", label: "Check Negative History", x: 79, y: 34, description: "Checks prior feedback history to identify repeated negative issues instead of treating each submission in isolation." },
                      { id: "severity-route", label: "High Severity / Manager Alert", x: 79, y: 69, description: "Routes higher-severity cases toward manager attention and escalation handling." },
                      { id: "response-route", label: "Response Draft / Human Review", x: 91, y: 52, description: "Moves eligible cases toward response drafting and human review." }
                    ],
                    responseDelivery: [
                      { id: "approved-webhook", label: "Response Approved", x: 22, y: 54, description: "Starts delivery when a manager approves a response for sending." },
                      { id: "get-response", label: "Get Approved Response", x: 50, y: 54, description: "Retrieves the approved response and its delivery details from PostgreSQL." },
                      { id: "send-response", label: "Send Approved Response", x: 72, y: 54, description: "Sends the approved customer response through the configured outbound channel." },
                      { id: "mark-sent", label: "Mark Response Sent", x: 88, y: 54, description: "Records the response as sent so the workflow has a traceable delivery state." }
                    ],
                    requestOrchestrator: [
                      { id: "request-webhook", label: "Feedback Request Created", x: 20, y: 54, description: "Starts the workflow when a feedback request record is created." },
                      { id: "build-link", label: "Build Feedback Link", x: 38, y: 54, description: "Builds the customer-facing feedback link associated with the request." },
                      { id: "customer-details", label: "Get Customer Details", x: 55, y: 54, description: "Retrieves the customer information needed to address and personalize the outgoing message." },
                      { id: "send-request", label: "Send Feedback Request", x: 73, y: 54, description: "Sends the feedback request through the configured communication channel." },
                      { id: "mark-request-sent", label: "Mark Feedback Request Sent", x: 90, y: 54, description: "Records that the feedback request was sent and keeps the workflow state traceable." }
                    ]
                  }
                : slug === "dmda"
                ? {
                    authentication: [
                      { id: "auth-webhook", label: "Voter Authentication Webhook", x: 25, y: 54, description: "Receives the voter's one-time code and starts the access check." },
                      { id: "auth-postgres", label: "Authenticate Voter", x: 50, y: 54, description: "Checks that the code belongs to an eligible voter and that the voter can access this election." },
                      { id: "auth-return", label: "Return Authentication Result", x: 75, y: 54, description: "Tells the voting portal whether access was approved so the voter can continue when authorised." }
                    ],
                    ballot: [
                      { id: "ballot-webhook", label: "Get Ballot Webhook", x: 25, y: 54, description: "Receives the approved voting session and starts preparing the correct ballot." },
                      { id: "ballot-postgres", label: "Get Ballot", x: 50, y: 54, description: "Gets the positions and choices that belong to the current election and voting session." },
                      { id: "ballot-return", label: "Return Ballot", x: 75, y: 54, description: "Sends the correct ballot back to the voter so they can review and make their selections." }
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
            <span className="kicker">TECHNOLOGY</span>
            <div className="case-tags">
              {project.stack.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div className="aside-card">
            <span className="kicker">HOW IT WORKS</span>
            <div className="layer"><Workflow size={17} /><span>Automation & workflow</span></div>
            <div className="layer"><Database size={17} /><span>Data & records</span></div>
            <div className="layer"><GitBranch size={17} /><span>Connected services</span></div>
          </div>
          <div className="aside-note">{project.note}</div>
        </aside>
      </section>

      <footer className="case-footer case-wrap">
        <div className="case-footer-nav">
          <Link href="/"><ArrowLeft size={15} /> Back to homepage</Link>
          <div className="case-footer-center">Jesse Briska · Software · Automation · Systems</div>
        </div>
        <div className="case-footer-next">
          {(() => {
            const order = ["careplus", "dmda", "bakery", "productforge", "reputation-feedback"] as const;
            const index = order.indexOf(slug as (typeof order)[number]);
            const nextSlug = order[(index + 1) % order.length];
            const nextProject = cases[nextSlug];
            return (
              <Link href={`/work/${nextSlug}`} className="case-footer-project">
                <span><small>NEXT CASE STUDY</small><strong>{nextProject.number} / {nextProject.title}</strong></span>
                <ArrowUpRight size={17} />
              </Link>
            );
          })()}
        </div>
        <Link href="/#contact" className="case-footer-cta">Start a project <ArrowUpRight size={15} /></Link>
      </footer>
    </main>
  );
}
