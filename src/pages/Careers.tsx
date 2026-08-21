import React from "react";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { LetsWorkTogether } from "@/components/ui/lets-work-section";
import { Zap, Send } from "lucide-react";

export const Careers: React.FC = () => {
  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-black text-white font-body selection:bg-white selection:text-black relative overflow-x-hidden pt-24 pb-16">
        
        {/* Sticky Background Video / Gradient Aura */}
        <div className="fixed inset-0 z-0 pointer-events-none w-full h-full overflow-hidden bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover mix-blend-lighten opacity-20"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_132809_d6ea910f-d700-44f7-afea-27d517487177.mp4"
          />
          <div className="absolute inset-0 bg-[#000000]/70 pointer-events-none z-[1]" />
          <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-[2]" />
          <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-[2]" />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-16 md:pt-24 pb-8 text-center select-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-6"
          >
            <span className="text-[10px] font-mono tracking-[0.6em] text-neutral-400 uppercase block">
              Careers &amp; Opportunities
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] leading-none text-white">
              Shape the <span className="font-accent italic font-normal text-white">Future</span>
            </h1>
            <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
              Our current products are live — now we're looking for bold ideas and people who want to define what we build next.
            </p>
            <div className="w-[100px] h-[1.5px] bg-white/20 mx-auto rounded-full mt-8" />
          </motion.div>
        </section>

        {/* The Interactive Let's Work Together Callout Section */}
        <section className="relative z-10 w-full max-w-6xl mx-auto px-4 my-8">
          <div className="bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-xl p-4 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />
            <LetsWorkTogether />
          </div>
        </section>

        {/* Culture & Values */}
        <section className="relative z-10 w-full max-w-4xl mx-auto px-6 py-12">
          <div className="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 rounded-3xl p-8 md:p-12 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
              <Zap className="w-3.5 h-3.5 text-white" />
              <span>Direct Impact &amp; Ownership</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium text-white max-w-lg mx-auto leading-snug">
              Work with founders, ship production code, and define the standard.
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mx-auto font-light leading-relaxed">
              Whether you are an experienced architect or an ambitious prodigy, if you build extraordinary things with speed and pride, we have a place for you.
            </p>
            <div className="pt-2">
              <a
                href="mailto:contact@brancovenn.com?subject=Careers%20at%20Branco%20Venn"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-all hover:scale-105"
              >
                <Send className="w-4 h-4" />
                <span>Send Application / Portfolio</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default Careers;

