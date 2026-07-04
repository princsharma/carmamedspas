"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PageHero } from "./PageHero";
import { Reveal } from "../Reveal";
import { ConsultButton } from "../ConsultButton";
import { MagneticButton } from "../MagneticButton";
import { images } from "@/data/images";

const threeSteps = [
  {
    n: "1",
    title: "Schedule your visit",
    body: "A member of our care team connects with you to understand your health goals and medication preferences, including FDA-approved options and, when appropriate, compounded medications.",
  },
  {
    n: "2",
    title: "Connect with a licensed doctor",
    body: "Speak with a licensed clinician who evaluates key factors like BMI, medical history, and health goals through a secure video or audio consultation.",
  },
  {
    n: "3",
    title: "Receive care if appropriate",
    body: "If clinically appropriate, your provider issues a prescription based on your personalized plan and guides you on next steps, including pharmacy options or home delivery coordination.",
  },
];

const timeline = [
  {
    n: "1",
    label: "Step 1",
    title: "Take the eligibility quiz",
    body: "Answer a few quick questions about your health history, current medications, and weight-loss goals. Takes about 5 minutes.",
  },
  {
    n: "2",
    label: "Step 2",
    title: "Same-day physician review",
    body: "A licensed physician reviews your responses and schedules your virtual consultation at a time that works for you.",
  },
  {
    n: "3",
    label: "Step 3",
    title: "Secure telehealth consultation",
    body: "Meet with your doctor via HIPAA-secure video or audio. They evaluate your full health picture and discuss treatment options.",
  },
  {
    n: "4",
    label: "Step 4",
    title: "Personalized treatment plan",
    body: "If GLP-1 therapy is appropriate, your provider creates a tailored plan including medication selection, dosing, and lifestyle guidance.",
  },
  {
    n: "5",
    label: "Step 5",
    title: "Prescription & pharmacy coordination",
    body: "CARMA coordinates with a licensed U.S. pharmacy to fulfill your prescription — you never deal with the pharmacy directly for billing.",
  },
  {
    n: "6",
    label: "Step 6",
    title: "Home delivery",
    body: "Your medication arrives discreetly at your doorstep in 3 to 5 business days with dosing instructions and a medication user guide.",
  },
  {
    n: "∞",
    label: "Ongoing",
    title: "Track, adjust & succeed",
    body: "Regular check-ins, dose adjustments, and 24/7 access to your care team throughout your weight-loss journey.",
  },
];

const evaluationPoints = [
  "Licensed healthcare providers review your complete medical history and current medications.",
  "BMI, health goals, and weight-related conditions are evaluated against clinical guidelines.",
  "Your provider determines whether GLP-1 therapy — such as semaglutide or tirzepatide — is clinically appropriate.",
  "Telehealth consultations are conducted through HIPAA-secure platforms in accordance with state and federal regulations.",
  "Our telehealth services are not intended for emergency care — call 911 for medical emergencies.",
];

const prescriptionProcess = [
  {
    n: "01",
    title: "Clinical determination",
    body: "CARMA facilitates access to prescription medications only when a licensed healthcare provider determines that medication is medically appropriate.",
  },
  {
    n: "02",
    title: "Separate billing",
    body: "Fees charged for prescription medications are separate from consultation fees and may be billed on behalf of the patient when medically appropriate.",
  },
  {
    n: "03",
    title: "Pharmacy fulfillment",
    body: "Prescriptions are fulfilled by independent, state-licensed pharmacies responsible for dispensing and shipping medications.",
  },
  {
    n: "04",
    title: "Modification window",
    body: "Medication orders may be canceled or modified only before the prescription has been transmitted to the pharmacy for fulfillment.",
  },
];

const deliveryPoints = [
  "Secure, pharmacy-managed delivery of medications",
  "Discreet packaging with clear dosing instructions",
  "Includes a GLP-1 medication user guide",
  "Delivery typically within 3 to 5 business days",
  "CARMA coordinates with the pharmacy — contact us for any shipping concerns",
];

const supportCards = [
  {
    title: "24/7 patient support",
    body: "The CARMA team is available around the clock to offer responsive support to our patients.",
  },
  {
    title: "Dedicated care team",
    body: "Access to nurses, dietitians, and support staff whenever you need guidance.",
  },
  {
    title: "Dosage adjustments",
    body: "Your physician can adjust your dose based on clinical response and side-effect tolerance.",
  },
  {
    title: "Lifestyle guidance",
    body: "Nutrition and exercise recommendations tailored to complement your medication plan.",
  },
];

