import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy location-first package URLs → new tier-first URLs
      {
        source: "/wyoming-private-incorporation",
        destination: "/gold?state=wyoming",
        permanent: true,
      },
      {
        source: "/wyoming-incorporation",
        destination: "/silver?state=wyoming",
        permanent: true,
      },
      {
        source: "/nevada-private-incorporation",
        destination: "/gold?state=nevada",
        permanent: true,
      },
      {
        source: "/nevada-incorporation",
        destination: "/silver?state=nevada",
        permanent: true,
      },
      {
        source: "/nevada-basic-incorporation",
        destination: "/bronze?state=nevada",
        permanent: true,
      },
      {
        source: "/california-private-incorporation",
        destination: "/gold?state=california",
        permanent: true,
      },
      {
        source: "/florida-private-incorporation",
        destination: "/gold?state=florida",
        permanent: true,
      },
      {
        source: "/shelf-company-packages",
        destination: "/shelf-companies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
