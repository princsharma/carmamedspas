"use client";

export function HeroMedicationBg() {
  return (
    <div className="hero-med-bg" aria-hidden="true">
      <svg
        className="hero-med-svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heroMedBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a100c" />
            <stop offset="45%" stopColor="#241612" />
            <stop offset="100%" stopColor="#1a100c" />
          </linearGradient>

          <radialGradient id="heroMedGlow" cx="50%" cy="42%" r="50%">
            <stop offset="0%" stopColor="#b56e56" stopOpacity="0.28" />
            <stop offset="55%" stopColor="#b56e56" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#b56e56" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="pillBodyA" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff8f4" />
            <stop offset="50%" stopColor="#fff8f4" />
            <stop offset="50%" stopColor="#b56e56" />
            <stop offset="100%" stopColor="#954a37" />
          </linearGradient>

          <linearGradient id="pillBodyB" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4a088" />
            <stop offset="50%" stopColor="#d4a088" />
            <stop offset="50%" stopColor="#fff8f4" />
            <stop offset="100%" stopColor="#e8c4b4" />
          </linearGradient>

          <linearGradient id="bondGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4a088" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#e8c4b4" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#d4a088" stopOpacity="0.15" />
          </linearGradient>

          <filter id="heroMedSoft" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="1440" height="900" fill="url(#heroMedBg)" />
        <ellipse cx="720" cy="380" rx="520" ry="340" fill="url(#heroMedGlow)" />

        {/* Molecular bonds */}
        <g className="hero-med-bonds" stroke="url(#bondGrad)" strokeWidth="2.5" strokeLinecap="round">
          <line x1="620" y1="340" x2="720" y2="300" />
          <line x1="720" y1="300" x2="820" y2="340" />
          <line x1="820" y1="340" x2="860" y2="430" />
          <line x1="860" y1="430" x2="780" y2="500" />
          <line x1="780" y1="500" x2="660" y2="500" />
          <line x1="660" y1="500" x2="580" y2="430" />
          <line x1="580" y1="430" x2="620" y2="340" />
          <line x1="720" y1="300" x2="720" y2="220" />
          <line x1="820" y1="340" x2="910" y2="310" />
          <line x1="910" y1="310" x2="980" y2="360" />
        </g>

        {/* Molecule atoms */}
        <g className="hero-med-molecule" filter="url(#heroMedSoft)">
          <circle cx="620" cy="340" r="14" fill="#e8c4b4" opacity="0.9" />
          <circle cx="720" cy="300" r="16" fill="#d4a088" opacity="0.95" />
          <circle cx="820" cy="340" r="14" fill="#e8c4b4" opacity="0.9" />
          <circle cx="860" cy="430" r="13" fill="#b56e56" opacity="0.85" />
          <circle cx="780" cy="500" r="14" fill="#d4a088" opacity="0.9" />
          <circle cx="660" cy="500" r="13" fill="#e8c4b4" opacity="0.85" />
          <circle cx="580" cy="430" r="14" fill="#b56e56" opacity="0.9" />
          <circle cx="720" cy="220" r="11" fill="#fff8f4" opacity="0.75" />
          <circle cx="910" cy="310" r="10" fill="#d4a088" opacity="0.8" />
          <circle cx="980" cy="360" r="9" fill="#e8c4b4" opacity="0.75" />
        </g>

        {/* Floating pills */}
        <g className="hero-med-pill hero-med-pill--1">
          <rect x="-36" y="-11" width="72" height="22" rx="11" fill="url(#pillBodyA)" opacity="0.92" />
        </g>
        <g className="hero-med-pill hero-med-pill--2">
          <rect x="-28" y="-9" width="56" height="18" rx="9" fill="url(#pillBodyB)" opacity="0.88" />
        </g>
        <g className="hero-med-pill hero-med-pill--3">
          <rect x="-32" y="-10" width="64" height="20" rx="10" fill="url(#pillBodyA)" opacity="0.85" />
        </g>
        <g className="hero-med-pill hero-med-pill--4">
          <rect x="-24" y="-8" width="48" height="16" rx="8" fill="url(#pillBodyB)" opacity="0.8" />
        </g>
        <g className="hero-med-pill hero-med-pill--5">
          <rect x="-30" y="-9" width="60" height="18" rx="9" fill="url(#pillBodyA)" opacity="0.78" />
        </g>

        {/* Injection pen silhouette */}
        <g className="hero-med-pen">
          <rect x="1180" y="180" width="18" height="140" rx="9" fill="#d4a088" opacity="0.18" />
          <rect x="1186" y="160" width="6" height="28" rx="3" fill="#e8c4b4" opacity="0.22" />
          <polygon points="1189,320 1192,340 1186,340" fill="#b56e56" opacity="0.2" />
        </g>

        {/* Peptide helix dots */}
        <g className="hero-med-helix">
          {Array.from({ length: 14 }).map((_, i) => {
            const t = i / 13;
            const x = 280 + t * 120;
            const y = 520 + Math.sin(t * Math.PI * 3) * 36;
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={5 - (i % 3)}
                fill={i % 2 === 0 ? "#e8c4b4" : "#d4a088"}
                opacity={0.45 + (i % 3) * 0.08}
              />
            );
          })}
        </g>

        {/* Ambient particles */}
        <g className="hero-med-dots">
          {[
            [180, 200], [320, 680], [1100, 620], [1260, 280], [420, 160],
            [980, 720], [140, 480], [1320, 520], [540, 720], [880, 140],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={3 + (i % 2)}
              fill="#e8c4b4"
              opacity={0.25 + (i % 3) * 0.1}
              className={`hero-med-dot hero-med-dot--${i + 1}`}
            />
          ))}
        </g>

        {/* Pulse rings */}
        <circle className="hero-med-ring hero-med-ring--1" cx="720" cy="390" r="180" fill="none" stroke="#b56e56" strokeWidth="1" opacity="0.2" />
        <circle className="hero-med-ring hero-med-ring--2" cx="720" cy="390" r="240" fill="none" stroke="#d4a088" strokeWidth="1" opacity="0.12" />
      </svg>

      <div className="hero-med-scrim" />
      <div className="hero-med-vignette" />
    </div>
  );
}
