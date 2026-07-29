import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Copy, Check } from "lucide-react";

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
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = (email: string, idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div className={cn("meet-members-section py-8 w-full", className)}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700&display=swap');
        
        .meet-members-section * {
          font-family: 'Poppins', sans-serif;
        }

        .liquid-glass-card {
          background: rgba(15, 15, 18, 0.65);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.12), 0 20px 50px rgba(0, 0, 0, 0.6);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .liquid-glass-card:hover {
          transform: translateY(-6px);
          box-shadow: inset 0 1px 2px 0 rgba(255, 255, 255, 0.25), 0 30px 60px rgba(0, 0, 0, 0.8);
          border-color: rgba(255, 255, 255, 0.18) !important;
        }

        .liquid-pill {
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.15);
          transition: all 0.3s ease;
        }
        .liquid-pill:hover {
          background: rgba(255, 255, 255, 0.12);
          box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.3);
        }

        .member-img {
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .liquid-glass-card:hover .member-img {
          transform: scale(1.05);
        }
      `}</style>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1400px] mx-auto px-6">
        {members.map((item, idx) => {
          const isCopied = copiedIdx === idx;

          return (
            <div
              key={idx}
              className="liquid-glass-card border border-white/[0.08] text-white rounded-[2.2rem] overflow-hidden flex flex-col group relative"
            >
              {/* Full-bleed Portrait Container */}
              <div className="relative overflow-hidden h-[410px] w-full bg-neutral-950">
                <img
                  src={item.imageSrc}
                  alt={item.author}
                  className="member-img h-full w-full object-cover object-top filter brightness-[0.92] group-hover:brightness-100 transition-all duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = `https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600`;
                  }}
                />
                
                {/* Dynamic Frosted Gradient Shader */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-transparent" />

                {/* Floating Member Info */}
                <div className="absolute bottom-5 inset-x-6 z-10 select-none">
                  <h3 className="font-medium text-white text-2xl sm:text-3xl tracking-tight leading-tight drop-shadow-md">
                    {item.author}
                  </h3>
                  <p className={cn(
                    "text-xs font-semibold bg-gradient-to-r text-transparent bg-clip-text mt-1.5 tracking-[0.18em] uppercase",
                    item.roleGradient || "from-cyan-400 via-blue-500 to-indigo-500"
                  )}>
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Apple Liquid Glass Action Area */}
              <div className="p-6 bg-[#09090b]/90 border-t border-white/[0.08] flex flex-col gap-4 backdrop-blur-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase select-none">
                    Reach Out
                  </span>
                  
                  {item.email && (
                    <button
                      onClick={(e) => handleCopy(item.email!, idx, e)}
                      className="liquid-pill text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 border cursor-pointer select-none text-white border-white/10 hover:border-white/20"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-white/80" />
                          <span>Copy Email</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
