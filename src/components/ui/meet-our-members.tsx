import { cn } from "@/lib/utils";

interface MemberItem {
  author: string;
  role: string;
  imageSrc: string;
  roleGradient?: string;
}

interface MeetOurMembersProps {
  members: MemberItem[];
  className?: string;
}

export default function MeetOurMembers({ members, className }: MeetOurMembersProps) {
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1400px] mx-auto px-6">
        {members.map((item, idx) => (
          <div
            key={idx}
            className="member-card bg-neutral-950/80 border border-white/[0.06] text-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Full-bleed image */}
            <div className="relative overflow-hidden h-[420px]">
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
              {/* Bottom gradient overlay with name */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="font-semibold text-white text-2xl tracking-tight leading-tight">{item.author}</p>
                <p className={cn(
                  "text-xs font-semibold bg-gradient-to-r text-transparent bg-clip-text mt-1.5 tracking-[0.15em] uppercase",
                  item.roleGradient || "from-[#8B5CF6] via-[#E0724A] to-[#9938CA]"
                )}>
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
