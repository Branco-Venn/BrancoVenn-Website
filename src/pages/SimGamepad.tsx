import React, { useState } from "react";
import { PageTransition } from "@/components/PageTransition";
import { Hero } from "@/components/ui/hero";
import { FeatureCarousel } from "@/components/ui/feature-carousel";
import { ScrollTiltedGrid } from "@/components/ui/scroll-tilted-grid";

export const SimGamepad: React.FC = () => {
  // Accordion state for FAQs
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const trustPoints = [
    "Ultra-low latency input system",
    "Motion sensor powered steering",
    "Wireless and wired connectivity",
    "Designed for racing and simulator games",
    "Fully customizable control layouts",
    "Responsive analog controls",
    "Optimized for long gaming sessions",
  ];

  const features = [
    {
      title: "Precision Gyro Steering",
      desc: "Use your phone’s motion sensors for smooth and realistic steering control. Tilt naturally like a real steering wheel with highly responsive sensor processing optimized for racing and simulation games.",
      highlights: [
        "Smooth tilt-based steering",
        "Adjustable steering sensitivity",
        "Real-time motion tracking",
        "Fine-tuned deadzone controls",
        "Stable high-frequency sensor input",
      ],
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11.57V3m0 0L8.25 4.5M9 3l.75 1.5M4.478 18.051a13.93 13.93 0 01-1.89-3.44c-.492-1.356-.69-2.783-.585-4.195a12.062 12.062 0 011.025-4.228M11.998 12L12 11.57V3m0 0L11.25 4.5M12 3l.75 1.5M19.522 18.051a13.931 13.931 0 001.89-3.44c.492-1.356.69-2.783.585-4.195a12.063 12.063 0 00-1.025-4.228" />
        </svg>
      ),
    },
    {
      title: "Fully Customizable Controls",
      desc: "Create your ideal setup with movable buttons, adjustable layouts, custom sizes, and personalized control schemes tailored for every game.",
      highlights: [
        "Drag-and-place buttons",
        "Resize and reposition controls",
        "Custom opacity settings",
        "Save multiple layouts",
        "Game-specific profiles",
      ],
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      title: "True Analog Control",
      desc: "Enjoy smooth acceleration, braking, throttle, and steering with analog precision designed for simulation accuracy and competitive driving.",
      highlights: [
        "Progressive trigger input",
        "Smooth steering response",
        "High precision analog handling",
        "Optimized for simulators",
        "Better control during cornering and braking",
      ],
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2" />
        </svg>
      ),
    },
    {
      title: "Fast & Reliable Connectivity",
      desc: "Connect instantly using advanced wireless or wired communication for stable gameplay and reduced input delay.",
      highlights: [
        "Wi-Fi connectivity",
        "USB support",
        "Bluetooth support",
        "Quick device pairing",
        "Stable real-time communication",
      ],
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10.5 10.5 0 0114.14 0M1.39 6.828a15.5 15.5 0 0121.22 0" />
        </svg>
      ),
    },
    {
      title: "Immersive Haptic Feedback",
      desc: "Feel every crash, drift, bump, and acceleration with responsive vibration feedback that enhances immersion during gameplay.",
      highlights: [
        "Dynamic vibration effects",
        "Responsive feedback system",
        "Enhanced realism",
        "Game-event based feedback",
        "Immersive driving experience",
      ],
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Built for High Performance",
      desc: "Sim Gamepad is optimized for responsiveness and smooth gameplay with efficient input handling and minimized latency.",
      highlights: [
        "Low latency communication",
        "Optimized sensor processing",
        "Fast response time",
        "Stable connection handling",
        "Smooth gameplay experience",
      ],
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Download",
      desc: "Install Sim Gamepad on your phone.",
    },
    {
      step: "02",
      title: "Pair Device",
      desc: "Connect your phone to your PC using Wi‑Fi, Bluetooth, or USB.",
    },
    {
      step: "03",
      title: "Launch",
      desc: "Launch your favorite racing or simulator game.",
    },
    {
      step: "04",
      title: "Play",
      desc: "Customize your controls and start playing.",
    },
  ];

  const useCases = [
    {
      title: "Racing Simulators",
      desc: "Get realistic steering and throttle control for racing games with smooth motion input and responsive analog controls.",
      img: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Flight Simulators",
      desc: "Use tilt, touch, and customizable layouts to create immersive flight controls directly from your smartphone.",
      img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Truck Simulators",
      desc: "Experience better immersion with realistic steering sensitivity and long-session comfort.",
      img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Casual PC Gaming",
      desc: "Use your phone as a flexible controller for compatible PC games and emulators.",
      img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const advancedHighlights = [
    "Custom sensitivity curves",
    "Adjustable deadzones",
    "Landscape optimized interface",
    "Multi-button support",
    "Real-time sensor calibration",
    "High refresh input handling",
    "Custom vibration tuning",
    "Optimized UI for fast access",
    "Dark mode interface",
    "Modern fluid animations",
  ];

  const comparisonData = [
    { name: "Motion Steering", sg: "Yes", basic: "Limited" },
    { name: "Analog Precision", sg: "Advanced", basic: "Basic" },
    { name: "Custom Layouts", sg: "Full Customization", basic: "Minimal" },
    { name: "Low Latency Focus", sg: "Optimized", basic: "Standard" },
    { name: "Simulation Gaming", sg: "Built For It", basic: "General Use" },
    { name: "Modern UI", sg: "Yes", basic: "Often Outdated" },
    { name: "Haptic Feedback", sg: "Enhanced", basic: "Limited" },
  ];

  const testimonials = [
    {
      quote: "The gyro steering feels surprisingly accurate. It genuinely improved my racing experience.",
      author: "Alex M., Sim Racer",
    },
    {
      quote: "The customization options are incredible. I could build a layout exactly how I wanted.",
      author: "Sarah K., Casual Gamer",
    },
    {
      quote: "The low latency makes it feel much closer to a real controller compared to other apps.",
      author: "David L., Flight Sim Enthusiast",
    },
  ];

  const faqs = [
    {
      q: "What games are supported?",
      a: "Sim Gamepad is designed for racing simulators, flight simulators, truck simulators, and many PC games that support controller input.",
    },
    {
      q: "Can I use it wirelessly?",
      a: "Yes. Sim Gamepad supports wireless connectivity options for flexible gameplay.",
    },
    {
      q: "Can I customize the controls?",
      a: "Yes. You can reposition buttons, resize controls, create layouts, and adjust sensitivity settings.",
    },
    {
      q: "Does it support motion steering?",
      a: "Yes. Sim Gamepad includes responsive gyroscope steering with adjustable sensitivity and calibration.",
    },
    {
      q: "Is it beginner friendly?",
      a: "Yes. Setup is quick and simple while still offering advanced features for enthusiast players.",
    },
  ];

  const premiumHighlights = [
    "Exclusive layouts",
    "Advanced tuning options",
    "Additional themes",
    "Priority feature access",
    "Future premium updates",
  ];

  // Images configured specifically for Sim Gamepad dashboard grid
  const gridImages = useCases.map((uc) => uc.img);

  return (
    <PageTransition>
      {/* 1. Hero Section */}
      <Hero
        gradient={true}
        blur={true}
        videoSrc="/asset video/hud.mp4"
        title={
          <span className="leading-tight">
            Turn Your Phone Into a <br />
            <span className="text-[#FA8453] font-normal font-sans">Precision Controller</span>
          </span>
        }
        subtitle="Low-latency motion steering and custom layouts built for serious simulator gaming."
        actions={[
          {
            label: "Download Now",
            href: "#download",
          },
          {
            label: "Watch Demo",
            href: "#demo",
            variant: "outline",
          },
        ]}
      />

      {/* Hero Short Description Card */}
      <section className="px-6 -mt-16 sm:-mt-24 pb-12 w-full max-w-4xl mx-auto relative z-30 select-none">
        <div className="bg-neutral-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-orange-500/20 transition-all duration-500 shadow-2xl flex flex-col sm:flex-row items-center gap-6">
          <div className="h-14 w-14 shrink-0 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
            <svg className="w-7 h-7 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <span className="text-[10px] text-orange-500 uppercase tracking-widest font-mono font-medium block mb-1">
              Ultra Responsive
            </span>
            <p className="text-white/60 text-sm sm:text-base font-light leading-relaxed">
              Transforms your smartphone into a zero-latency virtual simulator wheel and custom touch cockpit for PC games.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Trust / Social Proof Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full select-none">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[10px] text-[#FA8453] uppercase tracking-widest font-mono font-medium border border-orange-500/20 rounded-full px-3 py-1 bg-orange-500/5">
            Motion Powered
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-white uppercase tracking-tight max-w-2xl mx-auto">
            Built for Gamers Who Want More Than a Basic Mobile Controller
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="bg-neutral-950 border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-300 group cursor-pointer flex items-start gap-4"
            >
              <div className="h-8 w-8 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-300 shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-light text-neutral-300 group-hover:text-white transition-colors duration-300 pt-1">
                {point}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Feature Carousel Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center space-y-4 mb-16 select-none">
          <span className="text-[10px] text-orange-500 uppercase tracking-widest font-mono">
            Key Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white uppercase tracking-tight">
            Everything You Need for Competitive Gameplay
          </h2>
        </div>

        {/* Dynamic Carousel Component */}
        <FeatureCarousel
          title="Sim Gamepad Interactive Specs"
          description="Experience real-time interactive simulator steering metrics directly inside our custom panels."
          image={{
            step1light1: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600&auto=format&fit=crop",
            step1light2: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
            step2light1: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
            step2light2: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=600&auto=format&fit=crop",
            step3light: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=600&auto=format&fit=crop",
            step4light: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop",
            alt: "Sim Gamepad controller screenshot assets",
          }}
        />

        {/* Feature Cards Grid (Haptic and Performance details) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 select-none">
          {features.slice(4).map((f, i) => (
            <div
              key={i}
              className="bg-neutral-950 border border-white/5 rounded-3xl p-8 hover:border-orange-500/20 transition-all duration-300 group"
            >
              <div className="h-12 w-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-115 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-medium text-white mb-3 uppercase font-sans">
                {f.title}
              </h3>
              <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                {f.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {f.highlights.map((h, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono text-neutral-300 bg-neutral-900 border border-white/5 rounded-full px-3 py-1"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. How It Works Section */}
      <section className="py-20 bg-neutral-950/40 border-y border-white/5 select-none">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[10px] text-orange-500 uppercase tracking-widest font-mono">
              Installs In Minutes
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white uppercase tracking-tight">
              Setup in Minutes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {steps.map((s, idx) => (
              <div key={idx} className="bg-neutral-950 border border-white/5 rounded-2xl p-6 relative group hover:border-orange-500/20 transition-colors duration-300">
                <span className="text-5xl font-mono font-medium text-[#FA8453]/20 group-hover:text-[#FA8453]/40 transition-colors block mb-4">
                  {s.step}
                </span>
                <h3 className="text-base font-semibold text-white mb-2 tracking-tight uppercase font-mono">
                  {s.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Use Cases Section (Tilted Grid) */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center space-y-4 mb-8 select-none">
          <span className="text-[10px] text-orange-500 uppercase tracking-widest font-mono">
            Simulator Ready
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white uppercase tracking-tight">
            Designed for Every Type of Simulator Player
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
            From tracks to skies, customize your virtual gamepad controller parameters and steering wheels directly inside your smartphone.
          </p>
        </div>

        {/* Use Cases Segment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 select-none mt-12">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden group hover:border-white/10 transition-colors duration-300"
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={uc.img}
                  alt={uc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-base font-semibold text-white uppercase font-sans">
                  {uc.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                  {uc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Tilted Grid component representing supported catalog */}
        <div className="mt-8 select-none">
          <ScrollTiltedGrid loop images={gridImages} />
        </div>
      </section>

      {/* 6. Advanced Section */}
      <section className="py-20 bg-neutral-950/60 border-y border-white/5 select-none">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[10px] text-[#FA8453] uppercase tracking-widest font-mono">
              Expert Mode
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white uppercase tracking-tight">
              Advanced Features for Enthusiasts
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {advancedHighlights.map((h, i) => (
              <div
                key={i}
                className="bg-black border border-white/5 rounded-xl p-4 text-center group hover:border-orange-500/20 transition-all duration-300 cursor-pointer"
              >
                <span className="text-xs sm:text-sm font-light text-neutral-400 group-hover:text-white transition-colors duration-300">
                  {h}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Comparison Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto w-full select-none">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[10px] text-orange-500 uppercase tracking-widest font-mono">
            Low Latency Focus
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-white uppercase tracking-tight">
            Why Sim Gamepad?
          </h2>
        </div>

        <div className="border border-white/10 rounded-2xl overflow-hidden bg-neutral-950">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-neutral-900/60 border-b border-white/10 text-[10px] sm:text-xs text-white/40 uppercase tracking-wider font-mono">
                <th className="p-4 sm:p-5">Feature</th>
                <th className="p-4 sm:p-5 text-orange-500">Sim Gamepad</th>
                <th className="p-4 sm:p-5">Basic Mobile Controllers</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-neutral-900/20 transition-colors">
                  <td className="p-4 sm:p-5 text-xs sm:text-sm text-white font-light uppercase tracking-tight">{row.name}</td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm text-[#FA8453] font-semibold">{row.sg}</td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm text-neutral-500 font-light">{row.basic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. Visual Experience Section */}
      <section className="relative py-32 overflow-hidden w-full select-none">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
          <video
            src="/asset video/acceleratingcar.mov"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black z-10" />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-[10px] text-orange-500 uppercase tracking-widest font-mono border border-orange-500/20 rounded-full px-3 py-1 bg-orange-500/5">
            Immersive Feedback
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white uppercase tracking-tight">
            Designed With a Modern Gaming Experience in Mind
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
            Every interaction in Sim Gamepad is crafted to feel fluid, premium, and responsive. From smooth animations to immersive UI transitions, the experience is built to match modern gaming aesthetics while staying fast and functional.
          </p>
        </div>
      </section>

      {/* 9. Optional Premium Section */}
      <section className="py-20 bg-neutral-950/60 border-t border-white/5 select-none">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[10px] text-[#FA8453] uppercase tracking-widest font-mono">
              Premium Upgrade
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white uppercase tracking-tight">
              Unlock the Full Experience
            </h2>
            <p className="text-neutral-400 text-sm max-w-md mx-auto font-light">
              Access advanced customization, enhanced layouts, premium themes, and future pro-level features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {premiumHighlights.map((h, i) => (
              <div
                key={i}
                className="bg-black border border-white/5 rounded-xl p-6 text-center group hover:border-[#FA8453]/40 hover:scale-102 transition-all duration-300"
              >
                <div className="h-8 w-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mx-auto mb-4">
                  <span className="text-xs">★</span>
                </div>
                <span className="text-sm font-semibold text-white tracking-tight uppercase font-mono block">
                  {h}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Testimonials Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full select-none">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[10px] text-orange-500 uppercase tracking-widest font-mono">
            User Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-white uppercase tracking-tight">
            What Gamers Love
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-neutral-950 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors duration-300 flex flex-col justify-between"
            >
              <p className="text-white/70 text-sm sm:text-base font-light italic leading-relaxed mb-6">
                {t.quote}
              </p>
              <span className="text-xs text-orange-500 tracking-wider uppercase font-mono block">
                {t.author}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQ Section */}
      <section className="py-20 bg-neutral-950/40 border-t border-white/5 select-none">
        <div className="max-w-3xl mx-auto px-6 w-full">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[10px] text-orange-500 uppercase tracking-widest font-mono">
              Faqs
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white uppercase tracking-tight">
              What Gamers Ask
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-6 flex items-center justify-between cursor-pointer focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white uppercase font-sans">
                      {faq.q}
                    </span>
                    <span className={`text-orange-500 text-lg font-mono transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-neutral-400 text-xs sm:text-sm font-light leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. Download Section */}
      <section id="download" className="py-32 px-6 max-w-4xl mx-auto w-full text-center space-y-8 select-none">
        <div className="bg-neutral-950 border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden group hover:border-[#FA8453]/20 transition-all duration-500 shadow-2xl">
          <div className="absolute top-0 left-0 w-24 h-24 bg-orange-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] text-orange-500 uppercase tracking-widest font-mono font-medium">
              Simulator Ready
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-white uppercase tracking-tight leading-tight">
              Ready to Upgrade Your Gaming Experience?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
              Transform your smartphone into a powerful simulator controller with responsive motion controls, customizable layouts, and immersive gameplay features.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white text-black hover:bg-neutral-200 px-8 py-3.5 text-sm font-semibold tracking-tight active:scale-95 transition-all shadow-lg shadow-white/5 cursor-pointer block"
              >
                Download for Android
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-neutral-900 border border-white/10 hover:border-orange-500/20 text-white px-8 py-3.5 text-sm font-medium tracking-tight active:scale-95 transition-all cursor-pointer block"
              >
                Join Discord
              </a>
              <a
                href="#demo"
                className="rounded-full bg-neutral-900 border border-white/10 hover:border-orange-500/20 text-white px-8 py-3.5 text-sm font-medium tracking-tight active:scale-95 transition-all cursor-pointer block"
              >
                Watch Gameplay Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
