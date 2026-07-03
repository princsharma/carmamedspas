import Link from "next/link";
import { medications, type Medication } from "@/data/medications";
import { MedicationAside } from "@/components/medication/MedicationAside";
import { MedicationCard } from "@/components/medication/MedicationCard";
import { MedicationFAQBlock } from "@/components/medication/MedicationFAQBlock";
import { MedicationHero } from "@/components/medication/MedicationHero";
import { MedicationHighlights } from "@/components/medication/MedicationHighlights";
import { MedicationPageCTA } from "@/components/medication/MedicationPageCTA";
import { MedicationSteps } from "@/components/medication/MedicationSteps";

type MedicationPageViewProps = {
  medication: Medication;
};

export function MedicationPageView({ medication }: MedicationPageViewProps) {
  const related = medications.filter((med) => med.slug !== medication.slug).slice(0, 3);

  return (
    <main className="med-page">
      <MedicationHero medication={medication} />
      <MedicationHighlights highlights={medication.highlights} />

      <div className="wrap med-page-layout">
        <div className="med-page-main">
          <section className="med-page-block">
            <h2 className="med-page-block-title">About {medication.brand}</h2>
            <p className="med-page-lead">{medication.overview}</p>
          </section>

          <section className="med-page-block med-page-split">
            <div className="med-page-split-card">
              <h3 className="med-page-split-title">Key benefits</h3>
              <ul className="med-simple-list">
                {medication.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
            <div className="med-page-split-card">
              <h3 className="med-page-split-title">Who may qualify</h3>
              <ul className="med-simple-list">
                {medication.eligibility.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="med-page-block">
            <h2 className="med-page-block-title">How treatment works</h2>
            <MedicationSteps steps={medication.howItWorks} />
          </section>

          <section className="med-page-block med-page-block--note">
            <h2 className="med-page-block-title">Good to know</h2>
            <ul className="med-note-list">
              {medication.considerations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="med-disclaimer">
              GLP-1 medications are available by prescription only after a licensed
              provider determines eligibility. This information is educational and
              not medical advice.
            </p>
          </section>

          <section className="med-page-block">
            <h2 className="med-page-block-title">Common questions</h2>
            <MedicationFAQBlock faqs={medication.faqs} />
          </section>
        </div>

        <MedicationAside medication={medication} />
      </div>

      <section className="med-page-related">
        <div className="wrap">
          <div className="med-page-related-head">
            <h2 className="med-page-block-title">Other GLP-1 options</h2>
            <Link href="/#medications" className="med-page-related-link">
              View all
            </Link>
          </div>
          <div className="med-related-grid">
            {related.map((med) => (
              <MedicationCard key={med.slug} medication={med} />
            ))}
          </div>
        </div>
      </section>

      <MedicationPageCTA medication={medication} />
    </main>
  );
}
