'use client';

import { motion } from 'motion/react';
import { useLanguage } from '@/lib/i18n';
import { BlurFade } from '@/components/ui/blur-fade';
import { useMediaQuery } from '@/lib/useMediaQuery';
import { Iphone } from '@/components/ui/iphone';
import type { CSSProperties } from 'react';

export default function AppShowcase() {
  const { t } = useLanguage();
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <section
      className={`stack-section bg-surface-alt border-b border-theme z-[2] transition-theme ${isMobile ? 'py-[60px]' : 'py-[120px]'}`}
      style={{ willChange: 'transform' }}
    >
      <div className="wrap showcase-grid">
        {/* Left: text */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
        >
          <BlurFade delay={0.08} duration={0.55}>
            <h2 className="text-primary font-extrabold leading-none tracking-[-2px] mb-8 text-[clamp(36px,5.5vw,72px)]">
              Built around your cash flow, not just your balance.
            </h2>
          </BlurFade>

          <BlurFade delay={0.16} duration={0.5}>
            <p className="text-secondary text-[17px] font-normal leading-[1.7] mb-12 max-w-[420px]">
              {t.hero.subheadline}
            </p>
          </BlurFade>

          <BlurFade delay={0.22} duration={0.5}>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#features"
                className="inline-flex items-center gap-2 text-sm font-bold rounded-full px-7 py-3.5 no-underline transition-[background-color,color] duration-150 text-[#111] bg-lime hover:bg-black hover:text-white"
              >
                Explore Features
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="text-secondary hover:text-primary border-[1.5px] border-theme inline-flex items-center gap-2 text-sm font-semibold rounded-full px-7 py-3.5 no-underline transition-[color,border-color] duration-150 bg-transparent"
              >
                How it works
              </a>
            </div>
          </BlurFade>
        </motion.div>

        {/* Right: iPhones with CSS float animation — no Framer Motion here */}
        <div className={`flex items-end justify-center ${isMobile ? 'gap-3' : 'gap-5'}`}>
          {/* Summary screen — raised higher via marginBottom */}
          <div
            style={{
              animation: 'float 3.6s ease-in-out infinite',
              marginBottom: isMobile ? 32 : 72,
            } as CSSProperties}
          >
            <Iphone
              src="/app-screenshot-summary.png"
              aria-label="Cashflow app summary screen showing available cash flow of RM 4,716.32 for the payday cycle 25 Aug to 24 Sep 2026"
              style={{ width: isMobile ? 'min(46vw, 210px)' : '290px' } as CSSProperties}
            />
          </div>

          {/* Expenses screen — 0.9s delay so they bob out of phase */}
          <div
            style={{
              animation: 'float 3.6s ease-in-out 0.9s infinite',
            } as CSSProperties}
          >
            <Iphone
              src="/app-screenshot-expenses.png"
              aria-label="Cashflow app daily expenses screen showing RM 152.90 spent today across Beverage, Clothing and Entertainment categories"
              style={{ width: isMobile ? 'min(46vw, 210px)' : '290px' } as CSSProperties}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
