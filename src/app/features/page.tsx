import type { Metadata } from "next"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import FeaturesContent from "@/components/features-content"

export const metadata: Metadata = {
  title: "Features | Best Stock Tracking App for CSE",
  description:
    "Explore why Stockflow is the best stock tracking app for CSE investors, purpose-built for investment analysis and portfolio management with AI-powered analytics.",
  openGraph: {
    title: "Features | Best Stock Tracking App for CSE",
    description:
      "Explore why Stockflow is the best stock tracking app for CSE investors, purpose-built for investment analysis and portfolio management with AI-powered analytics.",
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
