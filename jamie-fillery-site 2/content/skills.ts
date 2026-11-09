/**
 * PERFORMANCE & SKILLS
 * `demonstrated`  → areas backed by credits or experience
 * `developing`    → areas of interest, clearly labelled as such
 * `pending`       → optional placeholders shown only while site.showPlaceholders is true
 *
 * Only add specifics (accents, vocal range, instruments, dance, training) once confirmed.
 */
export type Skill = { id: string; title: string; text: string };

export const demonstrated: Skill[] = [
  {
    id: "screen",
    title: "Screen performance",
    text: "Screen credit in Thorne: Sleepyhead (2010), and a renewed, focused commitment to film and television.",
  },
  {
    id: "dramatic",
    title: "Theatre",
    text: "Dramatic and character-led stage work, including the title role in Sweeney Todd.",
  },
  {
    id: "musical",
    title: "Musical theatre",
    text: "Trained in Musical Theatre at the Arden School of Theatre. Leading roles include Dewey Finn, the Baker, Shrek and Lord Farquaad.",
  },
  {
    id: "comedy",
    title: "Comedy performance",
    text: "Comic leads and character roles, including Shrek and Lord Farquaad in Shrek the Musical.",
  },
  {
    id: "character",
    title: "Character acting",
    text: "A broad range of roles, from Judd Fry in Oklahoma! to the Baker in Into the Woods.",
  },
  {
    id: "singing",
    title: "Singing & musical performance",
    text: "Sung leading roles across musical theatre. Recordings to follow.",
  },
  {
    id: "writing",
    title: "Original writing",
    text: "Develops original screenplays and short films. Projects are currently in development.",
  },
];

export const developing: Skill[] = [
  {
    id: "presenting",
    title: "Presenting",
    text: "An area of interest Jamie is looking to pursue. No presenting credits to date.",
  },
];

export const pending: string[] = [
  "Voice reel",
  "Vocal recordings / singing reel",
  "Accents",
  "Additional training",
  "Specialist skills",
];
