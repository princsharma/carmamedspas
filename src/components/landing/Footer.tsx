"use client";

import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { BrandLogo } from "./BrandLogo";
import { BookConsultButton } from "./BookConsultButton";

const linkGroups = [
  {
    title: "Program",
    links: [
      { href: "#glp1", label: "What is GLP-1" },
      { href: "#how", label: "How It Works" },
      { href: "#medications", label: "Medications" },
      { href: "#benefits", label: "Benefits" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "#doctors", label: "Our Doctors" },
      { href: "#faq", label: "FAQ" },
      { href: "#consult", label: "Start Evaluation" },
      { href: "mailto:hello@carmamedspa.com", label: "hello@carmamedspa.com" },
    ],
  },
];

const trustPoints = ["HIPAA compliant", "Licensed clinicians", "From $75"];

export function Footer() {
  return (
    <footer className="footer footer--premium">
      <div className="footer-shell">
        <div className="footer-glow footer-glow--1" aria-hidden="true" />
        <div className="footer-glow footer-glow--2" aria-hidden="true" />

        <div className="footer-ambient" aria-hidden="true">
          <Image
            src={images.footer.ambient.src}
            alt=""
            fill
            sizes="100vw"
            className="footer-ambient-img"
          />
          <div className="footer-ambient-scrim" />
        </div>

        <div className="wrap footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="footer-logo" aria-label="CARMA Med Spa home">
                <BrandLogo variant="footer" />
              </Link>
              <p className="footer-tagline">
                Clinician-guided online GLP-1 weight loss program with secure
                evaluations, licensed medical providers, and HIPAA-compliant care.
              </p>
              <ul className="footer-trust">
                {trustPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            {linkGroups.map((group) => (
              <nav
                key={group.title}
                className="footer-col"
                aria-label={group.title}
              >
                <strong className="footer-col-title">{group.title}</strong>
                <ul className="footer-col-links">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <aside className="footer-cta-card">
              <span className="footer-cta-kicker">Get started</span>
              <p className="footer-cta-price">
                Enroll for <strong>$75</strong>
              </p>
              <p className="footer-cta-desc">
                Start your weight loss evaluation with a licensed healthcare
                provider today.
              </p>
              <BookConsultButton className="btn btn-primary btn-glow footer-cta-btn">
                Start Evaluation
              </BookConsultButton>
            </aside>
          </div>

          <div className="footer-legal">
            <p className="footer-copy">
              © {new Date().getFullYear()} CARMA Med Spa. All rights reserved.
            </p>
            <p className="footer-disclaimer">
              GLP-1 medications are available by prescription only after a licensed
              provider determines eligibility. CARMA Med Spa does not guarantee
              specific results. Medications may not be suitable for everyone and are
              prescribed in accordance with FDA guidelines based on independent
              clinical judgment.
            </p>
          </div>
        </div>

        <div className="footer-wordmark" aria-hidden="true">
          carma
        </div>
      </div>
    </footer>
  );
}
