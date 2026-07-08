"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export interface Frame {
  id: number
  video: string
  defaultPos: { x: number; y: number; w: number; h: number }
  corner?: string
  edgeHorizontal?: string
  edgeVertical?: string
  mediaSize: number
  borderThickness?: number
  borderSize?: number
  isHovered: boolean
  // Optional social overlays
  socialName?: string
  socialHandle?: string
  socialHref?: string
  socialIcon?: React.ReactNode
}

interface FrameComponentProps {
  video: string
  width: number | string
  height: number | string
  className?: string
  corner?: string
  edgeHorizontal?: string
  edgeVertical?: string
  mediaSize: number
  borderThickness?: number
  borderSize?: number
  showFrame: boolean
  isHovered: boolean
  socialName?: string
  socialHandle?: string
  socialIcon?: React.ReactNode
}

function FrameComponent({
  video,
  width,
  height,
  className = "",
  corner,
  edgeHorizontal,
  edgeVertical,
  mediaSize,
  borderThickness = 0,
  borderSize = 100,
  showFrame,
  isHovered,
  socialName,
  socialHandle,
  socialIcon,
}: FrameComponentProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isHovered) {
      videoRef.current?.play().catch(() => {
        // Prevent console logs for autoplay rejection
      })
    } else {
      videoRef.current?.pause()
    }
  }, [isHovered])

  return (
    <div
      className={`relative overflow-hidden group ${className}`}
      style={{
        width,
        height,
        transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
      }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            zIndex: 1,
            transition: "all 0.3s ease-in-out",
            padding: showFrame && borderThickness ? `${borderThickness}px` : "0",
            width: showFrame && borderSize ? `${borderSize}%` : "100%",
            height: showFrame && borderSize ? `${borderSize}%` : "100%",
            left: showFrame && borderSize ? `${(100 - borderSize) / 2}%` : "0",
            top: showFrame && borderSize ? `${(100 - borderSize) / 2}%` : "0",
          }}
        >
          <div
            className="w-full h-full overflow-hidden"
            style={{
              transform: `scale(${mediaSize})`,
              transformOrigin: "center",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {video.toLowerCase().endsWith(".svg") || video.toLowerCase().endsWith(".png") || video.toLowerCase().endsWith(".jpg") || video.toLowerCase().endsWith(".jpeg") || video.includes("simpleicons.org") || video.includes("cdn.jsdelivr") ? (
              <div className="w-full h-full flex items-center justify-center p-10">
                <img
                  className="w-full h-full object-contain opacity-60 group-hover:opacity-95 transition-opacity duration-300 filter drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_35px_rgba(255,255,255,0.35)]"
                  src={video}
                  alt=""
                />
              </div>
            ) : video.toLowerCase().endsWith(".gif") ? (
              <img
                className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                src={video}
                alt=""
              />
            ) : (
              <video
                className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                src={video}
                loop
                muted
                playsInline
                ref={videoRef}
                preload="auto"
              />
            )}
          </div>
        </div>

        {/* Social Overlay */}
        {socialName && (
          <div className="absolute inset-0 z-10 bg-black/40 group-hover:bg-black/25 transition-colors duration-300 flex flex-col items-center justify-center p-4 text-center select-none">
            {socialIcon && (
              <div className="text-white mb-2 md:mb-3 transform group-hover:scale-110 transition-transform duration-300 opacity-80 group-hover:opacity-100">
                {socialIcon}
              </div>
            )}
            <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold tracking-tight uppercase">
              {socialName}
            </h3>
            <p className="text-white/50 text-[10px] sm:text-xs font-mono font-light mt-0.5 group-hover:text-white/70 transition-colors">
              {socialHandle}
            </p>
          </div>
        )}

        {showFrame && corner && edgeHorizontal && edgeVertical && (
          <div className="absolute inset-0" style={{ zIndex: 2 }}>
            <div
              className="absolute top-0 left-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})` }}
            />
            <div
              className="absolute top-0 right-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scaleX(-1)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scaleY(-1)" }}
            />
            <div
              className="absolute bottom-0 right-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scale(-1, -1)" }}
            />

            <div
              className="absolute top-0 left-16 right-16 h-16"
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: "auto 64px",
                backgroundRepeat: "repeat-x",
              }}
            />
            <div
              className="absolute bottom-0 left-16 right-16 h-16"
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: "auto 64px",
                backgroundRepeat: "repeat-x",
                transform: "rotate(180deg)",
              }}
            />
            <div
              className="absolute left-0 top-16 bottom-16 w-16"
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: "64px auto",
                backgroundRepeat: "repeat-y",
              }}
            />
            <div
              className="absolute right-0 top-16 bottom-16 w-16"
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: "64px auto",
                backgroundRepeat: "repeat-y",
                transform: "scaleX(-1)",
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

interface DynamicFrameLayoutProps {
  frames: Frame[]
  className?: string
  showFrames?: boolean
  hoverSize?: number
  gapSize?: number
}

export function DynamicFrameLayout({ 
  frames: initialFrames, 
  className,
  showFrames = false,
  hoverSize = 6,
  gapSize = 4
}: DynamicFrameLayoutProps) {
  const [frames] = useState<Frame[]>(initialFrames)
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null)

  const getRowSizes = () => {
    if (hovered === null) return "4fr 4fr 4fr"
    const { row } = hovered
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1, 2].map((r) => (r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getColSizes = () => {
    if (hovered === null) return "4fr 4fr 4fr"
    const { col } = hovered
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1, 2].map((c) => (c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getTransformOrigin = (x: number, y: number) => {
    const vertical = y === 0 ? "top" : y === 4 ? "center" : "bottom"
    const horizontal = x === 0 ? "left" : x === 4 ? "center" : "right"
    return `${vertical} ${horizontal}`
  }

  return (
    <div
      className={`relative w-full h-full ${className}`}
      style={{
        display: "grid",
        gridTemplateRows: getRowSizes(),
        gridTemplateColumns: getColSizes(),
        gap: `${gapSize}px`,
        transition: "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
      }}
    >
      {frames.map((frame) => {
        const row = Math.floor(frame.defaultPos.y / 4)
        const col = Math.floor(frame.defaultPos.x / 4)
        const transformOrigin = getTransformOrigin(frame.defaultPos.x, frame.defaultPos.y)

        return (
          <motion.div
            key={frame.id}
            className="relative cursor-pointer rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-300"
            style={{
              transformOrigin,
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={() => setHovered({ row, col })}
            onMouseLeave={() => setHovered(null)}
            onClick={() => {
              if (frame.socialHref) {
                window.open(frame.socialHref, "_blank", "noopener,noreferrer")
              }
            }}
          >
            <FrameComponent
              video={frame.video}
              width="100%"
              height="100%"
              className="absolute inset-0"
              corner={frame.corner}
              edgeHorizontal={frame.edgeHorizontal}
              edgeVertical={frame.edgeVertical}
              mediaSize={frame.mediaSize}
              borderThickness={frame.borderThickness}
              borderSize={frame.borderSize}
              showFrame={showFrames}
              isHovered={hovered?.row === row && hovered?.col === col}
              socialName={frame.socialName}
              socialHandle={frame.socialHandle}
              socialIcon={frame.socialIcon}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
