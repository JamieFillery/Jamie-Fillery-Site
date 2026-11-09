/**
 * WRITING & ORIGINAL PROJECTS
 * Add a new object to the list to add a project. Optional fields can be left out.
 * Never publish full unpublished screenplays here: loglines and synopses only.
 * `image` should be clearly labelled concept art, never a fake film poster.
 */
export type Project = {
  id: string;
  title: string;
  format: string; // "Short Film" | "Feature Screenplay" | "Television Series" ...
  genre: string;
  status: string; // e.g. "Screenplay in development"
  logline: string;
  image?: string; // e.g. "/images/projects/screen-13.jpg"
  imageAlt?: string;
  imageNote?: string; // e.g. "Concept image. Not official artwork."
  video?: string; // YouTube / Vimeo link, once something exists to show
};

export const projects: Project[] = [
  {
    id: "screen-13",
    title: "Screen 13",
    format: "Short Film",
    genre: "Psychological / Supernatural Horror",
    status: "Screenplay in development",
    logline:
      "A mysterious cinema screen appears to reveal horrifying events before they happen. When a man attempts to change what he has witnessed, he becomes entangled in increasingly terrifying consequences.",
  },
  {
    id: "the-other-side",
    title: "The Other Side",
    format: "Short Film",
    genre: "Supernatural Horror",
    status: "Screenplay in development",
    logline:
      "While clearing his late mother’s home, a man discovers that closing a bedroom door may open a passage to something far more sinister.",
  },
];

export const writingInterests: string[] = [
  "Psychological horror",
  "Supernatural thriller",
  "Character-driven drama",
  "Comedy-drama",
  "Grief, relationships and family",
  "Ordinary people in extraordinary circumstances",
];
