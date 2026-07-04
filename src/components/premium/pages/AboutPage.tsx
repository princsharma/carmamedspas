"use client";

import Image from "next/image";
import { PageHero } from "./PageHero";
import { PageCta } from "./PageCta";
import { Reveal } from "../Reveal";
import { images } from "@/data/images";
import { values, heroStats } from "@/data/site";

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CARMA"
        title={
          <>
            Medical weight care,
            <br />
            <span className="lx-grad-text">built on trust</span>
          </>
        }
        subtitle="We started CARMA to make physician-guided GLP-1 treatment feel modern, private and genuinely supportive — without the waiting rooms, judgment or hidden fees."
      />

      <section className="lx-section lx-section--tight">
        <div className="lx-wrap">
          <Reveal className="lxp-story">
            <div className="lxp-story__media">
              <Image
                src={images.showcase.coaching.src}
                alt={images.showcase.coaching.alt}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="lxp-story__img"
              />
            </div>
            <div className="lxp-story__copy">
              <h2 className="lx-h2">Care that treats you like a person</h2>
              <p>
                Weight is medical, not a matter of willpower. Yet too many people
                are left to figure it out alone. CARMA pairs FDA-approved GLP-1
                medications with board-certified physicians and a care team that
                stays with you — from your first evaluation to long-term
                maintenance.
              </p>
              <p>
                Everything happens online, on your schedule, with pricing you can
                actually understand. No surprises, no pressure — just real
                medicine and real support.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="lx-section lx-section--tight">
        <div className="lx-wrap">
          <Reveal className="lxp-stats" stagger>
            {heroStats.map((s) => (
              <div key={s.label} className="lxp-stat" data-lx-stagger>
                <div className="lxp-stat__value">{s.value}</div>
                <div className="lxp-stat__label">{s.label}</div>
              </div>
            ))}
          </Reveal>
          <p className="lxp-mini-note">
            *Based on clinical studies. Individual results may vary. GLP-1
            medications are prescribed only when deemed appropriate by a licensed
            healthcare provider and are not suitable for everyone.
          </p>
        </div>
      </section>

      <section className="lx-section lx-section--tight">
        <div className="lx-wrap">
          <Reveal className="lx-section-head lx-section-head--center">
            <span className="lx-eyebrow">
              <span className="lx-eyebrow-dot" />
              What we stand for
            </span>
            <h2 className="lx-h2">Our values</h2>
          </Reveal>
          <Reveal className="lxp-cards" stagger>
            {values.map((v) => (
              <article key={v.title} className="lxp-card" data-lx-stagger>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <PageCta />
    </>
  );
}
