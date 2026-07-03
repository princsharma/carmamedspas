"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { images } from "@/data/images";

type CarouselCard = {
  id: string;
  kind: "metric" | "chart" | "image" | "markers";
  title: string;
  value?: string;
  detail?: string;
  status?: "positive" | "neutral";
  image?: { src: string; alt: string };
  markers?: string[];
  chart?: "line" | "bar";
  transform: { ry: number; rz: number; ty: number };
};

const carouselCards: CarouselCard[] = [
  {
    id: "metabolic",
    kind: "metric",
    title: "Metabolic Health",
    value: "Supported",
    detail: "Clinician-guided plan",
    status: "positive",
    transform: { ry: 16, rz: -5, ty: 18 },
  },
  {
    id: "enroll",
    kind: "metric",
    title: "Program Enrollment",
    value: "$75",
    detail: "Transparent pricing",
    status: "neutral",
    transform: { ry: 8, rz: -2, ty: 6 },
  },
  {
    id: "med-a",
    kind: "image",
    title: "Zepbound",
    detail: "Tirzepatide injection",
    image: images.glp.a,
    transform: { ry: -4, rz: 3, ty: 0 },
  },
  {
    id: "glp1",
    kind: "metric",
    title: "GLP-1 Support",
    value: "Active",
    detail: "Receptor activity supported",
    status: "positive",
    transform: { ry: -12, rz: 4, ty: 12 },
  },
  {
    id: "sugar",
    kind: "metric",
    title: "Blood Sugar",
    value: "Stable",
    detail: "Within target range",
    status: "positive",
    transform: { ry: 10, rz: -3, ty: 8 },
  },
  {
    id: "weight",
    kind: "chart",
    title: "Weight Progress",
    value: "On track",
    detail: "Clinician-monitored plan",
    chart: "line",
    transform: { ry: -8, rz: 2, ty: 4 },
  },
  {
    id: "med-b",
    kind: "image",
    title: "Novo Nordisk",
    detail: "Weekly injection option",
    image: images.glp.b,
    transform: { ry: 14, rz: -4, ty: 16 },
  },
  {
    id: "appetite",
    kind: "chart",
    title: "Appetite Control",
    value: "Improving",
    detail: "Hunger signals regulated",
    chart: "bar",
    transform: { ry: -6, rz: 5, ty: 10 },
  },
  {
    id: "med-c",
    kind: "image",
    title: "FDA-approved",
    detail: "Prescribed when eligible",
    image: images.glp.c,
    transform: { ry: 6, rz: -2, ty: 14 },
  },
  {
    id: "review",
    kind: "metric",
    title: "Clinician Review",
    value: "Complete",
    detail: "Licensed provider oversight",
    status: "positive",
    transform: { ry: -10, rz: -3, ty: 6 },
  },
];

const trackCards = [...carouselCards, ...carouselCards];

function MiniChart({ type }: { type: "line" | "bar" }) {
  if (type === "bar") {
    return (
      <svg className="glp1-bg-chart" viewBox="0 0 120 40" aria-hidden="true">
        <rect x="8" y="22" width="12" height="14" rx="3" fill="rgba(255,255,255,0.22)" />
        <rect x="28" y="16" width="12" height="20" rx="3" fill="rgba(255,255,255,0.28)" />
        <rect x="48" y="10" width="12" height="26" rx="3" fill="rgba(255,255,255,0.34)" />
        <rect x="68" y="14" width="12" height="22" rx="3" fill="rgba(165, 216, 103, 0.75)" />
        <rect x="88" y="6" width="12" height="30" rx="3" fill="rgba(165, 216, 103, 0.95)" />
      </svg>
    );
  }

  return (
    <svg className="glp1-bg-chart" viewBox="0 0 120 40" aria-hidden="true">
      <polyline
        points="4,32 24,26 44,28 64,18 84,14 104,8 116,6"
        fill="none"
        stroke="rgba(165, 216, 103, 0.95)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="4,32 24,26 44,28 64,18 84,14 104,8 116,6 116,40 4,40"
        fill="rgba(165, 216, 103, 0.12)"
      />
    </svg>
  );
}

function CarouselCardItem({ card }: { card: CarouselCard }) {
  const style = {
    "--glp1-ry": `${card.transform.ry}deg`,
    "--glp1-rz": `${card.transform.rz}deg`,
    "--glp1-ty": `${card.transform.ty}px`,
  } as CSSProperties;

  if (card.kind === "image" && card.image) {
    return (
      <article className="glp1-bg-card glp1-bg-card--image" style={style}>
        <div className="glp1-bg-card-photo">
          <Image
            src={card.image.src}
            alt=""
            fill
            sizes="280px"
            className="glp1-bg-card-photo-img"
          />
          <div className="glp1-bg-card-photo-scrim" />
        </div>
        <div className="glp1-bg-card-foot">
          <strong>{card.title}</strong>
          {card.detail && <span>{card.detail}</span>}
        </div>
      </article>
    );
  }

  if (card.kind === "markers" && card.markers) {
    return (
      <article className="glp1-bg-card glp1-bg-card--markers" style={style}>
        <span className="glp1-bg-card-label">{card.title}</span>
        <ul className="glp1-bg-card-markers">
          {card.markers.map((marker) => (
            <li key={marker}>{marker}</li>
          ))}
        </ul>
        {card.detail && <p className="glp1-bg-card-detail">{card.detail}</p>}
      </article>
    );
  }

  return (
    <article
      className={`glp1-bg-card glp1-bg-card--metric${card.status === "positive" ? " glp1-bg-card--positive" : ""}`}
      style={style}
    >
      <span className="glp1-bg-card-label">{card.title}</span>
      {card.value && <strong className="glp1-bg-card-value">{card.value}</strong>}
      {card.chart && <MiniChart type={card.chart} />}
      {card.detail && <p className="glp1-bg-card-detail">{card.detail}</p>}
    </article>
  );
}

export function Glp1BgCarousel() {
  return (
    <div className="glp1-bg-carousel" aria-hidden="true">
      <div className="glp1-bg-carousel-stage">
        <div className="glp1-bg-carousel-track">
          {trackCards.map((card, index) => (
            <CarouselCardItem key={`${card.id}-${index}`} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
