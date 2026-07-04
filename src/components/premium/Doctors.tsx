"use client";

import Image from "next/image";
import { images } from "@/data/images";
import { Reveal } from "./Reveal";

const doctors = [
  {
    name: "Dr. Vanessa Niles",
    role: "Weight Management",
    image: images.doctors.niles,
    quote: "Sustainable change starts with a plan built for one person — you.",
  },
  {
    name: "Dr. Cheryl Bugailiskis",
    role: "Internal Medicine",
    image: images.doctors.bugailiskis,
    quote: "GLP-1 is a tool. Guidance is what makes it work.",
  },
  {
    name: "Dr. Krasne",
    role: "Board-Certified Physician",
    image: images.doctors.krasne,
    quote: "We monitor closely so you can move forward with confidence.",
  },
  {
    name: "Dr. Miller",
    role: "Metabolic Health",
    image: images.doctors.miller,
    quote: "Every dose decision is deliberate, personal and reviewed.",
  },
];

export function Doctors() {
  return (
    <section className="lx-section lx-doctors" id="doctors">
      <div className="lx-wrap">
        <Reveal className="lx-section-head lx-section-head--center">
          <span className="lx-eyebrow">
            <span className="lx-eyebrow-dot" />
            Your care team
          </span>
          <h2 className="lx-h2">Real, licensed clinicians</h2>
          <p className="lx-lead">
            Not a chatbot, not a form on autopilot. Board-certified providers
            review every plan and stay with you throughout treatment.
          </p>
        </Reveal>

        <Reveal className="lx-doctors__grid" stagger>
          {doctors.map((d) => (
            <article key={d.name} className="lx-doctor" data-lx-stagger>
              <div className="lx-doctor__photo">
                <Image
                  src={d.image.src}
                  alt={d.image.alt}
                  fill
                  sizes="(max-width: 900px) 50vw, 25vw"
                  className="lx-doctor__img"
                />
                <div className="lx-doctor__scrim" />
                <p className="lx-doctor__quote">&ldquo;{d.quote}&rdquo;</p>
              </div>
              <div className="lx-doctor__body">
                <span className="lx-doctor__role">{d.role}</span>
                <h3 className="lx-doctor__name">{d.name}</h3>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
