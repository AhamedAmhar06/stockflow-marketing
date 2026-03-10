"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  TrendingUp,
  DollarSign,
  Users,
} from "lucide-react"
import CTABand from "@/components/shared/cta-band"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const steps = [
  {
    num: "1",
    title: "Add your invested capital",
    desc: "Start with what you\u2019ve invested, or start from your first trade\u2014either works.",
    detail: "Set your baseline so Stockflow can track your true return from day one.",
  },
  {
    num: "2",
    title: "Add trades manually",
    desc: "Log your completed buy/sell trades. Stockflow calculates your net realised outcome after fees.",
    detail: "Each trade automatically accounts for brokerage costs so your P&L is accurate.",
  },
  {
    num: "3",
    title: "Review AI analytics",
    desc: "You\u2019ll get a clean summary of your portfolio performance with AI-based signals.",
    bullets: [
      "Total invested",
      "Total returned",
      "Brokerage paid",
      "Net realised gain (%)",
      "Dividend income total",
    ],
  },
]

const personas = [
  {
    icon: TrendingUp,
    title: "Active traders",
    desc: "Stop guessing your real profit after fees. See net realised results with AI-guided portfolio analytics.",
  },
  {
    icon: DollarSign,
    title: "Dividend investors",
    desc: "Track yearly dividend income in one place. Know exactly what your CSE portfolio is paying you.",
  },
  {
    icon: Users,
    title: "New investors",
    desc: "Simple tracking without noise. Start with clarity from your very first trade on the CSE.",
  },
]

export default function HowItWorksContent() {
  return (
    <main className="bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Manage your CSE portfolio in 3 simple steps
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-slate-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Add your capital, log trades, and see what you actually made
              &mdash; including AI-powered insights, brokerage fees, and dividends.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stepper / Timeline */}
      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-0"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="relative flex gap-6"
              >
                {/* Vertical line + circle */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0 z-10">
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gray-300 my-2" />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-12 ${i === steps.length - 1 ? "pb-0" : ""}`}>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    {step.desc}
                  </p>
                  {step.detail && (
                    <p className="text-sm text-gray-500">{step.detail}</p>
                  )}
                  {step.bullets && (
                    <ul className="mt-3 space-y-1.5">
                      {step.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Activation Moment Callout */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 sm:p-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Why this matters
              </h2>
              <p className="text-lg text-amber-900 leading-relaxed mb-2">
                The activation moment is clarity.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The first time you see AI analytics, net realised profit after brokerage,
                and dividend income in one view, portfolio decisions stop being a guess.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Designed For */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Designed for every type of Colombo Stock Exchange investor
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {personas.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <p.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/features"
              className="text-amber-700 hover:text-amber-800 font-medium transition-colors"
            >
              See all features &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand />
    </main>
  )
}
