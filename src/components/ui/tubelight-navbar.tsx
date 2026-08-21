import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

const CAR_WIDTH = 52
const CAR_HEIGHT = 16

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation()
  const navContainerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([])

  const initialIndex = Math.max(0, items.findIndex(item => item.url === location.pathname))
  const [activeTab, setActiveTab] = useState(items[initialIndex]?.name || "")
  const [direction, setDirection] = useState<"right" | "left">("right")
  const [carX, setCarX] = useState<number | null>(null)
  const prevIndexRef = useRef<number>(initialIndex)

  // Update car X coordinate based on the active tab DOM element
  const updateCarPosition = (index: number) => {
    const navEl = navContainerRef.current
    const tabEl = itemRefs.current[index]
    if (navEl && tabEl) {
      const navRect = navEl.getBoundingClientRect()
      const tabRect = tabEl.getBoundingClientRect()
      // Center the car above the active tab
      const x = (tabRect.left - navRect.left) + (tabRect.width / 2) - (CAR_WIDTH / 2)
      setCarX(x)
    }
  }

  useLayoutEffect(() => {
    const currentIndex = items.findIndex(item => item.url === location.pathname)
    const idx = currentIndex !== -1 ? currentIndex : initialIndex
    updateCarPosition(idx)
  }, [location.pathname, items])

  useEffect(() => {
    const handleResize = () => {
      const currentIndex = items.findIndex(item => item.name === activeTab)
      if (currentIndex !== -1) {
        updateCarPosition(currentIndex)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [activeTab, items])

  useEffect(() => {
    const newIndex = items.findIndex(item => item.url === location.pathname)
    if (newIndex === -1) return
    const prevIndex = prevIndexRef.current
    if (newIndex === 0) {
      setDirection("right")
    } else if (newIndex > prevIndex) {
      setDirection("right")
    } else if (newIndex < prevIndex) {
      setDirection("left")
    }
    prevIndexRef.current = newIndex
    setActiveTab(items[newIndex].name)
    updateCarPosition(newIndex)
  }, [location.pathname, items])

  const handleTabClick = (name: string) => {
    const newIndex = items.findIndex(item => item.name === name)
    if (newIndex === -1) return
    const prevIndex = prevIndexRef.current
    if (newIndex > prevIndex) {
      setDirection("right")
    } else if (newIndex < prevIndex) {
      setDirection("left")
    }
    prevIndexRef.current = newIndex
    setActiveTab(name)
    updateCarPosition(newIndex)
  }

  const porscheSrc =
    direction === "right"
      ? "/asset-image/porsche_right.png"
      : "/asset-image/porsche_left.png"

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 sm:bottom-auto left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6 pointer-events-none transform-gpu",
        className,
      )}
    >
      <div
        ref={navContainerRef}
        className="relative flex items-center gap-1.5 sm:gap-2 md:gap-3 bg-white/[0.03] border border-white/[0.08] backdrop-blur-2xl py-1 px-1 rounded-full shadow-lg pointer-events-auto"
      >
        {/* Fixed-size Porsche Car Indicator with Tubelight Underglow */}
        {carX !== null && (
          <motion.div
            className="absolute -top-4 pointer-events-none z-20 flex flex-col items-center justify-center"
            style={{
              width: CAR_WIDTH,
              height: CAR_HEIGHT,
              left: 0,
            }}
            animate={{ x: carX }}
            initial={false}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          >
            <img
              key={porscheSrc}
              src={porscheSrc}
              alt="Porsche Indicator"
              className="w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)] select-none pointer-events-none relative z-10"
              style={{
                width: `${CAR_WIDTH}px`,
                height: `${CAR_HEIGHT}px`,
                maxWidth: `${CAR_WIDTH}px`,
                maxHeight: `${CAR_HEIGHT}px`,
              }}
            />
            {/* Tubelight underglow effect under the car */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
              {/* Core bright neon lightbar */}
              <div className="w-8 sm:w-9 h-[2px] bg-white rounded-full shadow-[0_0_8px_#ffffff,0_0_16px_rgba(255,255,255,0.9),0_0_24px_rgba(255,255,255,0.6)]" />
              {/* Soft diffused tubelight aura */}
              <div className="w-12 sm:w-14 h-2.5 bg-white/40 blur-[4px] rounded-full -mt-1" />
              {/* Ambient ground reflection */}
              <div className="w-16 h-3 bg-white/20 blur-[8px] rounded-full -mt-1.5" />
            </div>
          </motion.div>
        )}

        {items.map((item, index) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              to={item.url}
              onClick={() => handleTabClick(item.name)}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-semibold px-4 md:px-6 py-2 rounded-full border border-transparent transition-colors duration-200 flex items-center justify-center gap-2 select-none",
                isActive ? "text-white" : "text-white/70 hover:text-white"
              )}
            >
              <span className="hidden md:inline whitespace-nowrap">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full h-full bg-white/10 border border-white/15 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

