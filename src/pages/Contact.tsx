import React, { useState } from "react";
import { PageTransition } from "@/components/PageTransition";
import {
  Mail,
  MapPin,
  Send,
  MessageSquare,
} from "lucide-react";

export const Contact: React.FC = () => {
  // Video loaded state
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success">("idle");

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setFormStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus("success");
        // Reset after 4 seconds
        setTimeout(() => {
          setFormStatus("idle");
          setName("");
          setEmail("");
          setMessage("");
        }, 4000);
      } else {
        console.error("API error:", data.error);
        setFormStatus("idle");
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Network error:", err);
      setFormStatus("idle");
      alert("Network error. Please check your connection and try again.");
    }
  };

  // Social media platforms for marquee
  const socialPlatforms = [
    {
      name: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-foreground/80">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: "YouTube",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-foreground/80">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path>
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
        </svg>
      )
    },
    {
      name: "Twitter / X",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-foreground/80">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-foreground/80">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    {
      name: "GitHub",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-foreground/80">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    },
    {
      name: "Discord",
      icon: <MessageSquare className="w-4 h-4 text-foreground/80" />
    },
  ];

  // Duplicate for seamless loop
  const marqueePlatforms = [...socialPlatforms, ...socialPlatforms, ...socialPlatforms, ...socialPlatforms];

  return (
    <PageTransition>
      <div className="bg-background text-foreground min-h-screen w-full flex flex-col relative overflow-x-hidden">
        
        {/* Section 2: Contact Form Section */}
        <section className="relative w-full pt-36 pb-20 px-4 z-20 flex justify-center overflow-hidden">
          
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            onPlay={() => setVideoLoaded(true)}
            onLoadedData={() => setVideoLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-1000 z-0"
            style={{ opacity: videoLoaded ? 0.35 : 0 }}
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260308_114720_3dabeb9e-2c39-4907-b747-bc3544e2d5b7.mp4" type="video/mp4" />
          </video>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none z-0" />

          <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* Left Content (Mockup representation) */}
            <div className="flex flex-col space-y-8 select-none">
              <div>
                <span className="inline-block rounded-full border border-white/10 px-3 py-1 text-[10px] text-neutral-400 font-mono tracking-widest uppercase mb-6 bg-white/5">
                  SUPPORT & INQUIRIES
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                  Get in Touch. <br />
                  <span className="font-light text-neutral-400">We're here to help.</span>
                </h2>
                <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed max-w-lg">
                  Whether you have a question about SimGamepad, need technical support, or want to explore partnership opportunities, our team is ready to assist you.
                </p>
              </div>

              {/* Contact Details with custom HSL borders */}
              <div className="space-y-4 pt-4">
                
                {/* Email US detail */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full border border-white/10 text-white shrink-0 bg-white/[0.02]">
                    <Mail className="w-5 h-5 opacity-80" />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest block">EMAIL US</span>
                    <a href="mailto:contact@brancovenn.com" className="text-sm sm:text-base font-medium text-white hover:text-primary transition-colors cursor-pointer">
                      contact@brancovenn.com
                    </a>
                  </div>
                </div>

                {/* Location detail */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full border border-white/10 text-white shrink-0 bg-white/[0.02]">
                    <MapPin className="w-5 h-5 opacity-80" />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest block">LOCATION</span>
                    <span className="text-sm sm:text-base font-medium text-white">
                      Global Remote Team
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column (Gorgeous Form Card matching Screenshot) */}
            <div className="liquid-glass rounded-3xl border border-white/5 p-8 sm:p-10 select-none relative hover:border-white/10 transition-all duration-500 bg-card/40 backdrop-blur-xl">
              
              {/* Form Title & Icon */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Send a Message
                </h3>
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white select-none">
                  <Send className="w-4 h-4 opacity-80 rotate-45" />
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Input */}
                <div className="space-y-2">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-start">
                      <span className="pr-3 bg-[#0c0a1a] text-[10px] text-neutral-400 font-mono tracking-widest uppercase">
                        NAME
                      </span>
                    </div>
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    disabled={formStatus === "loading"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black/40 border border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition-all duration-300"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-start">
                      <span className="pr-3 bg-[#0c0a1a] text-[10px] text-neutral-400 font-mono tracking-widest uppercase">
                        EMAIL
                      </span>
                    </div>
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    disabled={formStatus === "loading"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black/40 border border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition-all duration-300"
                  />
                </div>

                {/* Message TextArea */}
                <div className="space-y-2">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-start">
                      <span className="pr-3 bg-[#0c0a1a] text-[10px] text-neutral-400 font-mono tracking-widest uppercase">
                        MESSAGE
                      </span>
                    </div>
                  </div>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we help you today?"
                    disabled={formStatus === "loading"}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-black/40 border border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submission State Buttons */}
                <div className="pt-2">
                  {formStatus === "idle" && (
                    <button
                      type="submit"
                      className="bg-white hover:bg-neutral-100 hover:scale-[1.02] active:scale-[0.98] text-black text-sm font-semibold rounded-full px-8 py-3.5 transition-all duration-300 w-full flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      Launch Message <Send className="w-4 h-4 ml-1" />
                    </button>
                  )}

                  {formStatus === "loading" && (
                    <button
                      type="button"
                      disabled
                      className="border border-white/10 bg-neutral-900/50 text-neutral-500 text-sm font-semibold rounded-full px-8 py-3.5 flex items-center justify-center gap-3 w-full"
                    >
                      <svg
                        className="animate-spin h-4 w-4 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending Launch Protocol...
                    </button>
                  )}

                  {formStatus === "success" && (
                    <div className="border border-green-500/20 bg-green-500/5 text-green-400 text-sm font-medium rounded-full px-8 py-3.5 text-center font-mono select-none">
                      ✓ Launch Successful // Message transmitted!
                    </div>
                  )}
                </div>

              </form>

            </div>

          </div>
        </section>

        {/* Section 3: Social Media Marquee */}
        <section className="relative w-full py-16 border-t border-white/5 flex justify-center z-20 bg-background/50">
          <div className="w-full max-w-5xl px-6 mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              
              {/* Left Text */}
              <p className="text-foreground/50 text-sm font-light leading-relaxed whitespace-nowrap shrink-0 text-center md:text-left">
                Follow our network <br className="hidden md:block" /> across the web
              </p>

              {/* Infinite Marquee */}
              <div className="relative overflow-hidden flex-1 w-full py-2 [-webkit-mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
                <div className="flex animate-marquee gap-16 items-center w-max">
                  {marqueePlatforms.map((platform, index) => (
                    <div key={index} className="shrink-0 flex items-center gap-2.5 select-none hover:opacity-80 transition-opacity duration-300">
                      <div className="liquid-glass w-7 h-7 rounded-lg flex items-center justify-center border border-white/10 shrink-0">
                        {platform.icon}
                      </div>
                      <span className="text-base font-semibold whitespace-nowrap text-foreground">
                        {platform.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};
