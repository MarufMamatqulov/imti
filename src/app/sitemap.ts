import type { MetadataRoute } from "next";
import { NEWS } from "@/data/news";
import { SITE } from "@/data/site";

const staticRoutes = [
  "",
  "/institut",
  "/institut/rahbariyat",
  "/institut/tuzilma",
  "/institut/vakansiya",
  "/faoliyat",
  "/ilmiy-faoliyat",
  "/yangiliklar",
  "/nashrlar",
  "/hujjatlar",
  "/materiallar",
  "/galereya",
  "/aloqa",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.domain;

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));

  const newsEntries: MetadataRoute.Sitemap = NEWS.map((item) => ({
    url: `${base}/yangiliklar/${item.slug}`,
    lastModified: new Date(item.date),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...newsEntries];
}
