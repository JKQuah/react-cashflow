"use client";

import { useState } from "react";
import { Check, SparkleIcon } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n";
import { useInView } from "@/lib/useInView";
import { BorderBeam } from "@/components/ui/border-beam";

const CURRENCIES = [
  { code: "USD", symbol: "$", flag: "🇺🇸", name: "US Dollar", decimals: 2 },
  {
    code: "MYR",
    symbol: "RM",
    flag: "🇲🇾",
    name: "Malaysian Ringgit",
    decimals: 2,
  },
  {
    code: "SGD",
    symbol: "S$",
    flag: "🇸🇬",
    name: "Singapore Dollar",
    decimals: 2,
  },
  { code: "GBP", symbol: "£", flag: "🇬🇧", name: "British Pound", decimals: 2 },
  { code: "EUR", symbol: "€", flag: "🇪🇺", name: "Euro", decimals: 2 },
  {
    code: "AUD",
    symbol: "A$",
    flag: "🇦🇺",
    name: "Australian Dollar",
    decimals: 2,
  },
  {
    code: "CAD",
    symbol: "CA$",
    flag: "🇨🇦",
    name: "Canadian Dollar",
    decimals: 2,
  },
  { code: "JPY", symbol: "¥", flag: "🇯🇵", name: "Japanese Yen", decimals: 0 },
  {
    code: "HKD",
    symbol: "HK$",
    flag: "🇭🇰",
    name: "Hong Kong Dollar",
    decimals: 2,
  },
  { code: "CNY", symbol: "¥", flag: "🇨🇳", name: "Chinese Yuan", decimals: 2 },
  { code: "AED", symbol: "AED ", flag: "🇦🇪", name: "UAE Dirham", decimals: 2 },
  { code: "THB", symbol: "฿", flag: "🇹🇭", name: "Thai Baht", decimals: 0 },
];

// Edit prices here — pro and ai per currency. free is always 0.
const PRICES: Record<string, { pro: number; ai: number }> = {
  USD: { pro: 4.9, ai: 2.9 }, // United States
  MYR: { pro: 16.9, ai: 9.9 }, // Malaysia
  SGD: { pro: 6.9, ai: 2.9 }, // Singapore
  GBP: { pro: 3.9, ai: 3.9 }, // United Kingdom
  EUR: { pro: 3.9, ai: 3.9 }, // Eurozone (Germany, France, etc.)
  AUD: { pro: 4.9, ai: 2.9 }, // Australia
  CAD: { pro: 4.9, ai: 2.9 }, // Canada
  JPY: { pro: 499, ai: 299 }, // Japan
  HKD: { pro: 29.9, ai: 19.9 }, // Hong Kong
  CNY: { pro: 29.9, ai: 19.9 }, // China
  THB: { pro: 129, ai: 79.9 }, // Thailand
};

function formatPrice(amount: number, cur: (typeof CURRENCIES)[0]): string {
  if (amount === 0) return `${cur.symbol}0`;
  return `${cur.symbol}${cur.decimals === 0 ? Math.round(amount) : amount.toFixed(cur.decimals)}`;
}

