"use client";

import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

type Props = {
  architecture: readonly string[];
  descriptions?: readonly string[];
};

export default function InteractiveSystemFlow({ architecture, descriptions }: Props) {
  const [active, setActive] = useState<number | null>(null);

  const descriptionFor = (index: number, item: string) =>
    descriptions?.[index] ?? `${item} is a defined stage in the system architecture, connecting the previous layer to the next part of the workflow.`;

  return (
    <article>
      <span className="kicker">SYSTEM FLOW</span>
      <h2>How the pieces connect.</h2>
      <p className="flow-intro">Click a stage to see what happens there. The workflow evidence above can also be opened and explored node by node.</p>
      <div className="flow">
        {architecture.map((item, index) => (
          <button
            type="button"
            className="flow-item flow-button"
            key={item}
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>
            <strong>{item}</strong>
            {index < architecture.length - 1 && <ArrowUpRight size={15} />}
          </button>
        ))}
      </div>

      {active !== null && (
        <div className="flow-detail">
          <div className="flow-detail-top">
            <div>
              <span className="kicker">STAGE 0{active + 1}</span>
              <h3>{architecture[active]}</h3>
            </div>
            <button type="button" onClick={() => setActive(null)} aria-label="Close stage description">
              <X size={17} />
            </button>
          </div>
          <p>{descriptionFor(active, architecture[active])}</p>
        </div>
      )}
    </article>
  );
}
