"use client";

import { PageHero } from "./PageHero";
import { Reveal } from "../Reveal";
import type { LegalDoc } from "@/data/legal";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={doc.title} subtitle={doc.intro} />

      <section className="lx-section lx-section--tight">
        <div className="lx-wrap">
          <Reveal className="lxp-prose">
            <span className="lxp-prose__updated">Last updated: {doc.updated}</span>
            {doc.sections.map((s) => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
