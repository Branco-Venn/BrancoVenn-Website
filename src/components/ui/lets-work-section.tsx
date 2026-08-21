"use client"

import type React from "react"
import { useState } from "react"
import { ArrowUpRight, Mail } from "lucide-react"

export function LetsWorkTogether() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsClicked(true)

    setTimeout(() => {
      setShowSuccess(true)
    }, 500)
  }

  const handleSendMail = () => {
    window.location.href = "mailto:contact@brancovenn.com?subject=Careers%20at%20Branco%20Venn"
  }

  return (
    <section className="flex min-h-[85vh] items-center justify-center px-6 relative select-none">
      <div className="relative flex flex-col items-center gap-12 max-w-4xl w-full">
        
        {/* Success / Mail Action State */}
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: showSuccess ? 1 : 0,
            transform: showSuccess ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
            pointerEvents: showSuccess ? "auto" : "none",
          }}
        >
          {/* Elegant heading */}
          <div className="flex flex-col items-center gap-2 text-center">
            <span
              className="text-xs font-mono tracking-[0.3em] uppercase text-neutral-400 transition-all duration-500"
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "100ms",
              }}
            >
              Open Positions & Opportunities
            </span>
            <h3
              className="text-3xl font-light tracking-tight text-white transition-all duration-500 sm:text-5xl"
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "200ms",
              }}
            >
              Let's build together
            </h3>
          </div>

          {/* Mail button */}
          <button
            onClick={handleSendMail}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            className="group relative flex items-center gap-4 transition-all duration-500 cursor-pointer"
            style={{
              transform: showSuccess
                ? isButtonHovered
                  ? "translateY(0) scale(1.02)"
                  : "translateY(0) scale(1)"
                : "translateY(15px) scale(1)",
              opacity: showSuccess ? 1 : 0,
              transitionDelay: "150ms",
            }}
          >
            {/* Left line */}
            <div
              className="h-px w-8 bg-white/20 transition-all duration-500 sm:w-12"
              style={{
                transform: isButtonHovered ? "scaleX(0)" : "scaleX(1)",
                opacity: isButtonHovered ? 0 : 0.5,
              }}
            />

            {/* Button content */}
            <div
              className="relative flex items-center gap-3 overflow-hidden rounded-full border border-white/20 px-6 py-3.5 transition-all duration-500 sm:px-8 sm:py-4"
              style={{
                borderColor: isButtonHovered ? "#ffffff" : "rgba(255, 255, 255, 0.2)",
                backgroundColor: isButtonHovered ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
                boxShadow: isButtonHovered ? "0 0 35px rgba(255,255,255,0.2), 0 10px 40px rgba(0,0,0,0.5)" : "none",
              }}
            >
              <Mail
                className="size-4 transition-all duration-500 sm:size-5"
                strokeWidth={1.5}
                style={{
                  color: isButtonHovered ? "#000000" : "#ffffff",
                }}
              />
              <span
                className="text-sm font-medium tracking-wide transition-all duration-500 sm:text-base"
                style={{
                  color: isButtonHovered ? "#000000" : "#ffffff",
                }}
              >
                Mail Us
              </span>
              <ArrowUpRight
                className="size-4 transition-all duration-500 sm:size-5"
                strokeWidth={1.5}
                style={{
                  color: isButtonHovered ? "#000000" : "#ffffff",
                  transform: isButtonHovered ? "translate(3px, -3px) scale(1.1)" : "translate(0, 0) scale(1)",
                }}
              />
            </div>

            {/* Right line */}
            <div
              className="h-px w-8 bg-white/20 transition-all duration-500 sm:w-12"
              style={{
                transform: isButtonHovered ? "scaleX(0)" : "scaleX(1)",
                opacity: isButtonHovered ? 0 : 0.5,
              }}
            />
          </button>

          {/* Subtle subtext */}
          <div className="flex flex-col items-center gap-1 text-center">
            <span
              className="text-xs font-mono tracking-widest uppercase text-neutral-400 transition-all duration-500"
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "450ms",
              }}
            >
              contact@brancovenn.com
            </span>
            <span className="text-[11px] text-neutral-500">
              Attach your portfolio, resume, or GitHub profile
            </span>
          </div>
        </div>

        {/* Status Pill Badge */}
        <div
          className="flex items-center gap-3 transition-all duration-500"
          style={{
            opacity: isClicked ? 0 : 1,
            transform: isClicked ? "translateY(-20px)" : "translateY(0)",
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-neutral-400 font-mono">
            We're Hiring &amp; Collaborating
          </span>
        </div>

        {/* Interactive Main Callout */}
        <div
          className="group relative cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
          style={{
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <div className="flex flex-col items-center gap-6">
            <h2
              className="relative text-center text-5xl font-light tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: isClicked ? 0 : 1,
                transform: isClicked ? "translateY(-40px) scale(0.95)" : "translateY(0) scale(1)",
              }}
            >
              <span className="block overflow-hidden">
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                  }}
                >
                  Let's work
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75"
                  style={{
                    transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                  }}
                >
                  <span className="text-neutral-500">together</span>
                </span>
              </span>
            </h2>

            <div className="relative mt-4 flex size-16 items-center justify-center sm:size-20">
              <div
                className="pointer-events-none absolute inset-0 rounded-full border transition-all ease-out"
                style={{
                  borderColor: isClicked ? "#ffffff" : isHovered ? "#ffffff" : "rgba(255, 255, 255, 0.2)",
                  backgroundColor: isClicked ? "transparent" : isHovered ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
                  transform: isClicked ? "scale(3)" : isHovered ? "scale(1.1)" : "scale(1)",
                  opacity: isClicked ? 0 : 1,
                  transitionDuration: isClicked ? "700ms" : "500ms",
                }}
              />
              <ArrowUpRight
                className="size-6 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] sm:size-7"
                style={{
                  transform: isClicked
                    ? "translate(100px, -100px) scale(0.5)"
                    : isHovered
                      ? "translate(2px, -2px)"
                      : "translate(0, 0)",
                  opacity: isClicked ? 0 : 1,
                  color: isHovered && !isClicked ? "#000000" : "#ffffff",
                  transitionDuration: isClicked ? "600ms" : "500ms",
                }}
              />
            </div>
          </div>

          <div className="absolute -left-8 top-1/2 -translate-y-1/2 sm:-left-16">
            <div
              className="h-px w-8 bg-white/20 transition-all duration-500 sm:w-12"
              style={{
                transform: isClicked ? "scaleX(0) translateX(-20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
              }}
            />
          </div>
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 sm:-right-16">
            <div
              className="h-px w-8 bg-white/20 transition-all duration-500 sm:w-12"
              style={{
                transform: isClicked ? "scaleX(0) translateX(20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
              }}
            />
          </div>
        </div>

        {/* Initial descriptive subtext */}
        <div
          className="mt-4 flex flex-col items-center gap-4 text-center transition-all duration-500 delay-100"
          style={{
            opacity: isClicked ? 0 : 1,
            transform: isClicked ? "translateY(20px)" : "translateY(0)",
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <p className="max-w-md text-sm leading-relaxed text-neutral-400">
            Passionate about high-performance software, simulation tech, or hardware innovation? Let's create something exceptional together.
          </p>
          <span className="text-xs font-mono tracking-widest uppercase text-neutral-500">
            Click to apply / contact@brancovenn.com
          </span>
        </div>
      </div>
    </section>
  )
}
