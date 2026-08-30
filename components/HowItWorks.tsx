"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useOneWayProgress } from "@/lib/useOneWayProgress";
import { useScrollSkipOnReturn } from "@/lib/useScrollSkipOnReturn";
import { useLanguage } from "@/lib/i18n";

type StepItem = { number: string; title: string; desc: string };

function StepCard({
  step,
  index,
  total,
  scrollYProgress,
}: {
  step: StepItem;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const seg = 1 / (total + 1);
  const s = index * seg;

  const opacity = useTransform(scrollYProgress, [s, s + seg * 0.25, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [s, s + seg * 0.6, 1], ["80px", "0px", "0px"]);

  const topPct = `${(index / total) * 100}%`;
  const heightPct = `${(1 / total) * 100}%`;

  return (
    <motion.div
      className="grid grid-cols-[clamp(160px,22%,260px)_1fr] gap-[clamp(24px,4vw,64px)] items-center px-[clamp(20px,4vw,80px)] border-t border-theme"
      style={{
        position: "absolute",
        top: topPct,
        left: 0,
        right: 0,
        height: heightPct,
        opacity,
        y,
      }}
    >
      {/* Left: number + title */}
      <div>
        <div
          className="font-extrabold text-[#C0F158] tracking-[-4px] leading-none mb-[10px]"
          style={{ fontSize: "clamp(56px, 6.5vw, 96px)" }}
        >
          {step.number}
        </div>
        <h3
          className="text-primary font-bold tracking-[-0.3px] leading-[1.25] m-0"
          style={{ fontSize: "clamp(15px, 1.5vw, 20px)" }}
        >
          {step.title}
        </h3>
      </div>

      {/* Right: description */}
      <p
        className="text-secondary leading-[1.75] m-0 max-w-[520px]"
        style={{ fontSize: "clamp(14px, 1.2vw, 17px)" }}
      >
        {step.desc}
      </p>
    </motion.div>
  );
}

export default function HowItWorks() {
  const { t } = useLanguage();
  const total = t.howItWorks.steps.length;

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const oneWayProgress = useOneWayProgress(scrollYProgress);
  useScrollSkipOnReturn(containerRef, oneWayProgress);

  return (
    <section
      id="how-it-works"
      className="stack-section bg-theme transition-theme z-[5]"
    >
      <div ref={containerRef} style={{ height: `${(total + 1) * 100}vh` }}>
        <div className="bg-theme transition-theme sticky top-16 h-[calc(100vh-64px)] flex flex-col overflow-hidden">
          {/* Sticky headline */}
          <div
            className="border-b border-theme shrink-0 px-[clamp(20px,4vw,80px)] pt-[clamp(28px,4vh,52px)] pb-[clamp(20px,3vh,36px)]"
          >
            <h2
              className="text-primary font-extrabold tracking-[-2px] leading-[1.05] m-0"
              style={{ fontSize: "clamp(28px, 4.5vw, 60px)" }}
            >
              {t.howItWorks.headline}
            </h2>
          </div>

          {/* Steps */}
          <div className="flex-1 relative overflow-hidden">
            {t.howItWorks.steps.map((step, i) => (
              <StepCard
                key={i}
                step={step}
                index={i}
                total={total}
                scrollYProgress={oneWayProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
