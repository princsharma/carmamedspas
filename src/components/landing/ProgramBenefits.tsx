"use client";

import Image from "next/image";
import { images } from "@/data/images";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { SectionIntro } from "./SectionIntro";
import { BookConsultButton } from "./BookConsultButton";

const benefits = [
  {
    index: "01",
    title: "Clinician-Led Care",
    description:
      "Work with licensed providers who review your medical background to determine GLP-1 suitability.",
  },
  {
    index: "02",
    title: "Personalized Treatment Plan",
    description:
      "When appropriate, your care plan may include GLP-1 medications with clinical oversight.",
  },
  {
    index: "03",
    title: "Lifestyle Guidance",
    description:
      "Receive personalized support for nutrition, activity, and sustainable long-term health habits.",
  },
  {
    index: "04",
    title: "Ongoing Monitoring",
    description:
      "Regular follow-ups track progress and allow your provider to adjust your plan as needed.",
  },
];

const monitoring = [
  "Nutrition Tracking",
  "Fitness Tracking",
  "Glucose Monitoring",
  "Weight Scale",
  "Metabolic Health",
  "Health Monitoring",
];

export function ProgramBenefits() {
  return (
    <section className="section section--premium section--benefits section--glow" id="benefits">
      <div className="wrap">
        <SectionIntro
          kicker="Program benefits"
          title="Medical oversight meets practical, everyday support."
          description="Our approach balances clinical rigor with guidance you can actually live with — built for sustainable progress, not short-term fixes."
        />

        <Reveal>
          <div className="benefits-premium-banner">
            <Image
              src={images.benefits.banner.src}
              alt={images.benefits.banner.alt}
              fill
              sizes="100vw"
              className="benefits-premium-banner-img"
            />
            <div className="benefits-premium-banner-overlay">
              <span>Care coaching, monitoring, and clinician oversight — included</span>
            </div>
          </div>
        </Reveal>

        <Stagger className="benefits-premium-grid" stagger={0.1}>
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <article className="benefit-premium-card">
                <span className="benefit-premium-index">{benefit.index}</span>
                <div className="benefit-premium-content">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.08}>
          <div className="monitor-dock">
            <div className="monitor-dock-label">Included health monitoring</div>
            <div className="monitor-dock-track">
              {monitoring.map((item) => (
                <span key={item} className="monitor-dock-item">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="benefits-cta">
            <BookConsultButton className="btn btn-primary btn-lg btn-glow">
              Take GLP-1 Evaluation
            </BookConsultButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
