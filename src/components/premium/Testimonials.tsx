"use client";

import Image from "next/image";
import { useState } from "react";
import { images } from "@/data/images";
import { Reveal } from "./Reveal";

const stories = [
  {
    name: "Maya R.",
    result: "-42 lbs in 8 months",
    quote:
      "For the first time the constant food noise just… stopped. The clinician check-ins kept me on track without ever feeling judged.",
    image: images.home.testimonials.story1,
  },
  {
    name: "Jules T.",
    result: "-31 lbs in 6 months",
    quote:
      "I was nervous about injections. My provider walked me through everything and adjusted my dose when I needed it. It felt genuinely personal.",
    image: images.home.testimonials.story2,
  },
  {
    name: "Sara K.",
    result: "Maintaining for 1 year",
    quote:
      "The maintenance plan is what sold me. This isn't a crash diet — it's the first thing that's ever actually lasted for me.",
    image: images.home.testimonials.story3,
  },
  {
    name: "Dana P.",
    result: "-27 lbs in 5 months",
    quote:
      "Everything happened from my phone. No waiting rooms, no awkward conversations — just a real doctor and a plan that worked.",
    image: images.home.testimonials.story4,
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = stories.length;

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);

  return (
    <section className="lx-section lx-tst" id="stories">
      <div className="lx-wrap">
        <Reveal className="lx-tst__head">
          <div>
            <span className="lx-eyebrow">
              <span className="lx-eyebrow-dot" />
              Real patients, real results
            </span>
            <h2 className="lx-h2">Stories that speak for themselves</h2>
          </div>
          <div className="lx-tst__controls">
            <button type="button" aria-label="Previous" onClick={() => go(-1)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" aria-label="Next" onClick={() => go(1)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </Reveal>

        <div className="lx-tst__viewport">
          <div
            className="lx-tst__track"
            style={{ transform: `translateX(calc(${-index} * (100% / ${count})))`, width: `${count * 100}%` }}
          >
            {stories.map((s) => (
              <article key={s.name} className="lx-tst__card" style={{ width: `calc(100% / ${count})` }}>
                <div className="lx-tst__media">
                  <Image
                    src={s.image.src}
                    alt={`${s.name}, CARMA patient`}
                    fill
                    sizes="(max-width: 900px) 100vw, 60vw"
                    className="lx-tst__img"
                  />
                  <div className="lx-tst__scrim" />
                  <span className="lx-tst__result">{s.result}</span>
                </div>
                <div className="lx-tst__body">
                  <div className="lx-tst__quote-mark">&ldquo;</div>
                  <blockquote>{s.quote}</blockquote>
                  <footer>
                    <strong>{s.name}</strong>
                    <span className="lx-tst__verified">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Verified CARMA patient
                    </span>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="lx-tst__dots">
          {stories.map((s, i) => (
            <button
              key={s.name}
              type="button"
              aria-label={`Go to story ${i + 1}`}
              className={i === index ? "is-active" : ""}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <p className="lx-tst__disclaimer">
          *Individual results vary and are not guaranteed. Testimonials reflect
          personal experiences, not typical outcomes.
        </p>
      </div>
    </section>
  );
}
