"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

// Use images from /public via absolute path strings
const LOCAL_IMG = "/assets/IMG.JPG.jpg";

const teamMembers = [
  {
    quote:
      "Focused on building resilient systems and seamless client experiences. Passionate about clean execution and measurable outcomes.",
    name: "Aniket Nikumb",
    designation: "Engineering",
    src: LOCAL_IMG,
  },
];

export default function AnimatedTeamShowcase() {
  return <AnimatedTestimonials testimonials={teamMembers} autoplay={true} />;
}