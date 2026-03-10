import Link from "next/link"
import BrandMark from "@/components/shared/brand-mark"

const productLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
]

const companyLinks = [
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#10182c] bg-[#020611] text-gray-300">
      <div className="mx-auto max-w-[1380px] px-4 py-14 sm:px-6 sm:py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.8fr]">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <BrandMark
              className="mb-4"
              textClassName="text-[2rem] text-white"
              iconClassName="h-10 w-10"
            />
            <p className="max-w-[24rem] text-lg leading-relaxed text-[#9aa3b7]">
              A CSE portfolio tracker built for Sri Lankan investors.
              Track realised profits after brokerage and dividend income in one clean view.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#6d7690]">
              Product
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-lg text-[#b6bdd0] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#6d7690]">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-lg text-[#b6bdd0] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:support@stockflow.lk"
                  className="text-lg text-[#b6bdd0] transition-colors hover:text-white"
                >
                  support@stockflow.lk
                </a>
              </li>
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#6d7690]">
              Trust
            </h4>
            <ul className="space-y-3 text-lg text-[#b6bdd0]">
              <li>Privacy-first design</li>
              <li>Works alongside any broker</li>
              <li>Built for the Colombo Stock Exchange</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-[#10182c] pt-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-[#6d7690]">
              &copy; {new Date().getFullYear()} Stockflow.lk &mdash; All rights reserved
            </p>
            <p className="text-sm text-[#9aa3b7] sm:text-right">
              Built for Sri Lankan CSE investors &bull; Privacy-first
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
