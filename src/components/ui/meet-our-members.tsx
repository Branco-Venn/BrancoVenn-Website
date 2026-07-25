import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Mail, Copy, Check, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MemberItem {
  author: string;
  role: string;
  imageSrc: string;
  email?: string;
  roleGradient?: string;
}

interface MeetOurMembersProps {
  members: MemberItem[];
  className?: string;
}

export default function MeetOurMembers({ members, className }: MeetOurMembersProps) {
  const [activeEmailIdx, setActiveEmailIdx] = useState<number | null>(null);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = (email: string, idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div className={cn("meet-members-section py-12 w-full", className)}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
        .meet-members-section * {
          font-family: 'Poppins', sans-serif;
        }

        .member-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .member-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08);
        }
        .member-img {
          transition: transform 0.6s ease;
        }
        .member-card:hover .member-img {
          transform: scale(1.04);
        }
      `}</style>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1400px] mx-auto px-6">
        {members.map((item, idx) => {
          const isEmailOpen = activeEmailIdx === idx;
          const isCopied = copiedIdx === idx;

          return (
            <div
              key={idx}
              className="member-card bg-neutral-950/80 border border-white/[0.08] text-white rounded-3xl shadow-2xl overflow-hidden flex flex-col group relative"
            >
              {/* Image & Gradient Header */}
              <div className="relative overflow-hidden h-[380px] w-full">
                <img
                  src={item.imageSrc}
                  alt={item.author}
                  className="member-img h-full w-full object-cover object-top"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = `https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                
                {/* Member Info Floating over Image bottom */}
                <div className="absolute bottom-4 inset-x-6 z-10 select-none">
                  <p className="font-semibold text-white text-2xl tracking-tight leading-tight">{item.author}</p>
                  <p className={cn(
                    "text-xs font-semibold bg-gradient-to-r text-transparent bg-clip-text mt-1 tracking-[0.15em] uppercase",
                    item.roleGradient || "from-[#8B5CF6] via-[#E0724A] to-[#9938CA]"
                  )}>
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Modern Interactive "Reach Out" Card Footer */}
              <div className="p-6 bg-neutral-950/90 border-t border-white/[0.06] flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-1.5 select-none">
                    <Sparkles className="w-3 h-3 text-amber-400/80" /> Direct Contact
                  </span>
                  
                  {item.email && (
                    <button
                      onClick={() => setActiveEmailIdx(isEmailOpen ? null : idx)}
                      className={cn(
                        "text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 border cursor-pointer select-none",
                        isEmailOpen
                          ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                          : "bg-white/5 text-neutral-300 border-white/10 hover:bg-white/15 hover:text-white hover:border-white/20"
                      )}
                    >
                      <Mail className="w-3.5 h-3.5" />
                      {isEmailOpen ? "Hide Contact" : "Reach Out"}
                    </button>
                  )}
                </div>

                {/* Animated Email Drawer */}
                <AnimatePresence>
                  {isEmailOpen && item.email && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-3.5 bg-neutral-900/90 border border-white/10 rounded-2xl flex flex-col gap-3 backdrop-blur-md shadow-inner">
                        {/* Display Email Address */}
                        <div className="flex items-center justify-between gap-2 overflow-hidden px-1">
                          <span className="text-xs font-mono text-neutral-200 truncate select-all">
                            {item.email}
                          </span>
                        </div>

                        {/* Action buttons: Copy & Mailto */}
                        <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/5">
                          <button
                            onClick={(e) => handleCopy(item.email!, idx, e)}
                            className="flex items-center justify-center gap-1.5 py-2 px-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-medium transition-colors border border-white/5 active:scale-95 cursor-pointer"
                          >
                            {isCopied ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400 font-semibold">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5 text-neutral-400" />
                                <span>Copy Mail</span>
                              </>
                            )}
                          </button>

                          <a
                            href={`mailto:${item.email}`}
                            className="flex items-center justify-center gap-1.5 py-2 px-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl text-xs font-medium transition-all shadow-md active:scale-95 cursor-pointer select-none"
                          >
                            <Send className="w-3.5 h-3.5" />
                            <span>Send Email</span>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
