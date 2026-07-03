"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { BookConsultButton } from "./BookConsultButton";
import { MedicationNavDropdown } from "@/components/medication/MedicationNavDropdown";

const links = [
  { href: "/#glp1", label: "What is GLP-1" },
  { href: "/#how", label: "How It Works" },
  { href: "/#benefits", label: "Benefits" },
  { href: "/#doctors", label: "Doctors" },
  { href: "/#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navClass = [
    "nav-float",
    scrolled ? "nav-float--scrolled" : "",
    menuOpen ? "nav-float--menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className="nav-shell">
      <div className={navClass}>
        <Link href="/" className="nav-logo" aria-label="CARMA Med Spa home">
          <BrandLogo />
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {links.slice(0, 2).map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <MedicationNavDropdown />
          {links.slice(2).map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <BookConsultButton className="nav-cta btn-glow">
            Start Evaluation
          </BookConsultButton>
          <button
            type="button"
            className={`nav-toggle${menuOpen ? " nav-toggle--open" : ""}`}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav
          className={`nav-mobile${menuOpen ? " nav-mobile--open" : ""}`}
          aria-label="Mobile"
        >
          <div className="nav-mobile-links">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            ))}
            <MedicationNavDropdown variant="mobile" onNavigate={closeMenu} />
          </div>
          <BookConsultButton
            className="nav-cta btn-full"
            onClick={closeMenu}
          >
            Start Evaluation
          </BookConsultButton>
        </nav>
      </div>
    </header>
  );
}
