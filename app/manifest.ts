import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Cashflow — Payday Cycle Finance App',
    short_name: 'Cashflow',
    description:
      'Track expenses by credit or debit, get reminded before your card cutoff date, and see your real cashflow by payday cycle.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8FAFC',
    theme_color: '#C0F158',
    orientation: 'portrait',
    categories: ['finance', 'productivity'],
    lang: 'en-MY',
    icons: [
      { src: '/logo.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/logo.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
