'use client';

import { useLanguage } from '@/lib/i18n';
import { useTheme } from '@/lib/theme';
import { NumberTicker } from '@/components/ui/number-ticker';
import { useInView } from '@/lib/useInView';
import { useMediaQuery } from '@/lib/useMediaQuery';
import WorldMap, { type WorldMapDot } from '@/components/ui/world-map';

function parseStatValue(value: string) {
  const match = value.match(/^([\d,.]+)(.*)$/);
  if (!match) return { num: 0, suffix: value, decimals: 0 };
  const numStr = match[1].replace(/,/g, '');
  const num = parseFloat(numStr);
  const suffix = match[2];
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
  return { num, suffix, decimals };
}

// Kuala Lumpur, Malaysia: 3.1390° N, 101.6869° E
const MY = { lat: 3.1390, lng: 101.6869 };

const MAP_DOTS: WorldMapDot[] = [
  { start: MY, end: { lat: 35.68, lng: 139.69 } },   // Tokyo
  { start: MY, end: { lat: 51.51, lng: -0.13 } },    // London
  { start: MY, end: { lat: 37.77, lng: -122.42 } },  // San Francisco
  { start: MY, end: { lat: 25.20, lng: 55.27 } },    // Dubai
  { start: MY, end: { lat: -33.87, lng: 151.21 } },  // Sydney
  { start: MY, end: { lat: 19.08, lng: 72.88 } },    // Mumbai
];

export default function Stats() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [stickyRef, inView] = useInView(0.1);
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery('(max-width: 900px)');
  const isSmall = isMobile || isTablet;

  const numFontSize = isMobile
    ? 'clamp(32px, 7vw, 48px)'
    : isTablet
    ? 'clamp(36px, 5vw, 56px)'
    : 'clamp(48px, 6vw, 80px)';

  const statsGrid = (
    <div
      className="grid"
      style={{
        gridTemplateColumns: isSmall ? '1fr 1fr' : `repeat(${t.stats.items.length}, auto)`,
        gap: isSmall ? '0' : 'clamp(32px, 4vw, 64px)',
      }}
    >
      {t.stats.items.map((item, i) => {
        const { num, suffix, decimals } = parseStatValue(item.value);
        const isLastMobile = isSmall && i % 2 === 1;
        const isBottomRow = isSmall && i >= 2;
        return (
          <div
            key={i}
            className="min-w-0"
            style={{
              padding: isSmall ? '28px 16px' : '0',
              borderRight: isSmall && !isLastMobile ? '1px solid var(--border)' : 'none',
              borderBottom: isSmall && !isBottomRow ? '1px solid var(--border)' : 'none',
            }}
          >
            <div className="flex items-baseline mb-3 flex-nowrap">
              {inView && (
                <NumberTicker
                  value={num}
                  decimalPlaces={decimals}
                  delay={0.15 * i}
                  style={{
                    fontSize: numFontSize,
                    fontWeight: 800,
                    letterSpacing: '-2px',
                    lineHeight: 1,
                    color: 'var(--text-primary)',
                  }}
                />
              )}
              <span
                className="font-extrabold tracking-[-2px] leading-none"
                style={{
                  fontSize: numFontSize,
                  color: theme === 'dark' ? '#C0F158' : '#111111',
                }}
              >
                {suffix}
              </span>
            </div>
            <div className="text-secondary text-sm font-semibold uppercase tracking-[1.2px]">
              {item.label}
            </div>
          </div>
        );
      })}
    </div>
  );

  if (isMobile) {
    return (
      <section className="stack-section bg-surface-alt transition-theme z-[4]">
        <div
          ref={stickyRef}
          className="relative overflow-hidden"
          style={{ padding: '48px 0' }}
        >
          {/* World map background */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ opacity: theme === 'dark' ? 0.95 : 0.75, transition: 'opacity 250ms ease' }}
          >
            <div className="w-full max-w-[1600px]">
              <WorldMap dots={inView ? MAP_DOTS : []} lineColor="#C0F158" dotColor="#C0F158" theme={theme} />
            </div>
          </div>
          <div className="wrap relative z-[1]">{statsGrid}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="stack-section bg-surface-alt transition-theme z-[4]">
      <div className="h-[200vh]">
        <div
          ref={stickyRef}
          className="bg-surface-alt transition-theme sticky top-16 h-[calc(100vh-64px)] justify-center overflow-hidden transition-opacity duration-[250ms] pointer-events-none"
          style={{
            display: 'flex',
            alignItems: isSmall ? 'center' : 'flex-end',
            paddingBottom: isSmall ? 0 : 'clamp(32px, 5vh, 56px)',
          }}
        >
          {/* World map background */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ opacity: theme === 'dark' ? 0.95 : 0.75, transition: 'opacity 250ms ease' }}
          >
            <div className="w-full max-w-[1600px]">
              <WorldMap dots={inView ? MAP_DOTS : []} lineColor="#C0F158" dotColor="#C0F158" theme={theme} />
            </div>
          </div>
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              pointerEvents: 'auto',
              ...(!isSmall && {
                display: 'flex',
                justifyContent: 'flex-end',
                paddingRight: 'clamp(40px, 5vw, 80px)',
              }),
            }}
          >
            <div className={isSmall ? 'wrap' : undefined}>{statsGrid}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
