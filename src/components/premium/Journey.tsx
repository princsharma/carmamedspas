"use client";

import { Reveal } from "./Reveal";

const steps = [
  {
    n: "1",
    title: "Answer a few questions",
    time: "5 minutes",
    icon: FormIcon,
  },
  {
    n: "2",
    title: "Chat with a licensed doctor",
    time: "100% online",
    icon: ChatIcon,
  },
  {
    n: "3",
    title: "Medication shipped to you",
    time: "Free & discreet",
    icon: BoxIcon,
  },
];

export function Journey() {
  return (
    <section className="lx-journey" aria-label="How the process works">
      <div className="lx-wrap">
        <Reveal className="lx-journey__band" stagger>
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="lx-journey__step" data-lx-stagger>
                <div className="lx-journey__icon">
                  <Icon />
                  <span className="lx-journey__num">{s.n}</span>
                </div>
                <div className="lx-journey__text">
                  <strong>{s.title}</strong>
                  <span>{s.time}</span>
                </div>
                {i < steps.length - 1 ? (
                  <span className="lx-journey__connector" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                ) : null}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

function FormIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="3" width="14" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 8h6M9 12h6M9 16h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16H9l-4 4V6.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function BoxIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4zM4 7l8 4 8-4M12 11v10" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
