import React from "react";
import { Link } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import { LogoMark } from "@/components/LogoMark";
import { GlassButton } from "@/components/ui/apple-tahoe-liquid-glass-button";

interface ProductItem {
  tag: string;
  name: string;
  description: string;
  blobColor: string;
  stats: { key: string; value: string }[];
}

export const Product: React.FC = () => {
  const products: ProductItem[] = [
    {
      tag: "gateway protection",
      name: "GateShield",
      description:
        "Enterprise gateway protection with zero-trust architecture and real-time threat intelligence. Restrict entry points, enforce rigorous auth protocols, and defend endpoints automatically.",
      blobColor: "#1e3a8a",
      stats: [
        { key: "Latency", value: "< 0.3ms" },
        { key: "Uptime", value: "99.99%" },
        { key: "Protocols", value: "TLS 1.3+" },
      ],
    },
    {
      tag: "encrypted storage",
      name: "VaultCore",
      description:
        "Military-grade encrypted storage with quantum-resistant algorithms for sensitive data at rest. Distribute files across secure vaults with absolute protection against structural theft.",
      blobColor: "#FA8453",
      stats: [
        { key: "Encryption", value: "AES-256" },
        { key: "Keys", value: "RSA-4096" },
        { key: "Throughput", value: "10GB/s" },
      ],
    },
    {
      tag: "intelligent monitoring",
      name: "ObserveNet",
      description:
        "Intelligent network monitoring with AI-powered anomaly detection and automated incident response. Scan network packets, flag outliers, and execute lockouts in seconds.",
      blobColor: "#F5D547",
      stats: [
        { key: "Detection", value: "< 2s" },
        { key: "Coverage", value: "360°" },
        { key: "Alerts", value: "Real-time" },
      ],
    },
  ];

  return (
    <PageTransition>
      {/* Hero Header */}
      <section className="relative h-[65vh] w-full overflow-hidden flex items-center justify-center bg-black">
        {/* Background video (same SecuritySection video) */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/asset video/f1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/65 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl pt-20 select-none">
          <span className="bg-[#FA8453]/15 backdrop-blur border border-[#FA8453]/35 rounded-full px-5 py-1.5 text-xs text-[#FA8453] mb-6 font-medium uppercase tracking-wider font-mono">
            Your Phone is Player 1.
          </span>
          <h1
            className="hero-title text-5xl sm:text-7xl md:text-8xl font-semibold text-white uppercase"
            style={{ letterSpacing: "-0.04em" }}
          >
            SIM GAMEPAD
          </h1>
          <p className="mt-6 max-w-xl text-white/60 text-sm sm:text-base font-light leading-relaxed">
            Don't have a controller? No problem. Sim Gamepad instantly transforms your smartphone into a high-performance PC controller with zero-latency response.
          </p>
        </div>

        {/* Bottom Fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black" />
      </section>

      {/* Product list */}
      <section className="w-full bg-black relative z-10">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-10 py-16 sm:py-24 space-y-32">
          {products.map((product, index) => {
            const isOdd = index % 2 !== 0;
            return (
              <div
                key={product.name}
                className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
                  isOdd ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Text and stats side */}
                <div className="flex-1 space-y-6 w-full">
                  <span className="text-xs text-white/40 tracking-widest uppercase font-mono">
                    {product.tag}
                  </span>
                  <h2
                    className="text-3xl sm:text-5xl font-light text-white uppercase tracking-tight"
                    style={{ letterSpacing: "-0.04em" }}
                  >
                    {product.name}
                  </h2>
                  <p className="text-white/60 text-sm sm:text-base font-light leading-relaxed">
                    {product.description}
                  </p>

                  {/* Specs table */}
                  <div className="w-full border border-white/10 rounded-xl overflow-hidden bg-neutral-950/50 backdrop-blur">
                    {product.stats.map((stat) => (
                      <div
                        key={stat.key}
                        className="flex justify-between px-5 py-3 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors duration-300 text-sm"
                      >
                        <span className="text-white/40 font-light">{stat.key}</span>
                        <span className="text-white font-medium">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Aesthetic image / visual side */}
                <div className="flex-1 w-full relative h-64 sm:h-80 md:h-96 rounded-2xl bg-neutral-950/80 border border-white/5 overflow-hidden flex items-center justify-center group hover:border-white/10 transition-all duration-500">
                  {/* Soft blurred color blob */}
                  <div
                    className="absolute h-56 w-56 rounded-full blur-[80px] opacity-40 group-hover:scale-125 transition-transform duration-700"
                    style={{ backgroundColor: product.blobColor }}
                  />

                  {/* Giant centered LogoMark */}
                  <LogoMark className="h-32 w-32 text-white opacity-5 relative z-10 group-hover:scale-105 transition-transform duration-500" />

                  {/* High tech frame overlay */}
                  <div className="absolute top-4 left-4 h-4 w-4 border-t border-l border-white/20 rounded-tl" />
                  <div className="absolute top-4 right-4 h-4 w-4 border-t border-r border-white/20 rounded-tr" />
                  <div className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-white/20 rounded-bl" />
                  <div className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-white/20 rounded-br" />
                </div>
              </div>
            );
          })}

          {/* Full-width CTA strip */}
          <div className="relative w-full bg-neutral-950/70 border border-white/5 rounded-3xl p-8 sm:p-16 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden group hover:border-white/10 transition-all duration-300">
            {/* Color Blob inside CTA */}
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#FA8453]/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#1e3a8a]/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500" />

            <div className="relative z-10 space-y-4 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-none uppercase">
                Ready to secure your infrastructure?
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light max-w-xl">
                Consult with our engineering team, implement custom gateways, and safeguard your structural operations today.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
              <Link to="/contact" className="w-full sm:w-auto">
                <GlassButton
                  glassColor="linear-gradient(90deg, #FA8453 0%, #F8C9B2 100%)"
                  className="w-full sm:w-auto"
                  size="lg"
                >
                  <span className="text-black font-semibold">get started</span>
                </GlassButton>
              </Link>
              <Link to="/product/sim-gamepad" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-neutral-900 border border-white/10 text-white hover:text-white hover:bg-neutral-800 text-base font-medium rounded-full px-8 py-4 transition-all duration-300 active:scale-95 cursor-pointer">
                  open workspace
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
