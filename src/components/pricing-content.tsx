"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Check, Lock, Mail, UserCheck } from "lucide-react"
import { event } from "@/lib/gtag"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const planFeatures = [
  "Unlimited manual trade tracking",
  "Realised profit after brokerage",
  "Dividend income tracking",
  "AI-based CSE portfolio analytics",
  "Multi-broker portfolio view",
  "Performance summaries and reports",
  "Priority product support",
]

const afterSteps = [
  {
    icon: Mail,
    title: "Start the conversation",
    desc: "Tell us about your CSE portfolio and what you need from AI-based portfolio management.",
  },
  {
    icon: UserCheck,
    title: "Confirm the fit",
    desc: "We help you understand whether StockFlow matches your current setup and goals.",
  },
  {
    icon: Lock,
    title: "Track with confidence",
    desc: "Move into a cleaner workflow focused on analytics-driven decisions, dividend income, and capital clarity.",
  },
]

export default function PricingContent() {
  return (
    <main className="bg-[#f4f2ed] text-slate-900">
      <section className="relative overflow-hidden bg-[#020611] pb-20 pt-14 text-slate-50 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_26%_18%,rgba(38,56,109,0.44),transparent_28%),radial-gradient(circle_at_78%_56%,rgba(231,170,90,0.12),transparent_24%)]" />
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f0be75]">
              Pricing
            </p>
            <h1 className="mt-6 text-[3.8rem] font-medium leading-[0.94] tracking-[-0.07em] text-white sm:text-[5.8rem]">
              One annual plan for AI-powered CSE portfolio management.
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-300">
              StockFlow is priced for investors who want a serious workflow for
              AI analytics, dividend income tracking, and multi-broker CSE portfolio management.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative -mt-10 pb-24">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
          <motion.div
            className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div
              variants={fadeUp}
              className="rounded-[2.2rem] border border-[#ccd4e0] bg-[#f8f6f1] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
            >
              <div className="mb-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d39a52]">
                  Annual plan
                </p>
                <div className="mt-4 text-[4rem] font-medium tracking-[-0.08em] text-[#0f172a]">
                  USD 180
                </div>
                <p className="mt-2 text-xl text-[#6a7388]">per year</p>
                <p className="mx-auto mt-6 max-w-[34rem] text-lg leading-relaxed text-[#6a7388]">
                  Built for investors who want one structured workflow across AI analytics, dividend income, and capital movement.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#f2c07b_0%,#e5aa5b_100%)] px-8 text-xl font-medium text-[#16110c] shadow-[0_18px_50px_rgba(229,170,91,0.22)] transition hover:brightness-105 sm:h-16"
                onClick={() => event({ action: 'click', category: 'CTA', label: 'contact_us' })}
              >
                Contact Us
              </Link>
              <p className="mt-5 text-center text-lg text-[#7b8497]">
                Talk to us about onboarding and workflow fit
              </p>

              <div className="mt-8 space-y-4 border-t border-[#dde2eb] pt-6">
                {planFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center justify-between gap-4 border-b border-[#edeff4] pb-4 text-lg"
                  >
                    <span className="text-[#1c2437]">{feature}</span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f8f1] text-[#14b879]">
                      <Check className="h-4 w-4" />
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.4rem] bg-[#07173f] p-5 text-white">
                <p className="text-lg font-medium tracking-[-0.03em]">
                  Best for long-term users
                </p>
                <p className="mt-2 text-base leading-relaxed text-[#c7cfda]">
                  Designed for investors who want a more defensible, calmer record of what they actually earned.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-[2.2rem] border border-[#ccd4e0] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#bf7a28]">
                Included
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-[#0f172a] sm:text-5xl">
                Everything needed to track the full story of your portfolio.
              </h2>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.6rem] bg-[#f6f7fb] p-5">
                  <p className="text-sm text-[#6a7388]">Realised return</p>
                  <p className="mt-3 text-3xl font-medium tracking-[-0.05em] text-[#0f172a]">
                    After brokerage
                  </p>
                </div>
                <div className="rounded-[1.6rem] bg-[#f6f7fb] p-5">
                  <p className="text-sm text-[#6a7388]">Dividend income</p>
                  <p className="mt-3 text-3xl font-medium tracking-[-0.05em] text-[#0f172a]">
                    By holding and year
                  </p>
                </div>
                <div className="rounded-[1.6rem] bg-[#f6f7fb] p-5 sm:col-span-2">
                  <p className="text-sm text-[#6a7388]">Capital clarity</p>
                  <p className="mt-3 text-3xl font-medium tracking-[-0.05em] text-[#0f172a]">
                    Invested vs returned in one view
                  </p>
                </div>
              </div>
              <div className="mt-8 rounded-[1.8rem] bg-[#020611] p-6 text-white">
                <p className="text-sm uppercase tracking-[0.24em] text-[#8991a5]">
                  Why this plan exists
                </p>
                <p className="mt-4 text-xl leading-relaxed text-slate-300">
                  Most investors do not need more dashboards. They need one place that keeps AI insights, net results, dividend income, and capital movement coherent over time.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#020611] py-24 text-slate-50">
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
                How to get started
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {afterSteps.map((step) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,16,35,0.88),rgba(6,10,22,0.94))] px-6 py-7 shadow-[0_26px_80px_rgba(0,0,0,0.28)]"
              >
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-[linear-gradient(180deg,rgba(74,99,194,0.22),rgba(239,188,66,0.16))] text-[#f3d488]">
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-xl leading-relaxed text-slate-300">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f4f2ed] py-24">
        <div className="mx-auto max-w-[960px] px-4 text-center sm:px-6 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#bf7a28]">
              Talk to us
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-[#0f172a] sm:text-5xl">
              Want to see if StockFlow fits your workflow?
            </h2>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#f2c07b_0%,#e5aa5b_100%)] px-8 text-xl font-medium text-[#16110c] shadow-[0_18px_50px_rgba(229,170,91,0.24)] transition hover:brightness-105 sm:h-16 sm:w-auto"
                onClick={() => event({ action: 'click', category: 'CTA', label: 'contact_us' })}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
