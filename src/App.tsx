import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Shared Components
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LoadingIntro } from "./components/LoadingIntro";

// Pages
import { Index } from "./pages/Index";
import { Product } from "./pages/Product";
import { SimGamepad } from "./pages/SimGamepad";
import { Mission } from "./pages/Mission";
import { AboutUs } from "./pages/AboutUs";
import { Contact } from "./pages/Contact";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { License } from "./pages/License";
import { Pricing } from "./pages/Pricing";
import { NotFound } from "./pages/NotFound";

// Scrolls window to top on every route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

const AnimatedApp: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center overflow-x-hidden w-full relative">
      <ScrollToTop />
      {/* Shared Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full flex flex-col">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Index />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/sim-gamepad" element={<SimGamepad />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/license" element={<License />} />
            <Route path="/product/pricing" element={<Pricing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  // Check if first visit in this session
  const [showIntro, setShowIntro] = useState(() => {
    return !sessionStorage.getItem("gn_visited");
  });

  return (
    <BrowserRouter>
      {showIntro && <LoadingIntro onComplete={() => setShowIntro(false)} />}
      <AnimatedApp />
    </BrowserRouter>
  );
};

export default App;
