"use client";

import Link from "next/link";
import Image from "next/image";
import { images } from "@/data/images";
import { medications } from "@/data/medications";

const columns = [
  {
    title: "Treatments",
    links: [
      { label: "Weight-loss program", href: "/weight-loss" },
      ...medications.slice(0, 5).map((m) => ({
        label: m.brand,
        href: `/medications/${m.slug}`,
      })),
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Our physicians", href: "/our-physicians" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact us", href: "/contact" },
      { label: "Patient portal", href: "/patient-portal" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Medical Disclaimer", href: "/legal/medical-disclaimer" },
      { label: "Refund & Billing", href: "/legal/refund-billing" },
      { label: "Editorial Policy", href: "/legal/editorial-policy" },
      { label: "Compliance Hub", href: "/legal/compliance-hub" },
      { label: "HIPAA Notice", href: "/legal/hipaa" },
      { label: "Accessibility", href: "/legal/accessibility" },
    ],
  },
];

export function PremiumFooter() {
  return (
    <footer className="lx-footer">
      <div className="lx-wrap">
        <div className="lx-footer__shell">
          <div className="lx-footer__glow" aria-hidden="true" />
          <div className="lx-footer__top">
            <div className="lx-footer__brand">
              <Image
                src={images.logo.src}
                alt={images.logo.alt}
                width={images.logo.width}
                height={images.logo.height}
                className="lx-footer__logo-img"
                unoptimized
              />
              <p className="lx-footer__tag">
                Clinician-guided GLP-1 weight care — evaluated online,
                personalised to you, delivered with intention.
              </p>
            </div>

            <div className="lx-footer__cols">
              {columns.map((col) => (
                <div key={col.title} className="lx-footer__col">
                  <span className="lx-footer__col-title">{col.title}</span>
                  <ul>
                    {col.links.map((l) => (
                      <li key={l.label}>
                        {l.href.startsWith("#") ? (
                          <a href={l.href}>{l.label}</a>
                        ) : (
                          <Link href={l.href}>{l.label}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="lx-footer__wordmark" aria-hidden="true">
            CARMA
          </div>

          <div className="lx-footer__legal">
            <p>© {new Date().getFullYear()} CARMA Med Spa. All rights reserved.</p>
            <p className="lx-footer__disclaimer">
              This site is for informational purposes only and does not
              constitute medical advice. Prescriptions are issued only when a
              licensed clinician determines treatment is medically appropriate.
              Individual results vary.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
