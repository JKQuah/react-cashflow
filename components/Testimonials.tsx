"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { Star } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n";
import { useMediaQuery } from "@/lib/useMediaQuery";

type Testimonial = { name: string; location: string; text: string };

const AVATAR_SEEDS = ["ou1hb75h", "ohl26olj", "16i5hp5n", "ixsyeazx"];
const avatarStyle = "dylan";

function Slide({
  item,
  index,
  total,
  scrollYProgress,
  isMobile,
}: {
  item: Testimonial;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  isMobile: boolean;
}) {
  const seg = 1 / (total + 1);
  const s = index * seg;
  const e = (index + 1) * seg;
  const flipDur = seg * 0.35;

  // ONE rotateY for the entire slide — all cards flip in sync
  let ryInput: number[];
  let ryOutput: number[];
  if (index === 0) {
    ryInput = [0, e - flipDur, e];
    ryOutput = [0, 0, 90];
  } else if (index === total - 1) {
    ryInput = [s, s + flipDur, 1];
    ryOutput = [-90, 0, 0];
  } else {
    ryInput = [s, s + flipDur, e - flipDur, e];
    ryOutput = [-90, 0, 0, 90];
  }

  // Opacity gates this slide's visibility window
  let opIn: number[];
  let opOut: number[];
  if (index === 0) {
    opIn = [0, e - 0.005, e + 0.005];
    opOut = [1, 1, 0];
  } else if (index === total - 1) {
    opIn = [s - 0.005, s, 1];
    opOut = [0, 1, 1];
  } else {
    opIn = [s - 0.005, s, e - 0.005, e + 0.005];
    opOut = [0, 1, 1, 0];
  }

  const rotateY = useTransform(scrollYProgress, ryInput, ryOutput);
  const opacity = useTransform(scrollYProgress, opIn, opOut);

  // Fade the rotating container to 0 when near edge-on (±90°)
  // so the side-edge of the 3D-stacked layers is never visible.
  const edgeFade = useTransform(
    rotateY,
    [-90, -72, 0, 72, 90],
    [0, 0, 1, 0, 0],
  );

  const avatarSeed = AVATAR_SEEDS[index] ?? AVATAR_SEEDS[0];

  const cardClass =
    "absolute bg-theme border border-theme rounded-2xl z-20 transition-[background-color,border-color] duration-[250ms]";

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity }}
    >
      {/* Perspective lives on the static parent, not the rotating child */}
      <div className="[perspective:1200px] [perspective-origin:50%_50%]">
        {/* Single rotating wrapper — preserve-3d so children can have depth */}
        <motion.div
          className="relative [transform-style:preserve-3d]"
          style={{
            width: "min(820px, 88vw)",
            height: "clamp(300px, 44vh, 420px)",
            rotateY,
            opacity: edgeFade,
          }}
        >
          {/* Cross background — vertical bar — sits at z=0 (base plane) */}
          <div
            className="absolute inset-y-0 bg-surface rounded-[24px] transition-[background-color] duration-[250ms]"
            style={
              isMobile
                ? { left: "calc(50% - 100px)", width: "200px" }
                : { left: "32%", right: "32%" }
            }
          />

          {/* Avatar — floats highest above the base */}
          <div
            className="absolute top-1/2 left-1/2 rounded-full overflow-hidden ring-[6px] ring-[rgba(0,0,0,0.3)]"
            style={{
              width: "clamp(80px, 10vw, 108px)",
              height: "clamp(80px, 10vw, 108px)",
              transform: "translate(-50%, -50%) translateZ(40px)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://api.dicebear.com/10.x/${avatarStyle}/svg?seed=${avatarSeed}`}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name + location card — floats above base */}
          <div
            className={cardClass}
            style={{
              top: isMobile ? "6%" : "8%",
              left: isMobile ? "0" : "14%",
              padding: isMobile
                ? "8px 12px"
                : "clamp(10px, 1.6vh, 16px) clamp(12px, 1.6vw, 20px)",
              minWidth: isMobile ? undefined : "clamp(120px, 15vw, 180px)",
              maxWidth: isMobile ? "42%" : undefined,
              transform: "translateZ(20px)",
            }}
          >
            <p
              className="text-primary font-bold m-0 mb-[3px]"
              style={{ fontSize: "clamp(12px, 1.2vw, 15px)" }}
            >
              {item.name}
            </p>
            <p
              className="text-muted m-0"
              style={{ fontSize: "clamp(10px, 0.85vw, 12px)" }}
            >
              {item.location}
            </p>
          </div>

          {/* Stars + rating card — floats above base */}
          <div
            className={cardClass}
            style={{
              top: isMobile ? "6%" : "15%",
              right: isMobile ? "0" : "14%",
              padding: isMobile
                ? "8px 12px"
                : "clamp(10px, 1.6vh, 16px) clamp(12px, 1.6vw, 20px)",
              maxWidth: isMobile ? "42%" : "clamp(140px, 18vw, 200px)",
              transform: "translateZ(20px)",
            }}
          >
            <div className="flex gap-0.5 mb-[5px] items-center">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} size={12} color="#F59E0B" weight="fill" />
              ))}
              <span className="text-muted text-[10px] ml-[3px]">5.0</span>
            </div>
            <p
              className="text-primary font-bold m-0"
              style={{ fontSize: "clamp(11px, 1.1vw, 14px)" }}
            >
              Highly recommended
            </p>
          </div>

          {/* Quote card — floats above base */}
          <div
            className={cardClass}
            style={{
              bottom: isMobile ? "-8%" : 0,
              left: 0,
              padding: isMobile
                ? "10px 14px"
                : "clamp(12px, 1.8vh, 18px) clamp(14px, 1.8vw, 22px)",
              maxWidth: isMobile ? "55%" : "min(360px, 52%)",
              transform: "translateZ(20px)",
            }}
          >
            <p
              className="text-secondary leading-[1.7] m-0 italic"
              style={{ fontSize: "clamp(11px, 0.95vw, 13px)" }}
            >
              &ldquo;{item.text}&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();
  const isMobile = useMediaQuery("(max-width: 640px)");
  const items = t.testimonials.items.slice(0, 3);
  const total = items.length;

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="stack-section bg-surface-alt border-b border-theme transition-theme z-[7]">
      <div ref={containerRef} style={{ height: `${(total + 1) * 100}vh` }}>
        <div className="sticky top-16 h-[calc(100vh-64px)] flex flex-col">
          {/* Static headline */}
          <div className="border-b border-theme transition-theme shrink-0 px-[clamp(20px,4vw,80px)] pt-[clamp(24px,3.5vh,48px)] pb-[clamp(16px,2.5vh,28px)]">
            <h2 className="text-primary transition-theme font-extrabold tracking-[-1.5px] m-0 leading-[1.1] text-[clamp(24px,3.5vw,48px)]">
              {t.testimonials.headline}
            </h2>
          </div>

          {/* Slide area */}
          <div className="flex-1 relative">
            {items.map((item, i) => (
              <Slide
                key={i}
                item={item}
                index={i}
                total={total}
                scrollYProgress={scrollYProgress}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
