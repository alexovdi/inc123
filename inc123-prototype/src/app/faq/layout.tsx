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
   Layout
   ------------------------------------------------ */
export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FAQSchema />
      {children}
    </>
  );
}
