"use client";

import { useMemo, useState } from "react";
import { PageHero } from "./PageHero";
import { PageCta } from "./PageCta";
import { Reveal } from "../Reveal";
import { ConsultButton } from "../ConsultButton";
import type { MedicationPlan } from "@/context/ConsultBookingContext";
import {
  pricingComparison,
  pricingFilters,
  pricingPlans,
  type PricingFilterId,
  site,
} from "@/data/site";

function CompareCell({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span>{value}</span>;
  }
  return value ? (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-label="Yes">
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <span className="lxp-compare__cell--no" aria-label="No">
      —
    </span>
  );
}

function plansForFilter(filter: PricingFilterId) {
  if (filter === "all") return pricingPlans;
  if (filter === "consultation") {
    return pricingPlans.filter((p) => p.id === "consultation");
  }
  return pricingPlans.filter(
    (p) => p.id !== "consultation" && p.categories.includes(filter),
  );
}

function planMedication(
  filter: PricingFilterId,
  plan: (typeof pricingPlans)[number],
): MedicationPlan {
  if (filter === "compounded-tirz" && "planTirz" in plan && plan.planTirz) {
    return plan.planTirz;
  }
  return plan.plan;
}

export function PricingPage() {
  const [filter, setFilter] = useState<PricingFilterId>("all");
  const visiblePlans = useMemo(() => plansForFilter(filter), [filter]);
  const evalPrice = `$${site.evaluationPrice}`;

  return (
    <>
      <PageHero
        title={
          <>
            Pricing plans
            <br />
            <span className="lx-grad-text">Choose a plan that fits.</span>
          </>
        }
        subtitle={`Transparent, all-in pricing from a ${evalPrice} consultation to monthly programs at $149–$249 — care and compounded medication together when prescribed.`}
      />

      <section className="lx-section lx-section--tight">
        <div className="lx-wrap">
          <Reveal className="lxp-pricing-head">
            <div className="lxp-pricing-tabs" role="tablist" aria-label="Pricing categories">
              {pricingFilters.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={filter === tab.id}
                  className={`lxp-pricing-tab${filter === tab.id ? " is-active" : ""}`}
                  onClick={() => setFilter(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal className="lxp-pricing" stagger key={filter}>
            {visiblePlans.map((p) => (
              <article
                key={p.id}
                className={`lxp-plan${p.highlight ? " lxp-plan--featured" : ""}`}
                data-lx-stagger
              >
                {p.ribbon ? (
                  <span className="lxp-plan__ribbon">{p.ribbon}</span>
                ) : null}
                {p.save ? <span className="lxp-plan__save">{p.save}</span> : null}
                <h3 className="lxp-plan__name">{p.name}</h3>
                {p.planLength ? (
                  <p className="lxp-plan__length">{p.planLength}</p>
                ) : null}
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
                  medication={planMedication(filter, p)}
                >
                  {p.cta}
                </ConsultButton>
              </article>
            ))}
          </Reveal>

          <Reveal className="lxp-compare">
            <div className="lxp-compare__head">
              <span className="lxp-compare__col" />
              <span className="lxp-compare__col lxp-compare__col--us">
                {pricingComparison.competitors[0]}
              </span>
              <span className="lxp-compare__col">{pricingComparison.competitors[1]}</span>
            </div>
            <div className="lxp-compare__row lxp-compare__row--cost">
              <span className="lxp-compare__label">Typical monthly total</span>
              <span className="lxp-compare__cell lxp-compare__cell--us">
                <strong>{pricingComparison.cost.us}</strong>
              </span>
              <span className="lxp-compare__cell">{pricingComparison.cost.them}</span>
            </div>
            {pricingComparison.rows.map((row) => (
              <div key={row.label} className="lxp-compare__row">
                <span className="lxp-compare__label">{row.label}</span>
                <span className="lxp-compare__cell lxp-compare__cell--us">
                  <CompareCell value={row.us} />
                </span>
                <span className="lxp-compare__cell">
                  <CompareCell value={row.them} />
                </span>
              </div>
            ))}
          </Reveal>

          <p className="lxp-mini-note">
            Plans combine virtual physician care and medication when a licensed
            provider determines treatment is clinically appropriate. Compounded
            semaglutide and tirzepatide are prepared by licensed U.S. pharmacies
            and are not FDA-approved products. Longer commitments reflect lower
            monthly rates; cancel per your plan terms before the next billing
            cycle.
          </p>
        </div>
      </section>

      <PageCta
        title="Ready to get started?"
        sub={`Your ${evalPrice} consultation is the first step. No insurance, no commitment.`}
      />
    </>
  );
}
