import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives";

/* -------------------------------------------------- */
/*  Props                                              */
/* -------------------------------------------------- */
export interface FounderBioProps {
  /** Founder's name */
  name: string;
  /** Job title */
  title: string;
  /** Location string (e.g. "Reno, Nevada") */
  location: string;
  /** Array of bio paragraphs */
  bio: string[];
  /** Trust tag badges */
  trustTags: string[];
  className?: string;
}

/* -------------------------------------------------- */
/*  Component                                          */
/* -------------------------------------------------- */
function FounderBio({
  name,
  title,
  location,
  bio,
  trustTags,
  className,
}: FounderBioProps) {
  return (
    <section className={cn("py-section-y px-container-x", className)}>
      <div className="mx-auto max-w-content flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Photo placeholder — 40% on desktop */}
        <div className="lg:w-[40%] flex justify-center lg:justify-start">
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-full lg:h-auto lg:aspect-[3/4] rounded-card bg-muted/20 border border-border flex items-center justify-center shrink-0">
            <Icon name="User" size="xl" className="text-muted/40" />
          </div>
        </div>

        {/* Bio content — 60% on desktop */}
        <div className="lg:w-[60%]">
          <h2 className="font-display font-bold text-heading-lg text-foreground">
            {name}
          </h2>
          <p className="mt-1 text-body-lg text-secondary font-medium">
            {title}
          </p>
          <p className="mt-1 text-body text-muted flex items-center gap-1.5">
            <Icon name="MapPin" size="sm" className="text-muted" />
            {location}
          </p>

          {/* Bio paragraphs */}
          <div className="mt-6 space-y-4">
            {bio.map((paragraph, index) => (
              <p key={index} className="text-body text-foreground/90 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Trust tags */}
          {trustTags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {trustTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-caption font-medium text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

FounderBio.displayName = "FounderBio";

export { FounderBio };
