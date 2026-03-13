"use client";

import { type ReactNode } from "react";
import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface PaymentMethod {
  /** Unique method identifier */
  id: string;
  /** Display label */
  label: string;
  /** Lucide icon name */
  icon: string;
}

export interface PaymentMethodSelectorProps {
  /** Available payment methods */
  methods: PaymentMethod[];
  /** Currently active method ID */
  activeMethod: string;
  /** Selection change handler */
  onChange: (methodId: string) => void;
  /** Content rendered below the tabs (form for the active method) */
  children: ReactNode;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function PaymentMethodSelector({
  methods,
  activeMethod,
  onChange,
  children,
  className,
}: PaymentMethodSelectorProps) {
  return (
    <div className={cn("bg-surface rounded-card", className)}>
      {/* Tabs */}
      <div className="flex flex-row gap-3" role="tablist" aria-label="Payment method">
        {methods.map((method) => {
          const isActive = method.id === activeMethod;

          return (
            <button
              key={method.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`payment-panel-${method.id}`}
              id={`payment-tab-${method.id}`}
              onClick={() => onChange(method.id)}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-card border-2 px-4 py-3 text-body-sm font-medium transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
                isActive
                  ? "border-secondary bg-secondary/5 text-secondary"
                  : "border-border text-foreground hover:border-secondary/50 hover:bg-muted/5"
              )}
            >
              <Icon name={method.icon} size="sm" />
              <span>{method.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content area */}
      <div
        className="mt-6"
        role="tabpanel"
        id={`payment-panel-${activeMethod}`}
        aria-labelledby={`payment-tab-${activeMethod}`}
      >
        {children}
      </div>
    </div>
  );
}

PaymentMethodSelector.displayName = "PaymentMethodSelector";

export { PaymentMethodSelector };
