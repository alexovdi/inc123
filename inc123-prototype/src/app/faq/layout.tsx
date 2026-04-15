import { faqItems } from "@/data/faq";

/* ------------------------------------------------
   FAQ Schema (JSON-LD)
   ------------------------------------------------ */
function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

/* ------------------------------------------------
   Breadcrumb Schema (JSON-LD)
   ------------------------------------------------ */
function BreadcrumbSchema() {
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
        name: "FAQ",
        item: "https://incorporate123.com/faq",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
    />
  );
}

/* ------------------------------------------------
   Layout
   ------------------------------------------------ */
export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FAQSchema />
      <BreadcrumbSchema />
      {children}
    </>
  );
}
