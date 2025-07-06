"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Heart, TrendingUp, Award, Users, Building, Globe, Lightbulb, ArrowRight, CheckCircle, Star, Shield, BarChart3, Briefcase, Clock, Phone, Mail, MapPin, DollarSign, Zap, Lock } from 'lucide-react';
import Link from 'next/link';
import { AnimatedCounter } from '@/components/animated-counter';

// Section 1: Company Introduction
export function IntroSection() {
  const features = [
    { icon: TrendingUp, text: "15+ Years of Excellence", desc: "Proven track record since 2008" },
    { icon: Shield, text: "Institutional-Grade Security", desc: "Bank-level security protocols" },
    { icon: Award, text: "Industry-Leading Performance", desc: "Consistent top-tier returns" },
    { icon: Users, text: "2,500+ Satisfied Clients", desc: "Growing global client base" }
  ];

  const keyStats = [
    { value: "$2.5B+", label: "Assets Under Management" },
    { value: "98%", label: "Client Satisfaction Rate" },
    { value: "50+", label: "Investment Professionals" },
    { value: "3", label: "Global Office Locations" }
  ];

  return (
    <div className="text-center max-w-7xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Badge variant="outline" className="mb-8 border-white/30 text-white bg-white/10 backdrop-blur-sm px-8 py-3 text-lg font-medium">
          Premier Portfolio Management Since 2008
        </Badge>
      </motion.div>
      
      <motion.h1
        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-10 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Pioneering the Future of
        <motion.span 
          className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mt-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Portfolio Management
        </motion.span>
      </motion.h1>
      
      <motion.div
        className="max-w-5xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
          For over 15 years, ABN CAPITAL has been at the forefront of investment innovation, 
          combining cutting-edge technology with time-tested investment principles to deliver 
          exceptional results for sophisticated investors worldwide.
        </p>
        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
          We democratize institutional-quality investment management, making sophisticated 
          strategies accessible to serious investors who demand excellence, transparency, 
          and personalized service in their wealth management journey.
        </p>
        <p className="text-md md:text-lg text-white/70 leading-relaxed">
          Our comprehensive approach encompasses portfolio construction, risk management, 
          wealth planning, and ongoing advisory services, all delivered through our 
          proprietary technology platform and supported by our team of seasoned professionals.
        </p>
      </motion.div>

      {/* Key Statistics */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {keyStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
          >
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
            <p className="text-white/80 font-medium text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Key Features Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.text}
            className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center border border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
          >
            <feature.icon className="h-12 w-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-white font-bold text-lg mb-2">{feature.text}</h3>
            <p className="text-white/70 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div
        className="flex flex-col sm:flex-row gap-6 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button size="lg" className="bg-white text-gray-900 hover:bg-white/90 px-10 py-4 text-lg font-semibold shadow-xl" asChild>
            <Link href="/contact">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg font-semibold backdrop-blur-sm" asChild>
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Section 2: Mission & Vision
export function MissionVisionSection() {
  const missionPoints = [
    "Democratize sophisticated investment strategies for all serious investors",
    "Provide institutional-quality portfolio management with personal service",
    "Maintain unwavering commitment to transparency and ethical practices",
    "Deliver consistent, risk-adjusted returns through disciplined approaches"
  ];

  const visionPoints = [
    "Be the world's most trusted portfolio management firm",
    "Set new standards for investment excellence and innovation",
    "Lead the industry in technology-driven investment solutions",
    "Create lasting value for clients across generations"
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
          Our Purpose & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Direction</span>
        </h2>
        <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
          Guided by clear principles and driven by a vision of financial excellence, 
          we are committed to transforming how investment management is delivered and experienced.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="h-full border-0 bg-white/10 backdrop-blur-md text-white hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-12">
              <div className="flex items-center mb-10">
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mr-8">
                  <Target className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">Our Mission</h3>
              </div>
              <div className="space-y-8">
                <p className="text-white/90 leading-relaxed text-xl">
                  To empower individuals and institutions to achieve their financial goals through 
                  innovative portfolio management strategies, personalized service, and unwavering 
                  commitment to excellence.
                </p>
                <p className="text-white/80 leading-relaxed text-lg">
                  We believe that sophisticated investment solutions should be accessible to all 
                  serious investors, not just institutional clients. Our mission is to bridge this 
                  gap by providing institutional-quality investment management with the personal 
                  touch that individual investors deserve.
                </p>
                
                <div className="space-y-4 mt-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Core Mission Elements:</h4>
                  {missionPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-white/80">{point}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-6 mt-10">
                  <div className="bg-blue-500/10 rounded-lg p-6">
                    <BarChart3 className="h-8 w-8 text-blue-400 mb-3" />
                    <p className="text-sm font-medium">Strategic Excellence</p>
                    <p className="text-xs text-white/70 mt-1">Proven methodologies</p>
                  </div>
                  <div className="bg-purple-500/10 rounded-lg p-6">
                    <Users className="h-8 w-8 text-purple-400 mb-3" />
                    <p className="text-sm font-medium">Client-Centric Approach</p>
                    <p className="text-xs text-white/70 mt-1">Personalized solutions</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="h-full border-0 bg-white/10 backdrop-blur-md text-white hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-12">
              <div className="flex items-center mb-10">
                <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mr-8">
                  <Eye className="h-10 w-10 text-purple-400" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">Our Vision</h3>
              </div>
              <div className="space-y-8">
                <p className="text-white/90 leading-relaxed text-xl">
                  To be the world's most trusted and innovative portfolio management firm, setting 
                  new standards for investment excellence while maintaining the highest levels of 
                  integrity and client service.
                </p>
                <p className="text-white/80 leading-relaxed text-lg">
                  We envision a future where every investor has access to institutional-quality 
                  investment management, supported by cutting-edge technology and delivered with 
                  uncompromising transparency and ethical standards.
                </p>

                <div className="space-y-4 mt-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Vision Pillars:</h4>
                  {visionPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    >
                      <Star className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-white/80">{point}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-6 mt-10">
                  <div className="bg-green-500/10 rounded-lg p-6">
                    <Globe className="h-8 w-8 text-green-400 mb-3" />
                    <p className="text-sm font-medium">Global Leadership</p>
                    <p className="text-xs text-white/70 mt-1">Worldwide presence</p>
                  </div>
                  <div className="bg-orange-500/10 rounded-lg p-6">
                    <Lightbulb className="h-8 w-8 text-orange-400 mb-3" />
                    <p className="text-sm font-medium">Innovation Focus</p>
                    <p className="text-xs text-white/70 mt-1">Technology-driven</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Additional Mission Points */}
      <motion.div
        className="grid md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {[
          { 
            icon: Shield, 
            title: 'Fiduciary Responsibility', 
            desc: 'Always acting in our clients\' best interests with complete transparency and accountability in every decision we make.' 
          },
          { 
            icon: TrendingUp, 
            title: 'Performance Excellence', 
            desc: 'Delivering consistent, risk-adjusted returns through disciplined investment strategies and rigorous research processes.' 
          },
          { 
            icon: Heart, 
            title: 'Relationship Focus', 
            desc: 'Building long-term partnerships based on trust, communication, and mutual success that span generations.' 
          }
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
          >
            <Card className="border-0 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300 h-full">
              <CardContent className="p-8 text-center">
                <item.icon className="h-16 w-16 mx-auto mb-6 text-blue-400" />
                <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
                <p className="text-white/80 leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// Section 3: Core Values
export function CoreValuesSection() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service delivery and client relationships.',
      details: 'Our commitment to excellence drives us to continuously improve our investment processes, technology platforms, and client service standards. We benchmark ourselves against the highest industry standards and consistently exceed expectations.',
      examples: ['Rigorous investment research', 'Continuous process improvement', 'Industry-leading technology', 'Exceptional client service'],
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-400/30'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Trust and transparency form the foundation of all our client interactions and business practices.',
      details: 'We maintain the highest ethical standards, providing clear communication and honest advice in all our client relationships. Our fiduciary responsibility means we always act in our clients\' best interests.',
      examples: ['Transparent fee structure', 'Clear communication', 'Ethical business practices', 'Fiduciary responsibility'],
      color: 'from-red-500/20 to-red-600/20',
      borderColor: 'border-red-400/30'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your financial success is our primary focus, driving every decision and recommendation we make.',
      details: 'We customize our approach to each client\'s unique needs, goals, and circumstances, ensuring personalized investment solutions. Your success is our success, and we measure our performance by your satisfaction.',
      examples: ['Personalized strategies', 'Dedicated support', 'Regular communication', 'Goal-based planning'],
      color: 'from-green-500/20 to-green-600/20',
      borderColor: 'border-green-400/30'
    }
  ];

  const valueMetrics = [
    { metric: "99%", label: "Client Satisfaction Rate", icon: Star },
    { metric: "24/7", label: "Client Support Available", icon: Clock },
    { metric: "100%", label: "Transparent Fee Structure", icon: Eye },
    { metric: "15+", label: "Years of Trusted Service", icon: Award }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
          Our Core <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Values</span>
        </h2>
        <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
          The fundamental principles that guide every decision we make and every relationship we build. 
          These values are not just words on a page – they are the foundation of our culture and the 
          driving force behind our success.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-10 mb-20">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <Card className={`h-full text-center border ${value.borderColor} bg-gradient-to-br ${value.color} backdrop-blur-md text-white hover:bg-white/15 transition-all duration-500 group`}>
              <CardContent className="p-10">
                <motion.div
                  className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-white/30 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="h-12 w-12" />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-6">{value.title}</h3>
                <p className="text-white/90 mb-6 text-lg leading-relaxed">{value.description}</p>
                <p className="text-white/70 text-sm leading-relaxed mb-8">{value.details}</p>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white mb-4">How We Deliver:</h4>
                  {value.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center text-sm text-white/80">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      {example}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Values in Action */}
      <motion.div
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          Values in Action - Measurable Results
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueMetrics.map((item, index) => (
            <motion.div
              key={item.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
            >
              <item.icon className="h-12 w-12 mx-auto mb-4 text-blue-400" />
              <div className="text-3xl font-bold text-white mb-2">{item.metric}</div>
              <div className="text-white/70">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Client Testimonial on Values */}
      <motion.div
        className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-10 border border-white/10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl text-white/90 italic mb-6 leading-relaxed">
            "ABN CAPITAL's commitment to their core values is evident in every interaction. 
            Their excellence, integrity, and client-centric approach have made them our 
            trusted partner for over 8 years."
          </blockquote>
          <div className="text-white/80">
            <p className="font-semibold">Sarah Johnson</p>
            <p className="text-sm">CEO, Tech Innovations Inc.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Section 4: Company Timeline
export function TimelineSection() {
  const milestones = [
    { 
      year: '2008', 
      title: 'Foundation & Vision',
      event: 'ABN CAPITAL founded with a vision to democratize sophisticated investment strategies',
      details: 'Started with $5M initial capital and a team of 5 investment professionals committed to bringing institutional-quality investment management to individual investors.',
      achievements: ['Company incorporation', 'Initial team formation', 'First client onboarding', 'Regulatory compliance'],
      icon: Building,
      color: 'bg-blue-500'
    },
    { 
      year: '2012', 
      title: 'Growth Milestone',
      event: 'Reached $100M in assets under management, establishing our market presence',
      details: 'Expanded team to 15 professionals and launched our first proprietary investment strategies, demonstrating our ability to scale while maintaining service quality.',
      achievements: ['$100M AUM milestone', 'Team expansion to 15', 'Proprietary strategies launch', 'Client base growth to 200+'],
      icon: TrendingUp,
      color: 'bg-green-500'
    },
    { 
      year: '2016', 
      title: 'Global Expansion',
      event: 'Expanded internationally, serving clients across multiple continents',
      details: 'Opened offices in London and Singapore, serving over 500 international clients and establishing ABN CAPITAL as a global investment management firm.',
      achievements: ['London office opening', 'Singapore expansion', '500+ international clients', 'Multi-currency capabilities'],
      icon: Globe,
      color: 'bg-purple-500'
    },
    { 
      year: '2020', 
      title: 'Technology Innovation',
      event: 'Launched proprietary AI-driven investment platform for enhanced portfolio optimization',
      details: 'Invested $10M in technology infrastructure and hired top AI/ML talent to develop cutting-edge investment tools and client platforms.',
      achievements: ['AI platform launch', '$10M tech investment', 'ML team formation', 'Digital client portal'],
      icon: Lightbulb,
      color: 'bg-orange-500'
    },
    { 
      year: '2024', 
      title: 'Industry Leadership',
      event: 'Surpassed $2.5B in AUM, recognized as industry leader in portfolio management',
      details: 'Serving 2,500+ clients with 50+ investment professionals across 3 continents, recognized with multiple industry awards for excellence.',
      achievements: ['$2.5B+ AUM achieved', '2,500+ clients served', '50+ professionals', 'Industry awards received'],
      icon: Award,
      color: 'bg-yellow-500'
    }
  ];

  const timelineStats = [
    { label: "Years of Growth", value: "16", suffix: "+" },
    { label: "AUM Growth Rate", value: "50,000", suffix: "%", prefix: "" },
    { label: "Client Growth", value: "500", suffix: "x", prefix: "" },
    { label: "Team Expansion", value: "10", suffix: "x", prefix: "" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
          Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
        </h2>
        <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
          Key milestones that have shaped our growth and commitment to excellence over 15+ years. 
          Each milestone represents not just growth in size, but advancement in our capabilities 
          and commitment to serving our clients better.
        </p>
      </motion.div>

      <div className="relative mb-20">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-yellow-400 opacity-50" />
        
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            className="relative mb-24 last:mb-0"
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
          >
            <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="flex-1 px-8">
                <Card className="border-0 bg-white/10 backdrop-blur-md text-white hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-10">
                    <div className="flex items-center mb-6">
                      <span className="text-4xl md:text-5xl font-bold text-blue-400 mr-8">{milestone.year}</span>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                      </div>
                    </div>
                    <p className="text-white/90 text-lg mb-4 leading-relaxed">{milestone.event}</p>
                    <p className="text-white/70 leading-relaxed mb-6">{milestone.details}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {milestone.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center text-sm text-white/80">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <motion.div
                className={`w-24 h-24 ${milestone.color} rounded-full flex items-center justify-center text-white relative z-10 shadow-2xl`}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <milestone.icon className="h-12 w-12" />
              </motion.div>
              
              <div className="flex-1" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Timeline Summary */}
      <motion.div
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          16 Years of Continuous Growth & Innovation
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {timelineStats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
                {stat.prefix}{stat.value}{stat.suffix}
              </div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Future Vision */}
      <motion.div
        className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-10 border border-white/10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Looking Ahead: Our Next Chapter
          </h3>
          <p className="text-lg text-white/80 leading-relaxed max-w-4xl mx-auto">
            As we continue to grow and evolve, our commitment to excellence remains unwavering. 
            We're investing in next-generation technologies, expanding our global presence, 
            and developing innovative investment solutions to serve the evolving needs of our clients 
            in an increasingly complex financial landscape.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// Section 5: Team Excellence
export function TeamExcellenceSection() {
  const achievements = [
    { value: 2500, suffix: '+', label: 'Satisfied Clients', icon: Users, desc: 'Growing global client base' },
    { value: 2.5, suffix: 'B+', prefix: '$', label: 'Assets Under Management', icon: TrendingUp, desc: 'Institutional-scale portfolio' },
    { value: 98, suffix: '%', label: 'Client Retention Rate', icon: Heart, desc: 'Long-term relationships' },
    { value: 15, suffix: '+', label: 'Years of Excellence', icon: Award, desc: 'Proven track record' }
  ];

  const teamHighlights = [
    {
      title: "Investment Expertise",
      description: "150+ years of combined investment experience across global markets",
      icon: BarChart3,
      stats: ["25+ CFA Charterholders", "5 PhD Economists", "3 Former Fed Officials", "10+ Industry Awards"],
      details: "Our investment team brings together decades of experience from leading financial institutions, central banks, and academic institutions."
    },
    {
      title: "Technology Innovation",
      description: "Cutting-edge fintech solutions and AI-driven analytics platform",
      icon: Lightbulb,
      stats: ["15 AI/ML Engineers", "8 Fintech Patents", "3 Proprietary Platforms", "$10M+ Tech Investment"],
      details: "We've invested heavily in technology to provide our clients with institutional-grade tools and analytics previously available only to large institutions."
    },
    {
      title: "Client Service Excellence",
      description: "Dedicated relationship managers and 24/7 global support network",
      icon: Users,
      stats: ["20 Client Managers", "24/7 Support Staff", "3 Global Offices", "99% Satisfaction Rate"],
      details: "Our client service team is committed to providing exceptional support and personalized attention to every client, regardless of portfolio size."
    }
  ];

  const certifications = [
    { name: "CFA Institute", count: "25+", desc: "Chartered Financial Analysts" },
    { name: "CAIA", count: "10+", desc: "Alternative Investment Analysts" },
    { name: "FRM", count: "8+", desc: "Financial Risk Managers" },
    { name: "PhD/Masters", count: "15+", desc: "Advanced Degrees" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
          Trusted by <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Thousands</span>
        </h2>
        <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
          Our track record of excellence speaks for itself - built on expertise, innovation, and unwavering 
          commitment to client success. We've assembled a world-class team of professionals who share our 
          passion for delivering exceptional investment management services.
        </p>
      </motion.div>

      {/* Main Statistics */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {achievements.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <stat.icon className="h-12 w-12 mx-auto mb-4 text-blue-400" />
            <div className="text-3xl md:text-4xl font-bold mb-2 text-white">
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                duration={2.5}
              />
            </div>
            <div className="text-white font-medium mb-2">{stat.label}</div>
            <div className="text-white/60 text-sm">{stat.desc}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Team Highlights */}
      <motion.div
        className="grid lg:grid-cols-3 gap-10 mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {teamHighlights.map((highlight, index) => (
          <motion.div
            key={highlight.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
          >
            <Card className="border-0 bg-white/10 backdrop-blur-md text-white hover:bg-white/15 transition-all duration-300 h-full">
              <CardContent className="p-10">
                <highlight.icon className="h-16 w-16 mb-6 text-blue-400" />
                <h3 className="text-xl md:text-2xl font-semibold mb-4">{highlight.title}</h3>
                <p className="text-white/80 mb-6 leading-relaxed">{highlight.description}</p>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">{highlight.details}</p>
                <div className="space-y-3">
                  {highlight.stats.map((stat, statIndex) => (
                    <div key={stat} className="flex items-center text-sm text-white/80">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      {stat}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Professional Certifications */}
      <motion.div
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          Professional Certifications & Qualifications
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">{cert.count}</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{cert.name}</h4>
              <p className="text-white/70 text-sm">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Awards and Recognition */}
      <motion.div
        className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-10 border border-white/10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          Awards & Industry Recognition
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: Award, 
              title: 'Top Portfolio Management Firm', 
              desc: 'Financial Times Excellence Awards 2024',
              year: '2024',
              details: 'Recognized for outstanding performance and client service'
            },
            { 
              icon: Star, 
              title: 'Best Client Service', 
              desc: 'Investment Management Awards 2023',
              year: '2023',
              details: 'Honored for exceptional client relationship management'
            },
            { 
              icon: Zap, 
              title: 'Innovation in Fintech', 
              desc: 'Technology Excellence Recognition 2022',
              year: '2022',
              details: 'Awarded for breakthrough AI investment platform'
            }
          ].map((award, index) => (
            <motion.div
              key={award.title}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <award.icon className="h-10 w-10 text-yellow-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{award.title}</h4>
              <p className="text-white/70 text-sm mb-2">{award.desc}</p>
              <p className="text-white/60 text-xs mb-2">{award.details}</p>
              <span className="text-blue-400 text-xs font-medium">{award.year}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// Section 6: Call to Action
export function CallToActionSection() {
  const contactMethods = [
    { icon: Phone, text: "+1 (555) 123-4567", label: "Call Us", desc: "Speak with our team" },
    { icon: Mail, text: "info@abncapital.com", label: "Email Us", desc: "Get detailed information" },
    { icon: Clock, text: "Mon-Fri 9AM-6PM EST", label: "Business Hours", desc: "When we're available" },
    { icon: MapPin, text: "New York, London, Singapore", label: "Global Offices", desc: "Worldwide presence" }
  ];

  const nextSteps = [
    { step: "Schedule a complimentary consultation", desc: "Meet with our investment professionals" },
    { step: "Receive personalized investment strategy", desc: "Tailored to your goals and risk tolerance" },
    { step: "Begin your wealth management journey", desc: "Start building your financial future" }
  ];

  const benefits = [
    'Personalized investment strategies tailored to your unique goals and circumstances',
    '24/7 client support with dedicated relationship managers and global coverage',
    'Transparent fee structure with no hidden costs or surprise charges',
    'Access to institutional-quality investment opportunities and research',
    'Cutting-edge technology platform with real-time portfolio monitoring',
    'Comprehensive wealth planning services including tax and estate planning'
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 text-white leading-tight">
          Ready to Transform Your
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mt-4">
            Financial Future?
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-5xl mx-auto">
          Join thousands of satisfied clients who trust ABN CAPITAL with their wealth management needs.
          Let's discuss how we can help you achieve your investment goals with our proven strategies 
          and personalized approach.
        </p>
        
        <p className="text-lg text-white/80 leading-relaxed max-w-4xl mx-auto">
          Our team of investment professionals is ready to create a personalized portfolio strategy 
          that aligns with your financial objectives, risk tolerance, and long-term vision. 
          Take the first step towards financial excellence today.
        </p>
      </motion.div>
      
      {/* Contact Methods */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.label}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <method.icon className="h-10 w-10 mx-auto mb-4 text-blue-400" />
            <h3 className="text-white font-semibold mb-2">{method.label}</h3>
            <p className="text-white/80 text-sm mb-1">{method.text}</p>
            <p className="text-white/60 text-xs">{method.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Main CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="lg" className="bg-white text-gray-900 hover:bg-white/90 px-12 py-6 text-xl font-semibold shadow-2xl" asChild>
            <Link href="/contact">
              Schedule Free Consultation
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white hover:text-gray-900 px-12 py-6 text-xl font-semibold backdrop-blur-sm" asChild>
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Next Steps */}
      <motion.div
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          Your Journey to Financial Excellence Starts Here
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {nextSteps.map((step, index) => (
            <motion.div
              key={step.step}
              className="text-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                {index + 1}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{step.step}</h4>
              <p className="text-white/70 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Benefits Reminder */}
      <motion.div
        className="grid md:grid-cols-2 gap-6 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit}
            className="flex items-start text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
          >
            <CheckCircle className="h-6 w-6 text-green-400 mr-4 flex-shrink-0 mt-1" />
            <span className="leading-relaxed">{benefit}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Final Assurance */}
      <motion.div
        className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-10 border border-white/10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <div className="flex justify-center mb-6">
          <Lock className="h-12 w-12 text-green-400" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
          Your Information is Secure & Confidential
        </h3>
        <p className="text-white/80 leading-relaxed max-w-3xl mx-auto">
          We maintain the highest standards of data security and client confidentiality. 
          Your consultation is completely free with no obligation, and we never share 
          your personal information with third parties.
        </p>
      </motion.div>
    </div>
  );
}