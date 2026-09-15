"use client";

import Image from "next/image";
import { PageHero } from "./PageHero";
import { PageCta } from "./PageCta";
import { Reveal } from "../Reveal";
import { ConsultButton } from "../ConsultButton";
import { medications } from "@/data/medications";
import { glp1MedicationIntro, processSteps, whyPoints, testimonials } from "@/data/site";

export function WeightLossPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Lose weight,
            <br />
            <span className="lx-grad-text">clinically</span>
          </>
        }
        subtitle="Doctor-supervised virtual GLP-1 care with transparent all-in pricing ($149–$249/mo when prescribed) and ongoing support — built for sustainable results."
      >
        <ConsultButton className="lx-btn lx-btn--lg">Start your evaluation</ConsultButton>
      </PageHero>

      <section className="lx-section lx-section--tight">
        <div className="lx-wrap">
          <Reveal className="lx-section-head lx-section-head--center">
            <span className="lx-eyebrow">
              <span className="lx-eyebrow-dot" />
              What&apos;s included
            </span>
            <h2 className="lx-h2">Everything you need, in one program</h2>
          </Reveal>
          <Reveal className="lxp-cards" stagger>
            {whyPoints.map((p) => (
              <article key={p.title} className="lxp-card" data-lx-stagger>
                <div className="lxp-card__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="lx-section lx-section--tight">
        <div className="lx-wrap">
          <Reveal className="lx-section-head lx-section-head--center">
            <span className="lx-eyebrow">
              <span className="lx-eyebrow-dot" />
              The medications
            </span>
            <h2 className="lx-h2">Weight loss medications available through CARMA</h2>
            <p className="lx-lead">{glp1MedicationIntro}</p>
          </Reveal>
          <Reveal className="lxp-med-grid" stagger>
            {medications.map((m) => (
              <article
                key={m.slug}
                className="lx-med-card lx-med-card--row"
                data-lx-stagger
              >
                <div className="lx-med-card__thumb">
                  <Image src={m.image.src} alt={m.image.alt} width={140} height={140} className="lx-med-card__thumb-img" />
                </div>
                <div className="lx-med-card__row-body">
                  <div className="lx-med-card__row-head">
                    <h3 className="lx-med-card__row-title">{m.brand}</h3>
                    {m.badge ? <span className="lx-med-card__badge">{m.badge}</span> : null}
                  </div>
                  <p className="lx-med-card__ingredient">{m.ingredient}</p>
                  <p className="lx-med-card__row-desc">{m.shortDescription}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="lx-section lx-section--tight">
        <div className="lx-wrap">
          <Reveal className="lx-section-head lx-section-head--center">
            <span className="lx-eyebrow">
              <span className="lx-eyebrow-dot" />
              How it works
            </span>
            <h2 className="lx-h2">Four simple steps</h2>
          </Reveal>
          <Reveal className="lxp-steps" stagger>
            {processSteps.map((s) => (
              <article key={s.n} className="lxp-step" data-lx-stagger>
                <span className="lxp-step__num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="lx-section lx-section--tight">
        <div className="lx-wrap">
          <Reveal className="lx-section-head lx-section-head--center">
            <span className="lx-eyebrow">
              <span className="lx-eyebrow-dot" />
              Real transformations
            </span>
            <h2 className="lx-h2">Real people, real results</h2>
          </Reveal>
          <Reveal className="lxp-quotes" stagger>
            {testimonials.map((t) => (
              <figure key={t.name} className="lxp-quote" data-lx-stagger>
                <div className="lxp-quote__mark">&ldquo;</div>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <span className="lxp-quote__av">
                    <Image src={t.image.src} alt={t.name} width={44} height={44} />
                  </span>
                  <span>
                    <strong>{t.name}</strong>
                    <em>{t.location} · Verified patient</em>
                  </span>
                </figcaption>
              </figure>
            ))}
          </Reveal>
          <p className="lxp-mini-note">
            *Individual results vary and are not guaranteed. Testimonials reflect
            personal experiences, not typical outcomes.
          </p>
        </div>
      </section>

      <PageCta />
    </>
  );
}
