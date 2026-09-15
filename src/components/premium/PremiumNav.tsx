"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { images } from "@/data/images";
import { ConsultButton } from "./ConsultButton";

const links = [
  { href: "/weight-loss", label: "Treatments" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/our-physicians", label: "Medical team" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function PremiumNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const treatmentsHref = isHome ? "#showcase" : "/weight-loss";

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
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.label === "Treatments" ? treatmentsHref : l.href}
            >
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
            <Link href={treatmentsHref} onClick={() => setOpen(false)}>
              Treatments
            </Link>
            {links.slice(1).map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </nav>
          <ConsultButton className="lx-btn lx-btn--lg lx-nav__sheet-cta">
            Start your evaluation
          </ConsultButton>
        </div>
      </div>
    </header>
  );
}
