import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
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
  title: "Stockflow | Track Realized Stock Profits & Dividends",
  description: "Track your realized stock profits, dividends, and true portfolio performance for Sri Lankan investors. The smartest way to manage your CSE portfolio.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Stockflow | Track Realized Stock Profits & Dividends",
    description: "Track your realized stock profits, dividends, and true portfolio performance for Sri Lankan investors.",
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
    description: "Track your realized stock profits, dividends, and true portfolio performance for Sri Lankan investors.",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VNK9L9QT5T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VNK9L9QT5T');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
