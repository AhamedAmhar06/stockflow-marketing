import type { Metadata } from "next"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import HomeContent from "@/components/landing-page"

export const metadata: Metadata = {
  title: "Stockflow | Track Real CSE Profits After Brokerage",
  description:
    "Stockflow is a CSE portfolio tracker built for Sri Lankan investors. Track realised profits after brokerage, dividends, and your true return in one clean view.",
  openGraph: {
    title: "Stockflow | Track Real CSE Profits After Brokerage",
    description:
      "Stockflow is a CSE portfolio tracker built for Sri Lankan investors. Track realised profits after brokerage, dividends, and your true return in one clean view.",
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
