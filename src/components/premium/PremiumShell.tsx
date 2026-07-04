"use client";

import type { ReactNode } from "react";
import { ConsultBookingProvider } from "@/context/ConsultBookingContext";
import { ConsultBookingModal } from "@/components/landing/ConsultBookingModal";
import { BackToTop } from "@/components/landing/BackToTop";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { SmoothScroll } from "./SmoothScroll";
import { PremiumNav } from "./PremiumNav";
import { PremiumFooter } from "./PremiumFooter";

/**
 * Shared premium chrome (smooth scroll, nav, footer, booking modal) used by
 * both the landing page and the medication detail pages.
 */
export function PremiumShell({ children }: { children: ReactNode }) {
  return (
    <ConsultBookingProvider>
      <SmoothScroll />
      <ScrollProgress />
      <div className="lx-root">
        <div className="lx-noise" aria-hidden="true" />
        <PremiumNav />
        <main>{children}</main>
        <PremiumFooter />
      </div>
      <BackToTop />
      <ConsultBookingModal />
    </ConsultBookingProvider>
  );
}
