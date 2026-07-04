"use client";

import {
  useRef,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
  type Ref,
} from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  strength?: number;
  ariaLabel?: string;
};

/**
 * Magnetic hover + click ripple. Renders an <a> when `href` is provided,
 * otherwise a <button>.
 */
export function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  target,
  rel,
  strength = 0.32,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement | null>(null);

  const handleMove = (e: ReactMouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  const ripple = (e: ReactMouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const circle = document.createElement("span");
    const size = Math.max(el.clientWidth, el.clientHeight);
    const rect = el.getBoundingClientRect();
    circle.className = "lx-btn__ripple";
    circle.style.width = circle.style.height = `${size}px`;
    circle.style.left = `${e.clientX - rect.left - size / 2}px`;
    circle.style.top = `${e.clientY - rect.top - size / 2}px`;
    el.appendChild(circle);
    window.setTimeout(() => circle.remove(), 700);
  };

  const handleClick = (e: ReactMouseEvent) => {
    ripple(e);
    onClick?.();
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        aria-label={ariaLabel}
        ref={ref as Ref<HTMLAnchorElement>}
        className={className}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      ref={ref as Ref<HTMLButtonElement>}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
