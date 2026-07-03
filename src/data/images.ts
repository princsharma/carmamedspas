/** Local brand and landing page imagery in /public/images */
const img = (file: string, alt: string) => ({
  src: `/images/${encodeURIComponent(file)}`,
  alt,
});

export const images = {
  logo: img("carmamedspas-logo.webp", "CARMA Med Spa"),

  hero: {
    spa: img("hero-spa.jpg", "Calm spa-inspired wellness environment"),
    wellness: img("healthy.webp", "Patient enjoying an active, healthy lifestyle"),
    consult: img("hero-consult.jpg", "Telehealth consultation with a physician"),
  },

  /** GLP-1 medication product photography */
  glp: {
    a: img("glp-a.webp", "GLP-1 medication pen prepared for treatment"),
    b: img("glp-b.webp", "Prescription GLP-1 medication packaging"),
    c: img("glp-c.webp", "Clinician-guided GLP-1 therapy supplies"),
    d: img("glp-d.webp", "Weekly GLP-1 injection medication"),
    e: img("glp-e.webp", "FDA-approved GLP-1 treatment option"),
  },

  doctors: {
    miller: img("physician.jpg", "Dr. Miller, licensed weight management physician"),
    niles: img("Dr-vanessa-niles.webp", "Dr. Vanessa Niles, licensed medical provider"),
    bugailiskis: img(
      "cheryl-bugailiskis.webp",
      "Dr. Cheryl Bugailiskis, licensed medical provider",
    ),
    krasne: img("dr-krasne .webp", "Dr. Krasne, board-certified physician"),
  },

  showcase: {
    clinic: img("clinic.jpg", "Modern boutique med spa clinic"),
    physician: img("physician.jpg", "Licensed physician in a clinical setting"),
    lifestyle: img("healthy.webp", "Healthy lifestyle supporting weight-care goals"),
    movement: img("movement.jpg", "Gentle movement supporting weight-care goals"),
    delivery: img("delivery.jpg", "Cold-chain medication delivery at home"),
    telehealth: img("Care coaching and.webp", "Patient on a video visit with a clinician"),
    pharmacy: img("pharmacy.jpg", "Pharmacy preparing prescription medications"),
    preApproved: img(
      "Get pre-approved online_1.webp",
      "Online GLP-1 pre-approval on mobile",
    ),
    coaching: img(
      "Care coaching and.webp",
      "Care coaching and telehealth consultation at home",
    ),
    atHome: img(
      "Gemini_Generated_Image_56dfmw56dfmw56df 1.webp",
      "Patient managing their weight-loss plan from home",
    ),
  },

  why: {
    physician: img("why-physician.jpg", "Physician reviewing a personalized care plan"),
    support: img("why-spa.jpg", "Warm spa-like patient support experience"),
    delivery: img("why-delivery.jpg", "Temperature-controlled medication delivery"),
    maintenance: img("why-maintenance.jpg", "Long-term maintenance and coaching"),
  },

  steps: {
    consult: img("Get pre-approved online_1.webp", "Get pre-approved for GLP-1 care online"),
    medication: img("glp-c.webp", "Prescription GLP-1 medication from a licensed pharmacy"),
    dosing: img("glp-b.webp", "Weekly GLP-1 dosing under clinician supervision"),
    support: img("Care coaching and.webp", "Ongoing care coaching and clinician support"),
  },

  medications: {
    banner: img("med-banner.jpg", "GLP-1 medications prepared for patient delivery"),
    sema: img("med-sema.jpg", "Semaglutide medication"),
    tirz: img("med-tirz.jpg", "Tirzepatide medication"),
    wegovy: img("glp-a.webp", "Wegovy semaglutide medication"),
    zepbound: img("glp-b.webp", "Zepbound tirzepatide medication"),
    ozempic: img("glp-c.webp", "Ozempic semaglutide medication"),
    mounjaro: img("glp-d.webp", "Mounjaro tirzepatide medication"),
    rybelsus: img("glp-e.webp", "Rybelsus oral semaglutide medication"),
    liraglutide: img("med-sema.jpg", "Liraglutide GLP-1 medication"),
  },

  compare: {
    header: img("compare-header.jpg", "Comparing GLP-1 medication options"),
  },

  stories: {
    banner: img("Find freedom with.webp", "Find freedom with clinician-led GLP-1 care"),
    maya: img("blue f image.webp", "CARMA Med Spa patient Maya R."),
    jules: img("blue s image.webp", "CARMA Med Spa patient Jules T."),
    sara: img("healthy.webp", "CARMA Med Spa patient Sara K."),
  },

  pricing: {
    banner: img("pricing-banner.jpg", "Transparent pricing for physician-led care"),
    sema: img("pricing-sema.jpg", "Semaglutide care plan"),
    tirz: img("pricing-tirz.jpg", "Tirzepatide care plan"),
  },

  faq: {
    main: img(
      "Gemini_Generated_Image_56dfmw56dfmw56df 1.webp",
      "Patient reviewing GLP-1 care questions from home",
    ),
    accent: img("Dr-vanessa-niles.webp", "Licensed clinician answering patient questions"),
  },

  cta: {
    consult: img("Find freedom with.webp", "Start your GLP-1 weight loss journey"),
    wellness: img("healthy.webp", "Active lifestyle supported by medical weight care"),
  },

  benefits: {
    banner: img("Care coaching and.webp", "Care coaching and ongoing clinician support"),
  },

  footer: {
    ambient: img("footer-ambient.jpg", "Ambient wellness clinic atmosphere"),
  },
} as const;
