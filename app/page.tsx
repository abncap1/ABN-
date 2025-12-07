"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Shield, Users, BarChart3, Target, Award, Star, CheckCircle, Play } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer } from '@/components/scroll-reveal';
import { AnimatedCounter } from '@/components/animated-counter';
import { ContactCopyEmail } from '@/components/ui/ContactCopyEmail';
import Image from 'next/image';
import Traffic from "@/public/assets/Traffic.jpg"


const stats = [
  { label: 'Assets Under Management', value: 2.5, suffix: 'B+', prefix: '$', icon: TrendingUp },
  { label: 'Client Satisfaction', value: 98, suffix: '%', icon: Award },
  { label: 'Years of Experience', value: 15, suffix: '+', icon: Target },
  { label: 'Investment Professionals', value: 50, suffix: '+', icon: Users },
];

const services = [
  {
    title: 'Portfolio Management ',
    description: 'Customized investment strategies tailored to your financial goals and risk tolerance.',
    icon: BarChart3,
    features: ['Custom Strategies', 'Risk Assessment', 'Performance Tracking']
  },
  {
    title: 'Wealth Planning',
    description: 'Comprehensive financial planning to secure your family\'s future across generations.',
    icon: Target,
    features: ['Estate Planning', 'Tax Optimization', 'Retirement Planning']
  },
  {
    title: 'Risk Management',
    description: 'Advanced risk assessment and mitigation strategies to protect your investments.',
    icon: Shield,
    features: ['Risk Analysis', 'Diversification', 'Market Protection']
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, Tech Innovations',
    content: 'ABN CAPITAL transformed our investment approach. Their personalized strategies delivered exceptional returns while managing risk effectively.',
    rating: 5,
    image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg'
  },
  {
    name: 'Michael Chen',
    role: 'Entrepreneur',
    content: 'The team\'s expertise and dedication to client success is unmatched. They\'ve been instrumental in achieving our financial goals.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Investment Director',
    content: 'Professional, knowledgeable, and results-driven. ABN CAPITAL consistently exceeds expectations with their innovative approach.',
    rating: 5,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-black/60">
          <div className="relative w-full h-full">
            <Image
              src={Traffic}
              alt="Hero background"
              fill
              priority
              className="object-cover blur-sm"
            />
          </div>


          {/* Video Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/50 to-blue-100/40" /> */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-4xl mx-auto"
          >
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge variant="outline" className="mb-6 px-4 py-2 text-sm border-white/30 text-white bg-white/10 backdrop-blur-sm">
                Premier Portfolio Management
              </Badge>
            </motion.div> */}
            
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Investing in India’s 
              <motion.span 
                className="block bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Frenzied Growth
              </motion.span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Investing where Chaos sparks Opportunity… 
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button size="lg" className="group relative overflow-hidden bg-white text-gray-900 hover:bg-white/90 shadow-xl" asChild>
                <Link href="/contact">
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white to-gray-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group border-white/50 dark:text-white hover:bg-white hover:text-gray-900 dark:hover:text-black backdrop-blur-sm" asChild>
                <Link href="/services">
                  Learn More
                </Link>
              </Button>
            </motion.div>
            <motion.div>

            </motion.div>
            {/* <ContactCopyEmail/> */}
          </motion.div>
        </div>


      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="gradient-text">Thousands</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our track record speaks for itself
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="text-center group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
                <CardContent className="p-6">
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <stat.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      duration={2.5}
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </StaggerContainer>
        </div>
      </section> */}

      {/* Services Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial solutions designed to help you achieve your investment objectives.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-card/50 overflow-hidden relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <CardContent className="p-6 relative z-10">
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <service.icon className="h-6 w-6" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by industry leaders and successful investors
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <motion.img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal direction="up" className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of satisfied clients who trust ABN CAPITAL with their wealth management needs.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="secondary" className="group relative overflow-hidden" asChild>
                <Link href="/contact">
                  <span className="relative z-10">Schedule Consultation</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section> */}
      <footer className="w-full border-t bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs sm:text-sm text-center text-muted-foreground">
          (C) ABN Capital Asset Managers LLP. SEBI Registered Portfolio Management Serivce (PMS) Number INP000009685. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}