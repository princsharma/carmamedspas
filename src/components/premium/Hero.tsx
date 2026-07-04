"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";
import { images } from "@/data/images";
import { registerGsap, gsap, ScrollTrigger } from "./gsap";
import { ConsultButton } from "./ConsultButton";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const penRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const cardA = useRef<HTMLDivElement>(null);
  const cardB = useRef<HTMLDivElement>(null);
  const cardC = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    registerGsap();

    const ctx = gsap.context(() => {
      // Entrance
      gsap.from("[data-hero-in]", {
        y: 34,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.09,
        delay: 0.15,
      });

      if (penRef.current) {
        gsap.from(penRef.current, {
          y: 60,
          opacity: 0,
          scale: 0.9,
          rotate: -10,
          duration: 1.4,
          ease: "power3.out",
          delay: 0.3,
        });
      }

      if (reduce) return;

      // Cinematic scrub: pen travels + rotates + scales as the page scrolls.
      if (penRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
        // Rises + scales up while the copy is still on screen, then dramatically
        // rotates, shrinks and travels up-and-away as the section leaves.
        tl.to(penRef.current, {
          yPercent: -18,
          scale: 1.22,
          rotate: 6,
          ease: "power1.inOut",
        })
          .to(penRef.current, {
            yPercent: -70,
            xPercent: 14,
            scale: 0.82,
            rotate: 26,
            ease: "power2.in",
          });
      }

      // Parallax layers at differing speeds for depth.
      const parallax = (
        el: HTMLElement | null,
        y: number,
        rot = 0,
      ) => {
        if (!el) return;
        gsap.to(el, {
          yPercent: y,
          rotate: rot,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.4,
          },
        });
      };
      parallax(glowRef.current, -28);
      parallax(cardA.current, -60, -6);
      parallax(cardB.current, 45, 8);
      parallax(cardC.current, -34, 4);

      // Gentle idle float on the pen while in view.
      gsap.to(penRef.current, {
        y: "+=16",
        duration: 4.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Mouse-driven parallax over the hero stage.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const rx = (e.clientX - rect.left) / rect.width - 0.5;
      const ry = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(penRef.current, {
        x: rx * 26,
        rotationY: rx * 10,
        duration: 0.9,
        ease: "power2.out",
      });
      gsap.to([cardA.current, cardC.current], {
        x: rx * -34,
        y: ry * -20,
        duration: 1,
        ease: "power2.out",
      });
      gsap.to(cardB.current, {
        x: rx * 30,
        y: ry * 18,
        duration: 1,
        ease: "power2.out",
      });
    };
    section.addEventListener("mousemove", onMove);
    return () => section.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="lx-hero" ref={sectionRef} id="top">
      <div className="lx-hero__bg" aria-hidden="true">
        <div className="lx-hero__grid" />
        <div className="lx-glow-orb lx-hero__orb lx-hero__orb--1" />
        <div className="lx-glow-orb lx-hero__orb lx-hero__orb--2" />
        <div className="lx-glow-orb lx-hero__orb lx-hero__orb--3" />
      </div>

      <div className="lx-hero__inner lx-wrap">
        <div className="lx-hero__copy">
          <ul className="lx-hero__proof" data-hero-in>
            <li>FDA-approved medications</li>
            <li>Doctor-prescribed</li>
            <li>HIPAA-secure</li>
          </ul>

          <h1 className="lx-h1 lx-hero__title" data-hero-in>
            Lose the weight.
            <br />
            <span className="lx-grad-text">Keep it off.</span>
          </h1>

          <p className="lx-lead lx-hero__sub" data-hero-in>
            Prescription GLP-1 treatment from licensed doctors — the whole
            journey happens from your phone, personalised to your body and
            supported every step of the way.
          </p>

          <div className="lx-hero__actions" data-hero-in>
            <ConsultButton className="lx-btn lx-btn--lg">
              Start your 5-min assessment
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ConsultButton>
            <MagneticButton href="#bmi" className="lx-btn lx-btn--ghost lx-btn--lg">
              Check if I&apos;m eligible
            </MagneticButton>
          </div>

          <p className="lx-hero__cost" data-hero-in>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Free to start · $75 online visit · No commitment
          </p>

          <div className="lx-hero__trust" data-hero-in>
            <div className="lx-hero__stars">
              <div className="lx-stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <span>
                <strong>4.9/5</strong> · 12,000+ verified reviews
              </span>
            </div>
            <div className="lx-hero__trust-divider" />
            <ul className="lx-hero__trust-list">
              <li>Licensed U.S. clinicians</li>
              <li>Free shipping</li>
            </ul>
          </div>
        </div>

        <div className="lx-hero__stage">
          <div className="lx-hero__pen-field">
            <div className="lx-hero__glow" ref={glowRef} />
            <div className="lx-hero__ring lx-hero__ring--1" />
            <div className="lx-hero__ring lx-hero__ring--2" />

            <div className="lx-hero__particles" aria-hidden="true">
              {Array.from({ length: 14 }).map((_, i) => (
                <span key={i} style={particleStyle(i)} />
              ))}
            </div>

            <div className="lx-hero__pen" ref={penRef}>
              <Image
                src={images.medications.zepbound.src}
                alt="GLP-1 prescription injection pen"
                width={620}
                height={620}
                priority
                className="lx-hero__pen-img"
              />
              <div className="lx-hero__pen-reflection" />
            </div>

            <div className="lx-hero__float-card lx-hero__float-card--a" ref={cardA}>
              <span className="lx-hero__float-label">Average result</span>
              <strong className="lx-hero__float-value">-18.2%</strong>
              <span className="lx-hero__float-sub">body weight in studies*</span>
            </div>

            <div className="lx-hero__float-card lx-hero__float-card--b" ref={cardB}>
              <span className="lx-hero__float-pill">
                <span className="lx-hero__float-live" /> Live clinician review
              </span>
              <p>Your plan is reviewed by a licensed provider — usually within 24h.</p>
            </div>

            <div className="lx-hero__float-card lx-hero__float-card--c" ref={cardC}>
              <div className="lx-hero__avatars">
                <span />
                <span />
                <span />
              </div>
              <span className="lx-hero__float-sub">
                <strong>50,000+</strong> evaluations completed
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="lx-hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="lx-hero__scroll-line" />
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.8 5.9 20.5l1.4-6.8L2.2 9l6.9-.7L12 2z" />
    </svg>
  );
}

function particleStyle(i: number): CSSProperties {
  const positions = [
    [8, 20], [22, 62], [15, 88], [38, 12], [46, 74], [58, 32],
    [70, 84], [82, 22], [90, 58], [64, 8], [30, 40], [76, 46],
    [12, 50], [50, 96],
  ];
  const [top, left] = positions[i % positions.length];
  return {
    top: `${top}%`,
    left: `${left}%`,
    animationDelay: `${(i % 7) * 0.6}s`,
    animationDuration: `${5 + (i % 5)}s`,
  };
}
