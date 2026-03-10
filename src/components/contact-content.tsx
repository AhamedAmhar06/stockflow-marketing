"use client"

import { motion } from "framer-motion"
import { Mail, MessageSquareText, Phone } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const supportCards = [
  {
    icon: Mail,
    title: "General enquiries",
    detail: "support@stockflow.lk",
  },
  {
    icon: MessageSquareText,
    title: "AI analytics questions",
    detail: "Share your CSE portfolio goals and what analytics you want StockFlow to surface.",
  },
  {
    icon: Phone,
    title: "Portfolio setup guidance",
    detail: "We can help map your holdings, dividend tracking, and ongoing portfolio workflow.",
  },
]

export default function ContactContent() {
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
              Contact us
            </p>
            <h1 className="mt-6 text-[3.8rem] font-medium leading-[0.94] tracking-[-0.07em] text-white sm:text-[5.8rem]">
              Talk to us about your CSE portfolio strategy.
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-300">
              Whether you need AI analytics guidance, dividend income tracking support,
              or onboarding help, this is the place to reach the StockFlow team.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative -mt-10 pb-24">
        <div className="mx-auto grid max-w-[1380px] gap-10 px-4 sm:px-6 lg:grid-cols-[360px_minmax(0,1fr)] lg:px-10">
          <motion.div
            className="space-y-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {supportCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[2rem] border border-[#d5dbe4] bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)]"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-[#f7eddc] text-[#d39a52]">
                  <card.icon className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#0f172a]">
                  {card.title}
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-[#5b6578]">
                  {card.detail}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-[2.2rem] border border-[#d5dbe4] bg-white p-3 shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
          >
            <iframe
              src="https://forms.gle/q1Apvg41P2YJUyPm8"
              width="100%"
              height="980"
              frameBorder="0"
              style={{ border: 0 }}
              title="Contact Us Form"
              className="min-h-[700px] w-full rounded-[1.6rem]"
            >
              Loading...
            </iframe>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
