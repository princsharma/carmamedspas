"use client";

import type { ReactNode } from "react";
import { BackToTop } from "@/components/landing/BackToTop";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { PremiumNav } from "./PremiumNav";
import { PremiumFooter } from "./PremiumFooter";

/**
 * Shared premium chrome (nav, footer, scroll progress) used by both the
 * landing page and the medication detail pages. Scrolling is native — GSAP
 * ScrollTrigger animations run on the browser's own scroll.
 */
export function PremiumShell({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <div className="lx-root">
        <div className="lx-noise" aria-hidden="true" />
        <PremiumNav />
        <main>{children}</main>
        <PremiumFooter />
      </div>
      <BackToTop />
    </>
  );
}
