import React from "react";
import { Link } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import { GlassButton } from "@/components/ui/apple-tahoe-liquid-glass-button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useScroll, useTransform, motion } from "framer-motion";
import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";
import type { Frame } from "@/components/ui/dynamic-frame-layout";

const socialFrames: Frame[] = [
  {
    id: 1,
    video: "/asset video/social media/Instagram.gif",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1.1,
    isHovered: false,
    socialName: "Instagram",
    socialHandle: "@brancovenn",
    socialHref: "https://instagram.com/brancovenn",
    socialIcon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    )
  },
  {
    id: 2,
    video: "/asset video/social media/Youtube.gif",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1.1,
    isHovered: false,
    socialName: "YouTube",
    socialHandle: "Branco Venn",
    socialHref: "https://youtube.com/@brancovenn",
    socialIcon: (
      <svg viewBox="0 0 24 24" className="h-8 w-10 text-white" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )
  },
  {
    id: 3,
    video: "/asset%20video/hud.mp4",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1.1,
    isHovered: false,
    socialName: "Pro Control",
    socialHandle: "Sim Gamepad",
    socialHref: "/product/sim-gamepad"
  },
  {
    id: 4,
    video: "/asset video/social media/X twitter.gif",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1.1,
    isHovered: false,
    socialName: "X (Twitter)",
    socialHandle: "@brancovenn",
    socialHref: "https://x.com/brancovenn",
    socialIcon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
  {
    id: 5,
    video: "/asset video/social media/Linkedin.gif",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1.1,
    isHovered: false,
    socialName: "LinkedIn",
    socialHandle: "Branco Venn",
    socialHref: "https://linkedin.com/brancovenn",
    socialIcon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    id: 6,
    video: "/asset video/social media/Discord logo.gif",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1.1,
    isHovered: false,
    socialName: "Discord",
    socialHandle: "Branco Venn",
    socialHref: "https://discord.gg/brancovenn",
    socialIcon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="currentColor">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
      </svg>
    )
  },
  {
    id: 7,
    video: "/asset%20video/f1.mp4",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    mediaSize: 1.1,
    isHovered: false,
    socialName: "Sim Ecosystem",
    socialHandle: "Racing Ready",
    socialHref: "/product/sim-gamepad"
  },
  {
    id: 8,
    video: "/asset video/social media/Tiktok.gif",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    mediaSize: 1.1,
    isHovered: false,
    socialName: "TikTok",
    socialHandle: "@brancovenn",
    socialHref: "https://tiktok.com/@brancovenn",
    socialIcon: (
      <div className="relative h-7 w-7">
        <svg viewBox="0 0 24 24" className="absolute inset-0 h-full w-full translate-x-[1.5px] translate-y-[0.5px]" fill="#FE2C55">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.22-1.15 4.39-2.95 5.6-1.8 1.25-4.14 1.55-6.17.83-2.06-.69-3.71-2.42-4.15-4.57-.45-2.09-.07-4.32 1.18-6.13 1.25-1.84 3.42-2.92 5.63-3.13v4.05c-1.43.08-2.73 1.05-3.19 2.44-.47 1.4.05 3.02 1.23 3.84 1.16.85 2.82.9 4.04.14 1.22-.72 1.94-2.04 1.98-3.46.03-3.85.01-7.7.01-11.55-.01-1.61.02-3.21-.01-4.82z" />
        </svg>
        <svg viewBox="0 0 24 24" className="absolute inset-0 h-full w-full -translate-x-[1.5px] -translate-y-[0.5px]" fill="#25F4EE">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.22-1.15 4.39-2.95 5.6-1.8 1.25-4.14 1.55-6.17.83-2.06-.69-3.71-2.42-4.15-4.57-.45-2.09-.07-4.32 1.18-6.13 1.25-1.84 3.42-2.92 5.63-3.13v4.05c-1.43.08-2.73 1.05-3.19 2.44-.47 1.4.05 3.02 1.23 3.84 1.16.85 2.82.9 4.04.14 1.22-.72 1.94-2.04 1.98-3.46.03-3.85.01-7.7.01-11.55-.01-1.61.02-3.21-.01-4.82z" />
        </svg>
        <svg viewBox="0 0 24 24" className="absolute inset-0 h-full w-full" fill="white">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.22-1.15 4.39-2.95 5.6-1.8 1.25-4.14 1.55-6.17.83-2.06-.69-3.71-2.42-4.15-4.57-.45-2.09-.07-4.32 1.18-6.13 1.25-1.84 3.42-2.92 5.63-3.13v4.05c-1.43.08-2.73 1.05-3.19 2.44-.47 1.4.05 3.02 1.23 3.84 1.16.85 2.82.9 4.04.14 1.22-.72 1.94-2.04 1.98-3.46.03-3.85.01-7.7.01-11.55-.01-1.61.02-3.21-.01-4.82z" />
        </svg>
      </div>
    )
  },
  {
    id: 9,
    video: "/asset%20video/dashcam.mov",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    mediaSize: 1.1,
    isHovered: false,
    socialName: "Zero Lag",
    socialHandle: "100% Telemetry",
    socialHref: "/product/sim-gamepad"
  }
];

