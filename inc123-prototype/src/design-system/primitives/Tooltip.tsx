"use client";

import {
  type ReactNode,
  useState,
  useRef,
  useEffect,
  useCallback,
  useId,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   CVA Variants
   ------------------------------------------------ */
const tooltipContentVariants = cva(
  "absolute z-50 rounded-card bg-foreground text-surface shadow-tooltip font-sans animate-fade-in",
  {
    variants: {
      size: {
        sm: "max-w-xs px-3 py-1.5 text-caption whitespace-nowrap",
        md: "max-w-sm px-4 py-2.5 text-body-sm",
        lg: "max-w-md px-5 py-3 text-body-sm",
      },
      position: {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
      },
    },
    defaultVariants: {
      size: "sm",
      position: "top",
    },
  }
);

/* Tooltip arrow (caret) */
const tooltipArrowVariants = cva(
  "absolute h-0 w-0 border-[5px] border-transparent",
  {
    variants: {
      position: {
        top: "top-full left-1/2 -translate-x-1/2 border-t-foreground",
        bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-foreground",
        left: "left-full top-1/2 -translate-y-1/2 border-l-foreground",
        right: "right-full top-1/2 -translate-y-1/2 border-r-foreground",
      },
    },
    defaultVariants: { position: "top" },
  }
);

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface TooltipProps extends VariantProps<typeof tooltipContentVariants> {
  /** Tooltip content -- string or rich ReactNode */
  content: ReactNode;
  /** The trigger element that the tooltip anchors to */
  trigger: ReactNode;
  /** Tooltip position relative to trigger */
  position?: "top" | "bottom" | "left" | "right";
  /** Content size */
  size?: "sm" | "md" | "lg";
  /** Delay in ms before showing the tooltip on hover */
  delayMs?: number;
  /** Additional class names on the wrapper */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function Tooltip({
  content,
  trigger,
  position = "top",
  size = "sm",
  delayMs = 200,
  className,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const delayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tooltipId = useId();

  const show = useCallback(() => {
    delayRef.current = setTimeout(() => setIsVisible(true), delayMs);
  }, [delayMs]);

  const hide = useCallback(() => {
    if (delayRef.current) {
      clearTimeout(delayRef.current);
      delayRef.current = null;
    }
    setIsVisible(false);
  }, []);

  const toggle = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  // Close on outside tap (mobile)
  useEffect(() => {
    if (!isVisible) return;

    function handleOutsideClick(e: MouseEvent | TouchEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsVisible(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isVisible]);

  // Close on Escape
  useEffect(() => {
    if (!isVisible) return;

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setIsVisible(false);
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isVisible]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (delayRef.current) clearTimeout(delayRef.current);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={cn("relative inline-flex", className)}
      onMouseEnter={show}
      onMouseLeave={hide}
      onClick={toggle}
    >
      {/* Trigger */}
      <div
        aria-describedby={isVisible ? tooltipId : undefined}
        onFocus={show}
        onBlur={hide}
        tabIndex={0}
        className="inline-flex"
      >
        {trigger}
      </div>

      {/* Tooltip */}
      {isVisible && (
        <div
          id={tooltipId}
          role="tooltip"
          className={cn(tooltipContentVariants({ size, position }))}
        >
          {content}
          <span
            className={tooltipArrowVariants({ position })}
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  );
}

Tooltip.displayName = "Tooltip";

export { Tooltip, tooltipContentVariants };
