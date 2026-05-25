import React from "react";
import { Link } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import { GlassButton } from "@/components/ui/apple-tahoe-liquid-glass-button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useScroll, useTransform, motion } from "framer-motion";

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
          src="/asset video/dashcam.mov"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* Inner wrapper */}
        <div className="relative h-full w-full max-w-[1320px] mx-auto px-4 select-none">
          {/* Massive hero-title words */}
          <h1 className="hero-title absolute text-white font-medium text-[14vw] md:text-[10vw] uppercase left-4 sm:left-6 md:left-12 top-[20%] sm:top-[18%] select-none">
            SIM
          </h1>
          <h1 className="hero-title absolute text-white font-medium text-[14vw] md:text-[10vw] uppercase right-4 sm:right-6 md:right-12 top-[58%] sm:top-[56%] bg-gradient-to-r from-white via-white to-white/75 bg-clip-text text-transparent select-none">
            GAMEPAD
          </h1>

          {/* Paragraph & Download Buttons */}
          <div className="absolute left-4 sm:left-6 md:left-12 top-[40%] sm:top-[38%] max-w-[280px] sm:max-w-[360px] space-y-5 select-none">
            <p className="text-[13px] sm:text-[18px] leading-relaxed text-white/90 font-light">
              we are holding each file with supreme care, granting user with safety in all place
            </p>
            
            <div className="flex flex-wrap gap-2.5 pt-1">
              <a href="#" className="cursor-pointer">
                <GlassButton
                  size="sm"
                  glassColor="rgba(255, 255, 255, 0.05)"
                  className="hover:scale-105 transition-transform"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-white/70" viewBox="0 0 24 24">
                    <path d="M0 3.449L9.75 2.1v9.451H0V3.449zM0 12.45h9.75v9.451L0 20.551V12.45zM11.25 1.899L24 0v11.55H11.25V1.899zM11.25 12.45H24v11.55l-12.75-1.9V12.45z" />
                  </svg>
                  <span className="font-light">Windows</span>
                </GlassButton>
              </a>

              <a href="#" className="cursor-pointer">
                <GlassButton
                  size="sm"
                  glassColor="rgba(255, 255, 255, 0.05)"
                  className="hover:scale-105 transition-transform"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-white/70" viewBox="0 0 24 24">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.51 12.06 1.005 1.45 2.187 3.07 3.766 3.01 1.524-.06 2.098-.98 3.938-.98 1.829 0 2.365.98 3.96.948 1.623-.027 2.666-1.46 3.66-2.898 1.155-1.679 1.625-3.31 1.652-3.4-.06-.027-3.178-1.217-3.21-4.823-.026-3.02 2.478-4.47 2.59-4.54-1.41-2.074-3.597-2.316-4.37-2.37-1.947-.162-3.8.989-4.785.989zM15.983 3.863c.815-.99 1.366-2.37 1.213-3.746-1.183.05-2.616.79-3.461 1.777-.75.864-1.408 2.27-1.229 3.627 1.31.1 2.66-.667 3.477-1.658z" />
                  </svg>
                  <span className="font-light">macOS</span>
                </GlassButton>
              </a>
            </div>
          </div>

          {/* Stat Blocks */}
          {/* Bottom-left */}
          <div className="absolute left-4 sm:left-6 md:left-10 bottom-[8%] sm:bottom-[10%] flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
                +2.7b
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm text-white/70 font-light">
                mb info was concealed
              </span>
            </div>
            <div className="hidden md:block h-px w-24 bg-white/40 -rotate-[20deg]" />
          </div>

          {/* Top-right */}
          <div className="absolute right-4 sm:right-6 md:right-10 top-[18%] sm:top-[20%] flex items-center gap-4">
            <div className="hidden md:block h-px w-24 bg-white/40 rotate-[20deg]" />
            <div className="flex flex-col text-right">
              <span className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
                +90k
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm text-white/70 font-light">
                ventures run
              </span>
            </div>
          </div>

          {/* Bottom-right */}
          <div className="absolute right-4 sm:right-6 md:right-10 bottom-[8%] sm:bottom-[10%] flex items-center gap-4">
            <div className="hidden md:block h-px w-24 bg-white/40 -rotate-[20deg]" />
            <div className="flex flex-col text-right">
              <span className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
                +450k
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm text-white/70 font-light">
                transfers
              </span>
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
              className="mx-auto rounded-2xl object-cover h-full w-full object-left-top select-none pointer-events-none"
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
    </PageTransition>
  );
};