export const Index: React.FC = () => {
  // Mobile Phone Scroll Animation setup
  const phoneContainerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress: phoneScrollProgress } = useScroll({
    target: phoneContainerRef,
    offset: ["start end", "end start"],
  });

  const phoneRotate = useTransform(phoneScrollProgress, [0, 0.45], [15, 0]);
  const phoneScale = useTransform(phoneScrollProgress, [0, 0.45], [0.8, 1]);
  const phoneTranslateY = useTransform(phoneScrollProgress, [0, 0.45], [80, 0]);

  return (
    <PageTransition>
      {/* A. Hero Section */}
      <section className="relative min-h-screen h-screen w-full bg-black overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src="/asset%20video/dashcam.mov"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* Inner wrapper */}
        <div className="relative h-full w-full max-w-[1320px] mx-auto px-4 select-none">
          {/* Stacked left-aligned Hero content using original font styles */}
          <div className="absolute left-4 sm:left-6 md:left-12 bottom-[8%] sm:bottom-[10%] md:bottom-[12%] max-w-3xl select-none flex flex-col justify-end gap-1">
            <h1 className="hero-title text-white font-medium text-[14vw] md:text-[10vw] uppercase leading-[0.85] tracking-tighter">
              SIM
            </h1>
            <h1 className="hero-title text-white font-medium text-[14vw] md:text-[10vw] uppercase leading-[0.85] tracking-tighter bg-gradient-to-r from-white via-white to-white/75 bg-clip-text text-transparent">
              GAMEPAD
            </h1>

            <div className="space-y-1.5 select-text pt-4 pb-2">
              <p className="text-[13px] sm:text-[18px] leading-relaxed text-white/90 font-light">
                Turn your phone into a powerful PC controller.
              </p>
              <p className="text-[13px] sm:text-[18px] leading-relaxed text-white font-medium">
                Zero latency. Fully customizable.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-3 select-none">
              <a href="#" className="cursor-pointer">
                <GlassButton
                  size="lg"
                  glassColor="rgba(255, 255, 255, 0.05)"
                  className="hover:scale-105 transition-transform"
                >
                  <svg className="w-5 h-5 fill-none stroke-current stroke-2 text-white/90" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="12" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  <span className="font-light">Download Desktop</span>
                </GlassButton>
              </a>

              <a href="#" className="cursor-pointer">
                <GlassButton
                  size="lg"
                  glassColor="rgba(255, 255, 255, 0.05)"
                  className="hover:scale-105 transition-transform"
                >
                  <svg className="w-5 h-5 fill-none stroke-current stroke-2 text-white/90" viewBox="0 0 24 24">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                  <span className="font-light">Get Mobile App</span>
                </GlassButton>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black" />
      </section>

      {/* B. SecuritySection */}
      <section className="relative min-h-[600px] h-screen w-full overflow-hidden bg-black flex items-center justify-center">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_072418_508a7d2e-396d-4f6f-9d42-ec920fcf7755.mp4"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        {/* Top fade overlay */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black to-transparent z-10" />

        {/* Inner wrapper */}
        <div className="relative h-full w-full max-w-[1100px] mx-auto px-4 z-10">
          {/* Floating center pill */}
          <div className="absolute top-6 sm:top-10 left-1/2 -translate-x-1/2 z-20 bg-neutral-900/80 backdrop-blur rounded-full p-2 sm:p-3 border border-white/10 flex items-center gap-2">
            <button className="text-white/90 text-xs sm:text-sm px-4 sm:px-7 py-2 sm:py-3 rounded-full hover:text-white transition-colors whitespace-nowrap font-light cursor-pointer">
              confirm real person
            </button>
            <Link
              to="/product/sim-gamepad"
              className="text-black text-xs sm:text-sm px-4 sm:px-7 py-2 sm:py-3 rounded-full font-medium whitespace-nowrap transition-transform active:scale-95 shadow-md"
              style={{
                background: "linear-gradient(90deg, #FA8453 0%, #F8C9B2 100%)",
              }}
            >
              run demo
            </Link>
          </div>

          {/* Left paragraph */}
          <p className="absolute left-4 sm:left-6 md:left-16 top-[62%] sm:top-[56%] max-w-[280px] sm:max-w-[440px] text-white/80 text-[13px] sm:text-[18px] leading-relaxed font-light">
            shielding users info with premier tech, granting them with safety in all place
          </p>

          {/* Right paragraph */}
          <p className="absolute right-4 sm:right-6 md:right-16 top-[26%] sm:top-[34%] max-w-[280px] sm:max-w-[500px] text-white/95 text-[13px] sm:text-[18px] leading-relaxed font-light">
            By teaming up with a defender service, a business can dramatically improve the safeguard of its important info. This covers applying strong obfuscation protocols, gateway barriers, and observation engines to shield against unauthorized entries, info escapes, and malicious cyberhacks.
          </p>
        </div>

        {/* Bottom fade overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black" />
      </section>

      {/* C. CompaniesSection */}
      <section className="relative w-full bg-black px-4 sm:px-6 md:px-10 py-12 sm:py-20 flex flex-col items-center">
        <div className="max-w-[1400px] w-full">
          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {/* Card 1: Apex */}
            <div className="relative h-24 sm:h-32 md:h-36 rounded-2xl bg-neutral-950/80 border border-white/5 overflow-hidden flex items-center justify-center group hover:bg-neutral-900 transition-colors duration-300">
              {/* Blur blob */}
              <div className="absolute -top-24 -left-24 h-40 w-40 rounded-full bg-[#1e3a8a] blur-3xl opacity-40 group-hover:scale-110 transition-transform duration-500" />
              {/* SVG + wordmark */}
              <div className="relative z-10 flex items-center gap-2 text-white">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e3a8a] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l2.39 4.84L20 8l-4 3.9L17.28 18 12 15.27 6.72 18 8 11.9 4 8l5.61-1.16L12 2z" />
                </svg>
                <span className="text-white text-xl sm:text-3xl font-semibold tracking-tight">
                  Apex
                </span>
              </div>
            </div>

            {/* Card 2: forge */}
            <div className="relative h-24 sm:h-32 md:h-36 rounded-2xl bg-neutral-950/80 border border-white/5 overflow-hidden flex items-center justify-center group hover:bg-neutral-900 transition-colors duration-300">
              {/* Blur blobs */}
              <div className="absolute -top-24 -left-24 h-40 w-40 rounded-full bg-[#FA8453] blur-3xl opacity-30 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute -bottom-24 -right-24 h-40 w-40 rounded-full bg-[#F5D547] blur-3xl opacity-25 group-hover:scale-110 transition-transform duration-500" />
              {/* SVG + wordmark */}
              <div className="relative z-10 flex items-center gap-2 text-white">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#FA8453] fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.63 8.46l-4.73-2.73-.53.31 5.1 2.94v5.88l-5.1 2.94.53.3 4.73-2.72V8.46z M8.1 6.04l.53.3L3.53 9.28v5.88L8.63 18.1l-.53.3-4.73-2.72V8.46L8.1 6.04z M16.05 14.3v-4.6L12 7.4 7.95 9.7v4.6L12 16.6l4.05-2.3z M15.52 14v-4.02L12 7.96l-3.52 2.02v4.02L12 16.02l3.52-2.02z" />
                </svg>
                <span className="text-white text-xl sm:text-3xl font-semibold tracking-tight">
                  forge
                </span>
              </div>
            </div>

            {/* Card 3: Eastern Delta */}
            <div className="relative h-24 sm:h-32 md:h-36 rounded-2xl bg-neutral-950/80 border border-white/5 overflow-hidden flex items-center justify-center group hover:bg-neutral-900 transition-colors duration-300">
              {/* Blur blob */}
              <div className="absolute -bottom-24 -left-24 h-40 w-40 rounded-full bg-[#F5D547] blur-3xl opacity-30 group-hover:scale-110 transition-transform duration-500" />
              {/* SVG + wordmark */}
              <div className="relative z-10 flex items-center gap-2 text-white">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#F5D547] fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M2 4l3 16h3l2-10 2 10h3l3-16h-3l-1.5 10L12 4h-2L8.5 14 7 4H2z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-white text-base sm:text-lg font-semibold leading-none">
                    Eastern
                  </span>
                  <span className="text-white text-base sm:text-lg font-semibold leading-none">
                    Delta
                  </span>
                </div>
              </div>
            </div>

            {/* Card 4: Skybank */}
            <div className="relative h-24 sm:h-32 md:h-36 rounded-2xl bg-neutral-950/80 border border-white/5 overflow-hidden flex items-center justify-center group hover:bg-neutral-900 transition-colors duration-300">
              {/* Blur blob */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-28 h-48 w-48 rounded-full bg-[#1e3a8a] blur-3xl opacity-40 group-hover:scale-110 transition-transform duration-500" />
              {/* SVG + wordmark */}
              <div className="relative z-10 flex items-center gap-2 text-white">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e3a8a] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 2l6 3.75L6 9.5 0 5.75 6 2zm12 0l6 3.75L18 9.5l-6-3.75L18 2zM0 13.25L6 9.5l6 3.75L6 17l-6-3.75zm18-3.75l6 3.75L18 17l-6-3.75 6-3.75zM6 18.25L12 14.5l6 3.75L12 22l-6-3.75z" />
                </svg>
                <span className="text-white text-xl sm:text-3xl font-semibold tracking-tight">
                  Skybank
                </span>
              </div>
            </div>
          </div>

          {/* Below grid CTA */}
          <div className="mt-16 sm:mt-28 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 md:w-[70%] md:ml-auto">
            <p className="max-w-md text-[13px] sm:text-[18px] leading-relaxed text-white/70 font-light">
              shielding users info with premier tech, granting them with safety in all place
            </p>
            {/* Liquid Glass button for premium feel */}
            <Link to="/product/sim-gamepad" className="cursor-pointer">
              <GlassButton
                glassColor="rgba(250, 132, 83, 0.15)"
                className="hover:scale-105 transition-transform"
              >
                <span className="bg-gradient-to-r from-[#FA8453] to-[#F8C9B2] bg-clip-text text-transparent font-medium">
                  Run Demo
                </span>
              </GlassButton>
            </Link>
          </div>
        </div>
      </section>

      {/* D. BenefitsSection */}
      <section className="relative w-full bg-black px-4 sm:px-6 md:px-10 py-12 sm:py-20 flex flex-col items-center">
        <div className="max-w-[1400px] w-full">
          <h2
            className="text-white text-3xl sm:text-4xl md:text-5xl font-light text-center mb-12 sm:mb-24 uppercase"
            style={{ letterSpacing: "-0.04em" }}
          >
            Key Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1 */}
            <div className="relative h-[380px] sm:h-[460px] rounded-2xl bg-neutral-950 border border-white/5 overflow-hidden p-6 sm:p-8 flex flex-col justify-between group hover:border-white/10 transition-colors duration-300">
              {/* Blur blob */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-[420px] h-[460px] w-[460px] rounded-full bg-[#1e3a8a] blur-3xl opacity-40 group-hover:scale-105 transition-transform duration-700" />

              <h3 className="relative z-10 text-xl sm:text-2xl font-light leading-tight text-white max-w-[240px]">
                Preemptive Risks / Scouting and Reactions
              </h3>
              <p className="relative z-10 text-[13px] sm:text-[14px] leading-relaxed text-white/70 font-light max-w-[280px]">
                Defense platforms constantly observe bandwidth streams, record files, and machine behaviors to uncover unusual patterns or outliers that could signal a defensive failure.
              </p>
            </div>

            {/* Card 2: integrated video */}
            <div className="relative h-[380px] sm:h-[460px] rounded-2xl bg-neutral-950 border border-white/5 overflow-hidden flex flex-col group hover:border-white/10 transition-colors duration-300">
              {/* Top Video Region */}
              <div className="relative w-full h-[75%] overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_072701_f6a01abb-eb30-4559-9d6e-774362defbc3.mp4"
                />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent" />
              </div>
              {/* Under Video */}
              <div className="flex-1 flex items-center justify-start p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-light leading-tight text-white">
                  Know-how and Sectoral / Awareness
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative h-[380px] sm:h-[460px] rounded-2xl bg-neutral-950 border border-white/5 overflow-hidden p-6 sm:p-8 flex flex-col group hover:border-white/10 transition-colors duration-300">
              {/* Blur blob */}
              <div className="absolute -top-28 -right-28 h-56 w-56 bg-[#1e3a8a] blur-3xl opacity-40 group-hover:scale-105 transition-transform duration-700" />

              <h3 className="relative z-10 text-xl sm:text-2xl font-light leading-tight text-white max-w-[240px]">
                Preemptive Risks / Scouting and Reactions
              </h3>
              <p className="relative z-10 mt-auto text-[13px] sm:text-[14px] leading-relaxed text-white/70 font-light max-w-[320px]">
                Defense platforms constantly observe bandwidth streams, record files, and machine behaviors to uncover unusual patterns or outliers that could signal a defensive failure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrate the 3D scroll animation for showcase! */}
      <section className="relative w-full bg-black py-10 overflow-hidden flex flex-col items-center">
        <div className="max-w-[1400px] w-full">
          <ContainerScroll
            titleComponent={
              <div className="flex flex-col items-center text-center px-4 mb-6">
                <span className="text-xs uppercase tracking-widest text-[#FA8453] mb-3 bg-[#FA8453]/10 px-4 py-1.5 rounded-full">
                  Unparalleled Integrity
                </span>
                <h2 className="text-white text-3xl sm:text-5xl md:text-7xl font-light leading-tight uppercase font-sans tracking-tight">
                  Unleash absolute <br />
                  <span className="text-4xl sm:text-6xl md:text-8xl font-medium mt-2 leading-none bg-gradient-to-r from-[#FA8453] to-[#F8C9B2] bg-clip-text text-transparent block">
                    Data Sovereignty
                  </span>
                </h2>
              </div>
            }
          >
            <img
              src="/asset image/desktop.png"
              alt="Security Workspace Console"
              className="mx-auto rounded-2xl object-contain h-full w-full select-none pointer-events-none"
              draggable={false}
            />
          </ContainerScroll>

          {/* Centered Download Buttons below the 3D scroll container */}
          <div className="flex flex-col items-center gap-4 mt-6 pb-12 relative z-10 select-none">
            <span className="text-xs uppercase tracking-widest text-white/40 font-mono mb-2">
              Download the Desktop App
            </span>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="cursor-pointer">
                <GlassButton
                  size="lg"
                  glassColor="rgba(255, 255, 255, 0.05)"
                  className="hover:scale-105 transition-transform"
                >
                  <svg className="w-5 h-5 fill-current text-white/90" viewBox="0 0 24 24">
                    <path d="M0 3.449L9.75 2.1v9.451H0V3.449zM0 12.45h9.75v9.451L0 20.551V12.45zM11.25 1.899L24 0v11.55H11.25V1.899zM11.25 12.45H24v11.55l-12.75-1.9V12.45z" />
                  </svg>
                  <span className="font-light">Windows</span>
                </GlassButton>
              </a>

              <a href="#" className="cursor-pointer">
                <GlassButton
                  size="lg"
                  glassColor="rgba(255, 255, 255, 0.05)"
                  className="hover:scale-105 transition-transform"
                >
                  <svg className="w-5 h-5 fill-current text-white/90" viewBox="0 0 24 24">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.51 12.06 1.005 1.45 2.187 3.07 3.766 3.01 1.524-.06 2.098-.98 3.938-.98 1.829 0 2.365.98 3.96.948 1.623-.027 2.666-1.46 3.66-2.898 1.155-1.679 1.625-3.31 1.652-3.4-.06-.027-3.178-1.217-3.21-4.823-.026-3.02 2.478-4.47 2.59-4.54-1.41-2.074-3.597-2.316-4.37-2.37-1.947-.162-3.8.989-4.785.989zM15.983 3.863c.815-.99 1.366-2.37 1.213-3.746-1.183.05-2.616.79-3.461 1.777-.75.864-1.408 2.27-1.229 3.627 1.31.1 2.66-.667 3.477-1.658z" />
                  </svg>
                  <span className="font-light">macOS</span>
                </GlassButton>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Split Showcase Section */}
      <section className="relative w-full bg-black py-20 overflow-hidden flex flex-col items-center border-t border-white/5 select-none">
        {/* Soft color blob background */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#FA8453]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] w-full px-4 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
          
          {/* Left Side: 3D Scroll phone.png Animation (Raw, no Card container) */}
          <div 
            ref={phoneContainerRef}
            className="flex-1 flex items-center justify-center w-full min-h-[400px] sm:min-h-[500px]"
            style={{ perspective: "1000px" }}
          >
            <motion.img
              src="/asset image/phone.png"
              alt="Branco Venn Mobile App"
              style={{
                rotateX: phoneRotate,
                scale: phoneScale,
                y: phoneTranslateY,
              }}
              className="max-h-[480px] sm:max-h-[550px] w-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_50px_rgba(250,132,83,0.15)]"
              draggable={false}
            />
          </div>

          {/* Right Side: Copywriting & Play Store + App Store Buttons */}
          <div className="flex-1 space-y-8 text-left max-w-xl select-text">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#FA8453] bg-[#FA8453]/10 px-4 py-1.5 rounded-full font-mono">
                Go Mobile
              </span>
              <h2 className="text-white text-3xl sm:text-5xl font-light leading-tight uppercase tracking-tight font-sans">
                Unleash security <br />
                <span className="text-4xl sm:text-6xl font-medium bg-gradient-to-r from-[#FA8453] to-[#F8C9B2] bg-clip-text text-transparent block mt-1">
                  On the Go
                </span>
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
                Connect your mobile device to your SIM Gamepad workspace instantly. Take control of your encryption keys on the fly, manage zero-trust tunnels, and scan security QR codes to authenticate connections in seconds directly from your pocket.
              </p>
            </div>

            {/* Premium Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#" className="cursor-pointer select-none">
                <GlassButton
                  size="lg"
                  glassColor="rgba(255, 255, 255, 0.05)"
                  className="hover:scale-105 transition-transform"
                >
                  <svg className="w-5 h-5 fill-current text-white/90" viewBox="0 0 24 24">
                    <path d="M5 3c-.28 0-.5.22-.5.5v17c0 .28.22.5.5.5h14c.28 0 .5-.22.5-.5v-17c0-.28-.22-.5-.5-.5H5zm1 2h12v12H6V5zm1.5 13.5c-.28 0-.5.22-.5.5s.22.5.5.5h9c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-9z" />
                  </svg>
                  <div className="flex flex-col items-start leading-none text-left">
                    <span className="text-[10px] text-white/50 font-light font-sans uppercase">Get it on</span>
                    <span className="text-sm font-semibold mt-1">Google Play</span>
                  </div>
                </GlassButton>
              </a>

              <a href="#" className="cursor-pointer select-none">
                <GlassButton
                  size="lg"
                  glassColor="rgba(255, 255, 255, 0.05)"
                  className="hover:scale-105 transition-transform"
                >
                  <svg className="w-5 h-5 fill-current text-white/90" viewBox="0 0 24 24">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.51 12.06 1.005 1.45 2.187 3.07 3.766 3.01 1.524-.06 2.098-.98 3.938-.98 1.829 0 2.365.98 3.96.948 1.623-.027 2.666-1.46 3.66-2.898 1.155-1.679 1.625-3.31 1.652-3.4-.06-.027-3.178-1.217-3.21-4.823-.026-3.02 2.478-4.47 2.59-4.54-1.41-2.074-3.597-2.316-4.37-2.37-1.947-.162-3.8.989-4.785.989zM15.983 3.863c.815-.99 1.366-2.37 1.213-3.746-1.183.05-2.616.79-3.461 1.777-.75.864-1.408 2.27-1.229 3.627 1.31.1 2.66-.667 3.477-1.658z" />
                  </svg>
                  <div className="flex flex-col items-start leading-none text-left">
                    <span className="text-[10px] text-white/50 font-light font-sans uppercase">Download on</span>
                    <span className="text-sm font-semibold mt-1">App Store</span>
                  </div>
                </GlassButton>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* E. Social Media Grid Showcase Section */}
      <section className="relative w-full bg-black py-20 md:py-32 overflow-hidden border-t border-white/5 select-none">
        {/* Color glow in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FA8453]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-10 relative z-10 flex flex-col items-center">
          
          <div className="text-center mb-16 sm:mb-20 max-w-2xl select-text">
            <span className="text-xs uppercase tracking-widest text-[#FA8453] bg-[#FA8453]/10 px-4 py-1.5 rounded-full font-mono">
              Join Our Network
            </span>
            <h2 className="text-white text-3xl sm:text-5xl lg:text-6xl font-light leading-tight uppercase tracking-tight font-sans mt-4 flex flex-wrap justify-center gap-x-3 sm:gap-x-4 items-baseline">
              <span className="whitespace-nowrap">Connect with</span>
              <span className="text-4xl sm:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-[#FA8453] to-[#F8C9B2] bg-clip-text text-transparent inline-block whitespace-nowrap">
                us
              </span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed mt-4">
              Explore zero-latency gameplay telemetry, developer changelogs, live sim racing setups, and security updates across our social channels. Hover over any frame to reveal the channel stream.
            </p>
          </div>

          {/* Dynamic Frame Layout Grid */}
          <div className="w-full max-w-[1000px] aspect-square sm:aspect-[4/3] max-h-[700px] rounded-3xl overflow-hidden border border-white/10 p-2 bg-neutral-950/40 backdrop-blur-md">
            <DynamicFrameLayout 
              frames={socialFrames} 
              className="w-full h-full" 
              hoverSize={6}
              gapSize={6}
            />
          </div>

        </div>
      </section>
    </PageTransition>
  );
};
