import { useEffect, useRef, useState } from "react"
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

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation()

  // Initialise from the real starting route so Home (index 0) → "right" by default
  const initialIndex = Math.max(0, items.findIndex(item => item.url === location.pathname))
  const [activeTab, setActiveTab] = useState(items[initialIndex]?.name || "")
  // "right" = moving left→right, "left" = moving right→left
  const [direction, setDirection] = useState<"right" | "left">("right")
  const prevIndexRef = useRef<number>(initialIndex)

  useEffect(() => {
    // Sync active tab + direction when route changes (e.g. browser back/forward)
    const newIndex = items.findIndex(item => item.url === location.pathname)
    if (newIndex === -1) return
    const prevIndex = prevIndexRef.current
    // Home tab (index 0) always gets porsche_right; otherwise derive from direction
    if (newIndex === 0) {
      setDirection("right")
    } else if (newIndex > prevIndex) {
      setDirection("right")
    } else if (newIndex < prevIndex) {
      setDirection("left")
    }
    prevIndexRef.current = newIndex
    setActiveTab(items[newIndex].name)
  }, [location.pathname, items])

  const handleTabClick = (name: string) => {
    const newIndex = items.findIndex(item => item.name === name)
    const prevIndex = prevIndexRef.current
    if (newIndex > prevIndex) {
      setDirection("right")
    } else if (newIndex < prevIndex) {
      setDirection("left")
    }
    prevIndexRef.current = newIndex
    setActiveTab(name)
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
      <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 bg-white/[0.03] border border-white/[0.08] backdrop-blur-2xl py-1 px-1 rounded-full shadow-lg pointer-events-auto">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
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
                >
                  {/* Porsche indicator above active nav tab */}
                  <img
                    key={porscheSrc}
                    src={porscheSrc}
                    alt="Porsche Indicator"
                    className="absolute -top-6 left-1/2 -translate-x-1/2 h-7 sm:h-8 w-auto object-contain pointer-events-none drop-shadow-[0_4px_12px_rgba(255,255,255,0.5)] transform-gpu"
                  />
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
