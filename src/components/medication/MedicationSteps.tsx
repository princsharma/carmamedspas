import type { MedicationStep } from "@/data/medications";

type MedicationStepsProps = {
  steps: MedicationStep[];
};

export function MedicationSteps({ steps }: MedicationStepsProps) {
  return (
    <ol className="med-steps-simple">
      {steps.map((step, index) => (
        <li key={step.title} className="med-steps-simple-item">
          <span className="med-steps-simple-num">{index + 1}</span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
