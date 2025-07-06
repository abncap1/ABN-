"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { BarChart3, Shield, Target, TrendingUp, Users, Award } from "lucide-react";

const content = [
  {
    title: "Portfolio Analysis & Strategy",
    description:
      "We begin with comprehensive analysis of your financial goals, risk tolerance, and investment timeline. Our team develops a customized investment strategy that aligns with your objectives while optimizing for risk-adjusted returns.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-blue-500/20 to-blue-600/20 text-white p-8 rounded-lg">
        <BarChart3 className="h-16 w-16 mb-4 text-blue-300" />
        <h3 className="text-xl font-bold mb-2">Strategic Planning</h3>
        <p className="text-center text-sm opacity-90">Comprehensive portfolio analysis and custom strategy development</p>
      </div>
    ),
  },
  {
    title: "Risk Assessment & Management",
    description:
      "Our advanced risk management framework evaluates market conditions, portfolio volatility, and correlation risks. We implement sophisticated hedging strategies and diversification techniques to protect your investments while maximizing growth potential.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-green-500/20 to-green-600/20 text-white p-8 rounded-lg">
        <Shield className="h-16 w-16 mb-4 text-green-300" />
        <h3 className="text-xl font-bold mb-2">Risk Protection</h3>
        <p className="text-center text-sm opacity-90">Advanced risk assessment and mitigation strategies</p>
      </div>
    ),
  },
  {
    title: "Active Portfolio Management",
    description:
      "Our investment professionals actively monitor and adjust your portfolio based on market conditions, economic indicators, and performance metrics. We use proprietary algorithms and quantitative models to optimize asset allocation and timing.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-purple-500/20 to-purple-600/20 text-white p-8 rounded-lg">
        <Target className="h-16 w-16 mb-4 text-purple-300" />
        <h3 className="text-xl font-bold mb-2">Active Management</h3>
        <p className="text-center text-sm opacity-90">Continuous monitoring and optimization of your investments</p>
      </div>
    ),
  },
  {
    title: "Performance Tracking & Reporting",
    description:
      "Receive detailed performance reports with transparent fee structures and comprehensive analytics. Our reporting includes risk metrics, attribution analysis, and benchmark comparisons to keep you informed about your investment progress.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-orange-500/20 to-orange-600/20 text-white p-8 rounded-lg">
        <TrendingUp className="h-16 w-16 mb-4 text-orange-300" />
        <h3 className="text-xl font-bold mb-2">Performance Analytics</h3>
        <p className="text-center text-sm opacity-90">Detailed reporting and performance tracking</p>
      </div>
    ),
  },
  {
    title: "Client Support & Advisory",
    description:
      "Our dedicated client support team provides personalized service and investment advisory. Regular consultations ensure your investment strategy evolves with your changing needs and market conditions.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-teal-500/20 to-teal-600/20 text-white p-8 rounded-lg">
        <Users className="h-16 w-16 mb-4 text-teal-300" />
        <h3 className="text-xl font-bold mb-2">Client Advisory</h3>
        <p className="text-center text-sm opacity-90">Personalized support and ongoing investment guidance</p>
      </div>
    ),
  },
];

export default function InvestmentProcessShowcase() {
  return (
    <div className="w-full">
      <StickyScroll content={content} />
    </div>
  );
}