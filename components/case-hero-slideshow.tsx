"use client";

import { useEffect, useState } from "react";

type Props = {
  images: readonly string[];
};

export default function CaseHeroSlideshow({ images }: Props) {
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
    <div className="case-hero-slideshow" aria-hidden="true">
      {images.map((src, index) => (
        <div
          className={index === active ? "hero-slide active" : "hero-slide"}
          key={src}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="hero-slide-vignette" />
      <div className="hero-slide-label">SELECTED PROJECT EVIDENCE · AUTO ROTATING</div>
    </div>
  );
}
