"use client";

import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";
import { MedicationCarousel3D } from "./MedicationCarousel3D";

export function Medications() {
  return (
    <>
      <SectionIntro
        kicker="GLP-1 Medications"
        title="Physician-selected options, presented with clarity."
        description="FDA-approved medications for weight management and diabetes care — prescribed only when clinically appropriate."
      />

      <MedicationCarousel3D />

      <Reveal delay={0.1}>
        <p className="section-disclaimer">
          Disclaimer: GLP-1 medications are not suitable for everyone and are
          prescribed in accordance with FDA guidelines based on an independent
          clinician&apos;s medical judgment.
        </p>
      </Reveal>
    </>
  );
}
