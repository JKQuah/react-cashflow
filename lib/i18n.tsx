"use client";

import React, { createContext, useContext, useState } from "react";

type Lang = "en" | "zh";

const translations = {
  en: {
    nav: {
      features: "Features",
      howItWorks: "How It Works",
      pricing: "Pricing",
      faq: "FAQ",
      contact: "Contact",
      downloadApp: "Download App",
    },
    hero: {
      badge: "Available on iOS & Android",
      headline1: "Not a tracking app.",
      headline2: "A cash flow improvement system.",
      subheadline:
        "Your balance looks fine. Until it doesn't. Cashflow tracks by payday cycle, flags credit card cutoffs before they hit, and shows exactly what you will have left when the next pay rolls in.",
      ctaApple: "App Store",
      ctaGoogle: "Google Play",
      comingSoon: "Coming Soon",
      storeBadge: "Coming to",
    },
    features: {
      badge: "Features",
      headline: "Everything you need to take control",
      subheadline:
        "Built around how you actually get paid and spend, not how the calendar works.",
      items: [
        {
          title: "Payday Cycle Cashflow",
          desc: "Your cashflow view follows your actual payday date, not Jan 1 to 31. See exactly what comes in and goes out between each pay cycle.",
        },
        {
          title: "Credit Card Cutoff Reminders",
          desc: "Log credit expenses and get reminded before your statement cutoff date. Always know what you owe in the current billing cycle.",
        },
        {
          title: "Credit & Debit Tracking",
          desc: "Record every expense with its payment method. Know exactly how much of your spending runs on credit vs debit at any time.",
        },
        {
          title: "Next Cycle Outlook",
          desc: "See a forward projection of your next payday cycle: commitments, expected expenses, and remaining buffer, before it arrives.",
        },
        {
          title: "Recurring Bills Tracker",
          desc: "Track subscriptions, loans, and fixed commitments. Reminders are aligned to your pay cycle, not arbitrary calendar dates.",
        },
        {
          title: "Financial Goal Planner",
          desc: "Set savings goals within your payday cycle. Build consistent habits and watch your buffer grow cycle by cycle.",
        },
      ],
    },
    howItWorks: {
      badge: "How It Works",
      headline: "Up and running in minutes",
      steps: [
        {
          number: "01",
          title: "Set Your Payday Date",
          desc: "Tell us when you get paid. We structure your entire cashflow view around your real pay cycle, not the calendar month.",
        },
        {
          number: "02",
          title: "Log Expenses by Payment Method",
          desc: "Record every expense as credit or debit in seconds. Credit entries are automatically tracked against your card's cutoff date.",
        },
        {
          number: "03",
          title: "See Your Real Cashflow",
          desc: "Get a clear view of inflow, outflow, and remaining buffer for each cycle, plus a forward outlook for the next one.",
        },
      ],
    },
    stats: {
      headline: "Trusted by thousands across Asia",
      items: [
        { value: "500+", label: "Active Users" },
        { value: "30+", label: "Categories" },
        { value: "7", label: "Day Free Trial" },
        { value: "4.8", label: "App Rating" },
      ],
    },
    pricing: {
      badge: "Pricing",
      headline: "Simple, transparent pricing",
      subheadline: "Start free. Upgrade when you need more.",
      monthly: "Monthly",
      free: {
        name: "Free",
        price: "RM 0",
        period: "forever",
        desc: "Perfect to get started",
        cta: "Get Started Free",
        features: [
          "Up to 5 commitments",
          "30+ categories",
          "Unlimited expense records",
          "Basic cash flow chart",
          "Last 3 months history",
        ],
      },
      pro: {
        name: "Pro",
        price: "RM 14.90",
        period: "per download",
        desc: "For serious financial improvement",
        cta: "Start 7 Day Free Trial",
        badge: "Most Popular",
        features: [
          "All in Free plan, plus:",
          "Unlimited commitments",
          "Advanced insights & charts",
          "Unlimited custom categories",
          "Bill reminders & alerts",
          "Full transaction history",
          "Priority support",
        ],
      },
      ai: {
        name: "Powered by AI",
        price: "RM 9.90",
        period: "per month",
        desc: "Know if you can afford it. Before you commit.",
        cta: "Coming Soon",
        badge: "Coming Soon",
        features: [
          "Everything in Pro, plus:",
          "AI tells you if a new loan or subscription is a safe move before you commit",
          "See your predicted cash position 3 payday cycles ahead",
          "Know which spending categories are quietly shrinking your buffer",
          "Get the best window to make large purchases around your statement cutoff",
          "Unusual expenses flagged before they become a pattern",
        ],
      },
    },
    testimonials: {
      badge: "Reviews",
      headline: "People are changing their financial lives",
      items: [
        {
          name: "Admellis C.",
          location: "United States",
          text: "Setting my payday date changed everything. Now I can see exactly how much buffer I have before my next pay, not just what the calendar says.",
        },
        {
          name: "Henry Q.",
          location: "Singapore",
          text: "The credit cutoff reminders saved me twice already. I never knew when my statement closed, now I plan around it.",
        },
        {
          name: "Ellie W.",
          location: "Malaysia",
          text: "Finally an app that tracks whether I paid by credit or debit. I can see which expenses hit my card cutoff this cycle vs what is on debit.",
        },
        {
          name: "Raymond L.",
          location: "Hong Kong",
          text: "I love the next cycle outlook. I can see what is coming up and plan my spending accordingly.",
        },
      ],
    },
    faq: {
      badge: "FAQ",
      headline: "Frequently asked questions",
      items: [
        {
          q: "What platforms is Cashflow available on?",
          a: "Cashflow is available on both iOS (App Store) and Android (Google Play).",
        },
        {
          q: "What is a payday cycle and why does it matter?",
          a: "A payday cycle runs from one payday to the next. For example, the 25th of one month to the 24th of the next. This gives you a more accurate picture of your real cashflow than a Jan 1 to 31 calendar view, because that is how your actual money moves.",
        },
        {
          q: "How does credit card cutoff tracking work?",
          a: "When you log an expense as credit, Cashflow tracks it against your card's statement cutoff date. You will get a reminder before the cutoff so you always know what you owe in the current billing cycle.",
        },
        {
          q: "Is my financial data secure?",
          a: "Absolutely. Your data is encrypted at rest and in transit. We never connect directly to your bank. You enter data manually, keeping full control on your device.",
        },
        {
          q: "Does Cashflow support multiple currencies?",
          a: "Not yet. Cashflow currently supports a single currency per account. Multi-currency support may be added in a future update.",
        },
        {
          q: "How does the Pro package work?",
          a: "Pro is a one-time purchase at RM 14.90. New users get a 7 day free trial with full Pro features, no credit card required to start.",
        },
      ],
    },
    contact: {
      badge: "Contact",
      headline: "Get in touch",
      subheadline:
        "Have a question, feedback, or partnership inquiry? We'd love to hear from you.",
      email: "Email Us",
      whatsapp: "WhatsApp",
      form: {
        name: "Your Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        submit: "Send Message",
        success: "Message sent! We'll get back to you within 24 hours.",
      },
    },
    footer: {
      tagline: "Not a tracking app. A cash flow improvement system.",
      links: {
        product: "Product",
        features: "Features",
        pricing: "Pricing",
        faq: "FAQ",
        legal: "Legal",
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
        support: "Support",
        contact: "Contact Us",
        whatsapp: "WhatsApp Support",
      },
      copyright: "© 2026 Cashflow. All rights reserved.",
    },
  },
  zh: {
    nav: {
      features: "功能",
      howItWorks: "如何使用",
      pricing: "价格",
      faq: "常见问题",
      contact: "联系我们",
      downloadApp: "下载应用",
    },
    hero: {
      badge: "支持 iOS 与 Android",
      headline1: "不只是记账应用。",
      headline2: "一套现金流改善系统。",
      subheadline:
        "余额看起来没问题，直到它出问题。Cashflow 按薪资周期追踪收支，提前提醒信用卡截止日，让你清楚知道下次发薪时手头还剩多少。",
      ctaApple: "App Store",
      ctaGoogle: "Google Play",
      comingSoon: "即将上线",
      storeBadge: "即将登陆",
    },
    features: {
      badge: "功能特色",
      headline: "一切你需要的财务掌控工具",
      subheadline: "围绕你真实的收入与支出方式设计，而非日历的运作方式。",
      items: [
        {
          title: "薪资周期现金流",
          desc: "现金流视图以你的实际发薪日为基准，而非1月1日至31日。清晰查看每个薪资周期内的收入与支出。",
        },
        {
          title: "信用卡截止日提醒",
          desc: "记录信用卡消费，并在账单截止日前收到提醒，让你随时掌握本周期的欠款金额。",
        },
        {
          title: "信用卡与借记卡分类",
          desc: "为每笔支出记录支付方式。随时了解信用卡消费与借记/现金消费各占多少比例。",
        },
        {
          title: "下一周期预览",
          desc: "在下一个薪资周期到来之前，提前查看已承诺支出、预计开销及剩余缓冲空间。",
        },
        {
          title: "定期账单追踪",
          desc: "追踪订阅、贷款及固定支出。提醒与你的薪资周期对齐，而非任意日历日期。",
        },
        {
          title: "财务目标规划",
          desc: "在薪资周期内设定储蓄目标，培养稳定习惯，见证每个周期的缓冲空间持续增长。",
        },
      ],
    },
    howItWorks: {
      badge: "使用步骤",
      headline: "几分钟即可上手",
      steps: [
        {
          number: "01",
          title: "设置发薪日期",
          desc: "告诉我们你的发薪日。我们将以你真实的薪资周期而非日历月，构建整个现金流视图。",
        },
        {
          number: "02",
          title: "按支付方式记录支出",
          desc: "几秒内将每笔支出记录为信用卡或借记卡。信用卡条目将自动与账单截止日挂钩追踪。",
        },
        {
          number: "03",
          title: "掌握真实现金流",
          desc: "清晰查看每个周期的收入、支出及剩余缓冲，并提前预览下一个周期的财务状况。",
        },
      ],
    },
    stats: {
      headline: "深受亚洲数千用户信赖",
      items: [
        { value: "500+", label: "活跃用户" },
        { value: "30+", label: "支出类别" },
        { value: "7", label: "天免费试用" },
        { value: "4.8", label: "应用评分" },
      ],
    },
    pricing: {
      badge: "价格方案",
      headline: "简单透明的定价",
      subheadline: "免费起步，按需升级。",
      monthly: "每月",
      free: {
        name: "免费版",
        price: "RM 0",
        period: "永久免费",
        desc: "入门首选",
        cta: "免费开始",
        features: [
          "最多 5 个账户",
          "每月 50 笔交易",
          "基础现金流图表",
          "10 个支出类别",
          "最近 3 个月历史记录",
        ],
      },
      pro: {
        name: "Pro 版",
        price: "RM 14.90",
        period: "一次性付费",
        desc: "认真改善财务的首选",
        cta: "开始免费试用",
        badge: "最受欢迎",
        features: [
          "无限账户",
          "无限交易记录",
          "高级报告与图表",
          "无限自定义类别",
          "账单提醒与通知",
          "导出 CSV 和 PDF",
          "完整交易历史",
          "优先客户支持",
        ],
      },
      ai: {
        name: "AI 版",
        price: "RM 9.90",
        period: "每月",
        desc: "承担前先知道你是否负担得起。",
        cta: "即将推出",
        badge: "即将推出",
        features: [
          "包含 Pro 版全部功能",
          "新增贷款或订阅前，AI 告诉你这步是否稳妥",
          "预见未来三个薪资周期的实际资金走势",
          "找出每周期悄悄侵蚀你缓冲金的消费类别",
          "根据账单截止日，找到大额消费的最佳时机",
          "周期中途提示你是否正偏离储蓄目标",
          "异常支出在成为习惯之前被自动标记",
        ],
      },
    },
    testimonials: {
      badge: "用户评价",
      headline: "他们正在改变自己的财务生活",
      items: [
        {
          name: "Admellis C.",
          location: "美国",
          text: "设置发薪日之后，一切都变了。现在我能清楚看到下次发薪前还有多少缓冲，而不只是日历显示的数字。",
        },
        {
          name: "Henry Q.",
          location: "新加坡",
          text: "信用卡截止日提醒已经帮我避免了两次财务被动。以前根本不知道账单什么时候截止，现在可以提前规划了。",
        },
        {
          name: "Ellie W.",
          location: "马来西亚",
          text: "终于有一款应用能区分信用卡和借记卡消费。我能清楚看到哪些支出计入本期账单，哪些是直接扣款。",
        },
        {
          name: "Raymond L.",
          location: "香港",
          text: "我爱下一个周期的展望功能。我可以看到即将发生的事情，并相应地计划我的支出。",
        },
      ],
    },
    faq: {
      badge: "常见问题",
      headline: "你可能想知道的",
      items: [
        {
          q: "Cashflow 支持哪些平台？",
          a: "Cashflow 支持 iOS（App Store）和 Android（Google Play）。",
        },
        {
          q: "什么是薪资周期？为什么它更准确？",
          a: "薪资周期是指从一次发薪日到下一次发薪日之间的时段，例如每月25日至次月24日。这比1月1日至31日的日历视图更能真实反映你的现金流动方式，因为这才是你的实际资金流动。",
        },
        {
          q: "信用卡截止日追踪是如何工作的？",
          a: "当你将某笔支出记录为信用卡消费时，Cashflow 会将其与你的账单截止日挂钩。在截止日前你会收到提醒，随时掌握本账期的应付金额。",
        },
        {
          q: "我的财务数据安全吗？",
          a: "绝对安全。您的数据在存储和传输时均经过加密。我们不会直接连接您的银行账户，数据由您手动输入，完全掌控在您手中。",
        },
        {
          q: "Cashflow 支持多货币吗？",
          a: "暂时不支持。Cashflow 目前每个账户仅支持单一货币。多货币功能可能会在未来版本中加入。",
        },
        {
          q: "Pro 版如何计费？",
          a: "Pro 版一次性收费 RM 14.90，新用户可享受 7 天全功能免费试用，无需信用卡即可开始。",
        },
      ],
    },
    contact: {
      badge: "联系我们",
      headline: "与我们取得联系",
      subheadline: "有问题、反馈或合作咨询？我们很乐意听到您的声音。",
      email: "发送邮件",
      whatsapp: "WhatsApp",
      form: {
        name: "您的姓名",
        email: "电子邮箱",
        subject: "主题",
        message: "留言内容",
        submit: "发送消息",
        success: "消息已发送！我们将在 24 小时内回复您。",
      },
    },
    footer: {
      tagline: "不只是记账应用。一套现金流改善系统。",
      links: {
        product: "产品",
        features: "功能特色",
        pricing: "价格方案",
        faq: "常见问题",
        legal: "法律条款",
        privacy: "隐私政策",
        terms: "服务条款",
        support: "支持",
        contact: "联系我们",
        whatsapp: "WhatsApp 客服",
      },
      copyright: "© 2026 Cashflow. 保留所有权利。",
    },
  },
} as const;

type Translations = typeof translations.en;

interface LanguageContextType {
  lang: Lang;
  t: Translations;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  t: translations.en,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "zh" : "en"));
  const t = translations[lang] as Translations;
  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
