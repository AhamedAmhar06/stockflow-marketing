import type { Metadata } from "next"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import FeaturesContent from "@/components/features-content"

export const metadata: Metadata = {
  title: "Features | Stockflow CSE Portfolio Tracker",
  description:
    "Track realised profit after brokerage, dividend income, invested vs returned, and a multi-broker view. Stockflow is built for Sri Lankan CSE investors.",
  openGraph: {
    title: "Features | Stockflow CSE Portfolio Tracker",
    description:
      "Track realised profit after brokerage, dividend income, invested vs returned, and a multi-broker view. Stockflow is built for Sri Lankan CSE investors.",
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
