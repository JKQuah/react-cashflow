import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AppShowcase from '@/components/AppShowcase';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Stats from '@/components/Stats';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const BASE_URL = 'https://cashflow.olzytech.com';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Cashflow',
      description: 'Payday cycle finance app for Malaysia. Track expenses by credit or debit, get credit card cutoff reminders, and see your real cashflow cycle.',
      publisher: { '@id': `${BASE_URL}/#organization` },
      inLanguage: ['en-MY', 'zh-MY'],
    },
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'Olzytech Solutions',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
      email: 'support@olzytech.com',
      telephone: '+60199692350',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kuala Lumpur',
        addressRegion: 'Wilayah Persekutuan',
        addressCountry: 'MY',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'support@olzytech.com',
        availableLanguage: ['English', 'Chinese'],
      },
      sameAs: [
        'https://wa.me/60199692350',
      ],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${BASE_URL}/#app`,
      name: 'Cashflow',
      alternateName: 'Cashflow Finance App',
      applicationCategory: 'FinanceApplication',
      applicationSubCategory: 'Personal Finance',
      operatingSystem: 'iOS 15+, Android 8+',
      url: BASE_URL,
      description:
        'Track expenses by credit or debit, get reminded before your credit card cutoff date, and see your real cashflow by payday cycle — not just calendar months. No registration needed. All data stays on your device.',
      featureList: [
        'Payday cycle cashflow view',
        'Credit card cutoff date reminders',
        'Credit and debit expense tracking',
        'Next cycle outlook',
        'Recurring bills tracker',
        'Financial goal planner',
        'No registration required',
        'All data stored on device',
      ],
      screenshot: `${BASE_URL}/opengraph-image.png`,
      softwareVersion: '1.0',
      releaseNotes: 'Initial release with payday cycle cashflow, cutoff reminders, and credit/debit tracking.',
      author: { '@id': `${BASE_URL}/#organization` },
      publisher: { '@id': `${BASE_URL}/#organization` },
      offers: [
        {
          '@type': 'Offer',
          name: 'Free',
          price: '0',
          priceCurrency: 'MYR',
          description: 'Up to 5 commitments, unlimited expense records, basic cashflow chart.',
        },
        {
          '@type': 'Offer',
          name: 'Pro',
          price: '14.90',
          priceCurrency: 'MYR',
          description: 'Unlimited commitments, advanced insights, bill reminders, full transaction history.',
          eligibleRegion: [
            { '@type': 'Country', name: 'Malaysia' },
            { '@type': 'Country', name: 'Singapore' },
          ],
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '500',
      },
      inLanguage: ['en-MY', 'zh-MY'],
      countriesSupported: 'MY, SG',
    },
    {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: 'Cashflow — Payday Cycle Finance App for Malaysia',
      isPartOf: { '@id': `${BASE_URL}/#website` },
      about: { '@id': `${BASE_URL}/#app` },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/opengraph-image.png`,
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        ],
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2'],
      },
      inLanguage: 'en-MY',
    },
    {
      '@type': 'FAQPage',
      '@id': `${BASE_URL}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What platforms is Cashflow available on?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cashflow is available on both iOS (App Store) and Android (Google Play).',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a payday cycle and why does it matter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A payday cycle runs from one payday to the next. For example, the 25th of one month to the 24th of the next. This gives you a more accurate picture of your real cashflow than a Jan 1 to 31 calendar view, because that is how your actual money moves.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does credit card cutoff tracking work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When you log an expense as credit, Cashflow tracks it against your card statement cutoff date. You will get a reminder before the cutoff so you always know what you owe in the current billing cycle.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my financial data secure?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All your data is stored entirely on your own device. We do not have a server or database that holds your information. Your data never leaves your phone unless you choose to export it yourself.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Cashflow support multiple currencies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not yet. Cashflow currently supports a single currency per account. Multi-currency support may be added in a future update.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the Pro package work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pro is a one-time purchase at RM 14.90. New users get a 7 day free trial with full Pro features, no credit card required to start. All purchases are handled by the Apple App Store or Google Play Store.',
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026'),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <AppShowcase />
        <Features />
        <Stats />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
