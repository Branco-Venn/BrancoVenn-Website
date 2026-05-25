import React, { useState } from "react";
import { Search, Menu, Link as LucideLink, Play } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

export const About: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Innovation");

  const tabs = [
    {
      id: "Innovation",
      title: "How VR is Transforming Our Digital World",
      description: "Virtual Reality (VR) is no longer a concept of the future...",
      date: "08 February 2025",
      author: "Henry Leonardo",
      image: "/Mask_group.jpg",
    },
    {
      id: "Technology",
      title: "The Rise of Spatial Computing in Everyday Life",
      description: "Spatial computing is bridging the gap...",
      date: "15 March 2025",
      author: "Sarah Mitchell",
      image: "/Mask_group-1.jpg",
    },
    {
      id: "Experience",
      title: "Designing Immersive Worlds That Feel Real",
      description: "From haptic feedback to photorealistic rendering...",
      date: "22 April 2025",
      author: "James Park",
      image: "/Mask_group-2.jpg",
    }
  ];

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <PageTransition>
      <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {/* SECTION 1: HERO */}
        <div className="relative w-full app-hero-wrapper bg-[#FBFDFD]">
          {/* Background Layers */}
          <div className="absolute inset-0 z-0 bg-[#FBFDFD]" />
          
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute right-0 top-0 bottom-0 h-full w-full md:w-[55%] opacity-30 md:opacity-100 object-cover object-top z-[1] video-plus-darker"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131232_feeda0b7-d00d-4bfa-a9d5-5d38648a4214.mp4"
          />

          {/* Content Layer */}
          <div className="relative z-10 min-h-screen md:h-screen flex flex-col">
            {/* Navbar */}
            <nav className="relative z-10 flex flex-row items-center justify-between px-5 py-4 md:px-12 md:py-6">
              <div className="flex items-center gap-12">
                <img src="/image.png" alt="Logo" className="h-7 md:h-8 object-contain" />
                <div className="hidden md:flex items-center gap-8">
                  <a href="/" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Home</a>
                  <a href="/about" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">About</a>
                  <a href="/services" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Services</a>
                  <a href="/contact" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Contact</a>
                </div>
              </div>

              <div className="hidden md:block relative">
                <input 
                  type="text" 
                  placeholder="I am looking for..." 
                  className="w-72 rounded-full border border-neutral-300 py-2 pl-4 pr-10 text-sm text-neutral-600 outline-none focus:border-neutral-400"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              </div>

              <button 
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-neutral-300 text-neutral-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
              <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-neutral-200 p-5 z-20 flex flex-col gap-4 shadow-lg">
                <a href="/" className="text-sm text-neutral-600">Home</a>
                <a href="/about" className="text-sm text-neutral-600">About</a>
                <a href="/services" className="text-sm text-neutral-600">Services</a>
                <a href="/contact" className="text-sm text-neutral-600">Contact</a>
                <div className="relative mt-2">
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full rounded-full border border-neutral-300 py-2 pl-4 pr-10 text-sm text-neutral-600 outline-none"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                </div>
              </div>
            )}

            {/* HeroSection Content */}
            <div className="relative z-10 flex-1 flex flex-col justify-between px-5 pt-8 pb-20 md:px-12 md:pt-16 md:pb-36">
              <div>
                <span className="text-xs font-medium tracking-[0.3em] text-neutral-500 uppercase block">Futuristic</span>
                
                <div className="flex flex-row mt-4 md:mt-8 gap-4 md:gap-8">
                  <span className="text-sm text-neutral-400 mt-2 md:mt-4">05</span>
                  <h1 className="text-[2.75rem] md:text-[5.5rem] leading-[0.95] font-light tracking-tight text-neutral-900 m-0">
                    NEW DIGITAL<br />UNIVERSE
                  </h1>
                </div>

                <div className="flex items-center gap-6 mt-8 md:mt-12 md:ml-12">
                  <button className="bg-neutral-900 text-white text-sm font-medium rounded px-6 py-3 md:px-8 md:py-3.5 hover:bg-neutral-800 transition-colors">
                    Get Started
                  </button>
                  <a href="/contact" className="text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors">
                    Contact Us
                  </a>
                </div>
              </div>

              <div className="mt-16 md:mt-auto mb-12 md:mb-0 hero-stat-group flex flex-col items-start md:items-center">
                <span className="text-5xl md:text-7xl font-light text-neutral-900 leading-none">47.2%</span>
                <span className="text-sm font-medium text-neutral-500 mt-2 uppercase tracking-widest">Reality</span>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mt-10 w-full">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wider">Trusted by Clients</span>
                    <div className="flex items-center">
                      <div className="flex -space-x-2">
                        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Client" className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#FBFDFD] object-cover" />
                        <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Client" className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#FBFDFD] object-cover" />
                        <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Client" className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#FBFDFD] object-cover" />
                        <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Client" className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#FBFDFD] object-cover" />
                      </div>
                      <span className="text-sm font-medium text-neutral-900 ml-3">20+</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 hero-description-group">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center rounded-full border border-neutral-300">
                    <LucideLink className="w-4 h-4 text-neutral-600" />
                  </div>
                  <p className="text-xs md:text-sm text-neutral-500 max-w-[200px] md:max-w-sm mt-1">
                    In this futuristic realm, users can explore hyper-realistic virtual environments, interact with AI-driven avatars.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Diagonal Section Divider */}
          <div className="absolute bottom-0 left-0 w-full z-[3]">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
              <polygon points="0,0 0,120 1440,120 1440,80 920,80 680,0" fill="#0F0F0F" />
            </svg>
          </div>
        </div>

        {/* SECTION 2: ABOUT */}
        <section className="w-full bg-[#0F0F0F]">
          <div className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-[700px]">
            {/* Left Video Column */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover mix-blend-lighten"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_132809_d6ea910f-d700-44f7-afea-27d517487177.mp4"
              />
            </div>
            
            {/* Right Content Column */}
            <div className="w-full lg:w-1/2 flex items-center px-8 py-16 md:px-16 lg:px-20 xl:px-28">
              <div className="max-w-lg w-full">
                <span className="text-xs font-medium tracking-[0.3em] text-neutral-500 uppercase block mb-8 md:mb-10">About Us</span>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white leading-[1.05] mb-10 md:mb-12">
                  THE DIGITAL<br />FRONTIER
                </h2>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-5 py-2 rounded-full border border-neutral-700 text-sm text-neutral-300 hover:border-neutral-500 transition-colors cursor-default">Digital</span>
                  <span className="px-5 py-2 rounded-full border border-neutral-700 text-sm text-neutral-300 hover:border-neutral-500 transition-colors cursor-default">Reality</span>
                  <span className="px-5 py-2 rounded-full border border-neutral-700 text-sm text-neutral-300 hover:border-neutral-500 transition-colors cursor-default">Next</span>
                </div>
                
                <p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-md mb-10">
                  Step into The Digital Frontier, where the boundaries between reality and virtual innovation disappear. This is the next era of immersive technology.
                </p>
                
                <div className="flex items-center gap-6">
                  <button className="bg-neutral-800 text-white text-sm font-medium rounded px-7 py-3.5 hover:bg-neutral-700 transition-colors">
                    Learn More
                  </button>
                  <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-neutral-500 transition-colors">
                      <Play className="w-3.5 h-3.5 text-white fill-current ml-0.5" />
                    </div>
                    <span className="text-sm font-medium text-white group-hover:text-neutral-300 transition-colors">Watch a Video</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: INSIGHTS */}
        <section className="w-full bg-[#0F0F0F] px-8 md:px-16 lg:px-20 xl:px-28 pt-24 pb-32">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-light italic tracking-tight text-white leading-[1.05] max-w-5xl mb-20 md:mb-28">
            LIMITLESS POSSIBILITIES WITH NEOVISION
          </h2>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
            {/* Tab Buttons */}
            <div className="flex flex-row lg:flex-col gap-6 overflow-x-auto lg:overflow-visible lg:w-[160px] xl:w-[200px] shrink-0 border-b lg:border-b-0 border-neutral-800 pb-4 lg:pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-lg md:text-xl text-left whitespace-nowrap lg:whitespace-normal transition-colors ${
                    activeTab === tab.id 
                      ? "text-white font-medium" 
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  {tab.id}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
              <div className="w-full lg:w-[420px] xl:w-[480px] aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
                <img 
                  src={currentTab.image} 
                  alt={currentTab.title} 
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>
              
              <div className="flex flex-col justify-between py-2 lg:py-6 max-w-lg w-full h-full min-h-[250px]">
                <div>
                  <h3 className="text-2xl md:text-3xl font-light text-white leading-snug max-w-sm mb-6">
                    {currentTab.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-sm mb-8">
                    {currentTab.description}
                  </p>
                  <a href="#" className="text-sm text-white font-medium underline underline-offset-4 hover:text-neutral-300 transition-colors">
                    Learn More
                  </a>
                </div>
                
                <div className="mt-12 pt-6 border-t border-neutral-800 flex justify-between items-center text-xs md:text-sm text-neutral-500 w-full">
                  <span>{currentTab.date}</span>
                  <span>{currentTab.author}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
