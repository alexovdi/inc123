export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "privacy" | "asset" | "formation" | "compliance";
  categoryLabel: string;
  date: string; // ISO date
  readTime: string;
  href: string; // links to existing cluster page
}

export const blogPosts: BlogPost[] = [
  {
    slug: "anonymous-llcs-future-of-business-privacy",
    title: "Why Anonymous LLCs Are the Future of Business Privacy",
    excerpt:
      "With data breaches and public records scrapers on the rise, anonymous LLCs have shifted from a niche strategy to a mainstream necessity. Here's why business owners are choosing anonymity — and how to do it right.",
    category: "privacy",
    categoryLabel: "Business Privacy",
    date: "2025-11-15",
    readTime: "5 min read",
    href: "/anonymous-llc",
  },
  {
    slug: "year-round-vs-day-of-nominee-services",
    title:
      "Year-Round vs. Day-Of Nominee Services: What's the Real Difference?",
    excerpt:
      "Most formation companies swap out nominees after filing day, leaving your name on the next annual report. We explain why year-round nominee coverage is the only way to maintain genuine privacy — and what to watch out for.",
    category: "privacy",
    categoryLabel: "Business Privacy",
    date: "2025-10-28",
    readTime: "6 min read",
    href: "/nominee-services",
  },
  {
    slug: "charging-order-protection-overlooked-asset-shield",
    title: "Charging Order Protection: The Most Overlooked Asset Shield",
    excerpt:
      "Charging order protection prevents creditors from seizing your LLC assets — but not every state offers the same level of protection. Learn why Wyoming's single-member LLC protections set the gold standard.",
    category: "asset",
    categoryLabel: "Asset Protection",
    date: "2025-10-12",
    readTime: "7 min read",
    href: "/charging-order-protection",
  },
  {
    slug: "wyoming-vs-nevada-definitive-llc-comparison",
    title: "Wyoming vs. Nevada: The Definitive LLC Comparison for 2025",
    excerpt:
      "Both states offer zero income tax and strong privacy laws, but key differences in fees, franchise taxes, and asset protection statutes make one a clear winner for most business owners. We break down every detail.",
    category: "formation",
    categoryLabel: "Company Formation",
    date: "2025-09-20",
    readTime: "8 min read",
    href: "/wyoming-vs-nevada-llc",
  },
  {
    slug: "real-estate-investors-need-llc",
    title: "Why Real Estate Investors Need an LLC (Not Just Insurance)",
    excerpt:
      "Insurance pays claims — it doesn't stop lawsuits. An LLC creates a legal firewall between your rental properties and personal assets. Here's how to structure real estate holdings for maximum protection.",
    category: "asset",
    categoryLabel: "Asset Protection",
    date: "2025-09-05",
    readTime: "6 min read",
    href: "/real-estate-asset-protection",
  },
  {
    slug: "shelf-companies-explained",
    title: "Shelf Companies Explained: When Age Matters",
    excerpt:
      "A shelf company is a pre-formed, aged entity available for immediate purchase. They're used by businesses that need an established corporate history for contracts, financing, or credibility. Here's what to know before buying one.",
    category: "formation",
    categoryLabel: "Company Formation",
    date: "2025-08-02",
    readTime: "5 min read",
    href: "/shelf-companies",
  },
  {
    slug: "true-cost-of-free-llc-formation",
    title: "The True Cost of 'Free' LLC Formation Services",
    excerpt:
      "Free formation sounds great — until you see the upsells, the missing registered agent, and the annual fees buried in the fine print. We compare what 'free' really costs versus an all-inclusive package with no surprises.",
    category: "formation",
    categoryLabel: "Company Formation",
    date: "2025-07-14",
    readTime: "7 min read",
    href: "/incorporate123-vs-competitors",
  },
];
