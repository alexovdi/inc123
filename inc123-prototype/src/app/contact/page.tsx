import type { Metadata } from "next";
import { ContactForm } from "@/design-system/components/ContactForm";
import { ContactHero } from "@/design-system/components/ContactHero";
import { ContactMethodCards } from "@/design-system/components/ContactMethodCards";
import { MapPlaceholder } from "@/design-system/components/MapPlaceholder";
import { QuickLinkCards } from "@/design-system/components/QuickLinkCards";
import { TrustSignals } from "@/design-system/components/TrustSignals";
import { contactData, contactTrustItems } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact Us — Call, Email or Visit Our Reno Office | Incorporate123",
  description:
    "Get in touch with Incorporate123. Call (775) 313-4155, email us, or visit our office at 1795 Meadow Wood Lane, Suite 100, Reno, NV 89502. Real people, real answers.",
  alternates: { canonical: "https://incorporate123.co/contact" },
};

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

      {/* 6. Map Placeholder */}
      <MapPlaceholder
        address="1795 Meadow Wood Lane, Suite 100, Reno, NV 89502"
        className="bg-background"
      />
    </div>
  );
}
