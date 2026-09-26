"use client";

import { useEffect, useState } from "react";

type Props = {
  images: readonly string[];
  labels?: readonly string[];
};

export default function CaseHeroSlideshow({ images, labels }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <div className="case-hero-slideshow" aria-label="Selected project evidence">
      <div className="hero-evidence-frame">
        {images.map((src, index) => (
          <div
            className={index === active ? "hero-slide active" : "hero-slide"}
            key={src}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="hero-evidence-overlay" />
        <div className="hero-evidence-meta">
          <span>{String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
          <strong>{labels?.[active] ?? "Project evidence"}</strong>
        </div>
      </div>
    </div>
  );
}