export default function Pricing() {
  const { t } = useLanguage();
  const p = t.pricing;
  const [curCode, setCurCode] = useState("USD");
  const cur = CURRENCIES.find((c) => c.code === curCode)!;
  const prices = PRICES[curCode];

  const [headerRef, headerVisible] = useInView(0.2);
  const [cardsRef, cardsVisible] = useInView(0.1);

  return (
    <section
      id="pricing"
      className="stack-section bg-theme transition-theme py-[100px] z-[6]"
    >
      <div className="wrap max-w-[1200px]">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-[48px]"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "none" : "translateY(16px)",
            transition:
              "opacity 0.5s ease, transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          <h2 className="text-primary font-bold tracking-[-1px] leading-[1.15] mb-3 text-[clamp(28px,4vw,42px)]">
            {p.headline}
          </h2>
          <p className="text-secondary text-base mb-6">{p.subheadline}</p>

          {/* Currency selector */}
          <div
            className="inline-flex items-center gap-2 border border-theme rounded-xl px-4 py-2 bg-surface"
            style={{ outline: "none" }}
          >
            <span className="text-[16px] leading-none">
              {CURRENCIES.find((c) => c.code === curCode)?.flag}
            </span>
            <select
              value={curCode}
              onChange={(e) => setCurCode(e.target.value)}
              className="text-sm font-medium text-secondary bg-transparent border-none outline-hidden focus:outline-hidden focus-visible:outline-hidden focus:ring-0 cursor-pointer pr-1"
            >
              {CURRENCIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code} — {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid gap-5 mx-auto"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            maxWidth: "1060px",
          }}
        >
          {/* Free */}
          <div
            className="bg-surface border border-theme shadow-card rounded-[20px] p-8 flex flex-col"
            style={{
              opacity: cardsVisible ? 1 : 0,
              translate: cardsVisible ? "none" : "0 24px",
              transition:
                "opacity 0.5s ease 0ms, translate 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms",
            }}
          >
            <div className="mb-7">
              <div className="text-muted text-[13px] font-semibold mb-2 uppercase tracking-[0.5px]">
                {p.free.name}
              </div>
              <div className="flex items-baseline gap-[6px]">
                <span className="text-primary text-[40px] font-bold tracking-[-1.5px] leading-none">
                  {formatPrice(0, cur)}
                </span>
                <span className="text-muted text-sm">/ {p.free.period}</span>
              </div>
              <p className="text-secondary text-sm mt-2">{p.free.desc}</p>
            </div>
            <ul className="list-none mb-8 flex-1">
              {p.free.features.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-[10px] py-2 border-b border-theme"
                >
                  <Check
                    size={14}
                    color="var(--success)"
                    style={{ marginTop: "2px", flexShrink: 0 }}
                  />
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

          {/* Pro */}
          <div
            className="bg-surface rounded-[20px] p-8 flex flex-col relative overflow-hidden"
            style={{
              border: "1.5px solid #C0F158",
              boxShadow: "var(--card-shadow), 0 0 0 1px rgba(192,241,88,0.1)",
              opacity: cardsVisible ? 1 : 0,
              translate: cardsVisible ? "none" : "0 24px",
              transition:
                "opacity 0.5s ease 90ms, translate 0.5s cubic-bezier(0.23, 1, 0.32, 1) 90ms",
            }}
          >
            <BorderBeam
              duration={8}
              size={100}
              colorFrom="#C0F158"
              colorTo="#4ADE80"
            />
            <div className="mb-7">
              <div className="flex items-center justify-between mb-2">
                <div className="text-accent text-[13px] font-semibold uppercase tracking-[0.5px]">
                  {p.pro.name}
                </div>
                <span className="text-[11px] font-bold text-[#202020] bg-lime rounded-full px-2.5 py-0.5">
                  {p.pro.badge}
                </span>
              </div>
              <div className="flex items-baseline gap-[6px]">
                <span className="text-primary text-[40px] font-bold tracking-[-1.5px] leading-none">
                  {formatPrice(prices.pro, cur)}
                </span>
                <span className="text-muted text-sm">/ {p.pro.period}</span>
              </div>
              <p className="text-secondary text-sm mt-2">{p.pro.desc}</p>
            </div>
            <ul className="list-none mb-8 flex-1">
              {p.pro.features.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-[10px] py-2 border-b border-theme"
                >
                  <Check
                    size={14}
                    color="#C0F158"
                    style={{ marginTop: "2px", flexShrink: 0 }}
                  />
                  <span className="text-secondary text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="block text-center text-[15px] font-bold rounded-xl py-3.5 no-underline transition-[background-color,color] duration-150 text-[#202020] bg-lime border-none hover:bg-black hover:text-white"
            >
              {p.pro.cta}
            </a>
          </div>

          {/* AI — Coming Soon */}
          <div
            className="bg-surface rounded-[20px] p-8 flex flex-col relative overflow-hidden"
            style={{
              border: "1.5px solid rgba(139,92,246,0.35)",
              boxShadow: "var(--card-shadow), 0 0 0 1px rgba(139,92,246,0.06)",
              opacity: cardsVisible ? 1 : 0,
              translate: cardsVisible ? "none" : "0 24px",
              transition:
                "opacity 0.5s ease 180ms, translate 0.5s cubic-bezier(0.23, 1, 0.32, 1) 180ms",
            }}
          >
            <BorderBeam
              duration={10}
              size={120}
              colorFrom="#8B5CF6"
              colorTo="#EC4899"
            />

            <div className="mb-7">
              <div className="flex items-center justify-between mb-2">
                <div
                  className="text-[13px] font-semibold uppercase tracking-[0.5px]"
                  style={{ color: "#8B5CF6" }}
                >
                  {p.ai.name}
                </div>
                <span
                  className="text-[11px] font-bold rounded-full px-2.5 py-0.5"
                  style={{
                    color: "#7C3AED",
                    background: "rgba(139,92,246,0.1)",
                    border: "1px solid rgba(139,92,246,0.25)",
                  }}
                >
                  {p.ai.badge}
                </span>
              </div>
              <div className="flex items-baseline gap-[6px]">
                <span className="text-primary text-[40px] font-bold tracking-[-1.5px] leading-none">
                  {formatPrice(prices.ai, cur)}
                </span>
                <span className="text-muted text-sm">/ {p.ai.period}</span>
              </div>
              <p className="text-secondary text-sm mt-2">{p.ai.desc}</p>
            </div>

            <ul className="list-none mb-8 flex-1">
              {p.ai.features.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-[10px] py-2 border-b border-theme"
                >
                  <SparkleIcon
                    size={14}
                    color="#8B5CF6"
                    style={{ marginTop: "2px", flexShrink: 0 }}
                  />
                  <span className="text-secondary text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <button
              disabled
              className="block w-full text-center text-[15px] font-bold rounded-xl py-3.5 cursor-not-allowed"
              style={{
                color: "#8B5CF6",
                background: "rgba(139,92,246,0.08)",
                border: "1.5px solid rgba(139,92,246,0.2)",
              }}
            >
              {p.ai.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
