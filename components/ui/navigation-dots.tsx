"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NavigationDotsProps {
  sections: string[];
  activeSection: number;
  onSectionClick: (index: number) => void;
  className?: string;
}

export function NavigationDots({ 
  sections, 
  activeSection, 
  onSectionClick, 
  className 
}: NavigationDotsProps) {
  return (
    <div className={cn(
      "fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4",
      className
    )}>
      {sections.map((section, index) => (
        <motion.button
          key={section}
          onClick={() => onSectionClick(index)}
          className={cn(
            "w-3 h-3 rounded-full border-2 transition-all duration-300 group relative",
            activeSection === index
              ? "bg-white border-white scale-125"
              : "bg-transparent border-white/50 hover:border-white/80"
          )}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Tooltip */}
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              {section}
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
}