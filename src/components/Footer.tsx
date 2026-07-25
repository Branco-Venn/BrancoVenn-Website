"use client";
import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  MessageSquare
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "./ui/hover-footer";
import { LogoMark } from "./LogoMark";

export const Footer: React.FC = () => {
  // Footer link data
  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Mission", href: "/mission" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "Sim Gamepad", href: "/product/sim-gamepad" },
        { label: "Pricing", href: "/product/pricing" },
        {
          label: "Live Demo",
          href: "/product",
          pulse: true,
        },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Licenses", href: "/license" },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-white" />,
      text: "contact@brancovenn.com",
      href: "mailto:contact@brancovenn.com",
    },
    {
      icon: <MapPin size={18} className="text-white" />,
      text: "Global Operations",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ), label: "Instagram", href: "https://instagram.com/brancovenn" },
    { icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-6 fill-current">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ), label: "YouTube", href: "https://youtube.com/@brancovenn" },
    { icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ), label: "Twitter", href: "https://x.com/brancovenn" },
    { icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ), label: "LinkedIn", href: "https://linkedin.com/brancovenn" },
    { icon: <MessageSquare size={20} />, label: "Discord", href: "https://discord.gg/brancovenn" },
  ];

  return (
    <footer className="bg-black relative h-fit overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 py-14 sm:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 lg:gap-16 pb-12">
          
          {/* Brand section */}
          <div className="flex flex-col space-y-4 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 group">
              <LogoMark className="text-white h-8 w-8 group-hover:scale-105 transition-transform" />
              <span className="text-white text-3xl font-bold tracking-tight">Branco Venn</span>
            </Link>
            <p className="text-sm leading-relaxed text-neutral-400 max-w-sm mt-2">
              Empowering digital sovereignty with high-performance, encrypted workspace solutions and zero-latency telemetry systems.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative w-fit">
                    <Link
                      to={link.href}
                      className="text-neutral-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                    {link.pulse && (
                      <span className="absolute top-1 -right-3 w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <hr className="border-t border-white/10 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          
          {/* Contact & Social icons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-gray-400">
            <div className="flex space-x-6">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
            
            <div className="hidden sm:flex items-center gap-4 border-l border-white/10 pl-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs">
                  {item.icon}
                  {item.href ? (
                    <a href={item.href} className="hover:text-white transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-neutral-400">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left text-neutral-500 font-light text-xs">
            &copy; {new Date().getFullYear()} Branco Venn. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="flex h-[10rem] sm:h-[15rem] md:h-[20rem] pointer-events-auto z-50 relative w-full">
        <TextHoverEffect text="BRANCO VENN" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
};
