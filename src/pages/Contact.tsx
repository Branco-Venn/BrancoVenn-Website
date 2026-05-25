import React, { useState } from "react";
import { PageTransition } from "@/components/PageTransition";

interface FAQItem {
  question: string;
  answer: string;
}

export const Contact: React.FC = () => {
  // FAQ state
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "How is my core customer data protected?",
      answer:
        "All data at rest is encrypted using quantum-resistant AES-GCM-256 keys managed inside validated hardware security modules (HSMs). In transit, data is bound by zero-trust GateShield gateways that prevent active tapping.",
    },
    {
      question: "Can we install Branco Venn on-premise?",
      answer:
        "Yes, our enterprise solutions can be entirely self-hosted within on-premise clusters or virtual private clouds (VPC). This guarantees 100% data sovereignty without telemetry leaks to our servers.",
    },
    {
      question: "What is your standard incident response time?",
      answer:
        "For clients with Enterprise support packages, we offer a strict 15-minute SLA. Our security observation centers operate 24/7/365 with active human-in-the-loop triggers.",
    },
    {
      question: "Are your encryption standards audited?",
      answer:
        "Absolutely. Our core libraries are continuously fuzzed, publicly source-available, and regularly audited by leading third-party security firms. VaultCore has achieved FIPS 140-3 compliance.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex((prev) => (prev === index ? null : index));
  };

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [queryType, setQueryType] = useState("General");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setFormStatus("loading");

    // Simulate 1.5s spinner
    setTimeout(() => {
      setFormStatus("success");
      // Reset inputs
      setName("");
      setEmail("");
      setMessage("");
      setQueryType("General");
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="bg-black min-h-screen pt-32 pb-20 w-full relative z-10 flex items-center justify-center">
        <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-10 grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left Column */}
          <div className="space-y-10 select-none">
            <div>
              <h1
                className="text-4xl sm:text-5xl font-light text-white mb-3 tracking-tight uppercase"
                style={{ letterSpacing: "-0.04em" }}
              >
                Talk to us
              </h1>
              <p className="text-white/50 text-sm sm:text-base font-light leading-relaxed">
                Connect with our structural support systems. Whether you have an enterprise request or need to flag a critical incident, our network is open.
              </p>
            </div>

            {/* Support Links */}
            <div className="space-y-3">
              {[
                { label: "Documentation", href: "#" },
                { label: "Status Page", href: "#" },
                { label: "Security Advisories", href: "#" },
                { label: "Enterprise Sales", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300 font-light"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FA8453] opacity-60" />
                  {link.label}
                </a>
              ))}
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              <span className="text-xs text-white/30 tracking-widest uppercase font-mono block mb-2">
                Frequently Asked Questions
              </span>

              <div className="border-b border-white/10">
                {faqItems.map((item, index) => {
                  const isOpen = openFAQIndex === index;
                  return (
                    <div key={index} className="border-t border-white/10 py-3">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex items-center justify-between text-left text-sm text-white/70 hover:text-white transition-colors duration-300 cursor-pointer py-1"
                      >
                        <span className="font-light pr-4">{item.question}</span>
                        <span className="text-xs text-[#FA8453] font-mono shrink-0">
                          {isOpen ? "[-]" : "[+]"}
                        </span>
                      </button>

                      {/* Animated height for answer */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-xs text-white/50 font-light leading-relaxed pl-1 py-1">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Office Address */}
            <div className="text-[10px] sm:text-xs text-white/30 leading-relaxed font-mono pt-4 select-text">
              <span>OFFICE_LOC_01A // BERLIN DE</span> <br />
              <span>SPREEUFER 18, 10178 BERLIN</span> <br />
              <span>core@brancovenn.security</span>
            </div>
          </div>

          {/* Right Column — Form */}
          <div className="bg-neutral-950/40 backdrop-blur border border-white/5 rounded-3xl p-6 sm:p-8 hover:border-white/10 transition-colors duration-300 self-start">
            <span className="text-xs text-white/30 tracking-widest uppercase font-mono block mb-6">
              Establish Connection
            </span>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="space-y-1">
                <label className="text-[10px] text-neutral-400 font-mono uppercase">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mira Solen"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={formStatus === "loading"}
                  className="bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#FA8453] transition-colors w-full placeholder:text-white/10"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-[10px] text-neutral-400 font-mono uppercase">Secure Address</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. core@client.net"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={formStatus === "loading"}
                  className="bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#FA8453] transition-colors w-full placeholder:text-white/10"
                />
              </div>

              {/* Query Type */}
              <div className="space-y-1">
                <label className="text-[10px] text-neutral-400 font-mono uppercase">Protocol Stream</label>
                <select
                  value={queryType}
                  onChange={(e) => setQueryType(e.target.value)}
                  disabled={formStatus === "loading"}
                  className="bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#FA8453] transition-colors w-full cursor-pointer"
                >
                  <option value="General">General Inquiries</option>
                  <option value="Security Incident">Security Incident Reports (HIGH_PRI)</option>
                  <option value="Enterprise">Enterprise Node Integration</option>
                  <option value="Partnership">Ventures Partnership</option>
                  <option value="Other">Other Signals</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-[10px] text-neutral-400 font-mono uppercase">Encrypted Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Write your signal..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={formStatus === "loading"}
                  className="bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#FA8453] transition-colors w-full placeholder:text-white/10 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                {formStatus === "idle" && (
                  <div className="relative rounded-full p-[1px] bg-gradient-to-r from-[#FA8453] to-[#F8C9B2]">
                    <button
                      type="submit"
                      className="bg-black hover:bg-neutral-900 text-white hover:text-white text-sm font-semibold rounded-full px-8 py-3.5 transition-all w-full select-none cursor-pointer"
                    >
                      Send Message
                    </button>
                  </div>
                )}

                {formStatus === "loading" && (
                  <button
                    type="button"
                    disabled
                    className="border border-white/10 bg-neutral-900/50 text-neutral-500 text-sm font-medium rounded-full px-8 py-3.5 flex items-center justify-center gap-3 w-full"
                  >
                    <svg
                      className="animate-spin h-4 w-4 text-[#FA8453]"
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
                    Establishing handshake...
                  </button>
                )}

                {formStatus === "success" && (
                  <div className="border border-[#FA8453]/20 bg-[#FA8453]/5 text-[#FA8453] text-sm font-medium rounded-full px-8 py-3.5 text-center font-mono select-none">
                    ✓ Message received // Connection established
                  </div>
                )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};
