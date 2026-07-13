"use client";

import Image from "next/image";
import { images } from "@/data/images";
import { Reveal } from "./Reveal";
import { ConsultButton } from "./ConsultButton";

const steps = [
  {
    label: "Evaluate",
    title: "Complete your online evaluation",
    body: "Answer a few secure questions about your health and goals. Enroll for $75 — no insurance headaches, no waiting rooms.",
    image: images.home.howItWorks.evaluation,
    icon: FormIcon,
  },
  {
    label: "Consult",
    title: "Meet your licensed clinician",
    body: "A provider reviews your profile, discusses your options, and — if appropriate — builds a personalised treatment plan.",
    image: images.home.howItWorks.clinician,
    icon: ChatIcon,
  },
  {
    label: "Deliver",
    title: "Get medication + ongoing support",
    body: "Your prescription ships free from a licensed pharmacy, with check-ins and dose guidance the whole way through.",
    image: images.home.howItWorks.medication,
    icon: BoxIcon,
  },
];

export function HowItWorks() {
  return (
    <section className="lx-section lx-how lx-snap" id="how">
      <div className="lx-wrap">
        <div className="lx-how__box">
          <div className="lx-how__box-glow" aria-hidden="true" />
          <Reveal className="lx-section-head lx-section-head--center">
            <span className="lx-eyebrow lx-eyebrow--light">
              <span className="lx-eyebrow-dot" />
              How it works
            </span>
            <h2 className="lx-h2 lx-how__title">Care that fits your life</h2>
            <p className="lx-lead lx-how__lead">
              From first click to first dose in as little as a few days —
              entirely online, entirely clinician-led.
            </p>
          </Reveal>

          <Reveal className="lx-how__grid" stagger>
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <article key={s.label} className="lx-how__card" data-lx-stagger>
                  <div className="lx-how__media">
                    <Image
                      src={s.image.src}
                      alt={s.image.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                      className="lx-how__img"
                    />
                    <div className="lx-how__media-scrim" />
                    <span className="lx-how__chip">
                      <Icon />
                      {s.label}
                    </span>
                  </div>
                  <div className="lx-how__body">
                    <h3 className="lx-h3">{s.title}</h3>
                    <p>{s.body}</p>
                    <span className="lx-how__more" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </article>
              );
            })}
          </Reveal>

          <Reveal className="lx-how__cta">
            <ConsultButton className="lx-btn lx-btn--lg lx-btn--light">
              Begin your evaluation — $75
            </ConsultButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FormIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="3" width="14" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 8h6M9 12h6M9 16h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16H9l-4 4V6.5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}
function BoxIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4zM4 7l8 4 8-4M12 11v10" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}
