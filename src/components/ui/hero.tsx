"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface HeroAction {
  label: string;
  href: string;
  variant?: "default" | "outline" | "secondary";
  onClick?: () => void;
}

export interface HeroProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  gradient?: boolean;
  blur?: boolean;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  actions?: HeroAction[];
  titleClassName?: string;
  subtitleClassName?: string;
  actionsClassName?: string;
  videoSrc?: string;
}

export const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      gradient = true,
      blur = true,
      title,
      subtitle,
      actions,
      titleClassName,
      subtitleClassName,
      actionsClassName,
      videoSrc,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative z-0 flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-black py-20",
          className
        )}
        {...props}
      >
        {/* Background Video */}
        {videoSrc && (
          <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-65"
            />
            <div className="absolute inset-0 bg-black/45 z-10" />
          </div>
        )}

        {gradient && (
          <div className="absolute top-0 isolate z-10 flex w-screen flex-1 items-start justify-center pointer-events-none">
            {blur && (
              <div className="absolute top-0 z-50 h-48 w-screen bg-transparent opacity-10 backdrop-blur-md" />
            )}

            {/* Main glow */}
            <div className="absolute inset-auto z-50 h-44 w-[36rem] -translate-y-[-20%] rounded-full bg-orange-500/15 opacity-70 blur-3xl" />

            {/* Lamp effect (only without video) */}
            {!videoSrc && (
              <>
                <motion.div
                  initial={{ width: "10rem" }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
                  whileInView={{ width: "22rem" }}
                  className="absolute top-0 z-30 h-44 -translate-y-[20%] rounded-full bg-orange-500/30 blur-3xl"
                />

                {/* Top line */}
                <motion.div
                  initial={{ width: "20rem" }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
                  whileInView={{ width: "40rem" }}
                  className="absolute inset-auto z-50 h-0.5 -translate-y-[-10%] bg-orange-500/40"
                />

                {/* Left gradient cone */}
                <motion.div
                  initial={{ opacity: 0.5, width: "20rem" }}
                  whileInView={{ opacity: 1, width: "40rem" }}
                  transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  style={{
                    backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                  }}
                  className="absolute inset-auto right-1/2 h-64 overflow-visible w-[40rem] bg-gradient-conic from-orange-500/30 via-transparent to-transparent [--conic-position:from_70deg_at_center_top] [--tw-gradient-from:rgba(249,115,22,0.3)] [--tw-gradient-to:transparent]"
                >
                  <div className="absolute w-[100%] left-0 bg-black h-48 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                  <div className="absolute w-48 h-[100%] left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </motion.div>

                {/* Right gradient cone */}
                <motion.div
                  initial={{ opacity: 0.5, width: "20rem" }}
                  whileInView={{ opacity: 1, width: "40rem" }}
                  transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  style={{
                    backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                  }}
                  className="absolute inset-auto left-1/2 h-64 w-[40rem] bg-gradient-conic from-transparent via-transparent to-orange-500/30 [--conic-position:from_290deg_at_center_top] [--tw-gradient-from:transparent] [--tw-gradient-to:rgba(249,115,22,0.3)]"
                >
                  <div className="absolute w-48 h-[100%] right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                  <div className="absolute w-[100%] right-0 bg-black h-48 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </motion.div>
              </>
            )}
          </div>
        )}

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="relative z-30 container mx-auto flex justify-center flex-1 flex-col px-6 md:px-10 gap-6 text-center max-w-4xl"
        >
          <div className="flex flex-col items-center space-y-6">
            <h1
              className={cn(
                "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight uppercase font-sans",
                titleClassName
              )}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className={cn(
                  "text-base sm:text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto",
                  subtitleClassName
                )}
              >
                {subtitle}
              </p>
            )}
            {actions && actions.length > 0 && (
              <div className={cn("flex flex-wrap items-center justify-center gap-4 pt-4", actionsClassName)}>
                {actions.map((action, index) => {
                  const isOutline = action.variant === "outline";
                  return (
                    <Link
                      key={index}
                      to={action.href}
                      onClick={action.onClick}
                      className={cn(
                        "rounded-full px-8 py-3.5 text-sm font-medium transition-all duration-300 active:scale-95 cursor-pointer shadow-lg",
                        isOutline
                          ? "border border-white/10 text-white bg-neutral-900/40 hover:bg-neutral-900/80 hover:border-orange-500/20"
                          : "bg-white text-black hover:bg-neutral-200 shadow-white/5"
                      )}
                    >
                      {action.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </motion.div>
      </section>
    );
  }
);
Hero.displayName = "Hero";
