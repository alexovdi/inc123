import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dev/", "/checkout/", "/login"],
    },
    sitemap: "https://incorporate123.co/sitemap.xml",
  };
}
