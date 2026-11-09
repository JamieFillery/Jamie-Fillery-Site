# Jamie Fillery: Actor Portfolio Website

Next.js 14 · React 18 · Tailwind CSS · TypeScript. Static, fast, accessible and ready for Vercel.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build check
```

Requires Node.js 18.18 or newer.

## Where everything is edited

All the words, links and media live in the `content/` folder. You never need to touch the page code.

| File | What it controls |
| --- | --- |
| `content/site.ts` | Email, Spotlight, IMDb, social links, representation, hero image, **`showPlaceholders`** switch |
| `content/bio.ts` | Short intro, full biography, optional longer bio, CV PDF path |
| `content/credits.ts` | Every acting credit (filters, home page “Selected credits”) |
| `content/headshots.ts` | Headshot gallery (groups, files, sizes) |
| `content/showreels.ts` | YouTube / Vimeo links for each reel section |
| `content/stage-photos.ts` | Theatre production photographs |
| `content/skills.ts` | Performance & Skills page |
| `content/projects.ts` | Writing projects (cards) and writing interests |

**Empty means hidden.** Any field left as `""` is not displayed on the live site.

### Common updates

- **Add a credit:** copy an entry in `credits.ts`, change the fields. Add `featured: true` to show it on the home page, or `hidden: true` to keep it private while you verify it.
- **Add headshots:** put files in `public/images/headshots/`, then set `src: "/images/headshots/primary.jpg"` (and `width`/`height`) in `headshots.ts`. The first “Primary” image is also used as the home page portrait unless you set `hero.image` in `site.ts`.
- **Add the showreel:** paste the YouTube or Vimeo link into `url` in `showreels.ts`. Videos load only when a visitor presses play.
- **Add your CV:** save the PDF as `public/jamie-fillery-cv.pdf` and set `cvUrl: "/jamie-fillery-cv.pdf"` in `bio.ts`. The download buttons appear automatically.
- **Add a writing project:** copy an entry in `projects.ts`. Use loglines only; never post unpublished screenplays. Mark concept images clearly (`imageNote`).
- **Go public:** set `showPlaceholders: false` in `site.ts` so visitors never see “to be added” notices.

### Image guidance

Export headshots at about 2000px on the long edge (JPEG, quality 80–85, ideally under 600KB). Next.js automatically serves smaller AVIF/WebP versions to each device. Only upload photos you have the right to publish, with photographer credit where required.

### Video guidance

Never put video files in the project. Upload to YouTube (set to *Unlisted* if you prefer) or Vimeo and paste the link.

---

## Deploy (free to start)

1. **Put the code on GitHub.** Create a free account, create a new private repository, and upload this folder (or use GitHub Desktop). Do not upload `node_modules` or `.next` (the included `.gitignore` handles this).
2. **Create a Vercel account** at vercel.com (sign in with GitHub) and choose **Add New → Project → import your repository**. Accept the defaults (Framework: Next.js) and press **Deploy**. You will get a `*.vercel.app` preview link within a couple of minutes.
3. **Every future change redeploys automatically** when you save an edit to the repository (see “Updating” below).

*Cost note:* Vercel’s free Hobby plan is normally enough for a portfolio like this, but its terms are aimed at personal, non-commercial use. Check Vercel’s current terms and pricing to be sure a professional actor site qualifies. If not, Netlify and Cloudflare Pages both host Next.js sites with free tiers and the same Git-based workflow.

## Domain: jamiefillery.com

**Availability: not verified.** I do not have access to a domain registry lookup, so I cannot tell you whether `jamiefillery.com` is free. Check it directly at a registrar (for example Cloudflare Registrar, Namecheap, Porkbun, or Google Domains' successor, Squarespace Domains). If the `.com` is taken, `.co.uk` or `.uk` are good alternatives for a UK actor (`jamiefillery.co.uk`).

**Registering:** search the name at a registrar, buy for a year (prices vary by registrar and extension; expect roughly £10–£20 a year, but confirm at checkout, including the renewal price), and enable auto-renew and domain privacy (WHOIS privacy is usually free and keeps your home address off public records).

**Connecting to Vercel:**
1. In Vercel: **Project → Settings → Domains → Add** `jamiefillery.com` (also add `www.jamiefillery.com`).
2. Vercel shows the DNS records to create. Typically an **A record** for `@` pointing to the IP Vercel gives you, and a **CNAME** for `www` pointing to `cname.vercel-dns.com`. Use the exact values Vercel displays.
3. Add them in your registrar’s DNS settings. Propagation can take from minutes to a few hours; Vercel issues the HTTPS certificate automatically.
4. Update `url` in `content/site.ts` to your final address so the sitemap and social sharing are correct.

## Updating the site without a developer

The simplest route: open your repository on **github.com**, navigate to a file in `content/`, press the pencil (✏️) icon, edit the text, and **Commit changes**. Vercel rebuilds and publishes in about a minute. For photos, use **Add file → Upload files** into `public/images/...` on GitHub.

### Do you need a visual CMS?

Probably not yet. The file-based setup is free, has nothing to maintain, and covers your needs. If editing files starts to feel awkward later, options are:

- **Decap CMS** (open source, free): a form-style editor that commits changes to the same files. Requires one-off set-up.
- **Sanity or Tina** (hosted, free tiers available): friendlier editors and image handling, but add an account, a schema to maintain and potential paid tiers as usage grows.

I recommend staying with the content files until you genuinely need more. Ask before adding any paid service.

## Maintenance

- Keep the site healthy a couple of times a year: `npm outdated`, then update Next.js within 14.x (security patches). Vercel will also warn about deprecated versions.
- Re-check your links (Spotlight, IMDb, YouTube) after any profile changes.
- Renew the domain annually (auto-renew recommended).

## Before publishing: what you need to supply

**Essential**
- [ ] Primary casting headshot, plus other headshot groups (warm, dramatic, characterful, portraits), with photographer credit if required
- [ ] Professional email address (ideally on your own domain, e.g. `hello@jamiefillery.com`)
- [ ] Spotlight profile URL
- [ ] Acting showreel (YouTube/Vimeo link)
- [ ] Acting CV as a PDF

**Credits to verify (shown only with the details you confirm)**
- [ ] *Thorne: Sleepyhead* (2010): role, production company, director (currently shown as a Television credit; change the category if that is wrong)
- [ ] Roles, years, venues, directors and companies for each stage credit
- [ ] *The Burnt Part Boys*: role
- [ ] *Musical of the Year*: confirm what this entry is (currently hidden)
- [ ] Which productions go with **WWOS, Artform, Bromley Players, BMTC** (hidden until published; set `associations.published`)
- [ ] NODA 2024 award (Best Lead Actor in a Musical, School of Rock): confirm the exact title, year and region/district wording, and whether you can supply the certificate or a link

**Optional**
- [ ] IMDb URL and social links
- [ ] Production photographs (with permission/credit)
- [ ] Additional reels: dramatic scenes, comedy, theatre, musical/vocal, presenting
- [ ] Verified skills (accents, vocal range, instruments, dance, training): add to `content/skills.ts` only once confirmed
- [ ] Representation details, only once confirmed (`representation.published: true`)
- [ ] Social sharing image: add `public/og.jpg` (1200×630) and uncomment the `images` line in `app/layout.tsx`
- [ ] Concept artwork for Screen 13 / The Other Side (clearly labelled as concept)
- [ ] Final read-through of `content/bio.ts`, especially the wording around your return to professional work

## Content rules built into the site

- No invented credits, awards, endorsements, qualifications or abilities.
- The NODA item is shown as an **award win** (Best Lead Actor in a Musical, 2024), as you confirmed. Check the wording against your certificate.
- Writing projects are labelled **in development**; no screenplays are published.
- Presenting appears only as an *area of interest*.
- Representation and associations stay unpublished until you confirm them.
- No home address or private phone number fields exist.

## Project structure

```
app/            Pages (home, about, headshots, showreel, credits, performance, writing, contact), layout, sitemap, robots
components/     Reusable UI (header, gallery with full-screen viewer, video embed, credits filter, project cards)
content/        ← the files you edit
lib/video.ts    YouTube / Vimeo URL handling
public/images/  Your photographs
```
