import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://next-theme-switcher.elvindang.info",
      lastModified: new Date(),
    },
    {
      url: "https://next-theme-switcher.elvindang.info/getting-started",
      lastModified: new Date(),
    },
    {
      url: "https://next-theme-switcher.elvindang.info/theme-switcher",
      lastModified: new Date(),
    },
  ];
}
