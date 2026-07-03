"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroMedicationBg } from "./HeroMedicationBg";
import { Reveal } from "./Reveal";
import { BookConsultButton } from "./BookConsultButton";

const trustBadges = [
  "HIPAA secure",
  "Licensed clinicians",
  "From $75 enrollment",
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section section--hero section--hero-centered" id="top">
      <HeroMedicationBg />

      <div className="wrap hero-centered">
        <motion.div
          className="hero-centered-inner"
          initial={reduceMotion ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="kicker kicker--glow">Clinician-guided care</span>
          <h1>
            Clinician-<span className="text-highlight">Guided</span> Online GLP-1 <span className="text-highlight">Weight Loss</span> Program
          </h1>
          <p className="hero-sub hero-sub--lead">
            Secure and confidential evaluations with licensed medical providers.
          </p>
          <p className="hero-sub">
            Enroll in a weight loss program by connecting with a licensed healthcare
            provider for a GLP-1 evaluation. If medically appropriate, you&apos;ll
            receive a prescription.
          </p>

          <div className="hero-actions hero-actions--center">
            <BookConsultButton className="btn btn-primary btn-lg btn-glow">
              Start Weight Loss Evaluation
            </BookConsultButton>
            <a href="#glp1" className="btn btn-secondary btn-lg">
              Learn More
            </a>
          </div>

          <div className="hero-trust hero-trust--center">
            {trustBadges.map((badge) => (
              <span key={badge} className="hero-trust-badge">
                <span aria-hidden="true">●</span>
                {badge}
              </span>
            ))}
          </div>

          <p className="hero-disclaimer">
            GLP-1 medications are available by prescription and provided only after a
            licensed provider determines eligibility.
          </p>
        </motion.div>

        <Reveal delay={0.15}>
          <div className="hero-scroll-hint" aria-hidden="true">
            <span>Scroll to explore</span>
            <span className="hero-scroll-line" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
