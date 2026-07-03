"use client";

import Image from "next/image";
import { images } from "@/data/images";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { SectionIntro } from "./SectionIntro";
import { BookConsultButton } from "./BookConsultButton";

const steps = [
  {
    num: "01",
    label: "Intake",
    title: "Start With a Free Visit",
    description:
      "Complete a secure, HIPAA-compliant intake form, then connect with our care team to discuss your health goals and options.",
    image: images.steps.consult,
  },
  {
    num: "02",
    label: "Evaluation",
    title: "Meet With a Licensed Clinician",
    description:
      "Meet a licensed provider by video or audio to assess your medical history, BMI (when applicable), and eligibility for GLP-1 treatment.",
    image: images.showcase.coaching,
  },
  {
    num: "03",
    label: "Treatment",
    title: "Receive a Prescription",
    description:
      "If clinically appropriate, your clinician provides a prescription and treatment plan, with guidance on filling through a licensed pharmacy.",
    image: images.steps.medication,
  },
];

export function HowItWorks() {
  return (
    <section className="section section--how section--glow" id="how">
      <div className="how-head-dark">
        <div className="how-head-glow how-head-glow--1" aria-hidden="true" />
        <div className="how-head-glow how-head-glow--2" aria-hidden="true" />
        <div className="wrap">
          <SectionIntro
            align="center"
            tone="dark"
            kicker="How It Works"
            title="Doctor-Led Weight Loss for You"
            description="We have a simple three step process for your GLP-1 evaluation."
          />
        </div>
      </div>

      <div className="how-body">
        <div className="how-bg" aria-hidden="true">
          <div className="how-bg-grid" />
          <div className="how-bg-glow" />
        </div>

        <div className="wrap how-wrap">
          <div className="how-flow">
            <div className="how-flow-line" aria-hidden="true" />

            <Stagger className="how-cards" stagger={0.14}>
              {steps.map((step) => (
                <StaggerItem key={step.num} className="how-card-item">
                  <article className="how-card">
                    <div className="how-card-num" aria-hidden="true">
                      {step.num}
                    </div>
                    <div className="how-card-media">
                      <Image
                        src={step.image.src}
                        alt={step.image.alt}
                        fill
                        sizes="(max-width: 900px) 100vw, 360px"
                        className="how-card-media-img"
                      />
                      <div className="how-card-scrim" aria-hidden="true" />
                      <span className="how-card-label">{step.label}</span>
                    </div>
                    <div className="how-card-body">
                      <h3 className="how-card-title">{step.title}</h3>
                      <p className="how-card-desc">{step.description}</p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal delay={0.1}>
            <p className="how-footnote">
              After your prescription is issued, we can help coordinate home
              delivery through a licensed pharmacy, or you may fill it at any
              licensed pharmacy.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="how-cta">
              <BookConsultButton className="btn btn-primary btn-lg btn-glow">
                Take GLP-1 Evaluation
              </BookConsultButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
