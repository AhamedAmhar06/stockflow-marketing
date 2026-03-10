"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import BrandMark from "@/components/shared/brand-mark"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 border-b border-[#d6d8de] bg-[rgba(246,243,238,0.88)] backdrop-blur-xl">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between gap-6">
          <BrandMark
            textClassName="text-[1.8rem] text-[#111827] sm:text-[2rem]"
            iconClassName="h-10 w-10 rounded-[1.1rem]"
          />

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex items-center text-[1rem] font-medium transition-colors lg:text-[1.05rem] ${
                  pathname === link.href
                    ? "text-[#111827]"
                    : "text-[#5b6578] hover:text-[#111827]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center rounded-full bg-[linear-gradient(135deg,#f4c47d_0%,#e1a54f_100%)] px-6 text-sm font-semibold text-[#16110c] shadow-[0_14px_40px_rgba(225,165,79,0.28)] transition hover:brightness-105"
            >
              Contact Us
            </Link>
          </div>

          <button
            className="rounded-xl p-2 text-[#344054] transition hover:bg-[#ece6dd] hover:text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#e1a54f] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-[#d6d8de] py-4 md:hidden">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-[#f0e7da] text-[#111827]"
                      : "text-[#5b6578] hover:bg-[#f4efe8] hover:text-[#111827]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-4">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#f4c47d_0%,#e1a54f_100%)] px-5 text-sm font-semibold text-[#16110c] shadow-[0_14px_40px_rgba(225,165,79,0.24)] transition hover:brightness-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
