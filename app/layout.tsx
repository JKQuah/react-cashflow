import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/i18n';
import { ThemeProvider } from '@/lib/theme';

const BASE_URL = 'https://cashflow.olzytech.com';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8FAFC' },
    { media: '(prefers-color-scheme: dark)', color: '#111111' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Cashflow | Not a tracking app',
    template: '%s — Cashflow',
  },
  description:
    'Track expenses by credit or debit, get reminded before your credit card cutoff date, and see your real cashflow by payday cycle. No registration needed. All data stays on your device. Free on iOS and Android.',
  keywords: [
    'cashflow app malaysia',
    'payday cycle finance',
    'personal finance malaysia',
    'credit card cutoff reminder',
    'expense tracker malaysia',
    'budget tracker malaysia',
    'money management app',
    'finance app kuala lumpur',
    'income expense tracker',
    'credit debit tracking',
    'monthly cashflow',
    'finance app ios android',
    'olzytech',
    'aplikasi kewangan malaysia',
  ],
  authors: [{ name: 'Olzytech Solutions', url: BASE_URL }],
  creator: 'Olzytech Solutions',
  publisher: 'Olzytech Solutions',
  category: 'Finance',
  classification: 'Personal Finance Application',

  alternates: {
    canonical: BASE_URL,
    languages: {
      'en-MY': BASE_URL,
      'en-SG': BASE_URL,
      'zh-MY': BASE_URL,
      'x-default': BASE_URL,
    },
  },

  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'Cashflow',
    locale: 'en_MY',
    alternateLocale: ['zh_MY', 'en_SG'],
    title: 'Cashflow — Not a tracking app. A cash flow improvement system.',
    description:
      'Payday cycle cashflow, credit card cutoff reminders, and credit vs debit tracking. All data stays on your device. Free on iOS and Android.',
  },

  twitter: {
    card: 'summary_large_image',
    site: '@olzytech',
    creator: '@olzytech',
    title: 'Cashflow — Payday Cycle Finance App',
    description:
      'See your real cashflow by payday cycle. Track credit and debit expenses. Cutoff date reminders. Free, no registration needed.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    apple: '/logo.png',
  },

  manifest: '/manifest.webmanifest',

  appLinks: {
    ios: {
      url: BASE_URL,
      app_store_id: '',
    },
    android: {
      package: 'com.olzytech.cashflow',
      app_name: 'Cashflow',
    },
  },

  other: {
    // Geographic targeting — Malaysia / Kuala Lumpur
    'geo.region': 'MY-14',
    'geo.placename': 'Kuala Lumpur, Malaysia',
    'geo.position': '3.1390;101.6869',
    'ICBM': '3.1390, 101.6869',

    // App store hints
    'apple-itunes-app': 'app-id=, app-argument=https://cashflow.olzytech.com',

    // Content language
    'content-language': 'en-MY',

    // Rating
    'rating': 'general',

    // Revisit
    'revisit-after': '7 days',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-MY" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Noto+Sans+SC:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Preload logo */}
        <link rel="preload" href="/logo.png" as="image" />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
