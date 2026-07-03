"use client";

import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

const reasons = [
  {
    price: "$75",
    title: "Affordable Program Enrollment",
    description:
      "Get started with transparent pricing and no hidden fees. Enrollment gives you access to a structured, clinician-led evaluation from day one.",
  },
  {
    title: "Licensed, Clinician-Led Care",
    description:
      "All evaluations are conducted by licensed healthcare providers who review your medical history and determine whether GLP-1 treatment may be appropriate.",
  },
  {
    title: "Guidance on GLP-1 Treatment Options",
    description:
      "Our HIPAA-compliant online process supports access to FDA-approved GLP-1 medications and compounded alternatives when clinically appropriate.",
  },
] as const;

export function WhyChooseUs() {
  const [featured, ...supporting] = reasons;

  return (
    <section className="section section--premium section--why-brand section--glow" id="why">
      <div className="wrap">
        <SectionIntro
          kicker="Why CARMA Med Spa"
          title="Why choose CARMA Med Spa"
          description="We're committed to supporting you through each step of your health journey with clarity, care, and clinical integrity."
        />

        <div className="why-premium-layout">
          <Reveal className="why-premium-featured">
            <article className="why-premium-hero">
              <div className="why-premium-hero-top">
                <span className="why-premium-price">{featured.price}</span>
                <span className="why-premium-chip">Enrollment</span>
              </div>
              <h3>{featured.title}</h3>
              <p>{featured.description}</p>
              <ul className="why-premium-list">
                <li>Transparent pricing</li>
                <li>No hidden fees</li>
                <li>Clinician-led intake</li>
              </ul>
            </article>
          </Reveal>

          <Stagger className="why-premium-stack" stagger={0.1}>
            {supporting.map((reason) => (
              <StaggerItem key={reason.title}>
                <article className="why-premium-card">
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal delay={0.1}>
          <p className="why-brand-note">
            <strong>Important:</strong> Results may vary depending on your health
            condition and body response.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
