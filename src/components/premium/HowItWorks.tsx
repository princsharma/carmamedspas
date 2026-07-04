"use client";

import Image from "next/image";
import { images } from "@/data/images";
import { Reveal } from "./Reveal";
import { ConsultButton } from "./ConsultButton";

const steps = [
  {
    n: "01",
    title: "Complete your online evaluation",
    body: "Answer a few secure questions about your health and goals. Enroll for $75 — no insurance headaches, no waiting rooms.",
    image: images.steps.consult,
  },
  {
    n: "02",
    title: "Meet your licensed clinician",
    body: "A provider reviews your profile, discusses your options, and — if appropriate — builds a personalised treatment plan.",
    image: images.showcase.coaching,
  },
  {
    n: "03",
    title: "Get medication + ongoing support",
    body: "Your prescription ships free from a licensed pharmacy, with check-ins and dose guidance the whole way through.",
    image: images.steps.medication,
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
            {steps.map((s) => (
              <article key={s.n} className="lx-how__card" data-lx-stagger>
                <div className="lx-how__media">
                  <Image
                    src={s.image.src}
                    alt={s.image.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    className="lx-how__img"
                  />
                  <span className="lx-how__num">{s.n}</span>
                </div>
                <div className="lx-how__body">
                  <h3 className="lx-h3">{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </article>
            ))}
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
