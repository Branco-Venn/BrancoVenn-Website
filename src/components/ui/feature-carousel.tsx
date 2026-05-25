"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import clsx from "clsx";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  type MotionStyle,
  type MotionValue,
  type Variants,
} from "framer-motion";

import { cn } from "@/lib/utils";

type WrapperStyle = MotionStyle & {
  "--x": MotionValue<string>;
  "--y": MotionValue<string>;
};



interface ImageSet {
  step1light1: string;
  step1light2: string;
  step2light1: string;
  step2light2: string;
  step3light: string;
  step4light: string;
  alt: string;
}

export interface ComponentProps {
  title: string;
  description: string;
  bgClass?: string;
  step1img1Class?: string;
  step1img2Class?: string;
  step2img1Class?: string;
  step2img2Class?: string;
  step3imgClass?: string;
  step4imgClass?: string;
  image: ImageSet;
}

interface StepImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

interface Step {
  id: string;
  name: string;
  title: string;
  description: string;
}

const TOTAL_STEPS = 4;

const steps: readonly Step[] = [
  {
    id: "1",
    name: "Step 1",
    title: "Precision Gyro Steering",
    description: "Use your phone's motion sensors for smooth and realistic steering control. Tilt naturally like a real steering wheel with highly responsive sensor processing.",
  },
  {
    id: "2",
    name: "Step 2",
    title: "Fully Customizable Controls",
    description: "Create your ideal setup with movable buttons, adjustable layouts, custom sizes, and personalized control schemes tailored for every game.",
  },
  {
    id: "3",
    name: "Step 3",
    title: "True Analog Control",
    description: "Enjoy smooth acceleration, braking, throttle, and steering with analog precision designed for simulation accuracy and competitive driving.",
  },
  {
    id: "4",
    name: "Step 4",
    title: "Fast & Reliable Connectivity",
    description: "Connect instantly using advanced wireless or wired communication (Wi-Fi, Bluetooth, or USB) for stable gameplay and reduced input delay.",
  },
] as const;

const ANIMATION_PRESETS = {
  fadeInScale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      mass: 0.5,
    },
  },
  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      mass: 0.5,
    },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      mass: 0.5,
    },
  },
} as const;

type AnimationPreset = keyof typeof ANIMATION_PRESETS;

interface AnimatedStepImageProps extends StepImageProps {
  preset?: AnimationPreset;
  delay?: number;
  onAnimationComplete?: () => void;
}

function useNumberCycler(
  totalSteps: number = TOTAL_STEPS,
  interval: number = 4000
) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const timerRef = useRef<any>(null);

  const setupTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setCurrentNumber((prev) => (prev + 1) % totalSteps);
      setupTimer();
    }, interval);
  }, [interval, totalSteps]);

  const increment = useCallback(() => {
    setCurrentNumber((prev) => (prev + 1) % totalSteps);
    setupTimer();
  }, [totalSteps, setupTimer]);

  const setStep = useCallback((index: number) => {
    setCurrentNumber(index);
    setupTimer();
  }, [setupTimer]);

  useEffect(() => {
    setupTimer();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [setupTimer]);

  return {
    currentNumber,
    increment,
    setStep
  };
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isSmall = window.matchMedia("(max-width: 768px)").matches;
    const isMobileUserAgent = Boolean(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.exec(
        userAgent
      )
    );
    setIsMobile(isSmall || isMobileUserAgent);
  }, []);
  return isMobile;
}

const stepVariants: Variants = {
  inactive: {
    scale: 0.8,
    opacity: 0.5,
  },
  active: {
    scale: 1,
    opacity: 1,
  },
};

const StepImage = forwardRef<
  HTMLImageElement,
  StepImageProps & { [key: string]: any }
>(
  (
    { src, alt, className, style, ...props },
    ref
  ) => {
    return (
      <img
        ref={ref}
        alt={alt}
        className={className}
        src={src}
        style={{
          position: "absolute",
          userSelect: "none",
          maxWidth: "unset",
          ...style,
        }}
        {...props}
      />
    );
  }
);
StepImage.displayName = "StepImage";

const MotionStepImage = motion(StepImage);

const AnimatedStepImage = ({
  preset = "fadeInScale",
  delay = 0,
  onAnimationComplete,
  ...props
}: AnimatedStepImageProps) => {
  const presetConfig = ANIMATION_PRESETS[preset];
  return (
    <MotionStepImage
      {...props}
      {...presetConfig}
      transition={{
        ...presetConfig.transition,
        delay,
      }}
      onAnimationComplete={onAnimationComplete}
    />
  );
};

