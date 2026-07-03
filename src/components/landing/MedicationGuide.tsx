"use client";

import Image from "next/image";
import { images } from "@/data/images";
import { Reveal } from "./Reveal";
import { BookConsultButton } from "./BookConsultButton";

export function MedicationGuide() {
  return (
    <section className="section section--premium section--med-guide section--glow" id="guide">
      <div className="wrap">
        <div className="med-guide-premium">
          <Reveal className="med-guide-premium-visual">
            <div className="med-guide-premium-photo">
              <Image
                src={images.showcase.atHome.src}
                alt={images.showcase.atHome.alt}
                fill
                sizes="(max-width: 960px) 100vw, 520px"
                className="med-guide-premium-photo-img"
              />
            </div>
            <div className="med-guide-premium-accent">
              <Image
                src={images.glp.e.src}
                alt=""
                fill
                sizes="160px"
                className="med-guide-premium-photo-img"
              />
            </div>
          </Reveal>

          <Reveal className="med-guide-premium-copy" delay={0.08}>
            <span className="section-intro-kicker section-intro-kicker--dark">
              Personalized guidance
            </span>
            <h2 className="med-guide-premium-title">
              Which GLP-1 medication is right for you?
            </h2>
            <p className="med-guide-premium-lead">
              Get clear guidance from licensed medical professionals.
            </p>
            <p className="med-guide-premium-desc">
              Based on your health history, BMI range, and weight-management goals
              — and in accordance with FDA-outlined approval criteria — your
              clinician will determine which GLP-1 option may be appropriate for
              you.
            </p>
            <BookConsultButton className="btn btn-primary btn-lg">
              Schedule Weight Loss Evaluation
            </BookConsultButton>
            <p className="med-guide-premium-note">
              GLP-1 medications may cause side effects such as nausea or
              gastrointestinal discomfort. Your provider will review potential
              risks before prescribing.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
