"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { ScrollReveal, StaggerContainer } from '@/components/scroll-reveal';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Location',
    details: ['B 308, Damji Shamji Corporate Square, Laxmi Nagar, Ghatkopar E, Mumbai 75',],
    color: 'text-blue-600',
    bgColor: 'from-blue-500/10 to-blue-600/10'
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 8169305682', 'Mon-Fri 9:00 AM - 6:00 PM IST'],
    color: 'text-green-600',
    bgColor: 'from-green-500/10 to-green-600/10'
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['contact@abncapital.com', 'We respond within 24 hours'],
    color: 'text-purple-600',
    bgColor: 'from-purple-500/10 to-purple-600/10'
  },
];

const benefits = [
  'Personalized investment strategies',
  '24/7 client support',
  'Transparent fee structure',
  'Award-winning portfolio management',
  'Regulatory compliance and security'
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    investmentAmount: '',
    serviceType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      // Attempt to read text first to avoid "Unexpected end of JSON input"
      const raw = await response.text();
      let parsed: any = null;
      try {
        parsed = raw ? JSON.parse(raw) : null;
      } catch (_) {
        // not JSON – keep `parsed` as null
      }
  
      if (response.ok && parsed?.success) {
        toast.success("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          investmentAmount: "",
          serviceType: "",
          message: "",
        });
      } else {
        const serverMsg = parsed?.error || raw || "Failed to send message. Please try again later.";
        toast.error(serverMsg);
        console.error("/api/send-email error:", serverMsg);
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            scale: [1, 1.03, 1],
            rotate: [0, 0.3, 0],
          }}
          transition={{ duration: 18, repeat: Infinity }}
        >
          <div className="w-full h-full bg-[url('https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg')] bg-cover bg-center" />
        </motion.div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6">Get In Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Discuss Your
              <span className="gradient-text block">Investment Goals</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to take control of your financial future? Contact our team of investment 
              professionals to schedule a consultation and learn how we can help you achieve 
              your wealth management objectives.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`text-center group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br ${info.bgColor} relative overflow-hidden`}>
                  <motion.div
                    className="absolute top-2 right-2 w-6 h-6 bg-white/10 rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                  
                  <CardContent className="p-6 relative z-10">
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-background shadow-md flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <info.icon className={`h-6 w-6 ${info.color}`} />
                    </motion.div>
                    <h3 className="font-semibold mb-3 group-hover:text-primary transition-colors">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <motion.p
                        key={idx}
                        className="text-sm text-muted-foreground mb-1"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        {detail}
                      </motion.p>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-0 shadow-2xl relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="mt-1 transition-all duration-300 focus:scale-105"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="mt-1 transition-all duration-300 focus:scale-105"
                          />
                        </motion.div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-1 transition-all duration-300 focus:scale-105"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-1 transition-all duration-300 focus:scale-105"
                          />
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="mt-1 transition-all duration-300 focus:scale-105"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="mt-1 transition-all duration-300 focus:scale-105"
                          placeholder="Tell us about your investment goals and how we can help..."
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          className="w-full group relative overflow-hidden"
                          disabled={isSubmitting}
                          size="lg"
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              />
                              Sending...
                            </>
                          ) : (
                            <>
                              <span className="relative z-10">Send Message</span>
                              <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                              />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>

            {/* Map & Additional Info */}
            <ScrollReveal direction="right" className="space-y-8">
              {/* Map */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-0 shadow-2xl overflow-hidden">
                  <div className="h-[58vh] bg-muted relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.3865076378374!2d72.9162142!3d19.090692699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7efb9449357%3A0xb2f99b5fbea7af95!2sDamji%20shamji%20corporate%20square!5e0!3m2!1sen!2sin!4v1758447175936!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    />
                  </div>
                </Card>
              </motion.div>

             
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}