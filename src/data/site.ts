import { images } from "@/data/images";

/**
 * Canonical production origin — must match the host Vercel serves.
 * Apex (carmamedspas.com) 308-redirects to www at the edge.
 */
export const siteUrl = "https://www.carmamedspas.com";

/** Company contact + brand facts */
export const site = {
  name: "CARMA Med Spa",
  phone: "(888) 315-1715",
  email: "care@carmamedspas.com",
  /** External scheduling / evaluation portal — where all booking CTAs go. */
  bookingUrl:
    "https://ongoweightloss.com/weightloss-onboard/",
  evaluationPrice: 39,
  states: [
    "Louisiana", "Alabama", "California", "Georgia", "Colorado", "Ohio",
  ],
};

/** 4-step process (home + How It Works) */
export const processSteps = [
  {
    n: "01",
    title: "Take a 5-minute quiz",
    body: "Answer a few questions about your health, goals and lifestyle to begin your evaluation — no appointment required.",
  },
  {
    n: "02",
    title: "Meet your physician",
    body: "A board-certified physician reviews your information and determines whether GLP-1 treatment is appropriate for you.",
  },
  {
    n: "03",
    title: "Receive your medication",
    body: "If prescribed, your medication ships from a licensed pharmacy with clear dosing instructions — free and discreet.",
  },
  {
    n: "04",
    title: "Track your progress",
    body: "Get ongoing check-ins, treatment adjustments when appropriate, and clinical support throughout your journey.",
  },
];

/** Why CARMA value props */
export const whyPoints = [
  {
    title: "Board-certified physicians only",
    body: "Every consultation is with a licensed physician. You receive real medical expertise, every time.",
  },
  {
    title: "100% HIPAA compliant & private",
    body: "Your health information is securely encrypted. We never sell or share your data with third parties.",
  },
  {
    title: "Optional medication delivery",
    body: "We coordinate with U.S.-licensed pharmacies. Discreet home delivery is available if you prefer.",
  },
  {
    title: "Continuous care team access",
    body: "Message our care team for ongoing guidance and support throughout your entire treatment.",
  },
];

/** Headline stats */
export const heroStats = [
  { value: "15–20%", label: "Avg. body-weight loss*" },
  { value: "8+", label: "GLP-1 treatment options" },
  { value: "24–48h", label: "Typical prescription decision" },
  { value: "100%", label: "Licensed U.S. physicians" },
];

/** Ideal vs traditional comparison */
export const comparisonRows = [
  "Physician supervision",
  "FDA-approved medications",
  "Personalized dosing",
  "Ongoing support",
  "Delivered to your door",
];

export const comparisonCost = { carma: "$149–$249/mo", traditional: "$298+/mo" };

/** Weight-loss program medication lineup (no separate product URLs) */
export const glp1MedicationIntro =
  "Depending on your clinical evaluation, your provider may discuss compounded semaglutide or tirzepatide, FDA-approved options such as Wegovy®, Zepbound®, and Saxenda®, or doctor-supervised off-label use of Ozempic®, Mounjaro®, Victoza®, or Rybelsus® when appropriate.";

/** Patient testimonials */
export const testimonials = [
  {
    quote:
      "I lost 45 pounds in 6 months with Wegovy. My doctor adjusted my dose along the way and the support team was incredible.",
    name: "Sarah M.",
    location: "Austin, TX",
    image: images.stories.maya,
  },
  {
    quote:
      "After years of yo-yo dieting, this program finally gave me sustainable results. The physician consultation made all the difference.",
    name: "James R.",
    location: "Denver, CO",
    image: images.stories.jules,
  },
  {
    quote:
      "Convenient, professional, and effective. My medication arrived within days and I've never felt more supported in my health journey.",
    name: "Michelle K.",
    location: "Chicago, IL",
    image: images.stories.sara,
  },
];

/** Pricing page category filters */
export const pricingFilters = [
  { id: "all", label: "All" },
  { id: "compounded-sema", label: "Compounded Semaglutide" },
  { id: "compounded-tirz", label: "Compounded Tirzepatide" },
  { id: "consultation", label: "One-Time Consultation" },
] as const;

export type PricingFilterId = (typeof pricingFilters)[number]["id"];

