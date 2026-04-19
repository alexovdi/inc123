import { cva, type VariantProps } from "class-variance-authority";
import { ClipboardCheck } from "lucide-react";

import { cn } from "@/design-system/utils/cn";
import { Button } from "@/design-system/primitives/Button";

/* ------------------------------------------------
   Variants — one cva() per slot, all keyed by `tone`
   so the single `variant` prop drives the full callout.
   ------------------------------------------------ */
const sectionVariants = cva("p-8 sm:p-10 lg:p-12", {
  variants: {
    tone: {
      default:
        "rounded-card bg-pillar-compliance-soft border border-pillar-compliance-mid/30",
      dark: "bg-primary",
    },
  },
  defaultVariants: { tone: "default" },
});

const iconBubbleVariants = cva(
  "flex h-10 w-10 items-center justify-center rounded-card",
  {
    variants: {
      tone: {
        default: "bg-pillar-compliance/10",
        dark: "bg-white/10",
      },
    },
    defaultVariants: { tone: "default" },
  },
);

const iconVariants = cva("h-5 w-5", {
  variants: {
    tone: {
      default: "text-pillar-compliance",
      dark: "text-white/80",
    },
  },
  defaultVariants: { tone: "default" },
});

const eyebrowVariants = cva(
  "text-body-sm font-semibold uppercase tracking-[0.15em]",
  {
    variants: {
      tone: {
        default: "text-pillar-compliance",
        dark: "text-white/70",
      },
    },
    defaultVariants: { tone: "default" },
  },
);

const headlineVariants = cva("font-display text-heading-lg font-bold", {
  variants: {
    tone: {
      default: "text-foreground",
      dark: "text-white",
    },
  },
  defaultVariants: { tone: "default" },
});

const descriptionVariants = cva("mt-3 text-body-lg max-w-narrow", {
  variants: {
    tone: {
      default: "text-muted",
      dark: "text-white/70",
    },
  },
  defaultVariants: { tone: "default" },
});

const decorativeIconVariants = cva("h-32 w-32", {
  variants: {
    tone: {
      default: "text-pillar-compliance/20",
      dark: "text-white/20",
    },
  },
  defaultVariants: { tone: "default" },
});

const secondaryButtonVariants = cva("", {
  variants: {
    tone: {
      default: "",
      dark: "text-white/70 hover:text-white hover:bg-white/10",
    },
  },
  defaultVariants: { tone: "default" },
});

type CalloutTone = NonNullable<VariantProps<typeof sectionVariants>["tone"]>;

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface ComplianceCalloutProps {
  /** Section headline */
  headline: string;
  /** Supporting description paragraph */
  description: string;
  /** Call-to-action button */
  cta: { label: string; href: string };
  /** Override the default "Client Login" secondary CTA */
  secondaryCTA?: { label: string; href: string };
  /** Visual variant — `dark` renders a full-width dark treatment */
  variant?: "default" | "dark";
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function ComplianceCallout({
  headline,
  description,
  cta,
  secondaryCTA,
  variant = "default",
  className,
}: ComplianceCalloutProps) {
  const tone: CalloutTone = variant;
  const isDark = tone === "dark";

  return (
    <section className={cn(sectionVariants({ tone }), className)}>
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
        {/* Text content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className={iconBubbleVariants({ tone })}>
              <ClipboardCheck
                className={iconVariants({ tone })}
                aria-hidden="true"
              />
            </div>
            <span className={eyebrowVariants({ tone })}>Compliance</span>
          </div>

          <h2 className={headlineVariants({ tone })}>{headline}</h2>

          <p className={descriptionVariants({ tone })}>{description}</p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {isDark ? (
              <Button variant="cta" size="lg" asChild>
                <a href={cta.href}>{cta.label}</a>
              </Button>
            ) : (
              <Button variant="primary" pillar="compliance" size="lg" asChild>
                <a href={cta.href}>{cta.label}</a>
              </Button>
            )}
            <Button
              variant="ghost"
              size="lg"
              asChild
              className={secondaryButtonVariants({ tone })}
            >
              <a href={secondaryCTA?.href ?? "/contact"}>
                {secondaryCTA?.label ?? "Talk to Our Team"}
              </a>
            </Button>
          </div>
        </div>

        {/* Right icon area — decorative */}
        <div
          className="hidden lg:flex lg:basis-1/4 items-center justify-center"
          aria-hidden="true"
        >
          <ClipboardCheck className={decorativeIconVariants({ tone })} />
        </div>
      </div>
    </section>
  );
}

ComplianceCallout.displayName = "ComplianceCallout";

export { ComplianceCallout };
