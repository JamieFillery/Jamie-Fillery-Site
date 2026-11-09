/**
 * The name on the home page. Three treatments, chosen in content/site.ts (nameStyle).
 * Both names always share the same weight, colour and size; no italics.
 */
export type NameVariant = "A" | "B" | "C";

export default function NameMark({ variant = "A" }: { variant?: NameVariant }) {
  if (variant === "B") {
    return (
      <h1 className="rise rise-2 mt-6 whitespace-nowrap font-serif text-[1.85rem] font-normal uppercase leading-none tracking-[0.12em] text-bone sm:text-5xl lg:text-[3.4rem] xl:text-[4.5rem]">
        Jamie Fillery
      </h1>
    );
  }
  if (variant === "C") {
    return (
      <h1 className="rise rise-2 mt-6 font-serif text-[3.75rem] font-light leading-[0.95] tracking-tight text-bone sm:text-8xl lg:text-[6rem] xl:text-[7.25rem]">
        <span className="block">Jamie</span>
        <span className="block">Fillery</span>
      </h1>
    );
  }
  return (
    <h1 className="rise rise-2 mt-6 whitespace-nowrap font-serif text-[2.7rem] font-light leading-none tracking-tight text-bone sm:text-7xl lg:text-[4.8rem] xl:text-[6.25rem]">
      Jamie Fillery
    </h1>
  );
}
