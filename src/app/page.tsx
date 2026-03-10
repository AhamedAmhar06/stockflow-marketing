import type { Metadata } from "next"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import HomeContent from "@/components/landing-page"

export const metadata: Metadata = {
  title: "Stockflow | Best Stock Tracking App for CSE Investors",
  description:
    "Stockflow is the best stock tracking app for Colombo Stock Exchange investors, built for investment analysis and portfolio management with AI insights and dividend tracking.",
  openGraph: {
    title: "Stockflow | Best Stock Tracking App for CSE Investors",
    description:
      "Stockflow is the best stock tracking app for Colombo Stock Exchange investors, built for investment analysis and portfolio management with AI insights and dividend tracking.",
    type: "website",
    url: "https://stockflow.lk",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HomeContent />
      <Footer />
    </div>
  )
}
