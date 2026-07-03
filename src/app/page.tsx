"use client";

import { LandingAmbient } from "@/components/landing/LandingAmbient";
import { SplashScreen } from "@/components/landing/SplashScreen";
import { SiteShell } from "@/components/layout/SiteShell";
import { ScrollStackSection } from "@/components/landing/ScrollStackSection";
import { Hero } from "@/components/landing/Hero";
import { WhatIsGLP1 } from "@/components/landing/WhatIsGLP1";
import { PatientStories } from "@/components/landing/PatientStories";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Medications } from "@/components/landing/Medications";
import { MedicationGuide } from "@/components/landing/MedicationGuide";
import { ProgramBenefits } from "@/components/landing/ProgramBenefits";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { OurDoctors } from "@/components/landing/OurDoctors";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";

export default function Page() {
  return (
    <>
      <SplashScreen />
      <SiteShell>
        <LandingAmbient />
        <main className="landing-main landing-main--stack">
          <Hero />

          <ScrollStackSection className="scroll-stack-panel--light" id="glp1-stack">
            <WhatIsGLP1 />
          </ScrollStackSection>

          <ScrollStackSection className="scroll-stack-panel--light">
            <PatientStories />
          </ScrollStackSection>

          <HowItWorks />

          <ScrollStackSection className="scroll-stack-panel--meds" id="medications-stack">
            <section className="section section--premium section--med-catalog section--glow" id="medications">
              <div className="wrap">
                <Medications />
              </div>
            </section>
          </ScrollStackSection>

          <ScrollStackSection className="scroll-stack-panel--light">
            <MedicationGuide />
          </ScrollStackSection>

          <ScrollStackSection className="scroll-stack-panel--light">
            <ProgramBenefits />
          </ScrollStackSection>

          <ScrollStackSection className="scroll-stack-panel--light">
            <WhyChooseUs />
          </ScrollStackSection>

          <ScrollStackSection className="scroll-stack-panel--light">
            <OurDoctors />
          </ScrollStackSection>

          <ScrollStackSection className="scroll-stack-panel--light">
            <FAQ />
          </ScrollStackSection>

          <ScrollStackSection className="scroll-stack-panel--cta" tall={false}>
            <FinalCTA />
          </ScrollStackSection>
        </main>
      </SiteShell>
    </>
  );
}
