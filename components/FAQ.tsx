"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n";
import { useInView } from "@/lib/useInView";

export default function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);
  const [headerRef, headerVisible] = useInView(0.2);
  const [listRef, listVisible] = useInView(0.1);

  return (
    <section
      id="faq"
      className="stack-section bg-theme transition-theme py-[100px] z-[8]"
    >
      <div className="wrap !max-w-[720px]">
        <div
          ref={headerRef}
          className="text-center mb-14"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "none" : "translateY(16px)",
            transition:
              "opacity 0.5s ease, transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          <h2 className="text-primary font-bold tracking-[-1px] leading-[1.15] text-[clamp(28px,4vw,42px)]">
            {t.faq.headline}
          </h2>
        </div>

        <div
          ref={listRef}
          className="flex flex-col gap-2"
          style={{
            opacity: listVisible ? 1 : 0,
            transform: listVisible ? "none" : "translateY(20px)",
            transition:
              "opacity 0.5s ease, transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          {t.faq.items.map((item, i) => (
            <div
              key={i}
              className={`bg-surface shadow-card overflow-hidden rounded-[14px] border transition-[border-color] duration-200 ${open === i ? "border-accent-soft" : "border-theme"}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 bg-transparent border-none cursor-pointer text-left"
                aria-expanded={open === i}
              >
                <span className="text-primary text-[15px] font-semibold leading-[1.4]">
                  {item.q}
                </span>
                <span
                  className={`text-muted shrink-0 flex transition-transform duration-[260ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] ${open === i ? "rotate-180" : "rotate-0"}`}
                >
                  <CaretDown size={18} />
                </span>
              </button>

              <div
                style={{
                  display: "grid",
                  gridTemplateRows: open === i ? "1fr" : "0fr",
                  transition:
                    "grid-template-rows 280ms cubic-bezier(0.23, 1, 0.32, 1)",
                }}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5">
                    <p className="text-secondary text-sm leading-[1.65]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
