"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail } from "lucide-react"
import { event } from "@/lib/gtag"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const featuredArticle = {
  category: "FAQ guide",
  title: "How AI portfolio analytics works in StockFlow",
  meta: "Read the full article on Medium",
  desc: "Understand how AI analytics, brokerage, capital returned, and dividend income shape the numbers you see in your CSE portfolio summary.",
}

const faqs = [
  {
    question: "Is StockFlow connected to my broker?",
    answer:
      "Not currently. StockFlow is broker-neutral, so it works alongside any broker. You log trades manually while we validate the core workflow.",
  },
  {
    question: "Do you have real-time prices?",
    answer:
      "Not at the moment. StockFlow focuses on AI-based portfolio analytics, realised profit after brokerage, and dividend income, which are the numbers many CSE investors struggle to calculate accurately.",
  },
  {
    question: "How does AI analytics help CSE investors?",
    answer:
      "StockFlow uses AI-assisted analytics to surface clearer performance signals across realised returns, dividend income trends, and capital movement, so portfolio decisions are based on net outcomes.",
  },
  {
    question: "How is realised profit calculated?",
    answer:
      "Completed trades are tracked together with brokerage so the final gain or loss reflects what you actually earned after costs.",
  },
  {
    question: "Is manual entry too much work?",
    answer:
      "For most users, the manual workflow is manageable because only completed trades and dividend events need to be logged. SMS-based automation is on the roadmap to reduce this further.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. StockFlow is designed as a personal tracking layer. We do not sell portfolio data or turn your account into a public feed.",
  },
]

export default function FAQContent() {
  return (
    <main className="bg-[#f4f2ed] text-slate-900">
      <section className="bg-[#f4f2ed] pb-20 pt-14 sm:pb-24">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
          <motion.div
            className="max-w-5xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#bf7a28]">
              FAQ + guides
            </p>
            <h1 className="mt-6 text-[2.2rem] font-medium leading-[0.94] tracking-[-0.07em] text-[#0f172a] sm:text-[3.8rem] lg:text-[5.8rem]">
              Learn how to manage your CSE portfolio with StockFlow.
            </h1>
          </motion.div>

          <div className="mt-14">
            <motion.article
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mx-auto max-w-[980px]"
            >
              <div className="overflow-hidden rounded-[2.2rem] bg-[linear-gradient(180deg,#f3ead7,#efe4cb)] p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.6rem] bg-[#efe4cb]">
                  <Image
                    src="/stockflow_makreting.png"
                    alt="Featured FAQ article visual"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-6">
                <span className="rounded-full bg-[#e8ebf0] px-3 py-1 text-sm font-medium text-[#536179]">
                  {featuredArticle.category}
                </span>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-[#0f172a]">
                  {featuredArticle.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#5b6578]">
                  {featuredArticle.desc}
                </p>
                <p className="mt-5 text-base text-[#7b8497]">{featuredArticle.meta}</p>
                <a
                  href="https://medium.com/@jiffry.20221439/how-to-calculate-your-real-stock-profit-after-brokerage-cse-investors-guide-767a04eee9a1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-lg font-medium text-[#0f172a] transition hover:text-[#5b6578]"
                >
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="bg-[#020611] py-16 sm:py-24 text-slate-50">
        <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-10">
          <motion.div
            className="mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
              Frequently asked questions
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
              Everything you will ask before trusting an AI-based portfolio management app with your workflow.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,16,35,0.88),rgba(6,10,22,0.94))] shadow-[0_30px_90px_rgba(0,0,0,0.34)]"
          >
            <Accordion
              type="single"
              collapsible
              className="w-full"
              onValueChange={(value) => {
                if (value) {
                  const faq = faqs.find((_, i) => `faq-${i}` === value)
                  if (faq) {
                    event({ action: 'open', category: 'FAQ', label: faq.question })
                  }
                }
              }}
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  className="border-b border-white/8 px-6 last:border-b-0"
                >
                  <AccordionTrigger className="py-6 text-left text-lg font-semibold text-white hover:no-underline [&[data-state=open]]:text-[#f0be75]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-slate-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f4f2ed] py-16 sm:py-24">
        <div className="mx-auto max-w-[860px] px-4 sm:px-6 lg:px-10">
          <motion.div
            className="rounded-[2.2rem] border border-[#d5dbe4] bg-white p-8 text-center shadow-[0_20px_70px_rgba(15,23,42,0.08)]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-[1.1rem] bg-[#f7eddc] text-[#d39a52]">
              <Mail className="h-6 w-6" />
            </div>
            <h2 className="text-4xl font-semibold tracking-[-0.06em] text-[#0f172a]">
              Still have questions?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#5b6578]">
              Reach out directly if you want help thinking through your workflow or setup.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#f2c07b_0%,#e5aa5b_100%)] px-7 text-lg font-medium text-[#16110c] shadow-[0_18px_50px_rgba(229,170,91,0.22)] transition hover:brightness-105 sm:w-auto"
                onClick={() => event({ action: 'click', category: 'CTA', label: 'contact_us' })}
              >
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="mailto:support@stockflow.lk"
                className="text-lg font-medium text-[#5b6578] transition hover:text-[#0f172a]"
              >
                support@stockflow.lk
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
