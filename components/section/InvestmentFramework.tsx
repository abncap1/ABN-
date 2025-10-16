// // components/sections/InvestmentFramework.tsx
// "use client";

// import { motion } from 'framer-motion';
// import { Factory, Building, Users, BarChart3 } from 'lucide-react';
// import { SectionHeader } from '@/components/ui/SectionHeader';

// export function InvestmentFramework() {
//   return (
//     <section id="section-2" className="min-h-[100dvh] container mx-auto px-4 py-20 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

//       {/* Left: Stacked Panels */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true, amount: 0.3 }}
//         className="lg:w-2/3 space-y-8"
//       >
//         <SectionHeader
//           title={["Investment", "Framework"]}
//           caption="Our structured approach to evaluating opportunities"
//           gradient1="from-slate-600 to-slate-800"
//           gradient2="from-blue-600 via-indigo-600 to-purple-600"
//         />

//         {/* Panel 1: Uncontrollables */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           className="bg-white/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl"
//         >
//           <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
//             Uncontrollables <span className="text-amber-500">("Value")</span>
//           </h3>
//           <div className="space-y-4">
//             {[
//               { icon: Factory, sub: "Racetrack", title: "Industry", desc: "Market growth and profit pool; Tailwinds/ Disruption risk" },
//               { icon: Building, sub: "Horse", title: "Company", desc: "Differentiation/ Moat; Market share" },
//               { icon: Users, sub: "Jockey", title: "Management", desc: "Values; Incentives" },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="flex items-start gap-4 p-4 bg-slate-50/50 dark:bg-slate-700/50 rounded-xl"
//               >
//                 <item.icon className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
//                 <div>
//                   <p className="font-medium text-slate-700 dark:text-slate-300">{item.sub}</p>
//                   <p className="text-slate-600 dark:text-slate-400">{item.title} — {item.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Panel 2: Controllables */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           className="bg-white/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl"
//         >
//           <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
//             <BarChart3 className="w-6 h-6 text-amber-500" /> Controllable <span className="text-amber-500">("Price")</span>
//           </h3>
//           <ul className="space-y-2 text-slate-600 dark:text-slate-400">
//             <li>• Last reported earnings</li>
//             <li>• Forward projections: Revenue/ EBITDA/ PAT/ FCF (12-24m)</li>
//             <li>• Step-jump in Capacity addition</li>
//             <li>• Inflections due to macro such as tariffs, interest rates etc.</li>
//           </ul>
//         </motion.div>

//         {/* CTA Info Bar */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true, amount: 0.3 }}
//           className="bg-amber-50/80 dark:bg-amber-900/20 border border-amber-200/50 dark:border-amber-700/50 rounded-2xl p-6 text-center"
//         >
//           <p className="text-slate-700 dark:text-slate-300 italic">
//             “Nothing will be perfect across all parameters....our objective is to make judgement on, and buy the best "bang for our buck"!”
//           </p>
//         </motion.div>
//       </motion.div>

//       {/* Right: Sticky Image/Spotlight (desktop), stacks on mobile */}
//       </section>
//       );
// }
// components/sections/InvestmentFramework.tsx
"use client";

import { motion } from 'framer-motion';
import { Factory, Building, Users, BarChart3, TrendingUp, Activity } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function InvestmentFramework() {
  return (
    <section
      id="investment-framework"
      className="relative overflow-hidden min-h-[100dvh] w-full py-20 lg:py-28"
    >
      {/* Ambient gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-rose-100 to-slate-100 dark:from-slate-900 dark:via-amber-950 dark:to-rose-950" />
        <div className="absolute -top-24 -right-16 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-blue-500/10 via-indigo-500/15 to-amber-400/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-[24rem] w-[24rem] rounded-full bg-gradient-to-tr from-indigo-500/10 via-blue-500/10 to-amber-400/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left: Flowchart-style information */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <SectionHeader
            title={["Investment", "Framework"]}
            caption="A balanced view of what we can and cannot control"
            gradient1="from-slate-600 to-slate-800"
            gradient2="from-blue-600 via-indigo-600 to-purple-600"
          />

          {/* Flow line */}
          <div className="relative pl-6">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-300/60 via-slate-300/30 to-amber-300/60 dark:from-indigo-500/30 dark:via-slate-700/40 dark:to-amber-500/30" />

            {/* Uncontrollables group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="relative mb-8"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_0_4px_rgba(99,102,241,0.18)]" />
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  Uncontrollables <span className="text-amber-500">("Value")</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Factory, tag: 'Racetrack', title: 'Industry', desc: 'Growth, profit pools, disruption risk' },
                  { icon: Building, tag: 'Horse', title: 'Company', desc: 'Moat, differentiation, share' },
                  { icon: Users, tag: 'Jockey', title: 'Management', desc: 'Values, incentives, stewardship' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: i * 0.08 }}
                    className="relative rounded-2xl p-5 backdrop-blur-md bg-white/60 dark:bg-white/5 border border-white/50 dark:border-white/10 shadow-xl ring-1 ring-inset ring-slate-900/5 dark:ring-white/10"
                  >
                    <item.icon className="w-6 h-6 mb-3 text-indigo-600 dark:text-indigo-400" />
                    <p className="text-lg uppercase tracking-wide text-slate-500 dark:text-slate-400">{item.tag}</p>
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{item.title}</h4>
                    <p className="mt-1 text-lg text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>


            {/* Controllables group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_0_4px_rgba(245,158,11,0.18)]" />
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  Controllables <span className="text-amber-500">("Price")</span>
                </h3>
              </div>

              <div className="rounded-2xl p-6 backdrop-blur-md bg-white/60 dark:bg-white/5 border border-white/50 dark:border-white/10 shadow-xl ring-1 ring-inset ring-slate-900/5 dark:ring-white/10">
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-3"><BarChart3 className="w-5 h-5 mt-0.5 text-amber-500" /> Last reported earnings</li>
                  <li className="flex items-start gap-3"><TrendingUp className="w-5 h-5 mt-0.5 text-amber-500" /> Forward projections: Revenue / EBITDA / PAT / FCF (12–24m)</li>
                  <li className="flex items-start gap-3"><Activity className="w-5 h-5 mt-0.5 text-amber-500" /> Step-jumps in capacity addition</li>
                  <li className="flex items-start gap-3"><Activity className="w-5 h-5 mt-0.5 text-amber-500" /> Macro inflections: tariffs, rates, policy</li>
                </ul>
              </div>
            </motion.div>

            {/* Quote / CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="mt-6 rounded-2xl p-6 text-center bg-amber-50/80 dark:bg-amber-900/10 border border-amber-200/40 dark:border-amber-800/30 shadow-sm"
            >
              <p className="text-slate-700 dark:text-slate-300 italic">
                “Nothing will be perfect across all parameters—our aim is the best bang for our buck.”
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Sticky analytics image with overlays */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-24"
        >
          <motion.div
            whileHover={{ y: -6 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 dark:ring-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-indigo-200 dark:from-slate-800 " />
            <img
              src="https://images.unsplash.com/photo-1707762890671-52ef6d6f51e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287"
              alt="Professional analytics dashboard with charts"
              className="relative w-full h-[28rem] object-cover mix-blend-multiply opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-slate-900/0 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}