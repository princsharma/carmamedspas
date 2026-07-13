"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { images } from "@/data/images";
import { registerGsap, gsap } from "./gsap";
import { Reveal } from "./Reveal";

const benefits = [
  {
    index: "Personalised",
    title: "A plan shaped around your biology",
    body: "No templates. Your clinician tailors medication, dose and titration to your history, labs and goals — then adjusts as your body responds.",
    points: ["Clinician-selected medication", "Gradual, tolerable titration", "Adjustments as you progress"],
    image: images.home.benefits.biology,
  },
  {
    index: "Supported",
    title: "Care that never leaves your side",
    body: "Message your care team, get side-effect guidance, and stay on track with proactive check-ins — all from your phone.",
    points: ["Unlimited secure messaging", "Proactive clinical check-ins", "Nutrition & lifestyle guidance"],
    image: images.home.benefits.support,
  },
  {
    index: "Lasting",
    title: "Built for results that hold",
    body: "Weight loss is only the beginning. We help you maintain your progress with a long-term plan designed to keep you well.",
    points: ["Maintenance protocols", "Ongoing monitoring", "Real, sustainable habits"],
    image: images.home.benefits.results,
  },
];

export function Benefits() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".lx-benefit__img").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -12 },
          {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="lx-section lx-benefits" id="benefits" ref={rootRef}>
      <div className="lx-wrap">
        <Reveal className="lx-section-head">
          <span className="lx-eyebrow">
            <span className="lx-eyebrow-dot" />
            Why CARMA
          </span>
          <h2 className="lx-h2">
            More than a prescription. <br className="lx-br-lg" />
            <span className="lx-grad-text">A partner in your health.</span>
          </h2>
        </Reveal>

        <div className="lx-benefits__list">
          {benefits.map((b, i) => (
            <Reveal
              key={b.index}
              className={`lx-benefit${i % 2 ? " lx-benefit--reverse" : ""}`}
            >
              <div className="lx-benefit__media">
                <div className="lx-benefit__img-wrap">
                  <Image
                    src={b.image.src}
                    alt={b.image.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className="lx-benefit__img"
                  />
                </div>
                <span className="lx-benefit__badge">{b.index}</span>
              </div>
              <div className="lx-benefit__copy">
                <h3 className="lx-h3 lx-benefit__title">{b.title}</h3>
                <p className="lx-benefit__body">{b.body}</p>
                <ul className="lx-benefit__points">
                  {b.points.map((p) => (
                    <li key={p}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
