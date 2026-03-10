import type { Metadata } from "next"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import ContactContent from "@/components/contact-content"

export const metadata: Metadata = {
  title: "Contact Us | Stockflow for Sri Lankan CSE Investors",
  description:
    "Contact Stockflow for product questions, setup guidance, and portfolio tracking support for Sri Lankan investors.",
  openGraph: {
    title: "Contact Us | Stockflow for Sri Lankan CSE Investors",
    description:
      "Contact Stockflow for product questions, setup guidance, and portfolio tracking support for Sri Lankan investors.",
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
