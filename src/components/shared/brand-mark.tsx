"use client"

import Link from "next/link"

type BrandMarkProps = {
  className?: string
  href?: string
  iconClassName?: string
  textClassName?: string
}

export default function BrandMark({
  className = "",
  href = "/",
  iconClassName = "",
  textClassName = "",
}: BrandMarkProps) {
  const content = (
    <>
      <span
        className={`relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-[#d8b17e]/35 bg-[linear-gradient(180deg,rgba(254,244,229,0.92),rgba(231,178,109,0.18))] shadow-[0_12px_40px_rgba(232,179,111,0.18)] ${iconClassName}`}
      >
        <span className="absolute inset-[5px] rounded-[0.9rem] bg-[#10182f]" />
        <span className="absolute left-[10px] top-[24px] h-[2px] w-[7px] rounded-full bg-[#efb977]" />
        <span className="absolute left-[16px] top-[20px] h-[2px] w-[7px] rounded-full bg-[#efb977]" />
        <span className="absolute left-[22px] top-[15px] h-[2px] w-[9px] rounded-full bg-[#efb977]" />
        <span className="absolute left-[28px] top-[11px] h-[8px] w-[2px] rounded-full bg-[#efb977]" />
      </span>
      <span
        className={`text-[2rem] font-semibold tracking-[-0.05em] ${textClassName || "text-[#111827]"}`}
      >
        StockFlow
      </span>
    </>
  )

  return (
    <Link href={href} className={`inline-flex items-center gap-3 ${className}`}>
      {content}
    </Link>
  )
}
