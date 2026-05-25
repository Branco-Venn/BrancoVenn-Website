import React from "react";
import { PageTransition } from "@/components/PageTransition";

interface Section {
  id: string;
  title: string;
  paragraphs: string[];
}

export const Terms: React.FC = () => {
  const sections: Section[] = [
    {
      id: "definitions",
      title: "1. Definitions",
      paragraphs: [
        "\"Sim Gamepad\"\nRefers to the mobile application, desktop application, website, software modules, APIs, and all related services.",
        "\"User\", \"you\", or \"your\"\nRefers to any individual or entity using the Service.",
        "\"Company\", \"we\", \"our\", or \"us\"\nRefers to the owners and operators of Sim Gamepad.",
        "\"Device\"\nRefers to any smartphone, tablet, computer, or compatible hardware used with the Service."
      ]
    },
    {
      id: "eligibility",
      title: "2. Eligibility",
      paragraphs: [
        "You must be at least 13 years old to use the Service. By using Sim Gamepad, you represent and warrant that:",
        "You are legally capable of entering into binding agreements.",
        "Your use of the Service complies with all applicable laws and regulations.",
        "You will use the Service only for lawful purposes.",
        "* If you are under the age of majority in your jurisdiction, you must use the Service under the supervision of a parent or legal guardian."
      ]
    },
    {
      id: "description",
      title: "3. Description of the Service",
      paragraphs: [
        "Sim Gamepad enables users to transform compatible mobile devices into virtual game controllers and motion-based input devices for supported PC and gaming applications.",
        "Key features may include:\nMotion and gyroscope steering\nTouch-based custom controls\nLow latency Wi-Fi/Bluetooth pairing\nWired USB communication\nLive sensor data transmission\nCustom controller mapping & layouts",
        "Certain features may vary depending on device compatibility, operating system limitations, hardware capabilities, network conditions, and platform permissions."
      ]
    },
    {
      id: "accounts",
      title: "4. User Accounts",
      paragraphs: [
        "Some features may require account registration. You agree to:",
        "Provide accurate and complete information",
        "Maintain the confidentiality of your account credentials",
        "Be responsible for all activities under your account",
        "Notify us immediately of any unauthorized access or security breach",
        "We reserve the right to suspend or terminate accounts that violate these Terms."
      ]
    },
    {
      id: "license",
      title: "5. License Grant",
      paragraphs: [
        "Subject to these Terms, Sim Gamepad grants you a limited, non-exclusive, non-transferable, revocable license to use the Service for personal and non-commercial purposes.",
        "Prohibited Actions:\n• Reverse engineer, decompile, or disassemble the Service.\n• Modify or create derivative works from the software.\n• Redistribute, resell, sublicense, or commercially exploit the Service without written permission.\n• Remove copyright, trademark, or proprietary notices.\n• Use the Service to interfere with networks, systems, or third-party services."
      ]
    },
    {
      id: "connectivity",
      title: "6. Connectivity and Performance Disclaimer",
      paragraphs: [
        "Sim Gamepad relies on hardware sensors, wireless communication technologies, operating system APIs, and network conditions that may vary between devices. You acknowledge that:",
        "Performance, latency, stability, responsiveness, and compatibility may differ across devices and platforms.",
        "Wireless communication may be affected by interference, distance, bandwidth, or hardware limitations.",
        "Certain sensors may behave differently depending on device manufacturers and operating system implementations.",
        "Not all devices support all features of the Service.",
        "We do not guarantee uninterrupted or error-free operation."
      ]
    },
    {
      id: "acceptable-use",
      title: "7. Acceptable Use Policy",
      paragraphs: [
        "You agree not to:",
        "Use the Service for illegal or unauthorized purposes",
        "Attempt to gain unauthorized access to servers, systems, or user accounts",
        "Distribute malware, harmful code, or malicious scripts",
        "Exploit vulnerabilities or attempt to bypass security mechanisms",
        "Use automated tools to abuse the Service"
      ]
    },
    {
      id: "privacy",
      title: "8. Privacy",
      paragraphs: [
        "Your use of the Service is also governed by our Privacy Policy. Sim Gamepad may collect limited technical and diagnostic information including:",
        "Device model and operating system",
        "Application crash logs & performance diagnostics",
        "Connectivity and pairing information",
        "Anonymous usage analytics",
        "We do not intentionally collect unnecessary personal information beyond what is required to operate and improve the Service."
      ]
    },
    {
      id: "third-party",
      title: "9. Third-Party Services",
      paragraphs: [
        "The Service may integrate with or rely on third-party platforms, operating systems, drivers, APIs, or software frameworks. We are not responsible for:",
        "Third-party software availability",
        "Compatibility changes made by platform providers",
        "Third-party outages or restrictions"
      ]
    },
    {
      id: "intellectual-property",
      title: "10. Intellectual Property",
      paragraphs: [
        "All trademarks, branding, software, source code, designs, graphics, logos, and related materials associated with Sim Gamepad are the intellectual property of the Company or its licensors. You may not use our branding or intellectual property without prior written permission."
      ]
    },
    {
      id: "updates",
      title: "11. Updates and Modifications",
      paragraphs: [
        "We reserve the right to:",
        "Modify, update, or discontinue features at any time.",
        "Release patches, bug fixes, or performance improvements.",
        "Change supported devices or compatibility requirements.",
        "Introduce premium or subscription-based features in the future."
      ]
    },
    {
      id: "beta",
      title: "12. Beta Features",
      paragraphs: [
        "Certain features may be labeled as beta, experimental, or early access. These features:",
        "May contain bugs or instability.",
        "May change significantly over time.",
        "May be discontinued without notice.",
        "You use beta features at your own risk."
      ]
    },
    {
      id: "warranties",
      title: "13. Disclaimer of Warranties",
      paragraphs: [
        "THE SERVICE IS PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS.",
        "TO THE MAXIMUM EXTENT PERMITTED BY LAW, SIM GAMEPAD DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO:",
        "• MERCHANTABILITY\n• FITNESS FOR A PARTICULAR PURPOSE\n• NON-INFRINGEMENT\n• ACCURACY\n• RELIABILITY\n• AVAILABILITY",
        "WE DO NOT GUARANTEE THAT THE SERVICE WILL OPERATE WITHOUT INTERRUPTION, BE ERROR-FREE OR SECURE, MEET ALL USER EXPECTATIONS, OR FUNCTION IDENTICALLY ACROSS ALL DEVICES."
      ]
    },
    {
      id: "liability",
      title: "14. Limitation of Liability",
      paragraphs: [
        "TO THE MAXIMUM EXTENT PERMITTED BY LAW, SIM GAMEPAD AND ITS OWNERS, DEVELOPERS, AFFILIATES, CONTRIBUTORS, AND PARTNERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES, INCLUDING BUT NOT LIMITED TO:",
        "Loss of data, profits, or revenue\nDevice damage or hardware malfunctions\nNetwork interruptions or connectivity failures\nInput latency, gameplay disruptions, or performance degradation",
        "IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT PAID BY YOU FOR THE SERVICE IN THE PRECEDING TWELVE (12) MONTHS."
      ]
    },
    {
      id: "indemnification",
      title: "15. Indemnification",
      paragraphs: [
        "You agree to defend, indemnify, and hold harmless Sim Gamepad and its affiliates from any claims, liabilities, damages, losses, or expenses (including attorneys' fees) arising from your use of the Service, your violation of these Terms, your misuse of connected devices or networks, or your violation of any third-party rights."
      ]
    },
    {
      id: "termination",
      title: "16. Termination",
      paragraphs: [
        "We reserve the right to suspend or terminate your access to the Service at any time, with or without notice, if:",
        "You violate these Terms.",
        "Your use poses security or operational risks to us or others.",
        "Required by law or regulatory authorities.",
        "Upon termination, your right to use the Service immediately ceases."
      ]
    },
    {
      id: "governing-law",
      title: "17. Governing Law",
      paragraphs: [
        "These Terms shall be governed and interpreted in accordance with the laws applicable in the jurisdiction where the Company operates, without regard to conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts in that jurisdiction."
      ]
    },
    {
      id: "severability",
      title: "18. Severability",
      paragraphs: [
        "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect."
      ]
    },
    {
      id: "entire-agreement",
      title: "19. Entire Agreement",
      paragraphs: [
        "These Terms constitute the complete agreement between you and Sim Gamepad regarding the use of the Service and supersede all prior agreements or understandings."
      ]
    },
    {
      id: "contact",
      title: "20. Contact Information",
      paragraphs: [
        "For questions, support requests, or legal inquiries, please contact:",
        "Sim Gamepad Support",
        "Email:\nsupport.brancovenn@gmail.com",
        "Website:\nhttps://www.brancovenn.com",
        "By accessing or using Sim Gamepad, you acknowledge that you have read, understood, and agreed to these Terms and Conditions."
      ]
    }
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <PageTransition>
      <div className="bg-black min-h-screen pt-32 pb-20 w-full relative z-10 flex items-center justify-center">
        <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-10 flex gap-12">
          
          {/* Left sticky nav */}
          <aside className="hidden md:block w-56 shrink-0 select-none">
            <div className="sticky top-32 space-y-1">
              <span className="text-xs text-white/30 tracking-widest uppercase mb-6 block font-mono">
                Contents
              </span>
              {sections.map((section) => (
                <span
                  key={section.id}
                  onClick={() => handleScrollTo(section.id)}
                  className="text-sm text-white/40 hover:text-white transition-colors py-1.5 block cursor-pointer font-light"
                >
                  {section.title.split(". ")[1]}
                </span>
              ))}
            </div>
          </aside>

          {/* Right scroll content */}
          <div className="flex-1 space-y-16">
            <div>
              <h1 className="text-4xl sm:text-5xl font-light text-white mb-2 tracking-tight uppercase font-sans">
                Terms of Service
              </h1>
              <span className="text-xs text-white/30 mb-8 block font-mono">
                Last updated May 22, 2026
              </span>
              <p className="text-white/50 text-sm sm:text-base font-light leading-[1.9] mb-4 italic">
                Please read these terms carefully before using Sim Gamepad.
              </p>
              <p className="text-white/50 text-sm sm:text-base font-light leading-[1.9] mb-4">
                Welcome to Sim Gamepad. These Terms and Conditions ("Terms") govern your access to and use of the Sim Gamepad application, website, desktop software, and related services (collectively, the "Service").
              </p>
              <p className="text-white/50 text-sm sm:text-base font-light leading-[1.9] mb-4">
                By downloading, installing, accessing, or using Sim Gamepad, you agree to be bound by these Terms.
              </p>
              <p className="text-white/50 text-sm sm:text-base font-light leading-[1.9] mb-12">
                If you do not agree with these Terms, you must not use the Service.
              </p>
            </div>

            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-32 mb-16 last:mb-0">
                <h2
                  className="text-xl sm:text-2xl font-light text-white mb-6 uppercase tracking-tight"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {section.title}
                </h2>
                
                {section.id === "contact" ? (
                  <div className="space-y-6">
                    <p className="text-white/50 text-sm sm:text-base font-light leading-[1.9]">
                      For questions, support requests, or legal inquiries, please contact Sim Gamepad Support:
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                      {/* Email Card */}
                      <a 
                        href="mailto:support.brancovenn@gmail.com"
                        className="flex items-center gap-4 bg-neutral-900/40 hover:bg-neutral-900/80 border border-white/5 hover:border-orange-500/20 rounded-2xl p-4 sm:p-5 transition-all duration-300 group cursor-pointer"
                      >
                        <div className="h-10 sm:h-12 w-10 sm:w-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-[10px] sm:text-xs text-white/30 uppercase tracking-widest font-mono">Email Support</div>
                          <div className="text-sm sm:text-base text-white/70 group-hover:text-white transition-colors">
                            support.brancovenn@gmail.com
                          </div>
                        </div>
                      </a>

                      {/* Website Card */}
                      <a 
                        href="https://www.brancovenn.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 bg-neutral-900/40 hover:bg-neutral-900/80 border border-white/5 hover:border-orange-500/20 rounded-2xl p-4 sm:p-5 transition-all duration-300 group cursor-pointer"
                      >
                        <div className="h-10 sm:h-12 w-10 sm:w-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-[10px] sm:text-xs text-white/30 uppercase tracking-widest font-mono">Official Website</div>
                          <div className="text-sm sm:text-base text-white/70 group-hover:text-white transition-colors font-light">www.brancovenn.com</div>
                        </div>
                      </a>
                    </div>
                    
                    <p className="text-white/40 text-xs sm:text-sm font-light mt-6 italic">
                      By accessing or using Sim Gamepad, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
                    </p>
                  </div>
                ) : (
                  section.paragraphs.map((p, idx) => (
                    <p
                      key={idx}
                      className="text-white/50 text-sm sm:text-base font-light leading-[1.9] mb-4 whitespace-pre-line"
                    >
                      {p}
                    </p>
                  ))
                )}
              </section>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
};
