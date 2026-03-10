import type { Metadata } from "next"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import PricingContent from "@/components/pricing-content"

export const metadata: Metadata = {
  title: "Pricing | Stockflow AI Portfolio App for CSE Investors",
  description:
    "See pricing for Stockflow, the AI-based Colombo Stock Exchange portfolio management and dividend income tracking app.",
  openGraph: {
    title: "Pricing | Stockflow AI Portfolio App for CSE Investors",
    description:
      "See pricing for Stockflow, the AI-based Colombo Stock Exchange portfolio management and dividend income tracking app.",
    type: "website",
    url: "https://stockflow.lk/pricing",
  },
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PricingContent />
      <Footer />
    </div>
  )
}
