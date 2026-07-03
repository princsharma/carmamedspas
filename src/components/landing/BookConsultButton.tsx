"use client";

import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { useConsultBooking, type MedicationPlan } from "@/context/ConsultBookingContext";

type BookConsultButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  medication?: MedicationPlan;
};

export function BookConsultButton({
  children,
  medication = "unsure",
  className,
  ...props
}: BookConsultButtonProps) {
  const { openBooking } = useConsultBooking();

  return (
    <button
      type="button"
      className={className}
      onClick={() => openBooking(medication)}
      {...props}
    >
      {children}
    </button>
  );
}
