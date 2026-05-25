import React, { useEffect, useRef, useState } from "react";
import { PageTransition } from "@/components/PageTransition";

export const SimGamepad: React.FC = () => {
  // --- CANVAS NETWORK MAP ---
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight ? canvas.parentElement.clientHeight - 60 : 400);

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 800;
      height = canvas.height = canvas.parentElement?.clientHeight ? canvas.parentElement.clientHeight - 60 : 400;
    };
    window.addEventListener("resize", handleResize);

    // Initialize 20 nodes
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      pulse: number;
      isPulseActive: boolean;
    }

    const nodes: Node[] = Array.from({ length: 20 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      pulse: 0,
      isPulseActive: Math.random() < 0.2, // ~3-4 nodes active
    }));

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw lines first
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            // Opacity proportional to distance
            const alpha = (1 - dist / 150) * 0.25;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Update & Draw nodes
      nodes.forEach((node) => {
        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce on boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Clamp inside canvas to avoid disappearing
        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));

        // Draw node
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fill();

        // Pulsing rings
        if (node.isPulseActive) {
          node.pulse += 0.02;
          if (node.pulse > 1) {
            node.pulse = 0;
            // Randomly switch active nodes sometimes
            if (Math.random() < 0.1) {
              node.isPulseActive = false;
              const inactiveNodes = nodes.filter(n => !n.isPulseActive);
              if (inactiveNodes.length > 0) {
                inactiveNodes[Math.floor(Math.random() * inactiveNodes.length)].isPulseActive = true;
              }
            }
          }

          ctx.strokeStyle = `rgba(250, 132, 83, ${1 - node.pulse})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 4 + node.pulse * 24, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // --- LATENCY TELEMETRY GRAPH ---
  const [latencyPoints, setLatencyPoints] = useState<number[]>(
    Array.from({ length: 40 }, () => 0.1 + Math.random() * 0.3)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setLatencyPoints((prev) => {
        const nextVal = 0.1 + Math.random() * 0.3;
        // Introduce small random spikes sometimes for visual interest
        const isSpike = Math.random() < 0.15;
        const finalVal = isSpike ? nextVal + Math.random() * 0.2 : nextVal;
        return [...prev.slice(1), parseFloat(finalVal.toFixed(4))];
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const currentLatency = latencyPoints[latencyPoints.length - 1];

  // Draw latency SVG line path
  const svgWidth = 320;
  const svgHeight = 180;
  const maxVal = 0.6; // Scale of the chart
  const pointsPath = latencyPoints
    .map((point, index) => {
      const x = (index / (latencyPoints.length - 1)) * svgWidth;
      const y = svgHeight - (point / maxVal) * svgHeight;
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  // Create area fill path
  const fillPath = `${pointsPath} L ${svgWidth} ${svgHeight} L 0 ${svgHeight} Z`;

  // --- KEY ASSIGNMENT STATE ---
  const keys = ["ESC", "F1", "F2", "F3", "TAB", "Q", "W", "E", "SHIFT", "A", "S", "D"];
  const [selectedKey, setSelectedKey] = useState<string>("Q");
  
  // Custom configurations for each key
  const [keyConfigs, setKeyConfigs] = useState<Record<string, { label: string; action: string }>>({
    ESC: { label: "SYS_HALT", action: "Block" },
    F1: { label: "GATE_SEC", action: "Shield" },
    F2: { label: "VAULT_LOCK", action: "Encrypt" },
    F3: { label: "OBS_ALL", action: "Observe" },
    TAB: { label: "DASHBOARD", action: "Observe" },
    Q: { label: "ROUTE_CRYP", action: "Encrypt" },
    W: { label: "FW_BYPASS", action: "Shield" },
    E: { label: "HONEY_ANL", action: "Observe" },
    SHIFT: { label: "OVERDRIVE", action: "Alert" },
    A: { label: "QUARANTINE", action: "Block" },
    S: { label: "DECRYPT_TST", action: "Encrypt" },
    D: { label: "IP_LOCK", action: "Block" },
  });

  const [inputLabel, setInputLabel] = useState(keyConfigs["Q"].label);
  const [inputAction, setInputAction] = useState(keyConfigs["Q"].action);
  const [isSavedSuccessfully, setIsSavedSuccessfully] = useState(false);

  const handleKeySelect = (key: string) => {
    setSelectedKey(key);
    setInputLabel(keyConfigs[key]?.label || "");
    setInputAction(keyConfigs[key]?.action || "Observe");
    setIsSavedSuccessfully(false);
  };

  const handleSaveConfig = () => {
    setKeyConfigs((prev) => ({
      ...prev,
      [selectedKey]: { label: inputLabel, action: inputAction },
    }));
    setIsSavedSuccessfully(true);
    setTimeout(() => setIsSavedSuccessfully(false), 2000);
  };

  // --- ANALOG DEADZONE STATE ---
  const [sensitivity, setSensitivity] = useState<number>(75);
  const [response, setResponse] = useState<number>(45);
  const [threshold, setThreshold] = useState<number>(15);

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-10 px-4 sm:px-10 max-w-[1400px] mx-auto w-full select-none">
        <span className="text-white/30 text-xs mb-4 uppercase tracking-widest block font-mono">
          products / sim-gamepad
        </span>
        <h1
          className="text-4xl sm:text-6xl font-light text-white uppercase tracking-tight"
          style={{ letterSpacing: "-0.04em" }}
        >
          Security Command <br />
          <span className="text-[#FA8453]">Center</span>
        </h1>
      </section>

      {/* Main Grid Layout */}
      <section className="px-4 sm:px-10 max-w-[1400px] mx-auto pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          {/* Panel 1 — Network Map Canvas (col-span 2) */}
          <div className="lg:col-span-2 bg-neutral-950 border border-white/5 rounded-2xl p-6 h-[480px] sm:h-[560px] relative overflow-hidden flex flex-col justify-between group hover:border-white/10 transition-colors duration-300">
            {/* Title */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/40 uppercase tracking-widest font-mono">
                Live Network Map
              </span>
              <span className="h-2 w-2 rounded-full bg-[#FA8453] animate-ping" />
            </div>

            {/* Canvas */}
            <div className="flex-1 w-full mt-4 min-h-[300px]">
              <canvas ref={canvasRef} className="block w-full h-full" />
            </div>

            {/* Bottom Status Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-neutral-950 via-neutral-950/95 to-transparent flex gap-6 text-[10px] sm:text-xs text-white/50 border-t border-white/5 select-none font-mono">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                23 nodes active
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FA8453]" />
                0 threats detected
              </span>
              <span>uptime 99.99%</span>
            </div>
          </div>

          {/* Panel 2 — Latency Telemetry */}
          <div className="lg:col-span-1 bg-neutral-950 border border-white/5 rounded-2xl p-6 h-[480px] sm:h-[560px] flex flex-col justify-between group hover:border-white/10 transition-colors duration-300 select-none">
            <div>
              <span className="text-sm text-white/40 uppercase tracking-widest font-mono block">
                Latency Telemetry
              </span>

              {/* Large Current Value */}
              <div className="mt-6 flex flex-col">
                <span className="text-5xl font-medium tracking-tight text-[#FA8453] font-mono">
                  {currentLatency.toFixed(3)}ms
                </span>
                <span className="text-[10px] text-neutral-500 font-light mt-1 uppercase font-mono">
                  ACTIVE OBSERVATION CHANNEL
                </span>
              </div>
            </div>

            {/* Graph Visualization */}
            <div className="my-auto flex items-center justify-center">
              <svg
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                className="w-full h-auto overflow-visible"
              >
                {/* Grid Lines */}
                <line x1="0" y1={svgHeight * 0.25} x2={svgWidth} y2={svgHeight * 0.25} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="0" y1={svgHeight * 0.5} x2={svgWidth} y2={svgHeight * 0.5} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="0" y1={svgHeight * 0.75} x2={svgWidth} y2={svgHeight * 0.75} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

                {/* Shaded Area */}
                <path d={fillPath} fill="url(#latency-gradient)" />
                
                {/* SVG path chart */}
                <path
                  d={pointsPath}
                  fill="none"
                  stroke="#FA8453"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Gradients */}
                <defs>
                  <linearGradient id="latency-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FA8453" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#FA8453" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* X-axis labels */}
            <div className="flex justify-between text-[9px] sm:text-[10px] text-white/20 font-mono border-t border-white/5 pt-4">
              <span>-60s</span>
              <span>-30s</span>
              <span>now</span>
            </div>
          </div>

          {/* Panel 3 — Key Assignment Editor (lg:col-span 2) */}
          <div className="lg:col-span-2 bg-neutral-950 border border-white/5 rounded-2xl p-6 flex flex-col justify-between group hover:border-white/10 transition-colors duration-300">
            <div>
              <span className="text-sm text-white/40 uppercase tracking-widest font-mono block mb-4">
                Key Assignment Editor
              </span>

              {/* Grid of 12 key zones */}
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {keys.map((key) => {
                  const isSelected = selectedKey === key;
                  const config = keyConfigs[key];
                  return (
                    <button
                      key={key}
                      onClick={() => handleKeySelect(key)}
                      className={`h-16 rounded-xl bg-black border transition-all duration-300 flex flex-col items-center justify-center cursor-pointer select-none ${
                        isSelected
                          ? "border-[#FA8453] text-[#FA8453] shadow-md shadow-[#FA8453]/5"
                          : "border-white/10 text-neutral-400 hover:border-[#FA8453]/60 hover:text-white"
                      }`}
                    >
                      <span className="text-[10px] font-mono text-neutral-500 leading-none mb-1">Zone</span>
                      <span className="text-sm font-semibold tracking-tight leading-none">
                        {key}
                      </span>
                      {config && (
                        <span className="text-[8px] opacity-70 mt-1 font-mono uppercase truncate max-w-[80%] text-neutral-400">
                          {config.action}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Selected Key Detail Panel */}
              <div className="bg-black border border-white/5 rounded-2xl p-4 sm:p-6 mt-6 space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="text-xs text-neutral-500 font-mono">SELECTED CORE TARGET</span>
                  <span className="text-sm text-[#FA8453] font-semibold font-mono">Zone_{selectedKey}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Label input */}
                  <div className="space-y-1">
                    <label className="text-[10px] text-neutral-400 font-mono uppercase">Zone Protocol Tag</label>
                    <input
                      type="text"
                      value={inputLabel}
                      onChange={(e) => setInputLabel(e.target.value.toUpperCase())}
                      className="bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white w-full outline-none focus:border-[#FA8453] transition-colors font-mono"
                    />
                  </div>

                  {/* Action Dropdown */}
                  <div className="space-y-1">
                    <label className="text-[10px] text-neutral-400 font-mono uppercase">Operational Action</label>
                    <select
                      value={inputAction}
                      onChange={(e) => setInputAction(e.target.value)}
                      className="bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white w-full outline-none focus:border-[#FA8453] transition-colors cursor-pointer"
                    >
                      {["Encrypt", "Shield", "Observe", "Block", "Alert"].map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <p className="text-[10px] text-neutral-500 font-light max-w-xs sm:max-w-md">
                    Assigning a protocol tag overrides regional firewalls. Ensure observing nodes are flagged as responsive before executing save operations.
                  </p>
                  
                  <button
                    onClick={handleSaveConfig}
                    className="px-6 py-3 rounded-full text-black font-semibold text-xs sm:text-sm whitespace-nowrap active:scale-95 transition-all shadow-md cursor-pointer shrink-0"
                    style={{
                      background: "linear-gradient(90deg, #FA8453 0%, #F8C9B2 100%)",
                    }}
                  >
                    {isSavedSuccessfully ? "✓ Protocol Tagged" : `Save Zone_${selectedKey}`}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Panel 4 — Deadzone Sliders */}
          <div className="lg:col-span-1 bg-neutral-950 border border-white/5 rounded-2xl p-6 flex flex-col justify-between group hover:border-white/10 transition-colors duration-300 select-none">
            <span className="text-sm text-white/40 uppercase tracking-widest font-mono block mb-6">
              Analog Deadzone Control
            </span>

            <div className="space-y-6 flex-1 flex flex-col justify-center">
              {/* Slider 1: Sensitivity */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-400 font-light">Sensitivity</span>
                  <span className="text-[#FA8453] font-semibold">{sensitivity}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sensitivity}
                  onChange={(e) => setSensitivity(parseInt(e.target.value))}
                  className="w-full accent-[#FA8453] bg-neutral-900 h-1.5 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Slider 2: Response */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-400 font-light">Response Curve</span>
                  <span className="text-[#FA8453] font-semibold">{response}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={response}
                  onChange={(e) => setResponse(parseInt(e.target.value))}
                  className="w-full accent-[#FA8453] bg-neutral-900 h-1.5 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Slider 3: Threshold */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-400 font-light">Trigger Threshold</span>
                  <span className="text-[#FA8453] font-semibold">{threshold}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={threshold}
                  onChange={(e) => setThreshold(parseInt(e.target.value))}
                  className="w-full accent-[#FA8453] bg-neutral-900 h-1.5 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 text-[10px] text-neutral-500 font-mono text-center mt-6">
              REACTION ENVELOPE: OPTIMIZED
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};
