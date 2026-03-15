import { notFound } from "next/navigation";
import { getPageBySlug, getAllSlugs } from "@/lib/slug-registry";
import { ClusterPageTemplate } from "./ClusterPageTemplate";
import { ComparisonPageTemplate } from "./ComparisonPageTemplate";
import { StatePageTemplate } from "./StatePageTemplate";
import { PackagePageClient } from "./PackagePageClient";
import { packages } from "@/data/packages";
import type { Metadata } from "next";

/* ------------------------------------------------
   Pillar label map
   ------------------------------------------------ */
const pillarLabelMap: Record<string, string> = {
  privacy: "Business Privacy",
  asset: "Asset Protection",
  formation: "Company Formation",
  compliance: "Compliance",
};

/* ------------------------------------------------
   Static params — all flat slugs
   ------------------------------------------------ */
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug: [slug] }));
}

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

  switch (entry.type) {
    case "cluster":
      return {
        title: `${entry.data.title} — ${pillarLabelMap[entry.data.pillar] ?? entry.data.pillarLabel} | Incorporate123`,
        description: entry.data.description,
      };
    case "comparison":
      return {
        title: `${entry.data.title} — Comparison | Incorporate123`,
        description: entry.data.description,
      };
    case "package":
      return {
        title: `${entry.data.name} — ${entry.data.state} Formation | Incorporate123`,
        description: entry.data.description,
      };
    case "state":
      return {
        title: `${entry.data.name} Business Services — LLC Formation, Privacy & Asset Protection | Incorporate123`,
        description: `Form a ${entry.data.name} LLC or Corporation with 25 years of expert support. Anonymous LLC formation, asset protection, registered agent, and ongoing compliance. All-inclusive packages.`,
      };
  }
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

  switch (entry.type) {
    case "cluster":
      return <ClusterPageTemplate cluster={entry.data} />;

    case "comparison":
      return <ComparisonPageTemplate comparison={entry.data} />;

    case "package": {
      const pkg = entry.data;
      const siblingPackages = packages.filter(
        (p) => p.state === pkg.state && p.id !== pkg.id,
      );
      const alsoConsider = packages.filter((p) => p.id !== pkg.id).slice(0, 3);
      return (
        <PackagePageClient
          pkg={pkg}
          siblingPackages={siblingPackages}
          alsoConsider={alsoConsider}
        />
      );
    }

    case "state":
      return <StatePageTemplate state={entry.data} />;
  }
}
