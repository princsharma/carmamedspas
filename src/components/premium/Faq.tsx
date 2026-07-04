"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { ConsultButton } from "./ConsultButton";

const faqs = [
  {
    q: "How do I know if I'm eligible for GLP-1 treatment?",
    a: "Eligibility is based on your BMI, medical history and health goals. After your online evaluation, a licensed clinician reviews everything and determines whether treatment is clinically appropriate for you.",
  },
  {
    q: "What does it cost to get started?",
    a: "Your evaluation is a flat $75 — no insurance required. If you're prescribed medication, your clinician will review pricing and options transparently before anything is filled.",
  },
  {
    q: "Are the clinicians real, licensed providers?",
    a: "Yes. Every plan is reviewed and approved by a board-certified, U.S.-licensed clinician. There's no automated prescribing — a real provider makes every medical decision.",
  },
  {
    q: "How is the medication delivered?",
    a: "Prescriptions are filled through licensed pharmacies and shipped discreetly to your door with free shipping, along with clear dosing instructions and ongoing support.",
  },
  {
    q: "What are the common side effects?",
    a: "The most common side effects are gastrointestinal — such as nausea — especially during dose increases. Your clinician titrates your dose gradually and monitors you throughout to keep treatment tolerable.",
  },
  {
    q: "Can I cancel or pause my treatment?",
    a: "Absolutely. You're never locked in. You can pause, adjust or stop your plan at any time in coordination with your care team.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="lx-section lx-faq" id="faq">
      <div className="lx-wrap lx-faq__layout">
        <Reveal className="lx-faq__intro">
          <span className="lx-eyebrow">
            <span className="lx-eyebrow-dot" />
            Questions, answered
          </span>
          <h2 className="lx-h2">Everything you want to know</h2>
          <p className="lx-lead">
            Still curious? Our care team is one message away — and always happy
            to walk you through the details.
          </p>
          <ConsultButton className="lx-btn lx-faq__cta">
            Talk to a clinician
          </ConsultButton>
        </Reveal>

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
      </div>
    </section>
  );
}
