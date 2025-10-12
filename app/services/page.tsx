"use client";

import { GuidingPrinciples } from "@/components/section/GuidingPrinciples";
import { WhyUs } from "@/components/section/WhyUs";
import { InvestmentFramework } from "@/components/section/InvestmentFramework";
import { PortfolioConstruction } from "@/components/section/PortfolioConstruction";
import { InvestmentProcess } from "@/components/section/InvestmentProcess";
import StickyNav from "@/components/ui/StickyNav";
export default function InvestingPage() {
  return (
    <main className="min-h-screen">
      {/* Global subtle particles/spotlight BG (Aceternity-inspired) */}
      <div className="fixed inset-0 pointer-events-none opacity-20 dark:opacity-10 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,165,0,0.2),transparent_50%)]" />
        {/* Faint grid for premium feel */}
        <div className="absolute inset-0 bg-grid-slate-100/20 dark:bg-grid-slate-700/20 [background-size:100px_100px]" />
      </div>
      {/* Sticky in-page nav */}

      <GuidingPrinciples />

      {/* Section Divider */}
      <div aria-hidden="true" className="relative z-0">
        <div className="pointer-events-none absolute inset-x-0 -top-6 h-24 blur-3xl opacity-50">
          <div className="mx-auto max-w-6xl h-full bg-gradient-to-r from-indigo-500/20 via-blue-500/10 to-amber-500/20 rounded-full" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent dark:via-slate-700/50" />
        </div>
      </div>

      <WhyUs />

      {/* Section Divider */}
      <div aria-hidden="true" className="relative z-0">
        <div className="pointer-events-none absolute inset-x-0 -top-6 h-24 blur-3xl opacity-50">
          <div className="mx-auto max-w-6xl h-full bg-gradient-to-r from-indigo-500/20 via-blue-500/10 to-amber-500/20 rounded-full" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent dark:via-slate-700/50" />
        </div>
      </div>

      <InvestmentFramework />

      {/* Section Divider */}
      <div aria-hidden="true" className="relative z-0">
        <div className="pointer-events-none absolute inset-x-0 -top-6 h-24 blur-3xl opacity-50">
          <div className="mx-auto max-w-6xl h-full bg-gradient-to-r from-indigo-500/20 via-blue-500/10 to-amber-500/20 rounded-full" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent dark:via-slate-700/50" />
        </div>
      </div>

      <PortfolioConstruction />

      {/* Section Divider */}
      <div aria-hidden="true" className="relative z-0">
        <div className="pointer-events-none absolute inset-x-0 -top-6 h-24 blur-3xl opacity-50">
          <div className="mx-auto max-w-6xl h-full bg-gradient-to-r from-indigo-500/20 via-blue-500/10 to-amber-500/20 rounded-full" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent dark:via-slate-700/50" />
        </div>
      </div>

      <InvestmentProcess />
    </main>
  );
}
