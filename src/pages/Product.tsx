import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import { GlassButton } from "@/components/ui/apple-tahoe-liquid-glass-button";
import { useScroll, useTransform, motion, useMotionValue } from "framer-motion";

interface ProductItem {
  tag: string;
  name: string;
  description: string;
  blobColor: string;
  stats: { key: string; value: string }[];
  video: string;
}

const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [15, -15]);
  const rotateY = useTransform(x, [0, 400], [-15, 15]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Normalize mouse position to 0-400
    x.set((mouseX / width) * 400);
    y.set((mouseY / height) * 400);
  }

  function handleMouseLeave() {
    x.set(200);
    y.set(200);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="flex-1 w-full relative h-64 sm:h-80 md:h-96 rounded-2xl bg-neutral-950/80 border border-white/5 overflow-hidden flex items-center justify-center group hover:border-orange-500/20 transition-all duration-500"
    >
      {children}
    </motion.div>
  );
};

const Scroll3DSection = ({ children, isOdd }: { children: React.ReactNode; isOdd: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.92, 1, 1, 0.92]);
  
  // Rotate along Y axis depending on which side the text sits
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [isOdd ? -8 : 8, 0, 0, isOdd ? 8 : -8]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        scale,
        rotateY,
        perspective: 1200,
        transformStyle: "preserve-3d"
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export const Product: React.FC = () => {
  const products: ProductItem[] = [
    {
      tag: "precision steering",
      name: "GyroSteer",
      description:
        "Harness the power of your phone's internal gyroscopes and accelerometers for fluid, high-fidelity steering input. Replicates physical racing wheels with adjustable sensitivity, smoothing, and calibration settings.",
      blobColor: "#FA8453",
      stats: [
        { key: "Sensor Precision", value: "16-Bit Gyro" },
        { key: "Deadzone Adjust", value: "0% - 35%" },
        { key: "Input Lag", value: "< 1.1ms" },
      ],
      video: "/asset%20video/getready.mp4",
    },
    {
      tag: "layout customization",
      name: "LayoutEngine",
      description:
        "Drag, drop, and resize triggers, sliders, dials, and telemetry gauges. Build the perfect custom racing rig dashboard or flight cockpit layout that maps directly to PC keyboard inputs and virtual joysticks.",
      blobColor: "#30D158",
      stats: [
        { key: "Layout Slots", value: "Unlimited" },
        { key: "Custom Inputs", value: "Buttons, Sliders, Dials" },
        { key: "Emulation Type", value: "Keyboard, Mouse, HID" },
      ],
      video: "/asset%20video/hud.mp4",
    },
    {
      tag: "dashboard HUD",
      name: "TeleSync",
      description:
        "Synchronize live telemetry data between your PC games and mobile device. Displays gear shifts, F1 style LED rev lights, current RPM, speed, tire wear, and temperature widgets in real-time.",
      blobColor: "#03E6FD",
      stats: [
        { key: "Game Profiles", value: "F1 23/24, Assetto Corsa, etc." },
        { key: "Refresh Frequency", value: "60 Hz Sync" },
        { key: "Interface Type", value: "Dynamic HUD Widgets" },
      ],
      video: "/asset%20video/f1.mp4",
    },
  ];

  return (
    <PageTransition>
      {/* Hero Header */}
      <section className="relative h-[65vh] w-full overflow-hidden flex items-center justify-center bg-black">
        {/* Background video (F1 visual) */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src="/asset%20video/f1.mp4"
        />
        <div className="absolute inset-0 bg-black/65 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl pt-20 select-none">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_10px_30px_rgba(0,0,0,0.5)] mb-6 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/25 group select-none">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-neutral-200 font-medium group-hover:text-white transition-colors">
              Your Phone is Player 1
            </span>
          </div>
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
              <Scroll3DSection key={product.name} isOdd={isOdd}>
                <div
                  className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
                    isOdd ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text and stats side */}
                  <div className="flex-1 space-y-6 w-full">
                    <span className="text-xs text-white/45 tracking-widest uppercase font-mono">
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
                  <TiltCard>
                    {/* Background Video loop */}
                    <video
                      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity duration-500 rounded-2xl"
                      style={{ transform: "translateZ(30px) scale(1.05)", backfaceVisibility: "hidden" }}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      src={product.video}
                    />

                    {/* Soft blurred color blob */}
                    <div
                      className="absolute h-56 w-56 rounded-full blur-[100px] opacity-25 group-hover:scale-125 transition-transform duration-700 pointer-events-none"
                      style={{ backgroundColor: product.blobColor, transform: "translateZ(-40px)" }}
                    />

                    {/* High tech frame overlay */}
                    <div className="absolute top-4 left-4 h-4 w-4 border-t border-l border-white/20 rounded-tl" style={{ transform: "translateZ(50px)" }} />
                    <div className="absolute top-4 right-4 h-4 w-4 border-t border-r border-white/20 rounded-tr" style={{ transform: "translateZ(50px)" }} />
                    <div className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-white/20 rounded-bl" style={{ transform: "translateZ(50px)" }} />
                    <div className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-white/20 rounded-br" style={{ transform: "translateZ(50px)" }} />
                  </TiltCard>
                </div>
              </Scroll3DSection>
            );
          })}

          {/* Full-width CTA strip */}
          <div className="relative w-full bg-neutral-950/70 border border-white/5 rounded-3xl p-8 sm:p-16 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden group hover:border-white/10 transition-all duration-300">
            {/* Color Blob inside CTA */}
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#FA8453]/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#FA8453]/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500" />

            <div className="relative z-10 space-y-4 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-none uppercase">
                Ready to elevate your simulator setup?
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light max-w-xl">
                Download the desktop companion app, pair your smartphone, and step into an immersive cockpit experience with zero-latency controls.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
              <Link to="/product/sim-gamepad" className="w-full sm:w-auto">
                <GlassButton
                  glassColor="linear-gradient(90deg, #FA8453 0%, #F8C9B2 100%)"
                  className="w-full sm:w-auto"
                  size="lg"
                >
                  <span className="text-black font-semibold">get started</span>
                </GlassButton>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-neutral-900 border border-white/10 text-white hover:text-white hover:bg-neutral-800 text-base font-medium rounded-full px-8 py-4 transition-all duration-300 active:scale-95 cursor-pointer">
                  contact support
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
