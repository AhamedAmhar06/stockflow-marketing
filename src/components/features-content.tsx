"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  BellRing,
  ChartColumnBig,
  CircleDollarSign,
  Database,
  Layers,
  LineChart,
  ShieldCheck,
} from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const coreFeatures = [
  {
    title: "AI-powered portfolio analytics",
    desc: "See AI-assisted portfolio signals together with what you actually earned from completed trades after fees.",
    label: "Performance",
    icon: LineChart,
    size: "large",
  },
  {
    title: "Dividend income tracking",
    desc: "Measure dividend income by holding, by year, and as part of total portfolio return.",
    label: "Income",
    icon: CircleDollarSign,
    size: "wide",
  },
  {
    title: "Invested vs returned capital",
    desc: "Separate deployed capital from money already returned to understand efficiency clearly.",
    label: "Capital",
    icon: ChartColumnBig,
    size: "standard",
  },
  {
    title: "Multi-broker portfolio view",
    desc: "Bring positions from different Sri Lankan brokers into one consistent tracking layer.",
    label: "Coverage",
    icon: Layers,
    size: "standard",
  },
  {
    title: "Manual trade ledger",
    desc: "Keep a reliable source of truth for buys, sells, fees, and dividend events.",
    label: "Control",
    icon: Database,
    size: "standard",
  },
  {
    title: "Automation roadmap",
    desc: "SMS trade detection and smarter AI imports are planned to reduce friction over time.",
    label: "Roadmap",
    icon: BellRing,
    size: "large",
  },
]

const advantageCards = [
  {
    icon: BarChart3,
    title: "Made for analytics-driven clarity",
    desc: "AI-supported summaries focus on what matters after costs, not just mark-to-market movement.",
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    desc: "Your portfolio remains a personal record. No broker login is required for the core workflow.",
  },
  {
    icon: Layers,
    title: "Flexible portfolio coverage",
    desc: "Track CSE positions, cash, dividends, and related capital movement in one narrative.",
  },
]

const workflowCards = [
  "Add capital, existing holdings, and cash balances.",
  "Log completed buys, sells, fees, and dividends.",
  "Read AI-assisted portfolio performance with cleaner summaries.",
]

