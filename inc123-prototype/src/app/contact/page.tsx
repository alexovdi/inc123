import {
  ContactHero,
  ContactMethodCards,
  ContactForm,
  TrustSignals,
  QuickLinkCards,
  MapPlaceholder,
} from "@/design-system/components";
import { contactData } from "@/data/contact";

/* ------------------------------------------------
   Trust signals for the contact page
   ------------------------------------------------ */
const contactTrustItems = [
  { icon: "Clock", value: "1 Day", label: "Response Time" },
  { icon: "ShieldCheck", value: "Private", label: "Your Info Is Confidential" },
  { icon: "Phone", value: "Real", label: "Person Answers" },
  { icon: "Award", value: "25+", label: "Years Experience" },
];

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
