"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getMedicationNavItems } from "@/data/medications";

type MedicationNavDropdownProps = {
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
};

export function MedicationNavDropdown({
  onNavigate,
  variant = "desktop",
}: MedicationNavDropdownProps) {
  const items = getMedicationNavItems();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  const handleOpen = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpen(true);
  };

  const handleClose = () => {
    closeTimerRef.current = window.setTimeout(() => {
      setOpen(false);
    }, 120);
  };

  useEffect(() => {
    if (variant !== "desktop") return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, [variant]);

  if (variant === "mobile") {
    return (
      <div className="nav-mobile-dropdown">
        <button
          type="button"
          className={`nav-mobile-dropdown-trigger${open ? " nav-mobile-dropdown-trigger--open" : ""}`}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          Medications
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        {open && (
          <div className="nav-mobile-dropdown-panel">
            <Link href="/#medications" onClick={onNavigate}>
              All medications
            </Link>
            {items.map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                onClick={onNavigate}
              >
                <strong>{item.brand}</strong>
                <span>{item.category}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className={`nav-dropdown${open ? " nav-dropdown--open" : ""}`}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <button
        type="button"
        className="nav-dropdown-trigger"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
      >
        Medications
        <span className="nav-dropdown-chevron" aria-hidden="true" />
      </button>

      <div className="nav-dropdown-menu">
        <div className="nav-dropdown-panel">
          <div className="nav-dropdown-header">
            <strong>GLP-1 Medications</strong>
            <Link href="/#medications" onClick={() => setOpen(false)}>
              View all
            </Link>
          </div>
          <div className="nav-dropdown-grid">
            {items.map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                className="nav-dropdown-item"
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
              >
                <span className="nav-dropdown-item-brand">{item.brand}</span>
                <span className="nav-dropdown-item-meta">{item.category}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
