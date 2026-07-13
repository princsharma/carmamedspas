"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { PageHero } from "./PageHero";
import { Reveal } from "../Reveal";
import { ConsultButton } from "../ConsultButton";
import { site } from "@/data/site";

const features = [
  { title: "Message your care team", body: "Reach nurses, dietitians and your physician securely, anytime." },
  { title: "Manage your plan", body: "View your prescription, dosing schedule and upcoming refills." },
  { title: "Track your progress", body: "Log weight, review milestones and prepare for check-ins." },
  { title: "Update billing", body: "Manage payment details and membership in one place." },
];

export function PatientPortalPage() {
  const [notice, setNotice] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setNotice(true);
  };

  return (
    <>
      <PageHero
        title={
          <>
            Your care,
            <br />
            <span className="lx-grad-text">all in one place</span>
          </>
        }
        subtitle="Sign in to message your care team, manage your treatment plan, track progress and handle billing — securely and privately."
      />

      <section className="lx-section lx-section--tight">
        <div className="lx-wrap lxp-portal">
          <Reveal className="lxp-signin">
            <h2 className="lxp-signin__title">Sign in</h2>
            <form className="lxp-signin__form" onSubmit={onSubmit}>
              <label className="lxp-field">
                <span>Email</span>
                <input type="email" placeholder="you@email.com" required />
              </label>
              <label className="lxp-field">
                <span>Password</span>
                <input type="password" placeholder="••••••••" required />
              </label>
              <button type="submit" className="lx-btn lx-btn--lg lxp-signin__btn">
                Sign in
              </button>
              {notice ? (
                <p className="lxp-signin__notice">
                  Portal access is provided after your first consultation. Need
                  help? Contact{" "}
                  <a href={`mailto:${site.email}`}>{site.email}</a>.
                </p>
              ) : null}
              <div className="lxp-signin__foot">
                <Link href="/contact">Forgot password?</Link>
                <span>
                  New here? <Link href="/how-it-works">Get started</Link>
                </span>
              </div>
            </form>
          </Reveal>

          <Reveal className="lxp-portal__side">
            <h3 className="lxp-portal__side-title">Everything in your portal</h3>
            <ul className="lxp-portal__features">
              {features.map((f) => (
                <li key={f.title}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <strong>{f.title}</strong>
                    <span>{f.body}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="lxp-portal__cta">
              <p>Don&apos;t have an account yet?</p>
              <ConsultButton className="lx-btn lx-btn--lg">
                Start your evaluation — $75
              </ConsultButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
