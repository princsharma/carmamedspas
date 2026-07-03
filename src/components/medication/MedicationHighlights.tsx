import type { MedicationHighlight } from "@/data/medications";

type MedicationHighlightsProps = {
  highlights: MedicationHighlight[];
};

export function MedicationHighlights({ highlights }: MedicationHighlightsProps) {
  return (
    <section className="med-page-highlights" aria-label="Quick facts">
      <div className="wrap">
        <div className="med-highlight-row">
          {highlights.map((item) => (
            <div key={item.label} className="med-highlight-item">
              <span className="med-highlight-label">{item.label}</span>
              <strong className="med-highlight-value">{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
