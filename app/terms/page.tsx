import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions — Cashflow',
  description: 'Cashflow Terms and Conditions. Read our terms of service before using the Cashflow app.',
};

const EFFECTIVE_DATE = 'September 12, 2026';
const COMPANY = 'Olzytech Solutions';
const EMAIL = 'support@olzytech.com';

export default function TermsPage() {
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
            Terms &amp; Conditions
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
            These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the Cashflow mobile application
            developed by {COMPANY} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). By downloading or
            using Cashflow, you agree to these Terms. If you do not agree, please stop using the app.
          </p>
        </div>

        <h2 style={headingStyle}>1. Who Can Use Cashflow</h2>
        <p style={bodyStyle}>
          Cashflow is intended for users aged 18 and above. By using the app, you confirm that you are at
          least 18 years old and are legally able to enter into this agreement.
        </p>

        <h2 style={headingStyle}>2. No Registration Required</h2>
        <p style={bodyStyle}>
          You do not need to create an account or provide any personal information to use Cashflow. The app
          works entirely on your device. During setup, you will be asked for your work type, occupation, and
          payday date. This information is stored locally on your device and is used only to personalise your
          cashflow view.
        </p>

        <h2 style={headingStyle}>3. Your Data Stays on Your Device</h2>
        <p style={bodyStyle}>
          All records you enter into Cashflow, including expenses, payment methods, and cashflow data, are
          stored only on your device. We do not have access to your data and do not store it on any server.
          You are fully responsible for maintaining and backing up your own data.
        </p>
        <p style={bodyStyle}>
          If you delete the app or lose your device, your data cannot be recovered by us as we do not hold
          a copy of it.
        </p>

        <h2 style={headingStyle}>4. Pro Upgrade and Payments</h2>
        <p style={bodyStyle}>
          Cashflow offers a free version and an optional one-time Pro upgrade. All purchases are handled
          entirely by the app store platform:
        </p>
        <ul style={listStyle}>
          <li><strong style={{ color: '#0F172A' }}>iOS users:</strong> purchases are processed by the Apple App Store</li>
          <li><strong style={{ color: '#0F172A' }}>Android users:</strong> purchases are processed by the Google Play Store</li>
        </ul>
        <p style={bodyStyle}>
          We do not collect, process, or store your payment details. All billing, receipts, and refund
          requests are handled by Apple or Google. For any payment issues, please contact Apple Support or
          Google Play Support directly.
        </p>
        <p style={bodyStyle}>
          New users receive a 7-day free trial of the Pro features. If you do not wish to continue, you
          must cancel before the trial ends through your App Store or Google Play account settings.
        </p>

        <h2 style={headingStyle}>5. Acceptable Use</h2>
        <p style={bodyStyle}>Cashflow is for personal financial management use only. You agree not to:</p>
        <ul style={listStyle}>
          <li>Use the app for any unlawful purpose</li>
          <li>Attempt to reverse-engineer, copy, or modify any part of the app</li>
          <li>Redistribute or resell the app or its features without our written permission</li>
        </ul>

        <h2 style={headingStyle}>6. Intellectual Property</h2>
        <p style={bodyStyle}>
          The Cashflow app, including its design, features, and content, is owned by {COMPANY} and protected
          by applicable intellectual property laws. You are granted a personal, non-transferable licence to
          use the app for your own financial management purposes.
        </p>
        <p style={bodyStyle}>
          Any data you enter into the app belongs to you. We do not claim ownership of your personal or
          financial records.
        </p>

        <h2 style={headingStyle}>7. Financial Disclaimer</h2>
        <p style={bodyStyle}>
          Cashflow is a personal cashflow tracking tool. It is not a financial advisory service, a bank,
          or a regulated financial institution. Nothing in the app should be taken as financial, investment,
          or legal advice. All financial decisions remain your own responsibility.
        </p>

        <h2 style={headingStyle}>8. Limitation of Liability</h2>
        <p style={bodyStyle}>
          The app is provided &ldquo;as is&rdquo; without any guarantees. We are not responsible for any
          loss of data, financial loss, or other damages resulting from your use of the app. Since all your
          data is stored on your own device, we have no ability to recover lost records on your behalf.
        </p>
        <p style={bodyStyle}>
          To the extent permitted by law, our total liability to you shall not exceed the amount you paid
          for the Pro upgrade.
        </p>

        <h2 style={headingStyle}>9. Privacy</h2>
        <p style={bodyStyle}>
          Your privacy is important to us. Please read our{' '}
          <Link href="/privacy" style={{ color: '#16A34A' }}>Privacy Policy</Link> to understand what
          limited information we use and how we protect it. The Privacy Policy forms part of these Terms.
        </p>

        <h2 style={headingStyle}>10. Changes to These Terms</h2>
        <p style={bodyStyle}>
          We may update these Terms from time to time. When we do, we will post the updated version in the
          app and on our website with a new effective date. Continued use of the app after changes are posted
          means you accept the updated Terms.
        </p>

        <h2 style={headingStyle}>11. Governing Law</h2>
        <p style={bodyStyle}>
          These Terms are governed by the laws of Malaysia. Any disputes will be subject to the jurisdiction
          of the courts of Malaysia.
        </p>

        <h2 style={headingStyle}>12. Contact Us</h2>
        <p style={bodyStyle}>
          If you have any questions about these Terms, please contact us:
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
