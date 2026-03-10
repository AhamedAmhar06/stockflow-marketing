"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Check,
  ChevronDown,
  DollarSign,
  Layers,
  LineChart,
  Lock,
  MessageCircle,
  Shield,
  Users,
} from "lucide-react"
import BrandMark from "@/components/shared/brand-mark"

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const brokerLogos = [
  { name: "Asha Securities", short: "AS" },
  { name: "Asia Securities", short: "AZ" },
  { name: "Capital Alliance Securities", short: "CAL" },
  { name: "C T Smith Stockbrokers", short: "CTS" },
  { name: "First Capital Equities", short: "FCE" },
  { name: "JB Securities", short: "JBS" },
  { name: "John Keells Stockbrokers", short: "JKS" },
  { name: "LOLC Securities", short: "LOLC" },
  { name: "NDB Securities", short: "NDB" },
  { name: "Peoples Securities", short: "PS" },
  { name: "SC Securities", short: "SCS" },
  { name: "Softlogic Stockbrokers", short: "SSL" },
  { name: "Tavistock Securities", short: "TAV" },
  { name: "UB Finance", short: "UBF" },
  { name: "Wealth Trust Securities", short: "WTS" },
]

const assetItems = [
  "CSE Stocks",
  "Sector allocation",
  "Realised returns",
  "Capital deployed",
  "Dividend income",
  "Brokerage costs",
]

const coverageCards = [
  {
    name: "Commercial Bank",
    ticker: "COMB",
    value: "LKR 482,000",
    delta: "+LKR 36,400 · +8.2%",
  },
  {
    name: "John Keells Holdings",
    ticker: "JKH",
    value: "LKR 268,500",
    delta: "+LKR 18,900 · +7.6%",
  },
  {
    name: "LOLC Finance",
    ticker: "LOFC",
    value: "LKR 195,000",
    delta: "+LKR 12,250 · +6.7%",
  },
  {
    name: "Sampath Bank",
    ticker: "SAMP",
    value: "LKR 154,400",
    delta: "+LKR 9,820 · +4.9%",
  },
]

const featureCards = [
  {
    title: "AI-Based Portfolio Analytics",
    desc: "Track AI-assisted portfolio signals together with net trade outcomes after brokerage fees.",
    label: "Performance",
    size: "tall",
  },
  {
    title: "Dividend Income Tracking",
    desc: "See dividend income totals across all holdings.",
    label: "Income",
    size: "wide",
  },
  {
    title: "Capital Invested vs Returned",
    desc: "Understand exactly how much money you invested vs received.",
    label: "Capital",
    size: "standard",
  },
  {
    title: "Multi-Broker Portfolio View",
    desc: "See your CSE positions across multiple brokers in one place.",
    label: "Coverage",
    size: "standard",
  },
  {
    title: "Portfolio Performance Insights",
    desc: "Understand portfolio performance clearly with AI-guided summaries over time.",
    label: "Reporting",
    size: "standard",
  },
  {
    title: "AI Automation Roadmap",
    desc: "SMS trade detection and smarter AI imports will reduce manual tracking in future updates.",
    label: "Automation",
    size: "tall",
  },
]

const securityBullets = [
  "Portfolio data stored securely",
  "No broker login required",
  "Data used only for personal performance tracking",
  "Privacy-first design",
]

const communityCards = [
  {
    title: "Product updates",
    desc: "Stay informed about AI analytics and product improvements in StockFlow.",
    stat: "Release notes and product updates",
  },
  {
    title: "Investor discussions",
    desc: "Future community insights and strategies.",
    stat: "Investor-first roadmap",
  },
  {
    title: "Learning resources",
    desc: "Guides for Colombo Stock Exchange investors.",
    stat: "Practical CSE education",
  },
  {
    title: "Portfolio insights",
    desc: "Understand your CSE portfolio performance better over time.",
    stat: "Clearer long-term decisions",
  },
]

const steps = [
  {
    title: "Add your capital base",
    desc: "Start with current invested capital, cash, and the holdings you want to track.",
  },
  {
    title: "Log completed trades",
    desc: "Record buys, sells, dividends, and brokerage so realised outcomes stay accurate.",
  },
  {
    title: "See what you actually earned",
    desc: "Get a cleaner view of AI analytics, realised profit, returned capital, dividend income, and portfolio efficiency.",
  },
]

