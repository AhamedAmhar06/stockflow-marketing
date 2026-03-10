import type { Metadata } from "next"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import FAQContent from "@/components/faq-content"

export const metadata: Metadata = {
  title: "FAQ | Stockflow CSE Portfolio Tracker (After Brokerage + Dividends)",
  description:
    "FAQs about Stockflow: realised profit after brokerage, dividend tracking, privacy, manual entry, and portfolio workflows for Sri Lankan investors.",
  openGraph: {
    title:
      "FAQ | Stockflow CSE Portfolio Tracker (After Brokerage + Dividends)",
    description:
      "FAQs about Stockflow: realised profit after brokerage, dividend tracking, privacy, manual entry, and portfolio workflows for Sri Lankan investors.",
    type: "website",
    url: "https://stockflow.lk/faq",
  },
}

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <FAQContent />
      <Footer />
    </div>
  )
}
