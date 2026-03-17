import { clusterPages } from "@/data/clusters";
import { comparisonPages } from "@/data/comparisons";
import { stateHubs } from "@/data/states";
import type { ClusterContent, ComparisonPage, StateHub } from "@/lib/types";

/* ------------------------------------------------
   Legacy package slug mapping (kept for reference)
   Packages now live at /gold, /silver, /bronze
   Old URLs redirect via next.config.ts
   ------------------------------------------------ */
export const PACKAGE_SLUG_MAP: Record<string, string> = {
  "wyoming-gold": "wyoming-private-incorporation",
  "wyoming-silver": "wyoming-incorporation",
  "nevada-gold": "nevada-private-incorporation",
  "nevada-silver": "nevada-incorporation",
  "nevada-bronze": "nevada-basic-incorporation",
  "california-private": "california-private-incorporation",
  "florida-private": "florida-private-incorporation",
  "shelf-companies": "shelf-company-packages",
};

/* Reverse map: flat slug → package id */
const REVERSE_PACKAGE_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(PACKAGE_SLUG_MAP).map(([id, slug]) => [slug, id]),
);

/* ------------------------------------------------
   Page type discriminated union
   ------------------------------------------------ */
export type PageEntry =
  | { type: "cluster"; data: ClusterContent }
  | { type: "comparison"; data: ComparisonPage }
  | { type: "state"; data: StateHub };

/* ------------------------------------------------
   Build lookup map
   ------------------------------------------------ */
function buildRegistry(): Map<string, PageEntry> {
  const map = new Map<string, PageEntry>();

  // Clusters — use slug directly (already unique after renaming wyoming/nevada)
  for (const cluster of clusterPages) {
    map.set(cluster.slug, { type: "cluster", data: cluster });
  }

  // Comparisons
  for (const comparison of comparisonPages) {
    map.set(comparison.slug, { type: "comparison", data: comparison });
  }

  // Packages no longer in catch-all registry — they live at /gold, /silver, /bronze
  // Old package slugs redirect via next.config.ts

  // States — use slug directly
  for (const state of stateHubs) {
    map.set(state.slug, { type: "state", data: state });
  }

  return map;
}

let _registry: Map<string, PageEntry> | null = null;

function getRegistry(): Map<string, PageEntry> {
  if (!_registry) {
    _registry = buildRegistry();
  }
  return _registry;
}

/* ------------------------------------------------
   Public API
   ------------------------------------------------ */

/** Look up a page by its flat slug */
export function getPageBySlug(slug: string): PageEntry | undefined {
  return getRegistry().get(slug);
}

/** Get all slugs for static generation */
export function getAllSlugs(): string[] {
  return Array.from(getRegistry().keys());
}

/** Resolve a package id to its flat slug */
export function getPackageFlatSlug(packageId: string): string {
  return PACKAGE_SLUG_MAP[packageId] ?? packageId;
}

/** Resolve a flat slug back to a package id */
export function getPackageIdFromSlug(flatSlug: string): string | undefined {
  return REVERSE_PACKAGE_MAP[flatSlug];
}

/* ------------------------------------------------
   Legacy package ID → Tier URL resolver
   Used by cluster/comparison templates that still
   reference package IDs in their data files
   ------------------------------------------------ */
const LEGACY_PACKAGE_TO_TIER: Record<string, string> = {
  "wyoming-gold": "/gold?state=wyoming",
  "wyoming-silver": "/silver?state=wyoming",
  "nevada-gold": "/gold?state=nevada",
  "nevada-silver": "/silver?state=nevada",
  "nevada-bronze": "/bronze?state=nevada",
  "california-private": "/gold?state=california",
  "florida-private": "/gold?state=florida",
  "shelf-companies": "/shelf-companies",
};

/** Resolve a legacy package ID to its new tier URL */
export function resolveLegacyPackageToTierUrl(packageId: string): string {
  return LEGACY_PACKAGE_TO_TIER[packageId] ?? `/gold`;
}

/** Get the tier slug from a legacy package ID */
export function getLegacyPackageTierSlug(
  packageId: string,
): string | undefined {
  const url = LEGACY_PACKAGE_TO_TIER[packageId];
  if (!url) return undefined;
  return url.split("?")[0].replace("/", "");
}

/** Get the state from a legacy package ID */
export function getLegacyPackageState(packageId: string): string | undefined {
  const url = LEGACY_PACKAGE_TO_TIER[packageId];
  if (!url) return undefined;
  const match = url.match(/state=(\w+)/);
  return match
    ? match[1].charAt(0).toUpperCase() + match[1].slice(1)
    : undefined;
}
