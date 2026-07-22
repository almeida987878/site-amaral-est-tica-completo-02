import type { MetadataRoute } from "next";
import { contact } from "@/data/contact";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: contact.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${contact.siteUrl}/privacidade`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