function FeatureTileVisual({ label }: { label: string }) {
  if (label === "Performance") {
    return (
      <div className="mb-8 grid gap-4">
        <div className="flex items-center justify-between text-sm text-[#dce0e8]">
          <span>Quality score</span>
          <span className="text-[#78d8ba]">8.9/10</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-4">
            <div className="mx-auto h-16 w-16 rounded-full border-[6px] border-[#20283a] border-t-[#efb977]" />
            <p className="mt-4 text-sm text-[#a1a8b8]">Geographic mix</p>
            <p className="text-lg text-white">Strong</p>
          </div>
          <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-4">
            <div className="mx-auto h-16 w-16 rounded-full border-[6px] border-[#20283a] border-t-[#61d9b0]" />
            <p className="mt-4 text-sm text-[#a1a8b8]">Sector spread</p>
            <p className="text-lg text-white">Balanced</p>
          </div>
        </div>
      </div>
    )
  }

  if (label === "Income") {
    return (
      <div className="mb-8 rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-4">
        <div className="mb-4 grid grid-cols-2 gap-4 text-sm text-[#a1a8b8]">
          <span>Yield</span>
          <span>Next 12 months</span>
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4 text-2xl text-white">
          <span>4.8%</span>
          <span>LKR 38,200</span>
        </div>
        <div className="flex h-24 items-end gap-3">
          {[30, 48, 26, 34, 62, 44, 56, 18].map((h, i) => (
            <span
              key={i}
              className="w-4 rounded-full bg-[linear-gradient(180deg,rgba(240,190,117,0.95),rgba(240,190,117,0.18))]"
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
      </div>
    )
  }

  if (label === "Capital") {
    return (
      <div className="mb-8 rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-4">
        <div className="mb-4 grid grid-cols-2 gap-4 text-sm text-[#a1a8b8]">
          <span>Annual fees</span>
          <span>Saved</span>
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4 text-2xl text-white">
          <span>LKR 9,200</span>
          <span>LKR 41,800</span>
        </div>
        <svg viewBox="0 0 280 120" className="h-24 w-full">
          <path d="M0 110 C50 108, 86 102, 120 88 S188 62, 280 14" fill="none" stroke="#e86b6b" strokeWidth="2.2" />
          <path d="M0 110 C50 108, 86 104, 120 98 S188 84, 280 38" fill="none" stroke="#efb977" strokeWidth="2.2" />
        </svg>
      </div>
    )
  }

  if (label === "Coverage") {
    return (
      <div className="mb-8 rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-4">
        <div className="mb-4 grid grid-cols-2 gap-3 text-sm text-[#a1a8b8]">
          <span>Broker A</span>
          <span>Broker B</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-white/[0.04] p-3 text-sm text-white">COMB · JKH · LOFC</div>
          <div className="rounded-xl bg-white/[0.04] p-3 text-sm text-white">SAMP · HNB · DIST</div>
        </div>
      </div>
    )
  }

  if (label === "Reporting") {
    return (
      <div className="mb-8 rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-4">
        <div className="mb-4 h-12 rounded-xl bg-white/[0.05]" />
        <div className="mb-4 h-12 w-2/3 rounded-xl bg-white/[0.05]" />
        <div className="grid grid-cols-4 gap-2">
          {[45, 30, 36, 52].map((h, i) => (
            <span
              key={i}
              className="rounded-full bg-[linear-gradient(180deg,rgba(99,125,233,0.95),rgba(99,125,233,0.2))]"
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="mb-8 rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-4">
      <div className="flex items-center justify-center rounded-[1.2rem] border border-white/10 px-4 py-6 text-2xl text-white">
        AI-assisted imports
      </div>
      <div className="mt-4 flex justify-center gap-4 text-sm text-[#a1a8b8]">
        <span className="rounded-full bg-white/[0.04] px-3 py-1">Trades</span>
        <span className="rounded-full bg-white/[0.04] px-3 py-1">Dividends</span>
        <span className="rounded-full bg-white/[0.04] px-3 py-1">Fees</span>
      </div>
    </div>
  )
}

export default function FeaturesContent() {
  return (
    <main className="bg-[#020611] text-slate-50">
      <section className="relative overflow-hidden border-b border-white/6 bg-[#020611] pb-20 pt-14 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(56,79,160,0.26),transparent_28%),radial-gradient(circle_at_80%_65%,rgba(235,176,97,0.12),transparent_26%)]" />
        <div className="mx-auto grid max-w-[1380px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.9fr)] lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-[44rem]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f0be75]">
              Product features
            </p>
            <h1 className="mt-6 text-[3.6rem] font-medium leading-[0.94] tracking-[-0.07em] text-white sm:text-[5.8rem]">
              Best stock tracking app features for CSE investors.
            </h1>
            <p className="mt-8 max-w-[40rem] text-xl leading-relaxed text-slate-300">
              StockFlow is built for investment analysis and portfolio management with
              AI-based analytics, dividend income tracking, and clearer CSE reporting.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex h-16 items-center gap-3 rounded-full bg-[linear-gradient(135deg,#f2c07b_0%,#e5aa5b_100%)] px-8 text-xl font-medium text-[#16110c] shadow-[0_22px_60px_rgba(229,170,91,0.28)] transition hover:brightness-105"
              >
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(8,15,30,0.94),rgba(5,8,18,0.98))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.34)] sm:col-span-2"
            >
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.24em] text-[#8991a5]">
                  StockFlow dashboard
                </p>
                <span className="rounded-full bg-[#103f31] px-3 py-1.5 text-sm text-[#57d8aa]">
                  +9.6% realised
                </span>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
                  <p className="text-sm text-[#8991a5]">Capital invested</p>
                  <p className="mt-3 text-3xl font-medium tracking-[-0.05em] text-white">
                    LKR 250,000
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
                  <p className="text-sm text-[#8991a5]">Realised profit</p>
                  <p className="mt-3 text-3xl font-medium tracking-[-0.05em] text-[#57d8aa]">
                    +LKR 15,750
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
                  <p className="text-sm text-[#8991a5]">Dividend income</p>
                  <p className="mt-3 text-3xl font-medium tracking-[-0.05em] text-[#f0be75]">
                    LKR 8,200
                  </p>
                </div>
              </div>
            </motion.div>

            {workflowCards.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="rounded-[1.8rem] border border-white/8 bg-white/[0.04] p-5"
              >
                <p className="text-lg leading-relaxed text-slate-200">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#020611] py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_48%_44%,rgba(31,57,141,0.22),transparent_28%),radial-gradient(circle_at_78%_70%,rgba(231,170,90,0.12),transparent_24%)]" />
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
          <motion.div
            className="mx-auto mb-14 max-w-4xl text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
              <span className="bg-gradient-to-r from-[#f7d578] via-[#efbc42] to-[#f7d578] bg-clip-text text-transparent">
                Feature system, not just a checklist
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-2xl">
              The experience is structured around how CSE investors actually review
              analytics, performance, income, capital movement, and coverage.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {coreFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className={`relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(10,15,30,0.88),rgba(5,8,18,0.94))] p-7 shadow-[0_32px_90px_rgba(0,0,0,0.34)] ${
                  feature.size === "large"
                    ? "min-h-[23rem]"
                    : feature.size === "wide"
                      ? "lg:col-span-2 min-h-[16rem]"
                      : "min-h-[16rem]"
                }`}
              >
                <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_top_left,rgba(81,110,214,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(240,183,103,0.12),transparent_24%)]" />
                <div className="relative flex h-full flex-col">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2b2319] text-[#f1be62]">
                      <feature.icon className="h-5 w-5" />
                    </span>
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                      {feature.label}
                    </p>
                  </div>
                  <FeatureTileVisual label={feature.label} />
                  <div className="mt-auto">
                    <h3 className="mb-3 text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                      {feature.title}
                    </h3>
                    <p className="max-w-[30rem] text-lg leading-relaxed text-slate-300">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f4f2ed] py-24 text-slate-900">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
          <motion.div
            className="mx-auto mb-16 max-w-4xl text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#bf7a28]">
              Why it works
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-[#0f172a] sm:text-6xl">
              Unique advantages for Colombo Stock Exchange investors
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-8 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {advantageCards.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className="text-center"
              >
                <div className="mx-auto mb-8 inline-flex h-28 w-28 items-center justify-center rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(139,156,235,0.28),rgba(29,39,86,0.96))] shadow-[0_28px_60px_rgba(29,39,86,0.18)]">
                  <card.icon className="h-11 w-11 text-white" />
                </div>
                <h3 className="text-3xl font-semibold tracking-[-0.05em] text-[#0f172a]">
                  {card.title}
                </h3>
                <p className="mx-auto mt-4 max-w-[24rem] text-lg leading-relaxed text-[#5b6578]">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
