"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { ConsultButton } from "./ConsultButton";
import { MagneticButton } from "./MagneticButton";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: EASE } },
};

const trust = [
  { icon: <Stars />, label: "4.9/5 rating" },
  { icon: <UsersIcon />, label: "50,000+ patients" },
  { icon: <ShieldIcon />, label: "HIPAA compliant" },
  { icon: <TruckIcon />, label: "Free shipping" },
  { icon: <BadgeIcon />, label: "Licensed providers" },
];

const press = ["NBC", "Yahoo", "Forbes", "Healthline", "USA Today"];

const stats = [
  { value: "50,000+", label: "Patients treated", icon: <UsersIcon /> },
  { value: "4.9★", label: "Average rating", icon: <StarIcon /> },
  { value: "18%", label: "Average weight loss*", icon: <TrendIcon /> },
  { value: "24 hrs", label: "Average doctor review", icon: <ClockIcon /> },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="lxr" id="top">
      <div className="lxr__bg" aria-hidden="true">
        <div className="lxr__shade" />
        <div className="lxr__vignette" />
        <div className="lxr__glow" />
        <div className="lxr__blob lxr__blob--1" />
        <div className="lxr__blob lxr__blob--2" />
        <div className="lxr__blob lxr__blob--3" />
        <div className="lxr__grid" />
        <div className="lxr__noise" />
      </div>

      <div className="lxr__inner lx-wrap">
        <motion.div
          className="lxr__left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 className="lxr__title" variants={item}>
            Lose Weight.
            <br />
            <span className="lx-grad-text">Keep It Off.</span>
          </motion.h1>

          <motion.p className="lxr__sub" variants={item}>
            Personalized GLP-1 treatment from licensed medical providers. Online
            evaluation, medication delivered if prescribed, and ongoing medical
            support.
          </motion.p>

          <motion.div className="lxr__actions" variants={item}>
            <ConsultButton className="lx-btn lx-btn--lg">
              Start Free Assessment
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ConsultButton>
            <MagneticButton href="#how" className="lx-btn lx-btn--ghost lx-btn--lg">
              See How It Works
            </MagneticButton>
          </motion.div>

          <motion.ul className="lxr__trust" variants={item}>
            {trust.map((t) => (
              <li key={t.label}>
                <span className="lxr__trust-icon">{t.icon}</span>
                {t.label}
              </li>
            ))}
          </motion.ul>

          <motion.div className="lxr__press" variants={item}>
            <span className="lxr__press-label">As seen in</span>
            <div className="lxr__press-logos">
              {press.map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="lxr__right">
          <motion.div
            className="lxr-scene"
            initial={reduce ? false : { opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.15 }}
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="lxr-stats lx-wrap"
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        {stats.map((s) => (
          <div key={s.label} className="lxr-stat">
            <span className="lxr-stat__icon">{s.icon}</span>
            <strong className="lxr-stat__value">{s.value}</strong>
            <span className="lxr-stat__label">{s.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

/* ── Phone dashboard mockup ── */
function PhoneMockup() {
  return (
    <div className="lxr-phone">
      <div className="lxr-phone__glow" aria-hidden="true" />
      <div className="lxr-phone__frame">
        <span className="lxr-phone__notch" />
        <div className="lxr-phone__screen">
          <div className="lxr-dash__top">
            <span className="lxr-dash__avatar" />
            <div className="lxr-dash__hello">
              <strong>Hi, Sarah</strong>
              <span>Welcome back</span>
            </div>
            <span className="lxr-dash__bell">
              <BellIcon />
            </span>
          </div>

          <div className="lxr-dash__card lxr-dash__progress">
            <div className="lxr-dash__card-head">
              <span>Weight progress</span>
              <em>-18%</em>
            </div>
            <svg viewBox="0 0 240 90" className="lxr-dash__chart" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lxrArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(124,203,94,0.35)" />
                  <stop offset="100%" stopColor="rgba(124,203,94,0)" />
                </linearGradient>
              </defs>
              <path d="M0 20 C40 24 60 40 100 50 S170 74 240 78 L240 90 L0 90 Z" fill="url(#lxrArea)" />
              <path d="M0 20 C40 24 60 40 100 50 S170 74 240 78" fill="none" stroke="#0f5e46" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="240" cy="78" r="4" fill="#0f5e46" />
            </svg>
            <div className="lxr-dash__card-foot">Down 4.2 lbs this month</div>
          </div>

          <div className="lxr-dash__row">
            <div className="lxr-dash__mini">
              <span>Medication</span>
              <strong>Wegovy</strong>
              <em className="is-good">On track</em>
            </div>
            <div className="lxr-dash__mini">
              <span>Next visit</span>
              <strong>Jul 12</strong>
              <em>2:00 PM</em>
            </div>
          </div>

          <div className="lxr-dash__chat">
            <span className="lxr-dash__chat-avatar" />
            <div>
              <strong>Dr. Niles</strong>
              <p>Great progress — let&apos;s keep your dose steady this month.</p>
            </div>
          </div>

          <div className="lxr-dash__status">
            <span>Prescription</span>
            <em>
              <CheckIcon /> Shipped
            </em>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Icons ── */
function Stars() {
  return (
    <span className="lxr-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </span>
  );
}
function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.8 5.9 20.5l1.4-6.8L2.2 9l6.9-.7L12 2z" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 5.2a3.2 3.2 0 0 1 0 6M17 20a5.5 5.5 0 0 0-3-4.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function TruckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7zM7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function BadgeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="9" r="6" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 13l-1.5 8L12 18l4.5 3L15 13M9.5 9l1.7 1.7L15 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function TrendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M4 17l5-5 4 3 7-8M20 7v4M20 7h-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21s-7-4.5-9.3-9.2C1.2 8.5 3 5 6.3 5c2 0 3.2 1 3.7 2 .5-1 1.7-2 3.7-2C17 5 18.8 8.5 21.3 11.8 19 16.5 12 21 12 21z" />
    </svg>
  );
}
function BellIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6zM10 20a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
