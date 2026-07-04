"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useId, useState } from "react";
import {
  useConsultBooking,
  type MedicationPlan,
} from "@/context/ConsultBookingContext";
import { BrandLogo } from "./BrandLogo";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  medication: MedicationPlan;
  preferredDate: string;
  preferredTime: string;
  notes: string;
};

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  medication: "unsure",
  preferredDate: "",
  preferredTime: "",
  notes: "",
};

const timeSlots = [
  "9:00 AM",
  "10:30 AM",
  "12:00 PM",
  "2:00 PM",
  "4:30 PM",
  "6:00 PM",
];

const steps = ["Your details", "Preferences", "Confirm"];

function createReference() {
  return `CARMA-${Date.now().toString(36).toUpperCase()}`;
}

export function ConsultBookingModal() {
  const { isOpen, preferredMedication, closeBooking } = useConsultBooking();
  const reduceMotion = useReducedMotion();
  const titleId = useId();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initialForm);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [reference, setReference] = useState<string | null>(null);
  const [wasOpen, setWasOpen] = useState(false);

  if (isOpen !== wasOpen) {
    setWasOpen(isOpen);
    if (isOpen) {
      setForm({ ...initialForm, medication: preferredMedication });
      setStep(1);
      setError(null);
      setReference(null);
    }
  }

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeBooking();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeBooking]);

  const updateField = useCallback(
    <K extends keyof FormData>(key: K, value: FormData[K]) => {
      setForm((current) => ({ ...current, [key]: value }));
    },
    [],
  );

  const validateStep = () => {
    if (step === 1) {
      if (!form.firstName.trim() || !form.lastName.trim()) {
        setError("Please enter your first and last name.");
        return false;
      }
      if (!form.email.trim() || !form.phone.trim()) {
        setError("Please enter your email and phone number.");
        return false;
      }
    }

    if (step === 2) {
      if (!form.preferredDate || !form.preferredTime) {
        setError("Please choose a preferred date and time.");
        return false;
      }
    }

    setError(null);
    return true;
  };

  const handleNext = async () => {
    if (!validateStep()) return;

    if (step < 3) {
      setStep((current) => current + 1);
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Unable to submit your request right now.");
      }

      setReference(createReference());
      setStep(4);
    } catch {
      setError("Something went wrong. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleBack = () => {
    setError(null);
    setStep((current) => Math.max(1, current - 1));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="booking-overlay"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeBooking}
        >
          <motion.div
            className="booking-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="booking-modal-header">
              <div>
                <BrandLogo variant="modal" />
                <h2 id={titleId}>
                  {step === 4 ? "You're all set" : "Book your consult"}
                </h2>
              </div>
              <button
                type="button"
                className="booking-close"
                aria-label="Close booking modal"
                onClick={closeBooking}
              >
                ×
              </button>
            </div>

            {step < 4 && (
              <div className="booking-steps">
                {steps.map((label, index) => {
                  const stepNumber = index + 1;
                  const stateClass =
                    stepNumber === step
                      ? "booking-step--active"
                      : stepNumber < step
                        ? "booking-step--done"
                        : "";

                  return (
                    <div
                      key={label}
                      className={`booking-step ${stateClass}`.trim()}
                    >
                      <span>{stepNumber}</span>
                      <em>{label}</em>
                    </div>
                  );
                })}
              </div>
            )}

            {error && <p className="booking-error">{error}</p>}

            {step === 1 && (
              <div className="booking-form">
                <div className="booking-field-row">
                  <label className="booking-field">
                    <span>First name</span>
                    <input
                      value={form.firstName}
                      onChange={(event) =>
                        updateField("firstName", event.target.value)
                      }
                    />
                  </label>
                  <label className="booking-field">
                    <span>Last name</span>
                    <input
                      value={form.lastName}
                      onChange={(event) =>
                        updateField("lastName", event.target.value)
                      }
                    />
                  </label>
                </div>
                <label className="booking-field">
                  <span>Email</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                  />
                </label>
                <label className="booking-field">
                  <span>Phone</span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                  />
                </label>
              </div>
            )}

            {step === 2 && (
              <div className="booking-form">
                <fieldset className="booking-fieldset">
                  <legend>Medication interest</legend>
                  <div className="booking-radio-group">
                    {(
                      [
                        ["semaglutide", "Semaglutide"],
                        ["tirzepatide", "Tirzepatide"],
                        ["unsure", "Not sure yet"],
                      ] as const
                    ).map(([value, label]) => (
                      <label key={value} className="booking-radio">
                        <input
                          type="radio"
                          name="medication"
                          checked={form.medication === value}
                          onChange={() => updateField("medication", value)}
                        />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <label className="booking-field">
                  <span>Preferred date</span>
                  <input
                    type="date"
                    value={form.preferredDate}
                    onChange={(event) =>
                      updateField("preferredDate", event.target.value)
                    }
                  />
                </label>
                <label className="booking-field">
                  <span>Preferred time</span>
                  <select
                    value={form.preferredTime}
                    onChange={(event) =>
                      updateField("preferredTime", event.target.value)
                    }
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="booking-field">
                  <span>Notes (optional)</span>
                  <textarea
                    value={form.notes}
                    onChange={(event) => updateField("notes", event.target.value)}
                    placeholder="Share goals, medications, or questions for your physician."
                  />
                </label>
              </div>
            )}

            {step === 3 && (
              <div className="booking-review">
                <div className="booking-review-block">
                  <h3>Contact</h3>
                  <p>
                    {form.firstName} {form.lastName}
                    <br />
                    {form.email}
                    <br />
                    {form.phone}
                  </p>
                </div>
                <div className="booking-review-block">
                  <h3>Preferences</h3>
                  <p>
                    Medication: {form.medication}
                    <br />
                    {form.preferredDate} at {form.preferredTime}
                  </p>
                </div>
                {form.notes && (
                  <div className="booking-review-block">
                    <h3>Notes</h3>
                    <p>{form.notes}</p>
                  </div>
                )}
                <p className="booking-disclaimer">
                  Submitting requests a consult — not a prescription. A licensed
                  physician will confirm eligibility.
                </p>
              </div>
            )}

            {step === 4 && (
              <div className="booking-success">
                <div className="booking-success-icon">✓</div>
                <p>
                  Thanks, {form.firstName}. Our care team will reach out to confirm
                  your consult shortly.
                </p>
                {reference && (
                  <p className="booking-reference">Reference: {reference}</p>
                )}
              </div>
            )}

            <div className="booking-actions">
              {step > 1 && step < 4 && (
                <button type="button" className="btn btn-secondary" onClick={handleBack}>
                  Back
                </button>
              )}
              {step < 4 ? (
                <button
                  type="button"
                  className="btn btn-primary btn-full"
                  onClick={handleNext}
                  disabled={submitting}
                >
                  {step === 3 ? (submitting ? "Submitting..." : "Submit request") : "Continue"}
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary btn-full"
                  onClick={closeBooking}
                >
                  Close
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
