import { Link as RouterLink } from "react-router-dom";
import { Clock } from "lucide-react";
import { cn } from "@/design-system/utils/cn";
import { pillarTextMap } from "@/design-system/utils/pillarMaps";
import { Badge } from "@/design-system/primitives/Badge";
import { Button } from "@/design-system/primitives/Button";
import { Icon } from "@/design-system/primitives/Icon";
import { Link } from "@/design-system/primitives/Link";
import { GrainOverlay } from "@/design-system/components/GrainOverlay";
import type { PillarName } from "@/design-system/tokens";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface ClusterHeroProps {
  /** Which pillar this cluster belongs to */
  pillar: PillarName;
  /** Display name of the pillar (e.g., "Business Privacy") */
  pillarLabel: string;
  /** Link back to the parent pillar page */
  pillarHref: string;
  /** H1 page title */
  title: string;
  /** Descriptive paragraph below the title */
  description: string;
  /** Estimated reading time (e.g., "8 min read") */
  readingTime: string;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Pillar glow colors for the decorative orb
   ------------------------------------------------ */
const pillarGlowMap: Record<PillarName, string> = {
  privacy: "bg-secondary/[0.18]",
  asset: "bg-pillar-asset/[0.18]",
  formation: "bg-pillar-formation/[0.18]",
  compliance: "bg-pillar-compliance/[0.18]",
};

/* ------------------------------------------------
   Pillar-colored bottom accent stripe — differentiates
   each pillar's cluster hero visually at a glance.
   ------------------------------------------------ */
const pillarBorderBottomMap: Record<PillarName, string> = {
  privacy: "border-b-pillar-privacy",
  asset: "border-b-pillar-asset",
  formation: "border-b-pillar-formation",
  compliance: "border-b-pillar-compliance",
};

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function ClusterHero({
  pillar,
  pillarLabel,
  pillarHref,
  title,
  description,
  readingTime,
  className,
}: ClusterHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-primary border-b-4",
        pillarBorderBottomMap[pillar],
        className,
      )}
    >
      <GrainOverlay opacity="opacity-[0.03]" />

      {/* Decorative glows — pillar-tinted, two orbs for depth */}
      <div
        className={cn(
          "pointer-events-none absolute -left-40 -top-40 h-[60vw] w-[60vw] rounded-full blur-[120px]",
          pillarGlowMap[pillar],
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute -right-40 bottom-[-20vw] h-[45vw] w-[45vw] rounded-full blur-[140px]",
          pillarGlowMap[pillar],
        )}
      />

      <div className="relative mx-auto max-w-content px-container-x py-section-y-sm">
        {/* Breadcrumb */}
        <nav className="mb-8 text-body-sm">
          <Link
            href="/"
            className="!text-white/80 !no-underline hover:!text-white transition-colors"
          >
            Home
          </Link>
          <span className="mx-2 text-white/50">/</span>
          <RouterLink
            to={pillarHref}
            className="text-white/80 no-underline hover:text-white transition-colors"
          >
            {pillarLabel}
          </RouterLink>
          <span className="mx-2 text-white/50">/</span>
          <span className="text-white/90" aria-current="page">
            {title}
          </span>
        </nav>

        <div className="max-w-[720px]">
          {/* Pillar eyebrow */}
          <p
            className={cn(
              "text-body-sm font-semibold uppercase tracking-[0.15em] mb-4",
              pillarTextMap[pillar],
            )}
          >
            {pillarLabel} &middot; Guide
          </p>

          {/* H1 Title */}
          <h1 className="font-display type-display-lg font-bold text-white">
            {title}
          </h1>

          {/* Description */}
          <p className="mt-4 text-body-lg text-white/80 max-w-[540px]">
            {description}
          </p>

          {/* Meta badges */}
          <div className="mt-5 flex items-center gap-3">
            <Badge
              variant="default"
              size="sm"
              className="bg-white/[0.08] text-white/90 border-white/[0.12]"
            >
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {readingTime}
              </span>
            </Badge>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#packages">
              <Button variant="cta" size="lg">
                Find Your Package
                <Icon
                  name="ArrowRight"
                  size="sm"
                  className="ml-2 hidden sm:inline-block"
                />
              </Button>
            </a>
            <a href="#content">
              <Button
                variant="secondary"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Read Guide
                <Icon
                  name="ArrowDown"
                  size="sm"
                  className="ml-2 hidden sm:inline-block"
                />
              </Button>
            </a>
          </div>

          {/* Phone line */}
          <p className="mt-5 text-body-sm text-white/70">
            Prefer to talk?{" "}
            <a
              href="tel:1-800-553-0615"
              className="text-white/85 underline underline-offset-4 decoration-white/40 hover:text-white transition-colors"
            >
              Call 1-800-553-0615
            </a>
            {" · "}
            <Link
              href="/contact"
              className="text-white/85 underline underline-offset-4 decoration-white/40 hover:text-white transition-colors"
            >
              Schedule a consultation
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

ClusterHero.displayName = "ClusterHero";

export { ClusterHero };
