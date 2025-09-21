"use client"

import React, { useState, useEffect } from 'react';
import { 
  Quote, Eye, Brain, Shield, Users, Target, Lightbulb, 
  BarChart3, Star, Building, Factory, TrendingUp, ArrowDown 
} from 'lucide-react';

// Custom hook for scroll management
const useScrollSections = (sections: any[]) => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
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
  }, [currentSection, sections.length]);

  return { currentSection, setCurrentSection };
};

// Section 1: Guiding Principles
const GuidingPrinciplesSection = () => (
  <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/80 to-indigo-100/60 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
    <div className="relative z-10 flex h-full items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="text-slate-800 dark:text-white order-1 lg:order-1">
            {/* Header */}
            <div className="mb-6 lg:mb-12">
              
              <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-8 leading-tight">
                <span className="text-slate-800 dark:text-white">Guiding</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Principles
                </span>
              </h1>
              
              <blockquote className="text-base sm:text-lg lg:text-2xl font-light italic mb-4 lg:mb-6 leading-relaxed text-slate-700 dark:text-slate-300">
                "The young men know the rules.<br />
                The old men know the exceptions."
              </blockquote>
            </div>

            {/* Principles */}
            <div className="space-y-3 lg:space-y-6">
              <div className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-blue-200/50 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 dark:group-hover:bg-blue-900 transition-colors">
                    <Eye className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 text-blue-700 dark:text-blue-300">
                      Objectivity
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base lg:text-base">
                      Most things are not as bad or as good as they may instinctively seem
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-emerald-200/50 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900 transition-colors">
                    <Brain className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 text-emerald-700 dark:text-emerald-300">
                      Learn-ability
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base lg:text-base">
                      If you keep your eyes and ears open....Mr. Market will show you all you need to know
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-purple-200/50 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 dark:group-hover:bg-purple-900 transition-colors">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 text-purple-700 dark:text-purple-300">
                      Humility
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base lg:text-base">
                      Anything can happen and the Market is almost always right; Manage for risk first!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side - Hidden on mobile */}
          <div className="relative order-2 lg:order-2 hidden lg:block">
            <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl aspect-[4/3] lg:aspect-[3/4]">
              <img
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"
                alt="Professional office environment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 lg:p-4 border border-white/20">
                  <h4 className="text-white font-semibold mb-1 text-sm lg:text-base">
                    Wisdom in Action
                  </h4>
                  <p className="text-white/80 text-xs lg:text-sm">
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
  <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-orange-50 via-red-50/80 to-yellow-50/60 dark:from-slate-800 dark:via-orange-900/20 dark:to-red-900/20">
    <div className="relative z-10 h-full">
      <div className="grid lg:grid-cols-2 h-full">
        {/* Image Side - Hidden on mobile */}
        <div className="hidden lg:flex items-center justify-center p-4 sm:p-6 lg:p-12">
          <div className="relative w-full max-w-lg">
            <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl aspect-square lg:aspect-[3/4]">
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
        <div className="flex items-center justify-center p-4 sm:p-6 lg:p-12 lg:col-span-1 col-span-full">
          <div className="text-slate-800 dark:text-white max-w-2xl w-full">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-8">
              <span className="text-slate-800 dark:text-white">Why</span>
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent dark:from-orange-400 dark:to-red-400">
                Choose Us
              </span>
            </h1>

            <blockquote className="text-lg sm:text-xl lg:text-2xl font-light italic mb-6 lg:mb-8 leading-relaxed text-slate-700 dark:text-slate-300">
              "Speed is the essence of war."
              <br />
              <span className="text-sm lg:text-base font-medium text-slate-500 dark:text-slate-400">
                - Sun Tzu
              </span>
            </blockquote>

            <div className="space-y-3 lg:space-y-6">
              <div className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-orange-200/50 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-orange-100 dark:bg-orange-900/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 dark:group-hover:bg-orange-900 transition-colors">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 text-orange-700 dark:text-orange-300">
                      Access
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base lg:text-base">
                      Being a former entrepreneur brings unparalleled access as relate-ability with management teams is far superior to a typical finance professional
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-red-200/50 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-red-100 dark:bg-red-900/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 dark:group-hover:bg-red-900 transition-colors">
                    <Target className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 text-red-700 dark:text-red-300">
                      Expertise
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base lg:text-base">
                      Previous investing experience in and understanding of, a wide variety of sectors, including financials, consumer, services and industrials
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-yellow-200/50 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-yellow-100 dark:bg-yellow-900/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-900 transition-colors">
                    <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-yellow-600 dark:text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 text-yellow-700 dark:text-yellow-400">
                      Flexibility
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base lg:text-base">
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
);

