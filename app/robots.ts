import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://cashflow.olzytech.com/sitemap.xml',
    host: 'https://cashflow.olzytech.com',
  };
}
