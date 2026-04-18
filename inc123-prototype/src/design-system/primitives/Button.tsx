import { type ReactNode, type ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/design-system/utils/cn";
import { pillarButtonMap } from "@/design-system/utils/pillarMaps";
import type { PillarName } from "@/design-system/tokens";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-button font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-secondary text-white hover:bg-secondary/90 active:bg-secondary/80",
        secondary:
          "bg-transparent text-foreground border border-border hover:bg-muted/10 active:bg-muted/20",
        ghost:
          "bg-transparent text-foreground hover:bg-muted/10 active:bg-muted/20",
        cta: "bg-accent text-white hover:bg-accent-hover active:bg-accent-hover/90 shadow-card hover:shadow-card-hover hover:scale-[1.02] active:scale-[0.98]",
        "outline-accent":
          "bg-transparent text-accent border-2 border-accent hover:bg-accent/10 active:bg-accent/20",
        "outline-on-dark":
          "bg-transparent text-white border-2 border-white/80 hover:bg-white/10 active:bg-white/20",
        "outline-on-dark-muted":
          "bg-transparent text-white/90 border-2 border-white/40 hover:border-white/80 hover:text-white",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 active:bg-destructive/80",
      },
      size: {
        sm: "h-10 px-4 text-body-sm",
        md: "h-11 px-6 text-body",
        lg: "h-14 px-8 text-body-lg",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  },
);

export interface ButtonProps
  extends
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  /** Optional pillar color override — replaces variant background */
  pillar?: PillarName;
  /** Show a loading spinner and hide children text */
  loading?: boolean;
  /** Icon element rendered beside the label */
  icon?: ReactNode;
  /** Position of the icon relative to children */
  iconPosition?: "left" | "right";
  /** Render as the child element type instead of <button> */
  asChild?: boolean;
  children?: ReactNode;
  className?: string;
}

const Spinner = () => (
  <svg
    className="h-4 w-4 animate-spin"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    />
  </svg>
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      fullWidth,
      pillar,
      loading = false,
      icon,
      iconPosition = "left",
      asChild = false,
      disabled,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || loading;

    const classes = cn(
      buttonVariants({ variant, size, fullWidth }),
      pillar && pillarButtonMap[pillar],
      className,
    );

    const inner = (
      <>
        {loading && <Spinner />}
        {icon && iconPosition === "left" && !loading && (
          <span className="shrink-0">{icon}</span>
        )}
        <span
          className={cn(
            "inline-flex items-center gap-2",
            loading && "invisible",
          )}
        >
          {children}
        </span>
        {icon && iconPosition === "right" && !loading && (
          <span className="shrink-0">{icon}</span>
        )}
      </>
    );

    if (asChild) {
      return (
        <Slot ref={ref} className={classes} {...props}>
          {children}
        </Slot>
      );
    }

    return (
      <button ref={ref} className={classes} disabled={isDisabled} {...props}>
        {inner}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
