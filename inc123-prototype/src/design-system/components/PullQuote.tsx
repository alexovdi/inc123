import { cn } from "@/design-system/utils/cn";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";

/* ------------------------------------------------
   Types
   ------------------------------------------------ */
interface PullQuoteProps {
  /** The quote text (JSX supported for highlights) */
  children: React.ReactNode;
  /** Large decorative background text */
  bgText?: string;
  /** Attribution label shown below the quote */
  attribution?: string;
  className?: string;
}

/* ------------------------------------------------
   Component
   ------------------------------------------------ */
function PullQuote({
  children,
  bgText,
  attribution = "The Incorporate123 Difference",
  className,
}: PullQuoteProps) {
  return (
    <section
      className={cn(
        "relative bg-primary py-section-y-sm overflow-hidden",
        className,
      )}
    >
      {bgText && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="font-display text-[20rem] font-black text-white/[0.02] leading-none select-none">
            {bgText}
          </span>
        </div>
      )}
      <div className="relative mx-auto max-w-narrow px-container-x">
        <ScrollReveal>
          <blockquote className="text-center">
            <p className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] font-medium text-white leading-[1.3] tracking-tight text-balance">
              {children}
            </p>
            <footer className="mt-8 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-white/20" />
              <p className="text-body-sm text-white/60 font-medium tracking-wide uppercase">
                {attribution}
              </p>
              <div className="h-px w-8 bg-white/20" />
            </footer>
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}

PullQuote.displayName = "PullQuote";

export { PullQuote };
export type { PullQuoteProps };
