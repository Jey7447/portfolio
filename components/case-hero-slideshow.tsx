"use client";

import Image from "next/image";

type Props = {
  images: readonly string[];
  labels?: readonly string[];
};

export default function CaseHeroSlideshow({ images, labels }: Props) {
  if (!images.length) return null;

  const items = [...images, ...images];

  return (
    <div className="case-hero-slideshow" aria-label="Selected project evidence">
      <div className="hero-evidence-rail">
        <div className="hero-evidence-track">
          {items.map((src, index) => {
            const sourceIndex = index % images.length;
            return (
              <div className="hero-evidence-card" key={src + "-" + index}>
                <Image
                  src={src}
                  alt={labels?.[sourceIndex] ?? "Project evidence"}
                  width={1000}
                  height={560}
                  priority={sourceIndex === 0 && index === 0}
                />
                <div className="hero-evidence-card-meta">
                  <span>{String(sourceIndex + 1).padStart(2, "0")}</span>
                  <strong>{labels?.[sourceIndex] ?? "Project evidence"}</strong>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="hero-evidence-vignette" aria-hidden="true" />
    </div>
  );
}
