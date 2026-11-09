/**
 * THEATRE PRODUCTION PHOTOGRAPHS
 * Add production stills to /public/images/stage/ and list them here.
 * Only add images you have the right to publish, with photographer credit where required.
 */
export type StagePhoto = {
  id: string;
  src: string;
  alt: string;
  production: string;
  role?: string;
  credit?: string;
  width?: number;
  height?: number;
};

export const stagePhotos: StagePhoto[] = [
  // {
  //   id: "school-of-rock-1",
  //   src: "/images/stage/school-of-rock-1.jpg",
  //   alt: "Jamie Fillery as Dewey Finn in School of Rock",
  //   production: "School of Rock",
  //   role: "Dewey Finn",
  //   credit: "Photographer name",
  //   width: 1600,
  //   height: 1067,
  // },
];
