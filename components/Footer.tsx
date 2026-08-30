"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

const linkClass =
  "text-sm text-white/45 no-underline py-[5px] block transition-colors duration-150 hover:text-white/90";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.08] pt-20 overflow-hidden">
      <div className="wrap">
        {/* Top: brand + links */}
        <div className="footer-grid pb-16 border-b border-white/[0.08] mb-10">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 no-underline mb-5">
              <Image
                src="/logo.png"
                alt="Cashflow logo"
                width={32}
                height={32}
                className="rounded-sm"
              />
              <span className="text-[18px] font-bold text-[#FAFAFA] tracking-[-0.3px]">
                Cashflow
              </span>
            </a>
            <p className="text-sm text-white/40 leading-[1.7] max-w-[220px] mb-5">
              {f.tagline}
            </p>

            {/* Download buttons */}
            <div className="flex gap-2">
              {/* App Store */}
              <a
                href="#"
                className="inline-flex items-center gap-[10px] bg-white/10 text-white rounded-sm px-[14px] py-[8px] no-underline transition-opacity duration-150 hover:opacity-80"
                aria-label="Download on the App Store"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1280px-Apple_logo_white.svg.png"
                  alt=""
                  aria-hidden="true"
                  width={15}
                  height={18}
                  className="object-contain"
                />
                <div>
                  <div className="text-[9px] font-normal opacity-60 leading-none mb-0.5">
                    Download on the
                  </div>
                  <div className="text-[13px] font-bold leading-none tracking-[-0.3px]">
                    App Store
                  </div>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="#"
                className="inline-flex items-center gap-[10px] bg-white/10 text-white rounded-sm px-[14px] py-[8px] no-underline transition-opacity duration-150 hover:opacity-80"
                aria-label="Get it on Google Play"
              >
                <svg
                  width="15"
                  height="17"
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
                  <div className="text-[9px] font-normal opacity-60 leading-none mb-0.5">
                    Get it on
                  </div>
                  <div className="text-[13px] font-bold leading-none tracking-[-0.3px]">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[11px] font-bold text-white/30 tracking-[2px] uppercase mb-5">
              {f.links.product}
            </h3>
            <a href="#features" className={linkClass}>
              {f.links.features}
            </a>
            <a href="#pricing" className={linkClass}>
              {f.links.pricing}
            </a>
            <a href="#faq" className={linkClass}>
              {f.links.faq}
            </a>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[11px] font-bold text-white/30 tracking-[2px] uppercase mb-5">
              {f.links.legal}
            </h3>
            <a href="/privacy" className={linkClass}>
              {f.links.privacy}
            </a>
            <a href="/terms" className={linkClass}>
              {f.links.terms}
            </a>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-[11px] font-bold text-white/30 tracking-[2px] uppercase mb-5">
              {f.links.support}
            </h3>
            <a href="#contact" className={linkClass}>
              {f.links.contact}
            </a>
            <a
              href="https://wa.me/60199692350"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {f.links.whatsapp}
            </a>
            <a href="mailto:support@olzytech.com" className={linkClass}>
              support@olzytech.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 pb-10">
          <div className="flex flex-col gap-1">
            <p className="text-[13px] text-white/25 m-0">{f.copyright}</p>
          </div>
          <p className="text-[12px] text-white/20 m-0">
            Built by{" "}
            <span className="text-white/40 font-medium">
              Olzytech Solutions
            </span>
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy"
              className="text-[13px] text-white/45 no-underline transition-colors duration-150 hover:text-white/90"
            >
              {f.links.privacy}
            </a>
            <a
              href="/terms"
              className="text-[13px] text-white/45 no-underline transition-colors duration-150 hover:text-white/90"
            >
              {f.links.terms}
            </a>
          </div>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="w-full overflow-hidden leading-[0.85] pointer-events-none select-none">
        <p className="font-extrabold tracking-[-0.04em] text-white/[0.07] whitespace-nowrap m-0 text-center text-[clamp(80px,18vw,260px)]">
          Cashflow
        </p>
      </div>
    </footer>
  );
}
