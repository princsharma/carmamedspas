"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type MedicationPlan = "semaglutide" | "tirzepatide" | "unsure";

type ConsultBookingContextValue = {
  isOpen: boolean;
  preferredMedication: MedicationPlan;
  openBooking: (medication?: MedicationPlan) => void;
  closeBooking: () => void;
};

const ConsultBookingContext = createContext<ConsultBookingContextValue | null>(
  null,
);

export function ConsultBookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preferredMedication, setPreferredMedication] =
    useState<MedicationPlan>("unsure");

  const openBooking = useCallback((medication: MedicationPlan = "unsure") => {
    setPreferredMedication(medication);
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({ isOpen, preferredMedication, openBooking, closeBooking }),
    [isOpen, preferredMedication, openBooking, closeBooking],
  );

  return (
    <ConsultBookingContext.Provider value={value}>
      {children}
    </ConsultBookingContext.Provider>
  );
}

export function useConsultBooking() {
  const context = useContext(ConsultBookingContext);
  if (!context) {
    throw new Error("useConsultBooking must be used within ConsultBookingProvider");
  }
  return context;
}
