"use client";

import {
  type ReactNode,
  useState,
  useCallback,
  useRef,
  useEffect,
  useId,
  createContext,
  useContext,
  type KeyboardEvent,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   CVA Variants
   ------------------------------------------------ */
const accordionVariants = cva("w-full", {
  variants: {
    variant: {
      default: "divide-y divide-border border border-border rounded-card",
      flush: "divide-y divide-border",
      card: "space-y-3",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const accordionItemVariants = cva("", {
  variants: {
    variant: {
      default: "",
      flush: "",
      card: "border border-border rounded-card shadow-card overflow-hidden",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const accordionContentVariants = cva("text-body text-muted", {
  variants: {
    variant: {
      default: "px-4 pb-4",
      flush: "pb-4",
      card: "px-4 pb-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const accordionTriggerVariants = cva(
  "flex w-full items-center justify-between gap-3 text-left font-medium text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "px-4 py-4 hover:bg-muted/5",
        flush: "py-4 hover:text-secondary",
        card: "px-4 py-4 hover:bg-muted/5",
      },
      size: {
        sm: "text-body-sm",
        md: "text-body",
        lg: "text-body-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

/* ------------------------------------------------
   Context
   ------------------------------------------------ */
interface AccordionContextValue {
  openItems: Set<string>;
  toggle: (id: string) => void;
  registerItem: (id: string) => void;
  unregisterItem: (id: string) => void;
  variant: "default" | "flush" | "card";
  itemIds: string[];
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordionContext() {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error("AccordionItem must be used within an Accordion");
  }
  return ctx;
}

/* ------------------------------------------------
   Accordion Props
   ------------------------------------------------ */
export interface AccordionProps extends VariantProps<typeof accordionVariants> {
  /** Single: only one item open at a time. Multiple: any number open. */
  type?: "single" | "multiple";
  /** Accordion visual variant */
  variant?: "default" | "flush" | "card";
  /** Item IDs to open by default */
  defaultOpen?: string[];
  children: ReactNode;
  className?: string;
}

/* ------------------------------------------------
   AccordionItem Props
   ------------------------------------------------ */
export interface AccordionItemProps {
  /** Unique identifier for this item */
  id: string;
  /** Header text */
  title: string;
  /** Optional badge displayed beside the title */
  badge?: string;
  /** Disable expand/collapse for this item */
  disabled?: boolean;
  /** Content shown when expanded */
  children: ReactNode;
  className?: string;
}

/* ------------------------------------------------
   Accordion
   ------------------------------------------------ */
function Accordion({
  type = "single",
  variant = "default",
  defaultOpen = [],
  children,
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(
    () => new Set(defaultOpen),
  );
  const [itemIds, setItemIds] = useState<string[]>([]);

  const toggle = useCallback(
    (id: string) => {
      setOpenItems((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          if (type === "single") {
            next.clear();
          }
          next.add(id);
        }
        return next;
      });
    },
    [type],
  );

  const registerItem = useCallback((id: string) => {
    setItemIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const unregisterItem = useCallback((id: string) => {
    setItemIds((prev) => prev.filter((i) => i !== id));
  }, []);

  return (
    <AccordionContext.Provider
      value={{
        openItems,
        toggle,
        registerItem,
        unregisterItem,
        variant: variant ?? "default",
        itemIds,
      }}
    >
      <div
        className={cn(accordionVariants({ variant }), className)}
        role="region"
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

/* ------------------------------------------------
   AccordionItem
   ------------------------------------------------ */
function AccordionItem({
  id,
  title,
  badge,
  disabled = false,
  children,
  className,
}: AccordionItemProps) {
  const { openItems, toggle, registerItem, unregisterItem, variant, itemIds } =
    useAccordionContext();
  const isOpen = openItems.has(id);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const headingId = useId();
  const panelId = useId();

  // Register/unregister on mount/unmount
  useEffect(() => {
    registerItem(id);
    return () => unregisterItem(id);
  }, [id, registerItem, unregisterItem]);

  // Measure content for max-height animation
  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    }
  }, [children, isOpen]);

  const handleToggle = () => {
    if (!disabled) toggle(id);
  };

  // Keyboard navigation between items
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const currentIndex = itemIds.indexOf(id);
    if (currentIndex === -1) return;

    let targetIndex: number | null = null;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        targetIndex = (currentIndex + 1) % itemIds.length;
        break;
      case "ArrowUp":
        e.preventDefault();
        targetIndex = (currentIndex - 1 + itemIds.length) % itemIds.length;
        break;
      case "Home":
        e.preventDefault();
        targetIndex = 0;
        break;
      case "End":
        e.preventDefault();
        targetIndex = itemIds.length - 1;
        break;
    }

    if (targetIndex !== null) {
      const targetId = itemIds[targetIndex];
      const targetButton = document.querySelector<HTMLButtonElement>(
        `[data-accordion-trigger="${targetId}"]`,
      );
      targetButton?.focus();
    }
  };

  return (
    <div
      id={id}
      className={cn(accordionItemVariants({ variant }), className)}
      data-state={isOpen ? "open" : "closed"}
    >
      {/* Trigger */}
      <h3 id={headingId}>
        <button
          ref={buttonRef}
          type="button"
          className={cn(accordionTriggerVariants({ variant }))}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          aria-expanded={isOpen}
          aria-controls={panelId}
          data-accordion-trigger={id}
          data-state={isOpen ? "open" : "closed"}
        >
          <span className="flex items-center gap-2">
            <span>{title}</span>
            {badge && (
              <span className="inline-flex items-center rounded-pill bg-muted/15 px-2 py-0.5 text-caption font-medium text-muted">
                {badge}
              </span>
            )}
          </span>
          <ChevronDown
            className={cn(
              "h-5 w-5 shrink-0 text-muted transition-transform duration-200",
              isOpen && "rotate-180",
            )}
            aria-hidden="true"
          />
        </button>
      </h3>

      {/* Panel — stays in DOM for SEO */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        data-state={isOpen ? "open" : "closed"}
        className="overflow-hidden transition-[max-height,opacity] duration-200 ease-out"
        style={{
          maxHeight: isOpen ? `${maxHeight}px` : "0px",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
        }}
      >
        <div ref={contentRef} className={accordionContentVariants({ variant })}>
          {children}
        </div>
      </div>
    </div>
  );
}

Accordion.displayName = "Accordion";
AccordionItem.displayName = "AccordionItem";

export { Accordion, AccordionItem, accordionVariants };
