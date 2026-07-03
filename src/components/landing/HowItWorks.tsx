"use client";

import Image from "next/image";
import {
  motion,
  type MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { images } from "@/data/images";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { SectionIntro } from "./SectionIntro";
import { BookConsultButton } from "./BookConsultButton";

const steps = [
  {
    num: "01",
    title: "Start With a Free Visit",
    description:
      "Complete a secure intake form, then connect with our care team to discuss your health goals and options.",
    image: images.steps.consult,
    side: "right" as const,
    context: {
      tag: "Step 01 · Intake",
      title: "Secure online intake",
      caption: "HIPAA-compliant forms reviewed before your clinician visit.",
      image: images.showcase.preApproved,
    },
  },
  {
    num: "02",
    title: "Meet With a Licensed Clinician",
    description:
      "Meet with a licensed healthcare provider by video or audio to assess your medical history, BMI (when applicable), and eligibility for GLP-1 treatment.",
    image: images.showcase.coaching,
    side: "left" as const,
    context: {
      tag: "Step 02 · Evaluation",
      title: "Clinician-led visit",
      caption: "Video or audio consult with a licensed medical provider.",
      image: images.doctors.niles,
    },
  },
  {
    num: "03",
    title: "Receive a Prescription (If Clinically Appropriate)",
    description:
      "If appropriate, your clinician provides a prescription and treatment plan, with guidance on filling through a licensed pharmacy.",
    image: images.steps.medication,
    side: "right" as const,
    context: {
      tag: "Step 03 · Treatment",
      title: "Pharmacy coordination",
      caption:
        "Home delivery through a licensed pharmacy or fill at any licensed pharmacy.",
      image: images.glp.d,
    },
  },
];

function HowRailFill({ progress }: { progress: MotionValue<number> }) {
  const scaleY = useTransform(progress, [0.08, 0.92], [0, 1]);
  return (
    <motion.div className="how-rail-fill" style={{ scaleY }} aria-hidden="true" />
  );
}

function HowStepCard({ step }: { step: (typeof steps)[number] }) {
  return (
    <article className="how-step">
      <div className="how-step-photo">
        <Image
          src={step.image.src}
          alt={step.image.alt}
          fill
          sizes="(max-width: 720px) 100vw, 280px"
          className="how-step-photo-img"
        />
      </div>
      <div className="how-step-copy">
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
    </article>
  );
}

function HowStepContext({ step }: { step: (typeof steps)[number] }) {
  return (
    <aside
      className={`how-step-context how-step-context--${step.side === "right" ? "left" : "right"}`}
      aria-label={`${step.context.title} — ${step.context.caption}`}
    >
      <div className="how-step-context-photo">
        <Image
          src={step.context.image.src}
          alt=""
          fill
          sizes="(max-width: 1100px) 240px, 280px"
          className="how-step-context-img"
        />
      </div>
      <span className="how-step-context-tag">{step.context.tag}</span>
      <strong className="how-step-context-title">{step.context.title}</strong>
      <p className="how-step-context-caption">{step.context.caption}</p>
    </aside>
  );
}

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.65"],
  });

  return (
    <section ref={sectionRef} className="section section--how section--glow" id="how">
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
          <div className="how-timeline">
            <div className="how-rail" aria-hidden="true">
              <div className="how-rail-track" />
              {reduceMotion ? (
                <div className="how-rail-fill how-rail-fill--static" />
              ) : (
                <HowRailFill progress={scrollYProgress} />
              )}
            </div>

            <Stagger className="how-steps" stagger={0.14}>
              {steps.map((step) => (
                <StaggerItem key={step.num}>
                  <div className={`how-step-row how-step-row--${step.side}`}>
                    <div className="how-step-slot how-step-slot--left">
                      {step.side === "left" ? (
                        <HowStepCard step={step} />
                      ) : (
                        <HowStepContext step={step} />
                      )}
                    </div>
                    <div className="how-step-node">
                      <span>{step.num}</span>
                    </div>
                    <div className="how-step-slot how-step-slot--right">
                      {step.side === "right" ? (
                        <HowStepCard step={step} />
                      ) : (
                        <HowStepContext step={step} />
                      )}
                    </div>
                  </div>
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
