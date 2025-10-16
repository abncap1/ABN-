// components/sections/InvestmentProcess.tsx
"use client";

import { motion } from 'framer-motion';
import { Lightbulb, BarChart3, Users, Target, Star, ArrowDown, ChevronRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function InvestmentProcess() {
  const funnelCounts = [200, 50, 20, 5];

  const steps = [
    {
      icon: Lightbulb,
      title: 'Ideation',
      bullets1: ['Tracking list', 'Screens', 'Results surprises'],
      bullets2: ['Industry connects', 'Investor community'],
    },
    {
      icon: BarChart3,
      title: 'Research',
      bullets1: ['Financials', 'Earnings calls', 'Interviews', 'Valuation check'],
      bullets2: ['Mgmt. meetings', 'Discussion with sell-side analysts'],
    },
    {
      icon: Users,
      title: 'VAR / Scuttlebutt',
      bullets1: ['Interviews with competitors, customers, suppliers, ex-employees'],
      bullets2: ['Site / plant visits', 'Self-use of product / service'],
    },
    {
      icon: Target,
      title: 'Action',
      bullets1: ['Continued mgmt. interaction'],
      bullets2: ['Buy / add / trim / exit based on relative / absolute attractiveness'],
    },
  ];

  return (
    <section
      id="investment-process"
      className="relative overflow-hidden min-h-[100dvh] w-full py-20 lg:py-28"
    >
      {/* Ambient gradient field + soft orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-slate-50 to-blue-50 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-950" />
        <div className="absolute -top-24 left-1/3 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-indigo-500/15 via-blue-500/10 to-amber-400/10 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-[24rem] w-[24rem] rounded-full bg-gradient-to-tr from-blue-600/10 via-indigo-500/10 to-amber-400/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Left: Funnel counts (responsive row → column) */}
          <motion.aside
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-row relative lg:top-60 md:flex-col items-center justify-center md:justify-start gap-4 md:gap-20 lg:left-8"
            aria-label="Opportunity funnel counts"
          >
            {funnelCounts.map((n, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <div className="relative w-16 h-16 rounded-full grid place-items-center text-base font-semibold text-white shadow-xl ring-1 ring-white/20 backdrop-blur-md bg-gradient-to-br from-indigo-500 to-blue-600">
                  {n}
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-white/20 opacity-30" />
                </div>
                {i < funnelCounts.length - 1 && (
                  <ChevronRight className="md:hidden absolute -right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
                )}
                {i < funnelCounts.length - 1 && (
                  <ArrowDown className="hidden md:block mx-auto mt-2 w-6 h-6 text-slate-400" />
                )}
              </motion.div>
            ))}
          </motion.aside>

          {/* Center: Vertical timeline cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <SectionHeader
              title={["Investment", "Process"]}
              caption="Stepwise, evidence-led decision making"
              gradient1="from-slate-600 to-slate-800"
              gradient2="from-blue-600 via-indigo-600 to-purple-600"
            />

            <div className="relative pl-6">
              {/* Timeline spine */}
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-300/60 via-slate-300/30 to-amber-300/60 dark:from-indigo-500/30 dark:via-slate-700/40 dark:to-amber-500/30" />

              <motion.ol
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
                className="space-y-6"
              >
                {steps.map((s, i) => (
                  <motion.li
                    key={s.title}
                    variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}
                    whileHover={{ y: -2, scale: 1.01 }}
                    className="relative"
                  >
                    {/* Node */}
                    <span className="absolute -left-[9px] top-3 h-2.5 w-2.5 rounded-full bg-indigo-500 shadow-[0_0_0_4px_rgba(99,102,241,0.18)]" />

                    <div className="group rounded-2xl p-6 md:p-7 backdrop-blur-md bg-white/70 dark:bg-white/5 border border-white/50 dark:border-white/10 shadow-xl ring-1 ring-inset ring-slate-900/5 dark:ring-white/10">
                      <div className="flex items-start gap-4 mb-3">
                        <s.icon className="w-8 h-8 text-amber-500 mt-0.5 flex-shrink-0" />
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{s.title}</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300">
                        <ul className="space-y-1 list-disc list-inside">
                          {s.bullets1.map((b, j) => (
                            <li key={j}>{b}</li>
                          ))}
                        </ul>
                        <ul className="space-y-1 list-disc list-inside">
                          {s.bullets2.map((b, j) => (
                            <li key={j}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </motion.ol>
            </div>
          </motion.div>

          {/* Right: Sticky performance card */}
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative lg:sticky lg:top-24"
          >
            <motion.div
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-2xl p-6 shadow-2xl ring-1 ring-slate-900/10 dark:ring-white/10 backdrop-blur-md bg-gradient-to-br from-amber-500/18 via-amber-600/18 to-amber-700/18 border border-amber-400/30 dark:border-amber-500/25"
            >
              <Star className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <p className="text-center text-slate-800 dark:text-slate-200 font-medium mb-4">
                Intense research and vetting covering 200+ stocks each quarter
              </p>
              <div className="w-full bg-slate-200/60 dark:bg-slate-700/50 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-amber-500 to-amber-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>

              {/* KPI chips */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-5 grid grid-cols-2 gap-3"
              >
                <div className="rounded-xl px-3 py-2 bg-white/60 dark:bg-white/10 border border-white/40 dark:border-white/10 text-center">
                  <p className="text-[11px] text-slate-600 dark:text-slate-300">Idea → Action</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">~ 2–6 weeks</p>
                </div>
                <div className="rounded-xl px-3 py-2 bg-white/60 dark:bg-white/10 border border-white/40 dark:border-white/10 text-center">
                  <p className="text-[11px] text-slate-600 dark:text-slate-300">Hit rate (5/200)</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">~ 2.5%</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}