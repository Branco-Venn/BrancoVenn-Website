import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LogoMark } from "./LogoMark";
import { GlassEffect, GlassFilter } from "./ui/liquid-glass";

export const Navbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const centerLinks = [
    { label: "products", path: "/product" },
    { label: "Sim Gamepad", path: "/product/sim-gamepad" },
    { label: "mission", path: "/about" },
    { label: "contact", path: "/contact" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-3 sm:px-6 md:px-10 pt-4 sm:pt-6 w-full select-none">
      <GlassFilter />
      
      <nav className="flex items-center justify-between max-w-[1400px] mx-auto w-full">
        
        {/* Left Brand Pill */}
        <Link to="/" className="block">
          <GlassEffect className="rounded-full pl-3 pr-4 sm:pl-4 sm:pr-6 py-2.5 sm:py-3 border border-white/10 hover:border-white/20 transition-all cursor-pointer group text-white">
            <div className="flex items-center gap-2">
              <LogoMark className="h-5 sm:h-6 w-5 sm:w-6 text-white group-hover:scale-105 transition-transform" />
              <span className="text-white text-xs sm:text-sm font-medium tracking-tight">
                Branco Venn
              </span>
            </div>
          </GlassEffect>
        </Link>

        {/* Center Navigation Pill */}
        <div className="hidden md:block">
          <GlassEffect className="rounded-full px-2 py-1.5 border border-white/10 text-white">
            <div className="flex items-center gap-1">
              {centerLinks.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm px-5 py-2 rounded-full transition-all duration-300 font-light ${
                      isActive
                        ? "bg-white/15 text-white font-medium shadow-sm shadow-white/5"
                        : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </GlassEffect>
        </div>

        {/* Right Action Button Pill */}
        <Link to="/contact" className="block">
          <GlassEffect className="rounded-full px-4 sm:px-6 py-2.5 sm:py-3 border border-white/10 hover:border-orange-500/20 bg-white hover:bg-orange-500/10 transition-all cursor-pointer group text-black hover:text-white">
            <span className="text-xs sm:text-sm font-medium tracking-tight transition-colors duration-300">
              start today
            </span>
          </GlassEffect>
        </Link>

      </nav>
    </header>
  );
};
