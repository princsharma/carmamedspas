"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Reveal } from "./Reveal";
import { ConsultButton } from "./ConsultButton";

type Unit = "metric" | "imperial";
type Gender = "female" | "male";

const categories = [
  { key: "under", max: 18.5, label: "Underweight", color: "#6aa9e0", note: "A clinician can help you build toward a healthy range safely." },
  { key: "healthy", max: 25, label: "Healthy weight", color: "#5eb85e", note: "Maintain your momentum — our team can support long-term wellness." },
  { key: "over", max: 30, label: "Overweight", color: "#e0a63c", note: "You may be a candidate for a clinician-guided GLP-1 program." },
  { key: "obese", max: Infinity, label: "Obese", color: "#d9683f", note: "GLP-1 treatment is often clinically appropriate — start your evaluation." },
];

const scale = [
  { label: "Under", short: "<18.5", color: "#6aa9e0" },
  { label: "Healthy", short: "18.5–25", color: "#5eb85e" },
  { label: "Over", short: "25–30", color: "#e0a63c" },
  { label: "Obese", short: "30+", color: "#d9683f" },
];

function getCategoryIndex(bmi: number) {
  return categories.findIndex((c) => bmi < c.max);
}

export function BmiCalculator() {
  const [unit, setUnit] = useState<Unit>("imperial");
  const [gender, setGender] = useState<Gender>("female");
  const [age, setAge] = useState(34);

  // metric
  const [cm, setCm] = useState(168);
  const [kg, setKg] = useState(82);
  // imperial
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

  // Ideal healthy weight range (BMI 18.5–24.9) for the given height.
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

  // Map BMI 15..40 to 0..1 of the 180° arc.
  const progress = Math.max(0, Math.min(1, (bmi - 15) / (40 - 15)));

  // Smoothly animate the displayed BMI + gauge fill.
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
  // Marker point on the arc (center 120,130, r 100).
  const theta = (180 - shownProgress * 180) * (Math.PI / 180);
  const markerX = 120 + 100 * Math.cos(theta);
  const markerY = 130 - 100 * Math.sin(theta);
  const arcLen = 100; // normalized via pathLength

  return (
    <section className="lx-section lx-bmi lx-snap" id="bmi">
      <div className="lx-glow-orb lx-bmi__orb" />
      <div className="lx-wrap">
        <Reveal className="lx-section-head lx-section-head--center">
          <span className="lx-eyebrow">
            <span className="lx-eyebrow-dot" />
            Free 30-second check
          </span>
          <h2 className="lx-h2">Is GLP-1 right for you?</h2>
          <p className="lx-lead">
            Start with your BMI. It&apos;s one of the first things a clinician
            reviews — and a helpful signal of whether treatment may be
            appropriate.
          </p>
        </Reveal>

        <Reveal className="lx-bmi__card">
          <div className="lx-bmi__form">
            <div className="lx-bmi__unit">
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
              <div className="lx-bmi__seg">
                {(["female", "male"] as Gender[]).map((g) => (
                  <button
                    key={g}
                    type="button"
                    className={gender === g ? "is-active" : ""}
                    onClick={() => setGender(g)}
                  >
                    {g[0].toUpperCase() + g.slice(1)}
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
                  />
                ) : (
                  <input
                    type="number"
                    value={lb}
                    min={80}
                    max={500}
                    onChange={(e) => setLb(Number(e.target.value))}
                  />
                )}
                <em>{unit === "metric" ? "kg" : "lb"}</em>
              </div>
            </div>

            <div className="lx-bmi__field">
              <span className="lx-bmi__label">Age — {age}</span>
              <input
                type="range"
                className="lx-bmi__range"
                min={18}
                max={80}
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                style={{ "--p": `${((age - 18) / 62) * 100}%` } as CSSProperties}
              />
            </div>

            <ul className="lx-bmi__reassure">
              {[
                "HIPAA-secure & completely private",
                "No insurance or sign-up needed",
                "Takes about 30 seconds",
              ].map((t) => (
                <li key={t}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="lx-bmi__result">
            <div className="lx-bmi__gauge">
              <svg viewBox="0 0 240 150" className="lx-bmi__gauge-svg">
                <defs>
                  <linearGradient id="lxGauge" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#6aa9e0" />
                    <stop offset="38%" stopColor="#5eb85e" />
                    <stop offset="62%" stopColor="#e0a63c" />
                    <stop offset="100%" stopColor="#d9683f" />
                  </linearGradient>
                  <filter id="lxGaugeGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Track */}
                <path
                  d="M20 130 A100 100 0 0 1 220 130"
                  fill="none"
                  stroke="rgba(0,0,0,0.06)"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                {/* Progress fill */}
                <path
                  className="lx-bmi__gauge-fill"
                  d="M20 130 A100 100 0 0 1 220 130"
                  fill="none"
                  stroke="url(#lxGauge)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  pathLength={arcLen}
                  strokeDasharray={`${shownProgress * arcLen} ${arcLen}`}
                />
                {/* End labels */}
                <text x="16" y="146" className="lx-bmi__tick">15</text>
                <text x="224" y="146" className="lx-bmi__tick" textAnchor="end">40</text>

                {/* Needle */}
                <g style={{ transform: `rotate(${needleAngle}deg)`, transformOrigin: "120px 130px", transition: "transform 0.15s linear" }}>
                  <line x1="120" y1="130" x2="120" y2="52" stroke={category.color} strokeWidth="3" strokeLinecap="round" />
                </g>
                {/* Moving marker on the arc */}
                <circle cx={markerX} cy={markerY} r="9" fill="#fff" stroke={category.color} strokeWidth="4" filter="url(#lxGaugeGlow)" />
                {/* Hub */}
                <circle cx="120" cy="130" r="7" fill={category.color} />
                <circle cx="120" cy="130" r="13" fill="none" stroke={category.color} strokeOpacity="0.25" strokeWidth="2" />
              </svg>

              <div className="lx-bmi__readout">
                <span className="lx-bmi__value" style={{ color: category.color }}>
                  {bmi ? shown.toFixed(1) : "--"}
                </span>
                <span className="lx-bmi__value-label">your BMI</span>
              </div>
            </div>

            {/* Category scale */}
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

            <div
              className="lx-bmi__category"
              style={{ "--cat": category.color } as CSSProperties}
            >
              <span className="lx-bmi__category-dot" />
              {category.label}
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

            <ConsultButton className="lx-btn lx-btn--lg lx-bmi__cta">
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
        </Reveal>
      </div>
    </section>
  );
}
