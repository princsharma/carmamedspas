"use client";

import { useEffect, useRef, useState } from "react";
import { PageHero } from "./PageHero";
import { Reveal } from "../Reveal";
import type { LegalDoc } from "@/data/legal";

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function LegalPage({ doc }: { doc: LegalDoc }) {
  const [active, setActive] = useState(0);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.idx);
            if (!Number.isNaN(idx)) setActive(idx);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );
    cardRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [doc.slug]);

  return (
    <>
      <PageHero eyebrow="Legal" title={doc.title} subtitle={doc.intro} />

      <section className="lx-section lx-section--tight">
        <div className="lx-wrap lxl-layout">
          <aside className="lxl-toc">
            <span className="lxl-toc__label">On this page</span>
            <nav className="lxl-toc__nav">
              {doc.sections.map((s, i) => (
                <a
                  key={s.heading}
                  href={`#${slugify(s.heading)}`}
                  className={`lxl-toc__link${active === i ? " is-active" : ""}`}
                >
                  {s.heading}
                </a>
              ))}
            </nav>
            <span className="lxl-toc__updated">Last updated: {doc.updated}</span>
          </aside>

          <Reveal className="lxl-content" stagger>
            {doc.sections.map((s, i) => (
              <article
                key={s.heading}
                id={slugify(s.heading)}
                data-idx={i}
                data-lx-stagger
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="lxl-card"
              >
                <span className="lxl-card__badge">
                  <Icon index={i} />
                </span>
                <div className="lxl-card__body">
                  <h2 className="lxl-card__title">{s.heading}</h2>
                  {s.body?.map((p, j) => (
                    <p key={j} className="lxl-card__p">
                      {p}
                    </p>
                  ))}
                  {s.bullets ? (
                    <ul className="lxl-card__list">
                      {s.bullets.map((b) => (
                        <li key={b}>
                          <Check />
                          {b}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {s.callout ? (
                    <div className="lxl-card__callout">
                      <Info />
                      <span>{s.callout}</span>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Info() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 11v5M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const icons = [
  // shield
  "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z",
  // document
  "M7 3h7l5 5v13H7zM14 3v5h5",
  // lock
  "M6 11V8a6 6 0 1 1 12 0v3M5 11h14v9H5z",
  // user
  "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM5 20a7 7 0 0 1 14 0",
  // list
  "M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01",
  // check-circle
  "M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
  // globe
  "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",
  // gavel / scale
  "M12 3v18M5 8h14l-2 6a5 5 0 0 1-10 0z",
];

function Icon({ index }: { index: number }) {
  const d = icons[index % icons.length];
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d={d} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
