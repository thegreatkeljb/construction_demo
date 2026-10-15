import InfiniteCarousel from "./InfiniteCarousel";

/**
 * LogoStrip: a "Trusted by" band. A label on the left, and a logo carousel on the right
 * that scrolls forever and fades out at both ends, with a thin border above and below.
 *
 * Usage:
 *   import PFBOA from "../assets/clients/pfboa.svg";
 *   import ACME from "../assets/clients/acme.svg";
 *
 *   <LogoStrip
 *     label="Trusted by leading companies"
 *     logos={[
 *       { src: PFBOA, alt: "PFBOA" },
 *       { src: ACME, alt: "Acme" },
 *       "Plain text works too",
 *     ]}
 *   />
 *
 * Tip: use SVG or transparent PNG logos, all roughly the same visual height.
 */
export default function LogoStrip({
  label = "Trusted by leading companies",
  logos = [],
  speed = 42,
  gap = 80,
  className = "",
}) {
  return (
    <section className={`border-y border-black/10 ${className} bg-white`}>
      <span className="block text-center pt-8 shrink-0 text-black/60 sm:hidden">{label}</span>
      <div className="mx-auto flex w-full max-w-360 items-center gap-8 px-4 py-8 lg:gap-16">
        <span className="hidden shrink-0 text-black/60 sm:block">{label}</span>

        <InfiniteCarousel speed={speed} gap={gap} className="min-w-0 flex-1">
          {logos.map((logo, i) =>
            typeof logo === "string" ? (
              <span
                key={i}
                className="whitespace-nowrap text-xl font-semibold text-black/50"
              >
                {logo}
              </span>
            ) : (
              <img
                key={logo.alt ?? i}
                src={logo.src}
                alt={logo.alt ?? ""}
                className="h-12 w-auto transition grayscale-100 duration-300 hover:opacity-100 hover:grayscale-0"
              />
            )
          )}
        </InfiniteCarousel>
      </div>
    </section>
  );
}