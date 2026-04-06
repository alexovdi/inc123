import { useParams } from "react-router-dom";
import { getPageBySlug, type PageEntry } from "@/lib/slug-registry";
import { pillarLabelMap } from "@/design-system/utils/pillarMaps";
import { ClusterPageTemplate } from "./ClusterPageTemplate";
import { ComparisonPageTemplate } from "./ComparisonPageTemplate";
import { StatePageTemplate } from "./StatePageTemplate";
import NotFound from "../not-found";

/* ------------------------------------------------
   Base URL
   ------------------------------------------------ */
const SITE_URL = "https://incorporate123.co";

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
export default function CatchAllPage() {
  const params = useParams();
  const flatSlug = params["*"] ?? "";
  const entry = getPageBySlug(flatSlug);

  if (!entry) return <NotFound />;

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
