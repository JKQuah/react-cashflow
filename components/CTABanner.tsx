"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useLanguage } from "@/lib/i18n";
import { BlurFade } from "@/components/ui/blur-fade";
import { Text3DFlip } from "@/components/ui/text-3d-flip";

export default function CTABanner() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Background shifts via scroll — MotionValue must stay in style
  const background = useTransform(
    scrollYProgress,
    [0.1, 0.9],
    ["#0A0A0A", "#1E1E1E"],
  );

  return (
    <motion.section
      ref={sectionRef}
      className="stack-section relative overflow-hidden py-[140px] z-[9]"
      style={{ background }}
    >
      <div className="wrap relative z-[1]">
        <BlurFade delay={0.08} duration={0.7}>
          <h2 className="cta-headline font-extrabold leading-[0.95] tracking-[-3px] text-[#FAFAFA] mb-16 max-w-[900px] text-[clamp(40px,8vw,112px)]">
            Ready to{" "}
            <Text3DFlip
              className="text-lime"
              textClassName="bg-background text-foreground"
              flipTextClassName="bg-background text-foreground"
              rotateDirection="top"
            >
              transform
            </Text3DFlip>{" "}
            your finances?
          </h2>
        </BlurFade>

        <BlurFade delay={0.18} duration={0.5}>
          <div className="flex items-center justify-between flex-wrap gap-8 pt-12 border-t border-white/10">
            <p className="text-[17px] font-normal text-white/55 leading-[1.7] max-w-[380px]">
              Start free. No credit card needed. Available on iOS and Android.
            </p>

            <div className="flex gap-3 flex-wrap">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-[15px] font-bold text-[#111] bg-lime rounded-full px-9 py-4 no-underline transition-[background-color,color] duration-150 hover:bg-black hover:text-white"
              >
                {t.pricing.free.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7h8M7 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-white/70 border-[1.5px] border-white/15 rounded-full px-9 py-4 no-underline bg-transparent transition-[border-color,color] duration-150 hover:border-white/40 hover:text-white"
              >
                Contact us
              </a>
            </div>
          </div>
        </BlurFade>
      </div>
    </motion.section>
  );
}
