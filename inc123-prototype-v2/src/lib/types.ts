/* ═══════════════════════════════════════════════════════════════════════════
   Incorporate123 v2 — TypeScript Interfaces
   ═══════════════════════════════════════════════════════════════════════════ */

// ── Content Types (from markdown frontmatter) ──

export type PageType =
  | "utility"
  | "pillar-hub"
  | "cluster"
  | "comparison"
  | "package"
  | "state-hub"
  | "offshore";

export type PillarName =
  | "privacy"
  | "asset-protection"
  | "formation"
  | "compliance";

export type Priority = "P1" | "P2" | "P3";

export interface ContentFrontmatter {
  title: string;
  description: string;
  slug: string;
  pillar: PillarName | null;
  type: PageType;
  priority: Priority;
  status: string;
  disposition: string;
  source_urls?: string[];
  seo: {
    primary_keyword: string;
    secondary_keywords?: string[];
  };
  related_packages?: string[];
  faq_count?: number;
  word_count?: number;
}

export interface ContentPage {
  frontmatter: ContentFrontmatter;
  body: string;
  slug: string;
}

// ── Navigation ──

export interface NavCluster {
  title: string;
  href: string;
  description: string;
}

export interface NavPillar {
  pillar: PillarName;
  label: string;
  description: string;
  href: string;
  clusters: NavCluster[];
  featuredLink?: {
    title: string;
    href: string;
    description: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavPillar[];
}

export interface SiteNavigation {
  phone: string;
  utility: { label: string; href: string; icon?: string }[];
  main: NavItem[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterNavigation {
  pillars: FooterSection[];
  packages: FooterLink[];
  utility: FooterLink[];
  legal: FooterLink[];
  company: {
    name: string;
    address: string;
    phone: string;
    email: string;
  };
}

// ── Package Types ──

export type TierLevel = "bronze" | "silver" | "gold" | "private" | "shelf";
export type EntityType = "llc" | "corp";

export interface PackagePrice {
  formation: number;
  renewal: number;
}

export interface PackageFeature {
  name: string;
  tooltip?: string;
  status: "included" | "not-included" | "add-on";
}

export interface PackageAddOn {
  id: string;
  name: string;
  price: number;
  description: string;
  tooltip?: string;
}

export interface PackageTier {
  id: string;
  name: string;
  tier: TierLevel;
  state: string;
  prices: {
    llc: PackagePrice;
    corp: PackagePrice;
  };
  description: string;
  badge?: string;
  highlighted?: boolean;
  features: PackageFeature[];
  addOns: PackageAddOn[];
}

// ── Testimonial ──

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  location: string;
  rating: number;
}

// ── FAQ ──

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  title: string;
  items: FAQItem[];
}

// ── Section Variant ──

export type SectionVariant = "dark" | "cream" | "cream-alt";
