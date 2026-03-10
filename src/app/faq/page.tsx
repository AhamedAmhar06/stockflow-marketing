import type { Metadata } from "next"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import FAQContent from "@/components/faq-content"

export const metadata: Metadata = {
  title: "FAQ | Stockflow AI CSE Portfolio Management App",
  description:
    "FAQs about Stockflow's AI-based analytics for Colombo Stock Exchange portfolios, dividend income tracking, privacy, and workflow.",
  openGraph: {
    title:
      "FAQ | Stockflow AI CSE Portfolio Management App",
    description:
      "FAQs about Stockflow's AI-based analytics for Colombo Stock Exchange portfolios, dividend income tracking, privacy, and workflow.",
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
