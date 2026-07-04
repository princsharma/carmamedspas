import { images } from "@/data/images";

/** Canonical production origin — used for metadata, sitemap, and robots. */
export const siteUrl = "https://carmamedspas.com";

/** Company contact + brand facts */
export const site = {
  name: "CARMA Med Spa",
  phone: "(888) 315-1715",
  email: "care@carmamedspas.com",
  /** External scheduling / evaluation portal — where all booking CTAs go. */
  bookingUrl:
    "https://ongoweightloss.videovisitmd.com/f/vshop-schedule?utm_source=carma-med-spas-home-page",
  evaluationPrice: 75,
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
  { value: "6 Rx", label: "GLP-1 medications available" },
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

export const comparisonCost = { carma: "$299", traditional: "$500+" };

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

/** Pricing plans */
export const pricingPlans = [
  {
    name: "Online Evaluation",
    price: "$75",
    cadence: "one-time",
    tagline: "See if you're a candidate",
    highlight: false,
    features: [
      "5-minute health assessment",
      "Board-certified physician review",
      "Treatment recommendation",
      "No insurance required",
    ],
    cta: "Start evaluation",
    plan: "unsure" as const,
  },
  {
    name: "Semaglutide Program",
    price: "$299",
    cadence: "per month",
    tagline: "Wegovy · Ozempic · Rybelsus",
    highlight: true,
    features: [
      "Physician-prescribed semaglutide",
      "Personalized dosing & titration",
      "Unlimited care-team messaging",
      "Free, discreet shipping",
      "Ongoing monitoring & adjustments",
    ],
    cta: "Get started",
    plan: "semaglutide" as const,
  },
  {
    name: "Tirzepatide Program",
    price: "$449",
    cadence: "per month",
    tagline: "Zepbound · Mounjaro",
    highlight: false,
    features: [
      "Physician-prescribed tirzepatide",
      "Dual-pathway GLP-1/GIP support",
      "Personalized dosing & titration",
      "Unlimited care-team messaging",
      "Free, discreet shipping",
    ],
    cta: "Get started",
    plan: "tirzepatide" as const,
  },
];

/** Physicians */
export const physicians = [
  {
    name: "Dr. Vanessa Niles",
    role: "Weight Management",
    bio: "Focused on sustainable, individualized weight care with a decade of GLP-1 experience.",
    image: images.doctors.niles,
  },
  {
    name: "Dr. Cheryl Bugailiskis",
    role: "Internal Medicine",
    bio: "Believes lasting results come from combining medicine with real, ongoing guidance.",
    image: images.doctors.bugailiskis,
  },
  {
    name: "Dr. Krasne",
    role: "Board-Certified Physician",
    bio: "Prioritizes close monitoring so patients can move forward with total confidence.",
    image: images.doctors.krasne,
  },
  {
    name: "Dr. Miller",
    role: "Metabolic Health",
    bio: "Every dose decision is deliberate, personal, and reviewed against your full history.",
    image: images.doctors.miller,
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
      "No. You can get started without insurance. Our consultation fee is $75 out-of-pocket, and medication costs vary depending on insurance coverage or discount programs.",
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
