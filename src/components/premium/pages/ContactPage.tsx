"use client";

import { PageHero } from "./PageHero";
import { Reveal } from "../Reveal";
import { ConsultButton } from "../ConsultButton";
import { site } from "@/data/site";

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={
          <>
            We&apos;re here
            <br />
            <span className="lx-grad-text">to help</span>
          </>
        }
        subtitle="Questions about eligibility, your plan or an existing order? Reach our care team — real people, ready to help."
      />

      <section className="lx-section lx-section--tight">
        <div className="lx-wrap">
          <Reveal className="lxp-contact" stagger>
            <a href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`} className="lxp-contact__card" data-lx-stagger>
              <div className="lxp-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Call us</h3>
              <p>{site.phone}</p>
              <span className="lxp-contact__meta">Mon–Fri, 8am–8pm ET</span>
            </a>

            <a href={`mailto:${site.email}`} className="lxp-contact__card" data-lx-stagger>
              <div className="lxp-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
                  <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Email us</h3>
              <p>{site.email}</p>
              <span className="lxp-contact__meta">We reply within 1 business day</span>
            </a>

            <div className="lxp-contact__card" data-lx-stagger>
              <div className="lxp-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
                </svg>
              </div>
              <h3>Where we operate</h3>
              <p>Telehealth across the U.S.</p>
              <span className="lxp-contact__meta">
                Including {site.states.slice(0, 4).join(", ")} &amp; more
              </span>
            </div>
          </Reveal>

          <Reveal className="lxp-contact__cta">
            <h2 className="lx-h2">The fastest way to get started</h2>
            <p>Begin your online evaluation — it takes about 5 minutes.</p>
            <ConsultButton className="lx-btn lx-btn--lg">Start your evaluation — $75</ConsultButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
