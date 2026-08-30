import type { MetadataRoute } from 'next';

const BASE = 'https://cashflow.olzytech.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date('2026-09-12'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE}/privacy`,
      lastModified: new Date('2026-09-12'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE}/terms`,
      lastModified: new Date('2026-09-12'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
