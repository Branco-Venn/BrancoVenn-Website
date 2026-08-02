import React from "react";
import { Link } from "react-router-dom";
import { LogoMark } from "./LogoMark";
import { GlassEffect, GlassFilter } from "./ui/liquid-glass";
import { NavBar } from "./ui/tubelight-navbar";
import { Home, Info, Box, Gamepad2, Target, Mail } from "lucide-react";

export const Navbar: React.FC = () => {
  const navItems = [
    { name: "HOME", url: "/", icon: Home },
    { name: "PRODUCTS", url: "/product", icon: Box },
    { name: "SIM GAMEPAD", url: "/product/sim-gamepad", icon: Gamepad2 },
    { name: "ABOUT US", url: "/about", icon: Info },
    { name: "MISSION", url: "/mission", icon: Target },
    { name: "CONTACT", url: "/contact", icon: Mail },
  ];

  return (
    <>
      <GlassFilter />

      {/* Brand Logo - Top Left */}
      <div className="fixed top-0 left-0 z-50 px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 select-none pointer-events-none">
        <Link to="/" className="block pointer-events-auto">
          <GlassEffect className="rounded-full pl-4 pr-5 sm:pl-5 sm:pr-7 py-3 sm:py-3.5 border border-white/10 hover:border-white/20 transition-all cursor-pointer group text-white">
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-5.5 sm:h-6.5 w-5.5 sm:w-6.5 text-white group-hover:scale-105 transition-transform" />
              <span className="text-white text-xs sm:text-sm font-semibold tracking-tight">
                Branco Venn
              </span>
            </div>
          </GlassEffect>
        </Link>
      </div>

      {/* Tubelight Navigation */}
      <NavBar items={navItems} />
    </>
  );
};
