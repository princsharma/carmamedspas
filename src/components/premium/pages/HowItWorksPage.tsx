"use client";

import { PageHero } from "./PageHero";
import { PageCta } from "./PageCta";
import { Reveal } from "../Reveal";
import { ConsultButton } from "../ConsultButton";
import { processSteps, whyPoints, comparisonRows, comparisonCost } from "@/data/site";

export function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title={
          <>
            From evaluation to prescription
            <br />
            in <span className="lx-grad-text">4 simple steps</span>
          </>
        }
        subtitle="No in-person visits required. Our streamlined process connects you with a licensed physician for GLP-1 evaluation and ongoing care."
      >
        <ConsultButton className="lx-btn lx-btn--lg">Start your evaluation</ConsultButton>
      </PageHero>

      <section className="lx-section lx-section--tight">
        <div className="lx-wrap">
          <Reveal className="lxp-steps" stagger>
            {processSteps.map((s) => (
              <article key={s.n} className="lxp-step" data-lx-stagger>
                <span className="lxp-step__num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </Reveal>
          <p className="lxp-mini-note">
            Prescription approval is subject to the physician&apos;s clinical judgment.
          </p>
        </div>
      </section>

      <section className="lx-section lx-section--tight">
        <div className="lx-wrap">
          <Reveal className="lx-section-head lx-section-head--center">
            <span className="lx-eyebrow">
              <span className="lx-eyebrow-dot" />
              CARMA vs. traditional methods
            </span>
            <h2 className="lx-h2">A smarter way to lose weight</h2>
          </Reveal>

          <Reveal className="lxp-compare">
            <div className="lxp-compare__head">
              <span />
              <span className="lxp-compare__col lxp-compare__col--us">CARMA</span>
              <span className="lxp-compare__col">Traditional</span>
            </div>
            {comparisonRows.map((row) => (
              <div key={row} className="lxp-compare__row">
                <span className="lxp-compare__label">{row}</span>
                <span className="lxp-compare__cell lxp-compare__cell--us">
                  <Check />
                </span>
                <span className="lxp-compare__cell lxp-compare__cell--no">
                  <Dash />
                </span>
              </div>
            ))}
            <div className="lxp-compare__row lxp-compare__row--cost">
              <span className="lxp-compare__label">Average cost per month</span>
              <span className="lxp-compare__cell lxp-compare__cell--us">
                <strong>{comparisonCost.carma}</strong>
              </span>
              <span className="lxp-compare__cell">{comparisonCost.traditional}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="lx-section lx-section--tight">
        <div className="lx-wrap">
          <Reveal className="lx-section-head lx-section-head--center">
            <span className="lx-eyebrow">
              <span className="lx-eyebrow-dot" />
              Why CARMA
            </span>
            <h2 className="lx-h2">Medical-first, patient-centered</h2>
          </Reveal>
          <Reveal className="lxp-cards" stagger>
            {whyPoints.map((p) => (
              <article key={p.title} className="lxp-card" data-lx-stagger>
                <div className="lxp-card__icon">
                  <Shield />
                </div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <PageCta />
    </>
  );
}

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Dash() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M6 12h12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
function Shield() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
