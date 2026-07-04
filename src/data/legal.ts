export type LegalSection = {
  heading: string;
  body: string[];
};

export type LegalDoc = {
  slug: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

const updated = "July 2026";

export const legalDocs: Record<string, LegalDoc> = {
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    updated,
    intro:
      "CARMA Med Spa (\"CARMA\", \"we\", \"us\") is committed to protecting your privacy. This policy explains what information we collect, how we use it, and the choices you have.",
    sections: [
      {
        heading: "Information we collect",
        body: [
          "We collect information you provide during your evaluation and account creation, such as your name, contact details, health history, and payment information.",
          "We also collect limited technical data (device, browser, and usage information) to operate and improve our services.",
        ],
      },
      {
        heading: "How we use your information",
        body: [
          "We use your information to provide telehealth services, connect you with licensed clinicians, fulfill prescriptions through licensed pharmacies, process payments, and communicate with you about your care.",
          "We never sell your personal or health information to third parties.",
        ],
      },
      {
        heading: "How we protect your information",
        body: [
          "Your health information is encrypted in transit and at rest, and access is limited to authorized personnel involved in your care. Our systems are designed to comply with HIPAA and applicable privacy laws.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          "You may request access to, correction of, or deletion of your personal information, subject to legal and medical record-keeping requirements. Contact us at care@carmamedspas.com to make a request.",
        ],
      },
    ],
  },
  terms: {
    slug: "terms",
    title: "Terms of Service",
    updated,
    intro:
      "These Terms of Service govern your use of CARMA Med Spa's website and telehealth services. By using our services, you agree to these terms.",
    sections: [
      {
        heading: "Eligibility",
        body: [
          "You must be at least 18 years old and located in a state where our physicians are licensed to use our services. All treatment decisions are made solely by licensed clinicians.",
        ],
      },
      {
        heading: "Not for emergencies",
        body: [
          "Our services do not replace emergency medical care. If you are experiencing a medical emergency, call 911 or go to the nearest emergency room.",
        ],
      },
      {
        heading: "Payments & memberships",
        body: [
          "Evaluation and membership fees are described at checkout. Memberships renew automatically and may be cancelled before the next billing date. See our Refund & Billing policy for details.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "To the maximum extent permitted by law, CARMA is not liable for indirect or consequential damages arising from use of the website. Individual treatment results vary.",
        ],
      },
    ],
  },
  "medical-disclaimer": {
    slug: "medical-disclaimer",
    title: "Medical Disclaimer",
    updated,
    intro:
      "The content on this website is provided for general informational and educational purposes only and does not constitute medical advice.",
    sections: [
      {
        heading: "Not medical advice",
        body: [
          "Information on this site is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified health provider with any questions about a medical condition.",
        ],
      },
      {
        heading: "Prescriptions",
        body: [
          "GLP-1 medications are available by prescription only and are prescribed solely when a licensed clinician determines treatment is medically appropriate. They are not suitable for everyone.",
        ],
      },
      {
        heading: "Results vary",
        body: [
          "Statistics and outcomes referenced on this site are based on clinical studies. Individual results vary and are not guaranteed.",
        ],
      },
    ],
  },
  hipaa: {
    slug: "hipaa",
    title: "HIPAA Notice of Privacy Practices",
    updated,
    intro:
      "This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.",
    sections: [
      {
        heading: "Uses & disclosures",
        body: [
          "We use and disclose your protected health information (PHI) for treatment, payment, and healthcare operations, and as otherwise permitted or required by law.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You have the right to inspect and copy your PHI, request amendments, request restrictions on certain uses, and receive an accounting of disclosures. To exercise these rights, contact our privacy officer at care@carmamedspas.com.",
        ],
      },
      {
        heading: "Our responsibilities",
        body: [
          "We are required by law to maintain the privacy of your PHI, provide you this notice, and notify you following a breach of unsecured PHI.",
        ],
      },
    ],
  },
  accessibility: {
    slug: "accessibility",
    title: "Accessibility Statement",
    updated,
    intro:
      "CARMA Med Spa is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone.",
    sections: [
      {
        heading: "Our commitment",
        body: [
          "We aim to conform to WCAG 2.1 AA standards and design our website to be usable with assistive technologies such as screen readers and keyboard navigation.",
        ],
      },
      {
        heading: "Feedback",
        body: [
          "If you encounter an accessibility barrier on our site, please contact us at care@carmamedspas.com so we can address it promptly.",
        ],
      },
    ],
  },
  "refund-billing": {
    slug: "refund-billing",
    title: "Refund & Billing Policy",
    updated,
    intro:
      "This policy explains how billing works and when refunds may be available for CARMA Med Spa services.",
    sections: [
      {
        heading: "Evaluation fee",
        body: [
          "The one-time evaluation fee covers your clinical review. Because it pays for professional time, it is generally non-refundable once the review is completed.",
        ],
      },
      {
        heading: "Memberships",
        body: [
          "Monthly memberships can be cancelled at any time before the next billing date with no penalty. Annual plans are prorated based on usage.",
        ],
      },
      {
        heading: "Medication",
        body: [
          "Prescription medications dispensed by a pharmacy are subject to that pharmacy's return policy and applicable law, and are typically non-returnable for safety reasons.",
        ],
      },
    ],
  },
};

export const legalSlugs = Object.keys(legalDocs);
