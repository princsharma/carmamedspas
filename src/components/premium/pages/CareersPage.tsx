"use client";

import { PageHero } from "./PageHero";
import { PageCta } from "./PageCta";
import { Reveal } from "../Reveal";
import { MagneticButton } from "../MagneticButton";
import { site } from "@/data/site";

const perks = [
  { title: "Remote-first", body: "Work from anywhere in the U.S. with flexible hours built around real life." },
  { title: "Mission-driven", body: "Help thousands of patients access safe, physician-guided weight care." },
  { title: "Competitive package", body: "Meaningful compensation, equity, and comprehensive health benefits." },
  { title: "Grow with us", body: "Join early and shape how modern telehealth weight care is delivered." },
];

const roles = [
  { title: "Licensed Physician — Telehealth", team: "Clinical", location: "Remote · U.S.", type: "Full-time" },
  { title: "Nurse Practitioner — Weight Management", team: "Clinical", location: "Remote · U.S.", type: "Full-time" },
  { title: "Patient Care Coordinator", team: "Care Team", location: "Remote · U.S.", type: "Full-time" },
  { title: "Registered Dietitian", team: "Care Team", location: "Remote · U.S.", type: "Part-time" },
  { title: "Senior Full-Stack Engineer", team: "Engineering", location: "Remote", type: "Full-time" },
];

export function CareersPage() {
  const applyHref = `mailto:${site.email}?subject=Careers%20at%20CARMA`;

  return (
    <>
      <PageHero
        title={
          <>
            Build the future of
            <br />
            <span className="lx-grad-text">weight care</span>
          </>
        }
        subtitle="We're a small, mission-driven team making physician-guided GLP-1 treatment feel modern, private and genuinely supportive. Come help us do it."
      >
        <MagneticButton href="#roles" className="lx-btn lx-btn--lg">
          View open roles
        </MagneticButton>
      </PageHero>

      <section className="lx-section lx-section--tight">
        <div className="lx-wrap">
          <Reveal className="lx-section-head lx-section-head--center">
            <span className="lx-eyebrow">
              <span className="lx-eyebrow-dot" />
              Why join CARMA
            </span>
            <h2 className="lx-h2">A team that cares — literally</h2>
          </Reveal>
          <Reveal className="lxp-cards" stagger>
            {perks.map((p) => (
              <article key={p.title} className="lxp-card" data-lx-stagger>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="lx-section lx-section--tight" id="roles">
        <div className="lx-wrap">
          <Reveal className="lx-section-head lx-section-head--center">
            <span className="lx-eyebrow">
              <span className="lx-eyebrow-dot" />
              Open positions
            </span>
            <h2 className="lx-h2">Current openings</h2>
          </Reveal>
          <Reveal className="lxp-roles" stagger>
            {roles.map((r) => (
              <a key={r.title} href={applyHref} className="lxp-role" data-lx-stagger>
                <div className="lxp-role__main">
                  <h3 className="lxp-role__title">{r.title}</h3>
                  <div className="lxp-role__meta">
                    <span>{r.team}</span>
                    <span>{r.location}</span>
                    <span>{r.type}</span>
                  </div>
                </div>
                <span className="lxp-role__apply">
                  Apply
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            ))}
          </Reveal>
          <p className="lxp-mini-note">
            Don&apos;t see your role? We&apos;re always meeting great people —
            email <a href={applyHref}>{site.email}</a>.
          </p>
        </div>
      </section>

      <PageCta
        title="Want to help patients transform their health?"
        sub="Reach out and tell us how you'd like to contribute to CARMA."
      />
    </>
  );
}
