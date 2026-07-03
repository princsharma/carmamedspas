"use client";

import Image from "next/image";
import Link from "next/link";
import type { Medication } from "@/data/medications";
import { BookConsultButton } from "@/components/landing/BookConsultButton";

type MedicationHeroProps = {
  medication: Medication;
};

export function MedicationHero({ medication }: MedicationHeroProps) {
  return (
    <section className="med-page-hero">
      <div className="wrap">
        <nav className="med-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/#medications">Medications</Link>
          <span aria-hidden="true">/</span>
          <span>{medication.brand}</span>
        </nav>

        <div className="med-page-hero-grid">
          <div className="med-page-hero-copy">
            <div className="med-page-hero-tags">
              <span className="med-page-hero-tag">{medication.category}</span>
              <span className="med-page-hero-tag med-page-hero-tag--dose">
                {medication.dosing}
              </span>
              {medication.badge && (
                <span className="med-page-hero-badge">{medication.badge}</span>
              )}
            </div>
            <h1>{medication.brand}</h1>
            <p className="med-page-hero-ingredient">{medication.ingredient}</p>
            <p className="med-page-hero-tagline">{medication.tagline}</p>
            <p className="med-page-hero-desc">{medication.shortDescription}</p>
            <div className="med-page-hero-actions">
              <BookConsultButton
                className="btn btn-primary btn-lg btn-glow"
                medication={medication.plan}
              >
                Start Evaluation — $75
              </BookConsultButton>
              <Link href="/#how" className="btn btn-secondary btn-lg">
                How it works
              </Link>
            </div>
            {medication.note && (
              <p className="med-page-hero-note">{medication.note}</p>
            )}
          </div>

          <div className="med-page-hero-visual">
            <div className="med-page-hero-card">
              <Image
                src={medication.image.src}
                alt={medication.image.alt}
                fill
                sizes="(max-width: 960px) 100vw, 420px"
                className="med-page-hero-card-img"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
