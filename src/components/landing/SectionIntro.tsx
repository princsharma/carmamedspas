"use client";

import { Reveal } from "./Reveal";

import type { ReactNode } from "react";

type SectionIntroProps = {
  kicker: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionIntro({
  kicker,
  title,
  description,
  align = "center",
  tone = "light",
  className = "",
}: SectionIntroProps) {
  return (
    <Reveal
      className={[
        "section-intro",
        `section-intro--${align}`,
        `section-intro--${tone}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        className={`section-intro-kicker${tone === "dark" ? " section-intro-kicker--dark" : ""}`}
      >
        <span className="section-intro-kicker-glow" aria-hidden="true" />
        {kicker}
      </span>
      <h2 className="section-intro-title">{title}</h2>
      {description && <p className="section-intro-desc">{description}</p>}
    </Reveal>
  );
}
