import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/utils/cn";
import {
  pillarSoftBgMap,
  pillarTextMap,
} from "@/design-system/utils/pillarMaps";
import { Button } from "@/design-system/primitives/Button";
import type { PillarName } from "@/design-system/tokens";

/* -------------------------------------------------- */
/*  CVA variants                                       */
/* -------------------------------------------------- */
const ctaBlockVariants = cva("rounded-card py-section-y-sm px-container-x", {
  variants: {
    variant: {
      default: "bg-primary-50 text-foreground",
      dark: "bg-primary text-white",
      pillar: "text-foreground", // bg applied via pillarSoftBgMap at call site
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

const containerVariants = cva("mx-auto max-w-content", {
  variants: {
    layout: {
      centered: "flex flex-col items-center",
      split:
        "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12",
    },
  },
  defaultVariants: { layout: "centered" },
});

const textBlockVariants = cva("", {
  variants: {
    layout: {
      centered: "max-w-narrow",
      split: "flex-1",
    },
  },
  defaultVariants: { layout: "centered" },
});

const headingVariants = cva("font-display font-bold text-display", {
  variants: {
    tone: {
      default: "text-foreground",
      dark: "text-white",
      pillar: "", // pillar text color applied via pillarTextMap at call site
    },
  },
  defaultVariants: { tone: "default" },
});

const descriptionVariants = cva("mt-3 text-body-lg", {
  variants: {
    tone: {
      default: "text-muted",
      dark: "text-white/80",
      pillar: "text-muted",
    },
  },
  defaultVariants: { tone: "default" },
});

const trustSignalVariants = cva("text-body-sm font-medium", {
  variants: {
    tone: {
      default: "text-muted",
      dark: "text-white/80",
      pillar: "text-muted",
    },
  },
  defaultVariants: { tone: "default" },
});

const buttonGroupVariants = cva("flex gap-3", {
  variants: {
    layout: {
      centered: "flex-col sm:flex-row justify-center mt-6",
      split: "flex-col sm:flex-row lg:flex-col lg:shrink-0 mt-6 lg:mt-0",
    },
  },
  defaultVariants: { layout: "centered" },
});

/** Override applied to cta Button when variant="dark" — flips white-on-dark. */
const primaryButtonDarkOverride =
  "bg-white text-foreground hover:bg-white/90 active:bg-white/80";

/** Override applied to secondary Button when variant="dark". */
const secondaryButtonDarkOverride =
  "border-white/60 text-white bg-white/10 hover:bg-white/20";

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

type CTATone = "default" | "dark" | "pillar";
type CTALayout = "centered" | "split";

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
  const tone: CTATone = (variant ?? "default") as CTATone;
  const resolvedLayout: CTALayout = (layout ?? "centered") as CTALayout;
  const isDark = tone === "dark";
  const isPillar = tone === "pillar";
  const isSplit = resolvedLayout === "split";
  const isCentered = resolvedLayout === "centered";

  return (
    <section
      className={cn(
        ctaBlockVariants({ variant: tone, layout: resolvedLayout }),
        isPillar && pillar && pillarSoftBgMap[pillar],
        className,
      )}
    >
      <div className={containerVariants({ layout: resolvedLayout })}>
        {/* Text block */}
        <div className={textBlockVariants({ layout: resolvedLayout })}>
          <h2
            className={cn(
              headingVariants({ tone }),
              isPillar && pillar && pillarTextMap[pillar],
            )}
          >
            {heading}
          </h2>
          <p className={descriptionVariants({ tone })}>{description}</p>

          {/* Trust signal — shown below text on centered, or inline on split */}
          {trustSignal && isCentered && (
            <p className={cn("mt-4", trustSignalVariants({ tone }))}>
              {trustSignal}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className={buttonGroupVariants({ layout: resolvedLayout })}>
          <Button
            variant="cta"
            size="lg"
            className={cn(isDark && primaryButtonDarkOverride)}
            asChild
          >
            <a href={primaryCTA.href}>{primaryCTA.label}</a>
          </Button>

          {secondaryCTA && (
            <Button
              variant="secondary"
              size="lg"
              className={cn(isDark && secondaryButtonDarkOverride)}
              asChild
            >
              <a href={secondaryCTA.href}>{secondaryCTA.label}</a>
            </Button>
          )}
        </div>

        {/* Trust signal — shown below buttons on split layout */}
        {trustSignal && isSplit && (
          <p className={cn("lg:hidden mt-4", trustSignalVariants({ tone }))}>
            {trustSignal}
          </p>
        )}
      </div>
    </section>
  );
}

CTABlock.displayName = "CTABlock";

export { CTABlock, ctaBlockVariants };
