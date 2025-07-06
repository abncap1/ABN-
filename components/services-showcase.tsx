"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { BarChart3, Shield, Target, TrendingUp, PieChart, Calculator } from "lucide-react";

const content = [
  {
    title: "Portfolio Management",
    description:
      "Comprehensive portfolio construction and management tailored to your investment objectives. Our experienced team uses advanced analytics and market insights to build diversified portfolios that optimize risk-adjusted returns while aligning with your financial goals.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-blue-500/20 to-blue-600/20 text-white p-8 rounded-lg">
        <BarChart3 className="h-20 w-20 mb-4 text-blue-300" />
        <h3 className="text-2xl font-bold mb-3">Portfolio Management</h3>
        <div className="grid grid-cols-2 gap-2 text-xs opacity-90">
          <div>• Custom Strategies</div>
          <div>• Risk Assessment</div>
          <div>• Active Monitoring</div>
          <div>• Performance Tracking</div>
        </div>
      </div>
    ),
  },
  {
    title: "Risk Management",
    description:
      "Advanced risk assessment and mitigation strategies to protect your investments from market volatility. We employ sophisticated hedging techniques, diversification strategies, and stress testing to ensure your portfolio maintains optimal risk-return characteristics.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-green-500/20 to-green-600/20 text-white p-8 rounded-lg">
        <Shield className="h-20 w-20 mb-4 text-green-300" />
        <h3 className="text-2xl font-bold mb-3">Risk Management</h3>
        <div className="grid grid-cols-2 gap-2 text-xs opacity-90">
          <div>• Risk Profiling</div>
          <div>• Diversification</div>
          <div>• Hedging Strategies</div>
          <div>• Stress Testing</div>
        </div>
      </div>
    ),
  },
  {
    title: "Wealth Planning",
    description:
      "Holistic financial planning to help you achieve your long-term wealth accumulation goals. Our comprehensive approach includes tax optimization, estate planning, and retirement strategies designed to secure your family's financial future across generations.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-purple-500/20 to-purple-600/20 text-white p-8 rounded-lg">
        <Target className="h-20 w-20 mb-4 text-purple-300" />
        <h3 className="text-2xl font-bold mb-3">Wealth Planning</h3>
        <div className="grid grid-cols-2 gap-2 text-xs opacity-90">
          <div>• Goal-based Planning</div>
          <div>• Tax Optimization</div>
          <div>• Estate Planning</div>
          <div>• Retirement Strategies</div>
        </div>
      </div>
    ),
  },
  {
    title: "Investment Advisory",
    description:
      "Expert investment advice and market insights to guide your investment decisions. Our research team provides comprehensive market analysis, sector recommendations, and investment opportunities to help you make informed decisions in dynamic markets.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-orange-500/20 to-orange-600/20 text-white p-8 rounded-lg">
        <TrendingUp className="h-20 w-20 mb-4 text-orange-300" />
        <h3 className="text-2xl font-bold mb-3">Investment Advisory</h3>
        <div className="grid grid-cols-2 gap-2 text-xs opacity-90">
          <div>• Market Analysis</div>
          <div>• Investment Research</div>
          <div>• Asset Allocation</div>
          <div>• Sector Insights</div>
        </div>
      </div>
    ),
  },
  {
    title: "Alternative Investments",
    description:
      "Access to exclusive alternative investment opportunities for portfolio diversification. We provide exposure to private equity, real estate funds, hedge fund strategies, and commodities to enhance returns and reduce correlation with traditional markets.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-red-500/20 to-red-600/20 text-white p-8 rounded-lg">
        <PieChart className="h-20 w-20 mb-4 text-red-300" />
        <h3 className="text-2xl font-bold mb-3">Alternative Investments</h3>
        <div className="grid grid-cols-2 gap-2 text-xs opacity-90">
          <div>• Private Equity</div>
          <div>• Real Estate Funds</div>
          <div>• Hedge Strategies</div>
          <div>• Commodities</div>
        </div>
      </div>
    ),
  },
];

export default function ServicesShowcase() {
  return (
    <div className="w-full">
      <StickyScroll content={content} />
    </div>
  );
}