const pricingFeatureBundle = {
  hub: "CARMA Premium Hub membership",
  noInsurance: "No insurance required",
} as const;

function membershipFeatures(
  consultLine: string,
  medicationDelivery: string,
  includeNoInsurance: boolean,
): string[] {
  const items = [
    consultLine,
    "Health history & goals review",
    "Personalized treatment recommendations",
    "Custom treatment plan",
    "Free health profile report",
    "Prescription evaluation",
    medicationDelivery,
    "Dosage plan",
    "Ongoing progress monitoring",
    "Priority support",
    "Lifestyle guidance",
    pricingFeatureBundle.hub,
  ];
  if (includeNoInsurance) items.push(pricingFeatureBundle.noInsurance);
  return items;
}

/** Pricing plans — aligned with multi-month GLP-1 program tiers */
export const pricingPlans = [
  {
    id: "consultation",
    name: "One-Time Consultation",
    price: "$39",
    cadence: "/ one-time payment",
    planLength: undefined,
    save: undefined,
    highlight: false,
    ribbon: undefined,
    categories: ["consultation", "compounded-sema", "compounded-tirz"] as const,
    features: membershipFeatures(
      "Virtual physician consultation",
      "Medication delivery when prescribed",
      false,
    ),
    cta: "Consult now",
    plan: "unsure" as const,
  },
  {
    id: "kickstart",
    name: "Kickstart",
    price: "$249",
    cadence: "/ per month",
    planLength: "1 Month Plan",
    save: undefined,
    highlight: false,
    ribbon: undefined,
    categories: ["compounded-sema", "compounded-tirz"] as const,
    features: membershipFeatures(
      "Virtual physician consultation",
      "1-month medication delivery",
      true,
    ),
    cta: "Consult now",
    plan: "semaglutide" as const,
    planTirz: "tirzepatide" as const,
  },
  {
    id: "momentum",
    name: "Momentum",
    price: "$199",
    cadence: "/ per month",
    planLength: "3 Month Plan",
    save: "Save $50/month",
    highlight: true,
    ribbon: "Most popular",
    categories: ["compounded-sema", "compounded-tirz"] as const,
    features: membershipFeatures(
      "3 virtual physician consultations",
      "3-month medication delivery",
      true,
    ),
    cta: "Get started",
    plan: "semaglutide" as const,
    planTirz: "tirzepatide" as const,
  },
  {
    id: "transform",
    name: "Transform",
    price: "$179",
    cadence: "/ per month",
    planLength: "6 Month Plan",
    save: "Save $70/month",
    highlight: false,
    ribbon: undefined,
    categories: ["compounded-sema", "compounded-tirz"] as const,
    features: membershipFeatures(
      "6 virtual physician consultations",
      "6-month medication delivery",
      true,
    ),
    cta: "Consult now",
    plan: "semaglutide" as const,
    planTirz: "tirzepatide" as const,
  },
  {
    id: "beyond",
    name: "Beyond",
    price: "$149",
    cadence: "/ per month",
    planLength: "12 Month Plan",
    save: "Save $100/month",
    highlight: false,
    ribbon: undefined,
    categories: ["compounded-sema", "compounded-tirz"] as const,
    features: membershipFeatures(
      "12 virtual physician consultations",
      "12-month medication delivery",
      true,
    ),
    cta: "Consult now",
    plan: "semaglutide" as const,
    planTirz: "tirzepatide" as const,
  },
];

/** How CARMA compares (typical membership + medication telehealth models) */
export const pricingComparison = {
  competitors: ["CARMA Med Spa", "Typical telehealth"] as const,
  cost: { us: "$149 – $249", them: "$223 – $298+" },
  rows: [
    { label: "Care and medication in one price", us: true, them: false },
    { label: "Separate monthly membership fee", us: false, them: true },
    { label: "One rate per medication, not tiered by dose", us: true, them: false },
    { label: "Monthly rate does not jump after month one", us: true, them: false },
    { label: "Longer plans lower your rate", us: "1, 3, 6 & 12 mo", them: "Varies" },
    { label: "Licensed provider reviews your case", us: true, them: true },
    { label: "Start without insurance", us: true, them: true },
  ],
};

