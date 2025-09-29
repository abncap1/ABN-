"use client"

import React, { useState, useEffect } from 'react';
import { 
  Quote, Eye, Brain, Shield, Users, Target, Lightbulb, 
  BarChart3, Star, Building, Factory, TrendingUp, ArrowDown, Menu, X 
} from 'lucide-react';

// Custom hook for scroll management - only for desktop
const useScrollSections = (sections: any[]) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Disable scroll sections on mobile

    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        setCurrentSection(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
        setCurrentSection(prev => prev + 1);
      } else if (e.key === 'ArrowUp' && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, sections.length, isMobile]);

  return { currentSection, setCurrentSection, isMobile };
};

// Mobile Navigation Component
const MobileNav = ({ sections, currentSection, setCurrentSection }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const sectionNames = [
    'Guiding Principles',
    'Why Choose Us',
    'Investment Framework',
    'Portfolio Construction',
    'Investment Process'
  ];

  const scrollToSection = (index: number) => {
    const element = document.getElementById(`section-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      
      {isOpen && (
        <div className="absolute top-16 right-0 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 min-w-48">
          {sectionNames.map((name, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className="block w-full text-left px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 first:rounded-t-lg last:rounded-b-lg"
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Section 1: Guiding Principles
const GuidingPrinciplesSection = () => (
  <div id="section-0" className="relative min-h-screen w-full bg-gradient-to-br from-blue-50 via-indigo-50/80 to-slate-100/60 dark:from-slate-900 dark:via-blue-900/30 dark:to-indigo-900/30">
    <div className="relative z-10 flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center transform-gpu lg:scale-90 xl:scale-95 origin-center max-w-[1200px] mx-auto">
          {/* Content Side */}
          <div className="text-slate-800 dark:text-white order-1 lg:order-1">
            {/* Header */}
            <div className="mb-8 lg:mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 leading-tight">
                <span className="text-black dark:text-slate-100">Guiding</span>
                <br />
                <span className="text-black dark:text-slate-100 bg-clip-text text-transparent">
                  Principles
                </span>
              </h1>
              
              <blockquote className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light italic mb-6 lg:mb-8 leading-relaxed text-yellow-500">
                "The young men know the rules.<br />
                The old men know the exceptions."
              </blockquote>
            </div>

            {/* Principles */}
            <div className="space-y-6 lg:space-y-8">
              <div className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-blue-200/50 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="flex items-start space-x-4 lg:space-x-6">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 dark:group-hover:bg-blue-900 transition-colors">
                    <Eye className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-yellow-500">
                      Objectivity
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg lg:text-xl">
                      Most things are not as bad or as good as they may instinctively seem
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-blue-200/50 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="flex items-start space-x-4 lg:space-x-6">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 dark:group-hover:bg-blue-900 transition-colors">
                    <Brain className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-yellow-500">
                      Learn-ability
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg lg:text-xl">
                      If you keep your eyes and ears open....Mr. Market will show you all you need to know
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-blue-200/50 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="flex items-start space-x-4 lg:space-x-6">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 dark:group-hover:bg-blue-900 transition-colors">
                    <Shield className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-yellow-500">
                      Humility
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg lg:text-xl">
                      Anything can happen and the Market is almost always right; Manage for risk first!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side - Hidden on mobile and tablet */}
          <div className="relative order-2 lg:order-2 hidden xl:block">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[3/4]">
              <img
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"
                alt="Professional office environment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <h4 className="text-white font-semibold mb-1 text-base">
                    Wisdom in Action
                  </h4>
                  <p className="text-white/80 text-sm">
                    Experience-driven investment decisions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Section 2: Why Us
const WhyUsSection = () => (
  <div id="section-1" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-blue-50/80 to-slate-100/60 dark:from-slate-800 dark:via-indigo-900/30 dark:to-blue-900/30">
    <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center transform-gpu lg:scale-90 xl:scale-95 origin-center max-w-[1200px] mx-auto">
          {/* Image Side - Hidden on mobile and tablet */}
          <div className="hidden xl:flex items-center justify-center order-1 lg:order-1">
            <div className="relative w-full max-w-lg">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[3/4]">
                <img
                  src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent" />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-2 lg:order-2 xl:order-2">
            <div className="text-slate-800 dark:text-white max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8">
                <span className="text-black dark:text-slate-100">Why</span>
                <br />
                <span className="text-black dark:text-slate-100">
                  Choose Us
                </span>
              </h1>

              <blockquote className="text-lg sm:text-xl lg:text-2xl font-light italic mb-6 lg:mb-8 leading-relaxed text-yellow-500">
                "Speed is the essence of war."
                <br />
                <span className="text-base font-medium text-slate-500 dark:text-slate-400">
                  - Sun Tzu
                </span>
              </blockquote>

              <div className="space-y-4 lg:space-y-6">
                <div className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-4 lg:p-5 border border-orange-200/50 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="flex items-start space-x-4 lg:space-x-6">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-orange-100 dark:bg-orange-900/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 dark:group-hover:bg-orange-900 transition-colors">
                      <Users className="h-5 w-5 lg:h-6 lg:w-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-yellow-500">
                        Access
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                        Being a former entrepreneur brings unparalleled access as relate-ability with management teams is far superior to a typical finance professional
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-4 lg:p-5 border border-red-200/50 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="flex items-start space-x-4 lg:space-x-6">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-red-100 dark:bg-red-900/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 dark:group-hover:bg-red-900 transition-colors">
                      <Target className="h-5 w-5 lg:h-6 lg:w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-yellow-500">
                        Expertise
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                        Previous investing experience in and understanding of, a wide variety of sectors, including financials, consumer, services and industrials
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-4 lg:p-5 border border-yellow-200/50 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="flex items-start space-x-4 lg:space-x-6">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-100 dark:bg-yellow-900/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-900 transition-colors">
                      <Lightbulb className="h-5 w-5 lg:h-6 lg:w-6 text-yellow-600 dark:text-yellow-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-yellow-500">
                        Flexibility
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                        Ability to invest in microthemes and small companies where typical funds can't invest due to size constraints
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Section 3: Investment Framework
const InvestmentFrameworkSection = () => (
  <div id="section-2" className="relative min-h-screen w-full bg-gradient-to-br from-slate-50 via-indigo-50/80 to-blue-50/60 dark:from-slate-900 dark:via-indigo-900/30 dark:to-blue-900/30">
    <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto text-slate-800 dark:text-white w-full">
        {/* Header */}
        <div className="mb-8 lg:mb-12 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 text-black dark:text-slate-100">
            Investment Framework
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 items-start transform-gpu lg:scale-90 xl:scale-95 origin-center max-w-[1200px] mx-auto">
          {/* Image Side - Hidden on mobile and tablet */}
          <div className="lg:col-span-5 order-2 lg:order-1 hidden xl:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
                alt="Investment analysis"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <h4 className="text-white font-semibold mb-1 text-base">
                    Strategic Analysis
                  </h4>
                  <p className="text-white/80 text-sm">
                    Data-driven investment decisions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Framework Content */}
          <div className="lg:col-span-7 xl:col-span-7 col-span-full order-1 lg:order-2">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Uncontrollables */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-blue-200/50 dark:border-slate-700 shadow-lg">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-yellow-500 border-b-2 border-blue-300 dark:border-blue-600 pb-3">
                  Uncontrollables ("Value")
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Factory className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg sm:text-xl text-slate-800 dark:text-white mb-2">
                        Racetrack: Industry
                      </h4>
                      <ul className="text-sm sm:text-base text-slate-600 dark:text-slate-300 space-y-1">
                        <li>• Market growth and profit pool</li>
                        <li>• Tailwinds/ Disruption risk</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Building className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg sm:text-xl text-slate-800 dark:text-white mb-2">
                        Horse: Company
                      </h4>
                      <ul className="text-sm sm:text-base text-slate-600 dark:text-slate-300 space-y-1">
                        <li>• Differentiation/ Moat</li>
                        <li>• Market share</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg sm:text-xl text-slate-800 dark:text-white mb-2">
                        Jockey: Management
                      </h4>
                      <ul className="text-sm sm:text-base text-slate-600 dark:text-slate-300 space-y-1">
                        <li>• Values</li>
                        <li>• Incentives</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Controllables */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-blue-200/50 dark:border-slate-700 shadow-lg">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-yellow-500 border-b-2 border-blue-300 dark:border-blue-600 pb-3">
                  Controllable ("Price")
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg sm:text-xl text-slate-800 dark:text-white mb-3">
                        Valuations, with the context of:
                      </h4>
                      <ul className="text-sm sm:text-base text-slate-600 dark:text-slate-300 space-y-2">
                        <li>• Last reported earnings</li>
                        <li>• Forward projections: Revenue/ EBITDA/ PAT/ FCF (12-24m)</li>
                        <li>• Step-jump in Capacity addition</li>
                        <li>• Inflections due to macro such as tariffs, interest rates etc.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Quote */}
            <div className="mt-8">
              <div className="bg-yellow-600 dark:bg-yellow-800 rounded-2xl p-6 lg:p-8 text-white text-center">
                <p className="text-base sm:text-lg lg:text-xl font-semibold leading-relaxed">
                  Nothing will be perfect across all parameters....our objective is to make judgement on, and buy the best "bang for our buck"!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Section 4: Portfolio Construction
const PortfolioConstructionSection = () => (
  <div id="section-3" className="relative min-h-screen w-full bg-gradient-to-br from-blue-50 via-slate-50/80 to-indigo-50/60 dark:from-blue-900/30 dark:via-slate-900 dark:to-indigo-900/30">
    <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto text-slate-800 dark:text-white w-full">
        {/* Header */}
        <div className="mb-8 lg:mb-12 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 text-black dark:text-slate-100">
            Portfolio Construction
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start transform-gpu lg:scale-90 xl:scale-95 origin-center max-w-[1200px] mx-auto">
          {/* Image Side - Hidden on mobile and tablet */}
          <div className="lg:col-span-5 order-2 lg:order-1 hidden xl:block">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
                alt="Professional analyzing charts"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/40" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <h4 className="text-white font-semibold mb-1 text-base">
                    Strategic Portfolio
                  </h4>
                  <p className="text-white/80 text-sm">
                    Balanced investment approach
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Categories */}
          <div className="lg:col-span-7 xl:col-span-7 col-span-full order-1 lg:order-2">
            <div className="space-y-4 lg:space-y-6">
              {/* Compounders */}
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 text-base">
                  1
                </div>
                <div className="flex-1 grid gap-4 lg:grid-cols-2">
                  <div className="bg-yellow-600 text-white p-4 lg:p-5 rounded-2xl shadow-lg">
                    <h4 className="font-bold text-lg sm:text-xl lg:text-2xl mb-1">
                      Compounders (20-40%)
                    </h4>
                    <p className="text-sm sm:text-base opacity-90">
                      15-20% IRR | 2-5 years
                    </p>
                  </div>
                  <div className="bg-white/90 dark:bg-slate-800/90 p-4 lg:p-5 rounded-2xl border border-blue-200/50 dark:border-slate-700 shadow-lg">
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                      Sector leaders with strong market positioning, history of navigating downturns and established management
                    </p>
                  </div>
                </div>
              </div>

              {/* Challengers */}
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 text-base">
                  2
                </div>
                <div className="flex-1 grid gap-4 lg:grid-cols-2">
                  <div className="bg-yellow-600 text-white p-4 lg:p-5 rounded-2xl shadow-lg">
                    <h4 className="font-bold text-lg sm:text-xl lg:text-2xl mb-1">
                      Challengers (20-40%)
                    </h4>
                    <p className="text-sm sm:text-base opacity-90">
                      15-25% IRR | 2-5 years
                    </p>
                  </div>
                  <div className="bg-white/90 dark:bg-slate-800/90 p-4 lg:p-5 rounded-2xl border border-blue-200/50 dark:border-slate-700 shadow-lg">
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                      Typical #2, 3 or 4 player in the industry aspiring to upgrade business its positioning, typically at ~40-60% discount to leader
                    </p>
                  </div>
                </div>
              </div>

              {/* Turnarounds */}
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 text-base">
                  3
                </div>
                <div className="flex-1 grid gap-4 lg:grid-cols-2">
                  <div className="bg-yellow-600 text-white p-4 lg:p-5 rounded-2xl shadow-lg">
                    <h4 className="font-bold text-lg sm:text-xl lg:text-2xl mb-1">
                      Turnarounds (15-30%)
                    </h4>
                    <p className="text-sm sm:text-base opacity-90">
                      50-200% Upside | 1-2 years
                    </p>
                  </div>
                  <div className="bg-white/90 dark:bg-slate-800/90 p-4 lg:p-5 rounded-2xl border border-blue-200/50 dark:border-slate-700 shadow-lg">
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                      Significant revival of fortunes due to a catalyst such as policy change, new management, takeover or balance sheet repair
                    </p>
                  </div>
                </div>
              </div>

              {/* Special Situations */}
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 text-base">
                  4
                </div>
                <div className="flex-1 grid gap-4 lg:grid-cols-2">
                  <div className="bg-yellow-600 text-white p-4 lg:p-5 rounded-2xl shadow-lg">
                    <h4 className="font-bold text-lg sm:text-xl lg:text-2xl mb-1">
                      Special Situations (0-15%)
                    </h4>
                    <p className="text-sm sm:text-base opacity-90">
                      50-200% Upside | 3-9 months
                    </p>
                  </div>
                  <div className="bg-white/90 dark:bg-slate-800/90 p-4 lg:p-5 rounded-2xl border border-blue-200/50 dark:border-slate-700 shadow-lg">
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                      Merger/ Demerger, Spin off, Change of management, tender offer, restructuring etc. creating an investment opportunity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Section 5: Investment Process
const InvestmentProcessSection = () => (
  <div id="section-4" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-slate-50/80 to-blue-50/60 dark:from-indigo-900/30 dark:via-slate-900 dark:to-blue-900/30">
    <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto text-slate-800 dark:text-white w-full">
        {/* Header */}
        <div className="mb-8 lg:mb-12 text-center lg:text-left">
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 text-black dark:text-slate-100">
            Investment Process
          </h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 items-start transform-gpu lg:scale-85 xl:scale-90 origin-center max-w-[1200px] mx-auto">
          {/* Funnel Diagram */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="bg-yellow-600 dark:bg-yellow-600 rounded-2xl p-5 lg:p-6 text-center shadow-lg">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">200</div>
                <div className="text-base sm:text-lg font-semibold text-white/90">/Quarter</div>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              
              <div className="bg-yellow-600 dark:yellow-700 rounded-2xl p-5 lg:p-6 text-center shadow-lg mx-4">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">50</div>
                <div className="text-base sm:text-lg font-semibold text-white/90">/Quarter</div>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              
              <div className="bg-yellow-600 dark:bg-yellow-600 rounded-2xl p-5 lg:p-6 text-center shadow-lg mx-8">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">20</div>
                <div className="text-base sm:text-lg font-semibold text-white/90">/Quarter</div>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              
              <div className="bg-yellow-600 dark:bg-yellow-600 rounded-2xl p-5 lg:p-6 text-center shadow-lg mx-12 border-2 border-yellow-600">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">5</div>
                <div className="text-base sm:text-lg font-semibold text-white">/Quarter</div>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4 lg:space-y-6">
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-4 lg:p-5 border border-blue-200/50 dark:border-slate-700 shadow-lg">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 text-yellow-500 flex items-center">
                <Lightbulb className="h-5 w-5 lg:h-6 lg:w-6 mr-2" />
                Ideation
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Tracking List</li>
                  <li>• Screens</li>
                  <li>• Results Surprises</li>
                </ul>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Industry Connects</li>
                  <li>• Investor Community</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-4 lg:p-5 border border-blue-200/50 dark:border-slate-700 shadow-lg">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 text-yellow-500 flex items-center">
                <BarChart3 className="h-5 w-5 lg:h-6 lg:w-6 mr-2" />
                Research
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Financials</li>
                  <li>• Earnings calls, Interviews</li>
                  <li>• Valuation Check</li>
                </ul>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Mgmt. Meetings</li>
                  <li>• Discussion with sell-side analysts</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-4 lg:p-5 border border-blue-200/50 dark:border-slate-700 shadow-lg">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 text-yellow-500 flex items-center">
                <Users className="h-5 w-5 lg:h-6 lg:w-6 mr-2" />
                VAR / Scuttlebutt
              </h3>
              <div className="space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                <p>• Interviews with competitors, customers, suppliers, ex-employees and other stakeholders</p>
                <p>• Site / plant visits, self-use of product/ service if applicable</p>
              </div>
            </div>

            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-4 lg:p-5 border border-blue-200/50 dark:border-slate-700 shadow-lg">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 text-yellow-500 flex items-center">
                <Target className="h-5 w-5 lg:h-6 lg:w-6 mr-2" />
                Action
              </h3>
              <div className="space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                <p>• Continued mgmt. interaction</p>
                <p>• Buy/ add/ trim/ exit in the portfolio depending on relative/ absolute attractiveness</p>
              </div>
            </div>
          </div>

          {/* Highlight Box */}
          <div className="lg:col-span-3 order-3">
            <div className="bg-yellow-600 dark:bg-yellow-600 rounded-2xl p-5 lg:p-8 shadow-2xl border border-yellow-600">
              <div className="text-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 border border-yellow-500">
                  <Star className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-6 leading-tight text-white">
                  An intense research and vetting process covering
                </h4>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-white">200+</div>
                <div className="text-lg sm:text-xl font-semibold mb-6 text-white">stocks each quarter</div>
                <div className="w-full h-2 bg-yellow-800 rounded-full">
                  <div className="h-full bg-white rounded-full w-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main App Component
function App() {
  const sections = [
    { id: 'guiding-principles', component: GuidingPrinciplesSection },
    { id: 'why-us', component: WhyUsSection },
    { id: 'investment-framework', component: InvestmentFrameworkSection },
    { id: 'portfolio-construction', component: PortfolioConstructionSection },
    { id: 'investment-process', component: InvestmentProcessSection }
  ];

  const { currentSection, setCurrentSection, isMobile } = useScrollSections(sections);

  if (isMobile) {
    // Mobile layout with normal scrolling
    return (
      <div className="relative">
        <MobileNav sections={sections} currentSection={currentSection} setCurrentSection={setCurrentSection} />
        
        <div className="w-full">
          {sections.map((section, index) => {
            const SectionComponent = section.component;
            return (
              <div key={section.id} className="w-full">
                <SectionComponent />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop layout with full-screen sections
  return (
    <div className="relative">
      {/* Navigation Dots - Desktop only */}
      <div className="fixed right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSection(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
              currentSection === index 
                ? 'bg-yellow-500 border-yellow-500 scale-125' 
                : 'bg-white/50 border-white/80 hover:bg-white/80 hover:border-white'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Section Indicator - Desktop only */}
      <div className="fixed bottom-4 lg:bottom-8 left-4 lg:left-8 z-50 bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 border border-white/20">
        <span className="text-white text-base font-medium">
          {currentSection + 1} / {sections.length}
        </span>
      </div>

      {/* Sections */}
      <div 
        className="transition-transform duration-700 ease-in-out"
        style={{ 
          transform: `translateY(-${currentSection * 100}vh)`,
          height: `${sections.length * 100}vh`
        }}
      >
        {sections.map((section, index) => {
          const SectionComponent = section.component;
          return (
            <div key={section.id} className="h-screen w-full">
              <SectionComponent />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;