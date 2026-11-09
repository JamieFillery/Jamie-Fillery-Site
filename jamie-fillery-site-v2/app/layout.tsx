import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickLink from "@/components/QuickLink";
import { site } from "@/content/site";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Jamie Fillery | Actor · Singer · Writer",
    template: "%s | Jamie Fillery",
  },
  description: site.description,
  keywords: ["Jamie Fillery", "actor", "London actor", "musical theatre", "film and television actor", "Arden School of Theatre"],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: "Jamie Fillery",
    title: "Jamie Fillery | Actor · Singer · Writer",
    description: site.description,
    // Add /public/og.jpg (1200×630) and uncomment:
    // images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Jamie Fillery" }],
  },
  twitter: { card: "summary_large_image", title: "Jamie Fillery | Actor", description: site.description },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const sameAs = Object.values(site.links).filter(Boolean);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: "Actor",
    url: site.url,
    alumniOf: "Arden School of Theatre",
    address: { "@type": "PostalAddress", addressRegion: "London & South East England", addressCountry: "GB" },
    ...(sameAs.length ? { sameAs } : {}),
  };

  return (
    <html lang="en-GB" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <QuickLink />
      </body>
    </html>
  );
}
