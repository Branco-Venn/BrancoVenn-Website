import React from "react";
import { PageTransition } from "@/components/PageTransition";

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

export const About: React.FC = () => {
  const milestones: Milestone[] = [
    {
      year: "2022",
      title: "Assembled in Berlin",
      description: "Core team assembled in Berlin; early threat modeling research begins.",
    },
    {
      year: "2023",
      title: "First Prototype Launch",
      description: "First prototype of GateShield tested with 3 enterprise partners.",
    },
    {
      year: "2024",
      title: "Federal Validation",
      description: "VaultCore encryption standard achieves FIPS 140-3 validation.",
    },
    {
      year: "2024 Q3",
      title: "Series A Capital Injection",
      description: "Series A funding secured; team grows to 40 engineers.",
    },
    {
      year: "2025",
      title: "Mass Threat Processing",
      description: "ObserveNet AI engine processes 1B threat signals daily.",
    },
    {
      year: "2026",
      title: "Global Distribution",
      description: "Branco Venn deployed across 90k+ ventures worldwide.",
    },
  ];

  const team: TeamMember[] = [
    { name: "Mira Solen", role: "Founder & CEO", initials: "MS" },
    { name: "Kai Randt", role: "CTO", initials: "KR" },
    { name: "Lena Voltz", role: "Security Architect", initials: "LV" },
    { name: "Obi Tarr", role: "Lead Engineer", initials: "OT" },
    { name: "Sara Finn", role: "VP Product", initials: "SF" },
    { name: "Dex Mura", role: "AI Research", initials: "DM" },
    { name: "Yuki Fen", role: "Design Lead", initials: "YF" },
    { name: "Marc Hoult", role: "DevOps", initials: "MH" },
  ];

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-4 sm:px-10 max-w-[1100px] mx-auto text-center select-none">
        {/* Soft background blob */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#FA8453]/10 rounded-full blur-[100px] pointer-events-none" />

        <h1
          className="text-5xl sm:text-7xl font-light text-white leading-tight uppercase tracking-tight"
          style={{ letterSpacing: "-0.04em" }}
        >
          Defending the <br />
          <span className="text-[#FA8453]">digital frontier</span>
        </h1>
        <p className="mt-6 text-white/50 max-w-xl mx-auto text-sm sm:text-base font-light leading-relaxed">
          We are committed to building foundational protocols that guarantee complete confidentiality, robust boundary protection, and absolute individual data control in an increasingly surveillance-driven cyberspace.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="relative max-w-[900px] mx-auto px-4 sm:px-10 py-20 w-full overflow-hidden">
        {/* Vertical center line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-16 relative z-10">
          {milestones.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={item.year}
                className={`flex flex-col md:flex-row items-center w-full relative ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FA8453] shadow-md shadow-[#FA8453]/50 z-20" />

                {/* Content Box */}
                <div
                  className={`w-full md:w-[45%] bg-neutral-950/40 backdrop-blur border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-white/10 transition-colors duration-300 ${
                    isLeft ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <span className="inline-block bg-white/5 rounded-full px-3 py-1 text-[10px] sm:text-xs text-white/40 mb-2 font-mono">
                    {item.year}
                  </span>
                  <h3 className="text-lg sm:text-xl font-light text-white mb-2 uppercase">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/50 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team Grid */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-10 py-20 w-full relative z-10">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[1400px]">
            <span className="text-xs text-white/30 tracking-widest uppercase mb-12 block font-mono">
              the team
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-neutral-950 border border-white/5 rounded-2xl p-6 hover:bg-neutral-900 hover:border-white/10 transition-all duration-300 group select-none"
                >
                  {/* Initials Avatar */}
                  <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-[#FA8453]/15 transition-all duration-300 mb-4 flex items-center justify-center text-white/20 group-hover:text-[#FA8453] text-lg font-medium font-mono">
                    {member.initials}
                  </div>
                  <h4 className="text-white text-sm sm:text-base font-medium group-hover:text-white transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-white/40 text-xs sm:text-sm mt-1 font-light">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
