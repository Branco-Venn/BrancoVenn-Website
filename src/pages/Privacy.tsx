import React from "react";
import { PageTransition } from "@/components/PageTransition";

interface Section {
  id: string;
  title: string;
  paragraphs: string[];
}

export const Privacy: React.FC = () => {
  const sections: Section[] = [
    {
      id: "collect",
      title: "1. Information We Collect",
      paragraphs: [
        "a. Authenticated Profile Data (Cloud Database)\nWhen you register or sign in via our supported authentication providers (such as Google, Apple, or email sign-up), we securely collect and sync profile information to our cloud database (managed via Supabase), including your display name, registered email address, and OAuth provider profile photo URL. This data is used purely for identity management, secure login operations, and managing configurations.",
        "b. Device Settings & Custom Layouts (Cloud Sync)\nTo keep your configurations consistent across all your devices, we store and sync user preferences (app locale, haptic feedback toggle, gyroscope steering sensitivity, and range values) and user-created custom gamepad layouts (layout name, timestamps, and button mapping configurations represented in JSONB format) to our cloud database.",
        "c. Game Telemetry Data (Local-Only, Device Only)\nSim Gamepad receives real-time telemetry from compatible racing games (speed, gear, engine RPM, throttle, brake, clutch, fuel level, laps, flag statuses, and tyre metrics). Crucial Privacy Protection: This telemetry data is received over local networking interfaces (USB, Wi-Fi UDP port 5555, or Bluetooth) and is processed strictly in local device memory on the UI thread. This data is never sent to our database, never stored on our servers, and is immediately discarded.",
        "d. Automatically Collected Diagnostics\nFor performance monitoring and connectivity diagnostics, we may collect basic device hardware information (device model, operating system type/version) and anonymous app performance log data (network connectivity rates, packet transmission stats, pairing logs, and crash reports)."
      ]
    },
    {
      id: "use",
      title: "2. How We Use Your Information",
      paragraphs: [
        "We use your information to:\n• Authenticate users and manage accounts\n• Provide and improve app functionality\n• Ensure security and prevent fraud\n• Communicate important updates",
        "We do not sell your personal data to third parties."
      ]
    },
    {
      id: "sharing",
      title: "3. Sharing of Information",
      paragraphs: [
        "We do not share your personal data except:\n• To comply with legal obligations\n• To protect our rights and prevent misuse\n• With trusted service providers (e.g., hosting, analytics) strictly for operating the service"
      ]
    },
    {
      id: "retention",
      title: "4. Data Retention",
      paragraphs: [
        "We retain your data only as long as necessary to:\n• Provide our services\n• Comply with legal obligations\n• Resolve disputes"
      ]
    },
    {
      id: "deletion",
      title: "5. Data Deletion",
      paragraphs: [
        "You can request deletion of your data at any time.",
        "For detailed instructions, visit:\nhttps://brancovenn.com/privacy#data-deletion",
        "Upon request, we will delete your data within 7–14 business days, subject to legal requirements."
      ]
    },
    {
      id: "security",
      title: "6. Data Security",
      paragraphs: [
        "We implement reasonable technical and organizational measures to protect your data, including:\n• Secure storage systems\n• Access controls\n• Encryption where applicable",
        "However, no system is completely secure."
      ]
    },
    {
      id: "rights",
      title: "7. Your Rights",
      paragraphs: [
        "Depending on your location, you may have the right to:\n• Access your personal data\n• Request correction or deletion\n• Withdraw consent"
      ]
    },
    {
      id: "third-party",
      title: "8. Third-Party Services",
      paragraphs: [
        "Our application integrates with third-party authentication providers and services. These providers may collect and process your data according to their own privacy policies.",
        "We encourage you to review their policies for more information."
      ]
    },
    {
      id: "children",
      title: "9. Children's Privacy",
      paragraphs: [
        "Our services are not intended for children under 13. We do not knowingly collect personal data from children."
      ]
    },
    {
      id: "changes",
      title: "10. Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date."
      ]
    },
    {
      id: "contact",
      title: "11. Contact Us",
      paragraphs: [
        "If you have any questions about this Privacy Policy, contact us at:\n\nsupport@brancovenn.com\n\nhttps://brancovenn.com"
      ]
    },
    {
      id: "deletion-guide",
      title: "12. Detailed Deletion Guide",
      paragraphs: [
        "1. Deletion via Application (Recommended)\nIf available, you can delete your account directly within the application by navigating to:\nSettings → Account → Delete Account\n\nOnce initiated:\n• Your account and associated data will be permanently and instantly deleted using a database cascade command\n• You will be logged out immediately\n• This action is irreversible",
        "2. Deletion via Request (Alternative Method)\nIf you are unable to access your account or prefer manual deletion, you may request data deletion by:\n1. Sending an email to support@brancovenn.com\n2. Using the subject line: \"Data Deletion Request\"\n3. Including:\n• Your full name\n• Email address associated with your account",
        "3. Processing Your Request\nWe will verify your identity to protect your data.\nOnce verified, your data will be deleted within 7–14 business days.\nYou will receive confirmation upon completion.",
        "4. What Data is Deleted\nUpon deletion, we remove:\n• Account information\n• Authentication data (e.g., name, email)\n• User-generated data and preferences",
        "5. Data Retention\nCertain minimal data may be retained if required for:\n• Legal compliance\n• Security and fraud prevention\n\nSuch data will not be used for any other purpose.",
        "6. Contact\nFor any questions regarding data deletion, contact: support@brancovenn.com"
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
                Privacy Policy
              </h1>
              <span className="text-xs text-white/30 mb-8 block font-mono">
                Last updated May 22, 2026
              </span>
              <p className="text-white/50 text-sm sm:text-base font-light leading-[1.9] mb-12">
                Your privacy is important to us. This policy explains how we collect, use, and protect your data.
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
                      If you have any questions about this Privacy Policy, contact us at:
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                      {/* Email Card */}
                      <a 
                        href="mailto:support@brancovenn.com"
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
                            support@brancovenn.com
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
