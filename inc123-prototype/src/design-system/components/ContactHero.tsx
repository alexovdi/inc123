import { Eyebrow } from "@/design-system/primitives/Eyebrow";
import { cn } from "@/design-system/utils/cn";

/* -------------------------------------------------- */
/*  Props                                              */
/* -------------------------------------------------- */
export interface ContactHeroProps {
  /** Small label above the headline */
  eyebrow: string;
  /** H1 headline */
  headline: string;
  /** Supporting paragraph */
  subheadline: string;
  className?: string;
}

/* -------------------------------------------------- */
/*  Component                                          */
/* -------------------------------------------------- */
function ContactHero({
  eyebrow,
  headline,
  subheadline,
  className,
}: ContactHeroProps) {
  return (
    <section
      className={cn(
        "bg-primary-50 py-section-y px-container-x text-center",
        className,
      )}
    >
      <div className="mx-auto max-w-narrow">
        <Eyebrow className="mb-3">{eyebrow}</Eyebrow>
        <h1 className="font-display font-bold text-heading-lg md:text-display text-foreground">
          {headline}
        </h1>
        <p className="mt-4 text-body-lg text-muted">{subheadline}</p>
      </div>
    </section>
  );
}

ContactHero.displayName = "ContactHero";

export { ContactHero };
