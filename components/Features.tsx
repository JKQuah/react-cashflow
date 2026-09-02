'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';
import { useMediaQuery } from '@/lib/useMediaQuery';
import { CalendarCheck, BellRinging, CreditCard, ChartLine, ArrowsClockwise, Target } from '@phosphor-icons/react';
import { useLanguage } from '@/lib/i18n';

const icons = [CalendarCheck, BellRinging, CreditCard, ChartLine, ArrowsClockwise, Target];

type FeatureItem = { title: string; desc: string };

function FeatureRow({
  feature, index, total, scrollYProgress, isTablet, isMobile,
}: {
  feature: FeatureItem;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  isTablet: boolean;
  isMobile: boolean;
}) {
  const Icon = icons[index];
  const seg = 1 / total;
  const s = index * seg;

  const opacity = useTransform(scrollYProgress, [s, s + seg * 0.25, 1], [0, 1, 1]);
  const x = useTransform(scrollYProgress, [s, s + seg * 0.6, 1], ['56px', '0px', '0px']);

  const padTop = 0.04;
  const usable = 0.92;
  const topPct = `${(padTop + (index / total) * usable) * 100}%`;
  const heightPct = `${(usable / total) * 100}%`;

  const iconSize = isMobile ? 30 : isTablet ? 36 : 44;
  const iconInner = isMobile ? 15 : isTablet ? 18 : 22;

  return (
    <motion.div
      className="flex items-center"
      style={{
        position: 'absolute',
        top: topPct,
        left: 0,
        right: 0,
        height: heightPct,
        gap: isMobile ? '10px' : isTablet ? '12px' : '20px',
        padding: isMobile ? '0 16px' : isTablet ? '0 16px' : '0 clamp(24px, 4vw, 60px)',
        borderBottom: index < total - 1 ? '1px solid var(--border)' : 'none',
        opacity,
        x,
      }}
    >
      {/* Number */}
      <span className="text-muted text-xs font-semibold tracking-[0.5px] shrink-0 w-7">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Icon */}
      <div
        className="bg-[#C0F158] rounded-[10px] flex items-center justify-center shrink-0"
        style={{ width: iconSize, height: iconSize }}
      >
        <Icon size={iconInner} color="#202020" weight="regular" />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <h3
          className="text-primary font-bold tracking-[-0.3px] leading-[1.2] mb-1"
          style={{ fontSize: isMobile ? '13px' : isTablet ? '14px' : 'clamp(15px, 1.4vw, 19px)' }}
        >
          {feature.title}
        </h3>
        <p
          className="text-secondary leading-[1.5] m-0 overflow-hidden max-h-[3em]"
          style={{ fontSize: isMobile ? '11px' : 'clamp(12px, 1vw, 14px)' }}
        >
          {feature.desc}
        </p>
      </div>
    </motion.div>
  );
}


export default function Features() {
  const { t } = useLanguage();
  const total = t.features.items.length;
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const progressW = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="features"
      className="stack-section bg-theme z-[3]"
    >
      <div ref={containerRef} style={{ height: `${(total + 1) * 100}vh` }}>
        <div
          className={`bg-theme transition-theme sticky top-16 h-[calc(100vh-64px)] overflow-hidden ${isMobile ? 'flex flex-col' : 'flex'}`}
        >
          {/* ── Title ── */}
          <div
            className={`shrink-0 flex flex-col justify-center relative ${isMobile ? 'border-b border-theme' : 'border-r border-theme'}`}
            style={{
              width: isMobile ? '100%' : isTablet ? '50%' : '60%',
              padding: isMobile
                ? '24px 16px 20px'
                : isTablet
                ? '32px clamp(16px, 2.5vw, 32px) 32px clamp(16px, 3vw, 40px)'
                : '40px clamp(20px, 3vw, 48px) 40px clamp(16px, 4vw, 80px)',
            }}
          >
            <h2
              className="text-primary font-extrabold leading-[0.95] mb-3"
              style={{
                fontSize: isMobile ? 'clamp(26px, 7vw, 36px)' : isTablet ? 'clamp(32px, 4.5vw, 56px)' : 'clamp(40px, 6vw, 88px)',
                letterSpacing: isMobile ? '-1px' : isTablet ? '-2px' : '-3px',
              }}
            >
              {t.features.headline}
            </h2>

            <p className={`text-secondary leading-[1.7] m-0 ${isMobile ? 'text-[13px]' : 'text-[15px] mb-10 max-w-[320px]'}`}>
              {t.features.subheadline}
            </p>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--border)]">
              <motion.div className="h-full bg-[#C0F158]" style={{ width: progressW }} />
            </div>
          </div>

          {/* ── Features list ── */}
          <div className="flex-1 relative overflow-hidden">
            {t.features.items.map((feature, i) => (
              <FeatureRow
                key={i}
                feature={feature}
                index={i}
                total={total}
                scrollYProgress={scrollYProgress}
                isTablet={isTablet}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
