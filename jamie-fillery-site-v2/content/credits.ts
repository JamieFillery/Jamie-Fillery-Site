/**
 * ACTING CREDITS
 *
 * Add, edit or remove entries below. Only fields with a value are displayed.
 * Categories: "Film" | "Television" | "Theatre" | "Musical Theatre" | "Other Performance"
 *
 *  - featured: true  → appears in “Selected Credits” on the home page
 *  - hidden: true    → kept in this file but not shown publicly (use while verifying)
 */
export type Category = "Film" | "Television" | "Theatre" | "Musical Theatre" | "Other Performance";

export type Credit = {
  id: string;
  category: Category;
  title: string;
  role?: string;
  company?: string;
  director?: string;
  venue?: string;
  year?: string;
  note?: string;
  featured?: boolean;
  hidden?: boolean;
};

export const categories: Category[] = ["Film", "Television", "Theatre", "Musical Theatre", "Other Performance"];

export const credits: Credit[] = [
  {
    id: "thorne-sleepyhead",
    category: "Television",
    title: "Thorne: Sleepyhead",
    year: "2010",
    // role: "",       // ← add once verified
    // company: "",
    // director: "",
    featured: true,
  },
  {
    id: "school-of-rock",
    category: "Musical Theatre",
    title: "School of Rock",
    role: "Dewey Finn",
    note: "NODA Award · Best Lead Actor in a Musical · 2024",
    featured: true,
  },
  {
    id: "sweeney-todd",
    category: "Musical Theatre",
    title: "Sweeney Todd",
    role: "Sweeney Todd",
    featured: true,
  },
  {
    id: "shrek-shrek",
    category: "Musical Theatre",
    title: "Shrek the Musical",
    role: "Shrek",
    featured: true,
  },
  {
    id: "shrek-farquaad",
    category: "Musical Theatre",
    title: "Shrek the Musical",
    role: "Lord Farquaad",
  },
  {
    id: "into-the-woods",
    category: "Musical Theatre",
    title: "Into the Woods",
    role: "The Baker",
    featured: true,
  },
  {
    id: "oklahoma",
    category: "Musical Theatre",
    title: "Oklahoma!",
    role: "Judd Fry",
  },
  {
    id: "burnt-part-boys",
    category: "Musical Theatre",
    title: "The Burnt Part Boys",
    // role: "",       // ← add once verified
  },
  {
    id: "musical-of-the-year",
    category: "Musical Theatre",
    title: "Musical of the Year",
    hidden: true, // Hidden until you confirm what this entry should say
  },
];
