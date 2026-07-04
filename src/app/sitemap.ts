import type { MetadataRoute } from "next";
import { medications } from "@/data/medications";
import { legalSlugs } from "@/data/legal";

const baseUrl = "https://carmamedspas.com";

type Freq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
type Route = { path: string; changeFrequency: Freq; priority: number };

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: Route[] = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/how-it-works", changeFrequency: "monthly", priority: 0.8 },
    { path: "/weight-loss", changeFrequency: "monthly", priority: 0.8 },
    { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/our-physicians", changeFrequency: "monthly", priority: 0.6 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
    { path: "/careers", changeFrequency: "monthly", priority: 0.4 },
  ];

  const medicationRoutes: Route[] = medications.map((med) => ({
    path: `/medications/${med.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const legalRoutes: Route[] = legalSlugs.map((slug) => ({
    path: `/legal/${slug}`,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [...staticRoutes, ...medicationRoutes, ...legalRoutes].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
