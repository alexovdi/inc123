import { ContactForm } from "@/design-system/components/ContactForm";
import { ContactHero } from "@/design-system/components/ContactHero";
import { ContactMethodCards } from "@/design-system/components/ContactMethodCards";
import { QuickLinkCards } from "@/design-system/components/QuickLinkCards";
import { TrustSignals } from "@/design-system/components/TrustSignals";
import { contactData, contactTrustItems } from "@/data/contact";

export default function ContactPage() {
  const { hero, methods, formFields, quickLinks } = contactData;

  return (
    <div className="space-y-0">
      {/* 1. Contact Hero */}
      <ContactHero
        eyebrow={hero.eyebrow}
        headline={hero.headline}
        subheadline={hero.subheadline}
      />

      {/* 2. Contact Method Cards */}
      <ContactMethodCards methods={methods} />

      {/* 3. Contact Form */}
      <ContactForm fields={formFields} className="bg-background" />

      {/* 4. Trust Signals */}
      <section className="bg-surface py-section-y-sm">
        <div className="mx-auto max-w-content px-container-x">
          <TrustSignals items={contactTrustItems} layout="compact" />
        </div>
      </section>

      {/* 5. Quick Link Cards */}
      <QuickLinkCards links={quickLinks} />
    </div>
  );
}
