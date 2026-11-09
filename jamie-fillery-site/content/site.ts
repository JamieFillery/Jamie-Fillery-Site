/**
 * SITE-WIDE SETTINGS
 * Edit this file to change contact details, external links and representation.
 * Anything left as an empty string ("") is simply not shown on the live site.
 */
export const site = {
  name: "Jamie Fillery",
  url: "https://jamiefillery.com", // update once your domain is connected
  tagline: "Actor · Performer · Creative",
  disciplines: ["Film", "Television", "Theatre", "Musical Theatre", "Writing"],
  location: "London & South East England",
  description:
    "Jamie Fillery is a British actor and performer trained at the Arden School of Theatre, Manchester, with experience across screen, dramatic theatre and musical theatre.",

  /**
   * While true, empty sections show a clearly labelled placeholder (useful in preview).
   * Set to false before you publish so visitors never see "to be added" notices.
   */
  showPlaceholders: true,

  /** Main hero portrait. Put the file in /public/images and reference it, e.g. "/images/hero.jpg" */
  hero: { image: "", alt: "Jamie Fillery, actor" },

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
