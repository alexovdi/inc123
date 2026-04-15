/* ------------------------------------------------
   ProductSchema
   Emits Product JSON-LD for package pages so search engines
   can surface rich snippets (price, availability) in results.
   ------------------------------------------------ */

export interface ProductSchemaProps {
  name: string;
  description: string;
  /** Price in USD, numeric */
  price: number;
  /** Canonical URL for the package page */
  url?: string;
  /** Seller organization name */
  sellerName?: string;
}

function ProductSchema({
  name,
  description,
  price,
  url,
  sellerName = "Incorporate123",
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    ...(url ? { url } : {}),
    brand: {
      "@type": "Brand",
      name: sellerName,
    },
    offers: {
      "@type": "Offer",
      price: price.toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: sellerName,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

ProductSchema.displayName = "ProductSchema";

export { ProductSchema };
