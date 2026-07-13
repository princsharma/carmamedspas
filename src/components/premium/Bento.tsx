"use client";

import Image from "next/image";
import { images } from "@/data/images";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { ConsultButton } from "./ConsultButton";

export function Bento() {
  return (
    <section className="lx-section lx-bento lx-snap" id="included">
      <div className="lx-wrap">
        <Reveal className="lx-section-head">
          <span className="lx-eyebrow">
            <span className="lx-eyebrow-dot" />
            One membership, everything handled
          </span>
          <h2 className="lx-h2">
            Care that covers <span className="lx-grad-text">every step</span>
          </h2>
        </Reveal>

        <Reveal className="lx-bento__grid" stagger>
          {/* Feature */}
          <div className="lx-bento__tile lx-bento__tile--feature" data-lx-stagger>
            <div className="lx-bento__feature-bg" aria-hidden="true" />
            <span className="lx-eyebrow lx-eyebrow--light">Included</span>
            <h3 className="lx-bento__feature-title">
              A whole care team, in your pocket
            </h3>
            <ul className="lx-bento__list">
              <li>Licensed clinician evaluation &amp; prescription</li>
              <li>Personalised dose &amp; titration plan</li>
              <li>Unlimited secure messaging</li>
              <li>Ongoing monitoring &amp; adjustments</li>
            </ul>
            <ConsultButton className="lx-btn lx-btn--light lx-bento__feature-cta">
              Start your evaluation
            </ConsultButton>
          </div>

          {/* Wide image */}
          <div className="lx-bento__tile lx-bento__tile--wide lx-bento__tile--image" data-lx-stagger>
            <Image
              src={images.home.bento.schedule.src}
              alt={images.home.bento.schedule.alt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="lx-bento__img"
            />
            <div className="lx-bento__img-scrim" />
            <div className="lx-bento__img-label">
              <strong>Care on your schedule</strong>
              <span>Message your team anytime, from anywhere</span>
            </div>
          </div>

          {/* Stat */}
          <div className="lx-bento__tile lx-bento__tile--stat" data-lx-stagger>
            <div className="lx-bento__stat-value">
              <Counter to={50000} suffix="+" />
            </div>
            <div className="lx-bento__stat-label">Evaluations completed</div>
          </div>

          {/* Stat dark */}
          <div className="lx-bento__tile lx-bento__tile--stat lx-bento__tile--dark" data-lx-stagger>
            <div className="lx-bento__stat-value">
              <Counter to={4.9} decimals={1} suffix="/5" />
            </div>
            <div className="lx-bento__stat-label">Verified patient rating</div>
          </div>

          {/* Accent */}
          <div className="lx-bento__tile lx-bento__tile--wide lx-bento__tile--accent" data-lx-stagger>
            <div className="lx-bento__accent-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7zM7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <strong>Free, discreet shipping</strong>
              <span>Delivered from licensed pharmacies in 2–3 days</span>
            </div>
          </div>

          {/* Wide image 2 */}
          <div className="lx-bento__tile lx-bento__tile--wide lx-bento__tile--image" data-lx-stagger>
            <Image
              src={images.home.bento.lasting.src}
              alt={images.home.bento.lasting.alt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="lx-bento__img"
            />
            <div className="lx-bento__img-scrim" />
            <div className="lx-bento__img-label">
              <strong>Built to last</strong>
              <span>Maintenance plans that keep your progress</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
