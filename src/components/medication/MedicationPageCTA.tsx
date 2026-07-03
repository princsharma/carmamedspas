"use client";

import Link from "next/link";
import type { Medication } from "@/data/medications";
import { BookConsultButton } from "@/components/landing/BookConsultButton";

type MedicationPageCTAProps = {
  medication: Medication;
};

export function MedicationPageCTA({ medication }: MedicationPageCTAProps) {
  return (
    <section className="med-page-cta">
      <div className="wrap">
        <div className="med-page-cta-inner">
          <div className="med-page-cta-copy">
            <h2>Ready to discuss {medication.brand}?</h2>
            <p>
              Book a $75 GLP-1 evaluation. A licensed clinician will review your
              history and help determine if this medication may be appropriate.
            </p>
          </div>
          <div className="med-page-cta-actions">
            <BookConsultButton
              className="btn btn-primary btn-lg btn-glow"
              medication={medication.plan}
            >
              Start evaluation
            </BookConsultButton>
            <Link href="/#faq" className="med-page-cta-link">
              Program FAQs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
