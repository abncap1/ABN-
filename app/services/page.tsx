"use client"

import React, { useState, useEffect } from 'react';
import {
  Eye, Brain, Shield, Users, Target, Lightbulb,
  BarChart3, Star, Building, Factory, ArrowDown, Menu, X
} from 'lucide-react';

const MobileNav = ({ sections, setCurrentSection }: any) => {
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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Toggle button */}
      <button
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((v) => !v)}
        className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/80 dark:bg-white/10 backdrop-blur-md shadow-md border border-white/20 text-white hover:scale-105 active:scale-95 transition"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <button
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-[1px] lg:hidden"
        />
      )}

      {isOpen && (
        <div className="absolute top-14 right-0 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 min-w-56 overflow-hidden">
          {sectionNames.map((name, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-200 border-b border-slate-100 dark:border-slate-700 last:border-b-0"
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const GuidingPrinciplesSection = () => (
  <div id="section-0" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20 pt-20 sm:pt-22">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 min-h-[calc(100dvh-80px)] lg:min-h-screen flex items-center">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-slate-800 dark:text-white space-y-6 lg:space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight font-sans">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                  Guiding
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Principles
                </span>
              </h1>

              <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-light italic text-amber-600 dark:text-amber-400 leading-relaxed font-sans">
                "The young men know the rules.<br />
                The old men know the exceptions."
              </blockquote>
            </div>

            <div className="space-y-4">
              {[
                { icon: Eye, title: 'Objectivity', color: 'blue', desc: 'Most things are not as bad or as good as they may instinctively seem' },
                { icon: Brain, title: 'Learn-ability', color: 'indigo', desc: 'If you keep your eyes and ears open....Mr. Market will show you all you need to know' },
                { icon: Shield, title: 'Humility', color: 'slate', desc: 'Anything can happen and the Market is almost always right; Manage for risk first!' }
              ].map((item, idx) => (
                <div key={idx} className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1.5 bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent font-sans">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl aspect-[3/4] transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"
                alt="Professional office environment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-5 border border-white/20">
                  <h4 className="text-white font-bold mb-1.5 text-base font-sans">
                    Wisdom in Action
                  </h4>
                  <p className="text-white/90 text-sm font-sans">
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

const WhyUsSection = () => (
  <div id="section-1" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20 pt-20 sm:pt-22">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 min-h-[calc(100dvh-80px)] lg:min-h-screen flex items-center">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl aspect-[3/4] transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight font-sans">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                  Why
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Choose Us
                </span>
              </h1>

              <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-light italic text-amber-600 dark:text-amber-400 leading-relaxed mb-2 font-sans">
                "Speed is the essence of war."
              </blockquote>
              <p className="text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-sans">
                - Sun Tzu
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Users, title: 'Access', color: 'orange', desc: 'Being a former entrepreneur brings unparalleled access as relate-ability with management teams is far superior to a typical finance professional' },
                { icon: Target, title: 'Expertise', color: 'red', desc: 'Previous investing experience in and understanding of, a wide variety of sectors, including financials, consumer, services and industrials' },
                { icon: Lightbulb, title: 'Flexibility', color: 'amber', desc: 'Ability to invest in microthemes and small companies where typical funds can\'t invest due to size constraints' }
              ].map((item, idx) => (
                <div key={idx} className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/50 dark:to-orange-800/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1.5 bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent font-sans">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const InvestmentFrameworkSection = () => (
  <div id="section-2" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/50 to-slate-50/30 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20 pt-20 sm:pt-22">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 min-h-[calc(100dvh-80px)] lg:min-h-screen flex items-center">
      <div className="w-full max-w-6xl mx-auto">
        <div className="mb-8 lg:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 dark:from-slate-100 dark:to-blue-400 bg-clip-text text-transparent font-sans">
            Investment Framework
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-2 grid gap-5 sm:gap-6">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-5 sm:p-6 lg:p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-5 lg:mb-6 bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent border-b-2 border-blue-300 dark:border-blue-600 pb-3 font-sans">
                Uncontrollables ("Value")
              </h3>

              <div className="space-y-4 lg:space-y-5">
                {[
                  { icon: Factory, title: 'Racetrack: Industry', items: ['Market growth and profit pool', 'Tailwinds/ Disruption risk'] },
                  { icon: Building, title: 'Horse: Company', items: ['Differentiation/ Moat', 'Market share'] },
                  { icon: Users, title: 'Jockey: Management', items: ['Values', 'Incentives'] }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-base sm:text-lg text-slate-800 dark:text-white mb-1.5 font-sans">
                        {item.title}
                      </h4>
                      <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1 font-sans">
                        {item.items.map((text, i) => <li key={i}>" {text}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-5 sm:p-6 lg:p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-5 lg:mb-6 bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent border-b-2 border-blue-300 dark:border-blue-600 pb-3 font-sans">
                Controllable ("Price")
              </h3>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-base sm:text-lg text-slate-800 dark:text-white mb-2 font-sans">
                    Valuations, with the context of:
                  </h4>
                  <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 font-sans">
                    <li>" Last reported earnings</li>
                    <li>" Forward projections: Revenue/ EBITDA/ PAT/ FCF (12-24m)</li>
                    <li>" Step-jump in Capacity addition</li>
                    <li>" Inflections due to macro such as tariffs, interest rates etc.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 hidden lg:block">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl aspect-square transform hover:scale-105 transition-transform duration-500 sticky top-8">
              <img
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
                alt="Investment analysis"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                  <h4 className="text-white font-bold mb-1.5 text-base font-sans">
                    Strategic Analysis
                  </h4>
                  <p className="text-white/90 text-sm font-sans">
                    Data-driven investment decisions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 lg:mt-8">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl lg:rounded-2xl p-5 sm:p-6 lg:p-8 text-white text-center shadow-xl hover:shadow-amber-500/50 transition-all duration-300">
            <p className="text-sm sm:text-base lg:text-lg font-semibold leading-relaxed font-sans">
              Nothing will be perfect across all parameters....our objective is to make judgement on, and buy the best "bang for our buck"!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PortfolioConstructionSection = () => (
  <div id="section-3" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-slate-50/50 to-blue-50/30 dark:from-slate-900 dark:via-indigo-900/20 dark:to-blue-900/20 pt-20 sm:pt-22">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 min-h-[calc(100dvh-80px)] lg:min-h-screen flex items-center">
      <div className="w-full max-w-6xl mx-auto">
        <div className="mb-8 lg:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 to-indigo-600 dark:from-slate-100 dark:to-indigo-400 bg-clip-text text-transparent font-sans">
            Portfolio Construction
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-2 space-y-4 lg:space-y-5">
            {[
              { num: 1, title: 'Compounders', percent: '20-40%', irr: '15-20% IRR | 2-5 years', desc: 'Sector leaders with strong market positioning, history of navigating downturns and established management' },
              { num: 2, title: 'Challengers', percent: '20-40%', irr: '15-25% IRR | 2-5 years', desc: 'Typical #2, 3 or 4 player in the industry aspiring to upgrade business its positioning, typically at ~40-60% discount to leader' },
              { num: 3, title: 'Turnarounds', percent: '15-30%', irr: '50-200% Upside | 1-2 years', desc: 'Significant revival of fortunes due to a catalyst such as policy change, new management, takeover or balance sheet repair' },
              { num: 4, title: 'Special Situations', percent: '0-15%', irr: '50-200% Upside | 3-9 months', desc: 'Merger/ Demerger, Spin off, Change of management, tender offer, restructuring etc. creating an investment opportunity' }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 text-base sm:text-lg shadow-md">
                      {item.num}
                    </div>
                    <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white px-4 py-2.5 sm:py-3 rounded-lg shadow-md flex-1">
                      <h4 className="font-bold text-base sm:text-lg lg:text-xl font-sans">
                        {item.title} ({item.percent})
                      </h4>
                      <p className="text-xs sm:text-sm opacity-95 font-sans">
                        {item.irr}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-11 sm:pl-12 font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1 hidden lg:block">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl aspect-square transform hover:scale-105 transition-transform duration-500 sticky top-8">
              <img
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
                alt="Portfolio analysis"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                  <h4 className="text-white font-bold mb-1.5 text-base font-sans">
                    Strategic Portfolio
                  </h4>
                  <p className="text-white/90 text-sm font-sans">
                    Balanced investment approach
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

const InvestmentProcessSection = () => (
  <div id="section-4" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20 pt-20 sm:pt-22">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 min-h-[calc(100dvh-80px)] lg:min-h-screen flex items-center">
      <div className="w-full max-w-6xl mx-auto">
        <div className="mb-8 lg:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 dark:from-slate-100 dark:to-blue-400 bg-clip-text text-transparent font-sans">
            Investment Process
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="flex lg:col-span-3 order-2 lg:order-1 min-w-0 max-w-full flex-shrink">
            <div className="flex justify-center flex-row lg:flex-col space-x-1.5 lg:space-x-0 lg:space-y-3 overflow-x-auto pb-1.5 lg:pb-0 w-full max-w-full">
              {[200, 50, 20, 5].map((num, idx) => (
                <React.Fragment key={idx}>
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-2.5 sm:p-3.5 text-center shadow-lg min-w-[68px] sm:min-w-[96px] lg:min-w-0 hover:scale-105 transition-transform duration-300">
                    <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-white font-sans">{num}</div>
                    <div className="text-[10px] sm:text-xs font-semibold text-white/95 font-sans">/Quarter</div>
                  </div>
                  {idx < 3 && (
                    <div className="flex justify-center items-center">
                      <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600 dark:text-amber-400 rotate-90 lg:rotate-0" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="justify-center lg:col-span-6 order-1 lg:order-2 space-y-4 lg:space-y-5 lg:w-[42vw] md:w-[74vw] w-[92vw]">
            {[
              { icon: Lightbulb, title: 'Ideation', items: [['Tracking List', 'Screens', 'Results Surprises'], ['Industry Connects', 'Investor Community']] },
              { icon: BarChart3, title: 'Research', items: [['Financials', 'Earnings calls, Interviews', 'Valuation Check'], ['Mgmt. Meetings', 'Discussion with sell-side analysts']] },
              { icon: Users, title: 'VAR / Scuttlebutt', items: [['Interviews with competitors, customers, suppliers, ex-employees and other stakeholders', 'Site / plant visits, self-use of product/ service if applicable']] },
              { icon: Target, title: 'Action', items: [['Continued mgmt. interaction', 'Buy/ add/ trim/ exit in the portfolio depending on relative/ absolute attractiveness']] }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-base sm:text-lg lg:text-2xl font-bold mb-3 lg:mb-4 bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent flex items-center font-sans">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6 mr-2.5 text-amber-600" />
                  {item.title}
                </h3>
                <div className="grid sm:grid-cols-2 gap-2.5 text-[13px] sm:text-sm">
                  {item.items.map((list, i) => (
                    <ul key={i} className="space-y-1.5 text-slate-600 dark:text-slate-300 font-sans">
                      {list.map((text, j) => <li key={j}>" {text}</li>)}
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl lg:rounded-2xl p-6 sm:p-7 lg:p-8 shadow-xl hover:shadow-amber-500/50 transition-all duration-300 lg:sticky lg:top-8">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-18 sm:h-18 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-5 backdrop-blur-sm">
                  <Star className="h-8 w-8 sm:h-9 sm:w-9 text-white" />
                </div>
                <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-4 lg:mb-5 leading-tight text-white font-sans">
                  An intense research and vetting process covering
                </h4>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-white font-sans">200+</div>
                <div className="text-base sm:text-lg lg:text-xl font-semibold mb-5 text-white font-sans">stocks each quarter</div>
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
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

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id^="section-"]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const element = section as HTMLElement;
        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'guiding-principles', component: GuidingPrinciplesSection },
    { id: 'why-us', component: WhyUsSection },
    { id: 'investment-framework', component: InvestmentFrameworkSection },
    { id: 'portfolio-construction', component: PortfolioConstructionSection },
    { id: 'investment-process', component: InvestmentProcessSection }
  ];

  return (
    <div className="relative scroll-smooth overflow-x-hidden max-w-[100vw]">
      <MobileNav sections={sections} setCurrentSection={setCurrentSection} />

      <div className="hidden md:block fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 space-y-2.5">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const element = document.getElementById(`section-${index}`);
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSection === index
                ? 'bg-amber-500 scale-150 shadow-lg shadow-amber-500/50'
                : 'bg-slate-300 dark:bg-slate-600 hover:bg-amber-400 hover:scale-125'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      <div className="w-full">
        {sections.map((section) => {
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

export default App;
