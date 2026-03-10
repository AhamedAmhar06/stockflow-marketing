# Stockflow

A modern web application for tracking stock investments and portfolio performance, specifically designed for Sri Lankan investors on the Colombo Stock Exchange (CSE).

## Overview

Stockflow helps investors understand their true financial performance by focusing on realized profits, dividends, and actual returns rather than fluctuating market values. Built with Sri Lankan investors in mind, it supports LKR currency and CSE-specific features.

## Features

- **Realized Profit Tracking**: Know your actual profits after selling stocks, including official CSE transaction costs
- **Dividend Income Tracker**: Track dividends across all holdings and monitor passive income growth
- **True Portfolio Performance**: Understand real returns by combining realized profits and dividends
- **CSE-Optimized**: Built specifically for the Colombo Stock Exchange with LKR currency support
- **Manual Entry & CSV Upload**: Add trades manually or import CSV files quickly
- **Responsive Design**: Modern, mobile-friendly interface built with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd stockflow-web
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
stockflow-web/
├── src/
│   ├── app/                 # Next.js app router pages
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── privacy-policy/  # Privacy policy page
│   ├── components/          # React components
│   │   ├── ui/              # shadcn/ui components
│   │   └── landing-page.tsx # Main landing page component
│   ├── data/                # Static data and constants
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility libraries
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Helper functions
├── public/                  # Static assets
├── components.json          # shadcn/ui configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── next.config.mjs          # Next.js configuration
├── postcss.config.mjs       # PostCSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Contributing

This project is currently in beta development. Contributions are welcome once the project is publicly available.

## Privacy & Security

Stockflow takes user privacy seriously. All data processing happens locally in the browser, and no personal financial data is transmitted to external servers without explicit user consent.

For more information, see our [Privacy Policy](http://localhost:3000/privacy-policy).

## License

This project is private and proprietary.

## Contact

For beta access or inquiries, please visit the landing page and join the waitlist.
