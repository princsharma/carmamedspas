"use client";

import Image from "next/image";
import { images } from "@/data/images";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

const reviews = [
  {
    name: "Maya R.",
    quote:
      "The online evaluation was straightforward, and my clinician explained every step of the GLP-1 process clearly.",
    result: "Clinician-guided care",
    image: images.stories.maya,
  },
  {
    name: "Jules T.",
    quote:
      "I appreciated the secure intake and follow-up visits. The team helped me understand my treatment options.",
    result: "Personalized plan",
    image: images.stories.jules,
  },
  {
    name: "Sara K.",
    quote:
      "From evaluation to prescription guidance, everything felt professional, confidential, and medically supervised.",
    result: "Ongoing support",
    image: images.stories.sara,
  },
];

export function PatientStories() {
  return (
    <section className="section section--premium section--stories section--glow" id="reviews">
      <div className="wrap">
        <SectionIntro
          kicker="Patient reviews"
          title="Trusted by patients seeking clinician-led care."
          description="Real experiences from people who chose a secure, physician-supervised path to GLP-1 treatment."
        />

        <Reveal>
          <div className="stories-premium-banner">
            <Image
              src={images.stories.banner.src}
              alt={images.stories.banner.alt}
              fill
              sizes="100vw"
              className="stories-premium-banner-img"
            />
            <div className="stories-premium-banner-overlay">
              <span>Secure, clinician-led GLP-1 evaluations from home</span>
            </div>
          </div>
        </Reveal>

        <Stagger className="stories-premium-grid" stagger={0.1}>
          {reviews.map((story) => (
            <StaggerItem key={story.name} className="stories-premium-grid-item">
              <figure className="story-premium-card">
                <div className="story-premium-photo">
                  <Image
                    src={story.image.src}
                    alt={story.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="story-premium-photo-img"
                  />
                </div>
                <figcaption className="story-premium-body">
                  <span className="story-premium-mark" aria-hidden="true">
                    &ldquo;
                  </span>
                  <blockquote>{story.quote}</blockquote>
                  <footer>
                    <strong>{story.name}</strong>
                    <span>{story.result}</span>
                  </footer>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="stories-caption">
          Individual results vary. All care is supervised by licensed clinicians.
        </p>
      </div>
    </section>
  );
}
