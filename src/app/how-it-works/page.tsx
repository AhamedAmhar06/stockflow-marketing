import type { Metadata } from "next"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import HowItWorksContent from "@/components/how-it-works-content"

export const metadata: Metadata = {
  title: "How It Works | AI CSE Portfolio Management in 3 Steps",
  description:
    "See how Stockflow helps Colombo Stock Exchange investors manage portfolios with AI analytics, dividend income tracking, and realised performance insights.",
  openGraph: {
    title: "How It Works | AI CSE Portfolio Management in 3 Steps",
    description:
      "See how Stockflow helps Colombo Stock Exchange investors manage portfolios with AI analytics, dividend income tracking, and realised performance insights.",
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
