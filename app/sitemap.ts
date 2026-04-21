import type { MetadataRoute } from 'next'
import { seoLastModified, seoRoutes, siteConfig } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  return seoRoutes.map((route) => ({
    url: `${siteConfig.baseUrl}${route.path}`,
    lastModified: seoLastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
