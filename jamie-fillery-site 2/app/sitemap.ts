import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "about", "headshots", "showreel", "credits", "performance", "writing", "contact"];
  return pages.map((p) => ({
    url: p ? `${site.url}/${p}` : site.url,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
