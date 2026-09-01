"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "motion/react";
import { List, X, Sun, Moon, Translate } from "@phosphor-icons/react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

export default function Navbar() {
  const { t, lang, toggle: toggleLang } = useLanguage();
  const { theme, toggle: toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: t.nav.features, href: "#features" },
    { label: t.nav.howItWorks, href: "#how-it-works" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];

  function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>) {
    const href = e.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] border-b transition-[background,border-color,box-shadow] duration-200 ${
        scrolled
          ? "bg-nav backdrop-blur-[16px] border-nav shadow-[0_1px_0_var(--nav-border)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="nav-inner">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 no-underline shrink-0"
          aria-label="Cashflow Home"
        >
          <Image
            src="/logo.png"
            alt="Cashflow logo"
            width={32}
            height={32}
            className="rounded-sm shrink-0"
            priority
          />
          <span className="text-primary text-[17px] font-bold tracking-[-0.3px] transition-theme">
            Cashflow
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={smoothScroll}
                className="text-secondary hover:text-primary hover:bg-surface block text-sm font-medium px-3.5 py-1.5 rounded-lg transition-[color,background-color] duration-150 no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`border border-theme text-muted hover:border-accent hover:text-accent rounded-lg p-1.5 items-center justify-center transition-[border-color,color] duration-150 bg-transparent cursor-pointer ${
              menuOpen ? "hidden lg:flex" : "flex"
            }`}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className={`text-secondary hover:text-primary border border-theme hover:border-accent p-1.5 rounded-lg transition-[color,border-color] duration-150 cursor-pointer bg-transparent ${
              menuOpen ? "hidden lg:flex" : "flex"
            } items-center justify-center`}
            aria-label={lang === "en" ? "Switch to Chinese" : "切换到英文"}
          >
            <Translate size={15} />
          </button>

          {/* CTA — desktop only */}
          <a
            href="#pricing"
            onClick={smoothScroll}
            className="hidden lg:block text-[13px] font-bold rounded-full px-5 py-2 no-underline transition-[background-color,color] duration-150 text-[#111] bg-lime hover:bg-black hover:text-white"
          >
            {t.nav.downloadApp}
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex lg:hidden text-primary bg-transparent border-none cursor-pointer p-1"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </nav>

      {/* Scroll progress bar — scaleX is a MotionValue, must stay in style */}
      <motion.div
        className="absolute -bottom-0.75 left-0 right-0 h-1 bg-lime origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-surface border-b border-theme px-5 pt-4 pb-6">
          <ul className="list-none flex flex-col gap-0.5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { smoothScroll(e); setMenuOpen(false); }}
                  className="block text-secondary text-base font-medium py-3 border-b border-theme no-underline transition-colors duration-150 hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a
                href="#pricing"
                onClick={(e) => { smoothScroll(e); setMenuOpen(false); }}
                className="block text-center text-[15px] font-bold rounded-xl py-3.5 no-underline transition-[background-color,color] duration-150 text-[#111] bg-lime hover:bg-black hover:text-white"
              >
                {t.nav.downloadApp}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
