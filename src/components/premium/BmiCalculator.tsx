"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Reveal } from "./Reveal";
import { ConsultButton } from "./ConsultButton";

type Unit = "metric" | "imperial";
type Gender = "female" | "male";

const categories = [
  { key: "under", max: 18.5, label: "Underweight", color: "#7eb8e8", note: "A clinician can help you build toward a healthy range safely." },
  { key: "healthy", max: 25, label: "Healthy weight", color: "#7ccb5e", note: "Maintain your momentum — our team can support long-term wellness." },
  { key: "over", max: 30, label: "Overweight", color: "#e8b84a", note: "You may be a candidate for a clinician-guided GLP-1 program." },
  { key: "obese", max: Infinity, label: "Obese", color: "#e07a52", note: "GLP-1 treatment is often clinically appropriate — start your evaluation." },
];

const scale = [
  { label: "Under", short: "<18.5", color: "#7eb8e8" },
  { label: "Healthy", short: "18.5–25", color: "#7ccb5e" },
  { label: "Over", short: "25–30", color: "#e8b84a" },
  { label: "Obese", short: "30+", color: "#e07a52" },
];

function getCategoryIndex(bmi: number) {
  return categories.findIndex((c) => bmi < c.max);
}

export function BmiCalculator() {
  const [unit, setUnit] = useState<Unit>("imperial");
  const [gender, setGender] = useState<Gender>("female");
  const [age, setAge] = useState(34);

  const [cm, setCm] = useState(168);
  const [kg, setKg] = useState(82);
  const [ft, setFt] = useState(5);
  const [inch, setInch] = useState(6);
  const [lb, setLb] = useState(180);

  const { bmi, meters } = useMemo(() => {
    let m: number;
    let kilos: number;
    if (unit === "metric") {
      m = cm / 100;
      kilos = kg;
    } else {
      const totalInches = ft * 12 + inch;
      m = totalInches * 0.0254;
      kilos = lb * 0.453592;
    }
    if (!m || !kilos) return { bmi: 0, meters: m || 0 };
    const value = kilos / (m * m);
    return { bmi: Math.max(0, Math.min(60, value)), meters: m };
  }, [unit, cm, kg, ft, inch, lb]);

  const catIndex = getCategoryIndex(bmi || 22);
  const category = categories[catIndex] ?? categories[categories.length - 1];

  const idealRange = useMemo(() => {
    if (!meters) return null;
    const lowKg = 18.5 * meters * meters;
    const highKg = 24.9 * meters * meters;
    if (unit === "metric") {
      return { low: Math.round(lowKg), high: Math.round(highKg), u: "kg" };
    }
    return {
      low: Math.round(lowKg / 0.453592),
      high: Math.round(highKg / 0.453592),
      u: "lb",
    };
  }, [meters, unit]);

  const progress = Math.max(0, Math.min(1, (bmi - 15) / (40 - 15)));

  const [shown, setShown] = useState(bmi);
  const shownRef = useRef(bmi);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      shownRef.current = bmi;
      setShown(bmi);
      return;
    }
    const from = shownRef.current;
    const to = bmi;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / 600, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = from + (to - from) * eased;
      shownRef.current = v;
      setShown(v);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [bmi]);

  const shownProgress = Math.max(0, Math.min(1, (shown - 15) / (40 - 15)));
  const needleAngle = -90 + shownProgress * 180;
  const theta = (180 - shownProgress * 180) * (Math.PI / 180);
  const markerX = 120 + 100 * Math.cos(theta);
  const markerY = 130 - 100 * Math.sin(theta);
  const arcLen = 100;

  return (
    <section className="lx-section lx-bmi lx-snap" id="bmi">
      <div className="lx-glow-orb lx-bmi__orb" aria-hidden="true" />
      <div className="lx-bmi__mesh" aria-hidden="true" />

      <div className="lx-wrap">
        <Reveal className="lx-section-head lx-section-head--center">
          <span className="lx-eyebrow">
            <span className="lx-eyebrow-dot" />
            Free 30-second check
          </span>
          <h2 className="lx-h2">
            Is GLP-1 right for <span className="lx-grad-text">you?</span>
          </h2>
          <p className="lx-lead">
            Start with your BMI. It&apos;s one of the first things a clinician
            reviews — and a helpful signal of whether treatment may be
            appropriate.
          </p>
        </Reveal>

        <Reveal className="lx-bmi__card">
          <div className="lx-bmi__form-panel">
            <div className="lx-bmi__form-head">
              <span className="lx-bmi__form-kicker">Step 1</span>
              <h3 className="lx-bmi__form-title">Enter your details</h3>
              <p className="lx-bmi__form-sub">Private, secure, and takes about 30 seconds.</p>
            </div>

            <div className="lx-bmi__form">
              <div className="lx-bmi__unit" role="group" aria-label="Unit system">
                {(["imperial", "metric"] as Unit[]).map((u) => (
                  <button
                    key={u}
                    type="button"
                    className={unit === u ? "is-active" : ""}
                    onClick={() => setUnit(u)}
                  >
                    {u === "imperial" ? "US (ft / lb)" : "Metric (cm / kg)"}
                  </button>
                ))}
              </div>

              <div className="lx-bmi__field">
                <span className="lx-bmi__label">Gender</span>
                <div className="lx-bmi__seg" role="group" aria-label="Gender">
                  {(["female", "male"] as Gender[]).map((g) => (
                    <button
                      key={g}
                      type="button"
                      className={gender === g ? "is-active" : ""}
                      onClick={() => setGender(g)}
                    >
                      <GenderIcon gender={g} />
                      <span>{g[0].toUpperCase() + g.slice(1)}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="lx-bmi__field">
                <span className="lx-bmi__label">Height</span>
                {unit === "metric" ? (
                  <div className="lx-bmi__input-wrap">
                    <input
                      type="number"
                      value={cm}
                      min={120}
                      max={230}
                      onChange={(e) => setCm(Number(e.target.value))}
                      aria-label="Height in centimeters"
                    />
                    <em>cm</em>
                  </div>
                ) : (
                  <div className="lx-bmi__row">
                    <div className="lx-bmi__input-wrap">
                      <input
                        type="number"
                        value={ft}
                        min={3}
                        max={7}
                        onChange={(e) => setFt(Number(e.target.value))}
                        aria-label="Height feet"
                      />
                      <em>ft</em>
                    </div>
                    <div className="lx-bmi__input-wrap">
                      <input
                        type="number"
                        value={inch}
                        min={0}
                        max={11}
                        onChange={(e) => setInch(Number(e.target.value))}
                        aria-label="Height inches"
                      />
                      <em>in</em>
                    </div>
                  </div>
                )}
              </div>

              <div className="lx-bmi__field">
                <span className="lx-bmi__label">Weight</span>
                <div className="lx-bmi__input-wrap">
                  {unit === "metric" ? (
                    <input
                      type="number"
                      value={kg}
                      min={35}
                      max={250}
                      onChange={(e) => setKg(Number(e.target.value))}
                      aria-label="Weight in kilograms"
                    />
                  ) : (
                    <input
                      type="number"
                      value={lb}
                      min={80}
                      max={500}
                      onChange={(e) => setLb(Number(e.target.value))}
                      aria-label="Weight in pounds"
                    />
                  )}
                  <em>{unit === "metric" ? "kg" : "lb"}</em>
                </div>
              </div>

              <div className="lx-bmi__field">
                <div className="lx-bmi__age-head">
                  <span className="lx-bmi__label">Age</span>
                  <span className="lx-bmi__age-val">{age}</span>
                </div>
                <input
                  type="range"
                  className="lx-bmi__range"
                  min={18}
                  max={80}
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  aria-label="Age"
                  style={{ "--p": `${((age - 18) / 62) * 100}%` } as CSSProperties}
                />
              </div>
            </div>

            <ul className="lx-bmi__reassure">
              {[
                "HIPAA-secure & completely private",
                "No insurance or sign-up needed",
                "Takes about 30 seconds",
              ].map((t) => (
                <li key={t}>
                  <span className="lx-bmi__reassure-icon" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="lx-bmi__result-panel">
            <div className="lx-bmi__result-bg" aria-hidden="true">
              <div className="lx-bmi__result-grid" />
              <div className="lx-glow-orb lx-bmi__result-orb" />
            </div>

            <div className="lx-bmi__result">
              <span className="lx-bmi__result-kicker">Your result</span>

              <div className="lx-bmi__gauge">
                <svg viewBox="0 0 240 150" className="lx-bmi__gauge-svg" aria-hidden="true">
                  <defs>
                    <linearGradient id="lxGauge" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#7eb8e8" />
                      <stop offset="38%" stopColor="#7ccb5e" />
                      <stop offset="62%" stopColor="#e8b84a" />
                      <stop offset="100%" stopColor="#e07a52" />
                    </linearGradient>
                    <filter id="lxGaugeGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="4" result="b" />
                      <feMerge>
                        <feMergeNode in="b" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <path
                    d="M20 130 A100 100 0 0 1 220 130"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  <path
                    className="lx-bmi__gauge-fill"
                    d="M20 130 A100 100 0 0 1 220 130"
                    fill="none"
                    stroke="url(#lxGauge)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    pathLength={arcLen}
                    strokeDasharray={`${shownProgress * arcLen} ${arcLen}`}
                  />
                  <text x="16" y="146" className="lx-bmi__tick">15</text>
                  <text x="224" y="146" className="lx-bmi__tick" textAnchor="end">40</text>

                  <g style={{ transform: `rotate(${needleAngle}deg)`, transformOrigin: "120px 130px", transition: "transform 0.15s linear" }}>
                    <line x1="120" y1="130" x2="120" y2="48" stroke={category.color} strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
                  </g>
                  <circle cx={markerX} cy={markerY} r="8" fill="#0b1712" stroke={category.color} strokeWidth="3.5" filter="url(#lxGaugeGlow)" />
                  <circle cx="120" cy="130" r="6" fill={category.color} />
                  <circle cx="120" cy="130" r="11" fill="none" stroke={category.color} strokeOpacity="0.35" strokeWidth="1.5" />
                </svg>

                <div className="lx-bmi__readout">
                  <span className="lx-bmi__value" style={{ color: category.color }}>
                    {bmi ? shown.toFixed(1) : "--"}
                  </span>
                  <span className="lx-bmi__value-label">Your BMI</span>
                </div>
              </div>

              <div
                className="lx-bmi__category"
                style={{ "--cat": category.color } as CSSProperties}
              >
                <span className="lx-bmi__category-dot" />
                {category.label}
              </div>

              <div className="lx-bmi__scale">
                <div className="lx-bmi__scale-track">
                  {scale.map((s, i) => (
                    <span
                      key={s.label}
                      className={`lx-bmi__scale-seg${catIndex === i ? " is-active" : ""}`}
                      style={{ "--seg": s.color } as CSSProperties}
                    >
                      <em>{s.label}</em>
                      <i>{s.short}</i>
                    </span>
                  ))}
                  <span
                    className="lx-bmi__scale-marker"
                    style={{ left: `${progress * 100}%`, background: category.color }}
                  />
                </div>
              </div>

              {idealRange ? (
                <div className="lx-bmi__ideal">
                  <span className="lx-bmi__ideal-label">Healthy range for your height</span>
                  <strong>
                    {idealRange.low}–{idealRange.high} {idealRange.u}
                  </strong>
                </div>
              ) : null}

              <p className="lx-bmi__note">{category.note}</p>

              <ConsultButton className="lx-btn lx-btn--lg lx-btn--light lx-bmi__cta">
                See my treatment options
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ConsultButton>

              <p className="lx-bmi__disclaimer">
                BMI is a screening tool, not a diagnosis. A licensed clinician
                makes all treatment decisions.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GenderIcon({ gender }: { gender: Gender }) {
  if (gender === "female") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 12v8M9 17h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="10" cy="14" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M14 6h6M17 3v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
