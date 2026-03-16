import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/slug-registry";
import { offshoreData } from "@/data/offshore";

const SITE_URL = "https://incorporate123.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  /* ------------------------------------------------
     Static routes
     ------------------------------------------------ */
  const staticRoutes: MetadataRoute.Sitemap = (
    [
      {
        url: `${SITE_URL}/`,
        changeFrequency: "weekly" as const,
        priority: 1.0,
      },
      {
        url: `${SITE_URL}/privacy`,
        changeFrequency: "monthly" as const,
        priority: 0.9,
      },
      {
        url: `${SITE_URL}/asset-protection`,
        changeFrequency: "monthly" as const,
        priority: 0.9,
      },
      {
        url: `${SITE_URL}/formation`,
        changeFrequency: "monthly" as const,
        priority: 0.9,
      },
      {
        url: `${SITE_URL}/compliance`,
        changeFrequency: "monthly" as const,
        priority: 0.9,
      },
      {
        url: `${SITE_URL}/packages`,
        changeFrequency: "weekly" as const,
        priority: 0.9,
      },
      {
        url: `${SITE_URL}/compare-packages`,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${SITE_URL}/about`,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      },
      {
        url: `${SITE_URL}/contact`,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
      {
        url: `${SITE_URL}/faq`,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
      {
        url: `${SITE_URL}/testimonials`,
        changeFrequency: "monthly" as const,
        priority: 0.5,
      },
      {
        url: `${SITE_URL}/blog`,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      },
      {
        url: `${SITE_URL}/privacy-policy`,
        changeFrequency: "yearly" as const,
        priority: 0.3,
      },
      {
        url: `${SITE_URL}/terms`,
        changeFrequency: "yearly" as const,
        priority: 0.3,
      },
      {
        url: `${SITE_URL}/offshore`,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
    ] as const
  ).map((route) => ({ ...route, lastModified: now }));

  /* ------------------------------------------------
     Dynamic routes from slug registry
     (clusters, comparisons, packages, states)
     ------------------------------------------------ */
  const dynamicRoutes: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  /* ------------------------------------------------
     Offshore jurisdiction pages
     ------------------------------------------------ */
  const offshoreRoutes: MetadataRoute.Sitemap = offshoreData.jurisdictions.map(
    (j) => ({
      url: `${SITE_URL}/offshore/${j.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }),
  );

  return [...staticRoutes, ...dynamicRoutes, ...offshoreRoutes];
}
