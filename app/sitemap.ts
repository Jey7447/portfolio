import type { MetadataRoute } from "next";

const siteUrl = "https://jesse-briska-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["careplus", "dmda", "bakery", "reputation-feedback", "juniper-table"].map(
      (slug) => ({
        url: `${siteUrl}/work/${slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      }),
    ),
  ];
}
