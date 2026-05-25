import React from "react";
import { Link } from "react-router-dom";
import { LogoMark } from "./LogoMark";

export const Footer: React.FC = () => {
  const links = [
    { label: "products", path: "/product" },
    { label: "Sim Gamepad", path: "/product/sim-gamepad" },
    { label: "mission", path: "/about" },
    { label: "contact", path: "/contact" },
  ];

  return (
    <footer className="bg-black border-t border-white/10 px-4 sm:px-10 py-10 sm:py-16 w-full relative z-10">
      <div className="max-w-[1400px] mx-auto space-y-10 sm:space-y-16">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <LogoMark className="h-6 w-6 text-white group-hover:scale-105 transition-transform" />
            <span className="text-white text-base font-semibold tracking-tight">
              Branco Venn
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-neutral-400 hover:text-white text-sm transition-colors duration-300 font-light"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="bg-white text-black text-xs sm:text-sm font-medium rounded-full px-5 sm:px-6 py-2.5 sm:py-3 hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            start today
          </Link>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
          <p className="text-neutral-500 text-xs font-light">
            © 2026 Branco Venn. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-neutral-500 hover:text-white text-xs transition-colors font-light"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-neutral-500 hover:text-white text-xs transition-colors font-light"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
