import type { Metadata } from "next"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import FeaturesContent from "@/components/features-content"

export const metadata: Metadata = {
  title: "Features | Stockflow AI Portfolio Management for CSE",
  description:
    "Explore AI-powered CSE portfolio analytics, dividend income tracking, realised return calculation, and multi-broker portfolio management in Stockflow.",
  openGraph: {
    title: "Features | Stockflow AI Portfolio Management for CSE",
    description:
      "Explore AI-powered CSE portfolio analytics, dividend income tracking, realised return calculation, and multi-broker portfolio management in Stockflow.",
    type: "website",
    url: "https://stockflow.lk/features",
  },
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <FeaturesContent />
      <Footer />
    </div>
  )
}
