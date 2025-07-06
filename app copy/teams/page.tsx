"use client"

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Linkedin, Mail, Award, GraduationCap, Briefcase, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer } from '@/components/scroll-reveal';
import { AnimatedCounter } from '@/components/animated-counter';
import AnimatedTeamShowcase from '@/components/animated-team-showcase';

const teamMembers = [
  {
    id: 1,
    name: 'Aniket Nikumb',
    position: 'Chief Investment Officer',
    image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg',
    bio: 'Sarah brings over 15 years of institutional investment experience, having previously managed portfolios at leading investment firms. She holds a CFA designation and MBA from Wharton.',
    expertise: ['Portfolio Strategy', 'Risk Management', 'ESG Investing'],
    education: 'CA, CFA',
    achievements: ['CFA Charterholder', 'Top 40 Under 40 Finance Professional', 'Published researcher on sustainable investing'],
    email: 'aniket@abncapital.in',
    linkedin: 'https://www.linkedin.com/in/aniketnikumb/?originalSubdomain=in',
    color: 'from-blue-500/10 to-blue-600/10'
  },
  // {
  //   id: 2,
  //   name: 'Michael Rodriguez',
  //   position: 'Senior Portfolio Manager',
  //   image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
  //   bio: 'Michael specializes in quantitative analysis and algorithmic trading strategies. His innovative approach to market analysis has consistently delivered superior risk-adjusted returns.',
  //   expertise: ['Quantitative Analysis', 'Algorithmic Trading', 'Market Research'],
  //   education: 'PhD Financial Engineering, Stanford University',
  //   achievements: ['Published 20+ research papers', 'Developed proprietary trading algorithms', 'Winner of CFA Institute Research Challenge'],
  //   email: 'michael.rodriguez@abncapital.com',
  //   linkedin: 'https://linkedin.com/in/michaelrodriguez',
  //   color: 'from-green-500/10 to-green-600/10'
  // },
  // {
  //   id: 3,
  //   name: 'Emily Watson',
  //   position: 'Head of Client Relations',
  //   image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
  //   bio: 'Emily ensures our clients receive exceptional service and customized investment solutions. Her client-first approach has earned her recognition as a top relationship manager.',
  //   expertise: ['Client Strategy', 'Wealth Planning', 'Relationship Management'],
  //   education: 'Master of Finance, MIT Sloan',
  //   achievements: ['Client Service Excellence Award', 'Certified Wealth Manager', '99% client satisfaction rating'],
  //   email: 'emily.watson@abncapital.com',
  //   linkedin: 'https://linkedin.com/in/emilywatson',
  //   color: 'from-purple-500/10 to-purple-600/10'
  // },
  // {
  //   id: 4,
  //   name: 'David Kim',
  //   position: 'Technology Director',
  //   image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
  //   bio: 'David leads our technology initiatives, developing cutting-edge fintech solutions that give our clients and team competitive advantages in the market.',
  //   expertise: ['Financial Technology', 'Data Analytics', 'System Architecture'],
  //   education: 'MS Computer Science, Carnegie Mellon',
  //   achievements: ['Led development of AI trading platform', 'Former tech lead at major fintech companies', 'Multiple fintech patents'],
  //   email: 'david.kim@abncapital.com',
  //   linkedin: 'https://linkedin.com/in/davidkim',
  //   color: 'from-orange-500/10 to-orange-600/10'
  // },
  // {
  //   id: 5,
  //   name: 'Lisa Thompson',
  //   position: 'Head of Research',
  //   image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
  //   bio: 'Lisa oversees our research division, providing deep market insights and investment recommendations that drive our portfolio strategies.',
  //   expertise: ['Market Research', 'Economic Analysis', 'Investment Strategy'],
  //   education: 'PhD Economics, Harvard University',
  //   achievements: ['Former Federal Reserve economist', 'Regularly featured in financial media', 'Author of "Modern Portfolio Theory in Practice"'],
  //   email: 'lisa.thompson@abncapital.com',
  //   linkedin: 'https://linkedin.com/in/lisathompson',
  //   color: 'from-red-500/10 to-red-600/10'
  // },
  // {
  //   id: 6,
  //   name: 'James Foster',
  //   position: 'Risk Management Director',
  //   image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg',
  //   bio: 'James specializes in comprehensive risk assessment and management, ensuring our investment strategies maintain optimal risk-return profiles.',
  //   expertise: ['Risk Assessment', 'Compliance', 'Regulatory Affairs'],
  //   education: 'Master of Risk Management, NYU Stern',
  //   achievements: ['Certified Risk Manager (CRM)', 'Former bank risk officer', 'Risk management thought leader'],
  //   email: 'james.foster@abncapital.com',
  //   linkedin: 'https://linkedin.com/in/jamesfoster',
  //   color: 'from-teal-500/10 to-teal-600/10'
  // }
];

