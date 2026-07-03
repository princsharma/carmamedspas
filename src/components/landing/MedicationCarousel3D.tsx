"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState, type CSSProperties, type TouchEvent } from "react";
import { medications, type Medication } from "@/data/medications";

function slideStyle(offset: number) {
  const abs = Math.abs(offset);
  const hidden = abs > 2;

  return {
    transform: `
      translateX(calc(${offset} * clamp(180px, 22vw, 280px)))
      translateZ(calc(${abs * -120}px))
      rotateY(calc(${offset * -52}deg))
      scale(${offset === 0 ? 1 : 0.72})
    `,
    opacity: hidden ? 0 : 1 - abs * 0.22,
    zIndex: 10 - abs,
    pointerEvents: (abs <= 1 ? "auto" : "none") as CSSProperties["pointerEvents"],
    filter: abs === 0 ? "none" : `brightness(${1 - abs * 0.12})`,
  };
}

function CarouselSlide({
  med,
  offset,
  isActive,
  onSelect,
}: {
  med: Medication;
  offset: number;
  isActive: boolean;
  onSelect: () => void;
}) {
  const CardInner = (
    <>
      <div className="carousel-3d-photo">
        <Image
          src={med.image.src}
          alt={med.image.alt}
          fill
          sizes="(max-width: 768px) 280px, 360px"
          className="carousel-3d-photo-img"
          priority={isActive}
        />
        <div className="carousel-3d-photo-scrim" />
        {med.badge && <span className="carousel-3d-badge">{med.badge}</span>}
      </div>
      <div className="carousel-3d-body">
        <span className="carousel-3d-category">{med.category}</span>
        <h3>{med.brand}</h3>
        <p>{med.shortDescription}</p>
        {isActive && (
          <span className="carousel-3d-cta">
            View details
            <span aria-hidden="true">→</span>
          </span>
        )}
      </div>
    </>
  );

  const style = slideStyle(offset);

  return (
    <div
      className={`carousel-3d-slide${isActive ? " carousel-3d-slide--active" : ""}`}
      style={style}
      aria-hidden={!isActive && Math.abs(offset) > 1}
    >
      {isActive ? (
        <Link
          href={`/medications/${med.slug}`}
          className="carousel-3d-card"
          onClick={(e) => {
            if (offset !== 0) {
              e.preventDefault();
              onSelect();
            }
          }}
        >
          {CardInner}
        </Link>
      ) : (
        <button type="button" className="carousel-3d-card" onClick={onSelect}>
          {CardInner}
        </button>
      )}
    </div>
  );
}

export function MedicationCarousel3D() {
  const [active, setActive] = useState(0);
  const count = medications.length;

  const go = useCallback(
    (dir: -1 | 1) => {
      setActive((i) => (i + dir + count) % count);
    },
    [count],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const [touchStart, setTouchStart] = useState<number | null>(null);

  const onTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (touchStart === null) return;
    const delta = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(delta) > 48) go(delta > 0 ? -1 : 1);
    setTouchStart(null);
  };

  return (
    <div
      className="carousel-3d"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="carousel-3d-stage-wrap">
        <div className="carousel-3d-glow" aria-hidden="true" />
        <div className="carousel-3d-stage">
          {medications.map((med, index) => {
            let offset = index - active;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;

            return (
              <CarouselSlide
                key={med.slug}
                med={med}
                offset={offset}
                isActive={offset === 0}
                onSelect={() => setActive(index)}
              />
            );
          })}
        </div>
      </div>

      <div className="carousel-3d-controls">
        <button
          type="button"
          className="carousel-3d-nav"
          onClick={() => go(-1)}
          aria-label="Previous medication"
        >
          ‹
        </button>
        <div className="carousel-3d-dots" role="tablist" aria-label="Medications">
          {medications.map((med, index) => (
            <button
              key={med.slug}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={med.brand}
              className={`carousel-3d-dot${index === active ? " carousel-3d-dot--active" : ""}`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
        <button
          type="button"
          className="carousel-3d-nav"
          onClick={() => go(1)}
          aria-label="Next medication"
        >
          ›
        </button>
      </div>

      <p className="carousel-3d-hint">
        Swipe or use arrows · Center card opens full medication page
      </p>
    </div>
  );
}
