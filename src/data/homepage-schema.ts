export const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.carmamedspas.com/#organization",
      name: "Carma Medspas",
      alternateName: "Carma Medspas",
      url: "https://www.carmamedspas.com/",
      logo: "https://www.carmamedspas.com/images/main_logo.svg",
      image: "https://www.carmamedspas.com/images/main_logo.svg",
      description:
        "Clinician-guided GLP-1 weight care evaluated online, personalized to your body, and supported every step — including licensed provider evaluation, prescription medication, and ongoing medical monitoring.",
      telephone: "+1-888-315-1715",
      email: "care@carmamedspas.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1030 S Glendale Ave Ste 404",
        addressLocality: "Glendale",
        addressRegion: "CA",
        postalCode: "91205",
        addressCountry: "US",
      },
      medicalSpecialty: "Bariatrics",
      availableService: [
        {
          "@type": "MedicalTherapy",
          name: "GLP-1 Weight Management Program",
          url: "https://www.carmamedspas.com/weight-loss",
          offers: {
            "@type": "Offer",
            name: "Online Evaluation",
            price: "75",
            priceCurrency: "USD",
            url: "https://www.carmamedspas.com/pricing",
            description:
              "Flat-rate online evaluation with a licensed clinician. No insurance required.",
            availability: "https://schema.org/InStock",
          },
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "GLP-1 Medications",
        itemListElement: [
          {
            "@type": "MedicalTherapy",
            name: "Wegovy",
            activeIngredient: "Semaglutide",
            url: "https://www.carmamedspas.com/medications/wegovy",
          },
          {
            "@type": "MedicalTherapy",
            name: "Zepbound",
            activeIngredient: "Tirzepatide",
            url: "https://www.carmamedspas.com/medications/zepbound",
          },
          {
            "@type": "MedicalTherapy",
            name: "Ozempic",
            activeIngredient: "Semaglutide",
            url: "https://www.carmamedspas.com/medications/ozempic",
          },
          {
            "@type": "MedicalTherapy",
            name: "Mounjaro",
            activeIngredient: "Tirzepatide",
            url: "https://www.carmamedspas.com/medications/mounjaro",
          },
          {
            "@type": "MedicalTherapy",
            name: "Rybelsus",
            activeIngredient: "Semaglutide",
            url: "https://www.carmamedspas.com/medications/rybelsus",
          },
          {
            "@type": "MedicalTherapy",
            name: "Victoza / Saxenda",
            activeIngredient: "Liraglutide",
            url: "https://www.carmamedspas.com/medications/liraglutide",
          },
        ],
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.carmamedspas.com/#website",
      url: "https://www.carmamedspas.com/",
      name: "CARMA Med Spa",
      publisher: { "@id": "https://www.carmamedspas.com/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "Offer",
      "@id": "https://www.carmamedspas.com/#evaluation-offer",
      name: "Online GLP-1 Evaluation",
      price: "75",
      priceCurrency: "USD",
      url: "https://www.carmamedspas.com/pricing",
      seller: { "@id": "https://www.carmamedspas.com/#organization" },
      description:
        "Flat $75 online evaluation with a licensed clinician — no insurance needed. Includes review of BMI, medical history and goals to determine GLP-1 treatment eligibility.",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "ItemList",
      name: "GLP-1 Medications",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Wegovy",
          url: "https://www.carmamedspas.com/medications/wegovy",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Zepbound",
          url: "https://www.carmamedspas.com/medications/zepbound",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ozempic",
          url: "https://www.carmamedspas.com/medications/ozempic",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Mounjaro",
          url: "https://www.carmamedspas.com/medications/mounjaro",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Rybelsus",
          url: "https://www.carmamedspas.com/medications/rybelsus",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Victoza / Saxenda",
          url: "https://www.carmamedspas.com/medications/liraglutide",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I know if I'm eligible for GLP-1 treatment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eligibility is based on your BMI, medical history and health goals. After your online evaluation, a licensed clinician reviews everything and determines whether treatment is clinically appropriate for you.",
          },
        },
        {
          "@type": "Question",
          name: "What does it cost to get started?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your evaluation is a flat $75 — no insurance required. If you're prescribed medication, your clinician will review pricing and options transparently before anything is filled.",
          },
        },
        {
          "@type": "Question",
          name: "Are the clinicians real, licensed providers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every plan is reviewed and approved by a board-certified, U.S.-licensed clinician. There's no automated prescribing — a real provider makes every medical decision.",
          },
        },
        {
          "@type": "Question",
          name: "How is the medication delivered?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Prescriptions are filled through licensed pharmacies and shipped discreetly to your door with free shipping, along with clear dosing instructions and ongoing support.",
          },
        },
        {
          "@type": "Question",
          name: "What are the common side effects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most common side effects are gastrointestinal, such as nausea, especially during dose increases. Your clinician titrates your dose gradually and monitors you throughout to keep treatment tolerable.",
          },
        },
        {
          "@type": "Question",
          name: "Can I cancel or pause my treatment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. You're never locked in. You can pause, adjust or stop your plan at any time in coordination with your care team.",
          },
        },
      ],
    },
    {
      "@type": "Physician",
      name: "Dr. Vanessa Niles",
      medicalSpecialty: "Weight Management",
      worksFor: { "@id": "https://www.carmamedspas.com/#organization" },
      image:
        "https://www.carmamedspas.com/_next/image?url=%2Fimages%2FDr-vanessa-niles.webp&w=3840&q=75",
    },
    {
      "@type": "Physician",
      name: "Dr. Cheryl Bugailiskis",
      medicalSpecialty: "Internal Medicine",
      worksFor: { "@id": "https://www.carmamedspas.com/#organization" },
      image:
        "https://www.carmamedspas.com/_next/image?url=%2Fimages%2Fcheryl-bugailiskis.webp&w=3840&q=75",
    },
    {
      "@type": "Physician",
      name: "Dr. Krasne",
      medicalSpecialty: "General Practice",
      description: "Board-certified physician",
      worksFor: { "@id": "https://www.carmamedspas.com/#organization" },
      image:
        "https://www.carmamedspas.com/_next/image?url=%2Fimages%2Fdr-krasne%2520.webp&w=3840&q=75",
    },
    {
      "@type": "Physician",
      name: "Dr. Miller",
      medicalSpecialty: "Metabolic Health",
      worksFor: { "@id": "https://www.carmamedspas.com/#organization" },
      image:
        "https://www.carmamedspas.com/_next/image?url=%2Fimages%2Fphysician.jpg&w=3840&q=75",
    },
    {
      "@type": "AggregateRating",
      "@id": "https://www.carmamedspas.com/#aggregate-rating",
      itemReviewed: { "@id": "https://www.carmamedspas.com/#organization" },
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "9164",
    },
    {
      "@type": "WebApplication",
      "@id": "https://www.carmamedspas.com/#bmi-calculator",
      name: "GLP-1 BMI Eligibility Check",
      url: "https://www.carmamedspas.com/",
      applicationCategory: "HealthApplication",
      operatingSystem: "Web",
      description:
        "Free 30-second BMI calculator that gives a preliminary signal of whether a visitor may be a candidate for a clinician-guided GLP-1 weight-management program. BMI is a screening tool, not a diagnosis; a licensed clinician makes all treatment decisions.",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      provider: { "@id": "https://www.carmamedspas.com/#organization" },
    },
  ],
} as const;
