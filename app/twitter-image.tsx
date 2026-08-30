import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Cashflow — Payday Cycle Finance App';
export const size = { width: 1200, height: 628 };
export const contentType = 'image/png';

// Reuse the same OG image for Twitter
export { default } from './opengraph-image';
