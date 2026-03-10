// Data for the landing page

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    icon: "TrendingUp",
    title: "Realized Profit Tracking",
    description: "Know your actual profits after selling stocks — including official CSE transaction costs."
  },
  {
    icon: "DollarSign",
    title: "Dividend Income Tracker",
    description: "Track dividends across all your holdings and see your passive income grow over time."
  },
  {
    icon: "PieChart",
    title: "True Portfolio Performance",
    description: "Understand your real returns by combining realized profits and dividends — not misleading market values."
  },
  {
    icon: "Shield",
    title: "Built for the CSE",
    description: "LKR currency, local stocks, and Colombo Stock Exchange support."
  }
];

export const steps: Step[] = [
  {
    number: 1,
    title: "Add your trades",
    description: "Manually enter trades or upload CSV files in seconds.",
    icon: "Upload"
  },
  {
    number: 2,
    title: "Stockflow does the math",
    description: "We calculate realized profits, dividends,broker commissions and true returns automatically.",
    icon: "BarChart3"
  },
  {
    number: 3,
    title: "Understand your results",
    description: "See exactly what you've earned — clearly and confidently.",
    icon: "TrendingUp"
  }
];