/** Physicians */
export const physicians = [
  {
    name: "Dr. Jonathan Miller, MD",
    role: "Weight Management · Longevity Care",
    quote:
      "Weight loss care starts with listening — then building a plan that fits real life.",
    bio: "I believe weight loss care starts with listening. By understanding each patient's health, challenges, and goals, I provide personalized medical guidance and practical strategies designed to fit their everyday life.",
    image: images.doctors.miller,
  },
  {
    name: "Dr. David Okonkwo, MD, MBA",
    role: "Neurology · Child Neurology",
    quote:
      "Exceptional care begins with taking people seriously and explaining medicine clearly.",
    bio: "Dr. Okonkwo is an adult and pediatric neurologist with subspecialty certification in Child Neurology and extensive experience in psychiatry. He listens closely, explains complicated medicine in plain language, and believes exceptional care begins with taking people seriously.",
    image: images.doctors.okonkwo,
  },
  {
    name: "Dr. Zachary B. Kramer, MD",
    role: "Emergency Medicine · Obesity Medicine",
    quote:
      "Practical, evidence-based obesity care built on clear communication.",
    bio: "Board-certified in Emergency Medicine with over 15 years of clinical experience, now focused on telehealth and obesity medicine. His approach is practical, evidence-based, and built on clear communication.",
    image: images.doctors.kramer,
  },
  {
    name: "Dr. Gaurav K. Patel, MD",
    role: "Family Medicine · Obesity Medicine",
    quote:
      "Whole-person care across telemedicine, obesity medicine, and lifestyle support.",
    bio: "Board-certified family medicine physician licensed in 48 states and Washington, D.C. His experience spans ICU care, telemedicine, obesity medicine, and lifestyle medicine — with a focus on personalized, whole-person care.",
    image: images.doctors.patel,
  },
];

/** Company values (About) */
export const values = [
  {
    title: "Medical-first",
    body: "Care is led by board-certified physicians — never algorithms alone. Real expertise, every step.",
  },
  {
    title: "Radically transparent",
    body: "No hidden fees, no surprises. Clear pricing and honest guidance about what's right for you.",
  },
  {
    title: "Patient-centered",
    body: "Your goals, your pace. We build plans around your life and adjust as your body responds.",
  },
  {
    title: "Private by design",
    body: "HIPAA-compliant, encrypted, and confidential. Your data is yours — always.",
  },
];

/** Company-level FAQs (from reference) */
export const siteFaqs = [
  {
    question: "Do I need insurance to get started?",
    answer:
      "No. You can get started without insurance. Your initial consultation is $39 out-of-pocket. If you continue with treatment, GLP-1 programs are $149–$249 per month all-in, including ongoing care and medication when prescribed.",
  },
  {
    question: "Am I a candidate for GLP-1 medication?",
    answer:
      "GLP-1 medications may be considered for adults with a BMI of 27 or higher with at least one weight-related condition, or a BMI of 30 or higher. A licensed physician determines eligibility based on your full health history.",
  },
  {
    question: "How quickly will I receive my prescription?",
    answer:
      "Most patients receive a prescription decision within 24–48 hours after their consultation, if approved. Pharmacy fulfillment times vary, with some offering same-day pickup.",
  },
  {
    question: "What's the difference between Ozempic and Wegovy?",
    answer:
      "Both contain semaglutide. Wegovy is FDA-approved for weight management, while Ozempic may be prescribed off-label. A licensed physician determines the most appropriate option based on your health profile.",
  },
  {
    question: "Are the consultations really with real doctors?",
    answer:
      "Yes. All consultations are conducted by licensed, board-certified physicians who evaluate your health and treatment options.",
  },
  {
    question: "Can I cancel my membership at any time?",
    answer:
      "Yes. Monthly memberships can be canceled at any time before the next billing date with no penalties. Annual plans are prorated based on usage.",
  },
  {
    question: "Do you prescribe compounded semaglutide?",
    answer:
      "We may work with licensed compounding pharmacies when appropriate, especially if brand-name medications are unavailable or cost-prohibitive.",
  },
  {
    question: "What states do you operate in?",
    answer:
      "We provide telehealth consultations across the U.S., with physicians licensed in the states where they practice to ensure compliant care.",
  },
];
