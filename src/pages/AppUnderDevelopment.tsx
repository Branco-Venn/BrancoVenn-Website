import React from "react";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Hero } from "@/components/ui/hero";
import { Download, Home, MessageSquare, Smartphone, Zap, Gauge, QrCode, Sparkles } from "lucide-react";

export const AppUnderDevelopment: React.FC = () => {
  const upcomingFeatures = [
    {
      icon: Zap,
      title: "Ultra-Low Latency",
      desc: "Sub-millisecond UDP packet transmission over local Wi-Fi for instantaneous throttle, brake, and steering response.",
    },
    {
      icon: Gauge,
      title: "Real-Time Telemetry HUD",
      desc: "F1-style RPM shift lights, live gear indicator, tire temperature, and telemetry analytics rendered at 60+ FPS.",
    },
    {
      icon: Smartphone,
      title: "Motion Gyro Steering",
      desc: "Precision accelerometer and gyroscope calibration turning your phone into an authentic virtual steering wheel.",
    },
    {
      icon: QrCode,
      title: "Instant QR Pairing",
      desc: "Zero-friction device pairing between your smartphone and the Windows PC companion with one camera scan.",
    },
  ];

  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-black text-white font-body selection:bg-white selection:text-black relative overflow-x-hidden pt-20 pb-16">
        
        {/* Lamp Hero Section */}
        <Hero
          badge={
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-amber-500" />
              </span>
              <span>Under Active Development</span>
            </div>
          }
          title={
            <span>
              Sim Gamepad Mobile <br />
              <span className="bg-gradient-to-r from-[#FA8453] via-white to-[#F8C9B2] bg-clip-text text-transparent">
                Coming Soon
              </span>
            </span>
          }
          subtitle="We are currently putting the final touches on our native iOS (App Store) and Android (Google Play) applications. The mobile companion will deliver zero-latency simulation controls, custom touch cockpit layouts, and live telemetry streaming."
          actions={[
            {
              label: "Download Windows Companion",
              href: "https://github.com/Branco-Venn/Branco-Venn-website/releases/download/v1.0.0/SimGamepad-Windows-x64-v1.0.0.zip",
              variant: "default",
              icon: <Download className="w-4 h-4" />,
              isExternal: true,
            },
            {
              label: "Join Community Discord",
              href: "https://discord.gg/brancovenn",
              variant: "outline",
              icon: <MessageSquare className="w-4 h-4" />,
              isExternal: true,
            },
            {
              label: "Back to Home",
              href: "/",
              variant: "ghost",
              icon: <Home className="w-4 h-4" />,
            },
          ]}
          titleClassName="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight"
          subtitleClassName="text-sm sm:text-base md:text-lg max-w-2xl"
          actionsClassName="mt-6"
        />

        {/* Feature Preview Cards */}
        <section className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12">
          <div className="text-center mb-10">
            <span className="text-[10px] font-mono tracking-[0.4em] text-neutral-500 uppercase block mb-2">
              Preview
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
              What to Expect on Launch
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white/[0.02] border border-white/[0.08] hover:border-white/20 p-6 sm:p-8 rounded-2xl transition-all duration-300 group hover:bg-white/[0.04]"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-white/30 transition-all">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{feat.title}</h3>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Beta notification card */}
        <section className="relative z-10 w-full max-w-3xl mx-auto px-6 py-8">
          <div className="bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-3xl p-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>Early Beta Access</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-medium text-white">
              Want early access to the iOS TestFlight or Android APK?
            </h3>
            <p className="text-neutral-400 text-sm max-w-md mx-auto font-light leading-relaxed">
              Reach out to our engineering team with your device details and we will invite you to the private beta testing group.
            </p>
            <div className="pt-2">
              <a
                href="mailto:contact@brancovenn.com?subject=Sim%20Gamepad%20Mobile%20Beta%20Access"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-all hover:scale-105"
              >
                <span>Request Beta Access</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default AppUnderDevelopment;
