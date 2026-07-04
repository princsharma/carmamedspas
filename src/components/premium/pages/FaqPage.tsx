"use client";

import { useState } from "react";
import { PageHero } from "./PageHero";
import { PageCta } from "./PageCta";
import { Reveal } from "../Reveal";
import { siteFaqs } from "@/data/site";

export function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Everything you need
            <br />
            to know <span className="lx-grad-text">before you start</span>
          </>
        }
        subtitle="Answers to the questions patients ask most. Still curious? Our care team is one message away."
      />

      <section className="lx-section lx-section--tight">
        <div className="lx-wrap lxp-faq-wrap">
          <Reveal className="lx-faq__list">
            {siteFaqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.question} className={`lx-faq__item${isOpen ? " is-open" : ""}`}>
                  <button
                    type="button"
                    className="lx-faq__trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{f.question}</span>
                    <span className="lx-faq__icon" aria-hidden="true">
                      <i />
                      <i />
                    </span>
                  </button>
                  <div className="lx-faq__answer-wrap">
                    <p className="lx-faq__answer">{f.answer}</p>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      <PageCta />
    </>
  );
}
