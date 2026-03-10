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
    title: "AI Portfolio Analytics",
    description: "Use AI-based analytics built for Colombo Stock Exchange portfolios to evaluate realised outcomes and risk signals."
  },
  {
    icon: "DollarSign",
    title: "Dividend Income Tracker",
    description: "Track dividend income across all your CSE holdings and see your income growth over time."
  },
  {
    icon: "PieChart",
    title: "Stock Market Portfolio Management",
    description: "Manage your stock portfolio with clear views of realised returns, dividend income, and capital movement."
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
    title: "Stockflow runs AI analysis",
    description: "We calculate realised profits, dividends, broker commissions, and AI-powered portfolio insights automatically.",
    icon: "BarChart3"
  },
  {
    number: 3,
    title: "Understand your results",
    description: "See exactly what you've earned — clearly and confidently.",
    icon: "TrendingUp"
  }
];
