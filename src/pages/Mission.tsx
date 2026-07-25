import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";

// Word Component for Rules-of-Hooks-friendly scroll reveal
const Word: React.FC<{ word: string; progress: any; range: [number, number] }> = ({
  word,
  progress,
  range,
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em] select-none">
      {word}
    </motion.span>
  );
};

// ScrollRevealText component
const ScrollRevealText: React.FC<{ text: string }> = ({ text }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.35"],
  });

  const words = text.split(" ");

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto text-center py-20 px-4">
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-relaxed font-body text-white">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = (i + 1) / words.length;
          return (
            <Word
              key={i}
              word={word}
              progress={scrollYProgress}
              range={[start, end]}
            />
          );
        })}
      </p>
    </div>
  );
};

export const Mission: React.FC = () => {
  // Rotating statements inside Hero overlay
  const rotatingStatements = [
    "Seamless systems that simply work.",
    "Respond instantly. Empower people.",
    "Frictionless, immediate, immersive.",
  ];
  const [statementIndex, setStatementIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStatementIndex((prev) => (prev + 1) % rotatingStatements.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-black text-white font-body selection:bg-white selection:text-black relative overflow-x-hidden pt-24 pb-12">
        
        {/* ─── FULL PAGE STICKY BACKGROUND VIDEO ─── */}
        <div className="fixed inset-0 z-0 pointer-events-none w-full h-full overflow-hidden bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover mix-blend-lighten opacity-25"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_132809_d6ea910f-d700-44f7-afea-27d517487177.mp4"
          />
          {/* Deep dark gradient overlays to blend the video perfectly */}
          <div className="absolute inset-0 bg-[#000000]/60 pointer-events-none z-[1]" />
          <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-[2]" />
          <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-black via-black/40 to-transparent pointer-events-none z-[2]" />
          
          {/* Glowing ambient background orbs */}
          <div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none z-[1]"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </div>

        {/* ─── HERO INTRO SECTION ─── */}
        <section className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-16 md:pt-28 pb-12 text-center select-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6"
          >
            <span className="text-[10px] font-mono tracking-[0.6em] text-neutral-400 uppercase block">
              Our Mission
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] leading-none text-white">
              Invisible <span className="font-accent italic font-normal text-white">Technology</span>
            </h1>
            
            {/* Rotating interactive statement */}
            <div className="h-10 relative flex justify-center items-center">
              {rotatingStatements.map((text, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: statementIndex === idx ? 1 : 0,
                    y: statementIndex === idx ? 0 : -10,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute text-sm md:text-base text-neutral-400 font-light"
                >
                  {text}
                </motion.p>
              ))}
            </div>
            
            <div className="w-[100px] h-[1.5px] bg-white/20 mx-auto rounded-full mt-8" />
          </motion.div>
        </section>

        {/* ─── SECTION 1: OUR MISSION ─── */}
        <section className="relative z-10 w-full bg-transparent py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[10px] font-mono tracking-[0.4em] text-neutral-500 uppercase block mb-3">
                01 // Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-[-1px] text-white">
                OUR MISSION
              </h2>
            </div>
            
            {/* High-fidelity Scroll Reveal Text animation */}
            <ScrollRevealText
              text="At Branco Venn, our mission is to redefine how people interact with technology through software that feels seamless, responsive, and natural. We believe technology should adapt to people — not the other way around. Our products are designed to remove friction between intention and action, creating experiences that feel immediate, immersive, and intuitive."
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto mt-6"
            >
              {/* Premium Quote Card */}
              <div className="liquid-glass rounded-2xl p-8 border border-white/5 space-y-4">
                <p className="text-neutral-400 font-light text-base leading-relaxed">
                  From gaming and simulation to future utility platforms, we focus on building software that transforms everyday devices into powerful interaction systems.
                </p>
                <p className="text-neutral-400 font-light text-base leading-relaxed">
                  With products like <span className="text-white font-medium">Sim Gamepad</span>, we aim to make advanced digital experiences accessible to everyone through intelligent software, not expensive hardware.
                </p>
                <p className="text-white font-medium text-base pt-2">
                  We are building a future where technology feels invisible — fluid systems that simply work, respond instantly, and empower people to do more.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── SECTION 2: OUR MANIFESTO ─── */}
        <section className="relative z-10 w-full bg-transparent py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[10px] font-mono tracking-[0.4em] text-neutral-500 uppercase block mb-3">
                02 // Pillars
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-[-1px] text-white">
                OUR MANIFESTO
              </h2>
              <p className="text-neutral-400 text-lg max-w-xl mx-auto font-light mt-4 leading-relaxed">
                We believe utility software should be as innovative, immersive, and refined as the world’s best consumer technology.
              </p>
            </div>

            {/* Glassmorphic grid showing: Responsiveness, Design, Experience */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { title: "Responsiveness", desc: "Speed matters. Milliseconds shape how systems respond to human impulse." },
                { title: "Design", desc: "Aesthetics and layout drive visual satisfaction. Clarity yields precision." },
                { title: "Experience", desc: "Intuitive systems align technology with human instinct naturally." },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="liquid-glass rounded-2xl p-8 border border-white/5 hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300"
                >
                  <span className="text-xs font-mono text-neutral-500 block mb-4">
                    02.{i + 1}
                  </span>
                  <h3 className="text-xl font-medium text-white mb-2">
                    {p.title} <span className="font-accent italic font-normal text-white">matters.</span>
                  </h3>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6 flex flex-col justify-center"
              >
                <p className="text-neutral-400 font-light text-base leading-relaxed">
                  At Branco Venn, we create focused software that removes the distance between action and response. Every feature must have purpose. Every interaction must feel intentional.
                </p>
                <p className="text-neutral-400 font-light text-base leading-relaxed">
                  Our obsession with fluidity, low latency, immersion, and accessibility drives everything we create.
                </p>
                <p className="text-white font-medium text-lg pt-2 leading-relaxed">
                  We are not just building applications.<br />
                  We are building the future of human-machine interaction.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="liquid-glass-strong rounded-2xl p-8 border border-white/10 space-y-6"
              >
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 block uppercase">
                  TRANSFORMATION ENGINE
                </span>
                <p className="text-white font-light text-sm">
                  We build tools that turn devices into experiences:
                </p>
                <ul className="space-y-4">
                  {[
                    "A phone can become a controller",
                    "Motion can become precision",
                    "Software can become instinct",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                      <span className="text-sm text-neutral-300 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: THE FUTURE WE SEE ─── */}
        <section className="relative z-10 w-full bg-transparent py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[10px] font-mono tracking-[0.4em] text-neutral-500 uppercase block mb-3">
                03 // Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-[-1px] text-white">
                THE FUTURE WE SEE
              </h2>
            </div>

            <div className="space-y-12">
              <ScrollRevealText
                text="We envision a future where software becomes an intelligent bridge between humans and machines — adaptive, immersive, and effortless."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {/* Left col: Bullet points */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="liquid-glass rounded-2xl p-8 border border-white/5 space-y-6"
                >
                  <p className="text-white text-sm font-medium tracking-wide uppercase font-mono">
                    A future where:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Devices connect seamlessly",
                      "Interfaces react instantly",
                      "Technology feels natural",
                      "Software removes hardware limitations",
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-2" />
                        <span className="text-neutral-300 font-light text-sm">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-white font-medium text-base pt-2">
                    Branco Venn exists to build that future.
                  </p>
                </motion.div>

                {/* Right col: Smarter / Human Contrast */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="flex flex-col justify-between gap-6"
                >
                  <div className="liquid-glass rounded-2xl p-6 border border-white/5 flex-1 flex flex-col justify-center text-center">
                    <span className="text-[10px] font-mono text-neutral-500 line-through mb-1.5">
                      Not louder technology.
                    </span>
                    <span className="text-white text-lg font-medium">
                      Smarter technology.
                    </span>
                  </div>

                  <div className="liquid-glass rounded-2xl p-6 border border-white/5 flex-1 flex flex-col justify-center text-center">
                    <span className="text-[10px] font-mono text-neutral-500 line-through mb-1.5">
                      Not more complexity.
                    </span>
                    <span className="text-white text-lg font-medium">
                      More human experiences.
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};
