import { notFound } from "next/navigation";
import { packages } from "@/data/packages";
import { PackagePageClient } from "./PackagePageClient";

/* ------------------------------------------------
   Static params — pre-render all 8 package slugs
   ------------------------------------------------ */
export function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.id }));
}

/* ------------------------------------------------
   Metadata
   ------------------------------------------------ */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = packages.find((p) => p.id === slug);
  if (!pkg) return {};

  return {
    title: `${pkg.name} — ${pkg.state} Formation | Incorporate123`,
    description: pkg.description,
  };
}

/* ------------------------------------------------
   Server Page — data lookup, delegates to client
   ------------------------------------------------ */
export default async function PackagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = packages.find((p) => p.id === slug);

  if (!pkg) {
    notFound();
  }

  // Find sibling packages in the same state for the pricing grid comparison
  const siblingPackages = packages.filter(
    (p) => p.state === pkg.state && p.id !== pkg.id
  );

  // Find "also consider" packages from other states or tiers
  const alsoConsider = packages
    .filter((p) => p.id !== pkg.id)
    .slice(0, 3);

  return (
    <PackagePageClient
      pkg={pkg}
      siblingPackages={siblingPackages}
      alsoConsider={alsoConsider}
    />
  );
}
