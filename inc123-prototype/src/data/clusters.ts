import type { ClusterContent } from "@/lib/types";

import { PRIVACY_EXPANSIONS } from "./cluster-expansions/privacy";
import { ASSET_EXPANSIONS } from "./cluster-expansions/asset";
import { FORMATION_EXPANSIONS } from "./cluster-expansions/formation";
import { COMPLIANCE_EXPANSIONS } from "./cluster-expansions/compliance";
import {
  ANONYMOUS_CORPORATION,
  DOMESTICATION,
  ENTITY_TAX_GUIDE,
  NEVADA_PRIVACY,
  NEVADA_REGISTERED_AGENT,
  NOMINEE_SERVICES,
  SERIES_LLC,
  TAX_OBLIGATIONS,
  WYOMING_PRIVACY,
  WYOMING_REGISTERED_AGENT,
} from "./cluster-expansions/unchanged";

/* ------------------------------------------------
   Privacy expansions lookup (by slug)
   ------------------------------------------------ */
const privacyBySlug = new Map(
  PRIVACY_EXPANSIONS.map((c) => [c.slug, c] as const),
);
const assetBySlug = new Map(ASSET_EXPANSIONS.map((c) => [c.slug, c] as const));
const formationBySlug = new Map(
  FORMATION_EXPANSIONS.map((c) => [c.slug, c] as const),
);
const complianceBySlug = new Map(
  COMPLIANCE_EXPANSIONS.map((c) => [c.slug, c] as const),
);

function priv(slug: string): ClusterContent {
  const c = privacyBySlug.get(slug);
  if (!c) throw new Error(`Missing privacy cluster: ${slug}`);
  return c;
}
function asset(slug: string): ClusterContent {
  const c = assetBySlug.get(slug);
  if (!c) throw new Error(`Missing asset cluster: ${slug}`);
  return c;
}
function form(slug: string): ClusterContent {
  const c = formationBySlug.get(slug);
  if (!c) throw new Error(`Missing formation cluster: ${slug}`);
  return c;
}
function comp(slug: string): ClusterContent {
  const c = complianceBySlug.get(slug);
  if (!c) throw new Error(`Missing compliance cluster: ${slug}`);
  return c;
}

/* ------------------------------------------------
   Ordered cluster list — source of truth for the
   catch-all router and all pillar navigation.
   ------------------------------------------------ */
export const clusterPages: ClusterContent[] = [
  // ==================== PRIVACY PILLAR ====================
  priv("anonymous-llc"),
  NOMINEE_SERVICES,
  priv("private-incorporation"),
  priv("offshore-privacy"),
  ANONYMOUS_CORPORATION,
  priv("california-private-incorporation"),
  priv("florida-private-incorporation"),

  // ==================== ASSET PROTECTION PILLAR ====================
  asset("charging-order-protection"),
  asset("wyoming-asset-protection"),
  asset("nevada-asset-protection"),
  asset("investment-holding-llc"),
  asset("real-estate-asset-protection"),
  asset("llc-vs-living-trust"),

  // ==================== FORMATION PILLAR ====================
  form("wyoming-llc"),
  form("nevada-llc"),
  form("wyoming-corporation"),
  form("nevada-corporation"),
  form("shelf-companies"),
  SERIES_LLC,
  form("llc-vs-scorp-vs-ccorp-tax"),
  ENTITY_TAX_GUIDE,

  // ==================== COMPLIANCE PILLAR ====================
  comp("registered-agent"),
  comp("annual-reports"),
  comp("corporate-minutes"),
  comp("virtual-office"),
  comp("foreign-registration"),
  comp("second-tier-state-filings"),
  comp("shares-corporate-records"),
  WYOMING_REGISTERED_AGENT,
  NEVADA_REGISTERED_AGENT,
  DOMESTICATION,
  TAX_OBLIGATIONS,

  // ==================== ADDITIONAL PRIVACY (state-specific) ====================
  WYOMING_PRIVACY,
  NEVADA_PRIVACY,
];
