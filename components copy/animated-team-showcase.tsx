"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const teamMembers = [
  {
    quote: "Leading ABN CAPITAL's investment strategies with over 15 years of institutional experience. I specialize in ESG investing and risk management, having previously managed portfolios at leading investment firms. My approach combines quantitative analysis with sustainable investment principles.",
    name: "Sarah Chen",
    designation: "Chief Investment Officer",
    src: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg",
  },
  {
    quote: "I bring innovative quantitative analysis and algorithmic trading strategies to our portfolio management. My PhD in Financial Engineering from Stanford helps me develop proprietary trading algorithms that consistently deliver superior risk-adjusted returns for our clients.",
    name: "Michael Rodriguez",
    designation: "Senior Portfolio Manager",
    src: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
  },
  {
    quote: "Ensuring exceptional client service is my passion. I work closely with each client to understand their unique investment goals and develop customized wealth planning strategies. My client-first approach has earned recognition as a top relationship manager in the industry.",
    name: "Emily Watson",
    designation: "Head of Client Relations",
    src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  },
  {
    quote: "I lead our technology initiatives, developing cutting-edge fintech solutions that give our clients competitive advantages. My background includes leading development of AI trading platforms and holding multiple fintech patents from my time at major tech companies.",
    name: "David Kim",
    designation: "Technology Director",
    src: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
  },
  {
    quote: "As Head of Research, I provide deep market insights and investment recommendations that drive our portfolio strategies. My PhD in Economics from Harvard and experience as a Federal Reserve economist help me deliver comprehensive market analysis for our investment decisions.",
    name: "Lisa Thompson",
    designation: "Head of Research",
    src: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
  },
  {
    quote: "Risk management is crucial for successful investing. I specialize in comprehensive risk assessment and regulatory compliance, ensuring our investment strategies maintain optimal risk-return profiles. My experience as a former bank risk officer brings institutional-level risk management to our clients.",
    name: "James Foster",
    designation: "Risk Management Director",
    src: "https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg",
  },
];

export default function AnimatedTeamShowcase() {
  return <AnimatedTestimonials testimonials={teamMembers} autoplay={true} />;
}