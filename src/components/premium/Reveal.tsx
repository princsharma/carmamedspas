"use client";

import {
  useEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  id?: string;
  /** Delay in ms before the reveal transition kicks in. */
  delay?: number;
  /** Stagger children with the `data-lx-stagger` attribute instead of the container. */
  stagger?: boolean;
  once?: boolean;
};

/**
 * Lightweight IntersectionObserver reveal. Adds `.is-in` when the element
 * (or its staggered children) enter the viewport for blur/slide/fade reveals.
 */
export function Reveal({
  children,
  as,
  className = "",
  id,
  delay = 0,
  stagger = false,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const targets: HTMLElement[] = stagger
      ? Array.from(el.querySelectorAll<HTMLElement>("[data-lx-stagger]"))
      : [el];

    if (reduce) {
      targets.forEach((t) => t.classList.add("is-in"));
      return;
    }

    targets.forEach((t) => t.classList.add("lx-reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          const index = targets.indexOf(target);
          const step = stagger ? index * 90 : 0;
          window.setTimeout(() => target.classList.add("is-in"), delay + step);
          if (once) io.unobserve(target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [delay, stagger, once]);

  return (
    <Tag ref={ref} className={className} id={id}>
      {children}
    </Tag>
  );
}
