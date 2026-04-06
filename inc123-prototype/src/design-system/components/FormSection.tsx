import { type ReactNode } from "react";
import { cn } from "@/design-system/utils/cn";

/* ------------------------------------------------
   Props
   ------------------------------------------------ */
export interface FormSectionProps {
  /** Section title */
  title: string;
  /** Optional description text below the title */
  description?: string;
  /** Form fields or content */
  children: ReactNode;
  /** Additional class names */
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function FormSection({
  title,
  description,
  children,
  className,
}: FormSectionProps) {
  return (
    <section
      className={cn(
        "border-b border-border pb-8 mb-8 last:border-b-0 last:pb-0 last:mb-0",
        className
      )}
    >
      <div className="mb-6">
        <h3 className="text-heading-sm font-display font-semibold text-foreground">
          {title}
        </h3>
        {description && (
          <p className="mt-1 text-body text-muted">{description}</p>
        )}
      </div>

      <div className="space-y-4">{children}</div>
    </section>
  );
}

FormSection.displayName = "FormSection";

export { FormSection };
