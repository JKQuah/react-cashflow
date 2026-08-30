import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — Cashflow',
  description: 'Cashflow Privacy Policy. Your data stays on your device. No account required.',
};

const EFFECTIVE_DATE = 'September 12, 2026';
const COMPANY = 'Olzytech Solutions';
const EMAIL = 'support@olzytech.com';

export default function PrivacyPage() {
  const headingStyle: React.CSSProperties = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '22px',
    fontWeight: 700,
    color: '#0F172A',
    marginBottom: '12px',
    marginTop: '40px',
    letterSpacing: '-0.3px',
  };

  const bodyStyle: React.CSSProperties = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '15px',
    color: '#475569',
    lineHeight: 1.75,
    marginBottom: '16px',
  };

  const listStyle: React.CSSProperties = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '15px',
    color: '#475569',
    lineHeight: 1.75,
    paddingLeft: '20px',
    marginBottom: '16px',
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        background: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link
          href="/"
          style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
          aria-label="Back to home"
        >
          <span style={{
            width: '28px', height: '28px', background: '#C0F158',
            borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <TrendingUp size={15} color="#202020" strokeWidth={2.5} />
          </span>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '16px',
            fontWeight: 700,
            color: '#0F172A',
          }}>
            Cashflow
          </span>
        </Link>
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '14px',
            fontWeight: 500,
            color: '#64748B',
            textDecoration: 'none',
          }}
        >
          <ArrowLeft size={15} />
          Back
        </Link>
      </header>

      <main style={{ maxWidth: '760px', margin: '0 auto', padding: '60px 24px 100px' }}>
        {/* Title */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(30px, 5vw, 48px)',
            fontWeight: 700,
            color: '#0F172A',
            letterSpacing: '-1.5px',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}>
            Privacy Policy
          </h1>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '14px',
            color: '#94A3B8',
          }}>
            Effective Date: {EFFECTIVE_DATE} &nbsp;&middot;&nbsp; {COMPANY}
          </p>
        </div>

        {/* Intro */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '14px',
          padding: '24px',
          marginBottom: '40px',
        }}>
          <p style={{ ...bodyStyle, marginBottom: 0 }}>
            {COMPANY} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) builds the Cashflow mobile
            application. We believe your financial information is personal. This policy explains what
            information Cashflow uses, where it is stored, and how we protect it. We have written it in plain
            language so it is easy to understand.
          </p>
        </div>

        <h2 style={headingStyle}>1. No Account Required</h2>
        <p style={bodyStyle}>
          Cashflow does not require you to create an account, provide an email address, or register in any way.
          You can start using the app immediately after installing it.
        </p>

        <h2 style={headingStyle}>2. What Information Cashflow Uses</h2>
        <p style={bodyStyle}>
          During the initial setup, Cashflow asks you for three pieces of information to personalise your
          experience:
        </p>
        <ul style={listStyle}>
          <li><strong style={{ color: '#0F172A' }}>Work type</strong> &mdash; for example, employed or self-employed</li>
          <li><strong style={{ color: '#0F172A' }}>Occupation</strong> &mdash; your job or profession</li>
          <li><strong style={{ color: '#0F172A' }}>Payday date</strong> &mdash; the date you typically receive your income each month</li>
        </ul>
        <p style={bodyStyle}>
          This information is used only to set up your cashflow cycle within the app. We do not collect your
          name, email address, phone number, bank account details, card numbers, or any other personal
          identifiers.
        </p>

        <h2 style={headingStyle}>3. Where Your Data is Stored</h2>
        <p style={bodyStyle}>
          All data you enter into Cashflow &mdash; including your setup details, expenses, transactions, and
          any other records &mdash; is stored <strong style={{ color: '#0F172A' }}>entirely on your own
          device</strong>. We do not have a server or database that holds your information. Your data never
          leaves your phone unless you choose to export it yourself.
        </p>
        <p style={bodyStyle}>
          Because your data lives on your device, it is protected by your device&apos;s own security
          features (screen lock, biometrics, device encryption). We recommend keeping your device up to date
          and secured.
        </p>

        <h2 style={headingStyle}>4. Data We Do Not Collect</h2>
        <p style={bodyStyle}>We do not collect, transmit, or store any of the following:</p>
        <ul style={listStyle}>
          <li>Your name, email address, or phone number</li>
          <li>Bank account details or card numbers</li>
          <li>Location data</li>
          <li>Device identifiers or advertising IDs</li>
          <li>Usage analytics or crash reports sent to our servers</li>
          <li>Any financial records you enter into the app</li>
        </ul>

        <h2 style={headingStyle}>5. Payments and Subscriptions</h2>
        <p style={bodyStyle}>
          Cashflow offers a one-time Pro upgrade. All purchases are processed exclusively through the
          platform you downloaded the app from:
        </p>
        <ul style={listStyle}>
          <li><strong style={{ color: '#0F172A' }}>Apple App Store</strong> for iOS devices</li>
          <li><strong style={{ color: '#0F172A' }}>Google Play Store</strong> for Android devices</li>
        </ul>
        <p style={bodyStyle}>
          We do not collect, process, or store any payment information. Your billing details are handled
          entirely by Apple or Google under their respective payment policies. For refunds or billing
          enquiries, please contact Apple or Google directly.
        </p>

        <h2 style={headingStyle}>6. Third-Party Services</h2>
        <p style={bodyStyle}>
          Cashflow does not integrate with any third-party analytics, advertising, or data collection
          services. The app does not contain trackers, ad networks, or any code that sends your information
          to external parties.
        </p>

        <h2 style={headingStyle}>7. Children&apos;s Privacy</h2>
        <p style={bodyStyle}>
          Cashflow is intended for users aged 18 and above. The app does not knowingly collect any
          information from children. Since no personal data is collected at all, there is no risk of
          children&apos;s information being stored or misused through our app.
        </p>

        <h2 style={headingStyle}>8. Changes to This Policy</h2>
        <p style={bodyStyle}>
          If we update this Privacy Policy, we will post the revised version within the app and on our
          website, with an updated effective date. We encourage you to review this page periodically.
          Continued use of the app after changes are posted means you accept the updated policy.
        </p>

        <h2 style={headingStyle}>9. Contact Us</h2>
        <p style={bodyStyle}>
          If you have any questions about this Privacy Policy, feel free to reach out:
        </p>
        <div style={{
          background: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '14px',
          padding: '24px',
          marginBottom: '16px',
        }}>
          <p style={{ ...bodyStyle, marginBottom: '4px' }}>
            <strong style={{ color: '#0F172A' }}>Olzytech Solutions</strong>
          </p>
          <p style={{ ...bodyStyle, marginBottom: '4px' }}>
            Email: <a href={`mailto:${EMAIL}`} style={{ color: '#16A34A' }}>{EMAIL}</a>
          </p>
          <p style={{ ...bodyStyle, marginBottom: 0 }}>
            WhatsApp: <a href="https://wa.me/60199692350" style={{ color: '#16A34A' }}>+6019-969 2350</a>
          </p>
        </div>

        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #E2E8F0' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              color: '#202020',
              background: '#C0F158',
              borderRadius: '10px',
              padding: '12px 20px',
              textDecoration: 'none',
            }}
          >
            <ArrowLeft size={14} />
            Back to Cashflow
          </Link>
        </div>
      </main>
    </div>
  );
}
