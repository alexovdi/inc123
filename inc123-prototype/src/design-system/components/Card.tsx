import { type ReactNode } from "react";
import NextLink from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/utils/cn";
import { Badge, Icon } from "@/design-system/primitives";
import type { PillarName } from "@/design-system/tokens";

/* -------------------------------------------------- */
/*  Pillar top-border map                              */
/* -------------------------------------------------- */
const pillarTopBorderMap: Record<PillarName, string> = {
  privacy: "border-t-pillar-privacy",
  asset: "border-t-pillar-asset",
  formation: "border-t-pillar-formation",
  compliance: "border-t-pillar-compliance",
};

/* -------------------------------------------------- */
/*  CVA variants                                       */
/* -------------------------------------------------- */
const cardVariants = cva(
  "rounded-card overflow-hidden bg-surface text-foreground",
  {
    variants: {
      variant: {
        default: "border border-border",
        elevated: "border border-border shadow-card",
        interactive:
          "border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 cursor-pointer",
        featured: "border-2 border-secondary",
      },
      layout: {
        vertical: "flex flex-col",
        horizontal: "flex flex-col md:flex-row",
        compact: "flex flex-col",
      },
    },
    defaultVariants: {
      variant: "default",
      layout: "vertical",
    },
  }
);

/* -------------------------------------------------- */
/*  Props                                              */
/* -------------------------------------------------- */
export interface CardCTA {
  label: string;
  href: string;
}

export interface CardProps extends VariantProps<typeof cardVariants> {
  /** Pillar — adds colored top border */
  pillar?: PillarName;
  /** Image URL for the card */
  image?: string;
  /** Card title */
  title: string;
  /** Card description */
  description?: string;
  /** Makes the entire card clickable */
  href?: string;
  /** Optional badge shown in the card header */
  badge?: string;
  /** Optional CTA link rendered at the bottom */
  cta?: CardCTA;
  /** Optional extra content rendered below description */
  children?: ReactNode;
  className?: string;
}

/* -------------------------------------------------- */
/*  Component                                          */
/* -------------------------------------------------- */
function Card({
  variant,
  layout,
  pillar,
  image,
  title,
  description,
  href,
  badge,
  cta,
  children,
  className,
}: CardProps) {
  const isCompact = layout === "compact";
  const isHorizontal = layout === "horizontal";

  /* -- Featured border color override for pillar --- */
  const featuredBorderClass =
    variant === "featured" && pillar
      ? pillarTopBorderMap[pillar].replace("border-t-", "border-")
      : undefined;

  /* -- Inner content ------------------------------- */
  const content = (
    <>
      {/* Image */}
      {image && !isCompact && (
        <div
          className={cn(
            "relative overflow-hidden bg-muted/10",
            isHorizontal
              ? "md:w-48 md:shrink-0 aspect-[4/3] md:aspect-auto"
              : "aspect-[16/9]"
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* Body */}
      <div className={cn("flex flex-col gap-2 p-5", isCompact && "p-4")}>
        {/* Badge */}
        {badge && (
          <div>
            <Badge
              size="sm"
              pillar={pillar}
              variant={pillar ? undefined : "default"}
            >
              {badge}
            </Badge>
          </div>
        )}

        {/* Title */}
        <h3
          className={cn(
            "font-display font-semibold text-foreground",
            isCompact ? "text-body" : "text-heading-sm"
          )}
        >
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className={cn("text-muted", isCompact ? "text-body-sm" : "text-body")}>
            {description}
          </p>
        )}

        {/* Children slot */}
        {children}

        {/* CTA */}
        {cta && !href && (
          <div className="mt-auto pt-2">
            <NextLink
              href={cta.href}
              className={cn(
                "inline-flex items-center gap-1 text-body-sm font-medium text-secondary",
                "hover:text-secondary/80 transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm"
              )}
            >
              {cta.label}
              <Icon name="ArrowRight" size="xs" />
            </NextLink>
          </div>
        )}
      </div>
    </>
  );

  /* -- Shared classes ------------------------------ */
  const classes = cn(
    cardVariants({ variant: featuredBorderClass ? "default" : variant, layout }),
    pillar && "border-t-2",
    pillar && pillarTopBorderMap[pillar],
    featuredBorderClass,
    className
  );

  /* -- Wrap in link if href is provided ------------ */
  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("//");

    if (isExternal) {
      return (
        <a
          href={href}
          className={cn(classes, "no-underline block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2")}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }

    return (
      <NextLink
        href={href}
        className={cn(classes, "no-underline block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2")}
      >
        {content}
      </NextLink>
    );
  }

  return <div className={classes}>{content}</div>;
}

Card.displayName = "Card";

export { Card, cardVariants };
