"use client";

import { useEffect, useState } from "react";
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

type WorkflowNodes = {
  orchestrator: WorkflowNode[];
  sms: WorkflowNode[];
};

type Props = {
  evidence: readonly EvidenceItem[];
  workflowNodes?: WorkflowNodes;
};

export default function CaseStudyInteractive({ evidence, workflowNodes }: Props) {
  const [activeImage, setActiveImage] = useState<EvidenceItem | null>(null);
  const [activeWorkflow, setActiveWorkflow] = useState<"orchestrator" | "sms" | null>(null);
  const [activeNode, setActiveNode] = useState<WorkflowNode | null>(null);

  useEffect(() => {
    const locked = Boolean(activeImage || activeWorkflow);
    document.body.style.overflow = locked ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeImage, activeWorkflow]);

  const openEvidence = (item: EvidenceItem) => {
    const isOrchestrator = item.src.includes("orchestrator");
    const isSms = item.src.includes("sms-tracker");

    if (workflowNodes && isOrchestrator) {
      setActiveWorkflow("orchestrator");
      setActiveNode(workflowNodes.orchestrator[0] ?? null);
      return;
    }

    if (workflowNodes && isSms) {
      setActiveWorkflow("sms");
      setActiveNode(workflowNodes.sms[0] ?? null);
      return;
    }

    setActiveImage(item);
  };

  const closeAll = () => {
    setActiveImage(null);
    setActiveWorkflow(null);
    setActiveNode(null);
  };

  return (
    <>
      <section className="case-evidence case-wrap" aria-label="Visual evidence">
        <div className="evidence-head">
          <div>
            <span className="kicker">VISUAL EVIDENCE</span>
            <h2>Show the system, not just the description.</h2>
          </div>
          <p>Selected implementation views from the project, covering the product interface, automation layer, messaging flow and data architecture.</p>
        </div>

        <div className="evidence-grid">
          {evidence.map((item, index) => {
            const interactive = Boolean(workflowNodes && (item.src.includes("orchestrator") || item.src.includes("sms-tracker")));
            return (
              <figure className={index === 0 ? "evidence-card evidence-featured" : "evidence-card"} key={item.src}>
                <button
                  type="button"
                  className="evidence-media evidence-button"
                  onClick={() => openEvidence(item)}
                  aria-label={interactive ? `Explore ${item.title} workflow` : `Open ${item.title}`}
                >
                  <img src={item.src} alt={item.title} loading={index === 0 ? "eager" : "lazy"} />
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
            <button type="button" className="modal-close" onClick={closeAll} aria-label="Close">
              <X size={20} />
            </button>

            {activeWorkflow && workflowNodes ? (
              <div className="workflow-explorer">
                <div className="workflow-modal-head">
                  <div>
                    <span className="kicker">INTERACTIVE WORKFLOW</span>
                    <h3>{activeWorkflow === "orchestrator" ? "Appointment notification orchestration" : "SMS delivery status tracking"}</h3>
                  </div>
                  <p>Click a node to inspect its role in the workflow.</p>
                </div>

                <div className="workflow-canvas">
                  <img
                    src={activeWorkflow === "orchestrator" ? "/careplus/careplus-orchestrator.webp" : "/careplus/careplus-sms-tracker.webp"}
                    alt=""
                  />
                  {(activeWorkflow === "orchestrator" ? workflowNodes.orchestrator : workflowNodes.sms).map((node) => (
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
                      <span className="kicker">NODE</span>
                      <h4>{activeNode.label}</h4>
                    </div>
                    <p>{activeNode.description}</p>
                  </div>
                )}
              </div>
            ) : activeImage ? (
              <div className="image-viewer">
                <img src={activeImage.src} alt={activeImage.title} />
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
