// hooks/useScrollSpy.ts
"use client";

import { useState, useEffect } from 'react';

interface UseScrollSpyOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollSpy(sectionIds: string[], options: UseScrollSpyOptions = {}) {
  const { threshold = 0.5, rootMargin = "0px 0px -50% 0px" } = options;
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold, rootMargin }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds, threshold, rootMargin]);

  return activeSection;
}
