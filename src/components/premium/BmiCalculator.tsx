"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { Reveal } from "./Reveal";
import { ConsultButton } from "./ConsultButton";

type Unit = "metric" | "imperial";
type Gender = "female" | "male";

const categories = [
  { max: 18.5, label: "Underweight", color: "#6aa9e0", note: "A clinician can help you build toward a healthy range safely." },
  { max: 25, label: "Healthy weight", color: "#5eb85e", note: "Maintain your momentum — our team can support long-term wellness." },
  { max: 30, label: "Overweight", color: "#e0a63c", note: "You may be a candidate for a clinician-guided GLP-1 program." },
  { max: Infinity, label: "Obese", color: "#d9683f", note: "GLP-1 treatment is often clinically appropriate — start your evaluation." },
];

function getCategory(bmi: number) {
  return categories.find((c) => bmi < c.max) ?? categories[categories.length - 1];
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

  const bmi = useMemo(() => {
    let meters: number;
    let kilos: number;
    if (unit === "metric") {
      meters = cm / 100;
      kilos = kg;
    } else {
      const totalInches = ft * 12 + inch;
      meters = totalInches * 0.0254;
      kilos = lb * 0.453592;
    }
    if (!meters || !kilos) return 0;
    const value = kilos / (meters * meters);
    return Math.max(0, Math.min(60, value));
  }, [unit, cm, kg, ft, inch, lb]);

  const category = getCategory(bmi || 22);
  // Map BMI 15..40 to 0..1 of the 180deg arc.
  const progress = Math.max(0, Math.min(1, (bmi - 15) / (40 - 15)));
  const needleAngle = -90 + progress * 180;

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
          </div>

          <div className="lx-bmi__result">
            <div className="lx-bmi__gauge">
              <svg viewBox="0 0 240 140" className="lx-bmi__gauge-svg">
                <defs>
                  <linearGradient id="lxGauge" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#6aa9e0" />
                    <stop offset="38%" stopColor="#5eb85e" />
                    <stop offset="62%" stopColor="#e0a63c" />
                    <stop offset="100%" stopColor="#d9683f" />
                  </linearGradient>
                </defs>
                <path
                  d="M20 130 A100 100 0 0 1 220 130"
                  fill="none"
                  stroke="rgba(0,0,0,0.06)"
                  strokeWidth="16"
                  strokeLinecap="round"
                />
                <path
                  d="M20 130 A100 100 0 0 1 220 130"
                  fill="none"
                  stroke="url(#lxGauge)"
                  strokeWidth="16"
                  strokeLinecap="round"
                />
                <g
                  className="lx-bmi__needle"
                  style={{ transform: `rotate(${needleAngle}deg)` }}
                >
                  <line x1="120" y1="130" x2="120" y2="46" stroke={category.color} strokeWidth="4" strokeLinecap="round" />
                  <circle cx="120" cy="130" r="10" fill="#fff" stroke={category.color} strokeWidth="4" />
                </g>
              </svg>
              <div className="lx-bmi__readout">
                <span className="lx-bmi__value" style={{ color: category.color }}>
                  {bmi ? bmi.toFixed(1) : "--"}
                </span>
                <span className="lx-bmi__value-label">your BMI</span>
              </div>
            </div>

            <div
              className="lx-bmi__category"
              style={{ "--cat": category.color } as CSSProperties}
            >
              <span className="lx-bmi__category-dot" />
              {category.label}
            </div>

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
