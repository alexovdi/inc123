import { offshoreData } from "@/data/offshore";
import { WhereToGoNext } from "@/design-system/components/WhereToGoNext";
import { Button } from "@/design-system/primitives/Button";
import { Icon } from "@/design-system/primitives/Icon";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Offshore Privacy & Asset Protection — International Jurisdictions | Incorporate123",
  description:
    "Explore offshore entity formation in Nevis, Belize, Cook Islands, Panama, and BVI. International structures that complement domestic Wyoming and Nevada formations for maximum privacy and asset protection.",
};

const iconMap: Record<string, string> = {
  nevis: "Shield",
  belize: "Lock",
  "cook-islands": "Trophy",
  panama: "Globe",
  "british-virgin-islands": "TrendingUp",
};

export default function OffshorePage() {
  const { hub, jurisdictions } = offshoreData;

  return (
    <main>
      {/* ------------------------------------------------
          Hero
          ------------------------------------------------ */}
      <section className="bg-primary text-white py-section-y">
        <div className="max-w-content mx-auto px-container-x">
          <p className="text-body-sm font-medium text-white/70 uppercase tracking-wider mb-3">
            International Services
          </p>
          <h1 className="text-display font-display font-bold mb-4">
            {hub.headline}
          </h1>
          <p className="text-heading-sm font-normal text-white/80 mb-6 max-w-[48rem]">
            {hub.subheadline}
          </p>
          <p className="text-body text-white/70 max-w-[48rem]">
            {hub.description}
          </p>
        </div>
      </section>

      {/* ------------------------------------------------
          Jurisdiction Grid
          ------------------------------------------------ */}
      <section className="py-section-y">
        <div className="max-w-content mx-auto px-container-x">
          <h2 className="text-heading font-display font-semibold text-foreground mb-2">
            Offshore Jurisdictions
          </h2>
          <p className="text-body text-muted mb-8">
            Each jurisdiction offers distinct advantages. Select a jurisdiction
            to learn about its legal framework, costs, and how it integrates
            with domestic formations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jurisdictions.map((j) => (
              <Link
                key={j.slug}
                href={`/offshore/${j.slug}`}
                className="group block"
              >
                <div className="h-full rounded-card border border-border bg-surface shadow-card p-6 transition-shadow hover:shadow-card-hover">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon
                        name={iconMap[j.slug] ?? "Globe"}
                        size="md"
                        className="text-primary"
                      />
                    </div>
                    <div>
                      <h3 className="text-body font-semibold text-foreground group-hover:text-secondary transition-colors">
                        {j.name}
                      </h3>
                      <p className="text-caption text-muted">
                        {j.advantages.length} key advantages
                      </p>
                    </div>
                  </div>
                  <p className="text-body-sm text-muted line-clamp-3">
                    {j.description.slice(0, 180)}...
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-body-sm font-medium text-secondary">
                    Learn more
                    <Icon
                      name="ArrowRight"
                      size="sm"
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          Domestic Complement Note
          ------------------------------------------------ */}
      <section className="py-section-y bg-background">
        <div className="max-w-content mx-auto px-container-x">
          <div className="rounded-xl border border-border bg-surface p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Icon name="Info" size="md" className="text-accent" />
              </div>
              <div>
                <h2 className="text-heading-sm font-display font-semibold text-foreground mb-2">
                  Offshore Complements Domestic — It Doesn&apos;t Replace It
                </h2>
                <p className="text-body text-muted mb-4">
                  Every offshore structure we build starts with a domestic
                  foundation. Your Wyoming or Nevada LLC provides the U.S.
                  operating entity, charging order protection, and privacy
                  through nominee services. The offshore layer adds
                  international jurisdictional barriers that make the overall
                  structure significantly harder to penetrate. We never
                  recommend offshore entities in isolation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="primary" size="md" asChild>
                    <Link href="/contact">Schedule Offshore Consultation</Link>
                  </Button>
                  <Button variant="secondary" size="md" asChild>
                    <Link href="/gold?state=wyoming">View Gold Package</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          CTA
          ------------------------------------------------ */}
      <section className="py-section-y">
        <div className="max-w-content mx-auto px-container-x">
          <div className="text-center">
            <h2 className="text-heading font-display font-semibold text-foreground mb-3">
              Ready to Explore Offshore Options?
            </h2>
            <p className="text-body text-muted mb-6 max-w-[36rem] mx-auto">
              Offshore structures require careful planning and proper legal
              guidance. Contact us for a confidential consultation to determine
              which jurisdiction fits your needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="cta" size="lg" asChild>
                <Link href="/contact">Contact for Consultation</Link>
              </Button>
              <p className="text-body-sm text-muted">
                Or call{" "}
                <a
                  href="tel:+17753134155"
                  className="font-medium text-foreground hover:text-secondary transition-colors"
                >
                  (775) 313-4155
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          Where to Go Next
          ------------------------------------------------ */}
      <section className="py-section-y bg-background">
        <div className="max-w-content mx-auto px-container-x">
          <WhereToGoNext
            suggestions={[
              {
                title: "Gold Package",
                description:
                  "The domestic foundation for any offshore structure — year-round nominees, offshore records, and full privacy.",
                href: "/gold?state=wyoming",
                pillar: "privacy",
              },
              {
                title: "Asset Protection Pillar",
                description:
                  "Charging order protection, holding structures, and multi-entity strategies for domestic assets.",
                href: "/asset-protection",
                pillar: "asset",
              },
              {
                title: "Business Privacy Pillar",
                description:
                  "Anonymous LLCs, nominee services, and privacy-first formation in Wyoming and Nevada.",
                href: "/privacy",
                pillar: "privacy",
              },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
