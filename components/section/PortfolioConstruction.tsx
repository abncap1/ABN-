

// components/sections/PortfolioConstruction.tsx
"use client";

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TrendingUp, Rocket, RefreshCw, Sparkles } from 'lucide-react';

export function PortfolioConstruction() {
  const portfolioItems = [
    {
      number: 1,
      title: 'Compounders',
      allocation: '20–40%',
      irr: '15–20% IRR • 2–5y',
      desc: 'Sector leaders compounding earnings with durable moats and disciplined reinvestment.',
      icon: TrendingUp,
      gradient: 'from-blue-600 via-indigo-600 to-indigo-700',
      glow: 'from-blue-500/25 via-indigo-500/20 to-amber-400/20',
    },
    {
      number: 2,
      title: 'Challengers',
      allocation: '20–40%',
      irr: '15–25% IRR • 2–5y',
      desc: 'Emerging share-gainers with improving unit economics and runway for scale.',
      icon: Rocket,
      gradient: 'from-indigo-600 via-blue-600 to-blue-700',
      glow: 'from-indigo-500/25 via-blue-500/20 to-amber-400/20',
    },
    {
      number: 3,
      title: 'Turnarounds',
      allocation: '15–30%',
      irr: '50–200% Upside • 1–2y',
      desc: 'Operational resets or capital structure fixes driving sharp earnings inflections.',
      icon: RefreshCw,
      gradient: 'from-amber-500 via-amber-600 to-amber-700',
      glow: 'from-amber-400/25 via-amber-500/20 to-blue-500/20',
    },
    {
      number: 4,
      title: 'Special Situations',
      allocation: '0–15%',
      irr: '50–200% Upside • 3–9m',
      desc: 'Corporate actions (merger/demerger, spin, delisting, arbitrage) with defined catalysts.',
      icon: Sparkles,
      gradient: 'from-blue-600 via-indigo-600 to-amber-600',
      glow: 'from-blue-500/20 via-indigo-500/20 to-amber-400/25',
    },
  ];

  return (
    <section
      id="portfolio-construction"
      className="relative min-h-[100dvh] overflow-hidden w-full py-20 lg:py-28"
    >
      {/* Ambient gradients + soft orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-950" />        <div className="absolute -top-24 -left-24 h-[32rem] w-[32rem] rounded-full blur-3xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-amber-400/10" />
        <div className="absolute -bottom-24 right-0 h-[28rem] w-[28rem] rounded-full blur-3xl bg-gradient-to-tr from-amber-400/15 via-indigo-500/10 to-blue-500/10" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        {/* Left/Main: Four Gradient Cards (Bento/Grid) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:w-2/3 space-y-8 z-10"
        >
          <SectionHeader
            title={["Portfolio", "Construction"]}
            caption="Infographic overview of position archetypes and target ranges"
            gradient1="from-slate-600 to-slate-800"
            gradient2="from-blue-600 via-indigo-600 to-purple-600"
          />

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {portfolioItems.map((item, i) => (
              <motion.article
                key={item.title}
                variants={{ hidden: { opacity: 0, y: 28, scale: 0.97 }, visible: { opacity: 1, y: 0, scale: 1 } }}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-2xl p-6 shadow-xl ring-1 ring-slate-900/10 dark:ring-white/10 overflow-hidden"
              >
                {/* Card background + glass layer */}
                <div className={`absolute inset-0 dark:bg-gray-800 opacity-90`} />
                <div className="absolute inset-0 backdrop-blur-[2px] bg-white/10 dark:bg-black/20" />
                {/* Glow */}
                <div className={`pointer-events-none absolute -inset-12 rounded-[2rem] blur-3xl bg-gradient-to-br ${item.glow}`} />

                {/* Number badge */}
                <div className="relative z-10 mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full grid place-items-center text-sm font-bold dark:text-white text-black shadow-lg ring-1 ring-white/30 bg-gradient-to-br from-amber-500 to-amber-600">
                    {item.number}
                  </div>
                  <h3 className="text-xl font-semibold dark:text-white drop-shadow-sm">{item.title}</h3>
                </div>

                {/* Allocation + icon */}
                <div className="relative z-10 flex items-center justify-between mb-2">
                  <p className="dark:text-white/90 font-semibold tracking-tight flex items-center gap-2">
                    {item.allocation}
                  </p>
                  <div className="rounded-xl px-3 py-1 bg-white/15 dark:text-white/90 text-xs font-medium backdrop-blur-sm border border-white/20">
                    {item.irr}
                  </div>
                </div>

                {/* Icon + description */}
                <div className="relative z-10 mt-3 flex items-start gap-3">
                  <div className="shrink-0 rounded-xl p-2 bg-white/15 border border-white/20 backdrop-blur-sm">
                    <item.icon className="w-6 h-6 dark:text-white" />
                  </div>
                  <p className="text-lg leading-6 dark:text-white/90">
                    {item.desc}
                  </p>
                </div>

                {/* Sheen */}
                <div className="pointer-events-none absolute -top-1/3 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Sticky Image Card with Caption (stacks on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/3 relative lg:sticky lg:top-24 z-10"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 dark:ring-white/10">
            <div className="absolute inset-0 " />
            <img
              src="https://plus.unsplash.com/premium_photo-1661611263128-ffb51eca570f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2669"
              alt="Strategic portfolio allocation visual"
              className="relative w-full h-[26rem] object-cover mix-blend-multiply opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-slate-900/0 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 px-4 py-2 rounded-full text-sm font-medium text-center backdrop-blur-sm border border-white/40 dark:border-white/10">
              Strategic Portfolio — Balanced exposure across archetypes
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}