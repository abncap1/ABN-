

// components/sections/GuidingPrinciples.tsx
"use client";

import { motion } from 'framer-motion';
import { Eye, Brain, Shield } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function GuidingPrinciples() {
  return (
    <section
      id="guiding-principles"
      className="relative overflow-hidden min-h-[100dvh] w-full py-20 lg:py-28"
    >
      {/* Subtle gradient background + vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-indigo-500/20 via-blue-500/10 to-amber-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-blue-600/10 via-indigo-500/10 to-amber-400/10 blur-3xl" />
      </div>
      {/* Centered container for content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left: Hero copy + cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 space-y-10"
        >
          <SectionHeader
            title={["Guiding", "Principles"]}
            caption="Core values that drive our investment philosophy"
            gradient1="from-slate-600 to-slate-800"
            gradient2="from-blue-600 via-indigo-600 to-slate-600"
          />

          <motion.blockquote
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left not-italic"
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-700 via-slate-900 to-slate-700 dark:from-slate-100 dark:via-slate-300 dark:to-slate-100">
              The young men know the rules. The old men know the exceptions.
            </p>
          </motion.blockquote>

          {/* Glassy cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {[
              { icon: Eye, title: 'Objectivity', desc: 'Most things are not as bad or as good as they may instinctively seem.' },
              { icon: Brain, title: 'Learn-ability', desc: 'Keep eyes and ears open—Mr. Market will show you all you need to know.' },
              { icon: Shield, title: 'Humility', desc: 'Anything can happen. The market is almost always right; manage risk first.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative rounded-2xl p-6 backdrop-blur-md bg-white/55 dark:bg-white/5 border border-white/40 dark:border-white/10 shadow-xl ring-1 ring-inset ring-slate-900/5 dark:ring-white/10"
              >
                <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-white/40 to-transparent dark:from-white/10" />
                <item.icon className="relative w-8 h-8 mb-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="relative text-xl font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                <p className="relative mt-1 text-lg leading-6 text-slate-600 dark:text-slate-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Illustrative Image Card with soft parallax */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6 }}
          className="lg:w-1/2 relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 dark:ring-white/10 bg-gradient-to-br from-slate-200 to-indigo-200 dark:from-slate-700 dark:to-indigo-800 aspect-square lg:aspect-[4/3]">
            {/* Using <img> intentionally as per project note */}
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
              alt="Professional analytics dashboard and team collaboration"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
          </div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="absolute -bottom-4 -right-4 bg-amber-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg"
          >
            Wisdom in Action — Experience-driven decisions
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}