/**
 * SHOWREELS
 * Paste a YouTube or Vimeo link into `url`. Empty sections are hidden
 * (or shown as a labelled placeholder while site.showPlaceholders is true).
 * The first entry is the main acting showreel and appears on the home page.
 */
export type Reel = {
  id: string;
  title: string;
  description?: string;
  url: string;
};

export const reels: Reel[] = [
  { id: "main", title: "Acting Showreel", description: "Selected screen and stage work.", url: "" },
  { id: "dramatic", title: "Dramatic Scenes", url: "" },
  { id: "comedy", title: "Comedy Scenes", url: "" },
  { id: "theatre", title: "Theatre Performance", url: "" },
  { id: "musical", title: "Musical Theatre / Vocal Performance", url: "" },
  { id: "presenting", title: "Presenting Clips", description: "Added when available.", url: "" },
];
