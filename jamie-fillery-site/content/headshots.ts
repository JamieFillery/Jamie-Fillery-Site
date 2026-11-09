/**
 * HEADSHOTS
 * 1. Drop your image files into /public/images/headshots/
 * 2. Set `src` to e.g. "/images/headshots/primary.jpg"
 * 3. Set `width` and `height` to the file's pixel size (keeps layout stable)
 *
 * Entries with an empty `src` show a labelled placeholder.
 * Groups: "Primary" | "Warm" | "Dramatic" | "Characterful" | "Portrait"
 */
export type Headshot = {
  id: string;
  group: "Primary" | "Warm" | "Dramatic" | "Characterful" | "Portrait";
  src: string;
  alt: string;
  width?: number;
  height?: number;
  credit?: string; // photographer credit, if wanted
};

export const headshots: Headshot[] = [
  { id: "primary", group: "Primary", src: "", alt: "Jamie Fillery, primary casting headshot", width: 1600, height: 2000 },
  { id: "warm-1", group: "Warm", src: "", alt: "Jamie Fillery, warm and approachable headshot", width: 1600, height: 2000 },
  { id: "dramatic-1", group: "Dramatic", src: "", alt: "Jamie Fillery, serious dramatic headshot", width: 1600, height: 2000 },
  { id: "character-1", group: "Characterful", src: "", alt: "Jamie Fillery, characterful headshot", width: 1600, height: 2000 },
  { id: "portrait-1", group: "Portrait", src: "", alt: "Jamie Fillery, additional professional portrait", width: 1600, height: 2000 },
];

export const groupLabels: Record<Headshot["group"], string> = {
  Primary: "Primary casting headshot",
  Warm: "Warm & approachable",
  Dramatic: "Serious & dramatic",
  Characterful: "Characterful",
  Portrait: "Additional portraits",
};
