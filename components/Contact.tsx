"use client";

import { useState } from "react";
import {
  Envelope,
  ChatCircle,
  PaperPlaneTilt,
  CheckCircle,
} from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n";
import { useInView } from "@/lib/useInView";
import { BlurFade } from "@/components/ui/blur-fade";

const inputClass =
  "w-full bg-input border border-theme rounded-xl px-4 py-[14px] text-[15px] text-input outline-none transition-[border-color] duration-150 focus:border-[#C0F158]";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const [headerRef, headerVisible] = useInView(0.2);
  const [bodyRef, bodyVisible] = useInView(0.1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="stack-section bg-surface-alt transition-theme py-[100px] z-[10]"
    >
      <div className="wrap max-w-[1100px]">
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
          <h2 className="text-primary font-bold tracking-[-1px] leading-[1.15] mb-4 text-[clamp(28px,4vw,42px)]">
            {c.headline}
          </h2>
          <p className="text-secondary text-base max-w-[460px] mx-auto leading-[1.6]">
            {c.subheadline}
          </p>
        </div>

        <div
          ref={bodyRef}
          className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 items-start contact-body"
          style={{
            opacity: bodyVisible ? 1 : 0,
            transform: bodyVisible ? "none" : "translateY(20px)",
            transition:
              "opacity 0.5s ease 100ms, transform 0.5s cubic-bezier(0.23, 1, 0.32, 1) 100ms",
          }}
        >
          {/* Contact info */}
          <div className="flex flex-col gap-4">
            {/* Email */}
            <a
              href="mailto:support@olzytech.com"
              className="flex items-center gap-4 bg-surface border border-theme shadow-card no-underline transition-[border-color] duration-200 hover:[border-color:var(--border-hover)] rounded-2xl px-6 py-5"
            >
              <div className="w-11 h-11 bg-[#C0F158] rounded-xl flex items-center justify-center shrink-0">
                <Envelope size={20} color="#202020" />
              </div>
              <div>
                <div className="text-muted text-xs font-medium mb-1">
                  {c.email}
                </div>
                <div className="text-primary text-[15px] font-semibold">
                  support@olzytech.com
                </div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/60199692350"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-surface border border-theme shadow-card no-underline transition-[border-color] duration-200 hover:[border-color:var(--border-hover)] rounded-2xl px-6 py-5"
            >
              <div className="w-11 h-11 bg-[#C0F158] rounded-xl flex items-center justify-center shrink-0">
                <ChatCircle size={20} color="#052e16" />
              </div>
              <div>
                <div className="text-muted text-xs font-medium mb-1">
                  {c.whatsapp}
                </div>
                <div className="text-primary text-[15px] font-semibold">
                  +6019-969 2350
                </div>
              </div>
            </a>

            {/* Response time note */}
            {/* <div className="bg-accent-muted border border-accent-soft rounded-xl px-5 py-4">
              <p className="text-secondary text-[13px] leading-[1.6]">
                💬 We typically respond within 24 hours on business days. For
                urgent support, WhatsApp is fastest.
              </p>
            </div> */}
          </div>

          {/* Contact form */}
          <div className="bg-surface border border-theme shadow-card rounded-[20px] p-8">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle
                  size={48}
                  color="#C0F158"
                  weight="regular"
                  style={{ marginBottom: "16px" }}
                />
                <h3 className="text-primary text-xl font-bold mb-2">
                  Message Sent!
                </h3>
                <p className="text-secondary text-sm">{c.form.success}</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-4"
              >
                <div className="contact-name-grid">
                  <div>
                    <label className="text-muted block text-xs font-medium mb-2">
                      {c.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      className={inputClass}
                      placeholder="Alex Tan"
                    />
                  </div>
                  <div>
                    <label className="text-muted block text-xs font-medium mb-2">
                      {c.form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className={inputClass}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-muted block text-xs font-medium mb-2">
                    {c.form.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="e.g. Question about payday cycle, Pro upgrade, App feedback"
                  />
                </div>

                <div>
                  <label className="text-muted block text-xs font-medium mb-2">
                    {c.form.message}
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`${inputClass} resize-y min-h-[120px]`}
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 text-[15px] font-bold text-[#202020] bg-lime border-none rounded-xl p-[14px] cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 transition-opacity duration-150 hover:opacity-85"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-[rgba(32,32,32,0.3)] border-t-[#202020] inline-block [animation:spin_0.6s_linear_infinite]" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <PaperPlaneTilt size={16} />
                      {c.form.submit}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
