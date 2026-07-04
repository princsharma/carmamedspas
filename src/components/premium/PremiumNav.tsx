"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { images } from "@/data/images";
import { medications } from "@/data/medications";
import { ConsultButton } from "./ConsultButton";

const links = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function PremiumNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const ddTimer = useRef<number | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const showcaseHref = isHome ? "#showcase" : "/#showcase";

  const openDd = () => {
    if (ddTimer.current) window.clearTimeout(ddTimer.current);
    setDdOpen(true);
  };
  const closeDd = () => {
    ddTimer.current = window.setTimeout(() => setDdOpen(false), 130);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`lx-nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="lx-nav__bar">
        <Link href="/" className="lx-nav__logo" aria-label="CARMA Med Spa home">
          <Image
            src={images.logo.src}
            alt={images.logo.alt}
            width={118}
            height={34}
            priority
          />
        </Link>

        <nav className="lx-nav__links" aria-label="Primary">
          <div
            className={`lx-nav__dd${ddOpen ? " is-open" : ""}`}
            onMouseEnter={openDd}
            onMouseLeave={closeDd}
          >
            <button
              type="button"
              className="lx-nav__dd-trigger"
              aria-expanded={ddOpen}
              aria-haspopup="true"
              onClick={() => setDdOpen((o) => !o)}
            >
              Treatments
              <span className="lx-nav__dd-chevron" aria-hidden="true" />
            </button>
            <div className="lx-nav__dd-menu">
              <div className="lx-nav__dd-panel">
                <div className="lx-nav__dd-head">
                  <strong>GLP-1 medications</strong>
                  <Link href="/weight-loss" onClick={() => setDdOpen(false)}>
                    View program
                  </Link>
                </div>
                <div className="lx-nav__dd-grid">
                  {medications.map((m) => (
                    <Link
                      key={m.slug}
                      href={`/medications/${m.slug}`}
                      className="lx-nav__dd-item"
                      onClick={() => setDdOpen(false)}
                    >
                      <span className="lx-nav__dd-item-thumb">
                        <Image
                          src={m.image.src}
                          alt={m.image.alt}
                          width={44}
                          height={44}
                        />
                      </span>
                      <span className="lx-nav__dd-item-text">
                        <span className="lx-nav__dd-item-brand">{m.brand}</span>
                        <span className="lx-nav__dd-item-meta">{m.ingredient}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="lx-nav__actions">
          <ConsultButton className="lx-btn lx-nav__cta">
            Start evaluation
          </ConsultButton>
          <button
            type="button"
            className={`lx-nav__burger${open ? " is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`lx-nav__sheet${open ? " is-open" : ""}`}>
        <div className="lx-nav__sheet-inner">
          <nav className="lx-nav__sheet-links" aria-label="Mobile">
            <Link href={showcaseHref} onClick={() => setOpen(false)}>
              Treatments
            </Link>
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="lx-nav__sheet-meds">
            <span className="lx-nav__sheet-label">Medications</span>
            <div className="lx-nav__sheet-med-grid">
              {medications.map((m) => (
                <Link
                  key={m.slug}
                  href={`/medications/${m.slug}`}
                  onClick={() => setOpen(false)}
                >
                  {m.brand}
                </Link>
              ))}
            </div>
          </div>
          <ConsultButton className="lx-btn lx-btn--lg lx-nav__sheet-cta">
            Start your evaluation
          </ConsultButton>
        </div>
      </div>
    </header>
  );
}
