"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FullScreenScroll } from "@/components/ui/full-screen-scroll";
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
  ArrowRight,
  IndianRupee,
  Search,
  FileText,
  Phone,
  TrendingDown,
} from "lucide-react";
import Link from "next/link";

const sections = [
  // Section 1: Guiding Principles
  {
    id: "guiding-principles",
    title: "Guiding Principles",
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
                    <span className="text-slate-800 dark:text-white/90">
                      Guiding
                    </span>
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
                        <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-300">
                          Objectivity
                        </h3>
                        <p className="text-slate-600 dark:text-white/80 leading-relaxed text-sm">
                          Most things are not as bad or as good as they may
                          instinctively seem
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
                        <h3 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-300">
                          Learn-ability
                        </h3>
                        <p className="text-slate-600 dark:text-white/80 leading-relaxed text-sm">
                          If you keep your eyes and ears open....Mr. Market will
                          show you all you need to know
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
                        <h3 className="text-lg font-semibold mb-2 text-purple-700 dark:text-purple-300">
                          Humility
                        </h3>
                        <p className="text-slate-600 dark:text-white/80 leading-relaxed text-sm">
                          Anything can happen and the Market is almost always
                          right; Manage for risk first!
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
                      <h4 className="text-white font-semibold mb-2">
                        Wisdom in Action
                      </h4>
                      <p className="text-white/80 text-sm">
                        Experience-driven investment decisions
                      </p>
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
    id: "why-us",
    title: "Why Us",
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
                      <h4 className="text-white font-semibold mb-2">
                        Speed & Agility
                      </h4>
                      <p className="text-white/80 text-sm">
                        Quick decision-making advantage
                      </p>
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
                  <span className="text-base font-medium text-slate-600 dark:text-white/80">
                    - Sun Tzu
                  </span>
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
                        <h3 className="text-lg font-semibold mb-2 text-orange-700 dark:text-orange-300">
                          Access
                        </h3>
                        <p className="text-slate-600 dark:text-white/80 leading-relaxed text-sm">
                          Being a former entrepreneur brings unparalleled access
                          as relate-ability with management teams is far
                          superior to a typical finance professional
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
                        <h3 className="text-lg font-semibold mb-2 text-red-700 dark:text-red-300">
                          Expertise
                        </h3>
                        <p className="text-slate-600 dark:text-white/80 leading-relaxed text-sm">
                          Previous investing experience in and understanding of,
                          a wide variety of sectors, including financials,
                          consumer, services and industrials
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
                        <h3 className="text-lg font-semibold mb-2 text-yellow-700 dark:text-yellow-300">
                          Flexibility
                        </h3>
                        <p className="text-slate-600 dark:text-white/80 leading-relaxed text-sm">
                          Ability to invest in microthemes and small companies
                          where typical funds can't invest due to size
                          constraints
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
    id: "investment-framework",
    title: "Investment Framework",
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
                <span className="text-slate-800 dark:text-white/90">
                  Investment
                </span>
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
                <span className="text-base font-medium text-slate-600 dark:text-white/80">
                  - Warren E. Buffett
                </span>
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
                        <h4 className="font-semibold text-red-700 dark:text-red-300">
                          Racetrack
                        </h4>
                        <p className="text-slate-600 dark:text-white/80 text-sm">
                          Industry
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mr-4">
                        <TrendingUp className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 dark:text-red-300">
                          Horse
                        </h4>
                        <p className="text-slate-600 dark:text-white/80 text-sm">
                          Company
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mr-4">
                        <Users className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 dark:text-red-300">
                          Jockey
                        </h4>
                        <p className="text-slate-600 dark:text-white/80 text-sm">
                          Management Team
                        </p>
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
                      <p className="text-white text-xs text-center font-medium">
                        Balanced Analysis
                      </p>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="relative"
                  animate={{ rotate: [-3, 3, -3] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
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
                        <IndianRupee className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300">
                          Odds
                        </h4>
                        <p className="text-slate-600 dark:text-white/80 text-sm">
                          Valuation / Entry Price
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                        <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300">
                          Position Sizing
                        </h4>
                        <p className="text-slate-600 dark:text-white/80 text-sm">
                          Risk Management
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                        <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300">
                          Timing
                        </h4>
                        <p className="text-slate-600 dark:text-white/80 text-sm">
                          Entry & Exit Strategy
                        </p>
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
    id: "portfolio-construction",
    title: "Portfolio Construction",
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
                <span className="text-slate-800 dark:text-white/90">
                  Portfolio
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent dark:from-emerald-300 dark:to-teal-300">
                  Construction
                </span>
              </h1>

              <blockquote className="text-lg md:text-xl font-light italic mb-4 leading-relaxed max-w-4xl mx-auto">
                <span className="bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent dark:from-emerald-200 dark:to-teal-200">
                  "Opportunities come infrequently. When it rains gold, put out
                  the bucket, not the thimble."
                </span>
                <br />
                <span className="text-base font-medium text-slate-600 dark:text-white/80">
                  - Warren E. Buffett
                </span>
              </blockquote>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                    <h3 className="text-xl font-bold mb-4 text-emerald-700 dark:text-emerald-300">
                      Compounders (20-40%) 15-20% IRR | 2-5 years
                    </h3>
                    <p className="text-slate-600 dark:text-white/80 text-sm leading-relaxed">
                      Sector leaders with strong market positioning, history of
                      navigating downturns and established management
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
                    <h3 className="text-xl font-bold mb-4 text-yellow-700 dark:text-yellow-300">
                      Challengers (20-40%) 15-25% IRR | 2-5 years
                    </h3>
                    <p className="text-slate-600 dark:text-white/80 text-sm leading-relaxed">
                      Typical #2, 3 or 4 player in the industry aspiring to
                      upgrade business its positioning, typically at ~40-60%
                      discount to leader
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
                    <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">
                      Turnarounds (15-30%) 50-200% Upside | 1-2 years
                    </h3>
                    <p className="text-slate-600 dark:text-white/80 text-sm leading-relaxed">
                      Significant revival of fortunes due to a catalyst such as
                      policy change, new management, takeover or balance sheet
                      repair
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
                    <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">
                      Special Situations (0-15%) 50-200% Upside | 3-9 months
                    </h3>
                    <p className="text-slate-600 dark:text-white/80 text-sm leading-relaxed">
                      Unique opportunities arising from corporate events,
                      spin-offs, and market dislocations
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Section 5: Investment Process
  {
    id: "investment-process",
    title: "Investment Process",
    content: (
      <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900 dark:via-yellow-900 dark:to-orange-900">
        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-8">
          <div className="max-w-7xl mx-auto text-slate-800 dark:text-white">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-center mb-8"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <Search className="h-10 w-10 text-white" />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-slate-800 dark:text-white/90">
                  Investment
                </span>
                <br />
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent dark:from-amber-300 dark:to-orange-300">
                  Process
                </span>
              </h1>

              <blockquote className="text-lg md:text-xl font-light italic mb-4 leading-relaxed max-w-3xl mx-auto">
                <span className="bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent dark:from-amber-200 dark:to-orange-200">
                  "You hit the 4s and 6s, leave the bouncers and defend the yorkers"
                </span>
                <br />
                <span className="text-base font-medium text-slate-600 dark:text-white/80">
                  - Madhav Somani
                </span>
              </blockquote>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="bg-amber-500/10 dark:bg-amber-500/20 backdrop-blur-md rounded-lg p-3 border border-amber-200/50 dark:border-amber-400/30 max-w-md mx-auto"
              >
                <p className="text-amber-700 dark:text-amber-200 font-semibold text-base">
                  An intense research and vetting process covering
                </p>
                <p className="text-xl font-bold text-amber-800 dark:text-amber-100">
                  200+ stocks each quarter
                </p>
              </motion.div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left Side - Funnel Visualization */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="relative"
              >
                {/* Funnel Stages */}
                <div className="space-y-4">
                  {/* Stage 1: Ideation - 200/Quarter */}
                  <motion.div
                    className="group bg-amber-100/80 dark:bg-amber-500/10 backdrop-blur-xl rounded-xl p-4 border border-amber-200/50 dark:border-amber-400/30 hover:bg-amber-100/90 dark:hover:bg-amber-500/15 transition-all duration-500 shadow-lg"
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-amber-500/30 transition-colors duration-300">
                        <Lightbulb className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-amber-700 dark:text-amber-300">
                          200/Quarter
                        </h3>
                        <h4 className="text-base font-semibold text-amber-600 dark:text-amber-400">
                          Ideation
                        </h4>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 text-xs">
                      <div>
                        <ul className="space-y-2 text-slate-600 dark:text-white/80">
                          <li>• Tracking List</li>
                          <li>• Screens</li>
                          <li>• Results Surprises</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-2 text-slate-600 dark:text-white/80">
                          <li>• Industry Connects</li>
                          <li>• Investor Community</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* Stage 2: Research - 50/Quarter */}
                  <motion.div
                    className="group bg-blue-100/80 dark:bg-blue-500/10 backdrop-blur-xl rounded-xl p-4 border border-blue-200/50 dark:border-blue-400/30 hover:bg-blue-100/90 dark:hover:bg-blue-500/15 transition-all duration-500 shadow-lg ml-6"
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-500/30 transition-colors duration-300">
                        <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300">
                          50/Quarter
                        </h3>
                        <h4 className="text-base font-semibold text-blue-600 dark:text-blue-400">
                          Research
                        </h4>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 text-xs">
                      <div>
                        <ul className="space-y-2 text-slate-600 dark:text-white/80">
                          <li>• Financials</li>
                          <li>• Earnings calls, Interviews</li>
                          <li>• Valuation Check</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-2 text-slate-600 dark:text-white/80">
                          <li>• Mgmt. Meetings</li>
                          <li>• Discussion with sell-side analysts</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* Stage 3: VAR/Scuttlebutt - 20/Quarter */}
                  <motion.div
                    className="group bg-green-100/80 dark:bg-green-500/10 backdrop-blur-xl rounded-xl p-4 border border-green-200/50 dark:border-green-400/30 hover:bg-green-100/90 dark:hover:bg-green-500/15 transition-all duration-500 shadow-lg ml-12"
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-green-500/30 transition-colors duration-300">
                        <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-green-700 dark:text-green-300">
                          20/Quarter
                        </h3>
                        <h4 className="text-base font-semibold text-green-600 dark:text-green-400">
                          VAR¹/Scuttlebutt
                        </h4>
                      </div>
                    </div>
                    <div className="text-xs text-slate-600 dark:text-white/80 space-y-1">
                      <p>• Interviews with competitors, customers, suppliers, ex-employees and other stakeholders</p>
                      <p>• Site/plant visits, self-use of product/service if applicable</p>
                    </div>
                  </motion.div>

                  {/* Stage 4: Action - 5/Quarter */}
                  <motion.div
                    className="group bg-purple-100/80 dark:bg-purple-500/10 backdrop-blur-xl rounded-xl p-4 border border-purple-200/50 dark:border-purple-400/30 hover:bg-purple-100/90 dark:hover:bg-purple-500/15 transition-all duration-500 shadow-lg ml-18"
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-purple-500/30 transition-colors duration-300">
                        <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300">
                          5/Quarter
                        </h3>
                        <h4 className="text-base font-semibold text-purple-600 dark:text-purple-400">
                          Action
                        </h4>
                      </div>
                    </div>
                    <div className="text-xs text-slate-600 dark:text-white/80 space-y-1">
                      <p>• Continued mgmt. interaction</p>
                      <p>• Buy/add/trim/exit in the portfolio depending on relative/absolute attractiveness</p>
                    </div>
                  </motion.div>
                </div>

                {/* Value Added Research Note */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="mt-4 text-xs text-slate-500 dark:text-white/60"
                >
                  ¹ Value added research/primary research
                </motion.div>
              </motion.div>

              {/* Right Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                    alt="Investment Process Diagram"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                      <h4 className="text-white font-semibold mb-2">
                        Systematic Approach
                      </h4>
                      <p className="text-white/80 text-sm">
                        From 200 ideas to 5 actionable investments
                      </p>
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
];

export default function Services() {
  return (
    <div className="min-h-screen pt-16">
      <FullScreenScroll sections={sections} />
    </div>
  );
}