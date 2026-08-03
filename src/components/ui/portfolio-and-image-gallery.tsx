'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, {
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { HTMLAttributes, ReactNode, Ref } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function useMergeRefs<T>(...refs: (Ref<T> | undefined)[]) {
  return useMemo(() => {
    if (refs.every((ref) => ref == null)) return null;
    return (node: T) => {
      refs.forEach((ref) => {
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref != null) {
          (ref as React.MutableRefObject<T | null>).current = node;
        }
      });
    };
  }, [refs]);
}

function useResponsiveValue(baseValue: number, mobileValue: number) {
  const [value, setValue] = useState(baseValue);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setValue(window.innerWidth < 768 ? mobileValue : baseValue);
    };

    handleResize();

    let timeoutId: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [baseValue, mobileValue]);

  return value;
}

export interface RadialScrollGalleryProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  header?: ReactNode;
  children: (hoveredIndex: number | null) => ReactNode[];
  scrollDuration?: number;
  visiblePercentage?: number;
  baseRadius?: number;
  mobileRadius?: number;
  startTrigger?: string;
  onItemSelect?: (index: number) => void;
  direction?: 'ltr' | 'rtl';
  disabled?: boolean;
}

export const RadialScrollGallery = forwardRef<
  HTMLDivElement,
  RadialScrollGalleryProps
>(
  (
    {
      header,
      children,
      scrollDuration = 2200,
      baseRadius = 460,
      mobileRadius = 240,
      className = '',
      startTrigger = 'top top',
      onItemSelect,
      direction = 'ltr',
      disabled = false,
      ...rest
    },
    ref
  ) => {
    const pinRef = useRef<HTMLDivElement>(null);
    const galleryAreaRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergeRefs(ref, pinRef);

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [rotationProgress, setRotationProgress] = useState(0); // 0 to 360 degrees
    const [isMounted, setIsMounted] = useState(false);

    const currentRadius = useResponsiveValue(baseRadius, mobileRadius);

    const childrenNodes = useMemo(
      () => React.Children.toArray(children(hoveredIndex)),
      [children, hoveredIndex]
    );
    const childrenCount = childrenNodes.length;

    useEffect(() => {
      setIsMounted(true);
    }, []);

    useGSAP(
      () => {
        if (!pinRef.current || childrenCount === 0) return;

        const prefersReducedMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;

        if (!prefersReducedMotion) {
          const obj = { rotation: 0 };

          gsap.to(obj, {
            rotation: 360,
            ease: 'none',
            scrollTrigger: {
              trigger: pinRef.current,
              pin: true,
              start: startTrigger,
              end: `+=${scrollDuration}`,
              scrub: 1.2,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                setRotationProgress(self.progress * 360);
              },
            },
          });
        }
      },
      {
        scope: pinRef,
        dependencies: [scrollDuration, childrenCount, startTrigger],
      }
    );

    if (childrenCount === 0) return null;

    return (
      <div
        ref={mergedRef}
        className={`h-screen w-full relative flex flex-col items-center justify-between overflow-hidden bg-black select-none ${className}`}
        {...rest}
      >
        {header && (
          <div className="w-full flex-shrink-0 z-30 pt-8 sm:pt-12 px-4 select-text">
            {header}
          </div>
        )}

        {/* Gallery Wheel Stage */}
        <div
          ref={galleryAreaRef}
          className="relative w-full flex-1 overflow-hidden flex items-center justify-center min-h-[450px] sm:min-h-[550px]"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {childrenNodes.map((child, index) => {
              // Base angle for item i in degrees
              const baseAngle = (index / childrenCount) * 360;
              
              // Direction adjustment
              const dirMult = direction === 'rtl' ? -1 : 1;

              // Current raw angle as wheel spins
              let currentAngle = (baseAngle + rotationProgress * dirMult) % 360;
              if (currentAngle > 180) currentAngle -= 360;
              if (currentAngle < -180) currentAngle += 360;

              // Angle in radians for position math
              const rad = (currentAngle * Math.PI) / 180;

              // Position relative to center
              const x = currentRadius * Math.sin(rad);
              const y = currentRadius * (1 - Math.cos(rad)) - 30; // curve arc downwards

              // Natural upright tilt (-35deg to +35deg across visible top arc)
              const tiltAngle = currentAngle * 0.65;

              // Visibility calculation: only show cards in top arc (-85deg to +85deg)
              const absAngle = Math.abs(currentAngle);
              const isVisible = absAngle <= 85;

              // Fade out smoothly near edges (65deg to 85deg)
              let opacity = 1;
              if (absAngle > 65 && absAngle <= 85) {
                opacity = 1 - (absAngle - 65) / 20;
              } else if (absAngle > 85) {
                opacity = 0;
              }

              // Subtle scale for depth effect
              const scale = Math.max(0.82, 1 - absAngle * 0.002);

              const isHovered = hoveredIndex === index;
              const isAnyHovered = hoveredIndex !== null;

              if (!isVisible || opacity <= 0.01) return null;

              return (
                <div
                  key={index}
                  className="absolute left-1/2 top-1/3 transform-gpu will-change-transform transition-opacity duration-300"
                  style={{
                    zIndex: isHovered ? 100 : Math.round(100 - absAngle),
                    opacity: isMounted ? opacity : 0,
                    transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) rotate(${tiltAngle}deg) scale(${
                      isHovered ? scale * 1.12 : scale
                    })`,
                    pointerEvents: disabled || opacity < 0.5 ? 'none' : 'auto',
                  }}
                >
                  <div
                    role="button"
                    tabIndex={disabled ? -1 : 0}
                    onClick={() => !disabled && onItemSelect?.(index)}
                    onKeyDown={(e) => {
                      if (disabled) return;
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onItemSelect?.(index);
                      }
                    }}
                    onMouseEnter={() => !disabled && setHoveredIndex(index)}
                    onMouseLeave={() => !disabled && setHoveredIndex(null)}
                    onFocus={() => !disabled && setHoveredIndex(index)}
                    onBlur={() => !disabled && setHoveredIndex(null)}
                    className={`
                      block cursor-pointer outline-none text-left rounded-3xl
                      transition-all duration-300 ease-out transform-gpu
                      ${isHovered ? '-translate-y-4 shadow-[0_25px_60px_rgba(0,0,0,0.8)]' : ''}
                      ${
                        isAnyHovered && !isHovered
                          ? 'blur-[1px] opacity-50 grayscale-[30%]'
                          : 'blur-0 opacity-100'
                      }
                    `}
                  >
                    {child}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);

RadialScrollGallery.displayName = 'RadialScrollGallery';
