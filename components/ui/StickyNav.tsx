// components/ui/StickyNav.tsx
// (Unchanged from previous)
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { ChevronDown } from 'lucide-react';

interface NavSection {
  id: string;
  label: string;
}

interface StickyNavProps {
  sections: NavSection[];
}

export default function StickyNav({ sections }: StickyNavProps) {
  const activeSection = useScrollSpy(sections.map(s => s.id), { threshold: 0.5 });

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50">
      <div className="container mx-auto px-4 py-4">
        <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 text-sm font-medium">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                className={`group relative flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  activeSection === section.id
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/20'
                    : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${section.id}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {section.label}
                <ChevronDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                {activeSection === section.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-lg -z-10 animate-pulse" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
