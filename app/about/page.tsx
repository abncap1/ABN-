"use client"

import React from 'react';
import { FullPageStickyScroll, FullPageSection } from '@/components/ui/full-page-sticky-scroll';
import {
  IntroSection,
  MissionVisionSection,
  CoreValuesSection,
  TimelineSection,
  TeamExcellenceSection,
  CallToActionSection
} from '@/components/about-sections';
import CompanyTimeline from '@/components/company-timeline';
import { ScrollReveal } from '@/components/scroll-reveal';
import { motion } from 'framer-motion';

const aboutSections: FullPageSection[] = [
  {
    id: 'intro',
    title: 'Welcome to ABN CAPITAL',
    backgroundImage: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
    backgroundOverlay: 'linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(17, 24, 39, 0.8) 100%)',
    textColor: 'light',
    animation: 'fadeUp',
    content: <IntroSection />,
    contentPosition: 'overImage'
  },
  {
    id: 'mission-vision',
    title: 'Our Mission & Vision',
    backgroundImage: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg',
    backgroundOverlay: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(147, 51, 234, 0.8) 100%)',
    textColor: 'light',
    animation: 'slideLeft',
    content: <MissionVisionSection />,
    contentPosition: 'overImage'
  },
  {
    id: 'core-values',
    title: 'Our Core Values',
    backgroundImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    backgroundOverlay: 'linear-gradient(135deg, rgba(16, 185, 129, 0.8) 0%, rgba(59, 130, 246, 0.8) 100%)',
    textColor: 'light',
    animation: 'scale',
    content: <CoreValuesSection />,
    contentPosition: 'overImage'
  },
  {
    id: 'timeline',
    title: 'Our Journey',
    backgroundImage: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    backgroundOverlay: 'linear-gradient(135deg, rgba(139, 69, 19, 0.8) 0%, rgba(30, 58, 138, 0.8) 100%)',
    textColor: 'light',
    animation: 'slideRight',
    content: <TimelineSection />,
    contentPosition: 'overImage'
  },
  {
    id: 'team-excellence',
    title: 'Team Excellence',
    backgroundImage: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
    backgroundOverlay: 'linear-gradient(135deg, rgba(147, 51, 234, 0.8) 0%, rgba(239, 68, 68, 0.8) 100%)',
    textColor: 'light',
    animation: 'fadeUp',
    content: <TeamExcellenceSection />,
    contentPosition: 'overImage'
  },
  {
    id: 'call-to-action',
    title: 'Get Started Today',
    backgroundImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
    backgroundOverlay: 'linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(30, 58, 138, 0.9) 100%)',
    textColor: 'light',
    animation: 'fadeUp',
    content: <CallToActionSection />,
    contentPosition: 'overImage'
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      
      {/* Detailed Timeline Section */}
      <section className="bg-background">
        <ScrollReveal direction="up" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Complete Journey</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore the detailed timeline of ABN CAPITAL's growth, innovations, and achievements 
                that have established us as a leader in portfolio management and wealth advisory services.
              </p>
            </div>
          </div>
          <CompanyTimeline />
        </ScrollReveal>
      </section>

      {/* Additional Company Information */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="gradient-text">ABN CAPITAL</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence, innovation, and client success sets us apart in the investment management industry.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Proven Track Record",
                description: "Over 15 years of consistent performance and client satisfaction with a 98% retention rate.",
                icon: "📈",
                stats: "98% Client Retention"
              },
              {
                title: "Global Presence",
                description: "Offices in New York, London, and Singapore serving clients across multiple continents.",
                icon: "🌍",
                stats: "3 Global Offices"
              },
              {
                title: "Expert Team",
                description: "50+ investment professionals with advanced degrees and industry certifications.",
                icon: "👥",
                stats: "50+ Professionals"
              },
              {
                title: "Technology Innovation",
                description: "Proprietary AI-driven investment platform and cutting-edge analytics tools.",
                icon: "🚀",
                stats: "$10M+ Tech Investment"
              },
              {
                title: "Regulatory Compliance",
                description: "Fully licensed and regulated across all jurisdictions with highest security standards.",
                icon: "🛡️",
                stats: "100% Compliant"
              },
              {
                title: "Client-Centric Approach",
                description: "Personalized service with dedicated relationship managers and 24/7 support.",
                icon: "💎",
                stats: "24/7 Support"
              }
            ].map((item, index) => (
              <ScrollReveal key={item.title} direction="up" delay={index * 0.1}>
                <div className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                  <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                    {item.stats}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Awards & <span className="gradient-text">Recognition</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our excellence has been recognized by leading industry organizations and publications worldwide.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                year: "2024",
                award: "Top Portfolio Management Firm",
                organization: "Financial Times Excellence Awards",
                description: "Recognized for outstanding performance and innovation"
              },
              {
                year: "2023",
                award: "Best Client Service",
                organization: "Investment Management Awards",
                description: "Honored for exceptional client relationship management"
              },
              {
                year: "2022",
                award: "Innovation in Fintech",
                organization: "Technology Excellence Awards",
                description: "Awarded for breakthrough AI investment platform"
              },
              {
                year: "2021",
                award: "Sustainable Investing Leader",
                organization: "ESG Investment Awards",
                description: "Leading the way in responsible investment strategies"
              }
            ].map((award, index) => (
              <ScrollReveal key={award.year} direction="up" delay={index * 0.1}>
                <div className="text-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 border border-border/50">
                  <div className="text-2xl font-bold text-primary mb-2">{award.year}</div>
                  <h3 className="text-lg font-semibold mb-2">{award.award}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{award.organization}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{award.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* Investment Philosophy Section with Background Image */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
            alt="Investment philosophy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Investment Philosophy
            </h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
              We believe in a disciplined, research-driven approach to investment management that 
              prioritizes long-term wealth creation while managing downside risk.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Research-Driven",
                  description: "Every investment decision is backed by rigorous analysis and market research"
                },
                {
                  title: "Risk-Conscious",
                  description: "We prioritize capital preservation while seeking attractive returns"
                },
                {
                  title: "Long-Term Focus",
                  description: "Our strategies are designed for sustainable wealth creation over time"
                }
              ].map((principle, index) => (
                <motion.div
                  key={principle.title}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-lg font-semibold mb-3">{principle.title}</h3>
                  <p className="text-sm opacity-90">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}