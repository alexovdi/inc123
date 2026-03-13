"use client";

import { type ReactNode, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  Info,
  AlertTriangle,
  AlertCircle,
  CheckCircle,
  X,
} from "lucide-react";
import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   CVA Variants
   ------------------------------------------------ */
const alertVariants = cva(
  "relative flex gap-3 rounded-card border px-4 py-3 font-sans text-body-sm",
  {
    variants: {
      variant: {
        info: "border-secondary/30 bg-secondary/5 text-foreground",
        warning: "border-warning/30 bg-warning/5 text-foreground",
        error: "border-destructive/30 bg-destructive/5 text-foreground",
        success: "border-success/30 bg-success/5 text-foreground",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

const alertIconVariants = cva("mt-0.5 shrink-0 h-5 w-5", {
  variants: {
    variant: {
      info: "text-secondary",
      warning: "text-warning",
      error: "text-destructive",
      success: "text-success",
    },
  },
  defaultVariants: { variant: "info" },
});

/* ------------------------------------------------
   Default icons per variant
   ------------------------------------------------ */
const defaultIcons: Record<string, ReactNode> = {
  info: <Info />,
  warning: <AlertTriangle />,
  error: <AlertCircle />,
  success: <CheckCircle />,
};

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface AlertProps extends VariantProps<typeof alertVariants> {
  /** Alert variant */
  variant?: "info" | "warning" | "error" | "success";
  /** Bold title */
  title?: string;
  /** Description text or rich content */
  description?: ReactNode;
  /** Whether the alert can be dismissed */
  dismissible?: boolean;
  /** Callback when dismissed */
  onDismiss?: () => void;
  /** Override the default variant icon */
  icon?: ReactNode;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function Alert({
  variant = "info",
  title,
  description,
  dismissible = false,
  onDismiss,
  icon,
  className,
}: AlertProps) {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  const handleDismiss = () => {
    setIsDismissed(true);
    onDismiss?.();
  };

  const renderedIcon = icon ?? defaultIcons[variant];

  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), className)}
    >
      {/* Icon */}
      <span className={alertIconVariants({ variant })} aria-hidden="true">
        {renderedIcon}
      </span>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {title && (
          <p className="font-semibold text-foreground">{title}</p>
        )}
        {description && (
          <div className={cn("text-foreground/80", title && "mt-1")}>
            {description}
          </div>
        )}
      </div>

      {/* Dismiss button */}
      {dismissible && (
        <button
          type="button"
          onClick={handleDismiss}
          className="shrink-0 rounded-button p-1 text-muted transition-colors hover:bg-foreground/5 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          aria-label="Dismiss alert"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

Alert.displayName = "Alert";

export { Alert, alertVariants };
