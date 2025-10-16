// components/sections/WhyUs.tsx
"use client";

import { motion } from 'framer-motion';
import { Users, Target, Lightbulb } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function WhyUs() {
  const items = [
    {
      icon: Users,
      title: 'Access',
      desc:
        'Founder-to-founder rapport with leadership teams, enabling deeper conversations and faster signals.',
    },
    {
      icon: Target,
      title: 'Expertise',
      desc:
        'Multi-sector experience across financials, consumer, services, and industrials with repeatable playbooks.',
    },
    {
      icon: Lightbulb,
      title: 'Flexibility',
      desc:
        'Freedom to pursue micro-themes and nimble positions that larger funds often cannot touch.',
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden min-h-[100dvh]"
    >
      {/* Warm ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950" />
        <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full blur-3xl bg-gradient-to-br from-amber-400/25 via-orange-500/20 to-rose-400/20" />
        <div className="absolute -bottom-24 -right-16 h-[24rem] w-[24rem] rounded-full blur-3xl bg-gradient-to-tr from-orange-400/20 via-amber-400/20 to-blue-500/10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Team photo with warm overlay (sticks on desktop) */}


          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <SectionHeader
              title={["Why", "Choose Us"]}
              caption="Warm, human, and execution-focused advantages"
              gradient1="from-slate-600 to-slate-800"
              gradient2="from-amber-600 via-orange-600 to-rose-600"
            />

            {/* Accent chip / quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 ring-1 ring-amber-500/20 backdrop-blur"
            >
              <span className="text-sm">“Speed is the essence of execution.”</span>
            </motion.div>

            {/* Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              {items.map((item, i) => (
                <motion.article
                  key={item.title}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative rounded-2xl p-6 backdrop-blur-md bg-white/70 dark:bg-white/5 border border-white/50 dark:border-white/10 shadow-xl ring-1 ring-inset ring-slate-900/5 dark:ring-white/10"
                >
                  <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-amber-500/10 to-transparent" />
                  <item.icon className="relative w-8 h-8 mb-4 text-amber-600 dark:text-amber-400" />
                  <h3 className="relative text-xl font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                  <p className="relative mt-1 text-lg leading-6 text-slate-700 dark:text-slate-300">{item.desc}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative lg:sticky lg:top-24"
          >
            <motion.figure
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-900/10 dark:ring-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 dark:from-amber-700 dark:to-orange-800" />
              <img
                src="https://plus.unsplash.com/premium_photo-1749037209458-df7733a779a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2671"
                alt="Professional investment team collaborating"
                className="relative w-full h-[28rem] object-cover mix-blend-multiply opacity-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-slate-900/0 to-transparent" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-center text-slate-100 bg-white/85 dark:bg-slate-800/80 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/40 dark:border-white/10">
                Relationships-first investing, powered by experience
              </figcaption>
            </motion.figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
