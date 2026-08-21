import React from "react";
import { Link } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import { FlowArt, FlowSection } from "@/components/ui/story-scroll";

export const SimGamepad: React.FC = () => {
  return (
    <PageTransition>
      <FlowArt aria-label="Sim Gamepad Interactive Presentation">
        
        {/* Section 1: Who We Are / Introducing Sim Gamepad */}
        <FlowSection 
          aria-label="Who we are" 
          style={{ backgroundColor: '#070708', color: '#fff' }}
        >
          {/* High-Tech Video & Radial Glow Overlays */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <video
              className="absolute inset-0 w-full h-full object-cover opacity-45 transition-opacity duration-1000"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              src="/asset%20video/hud.mp4"
            />
            {/* Visual enhancement layers */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
            <div className="absolute -left-[10%] -top-[10%] w-[55%] h-[55%] rounded-full bg-[#FA8453]/15 blur-[120px] mix-blend-screen" />
            <div className="absolute -right-[15%] -bottom-[15%] w-[65%] h-[65%] rounded-full bg-[#FA8453]/10 blur-[160px] mix-blend-screen" />
          </div>

          <div className="w-full flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] font-mono text-neutral-300">
              01 — Who we are
            </p>
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
              Sim Gamepad
            </span>
          </div>

          <div className="my-[4vw] relative z-10">
            <h1
              className="text-[clamp(2.5rem,8vw,9rem)] font-light leading-[0.85] uppercase tracking-tight font-sans text-neutral-100"
              style={{ letterSpacing: "-0.04em" }}
            >
              Turn
              <br />
              Your Phone
              <br />
              Into A
              <br />
              <span className="font-bold text-[#FA8453] drop-shadow-[0_0_35px_rgba(250,132,83,0.3)]">Precision</span>
              <br />
              Controller
            </h1>
          </div>

          <hr className="border-none border-t border-white/10 my-4 relative z-10" />
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-auto relative z-10">
            <p className="max-w-[45ch] text-[clamp(0.95rem,1.8vw,1.5rem)] font-light leading-relaxed text-neutral-200">
              Low-latency motion steering and custom layouts built for serious simulator gaming. Transforms your smartphone into a zero-latency virtual simulator wheel.
            </p>
            <p className="max-w-[40ch] text-xs sm:text-sm font-mono text-neutral-400 leading-relaxed border-l border-white/10 pl-4">
              Transforms your smartphone into a zero-latency virtual simulator wheel and custom touch cockpit for PC games. Connect instantly and start playing.
            </p>
          </div>
        </FlowSection>

        {/* Section 2: Key Capabilities */}
        <FlowSection 
          aria-label="Key Capabilities" 
          style={{ backgroundColor: '#050505', color: '#fff' }}
          className="border-t border-white/5"
        >
          <div className="w-full flex items-center justify-between border-b border-white/10 pb-4">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] font-mono text-orange-500">
              02 — Key Capabilities
            </p>
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">
              Low Latency Focus
            </span>
          </div>

          <div className="my-[3vw]">
            <h2
              className="text-[clamp(2.5rem,8vw,8rem)] font-light leading-[0.85] uppercase tracking-tight font-sans text-neutral-200"
              style={{ letterSpacing: "-0.04em" }}
            >
              Everything
              <br />
              You Need
              <br />
              For Immersive
              <br />
              <span className="font-semibold text-orange-500">Gameplay</span>
            </h2>
          </div>

          <hr className="border-none border-t border-white/10 my-4" />

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 my-6">
            <div className="space-y-1.5 border-l border-orange-500/30 pl-4">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-orange-500 font-mono">
                01. Gyro Steering
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Use your phone's motion sensors for smooth tilt-based steering control. Tilt naturally like a real steering wheel.
              </p>
            </div>
            <div className="space-y-1.5 border-l border-white/10 pl-4">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white font-mono">
                02. Custom Layouts
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Create your ideal setup with movable buttons, adjustable layouts, custom sizes, and personalized control profiles.
              </p>
            </div>
            <div className="space-y-1.5 border-l border-white/10 pl-4">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white font-mono">
                03. Analog Triggers
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Enjoy smooth acceleration and braking triggers with analog precision designed for simulator driving.
              </p>
            </div>
            <div className="space-y-1.5 border-l border-white/10 pl-4">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white font-mono">
                04. Fast Connectivity
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Connect instantly using advanced wireless or wired communication (Wi-Fi, Bluetooth, or USB) for low delay.
              </p>
            </div>
            <div className="space-y-1.5 border-l border-white/10 pl-4">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white font-mono">
                05. Vibration Feedback
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Feel every crash, drift, bump, and acceleration with responsive dynamic haptic feedback.
              </p>
            </div>
            <div className="space-y-1.5 border-l border-white/10 pl-4">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white font-mono">
                06. High Performance
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Optimized for responsiveness and smooth simulator gameplay with efficient sensor and input handling.
              </p>
            </div>
          </div>

          <hr className="border-none border-t border-white/10 my-4" />

          <p className="mt-auto ml-auto max-w-[45ch] text-right text-xs sm:text-sm font-mono text-neutral-500 leading-relaxed">
            Every feature in Sim Gamepad is engineered to deliver zero-latency responsive telemetry.
          </p>
        </FlowSection>

        {/* Section 3: How It Works */}
        <FlowSection 
          aria-label="How it works" 
          style={{ backgroundColor: '#F5F0E8', color: '#000' }}
        >
          <div className="w-full flex items-center justify-between border-b border-black/10 pb-4">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] font-mono text-neutral-600">
              03 — How it works
            </p>
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">
              Quick Setup
            </span>
          </div>

          <div className="my-[4vw]">
            <h2
              className="text-[clamp(2.5rem,8vw,8rem)] font-light leading-[0.85] uppercase tracking-tight font-sans text-neutral-900"
              style={{ letterSpacing: "-0.04em" }}
            >
              Setup
              <br />
              In
              <br />
              <span className="font-semibold text-orange-600">Minutes</span>
            </h2>
          </div>

          <hr className="border-none border-t border-black/10 my-4" />
          
          <p className="max-w-[50ch] text-[clamp(0.95rem,1.8vw,1.4rem)] font-light leading-relaxed text-neutral-800">
            Four simple steps. Zero complexity. Your responsive mobile cockpit starts moving the moment you pair.
          </p>
          
          <hr className="border-none border-t border-black/10 my-4" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-4">
            <div className="space-y-1">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-600 font-mono">01 — Install</p>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-light">
                Install Sim Gamepad application directly on your phone.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-900 font-mono">02 — Pair Device</p>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-light">
                Connect your phone to your PC using Wi‑Fi, Bluetooth, or USB cable.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-900 font-mono">03 — Launch Game</p>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-light">
                Launch your favorite racing simulator, flight captain simulator, or truck game.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-900 font-mono">04 — Play</p>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-light">
                Calibrate triggers, configure deadzones, and start playing!
              </p>
            </div>
          </div>
        </FlowSection>

        {/* Section 4: Use Cases & Stats */}
        <FlowSection 
          aria-label="Simulator Use Cases" 
          style={{ backgroundColor: '#1A3DE8', color: '#fff' }}
        >
          <div className="w-full flex items-center justify-between border-b border-white/20 pb-4">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] font-mono">
              04 — Designed for everyone
            </p>
            <span className="text-[10px] font-mono tracking-widest uppercase opacity-70">
              Universal Support
            </span>
          </div>

          <div className="my-[3vw]">
            <h2
              className="text-[clamp(2.5rem,8vw,8rem)] font-light leading-[0.85] uppercase tracking-tight font-sans"
              style={{ letterSpacing: "-0.04em" }}
            >
              Simulator
              <br />
              Ready
              <br />
              <span className="font-semibold text-[#FA8453]">Ecosystem</span>
            </h2>
          </div>

          <hr className="border-none border-t border-white/20 my-4" />

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 my-4 border-b border-white/20 pb-6 text-center sm:text-left">
            <div>
              <p className="text-3xl sm:text-5xl font-semibold tracking-tight text-white font-mono">10K+</p>
              <p className="text-[9px] sm:text-xs uppercase tracking-widest opacity-75 mt-1 font-mono">Active Captions</p>
            </div>
            <div>
              <p className="text-3xl sm:text-5xl font-semibold tracking-tight text-white font-mono">0ms</p>
              <p className="text-[9px] sm:text-xs uppercase tracking-widest opacity-75 mt-1 font-mono">Input Lag Focus</p>
            </div>
            <div>
              <p className="text-3xl sm:text-5xl font-semibold tracking-tight text-white font-mono">100%</p>
              <p className="text-[9px] sm:text-xs uppercase tracking-widest opacity-75 mt-1 font-mono">Layout Control</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            <div className="space-y-1 border-t border-white/20 pt-4">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-orange-300 font-mono">Racing Simulators</p>
              <p className="text-xs sm:text-sm opacity-80 leading-relaxed font-light">
                Realistic tilt steering sensitivity and progressive analog trigger cornering.
              </p>
            </div>
            <div className="space-y-1 border-t border-white/20 pt-4">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white font-mono">Flight Simulators</p>
              <p className="text-xs sm:text-sm opacity-80 leading-relaxed font-light">
                Immersive gyro pitch and touch dashboards for custom flight sticks.
              </p>
            </div>
            <div className="space-y-1 border-t border-white/20 pt-4">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white font-mono">Truck Simulators</p>
              <p className="text-xs sm:text-sm opacity-80 leading-relaxed font-light">
                Fine-tuned steering deadzones optimized for relaxed long-session comfort.
              </p>
            </div>
            <div className="space-y-1 border-t border-white/20 pt-4">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white font-mono">Casual PC Gaming</p>
              <p className="text-xs sm:text-sm opacity-80 leading-relaxed font-light">
                Flexible layouts supporting keyboard mapping emulation instantly.
              </p>
            </div>
          </div>
        </FlowSection>

        {/* Section 5: Action CTA & FAQs */}
        <FlowSection 
          aria-label="Ready to begin" 
          style={{ backgroundColor: '#000', color: '#fff' }}
        >
          {/* Background Video overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <video
              className="absolute inset-0 w-full h-full object-cover opacity-35 transition-opacity duration-1000"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              src="/asset%20video/getready.mp4"
            />
            {/* Visual enhancement layers */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            <div className="absolute -left-[10%] -top-[10%] w-[55%] h-[55%] rounded-full bg-orange-500/10 blur-[120px] mix-blend-screen animate-pulse" />
            <div className="absolute -right-[15%] -bottom-[15%] w-[65%] h-[65%] rounded-full bg-orange-500/5 blur-[160px] mix-blend-screen" />
          </div>

          <div className="w-full flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] font-mono text-orange-500">
              05 — Ready to begin
            </p>
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">
              Get Started
            </span>
          </div>

          <div className="my-[4vw] relative z-10">
            <h2
              className="text-[clamp(2.5rem,8vw,8rem)] font-light leading-[0.85] uppercase tracking-tight font-sans text-neutral-100"
              style={{ letterSpacing: "-0.04em" }}
            >
              Ready
              <br />
              To
              <br />
              Upgrade your
              <br />
              <span className="font-semibold text-orange-500">Gaming?</span>
            </h2>
          </div>

          <hr className="border-none border-t border-white/10 my-4 relative z-10" />

          {/* Interactive CTAs */}
          <div className="flex flex-wrap items-center gap-4 py-4 select-none relative z-10">
            <Link 
              to="/app-under-development" 
              className="rounded-full bg-white hover:bg-neutral-200 text-black px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-tight active:scale-95 transition-all shadow-lg shrink-0 cursor-pointer"
            >
              Download for Android
            </Link>
            <a 
              href="https://discord.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full bg-neutral-900 border border-white/10 hover:border-orange-500/20 text-white px-8 py-3.5 text-xs sm:text-sm font-medium tracking-tight active:scale-95 transition-all cursor-pointer"
            >
              Join Discord
            </a>
            <a 
              href="https://youtube.com/@brancovenn"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-neutral-900 border border-white/10 hover:border-orange-500/20 text-white px-8 py-3.5 text-xs sm:text-sm font-medium tracking-tight active:scale-95 transition-all cursor-pointer"
            >
              Watch Gameplay Demo
            </a>
          </div>

          <hr className="border-none border-t border-white/10 my-4 relative z-10" />

          <p className="mt-auto max-w-[50ch] text-[clamp(0.95rem,1.8vw,1.4rem)] font-light leading-relaxed text-neutral-400 relative z-10">
            Take control of your virtual simulator journey. Set up your mobile touch controller dashboard in seconds and start playing PC games natively.
          </p>
        </FlowSection>

      </FlowArt>
    </PageTransition>
  );
};
export default SimGamepad;
