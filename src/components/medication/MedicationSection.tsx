import type { ReactNode } from "react";

type MedicationSectionProps = {
  kicker?: string;
  title: string;
  description?: string;
  children: ReactNode;
  variant?: "default" | "soft" | "dark";
};

export function MedicationSection({
  kicker,
  title,
  description,
  children,
  variant = "default",
}: MedicationSectionProps) {
  return (
    <section className={`med-page-section med-page-section--${variant}`}>
      <div className="wrap">
        <header className="med-section-head">
          {kicker && <span className="kicker">{kicker}</span>}
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
