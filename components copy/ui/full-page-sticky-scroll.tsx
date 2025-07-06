"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown, Circle } from "lucide-react";

export interface FullPageSection {
  id: string;
  title: string;
  content: React.ReactNode;
  backgroundImage: string;
  backgroundOverlay?: string;
  textColor?: 'light' | 'dark';
  animation?: 'fadeUp' | 'slideLeft' | 'slideRight' | 'scale' | 'custom';
  contentPosition?: 'overImage' | 'belowImage'; // <-- Add this line

}

interface FullPageStickyScrollProps {
  sections: FullPageSection[];
  showProgress?: boolean;
  showNavigation?: boolean;
  autoScroll?: boolean;
  className?: string;
}

export function FullPageStickyScroll({
  sections,
  showProgress = true,
  showNavigation = true,
  autoScroll = false,
  className
}: FullPageStickyScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth spring animation for scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Handle scroll events with debouncing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      setIsScrolling(true);
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      const scrollTop = containerRef.current.scrollTop;
      const sectionHeight = window.innerHeight;
      const currentSection = Math.round(scrollTop / sectionHeight);
      
      setActiveSection(Math.max(0, Math.min(currentSection, sections.length - 1)));
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [sections.length]);

  // Smooth scroll to section
  const scrollToSection = (index: number) => {
    if (!containerRef.current) return;
    
    const targetY = index * window.innerHeight;
    containerRef.current.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollToSection(Math.min(activeSection + 1, sections.length - 1));
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToSection(Math.max(activeSection - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, sections.length]);

  return (
    <div className={cn("relative w-full h-screen overflow-hidden", className)}>
      {/* Progress Indicator */}
      {showProgress && (
        <motion.div
          className="fixed top-1/2 left-6 transform -translate-y-1/2 z-50"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col space-y-3">
            {sections.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToSection(index)}
                className={cn(
                  "w-3 h-3 rounded-full border-2 transition-all duration-300 hover:scale-125",
                  activeSection === index
                    ? "bg-white border-white shadow-lg"
                    : "bg-transparent border-white/50 hover:border-white/80"
                )}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Navigation Dots */}
      {showNavigation && (
        <motion.div
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex space-x-2 bg-black/20 backdrop-blur-md rounded-full px-4 py-2">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeSection === index
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/80"
                )}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Scroll Indicator */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: activeSection < sections.length - 1 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/80 flex flex-col items-center"
        >
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Sections Container */}
      <div
        ref={containerRef}
        className="h-full overflow-y-auto scroll-smooth"
        style={{
          scrollBehavior: 'smooth',
          scrollSnapType: 'y mandatory'
        }}
      >
        {sections.map((section, index) => (
          <SectionComponent
            key={section.id}
            section={section}
            index={index}
            isActive={activeSection === index}
            isScrolling={isScrolling}
          />
        ))}
      </div>

      {/* Global Progress Bar */}
      {showProgress && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-white/20 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"
            style={{
              scaleX: smoothProgress,
              transformOrigin: "0%"
            }}
          />
        </motion.div>
      )}
    </div>
  );
}

interface SectionComponentProps {
  section: FullPageSection;
  index: number;
  isActive: boolean;
  isScrolling: boolean;
}

function SectionComponent({ section, index, isActive, isScrolling }: SectionComponentProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  // Content animations
  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const getAnimationVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          duration: 1.2, 
          ease: [0.25, 0.46, 0.45, 0.94],
          staggerChildren: 0.1
        }
      }
    };

    switch (section.animation) {
      case 'slideLeft':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, x: -100 },
          visible: { ...baseVariants.visible, x: 0 }
        };
      case 'slideRight':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, x: 100 },
          visible: { ...baseVariants.visible, x: 0 }
        };
      case 'scale':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, scale: 0.8 },
          visible: { ...baseVariants.visible, scale: 1 }
        };
      case 'fadeUp':
      default:
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, y: 60 },
          visible: { ...baseVariants.visible, y: 0 }
        };
    }
  };

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          y: backgroundY,
          scale: backgroundScale
        }}
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${section.backgroundImage})`,
            filter: 'brightness(0.7) contrast(1.1)'
          }}
        />
        
        {/* Overlay */}
        {section.backgroundOverlay && (
          <div
            className="absolute inset-0"
            style={{ background: section.backgroundOverlay }}
          />
        )}
        
        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Content */}
      <motion.div
        className={cn(
          "relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16",
          section.textColor === 'dark' ? 'text-gray-900' : 'text-white'
        )}
        style={{
          y: contentY,
          opacity: contentOpacity
        }}
      >
        <motion.div
          variants={getAnimationVariants()}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className="w-full"
        >
          {section.content}
        </motion.div>
      </motion.div>

      {/* Section Number */}
      <motion.div
        className="absolute top-8 right-8 z-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isActive ? 1 : 0.3, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-bold">
          {String(index + 1).padStart(2, '0')}
        </div>
      </motion.div>

      {/* Scroll Hint for First Section */}
      {index === 0 && (
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/80 text-center"
          >
            <p className="text-sm mb-2">Discover Our Story</p>
            <ChevronDown className="w-6 h-6 mx-auto" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}