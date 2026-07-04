"use client";

import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

const logos = [
  "Ideal Physician",
  "TeleHealth+",
  "MedReview",
  "CarePharma",
  "WellPath",
  "VitalTrust",
];

const stats = [
  { to: 50000, suffix: "+", label: "Evaluations completed" },
  { to: 4.9, decimals: 1, suffix: "/5", label: "Average patient rating" },
  { to: 18.2, decimals: 1, suffix: "%", label: "Avg. body-weight change*" },
  { to: 24, suffix: "h", label: "Typical clinician review" },
];

export function TrustedBy() {
  return (
    <section className="lx-section lx-section--tight lx-trusted" id="trusted">
      <div className="lx-wrap">
        <Reveal className="lx-trusted__head">
          <span className="lx-trusted__kicker">
            Trusted by patients & clinicians nationwide
          </span>
        </Reveal>

        <div className="lx-trusted__marquee" aria-hidden="true">
          <div className="lx-trusted__track">
            {[...logos, ...logos].map((name, i) => (
              <span key={i} className="lx-trusted__logo">
                {name}
              </span>
            ))}
          </div>
        </div>

        <Reveal className="lx-trusted__stats" stagger>
          {stats.map((s) => (
            <div key={s.label} className="lx-trusted__stat" data-lx-stagger>
              <div className="lx-trusted__stat-value">
                <Counter to={s.to} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </div>
              <div className="lx-trusted__stat-label">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
