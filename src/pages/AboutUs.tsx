import React from "react";
import { PageTransition } from "@/components/PageTransition";
import { MinimalistHero } from "@/components/ui/minimalist-hero";
import MeetOurMembers from "@/components/ui/meet-our-members";

// Lightweight, inline SVG components for standard brand icons
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const AboutUs: React.FC = () => {
  const navLinks: { label: string; href: string }[] = [];

  const socialLinks = [
    { icon: FacebookIcon, href: "https://facebook.com/brancovenn" },
    { icon: InstagramIcon, href: "https://instagram.com/brancovenn" },
    { icon: TwitterIcon, href: "https://x.com/brancovenn" },
    { icon: LinkedinIcon, href: "https://linkedin.com/brancovenn" },
    { icon: GithubIcon, href: "https://github.com/brancovenn" },
  ];

  // Configured team member items for Meet Our Members section (photo, name, and role only)
  const teamMembers = [
    {
      author: "Aayush Kr. Gupta",
      role: "Founder, CEO",
      imageSrc: "/asset image/aayushkrgupta.jpeg",
      roleGradient: "from-cyan-400 via-blue-500 to-indigo-500",
    },
    {
      author: "Karan Kabdal",
      role: "Founder, CFO",
      imageSrc: "",
      roleGradient: "from-emerald-400 via-teal-500 to-cyan-500",
    },
    {
      author: "Shubham Kumar",
      role: "Backend Developer, COO",
      imageSrc: "",
      roleGradient: "from-orange-400 via-red-500 to-pink-500",
    }
  ];

  return (
    <PageTransition>
      <div className="w-full bg-black text-white relative min-h-screen pt-20 pb-20 overflow-hidden">
        
        {/* Subtle Background Glows */}
        <div className="absolute top-0 inset-x-0 h-[500px] pointer-events-none bg-gradient-to-b from-white/[0.02] to-transparent z-0" />
        <div className="absolute -left-48 top-1/3 w-96 h-96 bg-neutral-900/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -right-48 top-2/3 w-96 h-96 bg-neutral-900/40 rounded-full blur-[120px] pointer-events-none" />

        {/* Minimalist Hero Section */}
        <div className="relative z-10">
          <MinimalistHero
            logoText="BRANCO VENN"
            navLinks={navLinks}
            mainText="We engineer low-latency, immersive digital systems. By bridging hardware boundaries through software innovation, we create technology that feels entirely invisible."
            readMoreLink="/mission"
            imageSrc="/asset image/letsrace.png"
            imageAlt="Let's race - Branco Venn racing theme"
            overlayText={{
              part1: "BUILT FOR",
              part2: "GAMERS.",
            }}
            socialLinks={socialLinks}
            locationText="Global Operations"
            className="h-auto md:h-screen min-h-[600px] py-12 md:py-24"
          />
        </div>

        {/* Meet Our Members Divider & Header */}
        <section className="relative z-10 max-w-[1440px] mx-auto px-6">
          {/* Smooth vertical fade spacer replacing the thin divider */}
          <div className="w-full h-32 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none mb-12" />

          <div className="text-center mb-12 select-none">
            <span className="text-[10px] font-mono tracking-[0.4em] text-neutral-500 uppercase block mb-3">
              Core Team
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase">
              Meet Our Members
            </h2>
            <p className="mt-4 max-w-md mx-auto text-sm text-neutral-400 font-light">
              The engineering and executive leadership driving Branco Venn's low latency digital solutions.
            </p>
          </div>

          {/* Core Team Members Section */}
          <MeetOurMembers members={teamMembers} />
        </section>

      </div>
    </PageTransition>
  );
};
