import type { Metadata } from "next"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import HowItWorksContent from "@/components/how-it-works-content"

export const metadata: Metadata = {
  title: "How It Works | Track CSE Profits in 3 Steps (Stockflow)",
  description:
    "Add your invested capital, log trades, and instantly see realised profit after brokerage plus dividends. Stockflow is built for Sri Lankan CSE investors.",
  openGraph: {
    title: "How It Works | Track CSE Profits in 3 Steps (Stockflow)",
    description:
      "Add your invested capital, log trades, and instantly see realised profit after brokerage plus dividends. Stockflow is built for Sri Lankan CSE investors.",
    type: "website",
    url: "https://stockflow.lk/how-it-works",
  },
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HowItWorksContent />
      <Footer />
    </div>
  )
}
