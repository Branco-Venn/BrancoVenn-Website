import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LogoMark } from "./LogoMark";
import { GlassEffect, GlassFilter } from "./ui/liquid-glass";

export const Navbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const centerLinks = [
    { label: "PRODUCTS", path: "/product" },
    { label: "SIM GAMEPAD", path: "/product/sim-gamepad" },
    { label: "MISSION", path: "/mission" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 w-full select-none">
      <GlassFilter />
      
      <nav className="flex items-center justify-between max-w-[1400px] mx-auto w-full">
        
        {/* Left Brand Pill */}
        <Link to="/" className="block">
          <GlassEffect className="rounded-full pl-4 pr-5 sm:pl-5 sm:pr-7 py-3 sm:py-3.5 border border-white/10 hover:border-white/20 transition-all cursor-pointer group text-white">
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-5.5 sm:h-6.5 w-5.5 sm:w-6.5 text-white group-hover:scale-105 transition-transform" />
              <span className="text-white text-xs sm:text-sm font-semibold tracking-tight">
                Branco Venn
              </span>
            </div>
          </GlassEffect>
        </Link>

        {/* Center Navigation - Now Individual Glass Buttons */}
        <div className="hidden md:block">
          <div className="flex items-center gap-3">
            {centerLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <Link key={link.path} to={link.path} className="block">
                  <GlassEffect
                    className={`rounded-full px-6 py-3 sm:py-3.5 border transition-all cursor-pointer group ${
                      isActive
                        ? "bg-white/15 border-white/20 text-white font-medium"
                        : "border-white/10 text-neutral-300 hover:text-white hover:border-white/20 font-light"
                    }`}
                  >
                    <span className="text-xs sm:text-sm tracking-widest uppercase transition-colors duration-300">
                      {link.label}
                    </span>
                  </GlassEffect>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Action Button Pill */}
        <Link to="/contact" className="block">
          <GlassEffect className={`rounded-full px-6 py-3 sm:py-3.5 border border-white/10 transition-all cursor-pointer group ${
            currentPath === "/contact"
              ? "bg-white/15 border-white/20 text-white font-medium"
              : "text-neutral-300 hover:text-white hover:border-white/20 font-light"
          }`}>
            <span className="text-xs sm:text-sm tracking-widest uppercase transition-colors duration-300">
              CONTACT
            </span>
          </GlassEffect>
        </Link>

      </nav>
    </header>
  );
};
