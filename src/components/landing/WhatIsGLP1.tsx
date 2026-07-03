"use client";

import Image from "next/image";
import { images } from "@/data/images";
import { Glp1BgCarousel } from "./Glp1BgCarousel";
import { Stagger, StaggerItem } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

const features = [
  {
    index: "01",
    title: "Natural Hormone Support",
    description:
      "Supports natural GLP-1 function to help regulate hunger and maintain stable blood sugar levels.",
    image: images.glp.a,
  },
  {
    index: "02",
    title: "Once-Weekly Injection",
    description:
      "Subcutaneous injection taken weekly when prescribed and monitored by a licensed healthcare provider.",
    image: images.glp.b,
  },
  {
    index: "03",
    title: "Clinically Studied & FDA-Approved Options",
    description:
      "Medications like Semaglutide and Tirzepatide are FDA-approved and prescribed based on individual health needs.",
    image: images.glp.c,
  },
];

export function WhatIsGLP1() {
  return (
    <section className="section section--glp1" id="glp1">
      <div className="glp1-hero-stage">
        <div className="wrap glp1-hero-copy">
          <SectionIntro
            kicker="What is GLP-1?"
            title={
              <>
                <span className="text-highlight">Comprehensive support</span> for medically guided weight management.
              </>
            }
            description="GLP-1 receptor agonists support blood sugar control and appetite regulation, helping improve metabolic health under proper medical supervision."
          />
        </div>

        <Glp1BgCarousel />
      </div>

      <div className="glp1-panel">
        <div className="wrap">
          <Stagger className="glp1-bento" stagger={0.12}>
            {features.map((feature, index) => (
              <StaggerItem
                key={feature.title}
                className={`glp1-feature${index === 0 ? " glp1-feature--lead" : ""}${index === 1 ? " glp1-feature--mid" : ""}`}
              >
                <article className="glp1-feature-inner">
                  <div className="glp1-feature-photo">
                    <Image
                      src={feature.image.src}
                      alt={feature.image.alt}
                      fill
                      sizes="(max-width: 960px) 100vw, 560px"
                      className="glp1-feature-photo-img"
                    />
                    <div className="glp1-feature-photo-scrim" />
                  </div>
                  <div className="glp1-feature-body">
                    <span className="glp1-feature-index">{feature.index}</span>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}