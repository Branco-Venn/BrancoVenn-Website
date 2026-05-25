import React from "react";
import { Link } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import { GlassButton } from "@/components/ui/apple-tahoe-liquid-glass-button";

export const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <div className="bg-black min-h-screen w-full flex flex-col items-center justify-center text-center px-4 relative z-10 select-none">
        {/* Inline style for keyframe glitch animation */}
        <style>{`
          @keyframes glitch {
            0%, 100% { text-shadow: none; transform: none; }
            20% { text-shadow: -4px 0 #FA8453, 4px 0 #00d2ff; transform: skewX(-2deg); }
            40% { text-shadow: 4px 0 #FA8453, -4px 0 #00d2ff; transform: skewX(2deg); }
            60% { text-shadow: none; transform: none; }
          }
          .glitch-text {
            animation: glitch 2s infinite;
          }
        `}</style>

        {/* Soft background blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FA8453]/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Glitch H1 */}
        <h1
          className="glitch-text text-[24vw] md:text-[20vw] font-medium text-white leading-none relative z-10"
          style={{ letterSpacing: "-0.06em" }}
        >
          404
        </h1>

        {/* Text */}
        <p className="text-white/40 text-sm sm:text-base font-light max-w-xs sm:max-w-sm mt-4 mb-10 relative z-10 leading-relaxed">
          It seems you've navigated off course into untracked cyberspace.
        </p>

        {/* Liquid Glass Return Button */}
        <Link to="/" className="relative z-10 cursor-pointer">
          <GlassButton
            glassColor="rgba(255, 255, 255, 0.05)"
            className="hover:scale-105 transition-transform"
          >
            <span className="bg-gradient-to-r from-[#FA8453] to-[#F8C9B2] bg-clip-text text-transparent font-medium">
              Back to Safety
            </span>
          </GlassButton>
        </Link>
      </div>
    </PageTransition>
  );
};
