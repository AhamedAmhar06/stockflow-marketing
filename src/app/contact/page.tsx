import type { Metadata } from "next"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import ContactContent from "@/components/contact-content"

export const metadata: Metadata = {
  title: "Contact Us | Stockflow AI Portfolio Management for CSE",
  description:
    "Contact Stockflow for AI-powered Colombo Stock Exchange portfolio management support, dividend tracking guidance, and onboarding.",
  openGraph: {
    title: "Contact Us | Stockflow AI Portfolio Management for CSE",
    description:
      "Contact Stockflow for AI-powered Colombo Stock Exchange portfolio management support, dividend tracking guidance, and onboarding.",
    type: "website",
    url: "https://stockflow.lk/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ContactContent />
      <Footer />
    </div>
  )
}
