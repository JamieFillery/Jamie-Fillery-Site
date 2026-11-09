import type { Metadata } from "next";
import CreditsList from "@/components/CreditsList";
import { bio } from "@/content/bio";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Credits & CV",
  description: "Acting credits and CV for Jamie Fillery: screen, theatre and musical theatre.",
  alternates: { canonical: "/credits" },
};

export default function CreditsPage() {
  return (
    <div className="container-x py-16 sm:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Acting CV</p>
          <h1 className="h-display mt-4 text-5xl sm:text-7xl">Credits</h1>
          <p className="mt-6 max-w-xl text-mist">
            Trained in Musical Theatre at the Arden School of Theatre, Manchester.
          </p>
        </div>
        {bio.cvUrl ? (
          <a href={bio.cvUrl} download className="btn-solid">
            Download CV (PDF)
          </a>
        ) : site.showPlaceholders ? (
          <span className="btn border-dashed border-bone/25 text-ash">CV download to be added</span>
        ) : null}
      </div>
      <div className="mt-14">
        <CreditsList />
      </div>
    </div>
  );
}
