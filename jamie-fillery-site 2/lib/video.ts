/** Turns a YouTube or Vimeo link into a privacy-friendly embed URL. Returns null if unsupported. */
export function toEmbedUrl(url: string): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = u.pathname.slice(1);
      return id ? `https://www.youtube-nocookie.com/embed/${id}?rel=0` : null;
    }
    if (host === "youtube.com" || host === "m.youtube.com") {
      if (u.pathname.startsWith("/embed/")) return `https://www.youtube-nocookie.com${u.pathname}?rel=0`;
      const id = u.searchParams.get("v");
      return id ? `https://www.youtube-nocookie.com/embed/${id}?rel=0` : null;
    }
    if (host === "vimeo.com" || host === "player.vimeo.com") {
      const id = u.pathname.split("/").filter(Boolean).find((p) => /^\d+$/.test(p));
      return id ? `https://player.vimeo.com/video/${id}?dnt=1` : null;
    }
  } catch {
    return null;
  }
  return null;
}
