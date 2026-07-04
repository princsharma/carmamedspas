"use client";

import { PremiumShell } from "./PremiumShell";
import { Hero } from "./Hero";
import { MedicationShowcase } from "./MedicationShowcase";
import { BmiCalculator } from "./BmiCalculator";
import { HowItWorks } from "./HowItWorks";
import { Benefits } from "./Benefits";
import { Bento } from "./Bento";
import { Doctors } from "./Doctors";
import { Testimonials } from "./Testimonials";
import { Faq } from "./Faq";
import { FinalCta } from "./FinalCta";

export function LandingExperience() {
  return (
    <PremiumShell>
      <Hero />
      <MedicationShowcase />
      <BmiCalculator />
      <HowItWorks />
      <Benefits />
      <Bento />
      <Doctors />
      <Testimonials />
      <Faq />
      <FinalCta />
    </PremiumShell>
  );
}
