import React, { useState } from "react";
import { Search, Menu, Play } from "lucide-react";
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
        <div className="relative w-full min-h-screen bg-[#FBFDFD]">
          {/* Background Layers */}
          <div className="absolute inset-0 z-0 bg-[#FBFDFD]" />
          
          <div className="absolute inset-0 z-[1] pointer-events-none">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="sticky top-0 h-screen w-full md:w-[55%] md:ml-auto opacity-30 md:opacity-100 object-cover object-top video-plus-darker"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131232_feeda0b7-d00d-4bfa-a9d5-5d38648a4214.mp4"
            />
          </div>

          {/* Content Layer */}
          <div className="relative z-10 min-h-screen flex flex-col">
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

            {/* HeroSection Content - Mission Text */}
            <div className="relative z-10 flex-1 flex flex-col px-5 pt-8 pb-32 md:px-12 md:pt-12 md:pb-40">
              <div className="max-w-2xl w-full">
                <span className="text-xs font-medium tracking-[0.3em] text-neutral-500 uppercase block mb-6 md:mb-8">About Us</span>
                
                <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[0.95] font-light tracking-tight text-neutral-900 m-0 mb-8 md:mb-10">
                  OUR<br />MISSION
                </h1>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  <span className="px-5 py-2 rounded-full border border-neutral-300 text-sm text-neutral-700 bg-white/50 backdrop-blur-sm">Human-Centered</span>
                  <span className="px-5 py-2 rounded-full border border-neutral-300 text-sm text-neutral-700 bg-white/50 backdrop-blur-sm">Responsive</span>
                  <span className="px-5 py-2 rounded-full border border-neutral-300 text-sm text-neutral-700 bg-white/50 backdrop-blur-sm">Seamless</span>
                </div>
                
                <div className="space-y-6 text-sm md:text-base text-neutral-600 leading-relaxed font-light">
                  <p className="text-neutral-900 text-lg md:text-xl font-normal leading-relaxed">
                    Our mission is to redefine how people interact with technology by creating software utilities that are seamless, responsive, and deeply human-centered.
                  </p>
                  <p>
                    We believe software should adapt to people — not the other way around.
                  </p>
                  <p>
                    Too many digital tools are built with complexity as a default. Features become clutter. Interfaces become overwhelming. Users are expected to learn systems instead of systems learning users. Branco Venn challenges that mindset.
                  </p>
                  <p>
                    We design products that remove barriers between intention and execution.
                  </p>
                  <p>
                    Whether someone is gaming, controlling a simulation, creating content, or interacting with connected systems, our software is engineered to feel immediate and natural. We focus on reducing latency, simplifying workflows, and creating immersive interactions that make technology feel like an extension of the user.
                  </p>
                  <p>
                    Our mission goes beyond convenience. We want to democratize powerful digital experiences — making advanced interaction systems accessible to anyone with a smartphone, a computer, and an idea. We believe innovation should not be restricted by expensive hardware or inaccessible ecosystems. Through intelligent software solutions, we aim to unlock new possibilities from devices people already own.
                  </p>
                  <p className="text-neutral-900 font-medium">
                    Sim Gamepad represents that philosophy.
                  </p>
                  <p>
                    It transforms smartphones into precision gaming and simulation controllers, bridging motion, touch, sensors, and real-time responsiveness into a unified experience. It reflects what Branco Venn stands for: software that expands human capability through intelligent design.
                  </p>
                  <p>
                    But this is only the beginning. Branco Venn is building toward a future where utility software becomes more adaptive, more immersive, and more connected across every digital environment.
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

        {/* SECTION 2: ABOUT / MANIFESTO */}
        <section className="w-full bg-[#0F0F0F]">
          <div className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-screen">
            {/* Left Video Column */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-screen lg:sticky lg:top-0 relative">
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
              <div className="max-w-xl w-full py-12 lg:py-24">
                <span className="text-xs font-medium tracking-[0.3em] text-neutral-500 uppercase block mb-8 md:mb-10">Our Manifesto</span>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white leading-[1.05] mb-10 md:mb-12">
                  OUR<br />MANIFESTO
                </h2>
                
                <div className="space-y-6 text-sm md:text-base text-neutral-400 leading-relaxed font-light mb-10">
                  <p className="text-white text-lg md:text-xl font-normal leading-relaxed">
                    We believe utility software deserves the same level of innovation as entertainment platforms and flagship consumer products.
                  </p>
                  <p>
                    We believe responsiveness matters. Milliseconds matter. Design matters. Experience matters.
                  </p>
                  <p>
                    We believe people should feel in control of technology — not constrained by it. The future of interaction is not hidden behind expensive hardware alone. It lives in intelligent software capable of transforming the devices already in our hands into tools with entirely new purposes.
                  </p>
                  <ul className="space-y-2 pl-4 border-l border-neutral-700 my-6">
                    <li>A phone can become a steering wheel.</li>
                    <li>A screen can become a cockpit.</li>
                    <li>Motion can become control.</li>
                    <li>Software can become instinct.</li>
                  </ul>
                  <p>
                    At Branco Venn, we build products that remove the distance between action and response. We are obsessed with fluidity, precision, immersion, and accessibility because those details define whether technology feels mechanical or magical.
                  </p>
                  <p>
                    We do not create bloated systems overloaded with unnecessary complexity. We create focused tools with purpose. Every feature must earn its place. Every interaction must feel intentional. Every millisecond of delay is a problem worth solving.
                  </p>
                  <p>
                    We believe software utilities should empower creators, gamers, professionals, and everyday users alike — giving them faster, smarter, and more immersive ways to interact with digital systems.
                  </p>
                  <p className="text-white">
                    Our products are built for people who expect more from technology:
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mb-10">
                  <span className="px-5 py-2 rounded-full border border-neutral-700 text-sm text-neutral-300">More responsiveness</span>
                  <span className="px-5 py-2 rounded-full border border-neutral-700 text-sm text-neutral-300">More flexibility</span>
                  <span className="px-5 py-2 rounded-full border border-neutral-700 text-sm text-neutral-300">More immersion</span>
                  <span className="px-5 py-2 rounded-full border border-neutral-700 text-sm text-neutral-300">More freedom</span>
                </div>

                <div className="space-y-6 text-sm md:text-base text-neutral-400 leading-relaxed font-light mb-20">
                  <p>
                    We are driven by experimentation and engineering excellence. We continuously push the limits of wireless communication, real-time interaction, motion systems, interface design, and connected experiences to create products that feel ahead of their time.
                  </p>
                  <p>
                    Branco Venn is not just building applications. We are building interaction systems for the next generation of computing. The line between physical and digital continues to disappear. Our role is to make that transition feel natural.
                  </p>
                </div>

                {/* THE FUTURE WE SEE SUB-SECTION */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight mb-8">
                  THE FUTURE<br />WE SEE
                </h3>

                <div className="space-y-6 text-sm md:text-base text-neutral-400 leading-relaxed font-light">
                  <p>
                    We envision a future where software utilities become intelligent layers between humans and machines — adaptive systems capable of understanding movement, context, intent, and responsiveness in real time.
                  </p>
                  <p className="text-white pt-4">A future where:</p>
                  <ul className="space-y-2 pl-4 border-l border-neutral-700 mb-6">
                    <li>Devices communicate seamlessly</li>
                    <li>Interfaces react instantly</li>
                    <li>Control feels natural</li>
                    <li>Hardware limitations disappear through software innovation</li>
                  </ul>
                  <p>
                    Branco Venn exists to build that future. From gaming and simulation tools to next-generation utility platforms, our work is centered around creating software that enhances capability without adding complexity.
                  </p>
                  <p>
                    We are building technology that empowers people to do more with what they already have.
                  </p>
                  <div className="pl-4 border-l border-neutral-700 my-6 space-y-4">
                    <p>
                      <span className="line-through decoration-neutral-600 mr-2">Not louder technology.</span> Smarter technology.
                    </p>
                    <p>
                      <span className="line-through decoration-neutral-600 mr-2">Not more complicated systems.</span> More human experiences.
                    </p>
                  </div>
                  <p className="text-white text-lg font-normal pt-4">
                    That is the vision behind Branco Venn.
                  </p>
                </div>

                <div className="flex items-center gap-6 mt-16">
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
