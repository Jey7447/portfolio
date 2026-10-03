"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { X, Maximize2 } from "lucide-react";

type EvidenceItem = {
  src: string;
  label: string;
  title: string;
  text: string;
};

type WorkflowNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  description: string;
};

type WorkflowNodes = Record<"orchestrator" | "sms" | "feedback" | "authentication" | "ballot" | "feedbackIntelligence" | "responseDelivery" | "requestOrchestrator", WorkflowNode[]>;

type WorkflowKey = keyof WorkflowNodes;

type Props = {
  evidence: readonly EvidenceItem[];
  workflowNodes?: Partial<WorkflowNodes>;
};

const workflowMeta: Record<WorkflowKey, { title: string; image: string }> = {
  orchestrator: { title: "Appointment notification orchestration", image: "/careplus/careplus-orchestrator.webp" },
  sms: { title: "SMS delivery status tracking", image: "/careplus/careplus-sms-tracker.webp" },
  feedback: { title: "Patient feedback notifications", image: "/careplus/careplus-feedback.webp" },
  authentication: { title: "Voter authentication workflow", image: "/dmda/authentication-workflow.webp.png" },
  ballot: { title: "Ballot retrieval workflow", image: "/dmda/get-ballot-workflow.webp.png" },
  feedbackIntelligence: { title: "Feedback intelligence and routing", image: "/capstone/05-feedback-intelligence-and-routing-workflow.png" },
  responseDelivery: { title: "Approved response delivery", image: "/capstone/04-approved-response-delivery-workflow.png" },
  requestOrchestrator: { title: "Feedback request orchestrator", image: "/capstone/06-feedback-request-orchestrator-workflow.png" },
};

export default function CaseStudyInteractive({ evidence, workflowNodes }: Props) {
  const [activeImage, setActiveImage] = useState<EvidenceItem | null>(null);
  const [activeWorkflow, setActiveWorkflow] = useState<WorkflowKey | null>(null);
  const [activeNode, setActiveNode] = useState<WorkflowNode | null>(null);

  const closeAll = useCallback(() => {
    setActiveImage(null);
    setActiveWorkflow(null);
    setActiveNode(null);
  }, []);

  useEffect(() => {
    const locked = Boolean(activeImage || activeWorkflow);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = locked ? "hidden" : "";

    if (!locked) {
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAll();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeImage, activeWorkflow, closeAll]);

  const openEvidence = (item: EvidenceItem) => {
    const workflow = (Object.keys(workflowMeta) as WorkflowKey[]).find((key) => workflowNodes?.[key]?.length && item.src.includes(
      key === "orchestrator" ? "orchestrator" :
      key === "sms" ? "sms-tracker" :
      key === "feedback" ? "feedback" :
      key === "authentication" ? "authentication-workflow" :
      key === "ballot" ? "get-ballot-workflow" :
      key === "feedbackIntelligence" ? "feedback-intelligence-and-routing-workflow" :
      key === "responseDelivery" ? "approved-response-delivery-workflow" :
      "feedback-request-orchestrator"
    ));

    if (workflow && workflowNodes?.[workflow]) {
      setActiveWorkflow(workflow);
      setActiveNode(workflowNodes[workflow][0] ?? null);
      return;
    }

    setActiveImage(item);
  };

  return (
    <>
      <section id="visual-evidence" className="case-evidence case-wrap" aria-label="Visual evidence">
        <div className="evidence-head">
          <div>
            <span className="kicker">VISUAL EVIDENCE</span>
            <h2>A closer look at the work.</h2>
          </div>
          <p>Real views from the project, showing the parts people would actually use and the behind-the-scenes work that helps everything stay connected.</p>
        </div>

        <div className="evidence-grid">
          {evidence.map((item, index) => {
            const interactive = Boolean(
              workflowNodes && (
                (item.src.includes("orchestrator") && workflowNodes.orchestrator) ||
                (item.src.includes("sms-tracker") && workflowNodes.sms) ||
                (item.src.includes("feedback") && !item.src.includes("feedback-intelligence-and-routing-workflow") && workflowNodes.feedback) ||
                (item.src.includes("authentication-workflow") && workflowNodes.authentication) ||
                (item.src.includes("get-ballot-workflow") && workflowNodes.ballot) ||
                (item.src.includes("feedback-intelligence-and-routing-workflow") && workflowNodes.feedbackIntelligence) ||
                (item.src.includes("approved-response-delivery-workflow") && workflowNodes.responseDelivery) ||
                (item.src.includes("feedback-request-orchestrator") && workflowNodes.requestOrchestrator)
              )
            );
            return (
              <figure className={index === 0 ? "evidence-card evidence-featured" : "evidence-card"} key={item.src}>
                <button
                  type="button"
                  className="evidence-media evidence-button"
                  onClick={() => openEvidence(item)}
                  aria-label={interactive ? `Explore ${item.title} workflow` : `Open ${item.title}`}
                >
                  <Image src={item.src} alt={item.title} width={1600} height={900} priority={index === 0} />
                  <span className="evidence-expand"><Maximize2 size={15} /> {interactive ? "Explore workflow" : "Open full view"}</span>
                </button>
                <figcaption>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      {(activeImage || activeWorkflow) && (
        <div className="evidence-modal" role="dialog" aria-modal="true" aria-label={activeWorkflow ? "Interactive workflow explorer" : "Expanded project evidence"} onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeAll();
        }}>
          <div className={activeWorkflow ? "workflow-modal workflow-modal-wide" : "image-modal"}>
            <button type="button" className="modal-close" onClick={closeAll} aria-label="Close evidence viewer">
              <X size={20} />
            </button>

            {activeWorkflow && workflowNodes?.[activeWorkflow] ? (
              <div className="workflow-explorer">
                <div className="workflow-modal-head">
                  <div>
                    <span className="kicker">INTERACTIVE WORKFLOW</span>
                    <h3>{workflowMeta[activeWorkflow].title}</h3>
                  </div>
                  <p>Click a node to inspect its role in the workflow.</p>
                </div>

                <div className="workflow-canvas">
                  <Image src={workflowMeta[activeWorkflow].image} alt="" width={1600} height={900} />
                  {workflowNodes[activeWorkflow].map((node) => (
                    <button
                      type="button"
                      key={node.id}
                      className={activeNode?.id === node.id ? "workflow-hotspot active" : "workflow-hotspot"}
                      style={{ left: `${node.x}%`, top: `${node.y}%` }}
                      onClick={() => setActiveNode(node)}
                      aria-label={node.label}
                    >
                      <span />
                    </button>
                  ))}
                </div>

                {activeNode && (
                  <div className="workflow-node-info">
                    <div>
                      <span className="kicker">SELECTED NODE</span>
                      <h4>{activeNode.label}</h4>
                    </div>
                    <p>{activeNode.description}</p>
                  </div>
                )}
              </div>
            ) : activeImage ? (
              <div className="image-viewer">
                <Image src={activeImage.src} alt={activeImage.title} width={1600} height={900} />
                <div className="image-viewer-caption">
                  <span className="kicker">{activeImage.label}</span>
                  <h3>{activeImage.title}</h3>
                  <p>{activeImage.text}</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
