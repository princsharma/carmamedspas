"use client";

import Image from "next/image";
import { images } from "@/data/images";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { BookConsultButton } from "./BookConsultButton";

const trustItems = [
  "HIPAA compliant",
  "Clinically guided care",
  "Insurance accepted",
];

export function FinalCTA() {
  return (
    <section className="section section--snap section--cta section--glow" id="consult">
      <div className="wrap cta-banner cta-banner--premium">
        <div className="cta-bg" aria-hidden="true">
          <Image
            src={images.cta.consult.src}
            alt=""
            fill
            sizes="100vw"
            className="cta-bg-image"
          />
          <div className="cta-bg-scrim" />
          <div className="cta-bg-orb cta-bg-orb--1" />
          <div className="cta-bg-orb cta-bg-orb--2" />
          <div className="cta-bg-shape cta-bg-shape--1" />
          <div className="cta-bg-shape cta-bg-shape--2" />
        </div>

        <Reveal className="cta-content">
          <span className="kicker kicker--light kicker--glow">Start today</span>
          <h2>Start Your Fitness Journey Today</h2>
          <p>
            Book your consultation with a licensed clinician to determine
            treatment eligibility.
          </p>
          <BookConsultButton className="btn btn-light btn-lg btn-glow cta-btn">
            Get Started for $75
          </BookConsultButton>
          <a href="mailto:hello@carmamedspa.com" className="cta-contact-link">
            Contact Us
          </a>
          <Stagger className="cta-trust" stagger={0.08}>
            {trustItems.map((item) => (
              <StaggerItem key={item}>
                <span className="cta-trust-item">✓ {item}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        <Reveal className="cta-visual-wrap" delay={0.1}>
          <div className="cta-visual cta-visual--glow">
            <div className="cta-visual-ring" aria-hidden="true" />
            <Image
              src={images.cta.wellness.src}
              alt={images.cta.wellness.alt}
              fill
              sizes="(max-width: 960px) 100vw, 280px"
              className="cta-visual-img"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
