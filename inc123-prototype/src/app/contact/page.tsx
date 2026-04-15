import { useEffect } from "react";
import { Breadcrumbs } from "@/design-system/components/Breadcrumbs";
import { ContactForm } from "@/design-system/components/ContactForm";
import { ContactHero } from "@/design-system/components/ContactHero";
import { ContactMethodCards } from "@/design-system/components/ContactMethodCards";
import { QuickLinkCards } from "@/design-system/components/QuickLinkCards";
import { TrustSignals } from "@/design-system/components/TrustSignals";
import { contactData, contactTrustItems } from "@/data/contact";

function ContactSchema() {
  const contactPage = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Incorporate123",
    url: "https://incorporate123.com/contact",
    description:
      "Contact Incorporate123 for privacy incorporation, asset protection, and business formation services. Response within 1 business day.",
  };
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Incorporate123",
    url: "https://incorporate123.com/",
    telephone: "+1-800-553-0615",
    email: "info@incorporate123.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Reno",
      addressRegion: "NV",
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://incorporate123.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://incorporate123.com/contact",
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  );
}

export default function ContactPage() {
  const { hero, methods, formFields, quickLinks } = contactData;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Contact Us | Incorporate123";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="space-y-0">
      <ContactSchema />

      {/* Breadcrumb */}
      <div className="bg-primary-50 px-container-x pt-6">
        <div className="mx-auto max-w-content">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact", href: "/contact" },
            ]}
          />
        </div>
      </div>

      {/* 1. Contact Hero */}
      <ContactHero
        eyebrow={hero.eyebrow}
        headline={hero.headline}
        subheadline={hero.subheadline}
      />

      {/* 2. Contact Method Cards — phone featured prominently */}
      <ContactMethodCards methods={methods} featurePhone />

      {/* 3. Contact Form */}
      <ContactForm fields={formFields} className="bg-background" />

      {/* 4. Trust Signals */}
      <section className="bg-surface py-section-y-sm">
        <div className="mx-auto max-w-content px-container-x">
          <TrustSignals items={contactTrustItems} layout="compact" />
        </div>
      </section>

      {/* 5. Quick Link Cards — spec aligned (4 pillars + FAQ) */}
      <QuickLinkCards links={quickLinks} title="Not sure where to start?" />
    </div>
  );
}
