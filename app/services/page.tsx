"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FullScreenScroll } from '@/components/ui/full-screen-scroll';
import { 
  Quote, 
  Eye, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  Target, 
  Lightbulb,
  Scale,
  DollarSign,
  Building,
  TrendingUp,
  BarChart3,
  Star,
  Briefcase,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const sections = [
  // Section 1: Guiding Principles
  {
    id: 'guiding-principles',
    title: 'Guiding Principles',
    content: (
      <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Side - Content */}
              <div className="text-slate-800 dark:text-white">
                {/* Main Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="mb-12"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-8 shadow-xl">
                    <Quote className="h-10 w-10 text-white" />
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                    <span className="text-slate-800 dark:text-white/90">Guiding</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                      Principles
                    </span>
                  </h1>
                  
                  <blockquote className="text-xl md:text-2xl font-light italic mb-6 leading-relaxed">
                    <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent dark:from-blue-300 dark:to-purple-300">
                      "The young men know the rules.
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent dark:from-purple-300 dark:to-blue-300">
                      The old men know the exceptions."
                    </span>
                  </blockquote>
                </motion.div>

                {/* Principles Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="space-y-6"
                >
                  <motion.div 
                    className="group bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-blue-200/50 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-500 shadow-lg"
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-500/30 transition-colors duration-300">
                        <Eye className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-300">Objectivity</h3>
                        <p className="text-slate-600 dark:text-white/80 leading-relaxed text-sm">
                          Most things are not as bad or as good as they may instinctively seem
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="group bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-green-200/50 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-500 shadow-lg"
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-green-500/30 transition-colors duration-300">
                        <Brain className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-300">Learn-ability</h3>
                        <p className="text-slate-600 dark:text-white/80 leading-relaxed text-sm">
                          When the student is ready, the teacher (Mr. Market) will appear
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="group bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-purple-200/50 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-500 shadow-lg"
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-purple-500/30 transition-colors duration-300">
                        <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-purple-700 dark:text-purple-300">Humility</h3>
                        <p className="text-slate-600 dark:text-white/80 leading-relaxed text-sm">
                          Anything can happen…and Mr. Market is rarely wrong
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"
                    alt="Professional office environment"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                      <h4 className="text-white font-semibold mb-2">Wisdom in Action</h4>
                      <p className="text-white/80 text-sm">Experience-driven investment decisions</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Section 2: Why Us
  {
    id: 'why-us',
    title: 'Why Us',
    content: (
      <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 dark:from-slate-800 dark:via-neutral-800 dark:to-neutral-900">
        {/* Content */}
        <div className="relative z-10 h-full">
          <div className="grid lg:grid-cols-2 h-full">
            
            {/* Left Side - Image */}
            <div className="flex items-center justify-center p-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg"
                    alt="Team collaboration"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent" />
                  <div className="absolute top-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                      <h4 className="text-white font-semibold mb-2">Speed & Agility</h4>
                      <p className="text-white/80 text-sm">Quick decision-making advantage</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Content */}
            <div className="flex items-center justify-center p-12">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-slate-800 dark:text-white max-w-lg"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-8 shadow-xl">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-8">
                  <span className="text-slate-800 dark:text-white/90">Why</span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent dark:from-orange-300 dark:to-red-300">
                    Choose Us
                  </span>
                </h1>
                
                <blockquote className="text-xl md:text-2xl font-light italic mb-8 leading-relaxed">
                  <span className="bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent dark:from-orange-200 dark:to-red-200">
                    "Speed is the essence of war."
                  </span>
                  <br />
                  <span className="text-base font-medium text-slate-600 dark:text-white/80">- Sun Tzu</span>
                </blockquote>

                <div className="space-y-6">
                  <motion.div 
                    className="group bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-orange-200/50 dark:border-white/20 hover:bg-white/90 dark:hover:bg-white/15 transition-all duration-500 shadow-lg"
                    whileHover={{ x: 15, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-orange-500/30 transition-colors duration-300">
                        <Users className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-orange-700 dark:text-orange-300">Access</h3>
                        <p className="text-slate-600 dark:text-white/80 leading-relaxed text-sm">
                          Being former entrepreneurs gives us unparalleled access and insights across industries
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="group bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-red-200/50 dark:border-white/20 hover:bg-white/90 dark:hover:bg-white/15 transition-all duration-500 shadow-lg"
                    whileHover={{ x: 15, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-red-500/30 transition-colors duration-300">
                        <Target className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-red-700 dark:text-red-300">Expertise</h3>
                        <p className="text-slate-600 dark:text-white/80 leading-relaxed text-sm">
                          Deep investment experience across niche sectors (LPG terminals, DI pipes, lead recycling, HT power cables)
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="group bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-yellow-200/50 dark:border-white/20 hover:bg-white/90 dark:hover:bg-white/15 transition-all duration-500 shadow-lg"
                    whileHover={{ x: 15, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-yellow-500/30 transition-colors duration-300">
                        <Lightbulb className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-yellow-700 dark:text-yellow-300">Flexibility</h3>
                        <p className="text-slate-600 dark:text-white/80 leading-relaxed text-sm">
                          Our compact size allows investment freedom without restrictions on market capitalization, ADTV, or sizing
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Section 3: Investment Framework
  {
    id: 'investment-framework',
    title: 'Investment Framework',
    content: (
      <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900">
        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-8">
          <div className="max-w-7xl mx-auto text-slate-800 dark:text-white">
            
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-center mb-16"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <Scale className="h-10 w-10 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-slate-800 dark:text-white/90">Investment</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-300 dark:to-purple-300">
                  Framework
                </span>
              </h1>
              
              <blockquote className="text-xl md:text-2xl font-light italic mb-4 leading-relaxed">
                <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent dark:from-blue-200 dark:to-purple-200">
                  "Price is what you pay. Value is what you get."
                </span>
                <br />
                <span className="text-base font-medium text-slate-600 dark:text-white/80">- Warren E. Buffett</span>
              </blockquote>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-12 items-center">
              {/* Uncontrollables */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <motion.div 
                  className="group bg-red-50/80 dark:bg-red-500/10 backdrop-blur-xl rounded-2xl p-8 border border-red-200/50 dark:border-red-400/30 hover:bg-red-50/90 dark:hover:bg-red-500/15 transition-all duration-500 shadow-lg"
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-8 text-red-700 dark:text-red-300 text-center">
                    Uncontrollables ("Value")
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mr-4">
                        <Building className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 dark:text-red-300">Racetrack</h4>
                        <p className="text-slate-600 dark:text-white/80 text-sm">Industry</p>
                      </div>
                    </div>
                    <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mr-4">
                        <TrendingUp className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 dark:text-red-300">Horse</h4>
                        <p className="text-slate-600 dark:text-white/80 text-sm">Company</p>
                      </div>
                    </div>
                    <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mr-4">
                        <Users className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 dark:text-red-300">Jockey</h4>
                        <p className="text-slate-600 dark:text-white/80 text-sm">Management Team</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Center - Image with Scale */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex flex-col items-center"
              >
                <div className="relative mb-8">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                    alt="Investment analysis"
                    className="w-64 h-64 object-cover rounded-full shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-full" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                      <p className="text-white text-xs text-center font-medium">Balanced Analysis</p>
                    </div>
                  </div>
                </div>
                
                <motion.div
                  className="relative"
                  animate={{ rotate: [-3, 3, -3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Scale className="h-16 w-16 text-blue-600 dark:text-blue-400" />
                </motion.div>
              </motion.div>

              {/* Controllables */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <motion.div 
                  className="group bg-green-50/80 dark:bg-green-500/10 backdrop-blur-xl rounded-2xl p-8 border border-green-200/50 dark:border-green-400/30 hover:bg-green-50/90 dark:hover:bg-green-500/15 transition-all duration-500 shadow-lg"
                  whileHover={{ scale: 1.02, rotateY: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-8 text-green-700 dark:text-green-300 text-center">
                    Controllables ("Price")
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                        <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300">Odds</h4>
                        <p className="text-slate-600 dark:text-white/80 text-sm">Valuation / Entry Price</p>
                      </div>
                    </div>
                    <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                        <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300">Position Sizing</h4>
                        <p className="text-slate-600 dark:text-white/80 text-sm">Risk Management</p>
                      </div>
                    </div>
                    <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                        <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300">Timing</h4>
                        <p className="text-slate-600 dark:text-white/80 text-sm">Entry & Exit Strategy</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Section 4: Portfolio Construction
  {
    id: 'portfolio-construction',
    title: 'Portfolio Construction',
    content: (
      <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 dark:from-emerald-900 dark:via-teal-900 dark:to-green-900">
        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-8">
          <div className="max-w-7xl mx-auto text-slate-800 dark:text-white">
            
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-center mb-16"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <BarChart3 className="h-10 w-10 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-slate-800 dark:text-white/90">Portfolio</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent dark:from-emerald-300 dark:to-teal-300">
                  Construction
                </span>
              </h1>
              
              <blockquote className="text-lg md:text-xl font-light italic mb-4 leading-relaxed max-w-4xl mx-auto">
                <span className="bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent dark:from-emerald-200 dark:to-teal-200">
                  "Opportunities come infrequently. When it rains gold, put out the bucket, not the thimble."
                </span>
                <br />
                <span className="text-base font-medium text-slate-600 dark:text-white/80">- Warren E. Buffett</span>
              </blockquote>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-12 items-center">
              {/* Left Side - Categories */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="lg:col-span-2"
              >
                {/* Portfolio Categories Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                    className="group bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-emerald-200/50 dark:border-white/20 text-center hover:bg-white/90 dark:hover:bg-white/15 transition-all duration-500 shadow-lg"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500/30 transition-colors duration-300">
                      <TrendingUp className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-emerald-700 dark:text-emerald-300">Compounders</h3>
                    <p className="text-slate-600 dark:text-white/80 text-sm leading-relaxed">
                      High-quality businesses with sustainable competitive advantages and consistent growth
                    </p>
                  </motion.div>

                  <motion.div 
                    className="group bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-yellow-200/50 dark:border-white/20 text-center hover:bg-white/90 dark:hover:bg-white/15 transition-all duration-500 shadow-lg"
                    whileHover={{ scale: 1.05, rotateY: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500/30 transition-colors duration-300">
                      <Zap className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-yellow-700 dark:text-yellow-300">Challengers</h3>
                    <p className="text-slate-600 dark:text-white/80 text-sm leading-relaxed">
                      Emerging companies disrupting established industries with innovative approaches
                    </p>
                  </motion.div>

                  <motion.div 
                    className="group bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-blue-200/50 dark:border-white/20 text-center hover:bg-white/90 dark:hover:bg-white/15 transition-all duration-500 shadow-lg"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/30 transition-colors duration-300">
                      <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">Turnarounds</h3>
                    <p className="text-slate-600 dark:text-white/80 text-sm leading-relaxed">
                      Undervalued companies with catalysts for operational and financial improvement
                    </p>
                  </motion.div>

                  <motion.div 
                    className="group bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-200/50 dark:border-white/20 text-center hover:bg-white/90 dark:hover:bg-white/15 transition-all duration-500 shadow-lg"
                    whileHover={{ scale: 1.05, rotateY: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/30 transition-colors duration-300">
                      <Star className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">Special Situations</h3>
                    <p className="text-slate-600 dark:text-white/80 text-sm leading-relaxed">
                      Unique opportunities arising from corporate events, spin-offs, and market dislocations
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
                    alt="Business meeting"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                      <h4 className="text-white font-semibold mb-2">Strategic Opportunities</h4>
                      <p className="text-white/80 text-sm">Identifying the right investments at the right time</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Section 5: Product Offerings
  {
    id: 'product-offerings',
    title: 'Product Offerings',
    content: (
      <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-900">
        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-8">
          <div className="max-w-7xl mx-auto text-slate-800 dark:text-white">
            
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-center mb-16"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <Briefcase className="h-10 w-10 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-slate-800 dark:text-white/90">Product</span>
                <br />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-300 dark:to-purple-300">
                  Offerings
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
                Three distinct investment strategies designed to meet different risk profiles and return objectives
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-4 gap-8 items-center">
              {/* Left Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                    alt="Team success"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                      <h4 className="text-white font-semibold mb-2">Professional Excellence</h4>
                      <p className="text-white/80 text-sm">Tailored investment solutions</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Product Grid */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="lg:col-span-3"
              >
                <div className="grid lg:grid-cols-3 gap-6 mb-12">
                  <motion.div 
                    className="group bg-blue-50/80 dark:bg-blue-500/10 backdrop-blur-xl rounded-2xl p-6 border border-blue-200/50 dark:border-blue-400/30 text-center hover:bg-blue-50/90 dark:hover:bg-blue-500/15 transition-all duration-500 shadow-lg"
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/30 transition-colors duration-300">
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">A</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">Growth Portfolio</h3>
                    <div className="space-y-3 mb-6">
                      <div className="bg-blue-500/20 rounded-lg px-4 py-2">
                        <span className="font-semibold text-blue-700 dark:text-blue-200">18-25% CAGR Target</span>
                      </div>
                      <div className="text-slate-600 dark:text-white/80 text-sm">High Growth Focus</div>
                      <div className="text-slate-500 dark:text-white/70 text-xs">15-20 concentrated positions</div>
                      <div className="text-slate-500 dark:text-white/70 text-xs">3-5 year investment horizon</div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white w-full dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-400">
                        Learn More
                      </Button>
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="group bg-green-50/80 dark:bg-green-500/10 backdrop-blur-xl rounded-2xl p-6 border border-green-200/50 dark:border-green-400/30 text-center hover:bg-green-50/90 dark:hover:bg-green-500/15 transition-all duration-500 shadow-lg"
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/30 transition-colors duration-300">
                      <span className="text-2xl font-bold text-green-600 dark:text-green-300">B</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-300">Value Portfolio</h3>
                    <div className="space-y-3 mb-6">
                      <div className="bg-green-500/20 rounded-lg px-4 py-2">
                        <span className="font-semibold text-green-700 dark:text-green-200">12-18% CAGR Target</span>
                      </div>
                      <div className="text-slate-600 dark:text-white/80 text-sm">Moderate Risk Profile</div>
                      <div className="text-slate-500 dark:text-white/70 text-xs">25-35 diversified positions</div>
                      <div className="text-slate-500 dark:text-white/70 text-xs">2-4 year investment horizon</div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white w-full dark:border-green-400 dark:text-green-300 dark:hover:bg-green-400">
                        Learn More
                      </Button>
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="group bg-purple-50/80 dark:bg-purple-500/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-200/50 dark:border-purple-400/30 text-center hover:bg-purple-50/90 dark:hover:bg-purple-500/15 transition-all duration-500 shadow-lg"
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/30 transition-colors duration-300">
                      <span className="text-2xl font-bold text-purple-600 dark:text-purple-300">C</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">Balanced Portfolio</h3>
                    <div className="space-y-3 mb-6">
                      <div className="bg-purple-500/20 rounded-lg px-4 py-2">
                        <span className="font-semibold text-purple-700 dark:text-purple-200">10-15% CAGR Target</span>
                      </div>
                      <div className="text-slate-600 dark:text-white/80 text-sm">Balanced Risk Profile</div>
                      <div className="text-slate-500 dark:text-white/70 text-xs">20-30 balanced positions</div>
                      <div className="text-slate-500 dark:text-white/70 text-xs">1-3 year investment horizon</div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white w-full dark:border-purple-400 dark:text-purple-300 dark:hover:bg-purple-400">
                        Learn More
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="text-center"
                >
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl px-8 py-4 text-lg dark:bg-indigo-500 dark:hover:bg-indigo-600" asChild>
                        <Link href="/contact">
                          Schedule Consultation
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="lg" variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white shadow-xl px-8 py-4 text-lg dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-white" asChild>
                        <Link href="/about">Learn More About Us</Link>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-16">
      <FullScreenScroll sections={sections} />
    </div>
  );
}