"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { medications, type Medication } from "@/data/medications";
import { registerGsap, gsap } from "./gsap";
import { Reveal } from "./Reveal";
import { ConsultButton } from "./ConsultButton";
import { MagneticButton } from "./MagneticButton";

export function PremiumMedicationPage({ medication }: { medication: Medication }) {
  const related = medications.filter((m) => m.slug !== medication.slug).slice(0, 3);
  const heroRef = useRef<HTMLElement>(null);
  const penRef = useRef<HTMLDivElement>(null);
  const chipA = useRef<HTMLDivElement>(null);
  const chipB = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.from("[data-med-in]", {
        y: 30,
        opacity: 0,
        filter: "blur(8px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, [medication.slug]);

  return (
    <article className="lxm">
      {/* ---------- HERO ---------- */}
      <section className="lxm-hero lx-snap" ref={heroRef}>
        <div className="lxm-hero__bg" aria-hidden="true">
          <div className="lxm-hero__grid" />
          <div className="lx-glow-orb lxm-hero__orb lxm-hero__orb--1" />
          <div className="lx-glow-orb lxm-hero__orb lxm-hero__orb--2" />
        </div>

        <div className="lx-wrap">
          <nav className="lxm-crumb" aria-label="Breadcrumb" data-med-in>
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#showcase">Treatments</Link>
            <span aria-hidden="true">/</span>
            <span>{medication.brand}</span>
          </nav>

          <div className="lxm-hero__grid-layout">
            <div className="lxm-hero__copy">
              <div className="lxm-hero__tags" data-med-in>
                <span className="lxm-tag">{medication.category}</span>
                <span className="lxm-tag lxm-tag--muted">{medication.dosing}</span>
                {medication.badge ? (
                  <span className="lxm-tag lxm-tag--solid">{medication.badge}</span>
                ) : null}
              </div>

              <h1 className="lxm-hero__title" data-med-in>
                {medication.brand}
              </h1>
              <p className="lxm-hero__ingredient" data-med-in>
                {medication.ingredient}
              </p>
              <p className="lxm-hero__tagline" data-med-in>
                {medication.tagline}
              </p>
              <p className="lxm-hero__desc" data-med-in>
                {medication.shortDescription}
              </p>

              <div className="lxm-hero__actions" data-med-in>
                <ConsultButton
                  className="lx-btn lx-btn--lg"
                  medication={medication.plan}
                >
                  Start evaluation — $75
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </ConsultButton>
                <MagneticButton href="#how" className="lx-btn lx-btn--ghost lx-btn--lg">
                  How treatment works
                </MagneticButton>
              </div>

              {medication.note ? (
                <p className="lxm-hero__note" data-med-in>
                  {medication.note}
                </p>
              ) : null}
            </div>

            <div className="lxm-hero__visual">
              <div className="lxm-hero__stage">
                <div className="lxm-hero__glow" />
                <div className="lxm-hero__ring lxm-hero__ring--1" />
                <div className="lxm-hero__ring lxm-hero__ring--2" />
                <div className="lxm-hero__pen" ref={penRef}>
                  <Image
                    src={medication.image.src}
                    alt={medication.image.alt}
                    width={560}
                    height={560}
                    priority
                    className="lxm-hero__pen-img"
                  />
                </div>
                <div className="lxm-hero__chip lxm-hero__chip--a" ref={chipA}>
                  <span className="lxm-hero__chip-label">Dosing</span>
                  <strong>{medication.dosing}</strong>
                </div>
                <div className="lxm-hero__chip lxm-hero__chip--b" ref={chipB}>
                  <span className="lxm-hero__chip-label">Active ingredient</span>
                  <strong>{medication.ingredient}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SPECS ---------- */}
      <section className="lxm-specs">
        <div className="lx-wrap">
          <Reveal className="lxm-specs__grid" stagger>
            {medication.highlights.map((h) => (
              <div key={h.label} className="lxm-spec" data-lx-stagger>
                <span className="lxm-spec__label">{h.label}</span>
                <span className="lxm-spec__value">{h.value}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------- BODY ---------- */}
      <section className="lxm-body">
        <div className="lx-wrap lxm-layout">
          <div className="lxm-main">
            <Reveal className="lxm-block">
              <span className="lx-eyebrow">
                <span className="lx-eyebrow-dot" />
                Overview
              </span>
              <h2 className="lx-h2 lxm-block__h">About {medication.brand}</h2>
              <p className="lxm-lead">{medication.overview}</p>
            </Reveal>

            <div className="lxm-split">
              <Reveal className="lxm-card">
                <h3 className="lxm-card__title">
                  <IconCheck /> Key benefits
                </h3>
                <ul className="lxm-list">
                  {medication.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="lxm-card" delay={90}>
                <h3 className="lxm-card__title">
                  <IconUser /> Who may qualify
                </h3>
                <ul className="lxm-list">
                  {medication.eligibility.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal className="lxm-block" id="how">
              <span className="lx-eyebrow">
                <span className="lx-eyebrow-dot" />
                The process
              </span>
              <h2 className="lx-h2 lxm-block__h">How treatment works</h2>
              <div className="lxm-steps">
                {medication.howItWorks.map((s, i) => (
                  <div key={s.title} className="lxm-step">
                    <span className="lxm-step__num">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="lxm-step__title">{s.title}</h3>
                      <p className="lxm-step__body">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="lxm-note">
              <h3 className="lxm-note__title">Good to know</h3>
              <ul className="lxm-list lxm-list--note">
                {medication.considerations.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className="lxm-note__disclaimer">
                GLP-1 medications are available by prescription only after a
                licensed provider determines eligibility. This information is
                educational and not medical advice.
              </p>
            </Reveal>

            <Reveal className="lxm-block">
              <span className="lx-eyebrow">
                <span className="lx-eyebrow-dot" />
                FAQ
              </span>
              <h2 className="lx-h2 lxm-block__h">Common questions</h2>
              <div className="lx-faq__list lxm-faq">
                {medication.faqs.map((f, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div key={f.question} className={`lx-faq__item${isOpen ? " is-open" : ""}`}>
                      <button
                        type="button"
                        className="lx-faq__trigger"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                      >
                        <span>{f.question}</span>
                        <span className="lx-faq__icon" aria-hidden="true">
                          <i />
                          <i />
                        </span>
                      </button>
                      <div className="lx-faq__answer-wrap">
                        <p className="lx-faq__answer">{f.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* Sticky aside */}
          <aside className="lxm-aside">
            <div className="lxm-plan">
              <span className="lxm-plan__label">Get started</span>
              <p className="lxm-plan__price">
                Evaluation from <strong>$75</strong>
              </p>
              <p className="lxm-plan__desc">
                Speak with a licensed clinician to see if {medication.brand} is
                right for you.
              </p>
              <ConsultButton
                className="lx-btn lx-btn--lg lxm-plan__cta"
                medication={medication.plan}
              >
                Book evaluation
              </ConsultButton>
              <ul className="lxm-plan__meta">
                <li>
                  <span>Dosing</span>
                  <strong>{medication.dosing}</strong>
                </li>
                <li>
                  <span>Ingredient</span>
                  <strong>{medication.ingredient}</strong>
                </li>
                <li>
                  <span>Category</span>
                  <strong>{medication.category}</strong>
                </li>
              </ul>
              <ul className="lxm-plan__trust">
                <li>HIPAA-secure</li>
                <li>Free shipping</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* ---------- RELATED ---------- */}
      <section className="lxm-related">
        <div className="lx-wrap">
          <Reveal className="lxm-related__head">
            <h2 className="lx-h2">Other GLP-1 options</h2>
            <Link href="/#showcase" className="lx-link">
              View all treatments
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
          <Reveal className="lxm-related__grid" stagger>
            {related.map((m) => (
              <Link
                key={m.slug}
                href={`/medications/${m.slug}`}
                className="lx-med-card lx-med-card--row"
                data-lx-stagger
              >
                <div className="lx-med-card__thumb">
                  <Image
                    src={m.image.src}
                    alt={m.image.alt}
                    width={140}
                    height={140}
                    className="lx-med-card__thumb-img"
                  />
                </div>
                <div className="lx-med-card__row-body">
                  <div className="lx-med-card__row-head">
                    <h3 className="lx-med-card__row-title">{m.brand}</h3>
                  </div>
                  <p className="lx-med-card__ingredient">{m.ingredient}</p>
                  <p className="lx-med-card__row-desc">{m.shortDescription}</p>
                </div>
                <span className="lx-med-card__arrow" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="lxm-cta lx-snap">
        <div className="lx-wrap">
          <Reveal className="lxm-cta__banner">
            <div className="lxm-cta__bg" aria-hidden="true">
              <div className="lx-glow-orb lxm-cta__orb" />
            </div>
            <div className="lxm-cta__content">
              <h2 className="lxm-cta__title">
                Ready to see if {medication.brand} is right for you?
              </h2>
              <p className="lxm-cta__sub">
                Start your online evaluation and connect with a licensed
                clinician — no insurance required.
              </p>
              <ConsultButton
                className="lx-btn lx-btn--lg lx-btn--light"
                medication={medication.plan}
              >
                Start your evaluation — $75
              </ConsultButton>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}

function IconCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconUser() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 20a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
