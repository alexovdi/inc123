import { cn } from "@/design-system/utils/cn";
import { Icon } from "@/design-system/primitives";

/* -------------------------------------------------- */
/*  Props                                              */
/* -------------------------------------------------- */
export interface OfficeSectionProps {
  /** Full street address */
  address: string;
  /** Phone number display string */
  phone: string;
  /** Email address */
  email: string;
  /** Business hours */
  hours: string;
  /** Whether to show the map placeholder */
  showMap?: boolean;
  className?: string;
}

/* -------------------------------------------------- */
/*  Component                                          */
/* -------------------------------------------------- */
function OfficeSection({
  address,
  phone,
  email,
  hours,
  showMap = false,
  className,
}: OfficeSectionProps) {
  // Build tel: link from phone string
  const telHref = `tel:+1${phone.replace(/\D/g, "")}`;

  return (
    <section className={cn("py-section-y px-container-x", className)}>
      <div className="mx-auto max-w-content">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-heading-lg text-foreground">
            Get in Touch
          </h2>
        </div>

        <div className="mx-auto max-w-narrow">
          {/* Contact details */}
          <address className="not-italic space-y-4">
            <div className="flex items-start gap-3">
              <Icon
                name="MapPin"
                size="md"
                className="text-secondary mt-0.5 shrink-0"
              />
              <p className="text-body text-foreground">{address}</p>
            </div>
            <div className="flex items-center gap-3">
              <Icon
                name="Phone"
                size="md"
                className="text-secondary shrink-0"
              />
              <a
                href={telHref}
                className="text-body font-medium text-secondary hover:underline"
              >
                {phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Mail" size="md" className="text-secondary shrink-0" />
              <a
                href={`mailto:${email}`}
                className="text-body font-medium text-secondary hover:underline"
              >
                {email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Icon
                name="Clock"
                size="md"
                className="text-secondary shrink-0"
              />
              <p className="text-body text-foreground">{hours}</p>
            </div>
          </address>
        </div>

        {/* Map placeholder */}
        {showMap && (
          <div className="mx-auto max-w-narrow mt-8 flex h-[240px] items-center justify-center rounded-card border border-border bg-muted/10">
            <div className="text-center">
              <Icon
                name="MapPin"
                size="lg"
                className="text-muted mx-auto mb-2"
              />
              <p className="font-medium text-body text-foreground">
                Office Location
              </p>
              <p className="mt-1 text-body-sm text-muted">{address}</p>
            </div>
          </div>
        )}

        {/* Support note */}
        <p className="mt-8 text-body text-muted text-center max-w-narrow mx-auto">
          Call us directly to speak with a privacy formation specialist — no
          phone trees, no chatbots, no sales pressure.
        </p>
      </div>
    </section>
  );
}

OfficeSection.displayName = "OfficeSection";

export { OfficeSection };
