import { notFound } from "next/navigation";
import {
  getPageBySlug,
  getAllSlugs,
  type PageEntry,
} from "@/lib/slug-registry";
import { pillarLabelMap } from "@/design-system/utils/pillarMaps";
import { ClusterPageTemplate } from "./ClusterPageTemplate";
import { ComparisonPageTemplate } from "./ComparisonPageTemplate";
import { StatePageTemplate } from "./StatePageTemplate";
import type { Metadata } from "next";

/* ------------------------------------------------
   Static params — all flat slugs
   ------------------------------------------------ */
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug: [slug] }));
}

/* ------------------------------------------------
   Base URL
   ------------------------------------------------ */
const SITE_URL = "https://incorporate123.co";

/* ------------------------------------------------
   Metadata
   ------------------------------------------------ */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const flatSlug = slug.join("/");
  const entry = getPageBySlug(flatSlug);
  if (!entry) return {};

  const canonical = `${SITE_URL}/${flatSlug}`;

  switch (entry.type) {
    case "cluster":
      return {
        title: `${entry.data.title} — ${pillarLabelMap[entry.data.pillar] ?? entry.data.pillarLabel} | Incorporate123`,
        description: entry.data.description,
        alternates: { canonical },
      };
    case "comparison":
      return {
        title: `${entry.data.title} — Comparison | Incorporate123`,
        description: entry.data.description,
        alternates: { canonical },
      };
    case "state":
      return {
        title: `${entry.data.name} Business Services — LLC Formation, Privacy & Asset Protection | Incorporate123`,
        description: `Form a ${entry.data.name} LLC or Corporation with 25 years of expert support. Anonymous LLC formation, asset protection, registered agent, and ongoing compliance. All-inclusive packages.`,
        alternates: { canonical },
      };
  }
}

/* ------------------------------------------------
   BreadcrumbList Schema (JSON-LD)
   ------------------------------------------------ */
function BreadcrumbSchema({ entry, slug }: { entry: PageEntry; slug: string }) {
  const items: Array<{ name: string; url: string }> = [
    { name: "Home", url: SITE_URL },
  ];

  switch (entry.type) {
    case "cluster":
      items.push({
        name: pillarLabelMap[entry.data.pillar] ?? entry.data.pillarLabel,
        url: `${SITE_URL}/${entry.data.pillar === "asset" ? "asset-protection" : entry.data.pillar}`,
      });
      items.push({
        name: entry.data.title,
        url: `${SITE_URL}/${slug}`,
      });
      break;
    case "comparison":
      items.push({
        name: "Comparisons",
        url: `${SITE_URL}/compare-packages`,
      });
      items.push({
        name: entry.data.title,
        url: `${SITE_URL}/${slug}`,
      });
      break;
    case "state":
      items.push({
        name: entry.data.name,
        url: `${SITE_URL}/${slug}`,
      });
      break;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ------------------------------------------------
   Page Component
   ------------------------------------------------ */
export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const flatSlug = slug.join("/");
  const entry = getPageBySlug(flatSlug);

  if (!entry) notFound();

  const breadcrumb = <BreadcrumbSchema entry={entry} slug={flatSlug} />;

  switch (entry.type) {
    case "cluster":
      return (
        <>
          {breadcrumb}
          <ClusterPageTemplate cluster={entry.data} />
        </>
      );

    case "comparison":
      return (
        <>
          {breadcrumb}
          <ComparisonPageTemplate comparison={entry.data} />
        </>
      );

    case "state":
      return (
        <>
          {breadcrumb}
          <StatePageTemplate state={entry.data} />
        </>
      );
  }
}
