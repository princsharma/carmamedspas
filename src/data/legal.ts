export type LegalSection = {
  heading: string;
  body?: string[];
  bullets?: string[];
  /** Highlighted callout shown inside the section. */
  callout?: string;
};

export type LegalDoc = {
  slug: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

const updated = "July 2026";
const email = "care@carmamedspas.com";

export const legalDocs: Record<string, LegalDoc> = {
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    updated,
    intro:
      "CARMA Med Spa (\"CARMA\", \"we\", \"us\") respects your privacy and is committed to protecting the personal and health information you share with us. This policy explains what we collect, how we use it, and the choices you have.",
    sections: [
      {
        heading: "Information we collect",
        body: ["We collect information you provide and information generated as you use our services, including:"],
        bullets: [
          "Contact details such as your name, email, phone number and address.",
          "Health information you share during your evaluation, including medical history and current medications.",
          "Payment information processed securely by our payment providers.",
          "Technical data such as device, browser and usage information.",
        ],
      },
      {
        heading: "How we use your information",
        body: ["We use your information to:"],
        bullets: [
          "Provide telehealth services and connect you with licensed clinicians.",
          "Facilitate prescriptions through licensed pharmacies when appropriate.",
          "Process payments and manage your membership.",
          "Communicate with you about your care, appointments and account.",
          "Improve and secure our services.",
        ],
      },
      {
        heading: "How we share information",
        body: [
          "We share information only as needed to deliver care — for example, with the treating clinician, the dispensing pharmacy, and service providers who support our operations under confidentiality obligations. We may also disclose information when required by law.",
        ],
        callout: "We never sell your personal or health information to third parties.",
      },
      {
        heading: "Data security",
        body: [
          "Your information is encrypted in transit and at rest, and access is limited to authorized personnel involved in your care. Our systems are designed to comply with HIPAA and applicable privacy laws. No method of transmission is 100% secure, but we work continuously to protect your data.",
        ],
      },
      {
        heading: "Your rights",
        body: ["Depending on your location, you may have the right to:"],
        bullets: [
          "Access, correct or request deletion of your personal information.",
          "Request a copy of your health records, subject to medical record-keeping requirements.",
          "Opt out of marketing communications at any time.",
          "Restrict certain uses of your information.",
        ],
      },
      {
        heading: "Cookies & tracking technologies",
        body: [
          "We use cookies and similar technologies to operate the site, remember preferences, and understand usage. You can control cookies through your browser settings; disabling some cookies may affect functionality.",
        ],
      },
      {
        heading: "Third-party links",
        body: [
          "Our site may link to third-party websites we do not control. We are not responsible for the privacy practices of those sites and encourage you to review their policies.",
        ],
      },
      {
        heading: "Information for minors",
        body: [
          "Our services are intended for adults 18 and older. We do not knowingly collect information from minors. If you believe a minor has provided us information, please contact us.",
        ],
      },
      {
        heading: "Changes to this policy",
        body: [
          "We may update this policy from time to time. Material changes will be reflected by the \"last updated\" date, and where appropriate we will provide additional notice.",
        ],
      },
      {
        heading: "Contact us",
        body: [`Questions about your privacy? Contact us at ${email}.`],
      },
    ],
  },

  terms: {
    slug: "terms",
    title: "Terms & Conditions",
    updated,
    intro:
      "Welcome to CARMA Med Spa. These Terms & Conditions govern your access to and use of our website and telehealth services. By using our services, you agree to these terms.",
    sections: [
      {
        heading: "About our services",
        body: [
          "CARMA provides a telehealth platform that connects patients with licensed clinicians for weight-management evaluation and, when clinically appropriate, GLP-1 therapy. We do not provide emergency care.",
        ],
      },
      {
        heading: "Eligibility & patient responsibilities",
        body: [
          "You must be at least 18 years old and located in a state where our clinicians are licensed. You agree to provide accurate, complete health information so your provider can make appropriate decisions.",
        ],
      },
      {
        heading: "Telehealth consent",
        body: [
          "By using our services, you consent to receive care via telehealth, including secure video or audio consultations, and understand the benefits and limitations of remote care.",
        ],
      },
      {
        heading: "No medical advice guarantee",
        body: [
          "Website content is educational and does not constitute medical advice. A prescription is issued only when a licensed clinician determines treatment is medically appropriate; approval is never guaranteed.",
        ],
      },
      {
        heading: "Third-party dispensaries & shipping",
        body: [
          "Prescriptions are fulfilled by independent, state-licensed pharmacies responsible for dispensing and shipping. Delivery times and pharmacy policies are governed by those pharmacies.",
        ],
      },
      {
        heading: "Fees, payments, cancellations & refunds",
        body: [
          "Evaluation and membership fees are described at checkout. Memberships renew automatically and can be cancelled before the next billing date. See our Refund & Billing policy for details.",
        ],
      },
      {
        heading: "Accounts & security",
        body: [
          "You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Notify us promptly of any unauthorized use.",
        ],
      },
      {
        heading: "User conduct",
        body: [
          "You agree not to misuse our services, submit false information, or attempt to disrupt or gain unauthorized access to our systems.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "All content on this site — including text, graphics, logos and software — is owned by CARMA or its licensors and protected by law. You may not reproduce it without permission.",
        ],
      },
      {
        heading: "Content you provide",
        body: [
          "You retain ownership of information you submit but grant us a license to use it as needed to provide services. You are responsible for the accuracy of that information.",
        ],
      },
      {
        heading: "Third-party services & links",
        body: [
          "We may integrate or link to third-party services. We are not responsible for their content, availability or practices.",
        ],
      },
      {
        heading: "Disclaimers",
        body: [
          "Services are provided \"as is\" without warranties of any kind. We do not warrant that the site will be uninterrupted or error-free.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "To the maximum extent permitted by law, CARMA is not liable for indirect, incidental or consequential damages arising from use of the website or services.",
        ],
      },
      {
        heading: "Indemnification",
        body: [
          "You agree to indemnify and hold CARMA harmless from claims arising out of your misuse of the services or violation of these terms.",
        ],
      },
      {
        heading: "Suspension, termination & changes",
        body: [
          "We may modify, suspend or discontinue services, and update these terms, at any time. Continued use after changes constitutes acceptance.",
        ],
      },
      {
        heading: "Force majeure",
        body: [
          "We are not liable for delays or failures caused by events beyond our reasonable control, including natural disasters, outages or supply disruptions.",
        ],
      },
      {
        heading: "Severability & entire agreement",
        body: [
          "If any provision is found unenforceable, the remaining provisions remain in effect. These terms, together with our policies, constitute the entire agreement between you and CARMA.",
        ],
      },
      {
        heading: "Contact us",
        body: [`Questions about these terms? Contact us at ${email}.`],
      },
    ],
  },

  "medical-disclaimer": {
    slug: "medical-disclaimer",
    title: "Medical Disclaimer",
    updated,
    intro:
      "Clear guidance on the medical limitations of our services. The content on this website is provided for general informational and educational purposes only and does not constitute medical advice.",
    sections: [
      {
        heading: "Not medical advice",
        body: [
          "Information on this site is not a substitute for professional medical advice, diagnosis or treatment. Always seek the advice of a qualified health provider with any questions about a medical condition.",
        ],
        callout: "Never disregard professional medical advice or delay seeking it because of something you read here.",
      },
      {
        heading: "Licensed healthcare only",
        body: [
          "All treatment decisions are made solely by licensed healthcare providers who review your complete medical history and current medications before recommending any treatment.",
        ],
      },
      {
        heading: "Prescription control",
        body: [
          "GLP-1 medications are available by prescription only and are prescribed exclusively when a licensed clinician determines treatment is medically appropriate. They are not suitable for everyone.",
        ],
      },
      {
        heading: "Individual results vary",
        body: [
          "Statistics and outcomes referenced on this site are based on clinical studies. Individual results vary and are not guaranteed.",
        ],
      },
      {
        heading: "Your healthcare responsibility",
        body: [
          "You are responsible for sharing accurate, complete health information and for following your provider's guidance. Report any side effects or concerns to your care team promptly.",
        ],
      },
      {
        heading: "Telehealth limitations",
        body: [
          "Telehealth is appropriate for many, but not all, situations. Your provider may determine that in-person evaluation is necessary and will advise you accordingly.",
        ],
      },
      {
        heading: "FDA-approved GLP-1 medications",
        body: [
          "We facilitate access to FDA-approved GLP-1 medications. Some medications may be prescribed off-label when clinically appropriate, as determined by your licensed provider.",
        ],
      },
      {
        heading: "Emergency information",
        body: [
          "Our telehealth services are not intended for medical emergencies.",
        ],
        callout: "If you are experiencing a medical emergency, call 911 or go to the nearest emergency room immediately.",
      },
    ],
  },

  "refund-billing": {
    slug: "refund-billing",
    title: "Refund & Billing Policy",
    updated,
    intro:
      "This policy explains how billing works, what's included, and when refunds may be available for CARMA Med Spa services.",
    sections: [
      {
        heading: "Billing overview",
        body: ["Your billing is straightforward and transparent:"],
        bullets: [
          "A one-time evaluation fee covers your clinical review.",
          "Program memberships are billed monthly and include care and support.",
          "Medication fees are separate and may vary by medication, dose and pharmacy.",
        ],
      },
      {
        heading: "Refund eligibility",
        body: [
          "Because the evaluation fee pays for professional clinical time, it is generally non-refundable once the review has been completed. If a review has not yet occurred, contact us and we will review your request.",
        ],
      },
      {
        heading: "Subscription policy",
        body: [
          "Monthly memberships renew automatically and can be cancelled at any time before the next billing date with no penalty. Annual plans are prorated based on usage. Cancellation stops future billing but does not refund the current period unless required by law.",
        ],
        callout: "You can cancel anytime before your next billing date — no penalties, no hassle.",
      },
      {
        heading: "Medication & pharmacy",
        body: [
          "Prescription medications dispensed by a pharmacy are subject to that pharmacy's return policy and applicable law, and are typically non-returnable for safety reasons.",
        ],
      },
      {
        heading: "Payment methods",
        body: [
          "We accept major credit and debit cards through a secure, PCI-compliant payment processor. Your full card details are never stored on our servers.",
        ],
      },
      {
        heading: "Contact support",
        body: [`Questions about a charge or refund? Contact us at ${email}.`],
      },
    ],
  },

  "editorial-policy": {
    slug: "editorial-policy",
    title: "Editorial Policy",
    updated,
    intro:
      "CARMA Med Spa is committed to publishing accurate, evidence-based health information. This policy describes how our content is created, reviewed and maintained.",
    sections: [
      {
        heading: "Editorial standards",
        body: [
          "All health content is written to be clear, balanced and free of exaggerated claims. We avoid language that guarantees outcomes and always note that individual results vary.",
        ],
      },
      {
        heading: "Medical review process",
        body: ["Clinical content follows a structured review process:"],
        bullets: [
          "Drafted with reference to peer-reviewed research and FDA labeling.",
          "Reviewed by licensed healthcare professionals for accuracy.",
          "Checked for clarity, balance and compliance before publishing.",
          "Re-reviewed periodically as guidelines evolve.",
        ],
      },
      {
        heading: "Fact-checking",
        body: [
          "Claims and statistics are verified against reputable sources. Where we cite figures, they reflect published clinical studies rather than marketing estimates.",
        ],
      },
      {
        heading: "Medical sources",
        body: [
          "We rely on peer-reviewed journals, FDA guidance, and recognized medical organizations. We prioritize primary sources and current clinical guidelines.",
        ],
      },
      {
        heading: "Content updates",
        body: [
          "We review published content on a regular cadence and update it when medical guidance changes. Each page reflects its most recent review date.",
        ],
      },
      {
        heading: "Healthcare professionals",
        body: [
          "Our content is informed and reviewed by licensed clinicians with experience in weight management and metabolic health.",
        ],
      },
      {
        heading: "Editorial independence",
        body: [
          "Clinical recommendations are based on medical appropriateness, not commercial incentives. Advertising, when present, is kept clearly separate from editorial content.",
        ],
        callout: "If you believe something is inaccurate, contact us and we will review it promptly.",
      },
    ],
  },

  "compliance-hub": {
    slug: "compliance-hub",
    title: "Compliance Hub",
    updated,
    intro:
      "Built on clinical integrity. Compliance is foundational to how CARMA Med Spa operates. This hub summarizes the standards and safeguards behind our telehealth services.",
    sections: [
      {
        heading: "Telehealth compliance",
        body: [
          "Consultations are conducted by clinicians licensed in the states where patients are located, in accordance with applicable state and federal telehealth regulations.",
        ],
      },
      {
        heading: "Medical licensing",
        body: [
          "Every provider on our platform is a licensed, board-certified clinician. We verify credentials and ensure providers practice only within their licensed states.",
        ],
      },
      {
        heading: "Patient safety",
        body: [
          "Patient safety guides every decision. Providers review your full health history and monitor treatment, and we maintain processes for reporting and addressing concerns.",
        ],
      },
      {
        heading: "HIPAA compliance",
        body: [
          "Protected health information is encrypted and handled under HIPAA safeguards. See our HIPAA Notice for details on how we protect your information and your rights.",
        ],
      },
      {
        heading: "Prescription process",
        body: ["Prescribing follows a clear, compliant path:"],
        bullets: [
          "A licensed provider determines medical appropriateness.",
          "Prescriptions are transmitted to independent, licensed pharmacies.",
          "Pharmacies dispense and ship in compliance with pharmacy law.",
          "Orders can be modified only before transmission to the pharmacy.",
        ],
      },
      {
        heading: "FDA-approved medications",
        body: [
          "We facilitate access to FDA-approved GLP-1 medications. Off-label use, where applicable, occurs only when clinically appropriate as determined by your provider.",
        ],
      },
      {
        heading: "State coverage",
        body: [
          "We provide telehealth across the U.S., with physicians licensed in the states where they practice. Availability of specific services may vary by state.",
        ],
      },
      {
        heading: "Security",
        body: [
          "We use industry-standard encryption, access controls and monitoring to protect our platform and your data.",
        ],
      },
      {
        heading: "Reporting a concern",
        body: [`To report a compliance concern, contact our team at ${email}. We investigate all good-faith reports.`],
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
        heading: "Our commitment to you",
        body: [
          "We are committed to protecting the privacy of your protected health information (PHI) and are required by law to maintain its confidentiality and to provide you this notice of our legal duties and privacy practices.",
        ],
      },
      {
        heading: "Access to patient health information",
        body: [
          "Only authorized personnel involved in your care may access your PHI, and only to the extent necessary to provide treatment, process payment, or operate our healthcare services.",
        ],
      },
      {
        heading: "How we may use and share your health information",
        body: ["We may use and disclose your PHI for the following purposes:"],
        bullets: [
          "Treatment — coordinating your care with clinicians and pharmacies.",
          "Payment — billing and processing payments for services.",
          "Healthcare operations — quality, safety and administrative functions.",
          "As required by law — when disclosure is legally mandated.",
        ],
      },
      {
        heading: "Your rights regarding your health information",
        body: ["You have the right to:"],
        bullets: [
          "Inspect and request a copy of your PHI.",
          "Request an amendment to your PHI.",
          "Request restrictions on certain uses and disclosures.",
          "Request confidential communications.",
          "Receive an accounting of certain disclosures.",
          "Obtain a paper copy of this notice.",
        ],
      },
      {
        heading: "Our responsibilities",
        body: [
          "We are required to maintain the privacy of your PHI, provide this notice of our duties and privacy practices, follow the terms of the notice currently in effect, and notify you following a breach of unsecured PHI.",
        ],
      },
      {
        heading: "Complaint process",
        body: [
          "If you believe your privacy rights have been violated, you may file a complaint with us or with the U.S. Department of Health and Human Services. We will not retaliate against you for filing a complaint.",
        ],
        callout: "To exercise your rights or file a complaint, contact our privacy officer.",
      },
      {
        heading: "Contact information",
        body: [`Privacy Officer, CARMA Med Spa — ${email}.`],
      },
    ],
  },
};

export const legalSlugs = Object.keys(legalDocs);
