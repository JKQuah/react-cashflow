import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Cashflow — Payday Cycle Finance App';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '64px',
          background: '#111111',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-80px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(192,241,88,0.18) 0%, transparent 70%)',
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            position: 'absolute',
            top: '64px',
            left: '64px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: '#C0F158',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="16 7 22 7 22 13" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span style={{ color: '#FFFFFF', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.5px' }}>
            Cashflow
          </span>
        </div>

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              background: 'rgba(192,241,88,0.12)',
              border: '1px solid rgba(192,241,88,0.3)',
              borderRadius: '100px',
              padding: '6px 16px',
              color: '#C0F158',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.5px',
            }}
          >
            iOS &amp; Android · Malaysia
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            color: '#FFFFFF',
            fontSize: '62px',
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: '-2px',
            marginBottom: '28px',
            maxWidth: '820px',
          }}
        >
          Not a tracking app.
          <br />
          <span style={{ color: '#C0F158' }}>A cashflow system.</span>
        </div>

        {/* Subtext */}
        <div
          style={{
            color: '#B8B8B8',
            fontSize: '22px',
            lineHeight: 1.5,
            maxWidth: '680px',
            marginBottom: '48px',
          }}
        >
          Payday cycle tracking, credit card cutoff reminders, and credit vs debit visibility — all on your device.
        </div>

        {/* Pills */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {['Payday Cycle', 'Cutoff Reminders', 'Credit & Debit', 'Device Only'].map((tag) => (
            <div
              key={tag}
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '8px',
                padding: '8px 16px',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '64px',
            right: '64px',
            color: 'rgba(255,255,255,0.3)',
            fontSize: '15px',
          }}
        >
          cashflow.olzytech.com
        </div>
      </div>
    ),
    { ...size },
  );
}
