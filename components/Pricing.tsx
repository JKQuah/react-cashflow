'use client';

import { Check } from '@phosphor-icons/react';
import { useLanguage } from '@/lib/i18n';
import { useInView } from '@/lib/useInView';
import { BlurFade } from '@/components/ui/blur-fade';
import { BorderBeam } from '@/components/ui/border-beam';

export default function Pricing() {
  const { t } = useLanguage();
  const p = t.pricing;
  const [headerRef, headerVisible] = useInView(0.2);
  const [cardsRef, cardsVisible] = useInView(0.1);

  return (
    <section
      id="pricing"
      className="stack-section bg-theme transition-theme py-[100px] z-[6]"
    >
      <div className="wrap max-w-[1200px]">
        <div
          ref={headerRef}
          className="text-center mb-[60px]"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'none' : 'translateY(16px)',
            transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
          }}
        >
          <h2
            className="text-primary font-bold tracking-[-1px] leading-[1.15] mb-4 text-[clamp(28px,4vw,42px)]"
          >
            {p.headline}
          </h2>
          <p className="text-secondary text-base">{p.subheadline}</p>
        </div>

        <div
          ref={cardsRef}
          className="pricing-cards grid gap-5 max-w-[760px] mx-auto"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          {/* Free tier */}
          <div
            className="bg-surface border border-theme shadow-card rounded-[20px] p-8 flex flex-col"
            style={{
              opacity: cardsVisible ? 1 : 0,
              translate: cardsVisible ? 'none' : '0 24px',
              transition: 'opacity 0.5s ease 0ms, translate 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms',
            }}
          >
            <div className="mb-7">
              <div className="text-muted text-[13px] font-semibold mb-2 uppercase tracking-[0.5px]">
                {p.free.name}
              </div>
              <div className="flex items-baseline gap-[6px]">
                <span className="text-primary text-[40px] font-bold tracking-[-1.5px] leading-none">
                  {p.free.price}
                </span>
                <span className="text-muted text-sm">/ {p.free.period}</span>
              </div>
              <p className="text-secondary text-sm mt-2">{p.free.desc}</p>
            </div>

            <ul className="list-none mb-8 flex-1">
              {p.free.features.map((f, i) => (
                <li key={i} className="flex items-start gap-[10px] py-2 border-b border-theme">
                  <Check size={14} color="var(--success)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span className="text-secondary text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="text-primary border border-theme hover:border-secondary block text-center text-[15px] font-bold rounded-xl py-3.5 no-underline transition-[border-color] duration-150 bg-transparent"
            >
              {p.free.cta}
            </a>
          </div>

          {/* Pro tier */}
          <div
            className="bg-surface rounded-[20px] p-8 flex flex-col relative overflow-hidden"
            style={{
              border: '1.5px solid #C0F158',
              boxShadow: 'var(--card-shadow), 0 0 0 1px rgba(192,241,88,0.1)',
              opacity: cardsVisible ? 1 : 0,
              translate: cardsVisible ? 'none' : '0 24px',
              transition: 'opacity 0.5s ease 90ms, translate 0.5s cubic-bezier(0.23, 1, 0.32, 1) 90ms',
            }}
          >
            <BorderBeam duration={8} size={100} colorFrom="#C0F158" colorTo="#4ADE80" />

            <div className="mb-7">
              <div className="text-accent text-[13px] font-semibold mb-2 uppercase tracking-[0.5px]">
                {p.pro.name}
              </div>
              <div className="flex items-baseline gap-[6px]">
                <span className="text-primary text-[40px] font-bold tracking-[-1.5px] leading-none">
                  {p.pro.price}
                </span>
                <span className="text-muted text-sm">/ {p.pro.period}</span>
              </div>
              <p className="text-secondary text-sm mt-2">{p.pro.desc}</p>
            </div>

            <ul className="list-none mb-8 flex-1">
              {p.pro.features.map((f, i) => (
                <li key={i} className="flex items-start gap-[10px] py-2 border-b border-theme">
                  <Check size={14} color="#C0F158" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span className="text-secondary text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="block text-center text-[15px] font-bold rounded-xl py-3.5 no-underline hover:opacity-[0.88] transition-opacity duration-150 cursor-pointer text-[#202020] bg-lime border-none"
            >
              {p.pro.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
