import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/utils/cn";
import {
  pillarSoftBgMap,
  pillarBorderTopMap,
  pillarTextMap,
} from "@/design-system/utils/pillarMaps";
import { Icon } from "@/design-system/primitives/Icon";
import { Link } from "@/design-system/primitives/Link";
import type { PillarName } from "@/design-system/tokens";

/* ------------------------------------------------
   CVA Variants — one per slot, all keyed by `variant`
   so the container prop drives typography across heading,
   description, and link simultaneously.
   ------------------------------------------------ */
const crossPillarCTAVariants = cva(
  "rounded-card border border-border border-t-2 transition-colors flex flex-col",
  {
    variants: {
      variant: {
        "callout-box": "w-full p-6",
        "sidebar-block": "p-4",
        "upgrade-prompt": "w-full p-6",
      },
    },
    defaultVariants: {
      variant: "callout-box",
    },
  },
);

const headingVariants = cva("text-foreground font-semibold", {
  variants: {
    variant: {
      "callout-box": "text-heading-sm font-display",
      "sidebar-block": "text-body-sm",
      "upgrade-prompt": "text-heading-sm font-display",
    },
  },
  defaultVariants: { variant: "callout-box" },
});

const descriptionVariants = cva("text-muted mt-1", {
  variants: {
    variant: {
      "callout-box": "text-body",
      "sidebar-block": "text-caption",
      "upgrade-prompt": "text-body",
    },
  },
  defaultVariants: { variant: "callout-box" },
});

const linkSizeVariants = cva(
  "mt-auto pt-3 inline-flex items-center gap-1.5 font-medium",
  {
    variants: {
      variant: {
        "callout-box": "text-body",
        "sidebar-block": "text-body-sm",
        "upgrade-prompt": "text-body",
      },
    },
    defaultVariants: { variant: "callout-box" },
  },
);

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface CrossPillarCTAProps extends VariantProps<
  typeof crossPillarCTAVariants
> {
  /** The pillar the user is currently viewing */
  fromPillar: PillarName;
  /** The pillar being recommended */
  toPillar: PillarName;
  /** CTA heading */
  heading: string;
  /** CTA description */
  description: string;
  /** Link destination */
  href: string;
  /** Optional social proof stat for upgrade-prompt variant */
  socialProof?: string;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function CrossPillarCTA({
  variant = "callout-box",
  fromPillar,
  toPillar,
  heading,
  description,
  href,
  socialProof,
  className,
}: CrossPillarCTAProps) {
  return (
    <div
      className={cn(
        crossPillarCTAVariants({ variant }),
        pillarSoftBgMap[toPillar],
        pillarBorderTopMap[toPillar],
        className,
      )}
    >
      {/* Social proof stat (upgrade-prompt only) */}
      {variant === "upgrade-prompt" && socialProof && (
        <p
          className={cn(
            "text-caption font-semibold mb-2",
            pillarTextMap[toPillar],
          )}
        >
          {socialProof}
        </p>
      )}

      <h3 className={headingVariants({ variant })}>{heading}</h3>

      <p className={descriptionVariants({ variant })}>{description}</p>

      <Link
        href={href}
        variant="subtle"
        className={cn(linkSizeVariants({ variant }), pillarTextMap[toPillar])}
        icon={<Icon name="ArrowRight" size="sm" />}
        iconPosition="right"
      >
        Learn More
      </Link>
    </div>
  );
}

CrossPillarCTA.displayName = "CrossPillarCTA";

export { CrossPillarCTA, crossPillarCTAVariants };