const teamStats = [
  { value: 150, suffix: '+', label: 'Years Combined Experience' },
  { value: 25, suffix: '+', label: 'Professional Certifications' },
  { value: 12, suffix: '+', label: 'Industry Awards' },
  { value: 100, suffix: '%', label: 'Client-Focused Approach' }
];

export default function Teams() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  return (
    <div className="min-h-screen pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 0.5, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        >
          <div className="w-full h-full bg-[url('https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg')] bg-cover bg-center" />
        </motion.div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6">Our Leadership Team</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the Experts Behind
              <span className="gradient-text block">Your Success</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our diverse team of investment professionals brings together decades of experience 
              from top-tier financial institutions, combining expertise with innovation to deliver 
              exceptional results for our clients.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Animated Team Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Leadership <span className="gradient-text">Spotlight</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know our team leaders through their own words and expertise.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <AnimatedTeamShowcase />
          </ScrollReveal>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore detailed profiles of all our team members and their expertise.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-gradient-to-br ${member.color} relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  <CardContent className="p-0 relative z-10">
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        whileHover={{ scale: 1.05 }}
                      />
                      
                      {/* Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                      
                      {/* Social Links */}
                      <motion.div
                        className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                      >
                        <div className="flex space-x-2">
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                              <Mail className="h-4 w-4" />
                            </Button>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                              <Linkedin className="h-4 w-4" />
                            </Button>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="p-6">
                      <motion.h3
                        className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {member.name}
                      </motion.h3>
                      <p className="text-primary font-medium mb-3">{member.position}</p>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{member.bio}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.1 }}
                          >
                            <Badge variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                        {member.expertise.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{member.expertise.length - 2} more
                          </Badge>
                        )}
                      </div>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button 
                              variant="outline" 
                              className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" 
                              onClick={() => setSelectedMember(member)}
                            >
                              View Profile
                            </Button>
                          </motion.div>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{member.name}</DialogTitle>
                          </DialogHeader>
                          <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="flex items-start space-x-4">
                              <motion.img
                                src={member.image}
                                alt={member.name}
                                className="w-24 h-24 rounded-full object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                              />
                              <div>
                                <h3 className="text-lg font-semibold text-primary">{member.position}</h3>
                                <p className="text-muted-foreground">{member.education}</p>
                                <div className="flex space-x-2 mt-2">
                                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button size="sm" variant="outline" className="h-8">
                                      <Mail className="h-4 w-4 mr-2" />
                                      Email
                                    </Button>
                                  </motion.div>
                                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button size="sm" variant="outline" className="h-8">
                                      <Linkedin className="h-4 w-4 mr-2" />
                                      LinkedIn
                                    </Button>
                                  </motion.div>
                                </div>
                              </div>
                            </div>
                            
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 }}
                            >
                              <h4 className="font-semibold mb-2 flex items-center">
                                <Briefcase className="h-4 w-4 mr-2" />
                                Biography
                              </h4>
                              <p className="text-muted-foreground">{member.bio}</p>
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              <h4 className="font-semibold mb-2 flex items-center">
                                <Star className="h-4 w-4 mr-2" />
                                Expertise
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {member.expertise.map((skill, skillIndex) => (
                                  <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + skillIndex * 0.1 }}
                                  >
                                    <Badge variant="secondary">{skill}</Badge>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              <h4 className="font-semibold mb-2 flex items-center">
                                <GraduationCap className="h-4 w-4 mr-2" />
                                Education
                              </h4>
                              <p className="text-muted-foreground">{member.education}</p>
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 }}
                            >
                              <h4 className="font-semibold mb-2 flex items-center">
                                <Award className="h-4 w-4 mr-2" />
                                Key Achievements
                              </h4>
                              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                {member.achievements.map((achievement, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + idx * 0.1 }}
                                  >
                                    {achievement}
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          </motion.div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Team <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our team's collective expertise and achievements
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </motion.div>
                <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}