import { clusterPages } from "@/data/clusters";
import { comparisonPages } from "@/data/comparisons";
import { packages } from "@/data/packages";
import { stateHubs } from "@/data/states";
import type {
  ClusterContent,
  ComparisonPage,
  PackageTier,
  StateHub,
} from "@/lib/types";

/* ------------------------------------------------
   Package slug mapping (old id → new flat slug)
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
  | { type: "package"; data: PackageTier }
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

  // Packages — use flatSlug
  for (const pkg of packages) {
    const flatSlug = pkg.flatSlug ?? PACKAGE_SLUG_MAP[pkg.id];
    if (flatSlug) {
      map.set(flatSlug, { type: "package", data: pkg });
    }
  }

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
