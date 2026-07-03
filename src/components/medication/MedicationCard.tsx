import Image from "next/image";
import Link from "next/link";
import type { Medication } from "@/data/medications";

type MedicationCardProps = {
  medication: Medication;
  priority?: boolean;
};

export function MedicationCard({ medication, priority = false }: MedicationCardProps) {
  return (
    <article className="med-product-card med-product-card--premium">
      <Link href={`/medications/${medication.slug}`} className="med-product-link">
        <div className="med-product-photo">
          <Image
            src={medication.image.src}
            alt={medication.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 360px"
            className="med-product-photo-img"
            priority={priority}
          />
          <div className="med-product-photo-scrim" />
          <span className="med-product-category">{medication.category}</span>
        </div>
        <div className="med-product-body">
          <div className="med-product-header">
            <div>
              <h3>{medication.brand}</h3>
              <p className="med-product-ingredient">{medication.ingredient}</p>
            </div>
            {medication.badge && (
              <span className="med-product-badge">{medication.badge}</span>
            )}
          </div>
          <p className="med-product-dosing">{medication.dosing}</p>
          <p className="med-product-desc">{medication.shortDescription}</p>
          {medication.note && (
            <p className="med-product-note">{medication.note}</p>
          )}
          <span className="med-product-cta">
            Learn more
            <span className="med-product-cta-arrow" aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
