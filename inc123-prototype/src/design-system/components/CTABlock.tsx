import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/utils/cn";
import {
  pillarSoftBgMap,
  pillarTextMap,
} from "@/design-system/utils/pillarMaps";
import { Button } from "@/design-system/primitives";
import type { PillarName } from "@/design-system/tokens";

/* -------------------------------------------------- */
/*  CVA variants                                       */
/* -------------------------------------------------- */
const ctaBlockVariants = cva("rounded-card py-section-y-sm px-container-x", {
  variants: {
    variant: {
      default: "bg-primary-50 text-foreground",
      dark: "bg-primary text-white",
      pillar: "", // Applied dynamically via pillarBgMap
    },
    layout: {
      centered: "text-center",
      split: "",
    },
  },
  defaultVariants: {
    variant: "default",
    layout: "centered",
  },
});

/* -------------------------------------------------- */
/*  Props                                              */
/* -------------------------------------------------- */
export interface CTABlockAction {
  label: string;
  href: string;
}

export interface CTABlockProps extends VariantProps<typeof ctaBlockVariants> {
  /** Pillar color — used when variant is "pillar" */
  pillar?: PillarName;
  /** Section heading */
  heading: string;
  /** Supporting description */
  description: string;
  /** Primary call-to-action */
  primaryCTA: CTABlockAction;
  /** Optional secondary call-to-action */
  secondaryCTA?: CTABlockAction;
  /** Optional trust signal text (e.g. "25+ Years of Experience") */
  trustSignal?: string;
  className?: string;
}

/* -------------------------------------------------- */
/*  Component                                          */
/* -------------------------------------------------- */
function CTABlock({
  variant,
  layout,
  pillar,
  heading,
  description,
  primaryCTA,
  secondaryCTA,
  trustSignal,
  className,
}: CTABlockProps) {
  const isDark = variant === "dark";
  const isPillar = variant === "pillar";
  const isSplit = layout === "split";
  const isCentered = layout === "centered" || !layout;

  return (
    <section
      className={cn(
        ctaBlockVariants({ variant: isPillar ? "default" : variant, layout }),
        isPillar && pillar && pillarSoftBgMap[pillar],
        isPillar && "text-foreground",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-content",
          isSplit
            ? "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12"
            : "flex flex-col items-center",
        )}
      >
        {/* Text block */}
        <div className={cn(isSplit ? "flex-1" : "max-w-narrow")}>
          <h2
            className={cn(
              "font-display font-bold text-display",
              isDark && "text-white",
              isPillar && pillar && pillarTextMap[pillar],
              !isDark && !isPillar && "text-foreground",
            )}
          >
            {heading}
          </h2>
          <p
            className={cn(
              "mt-3 text-body-lg",
              isDark ? "text-white/80" : "text-muted",
            )}
          >
            {description}
          </p>

          {/* Trust signal — shown below text on centered, or inline on split */}
          {trustSignal && isCentered && (
            <p
              className={cn(
                "mt-4 text-body-sm font-medium",
                isDark ? "text-white/80" : "text-muted",
              )}
            >
              {trustSignal}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div
          className={cn(
            "flex gap-3",
            isCentered
              ? "flex-col sm:flex-row justify-center mt-6"
              : "flex-col sm:flex-row lg:flex-col lg:shrink-0 mt-6 lg:mt-0",
          )}
        >
          <Button
            variant="cta"
            size="lg"
            className={cn(
              isDark &&
                "bg-white text-foreground hover:bg-white/90 active:bg-white/80",
            )}
            asChild
          >
            <a href={primaryCTA.href}>{primaryCTA.label}</a>
          </Button>

          {secondaryCTA && (
            <Button
              variant={isDark ? "secondary" : "secondary"}
              size="lg"
              className={cn(
                isDark &&
                  "border-white/60 text-white bg-white/10 hover:bg-white/20",
              )}
              asChild
            >
              <a href={secondaryCTA.href}>{secondaryCTA.label}</a>
            </Button>
          )}
        </div>

        {/* Trust signal — shown below buttons on split layout */}
        {trustSignal && isSplit && (
          <p
            className={cn(
              "text-body-sm font-medium lg:hidden mt-4",
              isDark ? "text-white/80" : "text-muted",
            )}
          >
            {trustSignal}
          </p>
        )}
      </div>
    </section>
  );
}

CTABlock.displayName = "CTABlock";

export { CTABlock, ctaBlockVariants };
