"use client";

import Image from "next/image";
import { images } from "@/data/images";
import { Reveal } from "./Reveal";
import { ConsultButton } from "./ConsultButton";

export function FinalCta() {
  return (
    <section className="lx-section lx-finalcta lx-snap">
      <div className="lx-wrap">
        <Reveal className="lx-finalcta__banner">
          <div className="lx-finalcta__bg" aria-hidden="true">
            <div className="lx-glow-orb lx-finalcta__orb lx-finalcta__orb--1" />
            <div className="lx-glow-orb lx-finalcta__orb lx-finalcta__orb--2" />
            <div className="lx-finalcta__grid" />
          </div>

          <div className="lx-finalcta__content">
            <span className="lx-eyebrow lx-eyebrow--light">
              <span className="lx-eyebrow-dot" />
              Your journey starts today
            </span>
            <h2 className="lx-finalcta__title">
              Ready to feel like yourself again?
            </h2>
            <p className="lx-finalcta__sub">
              Take the 30-second evaluation and connect with a licensed
              clinician. If GLP-1 is right for you, they&apos;ll build a plan
              made for your body.
            </p>
            <div className="lx-finalcta__actions">
              <ConsultButton className="lx-btn lx-btn--lg lx-btn--light">
                Start your evaluation — $75
              </ConsultButton>
              <a href="#showcase" className="lx-link lx-finalcta__link">
                Explore treatments
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <ul className="lx-finalcta__trust">
              <li>Licensed U.S. clinicians</li>
              <li>HIPAA-secure</li>
              <li>Free discreet shipping</li>
            </ul>
          </div>

          <div className="lx-finalcta__visual" aria-hidden="true">
            <div className="lx-finalcta__graph-scene">
              <div className="lx-finalcta__graph-glow" />
              <Image
                src={images.cta.graph.src}
                alt=""
                fill
                sizes="(max-width: 860px) 90vw, 55vw"
                className="lx-finalcta__graph-img"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
