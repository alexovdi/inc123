import { type ReactNode, type AnchorHTMLAttributes } from "react";
import NextLink from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/utils/cn";
import { pillarLinkMap } from "@/design-system/utils/pillarMaps";
import type { PillarName } from "@/design-system/tokens";

const linkVariants = cva(
  "inline-flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-sm",
  {
    variants: {
      variant: {
        default: "text-link underline underline-offset-2 hover:text-link/80",
        subtle:
          "text-link no-underline hover:underline hover:underline-offset-2",
        nav: "text-foreground no-underline font-medium hover:text-link",
        breadcrumb:
          "text-muted no-underline text-body-sm hover:text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface LinkProps
  extends
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    VariantProps<typeof linkVariants> {
  /** URL — internal paths use Next.js Link, external URLs use <a> */
  href: string;
  /** Optional pillar color override */
  pillar?: PillarName;
  /** Icon element rendered beside the label */
  icon?: ReactNode;
  /** Position of the icon relative to children */
  iconPosition?: "left" | "right";
  /** Force external link behavior (target="_blank" + rel) */
  external?: boolean;
  children: ReactNode;
  className?: string;
}

function Link({
  href,
  variant,
  pillar,
  icon,
  iconPosition = "left",
  external,
  children,
  className,
  ...props
}: LinkProps) {
  const isExternal =
    external || href.startsWith("http") || href.startsWith("//");

  const classes = cn(
    linkVariants({ variant }),
    pillar && pillarLinkMap[pillar],
    className,
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="shrink-0">{icon}</span>
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <NextLink href={href} className={classes} {...props}>
      {content}
    </NextLink>
  );
}

Link.displayName = "Link";

export { Link, linkVariants };
