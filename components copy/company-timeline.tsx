"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {
  Building,
  TrendingUp,
  Globe,
  Lightbulb,
  Award,
  Users,
  Shield,
  Target,
  Zap,
  Star,
  User,
} from "lucide-react";
import { motion } from "framer-motion";

const timelineData = [
  {
    title: "2025",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          PMS License to raise External Capital?
        </p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-primary/10 to-primary/20 p-4 rounded-lg border border-primary/20">
            <Award className="h-8 w-8 text-primary mb-2" />
            <h4 className="font-semibold text-sm mb-1">
              What is a PMS License?
            </h4>
            <p className="text-xs text-muted-foreground">
              A PMS License is regulatory approval granted by SEBI that allows
              entities to manage portfolios and funds on behalf of investors,
              usually through discretionary or non-discretionary portfolio
              management agreements.
            </p>
          </div>
          <div className="bg-gradient-to-br from-accent/10 to-accent/20 p-4 rounded-lg border border-accent/20">
            <TrendingUp className="h-8 w-8 text-accent mb-2" />
            <h4 className="font-semibold text-sm mb-1">
              - Eligibility Criteria for PMS License:
            </h4>
            <p className="text-xs text-muted-foreground">
              - Net Worth Requirement
            </p>
            <p className="text-xs text-muted-foreground">
              - Personnel Requirements
            </p>
            <p className="text-xs text-muted-foreground">
              - Registration and Compliance
            </p>
          </div>
        </div>
        <div className="mb-6">
          <h4 className="font-semibold text-sm mb-3">
            Application Process for PMS License:
          </h4>
          <ul className="text-xs space-y-1 text-muted-foreground">
            <li>• Apply via SEBI Intermediary Portal</li>
            <li>• Documentation</li>
            <li>• SEBI Review</li>
            <li>• Registration Fee</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* Image 1 with Overlay */}
          <motion.div
            className="relative group overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"
              alt="Modern office technology"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <h5 className="font-semibold text-xs mb-1">
                  AI Technology Platform
                </h5>
                <p className="text-xs opacity-90">
                  Advanced analytics & automation
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image 2 with Overlay */}
          <motion.div
            className="relative group overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg"
              alt="Team collaboration"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <h5 className="font-semibold text-xs mb-1">
                  Expert Team Growth
                </h5>
                <p className="text-xs opacity-90">
                  50+ investment professionals
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        {/* <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          A proprietary book (prop book) refers to a scenario where a financial
          firm or individual manages and invests its own capital rather than
          client money. The primary objective is generating returns directly for
          the firm’s owners or partners.
        </p> */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-4 rounded-lg border border-blue-500/20">
            <Lightbulb className="h-8 w-8 text-blue-600 mb-2" />
            <h4 className="font-semibold text-sm mb-1">
              Full-Time Prop Book Investor @ ABN Capital
            </h4>
            <p className="text-xs text-muted-foreground">
              • Actively manage the firm’s internal capital.
            </p>
            <p className="text-xs text-muted-foreground">
              • Identify and execute high-conviction investment ideas.
            </p>
            <p className="text-xs text-muted-foreground">
              • Fundamental research, valuation modeling, and investment due
              diligence.
            </p>
            <p className="text-xs text-muted-foreground">
              • Analyze market trends, macroeconomic indicators, and
              sector-specific factors.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 p-4 rounded-lg border border-green-500/20">
            <Shield className="h-8 w-8 text-green-600 mb-2" />
            <h4 className="font-semibold text-sm mb-1">Career Path & Growth</h4>
            <p className="text-xs text-muted-foreground">
              • Progression from analyst to associate and eventually portfolio
              manager.
            </p>
            <p className="text-xs text-muted-foreground">
              • Opportunities to expand asset classes or strategies within the
              firm.
            </p>
            <p className="text-xs text-muted-foreground">
              • Performance directly tied to compensation, bonuses, and
              potential partnership.
            </p>
          </div>
        </div>
        <div className="mb-6">
          <h4 className="font-semibold text-sm mb-3">
            {" "}
            2x Entrepreneur...1x Exit
          </h4>
          <ul className="text-xs space-y-1 text-muted-foreground">
            <li>
              • Proven capability in creating, growing, and running businesses.
            </li>
            <li>
              • At least one business has been externally validated through
              acquisition, merger, IPO, or another successful exit strategy.
            </li>
            <li>
              • Investors often find such profiles attractive because it shows
              the entrepreneur’s ability to deliver tangible financial outcomes.
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* Image 1 with Overlay */}
          <motion.div
            className="relative group overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="Technology innovation"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <h5 className="font-semibold text-xs mb-1">Innovation Hub</h5>
                <p className="text-xs opacity-90">
                  AI & machine learning development
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image 2 with Overlay */}
          <motion.div
            className="relative group overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
              alt="Data analysis"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <h5 className="font-semibold text-xs mb-1">Data Analytics</h5>
                <p className="text-xs opacity-90">Real-time market analysis</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    title: "2019",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Columbia MBA + Global Hedge Fund
        </p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 p-4 rounded-lg border border-purple-500/20">
            <Globe className="h-8 w-8 text-purple-600 mb-2" />
            <h4 className="font-semibold text-sm mb-1">Columbia MBA</h4>
            <p className="text-xs text-muted-foreground">
              • Finance and investing expertise.
            </p>
            <p className="text-xs text-muted-foreground">
              • Strong alumni network across global finance, private equity,
              venture capital, and hedge funds.
            </p>
            <p className="text-xs text-muted-foreground">
              • Rigorous academic training in financial markets, corporate
              strategy, and leadership.
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 p-4 rounded-lg border border-orange-500/20">
            <Users className="h-8 w-8 text-orange-600 mb-2" />
            <h4 className="font-semibold text-sm mb-1">
              Global Hedge Fund Experience
            </h4>
            <p className="text-xs text-muted-foreground">
              • Sophisticated investment analysis across various global markets.
            </p>
            <p className="text-xs text-muted-foreground">
              • Deep experience in managing portfolios, risk analysis, and
              complex trading strategies.
            </p>
            <p className="text-xs text-muted-foreground">
              • Direct exposure to international financial markets, asset
              classes, and investment dynamics.
            </p>
          </div>
        </div>
        {/* <div className="mb-6">
          <h4 className="font-semibold text-sm mb-3">
            Global Expansion Highlights:
          </h4>
          <ul className="text-xs space-y-1 text-muted-foreground">
            <li>• Opened London office serving European markets</li>
            <li>• Established Singapore hub for Asia-Pacific region</li>
            <li>• Served 500+ international clients</li>
            <li>• Implemented multi-currency capabilities</li>
            <li>• Achieved regulatory compliance across jurisdictions</li>
          </ul>
        </div> */}
        <div className="grid grid-cols-2 gap-4">
          {/* Image 1 with Overlay */}
          <motion.div
            className="relative group overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
              alt="Global expansion"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <h5 className="font-semibold text-xs mb-1">Global Offices</h5>
                <p className="text-xs opacity-90">
                  London & Singapore expansion
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image 2 with Overlay */}
          <motion.div
            className="relative group overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
              alt="International team"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <h5 className="font-semibold text-xs mb-1">
                  International Team
                </h5>
                <p className="text-xs opacity-90">500+ global clients served</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    title: "2016",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Chartered Accountant (CA) with deep experience in Management
          Consulting and Private Equity, specializing in financial analysis,
          strategic advisory, due diligence, deal structuring, and value
          creation. Brings a rigorous analytical approach from CA training,
          strategic insights honed from consulting engagements, and investment
          acumen developed through hands-on Private Equity experience.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 p-4 rounded-lg border border-green-500/20">
            <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
            <h4 className="font-semibold text-sm mb-1">Chartered Accountant</h4>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-4 rounded-lg border border-blue-500/20">
            <Target className="h-8 w-8 text-blue-600 mb-2" />
            <h4 className="font-semibold text-sm mb-1">Consulting</h4>
          </div>
          <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 p-4 rounded-lg border border-red-500/20">
            <User className="h-8 w-8 text-red-600 mb-2" />
            <h4 className="font-semibold text-sm mb-1">Private Equity</h4>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* Image 1 with Overlay */}
          <motion.div
            className="relative group overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg"
              alt="Business growth"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <h5 className="font-semibold text-xs mb-1">Business Growth</h5>
                <p className="text-xs opacity-90">$100M milestone achieved</p>
              </div>
            </div>
          </motion.div>

          {/* Image 2 with Overlay */}
          <motion.div
            className="relative group overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg"
              alt="Team success"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <h5 className="font-semibold text-xs mb-1">Team Success</h5>
                <p className="text-xs opacity-90">15 professionals & growing</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    title: "2005",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Financial markets represent the platforms and systems through which
          buyers and sellers trade assets such as stocks, bonds, currencies, and
          commodities. Markets serve critical economic roles—allocating capital,
          setting asset prices, and providing liquidity to investors.
        </p>
        <div className="mb-8">
          <h4 className="font-semibold text-sm mb-3">Foundation Milestones:</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Where shares of publicly listed companies are traded.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Provide companies access to capital and investors a stake in corporate ownership and profits.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Common terms: Stocks, IPOs, dividends, market capitalization.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Facilitate the issuance and trading of debt securities (bonds) by governments, municipalities, and corporations.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Investors lend money to issuers in exchange for regular interest payments and the eventual return of principal.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Largest and most liquid global market.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Currencies are traded to facilitate international trade, hedging, and speculation.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-primary/10 to-primary/20 p-6 rounded-lg flex flex-col items-center justify-center border border-primary/20">
            <Building className="h-12 w-12 text-primary mb-3" />
            <h4 className="font-semibold text-sm text-center">
              Company Founded
            </h4>
            <p className="text-xs text-muted-foreground text-center mt-1">
              Vision to Excellence
            </p>
          </div>
          <div className="bg-gradient-to-br from-accent/10 to-accent/20 p-6 rounded-lg flex flex-col items-center justify-center border border-accent/20">
            <Users className="h-12 w-12 text-accent mb-3" />
            <h4 className="font-semibold text-sm text-center">First Clients</h4>
            <p className="text-xs text-muted-foreground text-center mt-1">
              Building Trust
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function CompanyTimeline() {
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={timelineData} />
    </div>
  );
}
