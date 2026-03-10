import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CTABandProps {
  heading?: string
  subtext?: string
}

export default function CTABand({
  heading = "Ready to see your real returns?",
  subtext = "Talk to the StockFlow team and find the right setup for your portfolio workflow.",
}: CTABandProps) {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
          {heading}
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">{subtext}</p>
        <Link href="/contact">
          <button className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full px-8 py-3.5 text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </section>
  )
}
