import type { Metadata } from "next";
import { faqItems } from "@/data/faq";

/* ------------------------------------------------
   Metadata
   ------------------------------------------------ */
export const metadata: Metadata = {
  title:
    "Frequently Asked Questions — Business Privacy, Formation & Asset Protection | Incorporate123",
  description:
    "Answers to common questions about anonymous LLCs, nominee services, Wyoming and Nevada formation, asset protection, compliance, and pricing. 25 years of expertise.",
  alternates: {
    canonical: "https://incorporate123.co/faq",
  },
};

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
