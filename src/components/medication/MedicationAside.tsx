"use client";

import Link from "next/link";
import type { Medication } from "@/data/medications";
import { BookConsultButton } from "@/components/landing/BookConsultButton";

type MedicationAsideProps = {
  medication: Medication;
};

export function MedicationAside({ medication }: MedicationAsideProps) {
  return (
    <aside className="med-page-aside">
      <div className="med-aside-card">
        <span className="med-aside-label">Get started</span>
        <p className="med-aside-price">
          Evaluation from <strong>$75</strong>
        </p>
        <p className="med-aside-desc">
          Speak with a licensed clinician to see if {medication.brand} is right
          for you.
        </p>
        <BookConsultButton
          className="btn btn-primary btn-glow med-aside-btn"
          medication={medication.plan}
        >
          Book evaluation
        </BookConsultButton>
        <ul className="med-aside-meta">
          <li>
            <span>Dosing</span>
            <strong>{medication.dosing}</strong>
          </li>
          <li>
            <span>Ingredient</span>
            <strong>{medication.ingredient}</strong>
          </li>
        </ul>
        <Link href="/#medications" className="med-aside-link">
          ← View all medications
        </Link>
      </div>
    </aside>
  );
}
