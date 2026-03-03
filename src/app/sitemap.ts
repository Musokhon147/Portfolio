import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "uz", "ru"];
  const projectSlugs = ["ecommerce", "vr-simulator", "smart-home"];

  const pages: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    pages.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    });

    for (const slug of projectSlugs) {
      pages.push({
        url: `${BASE_URL}/${locale}/projects/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return pages;
}
