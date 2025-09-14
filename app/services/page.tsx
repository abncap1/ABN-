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
  Factory,
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
      <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50 dark:from-blue-900 dark:via-teal-900 dark:to-cyan-900">

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-slate-800 dark:text-white w-full">
            {/* Header - Made more compact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6 md:mb-12"
            >
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 text-slate-800 dark:text-white">
                Investment Framework
              </h1>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-4 md:gap-8 items-center">
              {/* Left Side - 3D Visualization - Made more compact */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="lg:col-span-5 mb-6 lg:mb-0"
              >
                <div className="relative bg-gradient-to-br from-slate-900 to-black rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden">
                  {/* 3D Cube Visualization */}
                  <div className="relative h-64 md:h-96 flex items-center justify-center">
                    {/* Background particles */}
                    <div className="absolute inset-0">
                      {[...Array(15)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 md:w-2 md:h-2 bg-teal-400/30 rounded-full"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: Math.random() * 2,
                          }}
                        />
                      ))}
                    </div>

                    {/* 3D Cubes */}
                    <div className="relative">
                      <motion.div
                        className="relative"
                        animate={{
                          rotateY: [0, 360],
                          rotateX: [0, 15, 0],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        {/* Main cube structure */}
                        <div className="relative w-24 h-24 md:w-32 md:h-32">
                          <div className="absolute inset-0 border-2 border-teal-400/40 transform rotate-12 scale-110"></div>
                          <div className="absolute inset-2 border-2 border-teal-400/60 transform -rotate-6 scale-90"></div>
                          <div className="absolute inset-4 border-2 border-teal-400/80 transform rotate-3"></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Framework Content - Made more compact and responsive */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="lg:col-span-7"
              >
                <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                  {/* Uncontrollables */}
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-slate-800 dark:text-white border-b-2 border-teal-300 dark:border-teal-600 pb-2">
                      Uncontrollables ("Value")
                    </h3>

                    <div className="space-y-3 md:space-y-6">
                      {/* Racetrack */}
                      <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Factory className="h-5 w-5 md:h-6 md:w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-base md:text-lg text-slate-800 dark:text-white">
                            Racetrack: Industry
                          </h4>
                          <ul className="text-xs md:text-sm text-slate-600 dark:text-white/80 mt-1 md:mt-2 space-y-1">
                            <li>• Market growth and profit pool</li>
                            <li>• Tailwinds/ Disruption risk</li>
                          </ul>
                        </div>
                      </div>

                      {/* Horse */}
                      <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Building className="h-5 w-5 md:h-6 md:w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-base md:text-lg text-slate-800 dark:text-white">
                            Horse: Company
                          </h4>
                          <ul className="text-xs md:text-sm text-slate-600 dark:text-white/80 mt-1 md:mt-2 space-y-1">
                            <li>• Differentiation/ Moat</li>
                            <li>• Market share</li>
                          </ul>
                        </div>
                      </div>

                      {/* Jockey */}
                      <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Users className="h-5 w-5 md:h-6 md:w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-base md:text-lg text-slate-800 dark:text-white">
                            Jockey: Promoter/ Management
                          </h4>
                          <ul className="text-xs md:text-sm text-slate-600 dark:text-white/80 mt-1 md:mt-2 space-y-1">
                            <li>• Values</li>
                            <li>• Incentives</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Controllables */}
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-slate-800 dark:text-white border-b-2 border-teal-300 dark:border-teal-600 pb-2">
                      Controllable ("Price")
                    </h3>

                    <div className="space-y-3 md:space-y-6">
                      <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <BarChart3 className="h-5 w-5 md:h-6 md:w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-base md:text-lg text-slate-800 dark:text-white">
                            Valuations, with the context of:
                          </h4>
                          <ul className="text-xs md:text-sm text-slate-600 dark:text-white/80 mt-1 md:mt-2 space-y-1">
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

                {/* Bottom Quote - Made more compact */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="mt-4 md:mt-8"
                >
                  <div className="bg-gradient-to-r from-teal-800 to-cyan-800 dark:from-teal-900 dark:to-cyan-900 rounded-xl md:rounded-2xl p-4 md:p-6 text-white text-center">
                    <p className="text-sm md:text-lg font-semibold">
                      Nothing will be perfect across all parameters....our objective is to make judgement on, and buy
                      the best "bang for our buck"!
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 flex justify-between items-center text-xs md:text-sm text-slate-400 dark:text-white/70"
            >
              <span>15</span>
              <span>2025 Proprietary and Confidential</span>
            </motion.div>
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
      <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-900 dark:via-green-900 dark:to-teal-900">

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-slate-800 dark:text-white w-full">
            {/* Header - Made more compact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6 md:mb-12"
            >
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 text-slate-800 dark:text-white">
                Portfolio Construction
              </h1>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-4 md:gap-8 items-center">
              {/* Left Side - Warren Buffett Quote with Image - Made more compact */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="lg:col-span-5 mb-6 lg:mb-0"
              >
                <div className="relative">
                  {/* Black and white image */}
                  <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl mb-4 md:mb-6">
                    <img
                      src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
                      alt="Professional analyzing charts"
                      className="w-full h-48 md:h-80 object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Warren Buffett Quote */}
                  <div className="bg-gradient-to-r from-emerald-200 to-green-200 dark:from-emerald-800 dark:to-green-800 rounded-xl md:rounded-2xl p-4 md:p-6 relative">
                    <Quote className="h-6 w-6 md:h-8 md:w-8 text-emerald-600 dark:text-emerald-300 mb-3 md:mb-4" />
                    <blockquote className="text-lg md:text-xl font-medium italic text-slate-800 dark:text-white leading-relaxed mb-3 md:mb-4">
                      "When it rains gold, put out the bucket not the thimble"
                    </blockquote>
                    <p className="text-right text-emerald-700 dark:text-emerald-300 font-semibold text-sm md:text-base">
                      - Warren E. Buffett
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Portfolio Categories - Made more compact and responsive */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="lg:col-span-7"
              >
                <div className="space-y-3 md:space-y-4">
                  {/* Compounders */}
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center font-bold text-slate-800 flex-shrink-0 text-sm md:text-base">
                      1
                    </div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                      <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-3 md:p-4 rounded-lg">
                        <h4 className="font-bold text-base md:text-lg">Compounders (20-40%)</h4>
                        <p className="text-xs md:text-sm opacity-90">15-20% IRR | 2-5 years</p>
                      </div>
                      <div className="bg-white/80 dark:bg-white/10 p-3 md:p-4 rounded-lg border border-emerald-200 dark:border-white/20">
                        <p className="text-xs md:text-sm text-slate-600 dark:text-white/80">
                          Sector leaders with strong market positioning, history of navigating downturns and established
                          management
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Challengers */}
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center font-bold text-slate-800 flex-shrink-0 text-sm md:text-base">
                      2
                    </div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                      <div className="bg-gradient-to-r from-emerald-700 to-green-700 text-white p-3 md:p-4 rounded-lg">
                        <h4 className="font-bold text-base md:text-lg">Challengers (20-40%)</h4>
                        <p className="text-xs md:text-sm opacity-90">15-25% IRR | 2-5 years</p>
                      </div>
                      <div className="bg-white/80 dark:bg-white/10 p-3 md:p-4 rounded-lg border border-emerald-200 dark:border-white/20">
                        <p className="text-xs md:text-sm text-slate-600 dark:text-white/80">
                          Typical #2, 3 or 4 player in the industry aspiring to upgrade business its positioning,
                          typically at ~40-60% discount to leader
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Turnarounds */}
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center font-bold text-slate-800 flex-shrink-0 text-sm md:text-base">
                      3
                    </div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                      <div className="bg-gradient-to-r from-emerald-800 to-green-800 text-white p-3 md:p-4 rounded-lg">
                        <h4 className="font-bold text-base md:text-lg">Turnarounds (15-30%)</h4>
                        <p className="text-xs md:text-sm opacity-90">50-200% Upside | 1-2 years</p>
                      </div>
                      <div className="bg-white/80 dark:bg-white/10 p-3 md:p-4 rounded-lg border border-emerald-200 dark:border-white/20">
                        <p className="text-xs md:text-sm text-slate-600 dark:text-white/80">
                          Significant revival of fortunes due to a catalyst such as policy change, new management,
                          takeover or balance sheet repair
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Special Situations */}
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center font-bold text-slate-800 flex-shrink-0 text-sm md:text-base">
                      4
                    </div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                      <div className="bg-gradient-to-r from-emerald-300 to-green-300 text-slate-800 p-3 md:p-4 rounded-lg">
                        <h4 className="font-bold text-base md:text-lg">Special Situations (0-15%)</h4>
                        <p className="text-xs md:text-sm opacity-90">50-200% Upside | 3-9 months</p>
                      </div>
                      <div className="bg-white/80 dark:bg-white/10 p-3 md:p-4 rounded-lg border border-emerald-200 dark:border-white/20">
                        <p className="text-xs md:text-sm text-slate-600 dark:text-white/80">
                          Merger/ Demerger, Spin off, Change of management, tender offer, restructuring etc. creating an
                          investment opportunity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Summary - Made more compact */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="mt-4 md:mt-8"
                >
                  <div className="bg-gradient-to-r from-emerald-800 to-green-800 dark:from-emerald-900 dark:to-green-900 rounded-xl md:rounded-2xl p-4 md:p-6 text-white text-center">
                    <p className="text-sm md:text-lg font-semibold">
                      A balanced approach to drive strong through-cycle performance of the portfolio
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 flex justify-between items-center text-xs md:text-sm text-slate-400 dark:text-white/70"
            >
              <span>16</span>
              <span>2025 Proprietary and Confidential</span>
            </motion.div>
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
        <div className="relative z-10 flex h-full items-center justify-center px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-slate-800 dark:text-white w-full">
            {/* Header with Quote - Made more compact for mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6 md:mb-12"
            >
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 text-slate-800 dark:text-white">
                Investment Process
              </h1>

              {/* Madhav Somani Quote */}
              <div className="bg-gradient-to-r from-amber-200 to-yellow-200 dark:from-amber-800 dark:to-yellow-800 rounded-xl md:rounded-2xl p-4 md:p-6 mb-4 md:mb-8 relative">
                <Quote className="h-6 w-6 md:h-8 md:w-8 text-amber-600 dark:text-amber-300 mb-2 md:mb-4" />
                <blockquote className="text-lg md:text-xl lg:text-2xl font-medium italic text-slate-800 dark:text-white leading-relaxed">
                  "You hit the 4s and 6s, leave the bouncers and defend the yorkers"
                </blockquote>
                <p className="text-right text-amber-700 dark:text-amber-300 font-semibold mt-2 md:mt-4 text-sm md:text-base">
                  - Madhav Somani
                </p>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-4 md:gap-8 items-start">
              {/* Left Side - Funnel Diagram - Made more compact and responsive */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="lg:col-span-4 mb-6 lg:mb-0"
              >
                <div className="relative">
                  {/* Funnel Visualization */}
                  <div className="space-y-2 md:space-y-4">
                    <motion.div
                      className="bg-gradient-to-r from-amber-200 to-yellow-300 dark:from-amber-600 dark:to-yellow-600 rounded-lg p-4 md:p-6 text-center shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">200/</div>
                      <div className="text-sm md:text-lg font-semibold text-slate-700 dark:text-white/90">Quarter</div>
                    </motion.div>

                    <div className="flex justify-center">
                      <div className="w-0 h-0 border-l-[15px] md:border-l-[20px] border-r-[15px] md:border-r-[20px] border-t-[20px] md:border-t-[30px] border-l-transparent border-r-transparent border-t-amber-300 dark:border-t-amber-600"></div>
                    </div>

                    <motion.div
                      className="bg-gradient-to-r from-amber-300 to-yellow-400 dark:from-amber-700 dark:to-yellow-700 rounded-lg p-4 md:p-6 text-center shadow-lg mx-2 md:mx-4"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">50/</div>
                      <div className="text-sm md:text-lg font-semibold text-slate-700 dark:text-white/90">Quarter</div>
                    </motion.div>

                    <div className="flex justify-center">
                      <div className="w-0 h-0 border-l-[12px] md:border-l-[15px] border-r-[12px] md:border-r-[15px] border-t-[20px] md:border-t-[30px] border-l-transparent border-r-transparent border-t-amber-400 dark:border-t-amber-700"></div>
                    </div>

                    <motion.div
                      className="bg-gradient-to-r from-amber-400 to-yellow-500 dark:from-amber-800 dark:to-yellow-800 rounded-lg p-4 md:p-6 text-center shadow-lg mx-4 md:mx-8"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">20/</div>
                      <div className="text-sm md:text-lg font-semibold text-slate-700 dark:text-white/90">Quarter</div>
                    </motion.div>

                    <div className="flex justify-center">
                      <div className="w-0 h-0 border-l-[8px] md:border-l-[10px] border-r-[8px] md:border-r-[10px] border-t-[20px] md:border-t-[30px] border-l-transparent border-r-transparent border-t-amber-500 dark:border-t-amber-800"></div>
                    </div>

                    <motion.div
                      className="bg-amber-800 dark:bg-amber-900 rounded-lg p-4 md:p-6 text-center shadow-lg mx-6 md:mx-12 border-2 border-amber-700"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-2xl md:text-3xl font-bold text-white">5</div>
                      <div className="text-sm md:text-lg font-semibold text-white">/Quarter</div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Middle - Process Steps - Made more compact with smaller spacing */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="lg:col-span-5 space-y-3 md:space-y-6"
              >
                {/* Ideation */}
                <div className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-amber-200/50 dark:border-white/20 shadow-lg">
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-amber-700 dark:text-amber-300 flex items-center">
                    <Lightbulb className="h-5 w-5 md:h-6 md:w-6 mr-2" />
                    Ideation
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 text-xs md:text-sm">
                    <div>
                      <ul className="space-y-1 md:space-y-2 text-slate-600 dark:text-white/80">
                        <li>• Tracking List</li>
                        <li>• Screens</li>
                        <li>• Results Surprises</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-1 md:space-y-2 text-slate-600 dark:text-white/80">
                        <li>• Industry Connects</li>
                        <li>• Investor Community</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Research */}
                <div className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-amber-200/50 dark:border-white/20 shadow-lg">
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-amber-700 dark:text-amber-300 flex items-center">
                    <BarChart3 className="h-5 w-5 md:h-6 md:w-6 mr-2" />
                    Research
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 text-xs md:text-sm">
                    <div>
                      <ul className="space-y-1 md:space-y-2 text-slate-600 dark:text-white/80">
                        <li>• Financials</li>
                        <li>• Earnings calls, Interviews</li>
                        <li>• Valuation Check</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-1 md:space-y-2 text-slate-600 dark:text-white/80">
                        <li>• Mgmt. Meetings</li>
                        <li>• Discussion with sell-side analysts</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* VAR/Scuttlebutt */}
                <div className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-amber-200/50 dark:border-white/20 shadow-lg">
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-amber-700 dark:text-amber-300 flex items-center">
                    <Users className="h-5 w-5 md:h-6 md:w-6 mr-2" />
                    VAR<sup>(1)</sup>/ Scuttlebutt
                  </h3>
                  <div className="space-y-2 md:space-y-3 text-xs md:text-sm text-slate-600 dark:text-white/90">
                    <p>• Interviews with competitors, customers, suppliers, ex-employees and other stakeholders</p>
                    <p>• Site / plant visits, self-use of product/ service if applicable</p>
                  </div>
                </div>

                {/* Action */}
                <div className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-amber-200/50 dark:border-white/20 shadow-lg">
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-amber-700 dark:text-amber-300 flex items-center">
                    <Target className="h-5 w-5 md:h-6 md:w-6 mr-2" />
                    Action
                  </h3>
                  <div className="space-y-2 md:space-y-3 text-xs md:text-sm text-slate-600 dark:text-white/90">
                    <p>• Continued mgmt. interaction</p>
                    <p>• Buy/ add/ trim/ exit in the portfolio depending on relative/ absolute attractiveness</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Highlight Box - Made more compact and responsive */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="lg:col-span-3 mt-6 lg:mt-0"
              >
                <div className="bg-amber-900 dark:bg-amber-950 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-amber-700">
                  <div className="text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 border border-amber-600">
                      <Star className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                    <h4 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 leading-tight text-white">
                      An intense research and vetting process covering
                    </h4>
                    <div className="text-3xl md:text-4xl font-bold mb-2 text-white">200+</div>
                    <div className="text-lg md:text-xl font-semibold mb-4 text-white">stocks each quarter</div>
                    <div className="w-full h-1 bg-amber-800 rounded-full border border-amber-600">
                      <motion.div
                        className="h-full bg-white rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, delay: 1 }}
                      />
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