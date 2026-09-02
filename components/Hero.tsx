"use client";

import { useLanguage } from "@/lib/i18n";
import { BlurFade } from "@/components/ui/blur-fade";
import { AuroraText } from "@/components/ui/aurora-text";
import { useTheme } from "@/lib/theme";

export default function Hero() {
  const { t, lang } = useLanguage();
  const { theme } = useTheme();

  return (
    <section
      id="hero"
      className="bg-theme border-b border-theme transition-theme relative overflow-hidden flex flex-col justify-end min-h-svh pt-16"
    >
      <div
        className="wrap hero-content"
      >
        {/* Giant headline */}
        <div className="mb-[60px]">
          <h1
            className={`font-extrabold tracking-[-3px] m-0 ${lang === "zh" ? "leading-[1.15]" : "leading-[0.92]"}`}
          >
            <BlurFade delay={0.05} duration={0.7}>
              <span
                className={`block font-bold tracking-[-3px] text-[clamp(52px,8.5vw,112px)] ${lang === "zh" ? "leading-[1.15]" : "leading-[0.92]"}`}
              >
                <AuroraText
                  colors={[
                    "#C0F158",
                    "#A3E635",
                    theme === "light" ? "#000000" : "#FFFFFF",
                    "#A3E635",
                    "#C0F158",
                  ]}
                  speed={0.7}
                >
                  {t.hero.headline1}
                </AuroraText>
              </span>
            </BlurFade>

            <BlurFade delay={1.0} duration={0.65}>
              <span className="text-primary block font-extrabold text-[clamp(60px,10vw,136px)]">
                {t.hero.headline2}
              </span>
            </BlurFade>
          </h1>
        </div>

        {/* Bottom row */}
        <BlurFade delay={1.35} duration={0.5}>
          <div className="border-t border-theme pt-8 flex items-start justify-between gap-10 flex-wrap">
            <p className="text-secondary text-[17px] font-normal leading-[1.7] max-w-140 m-0">
              {t.hero.subheadline}
            </p>

            {/* Store buttons */}
            <div className="flex gap-3 shrink-0 flex-wrap">
              {/* App Store */}
              <a
                href="#"
                className="inline-flex items-center gap-[10px] bg-black text-white rounded-xl px-[18px] py-[10px] no-underline border border-white/15 transition-opacity duration-150 min-w-[148px] hover:opacity-[0.82]"
                aria-label="Download on the App Store"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1280px-Apple_logo_white.svg.png"
                  alt=""
                  aria-hidden="true"
                  width={18}
                  height={22}
                  className="object-contain"
                />
                <div>
                  <div className="text-[10px] font-normal opacity-75 leading-none mb-0.5">
                    Download on the
                  </div>
                  <div className="text-base font-bold leading-none tracking-[-0.3px]">
                    App Store
                  </div>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="#"
                className="inline-flex items-center gap-[10px] bg-black text-white rounded-xl px-[18px] py-[10px] no-underline border border-white/15 transition-opacity duration-150 min-w-[148px] hover:opacity-[0.82]"
                aria-label="Get it on Google Play"
              >
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 24 26"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M1.5 0.5L13.5 12.5L1.5 24.5V0.5Z" fill="#4ADE80" />
                  <path d="M1.5 0.5L13.5 12.5L20 9L1.5 0.5Z" fill="#F87171" />
                  <path
                    d="M1.5 24.5L13.5 12.5L20 16L1.5 24.5Z"
                    fill="#60A5FA"
                  />
                  <path
                    d="M20 9L13.5 12.5L20 16L23.5 12.5L20 9Z"
                    fill="#FBBF24"
                  />
                </svg>
                <div>
                  <div className="text-[10px] font-normal opacity-75 leading-none mb-0.5">
                    Get it on
                  </div>
                  <div className="text-base font-bold leading-none tracking-[-0.3px]">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>
        </BlurFade>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-10 flex flex-col items-center gap-2 pointer-events-none">
        <div className="w-px h-14 bg-gradient-to-b from-transparent to-[var(--border)] [animation:scrollPulse_2s_ease-in-out_infinite]" />
        <span className="text-muted text-[9px] font-semibold tracking-[2.5px] uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
      </div>
    </section>
  );
}
