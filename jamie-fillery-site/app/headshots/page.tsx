import type { Metadata } from "next";
import HeadshotGallery from "@/components/HeadshotGallery";

export const metadata: Metadata = {
  title: "Headshots",
  description: "Professional headshots and portraits of actor Jamie Fillery.",
  alternates: { canonical: "/headshots" },
};

export default function HeadshotsPage() {
  return (
    <div className="container-x py-16 sm:py-24">
      <p className="eyebrow">Gallery</p>
      <h1 className="h-display mt-4 text-5xl sm:text-7xl">Headshots</h1>
      <p className="mt-6 max-w-xl text-mist">Select any image to view it full screen.</p>
      <div className="mt-14">
        <HeadshotGallery />
      </div>
    </div>
  );
}
