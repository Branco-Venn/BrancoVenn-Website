import React from "react";
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
      {/* Tubelight Navigation */}
      <NavBar items={navItems} />
    </>
  );
};

