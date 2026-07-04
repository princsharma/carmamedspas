"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { medications, type MedicationSlug } from "@/data/medications";
import { Reveal } from "./Reveal";

export function MedicationShowcase() {
  const [selected, setSelected] = useState<MedicationSlug>("zepbound");
  const [flipping, setFlipping] = useState(false);
  const timer = useRef<number | null>(null);

  const featured = medications.find((m) => m.slug === selected) ?? medications[1];
  const rest = medications.filter((m) => m.slug !== selected);

  const handleSelect = (slug: MedicationSlug) => {
    if (slug === selected || flipping) return;
    setFlipping(true);
    if (timer.current) window.clearTimeout(timer.current);
    // Swap content at the mid-point of the flip (card edge-on), then flip back in.
    timer.current = window.setTimeout(() => {
      setSelected(slug);
      setFlipping(false);
    }, 280);
  };

  const featuredTag =
    featured.slug === "zepbound" ? "Most requested" : featured.category;

  return (
    <section className="lx-section lx-showcase lx-snap" id="showcase">
      <div className="lx-glow-orb lx-showcase__orb" />
      <div className="lx-wrap">
        <Reveal className="lx-section-head">
          <span className="lx-eyebrow">
            <span className="lx-eyebrow-dot" />
            The medications
          </span>
          <h2 className="lx-h2">
            Clinically proven treatments, <br className="lx-br-lg" />
            <span className="lx-grad-text">prescribed with care.</span>
          </h2>
          <p className="lx-lead">
            Every plan is reviewed by a licensed clinician and matched to your
            body, history and goals — never one-size-fits-all.
          </p>
        </Reveal>

        <div className="lx-showcase__grid">
          <div className="lx-showcase__featured-wrap">
            <div
              className={`lx-med-card lx-med-card--featured${flipping ? " is-flipping" : ""}`}
            >
              <div className="lx-med-card__glass" />
              <div className="lx-med-card__inner" key={featured.slug}>
                <div className="lx-med-card__media">
                  <Image
                    src={featured.image.src}
                    alt={featured.image.alt}
                    width={520}
                    height={520}
                    className="lx-med-card__img"
                  />
                  <div className="lx-med-card__halo" />
                </div>
                <div className="lx-med-card__body">
                  <span className="lx-med-card__tag">{featuredTag}</span>
                  <h3 className="lx-h3">{featured.brand}</h3>
                  <p className="lx-med-card__ingredient">{featured.ingredient}</p>
                  <p className="lx-med-card__desc">{featured.tagline}</p>
                  <div className="lx-med-card__meta">
                    <span>{featured.dosing}</span>
                    <Link
                      href={`/medications/${featured.slug}`}
                      className="lx-link"
                    >
                      View treatment
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lx-showcase__list">
            {rest.map((m) => (
              <button
                key={m.slug}
                type="button"
                onClick={() => handleSelect(m.slug)}
                className="lx-med-card lx-med-card--row"
                aria-label={`Show ${m.brand} details`}
              >
                <div className="lx-med-card__thumb">
                  <Image
                    src={m.image.src}
                    alt={m.image.alt}
                    width={140}
                    height={140}
                    className="lx-med-card__thumb-img"
                  />
                </div>
                <div className="lx-med-card__row-body">
                  <div className="lx-med-card__row-head">
                    <h3 className="lx-med-card__row-title">{m.brand}</h3>
                    {m.badge ? (
                      <span className="lx-med-card__badge">{m.badge}</span>
                    ) : null}
                  </div>
                  <p className="lx-med-card__ingredient">{m.ingredient}</p>
                  <p className="lx-med-card__row-desc">{m.shortDescription}</p>
                </div>
                <span className="lx-med-card__arrow" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
