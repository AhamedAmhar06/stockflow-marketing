import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import Analytics from "@/components/Analytics";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Stockflow | AI Portfolio Management for CSE Investors",
  description: "AI-powered stock market portfolio management for Colombo Stock Exchange investors. Track realised returns, dividend income, and portfolio performance in one app.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Stockflow | AI Portfolio Management for CSE Investors",
    description: "AI-powered portfolio management and analytics for Colombo Stock Exchange investors, with dividend income tracking.",
    url: "https://stockflow.lk",
    siteName: "Stockflow",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Stockflow Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stockflow",
    description: "AI-powered CSE portfolio management with analytics, realised performance tracking, and dividend income insights.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  anonymize_ip: true,
                  cookie_flags: 'SameSite=None;Secure',
                });
              `}
            </Script>
          </>
        )}
        <Analytics />
        {children}
      </body>
    </html>
  );
}
