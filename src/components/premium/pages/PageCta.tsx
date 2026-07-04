"use client";

import { Reveal } from "../Reveal";
import { ConsultButton } from "../ConsultButton";

export function PageCta({
  title = "Start your weight-loss journey today",
  sub = "Join thousands of patients who have transformed their health with physician-guided GLP-1 therapy.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="lxp-cta">
      <div className="lx-wrap">
        <Reveal className="lxp-cta__banner">
          <div className="lx-glow-orb lxp-cta__orb" aria-hidden="true" />
          <div className="lxp-cta__content">
            <h2 className="lxp-cta__title">{title}</h2>
            <p className="lxp-cta__sub">{sub}</p>
            <ConsultButton className="lx-btn lx-btn--lg lx-btn--light">
              Start your evaluation — $75
            </ConsultButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