function FeatureCardVisual({ variant }: { variant: string }) {
  if (variant === "Performance") {
    return (
      <div className="mb-8 grid gap-4">
        <div className="flex items-center justify-between text-sm text-[#dce0e8]">
          <span>Quality score</span>
          <span className="text-[#78d8ba]">8.9/10</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-4">
            <div className="mx-auto h-16 w-16 rounded-full border-[6px] border-[#20283a] border-t-[#efb977]" />
            <p className="mt-4 text-sm text-[#a1a8b8]">Diversification</p>
            <p className="text-lg text-white">Strong</p>
          </div>
          <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-4">
            <div className="mx-auto h-16 w-16 rounded-full border-[6px] border-[#20283a] border-t-[#61d9b0]" />
            <p className="mt-4 text-sm text-[#a1a8b8]">Resilience</p>
            <p className="text-lg text-white">Balanced</p>
          </div>
        </div>
      </div>
    )
  }

  if (variant === "Income") {
    return (
      <div className="mb-8 grid gap-4">
        <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-4">
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
      </div>
    )
  }

  if (variant === "Capital") {
    return (
      <div className="mb-8 grid gap-4">
        <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-4">
          <div className="mb-4 grid grid-cols-2 gap-4 text-sm text-[#a1a8b8]">
            <span>Annual fees</span>
            <span>Saved</span>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4 text-2xl text-white">
            <span>LKR 9,200</span>
            <span>LKR 41,800</span>
          </div>
          <svg viewBox="0 0 280 120" className="h-24 w-full">
            <path
              d="M0 110 C50 108, 86 102, 120 88 S188 62, 280 14"
              fill="none"
              stroke="#e86b6b"
              strokeWidth="2.2"
            />
            <path
              d="M0 110 C50 108, 86 104, 120 98 S188 84, 280 38"
              fill="none"
              stroke="#efb977"
              strokeWidth="2.2"
            />
          </svg>
        </div>
      </div>
    )
  }

  if (variant === "Coverage") {
    return (
      <div className="mb-8 grid gap-4">
        <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-4">
          <div className="mb-4 grid grid-cols-2 gap-3 text-sm text-[#a1a8b8]">
            <span>Broker A</span>
            <span>Broker B</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/[0.04] p-3 text-sm text-white">
              COMB · JKH · LOFC
            </div>
            <div className="rounded-xl bg-white/[0.04] p-3 text-sm text-white">
              SAMP · HNB · DIST
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === "Reporting") {
    return (
      <div className="mb-8 grid gap-4">
        <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-4">
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
      </div>
    )
  }

  return (
    <div className="mb-8 grid gap-4">
      <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-4">
        <div className="flex items-center justify-center rounded-[1.2rem] border border-white/10 px-4 py-6 text-2xl text-white">
          AI-assisted imports
        </div>
        <div className="mt-4 flex justify-center gap-4 text-sm text-[#a1a8b8]">
          <span className="rounded-full bg-white/[0.04] px-3 py-1">Trades</span>
          <span className="rounded-full bg-white/[0.04] px-3 py-1">Dividends</span>
          <span className="rounded-full bg-white/[0.04] px-3 py-1">Fees</span>
        </div>
      </div>
    </div>
  )
}

export default function HomeContent() {
  return (
    <main className="bg-[#07080d] text-slate-50">
      <motion.section
        className="relative overflow-hidden border-b border-white/6 bg-[#07080d] pb-20 pt-8 sm:pb-24 lg:pb-28"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_26%_18%,rgba(38,56,109,0.48),transparent_30%),radial-gradient(circle_at_78%_56%,rgba(23,42,95,0.42),transparent_24%),linear-gradient(90deg,rgba(8,9,15,1)_0%,rgba(9,12,27,0.94)_32%,rgba(7,8,13,1)_100%)]" />
        <div className="pointer-events-none absolute -left-16 bottom-20 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(229,180,113,0.2),transparent_62%)] blur-xl" />
        <div className="pointer-events-none absolute right-0 top-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(72,103,210,0.12),transparent_64%)] blur-2xl" />

        <div className="relative mx-auto grid max-w-[1380px] items-center gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(520px,0.95fr)] lg:px-10">
          <div className="max-w-[42rem] pt-10 lg:pt-16">
            <span className="inline-flex items-center rounded-full border border-[#9b7343] bg-[rgba(232,179,111,0.08)] px-5 py-2 text-sm font-medium text-[#f3d8b0]">
              AI CSE portfolio management app
            </span>
            <h1 className="mt-10 max-w-[11ch] text-[4.2rem] font-medium leading-[0.94] tracking-[-0.07em] text-[#f3efe7] sm:text-[5.5rem] lg:text-[7rem]">
              Know. Track.
              <br />
              Earn.
              <br />
              <span className="bg-gradient-to-r from-[#8f97d9] via-[#cbc1cf] to-[#f0ddcc] bg-clip-text text-transparent">
                Invest.
              </span>
            </h1>
            <div className="mt-12 grid max-w-2xl gap-8 text-lg leading-relaxed text-[#9ca3b7] sm:grid-cols-2">
              <p>
                StockFlow helps Colombo Stock Exchange investors manage stock portfolios
                with AI-based analytics focused on net outcomes.
              </p>
              <p>
                Track realised profit, dividend income, invested capital, and net
                returns in a single portfolio view built for CSE workflows.
              </p>
            </div>
            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-flex h-20 items-center gap-3 rounded-full bg-[#e8b36f] px-10 text-2xl font-medium text-[#16110c] shadow-[0_26px_80px_rgba(232,179,111,0.22)] transition hover:bg-[#f0c080]"
              >
                Contact Us
                <ArrowRight className="h-6 w-6" />
              </Link>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] px-6 py-7 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur">
                <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e8b36f]/10 text-[#e8b36f]">
                  <Users className="h-5 w-5" />
                </div>
                <p className="text-3xl font-medium tracking-[-0.04em] text-[#f2eee7]">
                  10k+
                </p>
                <p className="mt-3 text-base leading-relaxed text-[#b4b8c4]">
                  portfolio events modelled across real CSE investor workflows.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] px-6 py-7 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur">
                <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e8b36f]/10 text-[#e8b36f]">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <p className="text-3xl font-medium tracking-[-0.04em] text-[#f2eee7]">
                  Net P/L
                </p>
                <p className="mt-3 text-base leading-relaxed text-[#b4b8c4]">
                  AI analytics combine brokerage, capital returned, realised profit, and dividends.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] px-6 py-7 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur">
                <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e8b36f]/10 text-[#e8b36f]">
                  <DollarSign className="h-5 w-5" />
                </div>
                <p className="text-3xl font-medium tracking-[-0.04em] text-[#f2eee7]">
                  LKR ready
                </p>
                <p className="mt-3 text-base leading-relaxed text-[#b4b8c4]">
                  Portfolio summaries designed for Colombo Stock Exchange investors in LKR.
                </p>
              </div>
            </div>
          </div>

          <motion.div
            className="relative mx-auto w-full max-w-[54rem]"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_54%_48%,rgba(44,74,180,0.2),transparent_44%)]" />
            <div className="relative ml-auto w-full max-w-[48rem] rounded-[3.2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(18,19,30,0.94),rgba(9,10,16,0.98))] p-6 shadow-[0_50px_140px_rgba(0,0,0,0.55)] backdrop-blur">
              <div className="mb-6 flex items-center justify-between">
                <BrandMark
                  textClassName="text-[1.7rem] text-[#efb977]"
                  iconClassName="h-9 w-9 rounded-[1rem]"
                />
                <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-[#b8bcc8]">
                  CSE overview
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-[13rem_minmax(0,1fr)]">
                <div className="space-y-3">
                  <div className="rounded-[1.35rem] bg-white/[0.05] p-4 text-[#efb977]">
                    <div className="flex items-center gap-3">
                      <Layers className="h-4 w-4" />
                      <span className="text-base">Overview</span>
                    </div>
                  </div>
                  <div className="rounded-[1.35rem] border border-white/8 bg-transparent p-4 text-[#b8bcc8]">
                    <div className="flex items-center justify-between">
                      <span className="text-base">Portfolio</span>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="rounded-[1.35rem] border border-white/8 bg-transparent p-4 text-[#b8bcc8]">
                    <div className="flex items-center justify-between">
                      <span className="text-base">Dividends</span>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="rounded-[1.35rem] border border-white/8 bg-transparent p-4 text-[#b8bcc8]">
                    <div className="flex items-center justify-between">
                      <span className="text-base">Reports</span>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.8rem] border border-white/8 bg-white/[0.03] p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[0.95rem] text-[#969caf]">
                        March 2026 · Realised summary
                      </p>
                      <div className="mt-3 flex items-center gap-3">
                        <p className="text-[3.3rem] font-medium tracking-[-0.06em] text-[#f3efe7]">
                          LKR 423,817
                        </p>
                        <span className="rounded-xl bg-[#103f31] px-3 py-2 text-sm font-medium text-[#57d8aa]">
                          +1.93%
                        </span>
                      </div>
                      <p className="mt-2 text-base text-[#57d8aa]">
                        +LKR 9,550 net realised
                      </p>
                    </div>
                    {/* <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-[#b8bcc8]">
                      All categories
                    </span> */}
                  </div>

                  <div className="mt-8 h-[18rem] overflow-hidden rounded-[1.7rem] bg-[linear-gradient(180deg,rgba(14,17,27,0.3),rgba(5,7,12,0.88))] p-4">
                    <div className="relative h-full w-full rounded-[1.3rem] border border-white/6 bg-[radial-gradient(circle_at_28%_0%,rgba(232,179,111,0.08),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.01),rgba(255,255,255,0))]">
                      <div className="absolute inset-x-0 top-1/4 border-t border-white/5" />
                      <div className="absolute inset-x-0 top-1/2 border-t border-white/5" />
                      <div className="absolute inset-x-0 top-3/4 border-t border-white/5" />
                      <div className="absolute inset-y-0 left-1/4 border-l border-white/5" />
                      <div className="absolute inset-y-0 left-2/4 border-l border-white/5" />
                      <div className="absolute inset-y-0 left-3/4 border-l border-white/5" />
                      <svg
                        viewBox="0 0 640 280"
                        className="absolute inset-0 h-full w-full"
                        aria-hidden="true"
                      >
                        <defs>
                          <linearGradient id="heroLine" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#efc488" />
                            <stop offset="100%" stopColor="#e8b36f" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M18 198 C58 226, 83 244, 120 214 S176 184, 208 210 S268 150, 302 176 S368 102, 408 124 S468 66, 502 92 S566 44, 618 78"
                          fill="none"
                          stroke="url(#heroLine)"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-6 text-sm text-[#9ba1b4]">
                    <span className="rounded-full bg-white/6 px-4 py-2 text-[#f4efe8]">
                      1M
                    </span>
                    <span>3M</span>
                    <span>6M</span>
                    <span>YTD</span>
                    <span>All</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 left-[-2.5rem] w-[23rem] rounded-[2.6rem] border border-black bg-[linear-gradient(180deg,rgba(5,7,12,1),rgba(9,10,16,0.96))] shadow-[0_36px_90px_rgba(0,0,0,0.65)] sm:left-[-4rem]">
                <div className="flex items-center justify-center border-b border-white/10 px-6 py-5">
                  <div className="flex items-center gap-3 rounded-full bg-white/[0.04] px-4 py-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0d58c7] text-xl text-white">
                      Rs
                    </span>
                    <span className="text-xl font-medium text-[#f3efe7]">
                      Invest now
                    </span>
                    <ChevronDown className="h-5 w-5 text-[#8e93a5]" />
                  </div>
                </div>
                <div className="px-6 pb-8 pt-10">
                  <div className="text-center">
                    <p className="text-[4rem] font-medium tracking-[-0.07em] text-[#f3efe7]">
                      150,000<span className="ml-2 text-[2rem] text-[#515664]">LKR</span>
                    </p>
                  </div>
                  <div className="mt-8 flex items-center justify-between text-lg text-[#d3d7e0]">
                    <span>Available cash</span>
                    <span>LKR 500,000</span>
                  </div>
                  <div className="mt-5 grid grid-cols-4 gap-2 text-sm text-[#b3b8c6]">
                    {["25%", "50%", "75%", "100%"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white/[0.05] px-3 py-2 text-center"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 grid grid-cols-3 text-center text-[2.1rem] tracking-[-0.05em] text-[#dfe3ea]">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="relative overflow-hidden bg-[#f4f2ed] py-16 text-slate-900 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(225,165,79,0.12),transparent_36%)]" />
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#bf7a28]">
              Supported brokers in Sri Lanka
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#0f172a] sm:text-4xl">
              Built for Colombo Stock Exchange portfolio management.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5b6578] sm:text-lg">
              StockFlow gives CSE investors one AI-powered view across local brokers,
              portfolio analytics, and dividend income in LKR.
            </p>
          </motion.div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-8 sm:gap-10 lg:gap-12">
            {brokerLogos.map((broker, index) => (
              <motion.div
                key={broker.name}
                className="group relative"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  opacity: { duration: 0.45, delay: index * 0.04 },
                  y: {
                    duration: 4.4 + (index % 3) * 0.6,
                    delay: index * 0.08,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
                }}
                animate={{
                  y: [0, index % 2 === 0 ? -7 : -11, 0],
                }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(102,121,212,0.16),transparent_65%)] blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#13213b_0%,#0a1122_100%)] text-sm font-semibold tracking-[0.08em] text-[#efb977] shadow-[0_14px_30px_rgba(10,17,34,0.18)] ring-1 ring-white/70">
                    {broker.short}
                  </span>
                  <span className="text-base font-medium tracking-[-0.02em] text-[#2b3446]">
                    {broker.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f2ed] pb-24 pt-10 text-slate-900 sm:pb-28">
        <div className="mx-auto grid max-w-[1380px] items-start gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,0.88fr)] lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#bf7a28]">
              Portfolio intelligence in one place
            </p>
            <div className="space-y-2">
              {assetItems.map((item, index) => (
                <div key={item}>
                  <h2
                    className={`text-[3.2rem] font-medium leading-[0.98] tracking-[-0.07em] sm:text-[4.3rem] ${
                      index === 0
                        ? "bg-gradient-to-r from-[#6479d4] via-[#9c9bc7] to-[#d7a160] bg-clip-text text-transparent"
                        : "text-black"
                    }`}
                  >
                    {item}
                  </h2>
                  {index === 0 ? (
                    <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-[#5b6578]">
                      Track every part of your portfolio in one place and keep
                      AI analytics visible across capital, income, fees,
                      and longer-term assets.
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-flex h-16 items-center rounded-full bg-[linear-gradient(135deg,#f2c07b_0%,#e5aa5b_100%)] px-8 text-lg font-medium text-[#16110c] shadow-[0_18px_50px_rgba(229,170,91,0.22)] transition hover:brightness-105"
              >
                Manage your stock portfolio
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative lg:pt-12"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="pointer-events-none absolute -left-10 top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(103,121,212,0.16),transparent_66%)] blur-2xl" />
            <div className="space-y-6">
              {coverageCards.map((card, index) => (
                <motion.div
                  key={card.name}
                  variants={fadeUp}
                  whileHover={{ x: -4, y: -4 }}
                  className={`flex items-center justify-between gap-5 rounded-[1.8rem] bg-[#050608] px-5 py-5 text-white shadow-[0_25px_80px_rgba(6,8,15,0.24)] ring-1 ring-white/6 ${
                    index % 2 === 1 ? "lg:ml-12" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-base font-semibold text-[#050608]">
                      {card.ticker.slice(0, 1)}
                    </div>
                    <div>
                      <p className="text-xl font-medium tracking-[-0.03em]">
                        {card.name}
                      </p>
                      <p className="text-sm text-[#737b8b]">{card.ticker}</p>
                    </div>
                  </div>
                  <div className="min-w-[13rem]">
                    <p className="text-3xl font-medium tracking-[-0.05em] text-white">
                      {card.value}
                    </p>
                    <div className="mt-3 inline-flex rounded-xl bg-[#0c2b22] px-3 py-1.5 text-base font-medium text-[#2fd198]">
                      {card.delta}
                    </div>
                  </div>
                  <div className="hidden h-16 w-32 overflow-hidden rounded-xl bg-[linear-gradient(180deg,rgba(10,17,34,0.45),rgba(10,17,34,0.1))] sm:block">
                    <svg viewBox="0 0 140 60" className="h-full w-full">
                      <path
                        d="M6 44 C18 38, 22 28, 33 31 S52 38, 63 30 S84 18, 94 26 S114 18, 134 12"
                        fill="none"
                        stroke="#16c58d"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-slate-900 bg-[#020611] py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_55%,rgba(36,62,140,0.18),transparent_25%),radial-gradient(circle_at_72%_70%,rgba(235,171,93,0.12),transparent_24%)]" />
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
                Manage your CSE portfolio with AI analytics
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-2xl">
              A polished feature system built around AI insights, dividend income tracking,
              realised profit, and multi-broker visibility.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {featureCards.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(10,15,30,0.88),rgba(5,8,18,0.94))] p-7 shadow-[0_32px_90px_rgba(0,0,0,0.34)] ${
                  feature.size === "tall"
                    ? "min-h-[23rem]"
                    : feature.size === "wide"
                      ? "lg:col-span-2 min-h-[15rem]"
                      : "min-h-[15rem]"
                }`}
              >
                <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_top_left,rgba(81,110,214,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(240,183,103,0.12),transparent_24%)]" />
                <div className="relative flex h-full flex-col">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2b2319] text-[#f1be62]">
                      <LineChart className="h-5 w-5" />
                    </span>
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                      {feature.label}
                    </p>
                  </div>
                  <FeatureCardVisual variant={feature.label} />
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

          <div className="mt-14 text-center">
            <Link href="/contact">
              <button className="inline-flex h-16 items-center gap-3 rounded-full bg-[linear-gradient(135deg,#f2c07b_0%,#e5aa5b_100%)] px-8 text-xl font-medium text-[#16110c] shadow-[0_22px_60px_rgba(229,170,91,0.28)] transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#020611]">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f2ed] py-24 text-slate-900">
        <div className="mx-auto grid max-w-[1380px] items-start gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.95fr)] lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#bf7a28]">
              Security &amp; privacy
            </p>
            <h2 className="max-w-[12ch] text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-[#0f172a] sm:text-6xl">
              Security and privacy matter.
            </h2>
            <p className="mt-8 max-w-[38rem] text-xl leading-relaxed text-[#536179]">
              StockFlow is designed as a personal portfolio management app. Your data
              stays private while AI analytics help you make more confident CSE decisions.
            </p>
            <ul className="mt-10 space-y-5 text-xl text-[#334155]">
              {securityBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-4">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#16b57c]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="grid gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div
              variants={fadeUp}
              className="rounded-[2rem] bg-[#07173f] p-6 text-slate-50 shadow-[0_28px_80px_rgba(7,23,63,0.22)]"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0f3d39] text-[#61e2bf]">
                  <Lock className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-2xl font-semibold tracking-[-0.03em]">
                    Data protection
                  </p>
                  <p className="mt-2 text-lg leading-relaxed text-[#c4cad5]">
                    Portfolio data stays private and is only used to calculate
                    your performance.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-[2rem] border border-[#d6dbe3] bg-[#fbfbfa] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#fbf1e4] text-[#e1992e]">
                  <Shield className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-2xl font-semibold tracking-[-0.03em] text-[#0f172a]">
                    No broker login
                  </p>
                  <p className="mt-2 text-lg leading-relaxed text-[#5b6578]">
                    StockFlow works alongside your brokers. You never share
                    broker passwords.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-[2rem] border border-[#d6dbe3] bg-[#fbfbfa] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0f172a] text-white">
                  <BarChart3 className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-2xl font-semibold tracking-[-0.03em] text-[#0f172a]">
                    Personal performance view
                  </p>
                  <p className="mt-2 text-lg leading-relaxed text-[#5b6578]">
                    Built to answer one question: “How much did I actually
                    make?”
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-[#081229] bg-[#020611] py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(33,62,150,0.2),transparent_24%),radial-gradient(circle_at_20%_85%,rgba(235,171,93,0.12),transparent_24%)]" />
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="text-4xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">
              Built for smarter CSE investing.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
              Clear communication, practical education, and AI-powered portfolio insight
              should feel like part of the product, not an afterthought.
            </p>
          </motion.div>

          <motion.div
            className="mt-16 grid gap-6 lg:grid-cols-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {communityCards.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,16,35,0.88),rgba(6,10,22,0.94))] px-6 py-7 shadow-[0_26px_80px_rgba(0,0,0,0.28)]"
              >
                <div className="mb-10 inline-flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-[linear-gradient(180deg,rgba(74,99,194,0.22),rgba(239,188,66,0.16))] text-[#f3d488]">
                  {card.title === "Product updates" && (
                    <MessageCircle className="h-7 w-7" />
                  )}
                  {card.title === "Investor discussions" && (
                    <Users className="h-7 w-7" />
                  )}
                  {card.title === "Learning resources" && (
                    <BookOpen className="h-7 w-7" />
                  )}
                  {card.title === "Portfolio insights" && (
                    <LineChart className="h-7 w-7" />
                  )}
                </div>
                <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-xl leading-relaxed text-slate-300">
                  {card.desc}
                </p>
                <p className="mt-8 text-sm uppercase tracking-[0.26em] text-[#f1be62]">
                  {card.stat}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f4f2ed] py-24 text-slate-900">
        <div className="mx-auto grid max-w-[1380px] items-center gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,0.94fr)] lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#bf7a28]">
              Start simply
            </p>
            <h2 className="max-w-[11ch] text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-[#0f172a] sm:text-6xl">
              Start AI-powered portfolio tracking in 3 simple steps.
            </h2>
            <p className="mt-8 max-w-[36rem] text-xl leading-relaxed text-[#5b6578]">
              The workflow is intentionally straightforward so you can focus on
              understanding performance and dividend income instead of maintaining a spreadsheet.
            </p>

            <div className="mt-10 space-y-5">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  className={`rounded-[1.8rem] border px-6 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] ${
                    index === 2
                      ? "border-[#b8c2d6] bg-white"
                      : "border-[#cfd5df] bg-[#f7f7f4]"
                  }`}
                >
                  {index === 2 ? (
                    <div className="mb-5 h-1.5 w-full rounded-full bg-[linear-gradient(90deg,#6280eb_0%,#e7b56b_100%)]" />
                  ) : null}
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f0ede8] text-base font-semibold text-[#0f172a] ring-1 ring-[#d7dce6]">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="text-2xl font-medium tracking-[-0.04em] text-[#0f172a]">
                        {step.title}
                      </p>
                      <p className="mt-3 text-lg leading-relaxed text-[#657287]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-flex h-16 items-center gap-3 rounded-full bg-[linear-gradient(135deg,#f2c07b_0%,#e5aa5b_100%)] px-8 text-xl font-medium text-[#16110c] shadow-[0_18px_50px_rgba(229,170,91,0.24)] transition hover:brightness-105"
              >
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_68%_35%,rgba(101,124,227,0.18),transparent_24%),radial-gradient(circle_at_20%_72%,rgba(233,176,97,0.14),transparent_18%)]" />
            <div className="relative rounded-[2.8rem] bg-[#e8ebf3] p-6 sm:p-8">
              <div className="rounded-[2.4rem] bg-[#050608] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.28)]">
                <div className="mb-6 flex items-center gap-4">
                  <BrandMark
                    textClassName="text-[1.5rem] text-[#efb977]"
                    iconClassName="h-8 w-8 rounded-[0.9rem]"
                  />
                  <span className="rounded-full bg-white/[0.06] px-4 py-2 text-sm text-[#a7adbb]">
                    Guided onboarding
                  </span>
                </div>
                <div className="grid gap-4">
                  {steps.map((step, index) => (
                    <div
                      key={step.title}
                      className={`rounded-[1.6rem] border px-5 py-5 ${
                        index === 2
                          ? "border-[#b6c0d8] bg-white/[0.08]"
                          : "border-white/8 bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-medium text-white">
                            {step.title}
                          </p>
                          <p className="mt-2 max-w-[24rem] text-sm leading-relaxed text-[#9ea6b7]">
                            {step.desc}
                          </p>
                        </div>
                        {index === 2 ? (
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f2c07b] text-[#16110c]">
                            <Check className="h-5 w-5" />
                          </span>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
