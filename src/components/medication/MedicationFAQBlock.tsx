"use client";

import { useState } from "react";
import type { MedicationFAQ } from "@/data/medications";

type MedicationFAQBlockProps = {
  faqs: MedicationFAQ[];
};

export function MedicationFAQBlock({ faqs }: MedicationFAQBlockProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="med-faq-list">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.question}
            className={`med-faq-item${isOpen ? " med-faq-item--open" : ""}`}
          >
            <button
              type="button"
              className="med-faq-trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {faq.question}
              <span className="med-faq-icon" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div className="med-faq-answer-wrap">
              <p className="med-faq-answer">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
