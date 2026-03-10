import type { Metadata } from "next"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import HomeContent from "@/components/landing-page"

export const metadata: Metadata = {
  title: "Stockflow | AI Stock Market Portfolio Management for CSE",
  description:
    "Stockflow is an AI-based stock market portfolio management app for Colombo Stock Exchange investors. Track dividend income, realised returns, and portfolio analytics in one place.",
  openGraph: {
    title: "Stockflow | AI Stock Market Portfolio Management for CSE",
    description:
      "Stockflow is an AI-based stock market portfolio management app for Colombo Stock Exchange investors. Track dividend income, realised returns, and portfolio analytics in one place.",
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