const followUpPoints = [
  "Regular virtual check-ins to monitor progress and adjust your treatment plan.",
  "Side-effect management — your care team helps address common issues like nausea.",
  "Ongoing health monitoring to ensure safe, effective progress over months and years.",
  "Evidence-based treatment plans designed to support safe, sustainable weight loss.",
  "Post-treatment support to help you maintain results with healthy lifestyle habits.",
];

const faqs = [
  {
    q: "How long does the entire process take?",
    a: "Most patients complete their eligibility quiz and consultation within the same day. Medication typically arrives within 3 to 5 business days after prescription approval.",
  },
  {
    q: "Do I need to visit a clinic in person?",
    a: "No. The entire process is 100% online — from your eligibility quiz to your consultation and ongoing follow-ups — all conducted through HIPAA-secure telehealth.",
  },
  {
    q: "What happens if I'm not approved for treatment?",
    a: "If GLP-1 therapy isn't clinically appropriate for you, your provider will explain why and discuss alternative options. You're only prescribed medication when it's medically appropriate.",
  },
];

export function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Your journey"
        title={
          <>
            How it <span className="lx-grad-text">works</span>
          </>
        }
        subtitle="From your first health quiz to ongoing physician support — a clear, transparent path to physician-guided weight loss without waiting rooms or guesswork."
      >
        <ConsultButton className="lx-btn lx-btn--lg">Start evaluation</ConsultButton>
        <MagneticButton href="/pricing" className="lx-btn lx-btn--ghost lx-btn--lg">
          View pricing
        </MagneticButton>
      </PageHero>

      {/* Three steps */}
      <section className="lx-section lx-section--tight">
        <div className="lx-wrap">
          <Reveal className="lx-section-head lx-section-head--center">
            <span className="lx-eyebrow">
              <span className="lx-eyebrow-dot" />
              Simple start
            </span>
            <h2 className="lx-h2">Three steps to get started</h2>
            <p className="lx-lead">
              We&apos;ve streamlined the process so you can focus on your health,
              not paperwork.
            </p>
          </Reveal>
          <Reveal className="lxp-steps lxp-steps--3" stagger>
            {threeSteps.map((s) => (
              <article key={s.n} className="lxp-step" data-lx-stagger>
                <span className="lxp-step__num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="lx-section lx-section--tight">
        <div className="lx-wrap">
          <Reveal className="lx-section-head lx-section-head--center">
            <span className="lx-eyebrow">
              <span className="lx-eyebrow-dot" />
              Full journey
            </span>
            <h2 className="lx-h2">Step-by-step timeline</h2>
          </Reveal>
          <Reveal className="lxt" stagger>
            <span className="lxt__line" aria-hidden="true" />
            {timeline.map((t) => (
              <div key={t.label} className="lxt__item" data-lx-stagger>
                <span className="lxt__dot">{t.n}</span>
                <div className="lxt__card">
                  <span className="lxt__label">{t.label}</span>
                  <h3 className="lxt__title">{t.title}</h3>
                  <p className="lxt__body">{t.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Medical evaluation (checklist split) */}
      <section className="lx-section lx-section--tight">
        <div className="lx-wrap">
          <Reveal className="lxp-feature">
            <div className="lxp-feature__copy">
              <span className="lx-eyebrow">
                <span className="lx-eyebrow-dot" />
                Clinical care
              </span>
              <h2 className="lx-h2 lxp-feature__title">Medical evaluation</h2>
              <p className="lxp-feature__lead">
                Every patient receives a thorough evaluation by a licensed
                physician before any treatment is recommended.
              </p>
            </div>
            <ul className="lxp-checklist">
              {evaluationPoints.map((p) => (
                <li key={p}>
                  <Check />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Prescription process */}
      <section className="lx-section lx-section--tight">
        <div className="lx-wrap">
          <Reveal className="lx-section-head lx-section-head--center">
            <span className="lx-eyebrow">
              <span className="lx-eyebrow-dot" />
              Prescribing
            </span>
            <h2 className="lx-h2">Prescription process</h2>
          </Reveal>
          <Reveal className="lxp-steps" stagger>
            {prescriptionProcess.map((s) => (
              <article key={s.n} className="lxp-step" data-lx-stagger>
                <span className="lxp-step__num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Medication delivery (image split) */}
      <section className="lx-section lx-section--tight">
        <div className="lx-wrap">
          <Reveal className="lxp-story lxp-story--reverse">
            <div className="lxp-story__media">
              <Image
                src={images.steps.medication.src}
                alt="GLP-1 medication delivered to your door"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="lxp-story__img"
              />
            </div>
            <div className="lxp-story__copy">
              <span className="lx-eyebrow">
                <span className="lx-eyebrow-dot" />
                Fulfillment
              </span>
              <h2 className="lx-h2 lxp-feature__title">Medication delivery</h2>
              <p className="lxp-feature__lead">
                Once approved, we send your prescription to a licensed U.S.
                pharmacy. Your FDA-approved GLP-1 medications are shipped to your
                doorstep.
              </p>
              <ul className="lxp-checklist">
                {deliveryPoints.map((p) => (
                  <li key={p}>
                    <Check />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ongoing support */}
      <section className="lx-section lx-section--tight">
        <div className="lx-wrap">
          <Reveal className="lx-section-head lx-section-head--center">
            <span className="lx-eyebrow">
              <span className="lx-eyebrow-dot" />
              Support
            </span>
            <h2 className="lx-h2">Ongoing support</h2>
          </Reveal>
          <Reveal className="lxp-cards" stagger>
            {supportCards.map((c) => (
              <article key={c.title} className="lxp-card" data-lx-stagger>
                <div className="lxp-card__icon">
                  <Support />
                </div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Follow-up care */}
      <section className="lx-section lx-section--tight">
        <div className="lx-wrap">
          <Reveal className="lxp-feature lxp-feature--reverse">
            <div className="lxp-feature__copy">
              <span className="lx-eyebrow">
                <span className="lx-eyebrow-dot" />
                Long-term care
              </span>
              <h2 className="lx-h2 lxp-feature__title">Follow-up care</h2>
              <p className="lxp-feature__lead">
                Weight loss is a journey, not a one-time event. We stay with you
                every step of the way.
              </p>
            </div>
            <ul className="lxp-checklist">
              {followUpPoints.map((p) => (
                <li key={p}>
                  <Check />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="lx-section lx-section--tight">
        <div className="lx-wrap lxp-faq-wrap">
          <Reveal className="lx-section-head lx-section-head--center">
            <span className="lx-eyebrow">
              <span className="lx-eyebrow-dot" />
              FAQ
            </span>
            <h2 className="lx-h2">Common questions</h2>
          </Reveal>
          <AccordionFaq faqs={faqs} />
          <div className="lxp-faq-more">
            <Link href="/faq" className="lx-link">
              View all FAQs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="lxp-cta">
        <div className="lx-wrap">
          <Reveal className="lxp-cta__banner">
            <div className="lx-glow-orb lxp-cta__orb" aria-hidden="true" />
            <div className="lxp-cta__content">
              <h2 className="lxp-cta__title">Ready to begin?</h2>
              <p className="lxp-cta__sub">
                Take the first step toward physician-guided weight loss — it only
                takes a few minutes.
              </p>
              <div className="lxp-cta__actions">
                <ConsultButton className="lx-btn lx-btn--lg lx-btn--light">
                  Start my evaluation
                </ConsultButton>
                <MagneticButton href="/contact" className="lx-btn lx-btn--lg lxp-cta__ghost">
                  Contact support
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Support() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 3a7 7 0 0 0-7 7v4a3 3 0 0 0 3 3h1v-6H7v-1a5 5 0 0 1 10 0v1h-2v6h1a3 3 0 0 0 3-3v-4a7 7 0 0 0-7-7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function AccordionFaq({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Reveal className="lx-faq__list">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className={`lx-faq__item${isOpen ? " is-open" : ""}`}>
            <button
              type="button"
              className="lx-faq__trigger"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{f.q}</span>
              <span className="lx-faq__icon" aria-hidden="true">
                <i />
                <i />
              </span>
            </button>
            <div className="lx-faq__answer-wrap">
              <p className="lx-faq__answer">{f.a}</p>
            </div>
          </div>
        );
      })}
    </Reveal>
  );
}
