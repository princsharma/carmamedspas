"use client";

import type { ReactNode } from "react";
import { Reveal } from "../Reveal";

type PageHeroProps = {
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
};

/** Shared inner hero for all marketing sub-pages. */
export function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="lxp-hero">
      <div className="lxp-hero__bg" aria-hidden="true">
        <div className="lxp-hero__grid" />
        <div className="lx-glow-orb lxp-hero__orb" />
      </div>
      <div className="lx-wrap">
        <Reveal className="lxp-hero__inner">
          <h1 className="lxp-hero__title">{title}</h1>
          {subtitle ? <p className="lxp-hero__sub">{subtitle}</p> : null}
          {children ? <div className="lxp-hero__actions">{children}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}
