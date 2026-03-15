"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 active:scale-[0.97]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "cursor-pointer select-none",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-[var(--color-accent)] text-white",
          "hover:bg-[var(--color-accent-hover)]",
          "shadow-sm hover:shadow-md",
        ],
        secondary: [
          "bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]",
          "border border-[var(--color-border)]",
          "hover:bg-[var(--color-bg-surface)] hover:border-[var(--color-accent)]",
        ],
        ghost: [
          "bg-transparent text-[var(--color-text-primary)]",
          "hover:bg-[var(--color-bg-primary)]",
        ],
        cta: [
          "bg-[var(--color-accent)] text-white font-semibold",
          "hover:bg-[var(--color-accent-hover)]",
          "shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]",
        ],
        dark: [
          "bg-transparent text-[var(--color-text-on-dark)]",
          "border border-[var(--color-accent)]",
          "hover:bg-[var(--color-accent)] hover:text-white",
        ],
      },
      size: {
        sm: "h-8 px-3 text-sm rounded-[var(--radius-sm)]",
        md: "h-10 px-5 text-sm rounded-[var(--radius-md)]",
        lg: "h-12 px-7 text-base rounded-[var(--radius-md)]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as child element via Radix Slot */
  asChild?: boolean;
  /** Show loading spinner and disable interaction */
  loading?: boolean;
  /** Icon element rendered before children */
  iconLeft?: React.ReactNode;
  /** Icon element rendered after children */
  iconRight?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      iconLeft,
      iconRight,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {!loading && iconLeft}
        {children}
        {!loading && iconRight}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };
