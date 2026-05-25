import React, { useState } from "react";
import { Search, Menu, Link as LucideLink } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

export const About: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <PageTransition>
      <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {/* SECTION 1: HERO / MISSION */}
        <div className="relative w-full min-h-screen bg-[#FBFDFD]">
          {/* Background Layers */}
          <div className="absolute inset-0 z-0 bg-[#FBFDFD]" />
          
          <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute right-0 top-0 h-full w-full md:w-[55%] opacity-30 md:opacity-100 object-cover object-top video-plus-darker"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131232_feeda0b7-d00d-4bfa-a9d5-5d38648a4214.mp4"
            />
          </div>

          {/* Content Layer */}
          <div className="relative z-10 min-h-screen flex flex-col pb-12">
            {/* Navbar */}
            <nav className="relative z-20 flex flex-row items-center justify-between px-5 py-4 md:px-12 md:py-6">
              <div className="flex items-center gap-12">
                <img src="/image.png" alt="Logo" className="h-7 md:h-8 object-contain" />
                <div className="hidden md:flex items-center gap-8">
                  <a href="/" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Home</a>
                  <a href="/about" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">About</a>
                  <a href="/services" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Services</a>
                  <a href="/contact" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Contact</a>
                </div>
              </div>

              <div className="hidden md:block relative">
                <input 
                  type="text" 
                  placeholder="I am looking for..." 
                  className="w-72 rounded-full border border-neutral-300 py-2 pl-4 pr-10 text-sm text-neutral-600 outline-none focus:border-neutral-400 bg-white/50 backdrop-blur-sm"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              </div>

              <button 
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-neutral-300 text-neutral-600 bg-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
              <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-neutral-200 p-5 z-30 flex flex-col gap-4 shadow-lg">
                <a href="/" className="text-sm text-neutral-600">Home</a>
                <a href="/about" className="text-sm text-neutral-600">About</a>
                <a href="/services" className="text-sm text-neutral-600">Services</a>
                <a href="/contact" className="text-sm text-neutral-600">Contact</a>
                <div className="relative mt-2">
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full rounded-full border border-neutral-300 py-2 pl-4 pr-10 text-sm text-neutral-600 outline-none"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                </div>
              </div>
            )}

            {/* HeroSection Content - Mission Text */}
            <div className="relative z-10 flex-1 flex flex-col px-5 pt-8 pb-32 md:px-12 md:pt-12 md:pb-40">
              <div className="max-w-2xl w-full">
                <span className="text-xs font-medium tracking-[0.3em] text-neutral-500 uppercase block mb-6 md:mb-8">About Us</span>
                
                <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[0.95] font-light tracking-tight text-neutral-900 m-0 mb-8 md:mb-10">
                  OUR<br />MISSION
                </h1>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  <span className="px-5 py-2 rounded-full border border-neutral-300 text-sm text-neutral-700 bg-white/50 backdrop-blur-sm">Human-Centered</span>
                  <span className="px-5 py-2 rounded-full border border-neutral-300 text-sm text-neutral-700 bg-white/50 backdrop-blur-sm">Responsive</span>
                  <span className="px-5 py-2 rounded-full border border-neutral-300 text-sm text-neutral-700 bg-white/50 backdrop-blur-sm">Seamless</span>
                </div>
                
                <div className="space-y-6 text-sm md:text-base text-neutral-600 leading-relaxed font-light">
                  <p className="text-neutral-900 text-lg md:text-xl font-normal leading-relaxed">
                    Our mission is to redefine how people interact with technology by creating software utilities that are seamless, responsive, and deeply human-centered.
                  </p>
                  <p>
                    We believe software should adapt to people — not the other way around.
                  </p>
                  <p>
                    Too many digital tools are built with complexity as a default. Features become clutter. Interfaces become overwhelming. Users are expected to learn systems instead of systems learning users. Branco Venn challenges that mindset.
                  </p>
                  <p>
                    We design products that remove barriers between intention and execution.
                  </p>
                  <p>
                    Whether someone is gaming, controlling a simulation, creating content, or interacting with connected systems, our software is engineered to feel immediate and natural. We focus on reducing latency, simplifying workflows, and creating immersive interactions that make technology feel like an extension of the user.
                  </p>
                  <p>
                    Our mission goes beyond convenience. We want to democratize powerful digital experiences — making advanced interaction systems accessible to anyone with a smartphone, a computer, and an idea. We believe innovation should not be restricted by expensive hardware or inaccessible ecosystems. Through intelligent software solutions, we aim to unlock new possibilities from devices people already own.
                  </p>
                  <p className="text-neutral-900 font-medium">
                    Sim Gamepad represents that philosophy.
                  </p>
                  <p>
                    It transforms smartphones into precision gaming and simulation controllers, bridging motion, touch, sensors, and real-time responsiveness into a unified experience. It reflects what Branco Venn stands for: software that expands human capability through intelligent design.
                  </p>
                  <p>
                    But this is only the beginning. Branco Venn is building toward a future where utility software becomes more adaptive, more immersive, and more connected across every digital environment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Diagonal Section Divider */}
          <div className="absolute bottom-0 left-0 w-full z-[3]">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block pointer-events-none">
              <polygon points="0,0 0,120 1440,120 1440,80 920,80 680,0" fill="#0F0F0F" />
            </svg>
          </div>
        </div>

        {/* SECTION 2: OUR MANIFESTO (Dark) */}
        <section className="w-full bg-[#0F0F0F] px-8 md:px-16 lg:px-20 xl:px-28 pt-24 pb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-light italic tracking-tight text-white leading-[1.05] max-w-5xl mb-16 md:mb-24">
            OUR MANIFESTO
          </h2>

          <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 text-sm md:text-base text-neutral-400 font-light leading-relaxed">
            <div className="space-y-6">
              <p className="text-white text-lg">
                We believe utility software deserves the same level of innovation as entertainment platforms and flagship consumer products.
              </p>
              <div className="pl-4 border-l border-white/20 py-2 space-y-1">
                <p>We believe responsiveness matters.</p>
                <p>Milliseconds matter.</p>
                <p>Design matters.</p>
                <p>Experience matters.</p>
              </div>
              <p>
                We believe people should feel in control of technology — not constrained by it.
              </p>
              <p>
                The future of interaction is not hidden behind expensive hardware alone. It lives in intelligent software capable of transforming the devices already in our hands into tools with entirely new purposes.
              </p>
              <ul className="space-y-2 text-white/80 list-none pl-0">
                <li>&bull; A phone can become a steering wheel.</li>
                <li>&bull; A screen can become a cockpit.</li>
                <li>&bull; Motion can become control.</li>
                <li>&bull; Software can become instinct.</li>
              </ul>
              <p>
                At Branco Venn, we build products that remove the distance between action and response. We are obsessed with fluidity, precision, immersion, and accessibility because those details define whether technology feels mechanical or magical.
              </p>
            </div>
            
            <div className="space-y-6">
              <p>
                We do not create bloated systems overloaded with unnecessary complexity. We create focused tools with purpose.
              </p>
              <div className="pl-4 border-l border-white/20 py-2 space-y-1">
                <p>Every feature must earn its place.</p>
                <p>Every interaction must feel intentional.</p>
                <p>Every millisecond of delay is a problem worth solving.</p>
              </div>
              <p>
                We believe software utilities should empower creators, gamers, professionals, and everyday users alike — giving them faster, smarter, and more immersive ways to interact with digital systems.
              </p>
              <p className="text-white">
                Our products are built for people who expect more from technology:
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm">More responsiveness</span>
                <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm">More flexibility</span>
                <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm">More immersion</span>
                <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm">More freedom</span>
              </div>
              <p>
                We are driven by experimentation and engineering excellence. We continuously push the limits of wireless communication, real-time interaction, motion systems, interface design, and connected experiences to create products that feel ahead of their time.
              </p>
              <p className="text-white font-medium">
                Branco Venn is not just building applications. We are building interaction systems for the next generation of computing.
              </p>
              <p>
                The line between physical and digital continues to disappear. Our role is to make that transition feel natural.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: THE FUTURE WE SEE */}
        <section className="w-full bg-[#0F0F0F] px-8 md:px-16 lg:px-20 xl:px-28 py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-medium tracking-[0.3em] text-neutral-500 uppercase block mb-6">The Vision</span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight mb-12">
              THE FUTURE WE SEE
            </h2>
            
            <div className="space-y-8 text-sm md:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              <p className="text-lg text-white">
                We envision a future where software utilities become intelligent layers between humans and machines — adaptive systems capable of understanding movement, context, intent, and responsiveness in real time.
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 my-8 text-left">
                <p className="text-white mb-4">A future where:</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/50" /> Devices communicate seamlessly</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/50" /> Interfaces react instantly</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/50" /> Control feels natural</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/50" /> Hardware limitations disappear through software innovation</li>
                </ul>
              </div>

              <p>
                Branco Venn exists to build that future. From gaming and simulation tools to next-generation utility platforms, our work is centered around creating software that enhances capability without adding complexity.
              </p>
              
              <p>
                We are building technology that empowers people to do more with what they already have.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 py-6 text-white text-lg">
                <div className="text-center">
                  <span className="block text-neutral-500 text-sm line-through decoration-white/30 mb-1">Not louder technology.</span>
                  Smarter technology.
                </div>
                <div className="w-px h-8 bg-white/10 hidden sm:block" />
                <div className="text-center">
                  <span className="block text-neutral-500 text-sm line-through decoration-white/30 mb-1">Not more complicated systems.</span>
                  More human experiences.
                </div>
              </div>

              <p className="text-xl font-medium text-white pt-8">
                That is the vision behind Branco Venn.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
