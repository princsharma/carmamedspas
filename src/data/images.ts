/** Local brand and landing page imagery in /public/images */
const img = (file: string, alt: string) => ({
  src: `/images/${encodeURIComponent(file)}`,
  alt,
});

/** Homepage imagery in /public/images/images-a/4x */
const homeImg = (file: string, alt: string) => ({
  src: `/images/images-a/4x/${encodeURIComponent(file)}`,
  alt,
});

export const images = {
  logo: {
    src: "/images/main_logo.svg",
    alt: "CARMA Med Spas",
    width: 677,
    height: 283,
  },

  /** Homepage sections — /public/images/images-a/4x */
  home: {
    howItWorks: {
      evaluation: homeImg(
        "Complete your online evaluation@4x.webp",
        "Complete your online evaluation",
      ),
      clinician: homeImg(
        "Meet your licensed clinician@4x.webp",
        "Meet your licensed clinician",
      ),
      medication: homeImg(
        "Get medication + ongoing support@4x.webp",
        "Get medication and ongoing support",
      ),
    },
    benefits: {
      biology: homeImg(
        "A plan shaped around your biology@4x.webp",
        "A plan shaped around your biology",
      ),
      support: homeImg(
        "Care that never leaves your side@4x.webp",
        "Care that never leaves your side",
      ),
      results: homeImg(
        "Built for results that hold@4x.webp",
        "Built for results that hold",
      ),
    },
    bento: {
      schedule: homeImg("Care on your schedule@4x.webp", "Care on your schedule"),
      lasting: homeImg("Built to last@4x.webp", "Built to last"),
    },
    testimonials: {
      story1: homeImg("Stories 2@4x.webp", "CARMA patient success story"),
      story2: homeImg("Stories 3@4x.webp", "CARMA patient success story"),
      story3: homeImg("Stories 4@4x.webp", "CARMA patient success story"),
      story4: homeImg(
        "Stories that speak for themselves1@4x.webp",
        "Stories that speak for themselves",
      ),
    },
  },

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
    graph: homeImg("graph (2).webp", "Weight progress chart"),
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
