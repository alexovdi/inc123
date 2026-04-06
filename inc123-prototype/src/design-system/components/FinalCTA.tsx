import { Link as RouterLink } from "react-router-dom";

import { cn } from "@/design-system/utils/cn";
import { Button } from "@/design-system/primitives/Button";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";
import { GrainOverlay } from "@/design-system/components/GrainOverlay";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
interface FinalCTAProps {
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function FinalCTA({ className }: FinalCTAProps) {
  return (
    <section
      className={cn(
        "relative bg-primary py-section-y text-center overflow-hidden",
        className,
      )}
    >
      {/* Decorative orbs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "60vw",
          height: "60vw",
          top: "-30%",
          left: "-20%",
          background: "var(--gradient-orb-blue)",
          filter: "blur(160px)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "50vw",
          height: "50vw",
          bottom: "-30%",
          right: "-20%",
          background: "var(--gradient-orb-amber)",
          filter: "blur(160px)",
        }}
      />
      <GrainOverlay />

      <div className="relative z-10 mx-auto max-w-content px-container-x">
        <ScrollReveal>
          <h2 className="font-display type-display-lg font-medium text-white max-w-[24ch] mx-auto">
            Ready to Protect Your Privacy and Assets?
          </h2>
          <p className="mt-4 text-body-lg text-white/70 max-w-[42ch] mx-auto">
            Start with a package, or schedule a free consultation to discuss
            your specific needs.
          </p>
          <p className="mt-3 text-body text-white/70 font-medium">
            Protect your privacy before your next state filing
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap justify-center gap-3.5">
            <Button variant="cta" size="lg" asChild className="rounded-xl">
              <RouterLink to="/compare-packages">
                View Packages & Pricing →
              </RouterLink>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="rounded-xl border-white/30 text-white/80 hover:border-white/50 hover:text-white hover:bg-transparent"
            >
              <RouterLink to="/contact">Schedule a Consultation →</RouterLink>
            </Button>
          </div>

          <p className="mt-6 text-body text-white/60">
            Or call us directly —{" "}
            <a
              href="tel:+18005530615"
              className="text-white/65 underline underline-offset-[3px] decoration-white/30 hover:text-white hover:decoration-white transition-all"
            >
              1-800-553-0615
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

FinalCTA.displayName = "FinalCTA";

export { FinalCTA };
