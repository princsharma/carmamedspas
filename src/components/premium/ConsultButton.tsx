"use client";

import type { ReactNode } from "react";
import type { MedicationPlan } from "@/context/ConsultBookingContext";
import { site } from "@/data/site";
import { MagneticButton } from "./MagneticButton";

type ConsultButtonProps = {
  children: ReactNode;
  className?: string;
  medication?: MedicationPlan;
  ariaLabel?: string;
};

/**
 * Primary conversion CTA. Sends patients to the external scheduling /
 * evaluation portal (opens in a new tab). The optional `medication` is passed
 * through as a query param so the portal can pre-select a plan if supported.
 */
export function ConsultButton({
  children,
  className = "lx-btn",
  medication = "unsure",
  ariaLabel,
}: ConsultButtonProps) {
  const href =
    medication && medication !== "unsure"
      ? `${site.bookingUrl}&plan=${medication}`
      : site.bookingUrl;

  return (
    <MagneticButton
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      ariaLabel={ariaLabel}
    >
      {children}
    </MagneticButton>
  );
}
