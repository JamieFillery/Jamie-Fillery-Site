/**
 * SITE-WIDE SETTINGS
 * Edit this file to change contact details, external links and representation.
 * Anything left as an empty string ("") is simply not shown on the live site.
 */
export const site = {
  name: "Jamie Fillery",
  url: "https://jamiefillery.com", // update once your domain is connected
  tagline: "Actor · Singer · Writer",
  disciplines: ["Film", "Television", "Theatre", "Musical Theatre"],
  location: "London & South East England",
  description:
    "Jamie Fillery is a British actor trained at the Arden School of Theatre, with experience spanning screen, theatre and musical theatre.",

  /**
   * How your name appears on the home page. Choose one:
   *   "A" → Jamie Fillery   (one line, upright serif)
   *   "B" → JAMIE FILLERY   (one line, uppercase editorial)
   *   "C" → Jamie / Fillery (two lines, upright serif)
   */
  nameStyle: "B" as "A" | "B" | "C",

  /**
   * While true, empty sections show a clearly labelled placeholder (useful in preview).
   * Set to false before you publish so visitors never see "to be added" notices.
   */
  showPlaceholders: true,

  /** Main hero portrait. Put the file in /public/images and reference it, e.g. "/images/hero.jpg" */
  hero: {
    image: "",
    alt: "Jamie Fillery, actor",
    /** Which part of the photo stays in view when cropped, as "x% y%". Raise y to show more of the lower image. */
    focus: "50% 20%",
  },

  /** External profiles. Leave blank to hide. */
  links: {
    spotlight: "", // e.g. https://www.spotlight.com/...
    imdb: "",
    instagram: "",
    x: "",
    linkedin: "",
    youtube: "",
  },

  /** Professional contact. Never add a home address or private phone number. */
  contact: {
    email: "",
  },

  /** Representation is under review: keep published: false until confirmed. */
  representation: {
    published: false,
    agency: "",
    agent: "",
    email: "",
    phone: "",
    website: "",
  },

  /** Production associations (pending verification). Not displayed until published is true. */
  associations: {
    published: false,
    items: ["WWOS", "Artform", "Bromley Players", "BMTC"],
  },
};
