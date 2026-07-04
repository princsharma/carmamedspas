/** Local brand and landing page imagery in /public/images */
const img = (file: string, alt: string) => ({
  src: `/images/${encodeURIComponent(file)}`,
  alt,
});

export const images = {
  logo: img("carmamedspas-logo.webp", "CARMA Med Spa"),

  /** GLP-1 medication product photography */
  glp: {
    a: img("zepbound.webp", "Zepbound tirzepatide medication"),
    b: img("wegovy.webp", "Wegovy semaglutide medication"),
    c: img("ozempic.webp", "Ozempic semaglutide medication"),
    e: img("rybluss.webp", "Rybelsus oral semaglutide medication"),
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
    coaching: img(
      "Care coaching and.webp",
      "Care coaching and telehealth consultation at home",
    ),
    atHome: img(
      "Gemini_Generated_Image_56dfmw56dfmw56df 1.webp",
      "Patient managing their weight-loss plan from home",
    ),
  },

  steps: {
    consult: img("Get pre-approved online_1.webp", "Get pre-approved for GLP-1 care online"),
    medication: img("zepbound.webp", "Prescription GLP-1 medication from a licensed pharmacy"),
  },

  medications: {
    wegovy: img("wegovy.webp", "Wegovy semaglutide medication"),
    zepbound: img("zepbound.webp", "Zepbound tirzepatide medication"),
    ozempic: img("ozempic.webp", "Ozempic semaglutide medication"),
    mounjaro: img("mounjaro.webp", "Mounjaro tirzepatide medication"),
    rybelsus: img("rybluss.webp", "Rybelsus oral semaglutide medication"),
    liraglutide: img("liraglutide.webp", "Liraglutide GLP-1 medication"),
  },

  stories: {
    banner: img("Find freedom with.webp", "Find freedom with clinician-led GLP-1 care"),
    maya: img("blue f image.webp", "CARMA Med Spa patient Maya R."),
    jules: img("blue s image.webp", "CARMA Med Spa patient Jules T."),
    sara: img("healthy.webp", "CARMA Med Spa patient Sara K."),
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
