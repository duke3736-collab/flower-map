export const dynamic = "force-static";

import { MetadataRoute } from "next";
import { FLOWERS } from "@/lib/flowers";
import { SPOTS } from "@/lib/spots";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://flower.weknews.com";

  // 정적 경로
  const routes = ["", "/map", "/flowers", "/calendar", "/courses", "/guide"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: route === "" ? 1 : route === "/map" ? 0.9 : 0.8,
    })
  );

  // 동적 꽃 상세 페이지
  const flowerRoutes = FLOWERS.map((flower) => ({
    url: `${baseUrl}/flowers/${flower.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 동적 명소 상세 페이지
  const spotRoutes = SPOTS.map((spot) => ({
    url: `${baseUrl}/spots/${spot.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...routes, ...flowerRoutes, ...spotRoutes];
}
