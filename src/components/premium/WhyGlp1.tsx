"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Reveal } from "./Reveal";

const steps = [
  {
    k: "01",
    title: "Signals fullness sooner",
    body: "GLP-1 mimics a natural gut hormone that tells your brain you're satisfied — so you feel full on far less.",
    icon: BrainIcon,
  },
  {
    k: "02",
    title: "Slows digestion",
    body: "Food stays in your stomach longer, smoothing out hunger and quieting the cravings that derail progress.",
    icon: ClockIcon,
  },
  {
    k: "03",
    title: "Steadies blood sugar",
    body: "A healthier insulin response flattens the energy spikes and crashes that quietly trigger snacking.",
    icon: PulseIcon,
  },
  {
    k: "04",
    title: "Quiets the food noise",
    body: "Over weeks, the constant background thoughts about food fade — and smaller portions feel effortless.",
    icon: WaveIcon,
  },
];

export function WhyGlp1() {
  const [active, setActive] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Auto-advance the deck; pauses on hover/focus.
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setActive((a) => (a + 1) % steps.length),
      3800,
    );
    return () => window.clearInterval(id);
  }, [paused]);

  // Mouse-driven 3D tilt of the whole deck.
  useEffect(() => {
    const stage = stageRef.current;
    const deck = deckRef.current;
    if (!stage || !deck) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const rect = stage.getBoundingClientRect();
      const rx = (e.clientX - rect.left) / rect.width - 0.5;
      const ry = (e.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        deck.style.transform = `rotateX(${ry * -10}deg) rotateY(${rx * 12}deg)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      deck.style.transform = "rotateX(0deg) rotateY(0deg)";
    };
    stage.addEventListener("mousemove", onMove);
    stage.addEventListener("mouseleave", onLeave);
    return () => {
      stage.removeEventListener("mousemove", onMove);
      stage.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="lx-section lx-why" id="glp1">
      <div className="lx-wrap">
        <Reveal className="lx-section-head lx-section-head--center">
          <span className="lx-eyebrow">
            <span className="lx-eyebrow-dot" />
            The science, simplified
          </span>
          <h2 className="lx-h2">Why GLP-1 actually works</h2>
          <p className="lx-lead">
            It isn&apos;t willpower — it&apos;s biology. Explore how the medicine
            works with your body.
          </p>
        </Reveal>

        <div
          className="lx-why3d"
          ref={stageRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="lx-why3d__glow" aria-hidden="true" />
          <div className="lx-why3d__deck" ref={deckRef}>
            {steps.map((s, i) => {
              const delta = i - active;
              const abs = Math.abs(delta);
              const Icon = s.icon;
              const style: CSSProperties = {
                transform: `translate(-50%, -50%) translateX(${delta * 58}%) translateZ(${-abs * 180}px) rotateY(${-delta * 34}deg) scale(${delta === 0 ? 1 : 0.9})`,
                opacity: abs > 2 ? 0 : Math.max(0.28, 1 - abs * 0.34),
                zIndex: 20 - abs,
                pointerEvents: abs > 2 ? "none" : "auto",
              };
              return (
                <button
                  type="button"
                  key={s.k}
                  className={`lx-why3d__card${delta === 0 ? " is-active" : ""}`}
                  style={style}
                  onClick={() => setActive(i)}
                  aria-label={`${s.title} — step ${i + 1}`}
                  aria-pressed={delta === 0}
                >
                  <div className="lx-why3d__card-sheen" />
                  <span className="lx-why3d__num">{s.k}</span>
                  <span className="lx-why3d__icon">
                    <Icon />
                  </span>
                  <h3 className="lx-why3d__title">{s.title}</h3>
                  <p className="lx-why3d__body">{s.body}</p>
                </button>
              );
            })}
          </div>

          <div className="lx-why3d__tabs">
            {steps.map((s, i) => (
              <button
                key={s.k}
                type="button"
                className={`lx-why3d__tab${active === i ? " is-active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Show ${s.title}`}
              >
                <span>{s.k}</span>
                {s.title}
              </button>
            ))}
          </div>
        </div>

        <Reveal className="lx-why__quote">
          <p>
            &ldquo;I finally have control over my appetite. The food noise that
            used to run my whole day is just&hellip; gone.&rdquo;
          </p>
          <footer>
            <span className="lx-why__quote-av" />
            <span>
              <strong>Maya R.</strong> · lost 42 lbs in 8 months*
            </span>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}

function BrainIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8V15a3 3 0 0 0 4 2.8V4z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5.8V15a3 3 0 0 1-4 2.8V4z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function PulseIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <path d="M3 12h4l2-6 4 12 2-6h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function WaveIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <path d="M3 9c2 0 2 2 4.5 2S10 9 12 9s2 2 4.5 2S19 9 21 9M3 15c2 0 2 2 4.5 2S10 15 12 15s2 2 4.5 2S19 15 21 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
