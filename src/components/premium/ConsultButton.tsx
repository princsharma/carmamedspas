"use client";

import type { ReactNode } from "react";
import { useConsultBooking, type MedicationPlan } from "@/context/ConsultBookingContext";
import { MagneticButton } from "./MagneticButton";

type ConsultButtonProps = {
  children: ReactNode;
  className?: string;
  medication?: MedicationPlan;
  ariaLabel?: string;
};

/** Magnetic CTA that opens the consult booking modal. */
export function ConsultButton({
  children,
  className = "lx-btn",
  medication = "unsure",
  ariaLabel,
}: ConsultButtonProps) {
  const { openBooking } = useConsultBooking();
  return (
    <MagneticButton
      className={className}
      ariaLabel={ariaLabel}
      onClick={() => openBooking(medication)}
    >
      {children}
    </MagneticButton>
  );
}
