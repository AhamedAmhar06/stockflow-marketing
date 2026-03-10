import type { Metadata } from "next"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import PricingContent from "@/components/pricing-content"

export const metadata: Metadata = {
  title: "Pricing | Stockflow for Sri Lankan CSE Investors",
  description:
    "See Stockflow pricing for Sri Lankan investors. A clear annual plan for tracking realised CSE profits, dividends, and capital movement.",
  openGraph: {
    title: "Pricing | Stockflow for Sri Lankan CSE Investors",
    description:
      "See Stockflow pricing for Sri Lankan investors. A clear annual plan for tracking realised CSE profits, dividends, and capital movement.",
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