function FeatureCard({
  bgClass,
  children,
  step,
}: {
  bgClass?: string;
  children: React.ReactNode;
  step: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isMobile = useIsMobile();

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    if (isMobile) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className="animated-cards relative w-full rounded-[16px]"
      onMouseMove={handleMouseMove}
      style={
        {
          "--x": useMotionTemplate`${mouseX}px`,
          "--y": useMotionTemplate`${mouseY}px`,
        } as WrapperStyle
      }
    >
      <div
        className={clsx(
          "group relative w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900/90 to-neutral-955 transition duration-300",
          "md:hover:border-orange-500/20",
          bgClass
        )}
      >
        <div className="m-6 sm:m-10 min-h-[450px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              className="flex w-full md:w-3/6 flex-col gap-3 relative z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <span className="text-[10px] text-orange-500 uppercase tracking-widest font-mono font-medium">
                Step {step + 1}
              </span>
              <motion.h2
                className="text-xl font-bold tracking-tight text-white md:text-3xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 0.3,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                {steps[step].title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.3,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                <p className="text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7">
                  {steps[step].description}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          
          <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] mt-8 overflow-hidden rounded-2xl bg-black/40 border border-white/5">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Steps({
  steps: stepData,
  current,
  onChange,
}: {
  steps: readonly Step[];
  current: number;
  onChange: (index: number) => void;
}) {
  return (
    <nav aria-label="Progress" className="flex justify-center w-full px-4">
      <ol
        className="flex w-full flex-wrap items-center justify-center gap-2"
        role="list"
      >
        {stepData.map((step, stepIdx) => {
          const isCurrent = current === stepIdx;

          return (
            <motion.li
              key={`${step.name}-${stepIdx}`}
              initial="inactive"
              animate={isCurrent ? "active" : "inactive"}
              variants={stepVariants}
              transition={{ duration: 0.3 }}
              className={cn(
                "relative z-50 rounded-full px-4 py-1.5 transition-all duration-300 ease-in-out cursor-pointer",
                isCurrent 
                  ? "bg-orange-500/20 border border-orange-500/40" 
                  : "bg-neutral-800/40 hover:bg-neutral-800/80 border border-white/5"
              )}
              onClick={() => onChange(stepIdx)}
            >
              <div className="flex items-center gap-2 focus:outline-none">
                <span className="flex items-center gap-2 text-xs sm:text-sm font-medium">
                  <span
                    className={cn(
                      "flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px]",
                      isCurrent ? "bg-orange-500 text-black font-bold" : "bg-neutral-700 text-neutral-300"
                    )}
                  >
                    {stepIdx + 1}
                  </span>
                  <span
                    className={clsx(
                      "text-xs font-mono tracking-tight",
                      isCurrent ? "text-orange-500 font-medium" : "text-neutral-400"
                    )}
                  >
                    {step.name}
                  </span>
                </span>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </nav>
  );
}

const defaultClasses = {
  step1img1:
    "pointer-events-none w-[45%] border border-white/10 rounded-2xl shadow-2xl transition-all duration-500",
  step1img2:
    "pointer-events-none w-[55%] border border-white/10 rounded-2xl shadow-2xl transition-all duration-500",
  step2img1:
    "pointer-events-none w-[45%] border border-white/10 rounded-2xl shadow-2xl transition-all duration-500",
  step2img2:
    "pointer-events-none w-[35%] border border-white/10 rounded-2xl shadow-2xl transition-all duration-500",
  step3img:
    "pointer-events-none w-[80%] border border-white/10 rounded-2xl shadow-2xl transition-all duration-500",
  step4img:
    "pointer-events-none w-[80%] border border-white/10 rounded-2xl shadow-2xl transition-all duration-500",
} as const;

export const FeatureCarousel = ({
  image,
  step1img1Class = defaultClasses.step1img1,
  step1img2Class = defaultClasses.step1img2,
  step2img1Class = defaultClasses.step2img1,
  step2img2Class = defaultClasses.step2img2,
  step3imgClass = defaultClasses.step3img,
  step4imgClass = defaultClasses.step4img,
  bgClass,
}: ComponentProps) => {
  const { currentNumber: step, increment, setStep } = useNumberCycler();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleIncrement = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    increment();
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <motion.div
            className="relative w-full h-full"
            onAnimationComplete={handleAnimationComplete}
          >
            <AnimatedStepImage
              alt={image.alt}
              className={clsx(step1img1Class)}
              src={image.step1light1}
              preset="slideInLeft"
            />
            <AnimatedStepImage
              alt={image.alt}
              className={clsx(step1img2Class)}
              src={image.step1light2}
              preset="slideInRight"
              delay={0.1}
            />
          </motion.div>
        );
      case 1:
        return (
          <motion.div
            className="relative w-full h-full"
            onAnimationComplete={handleAnimationComplete}
          >
            <AnimatedStepImage
              alt={image.alt}
              className={clsx(step2img1Class)}
              src={image.step2light1}
              preset="fadeInScale"
            />
            <AnimatedStepImage
              alt={image.alt}
              className={clsx(step2img2Class)}
              src={image.step2light2}
              preset="fadeInScale"
              delay={0.1}
            />
          </motion.div>
        );
      case 2:
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatedStepImage
              alt={image.alt}
              className={clsx(step3imgClass)}
              src={image.step3light}
              preset="fadeInScale"
              onAnimationComplete={handleAnimationComplete}
            />
          </div>
        );
      case 3:
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatedStepImage
              alt={image.alt}
              className={clsx(step4imgClass)}
              src={image.step4light}
              preset="fadeInScale"
              onAnimationComplete={handleAnimationComplete}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full space-y-6">
      <FeatureCard step={step} bgClass={bgClass}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            {...ANIMATION_PRESETS.fadeInScale}
            className="w-full h-full absolute"
          >
            {renderStepContent()}
          </motion.div>
        </AnimatePresence>
        
        {/* Next step tap overlay */}
        <motion.div
          className="absolute right-0 top-0 z-40 h-full w-full cursor-pointer"
          onClick={handleIncrement}
        />
      </FeatureCard>

      <div className="flex justify-center w-full relative z-50">
        <Steps current={step} onChange={setStep} steps={steps} />
      </div>
    </div>
  );
};
