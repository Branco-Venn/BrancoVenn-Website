import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingIntroProps {
  onComplete: () => void;
}

export const LoadingIntro: React.FC<LoadingIntroProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Total duration is 4.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for exit animation to finish (1s) before calling onComplete
      const unmountTimer = setTimeout(() => {
        sessionStorage.setItem("gn_visited", "true");
        onComplete();
      }, 1000);
      return () => clearTimeout(unmountTimer);
    }, 3500); // 1.5s fade-in + 1.5s hold + 0.5s pre-fade = 3.5s before we start standard fading out

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center select-none cursor-default"
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
        >
          {/* Subtle color blob in the center behind the logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FA8453]/10 rounded-full blur-3xl" />

          <motion.div
            initial={{ opacity: 0, filter: "blur(12px)", scale: 0.95 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-4 relative z-10"
          >
            {/* Standard Branco Venn typography */}
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-medium tracking-tighter font-sans select-none">
              Branco Venn
            </h1>
            <div className="h-0.5 w-12 bg-gradient-to-r from-[#FA8453] to-[#F8C9B2] rounded-full mt-2" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
