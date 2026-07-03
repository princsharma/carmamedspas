"use client";

import Image from "next/image";
import { useState } from "react";
import { images } from "@/data/images";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

const faqs = [
  {
    question: "Am I a candidate for GLP-1 therapy?",
    answer:
      "GLP-1 therapy may be considered for adults with a BMI of 30 or higher, or 27 or higher with a weight-related condition. A licensed physician determines eligibility based on your health history.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Some patients may notice changes in appetite within the first few weeks. Weight loss timelines vary, with gradual progress typically seen over several weeks to months based on individual response and treatment adherence.",
  },
  {
    question: "What are the side effects?",
    answer:
      "GLP-1 medications may cause side effects such as nausea, vomiting, or constipation, especially during dose adjustments. Your physician will guide dosing and monitor your response throughout treatment.",
  },
  {
    question: "Is it covered by insurance?",
    answer:
      "Coverage varies by plan and diagnosis. Some GLP-1 medications may be covered for certain conditions. Our team can help you review your benefits and discuss available treatment options.",
  },
  {
    question: "Is the program virtual or in-person?",
    answer:
      "Our program is fully online. All consultations and follow-ups are conducted via telehealth with licensed clinicians for your convenience.",
  },
  {
    question: "What happens when I reach my goal weight?",
    answer:
      "Maintenance plans may include adjusted treatment, lifestyle guidance, and periodic check-ins to help support long-term weight management based on your needs.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section section--premium section--faq section--glow" id="faq">
      <div className="wrap faq-layout faq-layout--premium">
        <div className="faq-intro-col">
          <SectionIntro
            align="left"
            kicker="FAQs"
            title="Frequently Asked Questions"
            description="Common questions about GLP-1 evaluations, eligibility, and our clinician-led weight loss program."
          />

          <Reveal delay={0.08}>
            <div className="faq-visual faq-visual--glow">
              <div className="faq-visual-glow" aria-hidden="true" />
              <div className="faq-visual-main">
                <Image
                  src={images.faq.main.src}
                  alt={images.faq.main.alt}
                  fill
                  sizes="(max-width: 960px) 100vw, 360px"
                  className="faq-visual-img"
                />
              </div>
              <div className="faq-visual-accent">
                <Image
                  src={images.faq.accent.src}
                  alt=""
                  fill
                  sizes="180px"
                  className="faq-visual-img"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="faq-panel-glow" delay={0.1}>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`faq-item faq-item--glow${isOpen ? " faq-item--open" : ""}`}
                >
                  <button
                    type="button"
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    {faq.question}
                    <span className="faq-icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div className="faq-answer-wrap">
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
