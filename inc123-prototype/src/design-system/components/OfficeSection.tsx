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
            Visit Our Reno Office
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: contact details + photo placeholder */}
          <div className="space-y-6">
            {/* Contact details */}
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="MapPin" size="md" className="text-secondary mt-0.5 shrink-0" />
                <p className="text-body text-foreground">{address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Phone" size="md" className="text-secondary shrink-0" />
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
                <Icon name="Clock" size="md" className="text-secondary shrink-0" />
                <p className="text-body text-foreground">{hours}</p>
              </div>
            </address>

            {/* Photo placeholder */}
            <div className="w-full aspect-video rounded-card bg-muted/20 border border-border flex items-center justify-center">
              <div className="text-center">
                <Icon name="Building2" size="xl" className="text-muted/40 mx-auto" />
                <p className="mt-2 text-caption text-muted/60">Office photo placeholder</p>
              </div>
            </div>
          </div>

          {/* Right: map placeholder */}
          <div className="w-full aspect-[4/3] lg:aspect-auto lg:min-h-[400px] rounded-card bg-muted/20 border border-border flex flex-col items-center justify-center">
            <Icon name="MapPin" size="xl" className="text-muted/40" />
            <p className="mt-3 text-body font-medium text-muted/60">
              Map Placeholder
            </p>
            <p className="mt-1 text-caption text-muted/40 text-center px-4">
              {address}
            </p>
          </div>
        </div>

        {/* Nevada note */}
        <p className="mt-8 text-body text-muted text-center max-w-narrow mx-auto">
          Our office is minutes from the Nevada Secretary of State — we
          hand-deliver filing documents for same-day processing.
        </p>
      </div>
    </section>
  );
}

OfficeSection.displayName = "OfficeSection";

export { OfficeSection };
