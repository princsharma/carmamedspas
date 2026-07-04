"use client";

import { PageHero } from "./PageHero";
import { PageCta } from "./PageCta";
import { Reveal } from "../Reveal";
import { ConsultButton } from "../ConsultButton";
import { pricingPlans } from "@/data/site";

export function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Simple, transparent
            <br />
            <span className="lx-grad-text">no hidden fees</span>
          </>
        }
        subtitle="Start with a $75 evaluation. If treatment is right for you, choose a program that includes medication, personalized dosing and unlimited care-team support."
      />

      <section className="lx-section lx-section--tight">
        <div className="lx-wrap">
          <Reveal className="lxp-pricing" stagger>
            {pricingPlans.map((p) => (
              <article
                key={p.name}
                className={`lxp-plan${p.highlight ? " lxp-plan--featured" : ""}`}
                data-lx-stagger
              >
                {p.highlight ? (
                  <span className="lxp-plan__ribbon">Most popular</span>
                ) : null}
                <h3 className="lxp-plan__name">{p.name}</h3>
                <p className="lxp-plan__tagline">{p.tagline}</p>
                <div className="lxp-plan__price">
                  <strong>{p.price}</strong>
                  <span>{p.cadence}</span>
                </div>
                <ul className="lxp-plan__features">
                  {p.features.map((f) => (
                    <li key={f}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <ConsultButton
                  className={`lx-btn lx-btn--lg lxp-plan__cta${p.highlight ? "" : " lx-btn--ghost"}`}
                  medication={p.plan}
                >
                  {p.cta}
                </ConsultButton>
              </article>
            ))}
          </Reveal>

          <p className="lxp-mini-note">
            Medication pricing shown is illustrative and finalized after your
            consultation. Costs may vary by medication, dose, insurance and
            pharmacy. Memberships can be cancelled anytime before the next billing date.
          </p>
        </div>
      </section>

      <PageCta title="Ready to get started?" sub="Your $75 evaluation is the first step. No insurance, no commitment." />
    </>
  );
}
