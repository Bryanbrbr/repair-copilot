import type { MetadataRoute } from "next";
import { getAllApplianceSlugs } from "@/lib/appliances";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://repair-copilot-app.vercel.app";
  const now = new Date();

  // Pages statiques
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/generateur`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  // Pages dynamiques — guides par appareil
  const guidePages: MetadataRoute.Sitemap = getAllApplianceSlugs().map(
    (slug) => ({
      url: `${baseUrl}/guide/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  return [...staticPages, ...guidePages];
}