// Section 3: Investment Framework
const InvestmentFrameworkSection = () => (
  <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-teal-50 via-cyan-50/80 to-blue-50/60 dark:from-teal-900/30 dark:via-cyan-900/30 dark:to-blue-900/30 dark:bg-slate-900">
    <div className="relative z-10 flex h-full items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto text-slate-800 dark:text-white w-full">
        {/* Header */}
        <div className="mb-4 lg:mb-12 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-8 text-slate-800 dark:text-white">
            Investment Framework
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-center">
          {/* Image Side - Hidden on mobile */}
          <div className="lg:col-span-5 order-2 lg:order-1 hidden lg:block">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
                alt="Investment analysis"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 lg:p-4 border border-white/20">
                  <h4 className="text-white font-semibold mb-1 text-sm lg:text-base">
                    Strategic Analysis
                  </h4>
                  <p className="text-white/80 text-xs lg:text-sm">
                    Data-driven investment decisions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Framework Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 col-span-full">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
              {/* Uncontrollables */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-teal-200/50 dark:border-slate-700 shadow-lg">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 lg:mb-6 text-teal-700 dark:text-teal-300 border-b-2 border-teal-300 dark:border-teal-600 pb-2">
                  Uncontrollables ("Value")
                </h3>

                <div className="space-y-3 lg:space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Factory className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-slate-800 dark:text-white">
                        Racetrack: Industry
                      </h4>
                      <ul className="text-sm text-slate-600 dark:text-slate-300 mt-1 space-y-1">
                        <li>• Market growth and profit pool</li>
                        <li>• Tailwinds/ Disruption risk</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Building className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-slate-800 dark:text-white">
                        Horse: Company
                      </h4>
                      <ul className="text-sm text-slate-600 dark:text-slate-300 mt-1 space-y-1">
                        <li>• Differentiation/ Moat</li>
                        <li>• Market share</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-slate-800 dark:text-white">
                        Jockey: Management
                      </h4>
                      <ul className="text-sm text-slate-600 dark:text-slate-300 mt-1 space-y-1">
                        <li>• Values</li>
                        <li>• Incentives</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Controllables */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-teal-200/50 dark:border-slate-700 shadow-lg">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 lg:mb-6 text-teal-700 dark:text-teal-300 border-b-2 border-teal-300 dark:border-teal-600 pb-2">
                  Controllable ("Price")
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-slate-800 dark:text-white mb-2">
                        Valuations, with the context of:
                      </h4>
                      <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
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
            <div className="mt-4 lg:mt-8">
              <div className="bg-teal-700 dark:bg-teal-800 rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 text-white text-center">
                <p className="text-sm sm:text-base lg:text-xl font-semibold leading-relaxed">
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
  <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50/80 to-teal-50/60 dark:from-emerald-900/30 dark:via-green-900/30 dark:to-teal-900/30 dark:bg-slate-900">
    <div className="relative z-10 flex h-full items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto text-slate-800 dark:text-white w-full">
        {/* Header */}
        <div className="mb-4 lg:mb-12 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 lg:mb-8 text-slate-800 dark:text-white">
            Portfolio Construction
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-center">
          {/* Image Side - Hidden on mobile */}
          <div className="lg:col-span-5 order-2 lg:order-1 hidden lg:block">
            <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
                alt="Professional analyzing charts"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/40" />
              <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 lg:p-4 border border-white/20">
                  <h4 className="text-white font-semibold mb-1 text-sm lg:text-base">
                    Strategic Portfolio
                  </h4>
                  <p className="text-white/80 text-xs lg:text-sm">
                    Balanced investment approach
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Categories */}
          <div className="lg:col-span-7 order-1 lg:order-2 col-span-full">
            <div className="space-y-3 lg:space-y-6">
              {/* Compounders */}
              <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 text-sm">
                  1
                </div>
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-emerald-600 text-white p-3 sm:p-4 lg:p-6 rounded-xl shadow-lg">
                    <h4 className="font-bold text-base sm:text-lg lg:text-xl mb-1 sm:mb-2">
                      Compounders (20-40%)
                    </h4>
                    <p className="text-xs sm:text-sm opacity-90">
                      15-20% IRR | 2-5 years
                    </p>
                  </div>
                  <div className="bg-white/90 dark:bg-slate-800/90 p-3 sm:p-4 lg:p-6 rounded-xl border border-emerald-200/50 dark:border-slate-700 shadow-lg">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      Sector leaders with strong market positioning, history of navigating downturns and established management
                    </p>
                  </div>
                </div>
              </div>

              {/* Challengers */}
              <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 text-sm">
                  2
                </div>
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-emerald-600 text-white p-3 sm:p-4 lg:p-6 rounded-xl shadow-lg">
                    <h4 className="font-bold text-base sm:text-lg lg:text-xl mb-1 sm:mb-2">
                      Challengers (20-40%)
                    </h4>
                    <p className="text-xs sm:text-sm opacity-90">
                      15-25% IRR | 2-5 years
                    </p>
                  </div>
                  <div className="bg-white/90 dark:bg-slate-800/90 p-3 sm:p-4 lg:p-6 rounded-xl border border-emerald-200/50 dark:border-slate-700 shadow-lg">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      Typical #2, 3 or 4 player in the industry aspiring to upgrade business its positioning, typically at ~40-60% discount to leader
                    </p>
                  </div>
                </div>
              </div>

              {/* Turnarounds */}
              <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 text-sm">
                  3
                </div>
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-emerald-600 text-white p-3 sm:p-4 lg:p-6 rounded-xl shadow-lg">
                    <h4 className="font-bold text-base sm:text-lg lg:text-xl mb-1 sm:mb-2">
                      Turnarounds (15-30%)
                    </h4>
                    <p className="text-xs sm:text-sm opacity-90">
                      50-200% Upside | 1-2 years
                    </p>
                  </div>
                  <div className="bg-white/90 dark:bg-slate-800/90 p-3 sm:p-4 lg:p-6 rounded-xl border border-emerald-200/50 dark:border-slate-700 shadow-lg">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      Significant revival of fortunes due to a catalyst such as policy change, new management, takeover or balance sheet repair
                    </p>
                  </div>
                </div>
              </div>

              {/* Special Situations */}
              <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 text-sm">
                  4
                </div>
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-emerald-600 text-white p-3 sm:p-4 lg:p-6 rounded-xl shadow-lg">
                    <h4 className="font-bold text-base sm:text-lg lg:text-xl mb-1 sm:mb-2">
                      Special Situations (0-15%)
                    </h4>
                    <p className="text-xs sm:text-sm opacity-90">
                      50-200% Upside | 3-9 months
                    </p>
                  </div>
                  <div className="bg-white/90 dark:bg-slate-800/90 p-3 sm:p-4 lg:p-6 rounded-xl border border-emerald-200/50 dark:border-slate-700 shadow-lg">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
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
  <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50/80 to-orange-50/60 dark:from-amber-900/30 dark:via-yellow-900/30 dark:to-orange-900/30 dark:bg-slate-900">
    <div className="relative z-10 flex h-full items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto text-slate-800 dark:text-white w-full">
        {/* Header */}
        <div className="mb-4 lg:mb-12 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 lg:mb-8 text-slate-800 dark:text-white">
            Investment Process
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-start">
          {/* Funnel Diagram */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="space-y-2 sm:space-y-3">
              <div className="bg-gradient-to-r from-amber-200 to-yellow-300 dark:from-amber-600 dark:to-yellow-600 rounded-xl p-3 sm:p-4 lg:p-6 text-center shadow-lg">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 dark:text-white">200</div>
                <div className="text-xs sm:text-sm lg:text-base font-semibold text-slate-700 dark:text-white/90">/Quarter</div>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="h-4 w-4 sm:h-6 sm:w-6 text-amber-600 dark:text-amber-400" />
              </div>
              
              <div className="bg-gradient-to-r from-amber-300 to-yellow-400 dark:from-amber-700 dark:to-yellow-700 rounded-xl p-3 sm:p-4 lg:p-6 text-center shadow-lg mx-2 sm:mx-4">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 dark:text-white">50</div>
                <div className="text-xs sm:text-sm lg:text-base font-semibold text-slate-700 dark:text-white/90">/Quarter</div>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="h-4 w-4 sm:h-6 sm:w-6 text-amber-600 dark:text-amber-400" />
              </div>
              
              <div className="bg-gradient-to-r from-amber-400 to-yellow-500 dark:from-amber-800 dark:to-yellow-800 rounded-xl p-3 sm:p-4 lg:p-6 text-center shadow-lg mx-4 sm:mx-8">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 dark:text-white">20</div>
                <div className="text-xs sm:text-sm lg:text-base font-semibold text-slate-700 dark:text-white/90">/Quarter</div>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="h-4 w-4 sm:h-6 sm:w-6 text-amber-600 dark:text-amber-400" />
              </div>
              
              <div className="bg-amber-700 dark:bg-amber-800 rounded-xl p-3 sm:p-4 lg:p-6 text-center shadow-lg mx-6 sm:mx-12 border-2 border-amber-600">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">5</div>
                <div className="text-xs sm:text-sm lg:text-base font-semibold text-white">/Quarter</div>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-3 lg:space-y-6">
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-amber-200/50 dark:border-slate-700 shadow-lg">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 lg:mb-4 text-amber-700 dark:text-amber-300 flex items-center">
                <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 mr-2" />
                Ideation
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4 text-xs sm:text-sm">
                <ul className="space-y-1 lg:space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Tracking List</li>
                  <li>• Screens</li>
                  <li>• Results Surprises</li>
                </ul>
                <ul className="space-y-1 lg:space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Industry Connects</li>
                  <li>• Investor Community</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-amber-200/50 dark:border-slate-700 shadow-lg">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 lg:mb-4 text-amber-700 dark:text-amber-300 flex items-center">
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 mr-2" />
                Research
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4 text-xs sm:text-sm">
                <ul className="space-y-1 lg:space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Financials</li>
                  <li>• Earnings calls, Interviews</li>
                  <li>• Valuation Check</li>
                </ul>
                <ul className="space-y-1 lg:space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Mgmt. Meetings</li>
                  <li>• Discussion with sell-side analysts</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-amber-200/50 dark:border-slate-700 shadow-lg">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 lg:mb-4 text-amber-700 dark:text-amber-300 flex items-center">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 mr-2" />
                VAR / Scuttlebutt
              </h3>
              <div className="space-y-2 lg:space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <p>• Interviews with competitors, customers, suppliers, ex-employees and other stakeholders</p>
                <p>• Site / plant visits, self-use of product/ service if applicable</p>
              </div>
            </div>

            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-amber-200/50 dark:border-slate-700 shadow-lg">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 lg:mb-4 text-amber-700 dark:text-amber-300 flex items-center">
                <Target className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 mr-2" />
                Action
              </h3>
              <div className="space-y-2 lg:space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <p>• Continued mgmt. interaction</p>
                <p>• Buy/ add/ trim/ exit in the portfolio depending on relative/ absolute attractiveness</p>
              </div>
            </div>
          </div>

          {/* Highlight Box */}
          <div className="lg:col-span-3 order-3">
            <div className="bg-amber-700 dark:bg-amber-800 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-amber-600">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 border border-amber-500">
                  <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-3 lg:mb-6 leading-tight text-white">
                  An intense research and vetting process covering
                </h4>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-white">200+</div>
                <div className="text-sm sm:text-lg font-semibold mb-4 text-white">stocks each quarter</div>
                <div className="w-full h-2 bg-amber-800 rounded-full">
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

  const { currentSection, setCurrentSection } = useScrollSections(sections);

  return (
    <div className="relative">
      {/* Navigation Dots */}
      <div className="fixed right-2 sm:right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-2 sm:space-y-3">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSection(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
              currentSection === index 
                ? 'bg-blue-600 scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Section Indicator */}
      <div className="fixed bottom-2 sm:bottom-4 lg:bottom-8 left-2 sm:left-4 lg:left-8 z-50 bg-white/10 backdrop-blur-md rounded-lg px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-3 border border-white/20">
        <span className="text-white text-xs sm:text-sm lg:text-base font-medium">
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