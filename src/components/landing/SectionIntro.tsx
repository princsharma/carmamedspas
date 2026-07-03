"use client";

import { Reveal } from "./Reveal";

type SectionIntroProps = {
  kicker: string;
  title: string;
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
      <span className="section-intro-kicker">
        <span className="section-intro-kicker-glow" aria-hidden="true" />
        {kicker}
      </span>
      <h2 className="section-intro-title">{title}</h2>
      {description && <p className="section-intro-desc">{description}</p>}
    </Reveal>
  );
}
