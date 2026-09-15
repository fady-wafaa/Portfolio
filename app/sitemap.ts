import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: "https://fady-wafa-portfolio.oai-site.app", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }]; }
