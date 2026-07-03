import type { MedicationPlan } from "@/context/ConsultBookingContext";
import { images } from "@/data/images";

export type MedicationSlug =
  | "wegovy"
  | "zepbound"
  | "ozempic"
  | "mounjaro"
  | "rybelsus"
  | "liraglutide";

export type MedicationHighlight = {
  label: string;
  value: string;
};

export type MedicationStep = {
  title: string;
  description: string;
};

export type MedicationFAQ = {
  question: string;
  answer: string;
};

export type Medication = {
  slug: MedicationSlug;
  brand: string;
  ingredient: string;
  category: string;
  badge?: string;
  dosing: string;
  shortDescription: string;
  note?: string;
  image: { src: string; alt: string };
  plan: MedicationPlan;
  tagline: string;
  overview: string;
  highlights: MedicationHighlight[];
  benefits: string[];
  eligibility: string[];
  howItWorks: MedicationStep[];
  considerations: string[];
  faqs: MedicationFAQ[];
};

export const medications: Medication[] = [
  {
    slug: "wegovy",
    brand: "Wegovy",
    ingredient: "Semaglutide",
    category: "Weight Management",
    dosing: "Once-weekly injection",
    shortDescription:
      "Prescription weight-loss medication for adults with obesity or excess weight and related health conditions.",
    image: images.medications.wegovy,
    plan: "semaglutide",
    tagline: "FDA-approved semaglutide for chronic weight management",
    overview:
      "Wegovy® contains semaglutide, a GLP-1 receptor agonist FDA-approved for chronic weight management in adults. Under clinician supervision, it supports appetite regulation and gradual, sustainable weight reduction as part of a comprehensive medical program.",
    highlights: [
      { label: "Active ingredient", value: "Semaglutide" },
      { label: "FDA indication", value: "Chronic weight management" },
      { label: "Dosing", value: "Once-weekly injection" },
      { label: "Supervision", value: "Licensed clinician-led" },
    ],
    benefits: [
      "Supports appetite regulation through GLP-1 receptor activation",
      "Clinically studied for meaningful weight reduction over time",
      "Weekly dosing may fit more easily into busy routines",
      "Ongoing physician monitoring throughout titration",
    ],
    eligibility: [
      "Adults with BMI ≥ 30, or BMI ≥ 27 with a weight-related condition",
      "Evaluation of medical history, medications, and contraindications",
      "Prescription provided only when clinically appropriate",
    ],
    howItWorks: [
      {
        title: "Complete your evaluation",
        description:
          "Share your health history through a secure intake and meet with a licensed clinician.",
      },
      {
        title: "Receive a personalized plan",
        description:
          "If eligible, your provider determines starting dose and titration schedule.",
      },
      {
        title: "Begin supervised treatment",
        description:
          "Medication is filled through a licensed pharmacy with follow-up visits for monitoring.",
      },
    ],
    considerations: [
      "Not suitable for everyone; your clinician reviews risks and benefits individually.",
      "Common side effects may include nausea, especially during dose escalation.",
      "Requires ongoing medical follow-up and lifestyle support for best outcomes.",
    ],
    faqs: [
      {
        question: "How is Wegovy different from Ozempic?",
        answer:
          "Both contain semaglutide, but Wegovy is FDA-approved specifically for chronic weight management at different dosing protocols than Ozempic, which is approved for type 2 diabetes.",
      },
      {
        question: "How quickly might I notice changes?",
        answer:
          "Many patients notice appetite changes within the first few weeks, while weight loss typically occurs gradually over months with consistent treatment and lifestyle support.",
      },
    ],
  },
  {
    slug: "zepbound",
    brand: "Zepbound",
    ingredient: "Tirzepatide",
    category: "Weight Management",
    dosing: "Once-weekly injection",
    shortDescription:
      "FDA-approved weight management medication containing tirzepatide for adults with obesity or related health conditions.",
    image: images.medications.zepbound,
    plan: "tirzepatide",
    tagline: "Dual-pathway GLP-1/GIP support for weight management",
    overview:
      "Zepbound® is an FDA-approved tirzepatide medication for chronic weight management. It activates both GIP and GLP-1 receptors, offering a dual-pathway approach to appetite and metabolic support under licensed medical supervision.",
    highlights: [
      { label: "Active ingredient", value: "Tirzepatide" },
      { label: "FDA indication", value: "Chronic weight management" },
      { label: "Mechanism", value: "GLP-1 + GIP dual agonist" },
      { label: "Dosing", value: "Once-weekly injection" },
    ],
    benefits: [
      "Dual GIP/GLP-1 receptor activity for appetite support",
      "FDA-approved specifically for weight management",
      "Structured titration supervised by your clinician",
      "Integrated with nutrition and lifestyle coaching",
    ],
    eligibility: [
      "Adults meeting FDA-outlined BMI and comorbidity criteria",
      "Full medical history review before prescribing",
      "Not appropriate for patients with certain thyroid or pancreatic conditions",
    ],
    howItWorks: [
      {
        title: "Clinician assessment",
        description:
          "A licensed provider evaluates whether tirzepatide aligns with your health profile and goals.",
      },
      {
        title: "Personalized titration",
        description:
          "Dosing increases gradually to improve tolerance and safety.",
      },
      {
        title: "Continuous monitoring",
        description:
          "Regular check-ins track progress, side effects, and plan adjustments.",
      },
    ],
    considerations: [
      "GI side effects such as nausea may occur, particularly during titration.",
      "Your clinician will review thyroid, pancreatic, and cardiovascular history.",
      "Individual response varies; results are not guaranteed.",
    ],
    faqs: [
      {
        question: "Is Zepbound the same as Mounjaro?",
        answer:
          "Both contain tirzepatide, but Zepbound is FDA-approved for weight management while Mounjaro is approved for type 2 diabetes. Your clinician determines the appropriate option for you.",
      },
      {
        question: "Is tirzepatide right for everyone?",
        answer:
          "No. Eligibility depends on your medical history, current medications, and clinical judgment from your licensed provider.",
      },
    ],
  },
  {
    slug: "ozempic",
    brand: "Ozempic",
    ingredient: "Semaglutide",
    category: "Diabetes Management",
    dosing: "Once-weekly injection",
    shortDescription:
      "GLP-1 prescription medication FDA-approved for type 2 diabetes and prescribed off-label for weight management.",
    note: "When used for weight management, Ozempic® is prescribed off-label under clinician supervision.",
    image: images.medications.ozempic,
    plan: "semaglutide",
    tagline: "Semaglutide therapy with physician oversight",
    overview:
      "Ozempic® is an FDA-approved semaglutide injection for type 2 diabetes. In appropriate clinical contexts, it may also be considered off-label for weight management when a licensed provider determines it is medically suitable.",
    highlights: [
      { label: "Active ingredient", value: "Semaglutide" },
      { label: "Primary FDA use", value: "Type 2 diabetes" },
      { label: "Weight use", value: "Off-label when appropriate" },
      { label: "Dosing", value: "Once-weekly injection" },
    ],
    benefits: [
      "Supports blood sugar control in type 2 diabetes",
      "May reduce appetite as part of a supervised weight plan",
      "Established clinical track record under medical monitoring",
      "Weekly injection schedule",
    ],
    eligibility: [
      "Determined individually based on diagnosis, BMI, and health history",
      "Off-label weight use requires explicit clinician judgment",
      "Contraindications and drug interactions carefully reviewed",
    ],
    howItWorks: [
      {
        title: "Medical evaluation",
        description:
          "Your clinician reviews diabetes status, weight goals, and overall health.",
      },
      {
        title: "Treatment decision",
        description:
          "If appropriate, a prescription and titration plan are created for your needs.",
      },
      {
        title: "Ongoing follow-up",
        description:
          "Regular visits monitor glucose trends, weight, and side effects.",
      },
    ],
    considerations: [
      "Off-label weight use is not FDA-approved for that indication.",
      "Side effects may include nausea, vomiting, or constipation.",
      "Not a substitute for comprehensive lifestyle and medical care.",
    ],
    faqs: [
      {
        question: "Can Ozempic be used for weight loss?",
        answer:
          "It may be prescribed off-label for weight management when a licensed clinician determines it is clinically appropriate. This is a medical decision based on your individual profile.",
      },
      {
        question: "Will insurance cover Ozempic?",
        answer:
          "Coverage depends on your plan, diagnosis, and formulary. Our team can help you explore benefits during your evaluation.",
      },
    ],
  },
  {
    slug: "mounjaro",
    brand: "Mounjaro",
    ingredient: "Tirzepatide",
    category: "Diabetes Management",
    dosing: "Once-weekly injection",
    shortDescription:
      "Prescription medication for adults with type 2 diabetes used in personalized provider-supervised care plans.",
    note: "Mounjaro® may be prescribed off-label for weight management when clinically appropriate.",
    image: images.medications.mounjaro,
    plan: "tirzepatide",
    tagline: "Tirzepatide for type 2 diabetes with clinical oversight",
    overview:
      "Mounjaro® is an FDA-approved tirzepatide injection for adults with type 2 diabetes. Some patients may also be evaluated for off-label weight-management use when their clinician determines it is medically appropriate.",
    highlights: [
      { label: "Active ingredient", value: "Tirzepatide" },
      { label: "Primary FDA use", value: "Type 2 diabetes" },
      { label: "Mechanism", value: "GLP-1 + GIP dual agonist" },
      { label: "Dosing", value: "Once-weekly injection" },
    ],
    benefits: [
      "Dual-pathway metabolic support for type 2 diabetes",
      "May support appetite reduction in supervised weight plans",
      "Gradual dose titration under physician guidance",
      "Integrated with lifestyle and nutrition support",
    ],
    eligibility: [
      "Type 2 diabetes diagnosis or weight criteria per clinician review",
      "Comprehensive screening for contraindications",
      "Off-label weight use only when clinically justified",
    ],
    howItWorks: [
      {
        title: "Secure intake & consult",
        description:
          "Complete HIPAA-compliant forms and speak with a licensed provider.",
      },
      {
        title: "Custom care plan",
        description:
          "Your clinician selects dose, schedule, and monitoring intervals.",
      },
      {
        title: "Pharmacy fulfillment",
        description:
          "Prescriptions are filled through licensed pharmacies with delivery options.",
      },
    ],
    considerations: [
      "Off-label weight use requires ongoing physician supervision.",
      "GI discomfort may occur during dose increases.",
      "Results vary based on adherence, metabolism, and medical history.",
    ],
    faqs: [
      {
        question: "Mounjaro vs. Zepbound — what's the difference?",
        answer:
          "Both contain tirzepatide. Mounjaro is FDA-approved for type 2 diabetes; Zepbound is FDA-approved for weight management. Your clinician recommends the appropriate option.",
      },
      {
        question: "How often are follow-ups needed?",
        answer:
          "Follow-up frequency depends on your treatment phase, side effects, and clinician guidance — typically monthly or as directed.",
      },
    ],
  },
  {
    slug: "rybelsus",
    brand: "Rybelsus",
    ingredient: "Semaglutide",
    category: "Diabetes Management",
    badge: "FDA Approved",
    dosing: "Once-daily oral tablet",
    shortDescription:
      "Oral prescription medication for adults with type 2 diabetes in a clinician-supervised personalized treatment plan.",
    note: "Rybelsus® may be prescribed off-label for weight management when clinically appropriate.",
    image: images.medications.rybelsus,
    plan: "semaglutide",
    tagline: "Oral semaglutide for patients who prefer a tablet",
    overview:
      "Rybelsus® is the oral form of semaglutide, FDA-approved for type 2 diabetes. For patients who prefer daily tablets over injections, it may be considered when clinically appropriate — including off-label weight-management evaluation by your provider.",
    highlights: [
      { label: "Active ingredient", value: "Semaglutide (oral)" },
      { label: "Format", value: "Once-daily tablet" },
      { label: "Primary FDA use", value: "Type 2 diabetes" },
      { label: "Supervision", value: "Clinician-led program" },
    ],
    benefits: [
      "Needle-free daily dosing option for eligible patients",
      "GLP-1 receptor support for glucose and appetite regulation",
      "May suit patients uncomfortable with injections",
      "Physician-guided titration and monitoring",
    ],
    eligibility: [
      "Medical suitability determined through full clinician evaluation",
      "Specific fasting/timing requirements for oral absorption",
      "Off-label weight use based on independent clinical judgment",
    ],
    howItWorks: [
      {
        title: "Clinician consult",
        description:
          "Discuss oral vs. injectable options based on your preferences and health profile.",
      },
      {
        title: "Dosing instructions",
        description:
          "Your provider explains daily timing, fasting requirements, and titration.",
      },
      {
        title: "Progress monitoring",
        description:
          "Follow-up visits assess tolerance, efficacy, and plan adjustments.",
      },
    ],
    considerations: [
      "Must be taken on an empty stomach with water; wait before eating.",
      "Not interchangeable with injectable semaglutide dosing.",
      "Side effects may include nausea and digestive discomfort.",
    ],
    faqs: [
      {
        question: "Is Rybelsus as effective as injectable semaglutide?",
        answer:
          "Efficacy depends on individual response, adherence, and clinical context. Your provider helps determine the most appropriate formulation for you.",
      },
      {
        question: "Can I switch from Rybelsus to Wegovy?",
        answer:
          "Medication changes must be directed by your licensed clinician after reviewing your progress and medical history.",
      },
    ],
  },
  {
    slug: "liraglutide",
    brand: "Victoza® / Saxenda®",
    ingredient: "Liraglutide",
    category: "Diabetes and Weight Management",
    badge: "FDA Approved",
    dosing: "Once-daily injection",
    shortDescription:
      "Liraglutide is an FDA-approved prescription medication for type 2 diabetes and chronic weight management.",
    image: images.medications.liraglutide,
    plan: "unsure",
    tagline: "Established GLP-1 option for diabetes and weight care",
    overview:
      "Liraglutide is available as Victoza® for type 2 diabetes and Saxenda® for chronic weight management. Your CARMA Med Spa clinician evaluates whether this GLP-1 option aligns with your health history and treatment goals.",
    highlights: [
      { label: "Active ingredient", value: "Liraglutide" },
      { label: "Brand options", value: "Victoza® / Saxenda®" },
      { label: "Dosing", value: "Once-daily injection" },
      { label: "FDA uses", value: "Diabetes & weight management" },
    ],
    benefits: [
      "Long-established GLP-1 receptor agonist with clinical history",
      "FDA-approved pathways for diabetes and weight management",
      "Daily dosing with structured titration schedule",
      "Supervised by licensed clinicians throughout treatment",
    ],
    eligibility: [
      "BMI and comorbidity criteria per FDA labeling for weight use",
      "Diabetes indication for Victoza® per prescribing guidelines",
      "Full review of thyroid, renal, and GI history before prescribing",
    ],
    howItWorks: [
      {
        title: "Evaluation visit",
        description:
          "Your provider determines whether Victoza® or Saxenda® is clinically appropriate.",
      },
      {
        title: "Titration schedule",
        description:
          "Dosing increases gradually over weeks to improve tolerability.",
      },
      {
        title: "Long-term support",
        description:
          "Ongoing monitoring for weight, glucose, and side-effect management.",
      },
    ],
    considerations: [
      "Daily injection requires consistent adherence.",
      "Thyroid C-cell tumor history is a contraindication per labeling.",
      "Individual results vary; not all patients are candidates.",
    ],
    faqs: [
      {
        question: "What's the difference between Victoza and Saxenda?",
        answer:
          "Both contain liraglutide but are FDA-approved for different indications and dosing. Your clinician selects the appropriate product based on your diagnosis and goals.",
      },
      {
        question: "Is liraglutide still commonly prescribed?",
        answer:
          "Yes, though newer weekly options exist. Your provider recommends the best fit based on your medical profile and preferences.",
      },
    ],
  },
];

export function getMedicationBySlug(slug: string): Medication | undefined {
  return medications.find((med) => med.slug === slug);
}

export function getMedicationNavItems() {
  return medications.map((med) => ({
    slug: med.slug,
    brand: med.brand,
    category: med.category,
    href: `/medications/${med.slug}`,
  }));
}
