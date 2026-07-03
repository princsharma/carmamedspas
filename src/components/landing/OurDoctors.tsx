"use client";

import Image from "next/image";
import { images } from "@/data/images";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { SectionIntro } from "./SectionIntro";
import { BookConsultButton } from "./BookConsultButton";

const doctors = [
  {
    name: "Dr. Miller",
    role: "Weight Management",
    bio: "Licensed medical provider focused on metabolic health and established clinical standards.",
    image: images.doctors.miller,
  },
  {
    name: "Dr. Vanessa Niles",
    role: "30+ Years Experience",
    bio: "Offers individualized weight loss evaluations tailored to each patient's health profile and goals.",
    image: images.doctors.niles,
  },
  {
    name: "Dr. Cheryl Bugailiskis",
    role: "Personalized Care",
    bio: "Assesses each patient's medical background to guide appropriate GLP-1 treatment options.",
    image: images.doctors.bugailiskis,
  },
  {
    name: "Dr. Krasne",
    role: "Board Certified",
    bio: "Provides individualized assessments and may recommend GLP-1 treatment when clinically appropriate.",
    image: images.doctors.krasne,
  },
];

export function OurDoctors() {
  return (
    <section className="section section--premium section--doctors section--glow" id="doctors">
      <div className="wrap">
        <SectionIntro
          kicker="Our doctors"
          title="Licensed clinicians on your care team."
          description="We connect you with experienced physicians who prescribe GLP-1 medications based on your eligibility and medical history."
        />

        <Stagger className="doctors-premium-grid" stagger={0.1}>
          {doctors.map((doctor) => (
            <StaggerItem key={doctor.name}>
              <article className="doctor-premium-card doctor-premium-card--stacked">
                <div className="doctor-premium-photo">
                  <Image
                    src={doctor.image.src}
                    alt={`${doctor.name}, licensed medical provider`}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="doctor-premium-photo-img"
                  />
                </div>
                <div className="doctor-premium-body doctor-premium-body--stacked">
                  <span className="doctor-premium-role">{doctor.role}</span>
                  <h3>{doctor.name}</h3>
                  <p>{doctor.bio}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="doctors-cta">
            <BookConsultButton className="btn btn-primary btn-lg btn-glow">
              Start Weight Loss Evaluation
            </BookConsultButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
