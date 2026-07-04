"use client";

import { BackToTop } from "@/components/landing/BackToTop";
import { ConsultBookingModal } from "@/components/landing/ConsultBookingModal";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { ConsultBookingProvider } from "@/context/ConsultBookingContext";
import type { ReactNode } from "react";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <ConsultBookingProvider>
      <div className="landing">
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
        <ConsultBookingModal />
      </div>
    </ConsultBookingProvider>
  );
}
