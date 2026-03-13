// components/ui/SectionHeader.tsx
"use client"; // Client for potential future interactions, but mostly static

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: [string, string]; // Split for gradients: [part1, part2]
  caption: string;
  gradient1?: string; // e.g., "from-slate-600 to-slate-800"
  gradient2?: string; // e.g., "from-blue-600 via-indigo-600 to-purple-600"
  level?: 'h1' | 'h2' | 'h3';
}

export function SectionHeader({ 
  title, 
  caption, 
  gradient1 = "from-slate-600 to-slate-800", 
  gradient2 = "from-blue-600 via-indigo-600 to-slate-600",
  level: Tag = 'h2'
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="text-center lg:text-left space-y-4"
    >
      {/* Main Title: Single heading with internal spans */}
      <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-2 sm:gap-0">
        <Tag className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          <span className={`bg-clip-text dark:text-gray-100 text-transparent bg-gradient-to-r ${gradient1}`}>
            {title[0]}
          </span>
          {/* Add a space between parts if they are on the same line */}
          <span className="inline sm:hidden">&nbsp;</span>
          <span className={`bg-clip-text text-transparent bg-gradient-to-r ${gradient2}`}>
            &nbsp;{title[1]}
          </span>
        </Tag>
      </div>
      
      {/* Caption: Amber subhead chip */}
      <div className="inline-flex items-center px-4 py-2 bg-amber-100/80 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium backdrop-blur-sm border border-amber-200/50 dark:border-amber-700/50">
        {caption}
      </div>
    </motion.div>
  );
}
