"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  const [hasAnimated, setHasAnimated] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isDrawingComplete, setIsDrawingComplete] = useState(false);

  useEffect(() => {
    if (hasAnimated) {
      setIsDrawingComplete(true);
    }
  }, [hasAnimated]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 600 100"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
        className={cn("select-none uppercase cursor-default", className)}
      >
      <defs>
        <linearGradient
          id="textGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
          gradientUnits="userSpaceOnUse"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#FA8453" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#3B82F6" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-800 font-sans text-6xl md:text-7xl font-bold dark:stroke-neutral-800"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent font-sans text-6xl md:text-7xl font-bold"
        initial={
          hasAnimated
            ? false
            : {
                strokeDashoffset: 1000,
                strokeDasharray: 1000,
                stroke: "rgba(255, 255, 255, 0.85)",
              }
        }
        animate={
          isInView
            ? {
                strokeDashoffset: 0,
                strokeDasharray: 1000,
                stroke: isDrawingComplete ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.85)",
              }
            : {}
        }
        transition={{
          strokeDashoffset: { duration: hasAnimated ? 4 : 0, ease: "easeInOut" },
          stroke: { duration: isDrawingComplete ? 1.5 : 0, ease: "easeOut" },
        }}
        onAnimationComplete={() => {
          if (isInView && !isDrawingComplete) {
            setIsDrawingComplete(true);
          }
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="fill-transparent font-sans text-6xl md:text-7xl font-bold"
      >
        {text}
      </text>
    </svg>
    </div>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, rgba(15, 15, 17, 0.4) 50%, rgba(0, 0, 0, 1) 100%)",
      }}
    />
  );
};
