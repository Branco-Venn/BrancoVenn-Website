import React, { useState } from "react";
import { PageTransition } from "@/components/PageTransition";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Plan {
  id: string;
  name: string;
  priceINR: string;
  priceUSD: string;
  period: string;
  badge?: string;
  badgeColor?: string;
  accentColor: string;
  glowColor: string;
  description: string;
  features: string[];
  notFeatures?: string[];
  ctaText: string;
  popular?: boolean;
}

export const Pricing: React.FC = () => {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState("");

  const handlePlanSelection = (planName: string) => {
    setSelectedPlanName(planName);
    setShowUpgradeModal(true);
  };

  const plans: Plan[] = [
    {
      id: "free",
      name: "Free Tier",
      priceINR: "₹0",
      priceUSD: "$0",
      period: "Play with Ads",
      accentColor: "#A3A3A3",
      glowColor: "rgba(163, 163, 163, 0.15)",
      description: "Experience virtual gamepad pairing and basic motion steering with advertisement limits.",
      features: [
        "4-minute initial play session time limit",
        "Refill playtime (+30 mins) by watching ads",
        "Wi-Fi & USB pairing modes",
        "Basic gyroscope steering sensitivity controls"
      ],
      notFeatures: [
        "Ad-free gaming session experience",
        "Access to premium and F1 steering layouts",
        "Advanced steering telemetry & RPM lights",
        "24/7 Priority developer support"
      ],
      ctaText: "Get Free App"
    },
    {
      id: "monthly",
      name: "1 Month Premium",
      priceINR: "₹49",
      priceUSD: "$0.59",
      period: "per month",
      accentColor: "#10B981",
      glowColor: "rgba(16, 185, 129, 0.25)",
      description: "Power up your session limits and strip away the ads for a full month of race action.",
      features: [
        "Play without session time limits",
        "Zero ad interruptions or popups",
        "Wi-Fi, USB, and Bluetooth pairing",
        "Access to basic layouts and custom mappings",
        "Full dashboard widget loading support"
      ],
      notFeatures: [
        "Advanced controller mappings (Pro Racing)",
        "Priority developer discord support"
      ],
      ctaText: "Upgrade in App"
    },
    {
      id: "yearly",
      name: "1 Year Premium",
      priceINR: "₹270",
      priceUSD: "$3.29",
      period: "per year",
      badge: "POPULAR",
      badgeColor: "#EAB308",
      accentColor: "#EAB308",
      glowColor: "rgba(234, 179, 8, 0.35)",
      description: "Supercharge your racing budget and save 53% compared to monthly. Unlocked features forever.",
      features: [
        "Play without session time limits",
        "Zero ad interruptions forever",
        "All premium F1 and customized layouts",
        "Advanced dashboard customization",
        "Save 53% compared to monthly tier",
        "Priority developer support channel access"
      ],
      ctaText: "Upgrade in App",
      popular: true
    },
    {
      id: "pro",
      name: "Pro Racing Pack",
      priceINR: "₹450",
      priceUSD: "$5.49",
      period: "one-time payment",
      badge: "BEST VALUE",
      badgeColor: "#8B5CF6",
      accentColor: "#8B5CF6",
      glowColor: "rgba(139, 92, 246, 0.35)",
      description: "The ultimate collector's pass. One-time purchase for advanced simulators, telemetry, and layouts.",
      features: [
        "All features of 1-Year Premium package",
        "Lifetime license - no subscription renewal",
        "Advanced telemetry integration (Assetto Corsa, F1, iRacing)",
        "Reanimated F1-style RPM led strip widgets",
        "Exclusive dashboard themes and layouts",
        "Advanced custom sensitivity profiles"
      ],
      ctaText: "Upgrade in App"
    }
  ];

  const comparisonFeatures = [
    { name: "Time Limit per Session", free: "30 Minutes", monthly: "Unlimited", yearly: "Unlimited", pro: "Unlimited" },
    { name: "Ad Interruptions", free: "Yes (Watch for playtime)", monthly: "None", yearly: "None", pro: "None" },
    { name: "Connectivity Channels", free: "Wi-Fi & USB", monthly: "Wi-Fi, USB & BLE", yearly: "Wi-Fi, USB & BLE", pro: "Wi-Fi, USB & BLE" },
    { name: "Custom Layout Builder", free: "Basic (Save locally)", monthly: "Sync to Cloud", yearly: "Sync to Cloud", pro: "Sync to Cloud" },
    { name: "F1 Style RPM Shift Lights", free: "No", monthly: "No", yearly: "Yes", pro: "Yes (Advanced)" },
    { name: "Live Game Telemetry Sync", free: "No", monthly: "No", yearly: "Basic", pro: "iRacing / F1 / AC / ACC" },
    { name: "Support priority", free: "Community Support", monthly: "Email Support", yearly: "Priority Email", pro: "24/7 Discord/Developer Dev Access" },
    { name: "Subscription Period", free: "Free", monthly: "Monthly subscription", yearly: "Annual subscription", pro: "One-time Purchase" }
  ];

  const faqs = [
    {
      q: "How does the Free Tier playtime limit work?",
      a: "The Free Tier gives you a 30-minute initial session. If you need more time, you can trigger a 30-second ad video inside the mobile app to gain an additional 30 minutes of play time. Premium plans remove this playtime limit completely."
    },
    {
      q: "Are telemetry processing latency rates affected by my network?",
      a: "Yes. Sim Gamepad uses local UDP ports (specifically port 5555) to broadcast vehicle data from your PC to your phone. For best results, use a 5GHz Wi-Fi router setup with low traffic, or connect directly via USB cable to ensure zero telemetry lag."
    },
    {
      q: "Is account deletion instant, and does it clear my active subscriptions?",
      a: "Yes. Initiating account deletion under Settings → Account → Delete Account instantly issues a Postgres cascading delete, permanently scrubbing your authentication profiles, synced settings, and layout JSONB configurations. Please note that subscription billing is managed by the Google Play Store / Apple App Store, and you should cancel your active subscription there to prevent automatic renewal."
    },
    {
      q: "Can I transfer my custom controller layouts across devices?",
      a: "Yes. By registering an account (via Google, Apple, or email sign-up), your custom button configs and gyroscope steering settings are securely stored in our Supabase cloud database. Once signed into a new device, your layouts will sync down instantly."
    }
  ];

  return (
    <PageTransition>
      <div className="bg-black text-white min-h-screen pt-36 pb-20 w-full relative overflow-x-hidden flex flex-col items-center">
        
        {/* Immersive Racing Ambient Background Blobs */}
        <div className="absolute top-[20%] left-[-10%] w-[30vw] h-[30vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none z-0" />
        <div className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-violet-600/5 blur-[150px] pointer-events-none z-0" />
        
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-8 relative z-10">
          
          {/* Header section with high-end typography */}
          <div className="text-center max-w-3xl mx-auto mb-16 select-none">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight uppercase font-sans">
              Choose your speed. <br />
              <span className="font-light text-neutral-400">Flexible pricing tiers.</span>
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
              Unlock the maximum capabilities of motion steering, layouts syncing, and live telemetry widgets. Upgrade for the ultimate racing experience.
            </p>

            {/* Currency Selector Switch */}
            <div className="flex items-center justify-center gap-3 mt-10">
              <span className={`text-sm font-semibold transition-colors ${currency === "INR" ? "text-white" : "text-neutral-500"}`}>
                INR (₹)
              </span>
              <button
                onClick={() => setCurrency(currency === "INR" ? "USD" : "INR")}
                className="relative w-14 h-8 bg-neutral-900 border border-white/10 rounded-full p-1 transition-colors hover:border-white/20 cursor-pointer"
                aria-label="Toggle currency"
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-all duration-300 ${
                    currency === "USD" ? "translate-x-6 bg-primary" : "translate-x-0"
                  }`}
                />
              </button>
              <span className={`text-sm font-semibold transition-colors ${currency === "USD" ? "text-white" : "text-neutral-500"}`}>
                USD ($)
              </span>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 items-stretch">
            {plans.map((plan) => {
              const isSelected = hoveredPlan === plan.id;
              return (
                <div
                  key={plan.id}
                  onMouseEnter={() => setHoveredPlan(plan.id)}
                  onMouseLeave={() => setHoveredPlan(null)}
                  className="relative flex flex-col rounded-3xl border border-white/5 bg-card/20 backdrop-blur-xl transition-all duration-500 hover:border-white/10 overflow-hidden items-stretch select-none"
                  style={{
                    boxShadow: isSelected
                      ? `0 10px 30px -10px ${plan.accentColor}30, 0 1px 3px 0 ${plan.accentColor}10`
                      : "none"
                  }}
                >
                  {/* Neon top highlight stripe on hover */}
                  <div
                    className="absolute top-0 inset-x-0 h-1.5 transition-opacity duration-300"
                    style={{
                      backgroundColor: plan.accentColor,
                      opacity: isSelected ? 1 : 0.25
                    }}
                  />

                  {plan.badge && (
                    <div
                      className="absolute top-0 right-6 px-3 py-1.5 text-[9px] font-bold tracking-widest text-black rounded-b-xl"
                      style={{ backgroundColor: plan.badgeColor }}
                    >
                      {plan.badge}
                    </div>
                  )}

                  {/* Body Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-6">
                      <h3
                        className="text-lg font-semibold tracking-tight mb-2 transition-colors duration-300"
                        style={{ color: isSelected ? plan.accentColor : "#FFFFFF" }}
                      >
                        {plan.name}
                      </h3>
                      <p className="text-neutral-500 text-xs font-light min-h-[36px]">
                        {plan.description}
                      </p>
                    </div>

                    <div className="flex items-baseline gap-2 mb-8">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        {currency === "INR" ? plan.priceINR : plan.priceUSD}
                      </span>
                      <span className="text-neutral-500 text-xs font-mono lowercase">
                        {plan.period}
                      </span>
                    </div>

                    {/* Features checklist */}
                    <div className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs leading-relaxed text-neutral-300">
                          <span className="mt-0.5 shrink-0 flex items-center justify-center w-4 h-4 rounded-full bg-white/5 border border-white/10">
                            <Check className="w-2.5 h-2.5" style={{ color: plan.accentColor }} />
                          </span>
                          <span>{feature}</span>
                        </div>
                      ))}

                      {plan.notFeatures &&
                        plan.notFeatures.map((notFeature, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-xs leading-relaxed text-neutral-600">
                            <span className="mt-0.5 shrink-0 flex items-center justify-center w-4 h-4 rounded-full bg-white/5 border border-white/5">
                              <X className="w-2.5 h-2.5 text-neutral-700" />
                            </span>
                            <span>{notFeature}</span>
                          </div>
                        ))}
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => handlePlanSelection(plan.name)}
                      className="w-full rounded-2xl py-3.5 text-xs font-bold tracking-widest uppercase cursor-pointer select-none transition-all duration-300 shadow-md border hover:scale-[1.02] active:scale-[0.98]"
                      style={{
                        backgroundColor: plan.popular ? plan.accentColor : "transparent",
                        color: plan.popular ? "black" : "white",
                        borderColor: plan.popular ? "transparent" : "rgba(255,255,255,0.08)"
                      }}
                    >
                      {plan.ctaText}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Feature Comparison Table */}
          <div className="mb-24 select-none">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-tight text-white mb-3">
                Plan Comparison
              </h2>
              <p className="text-neutral-500 text-xs sm:text-sm font-light">
                Analyze feature metrics across every start grid package we offer.
              </p>
            </div>

            <div className="w-full overflow-x-auto rounded-3xl border border-white/5 bg-card/10 backdrop-blur-xl">
              <table className="w-full border-collapse text-left min-w-[700px] text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="p-6 font-semibold text-neutral-400">Features</th>
                    <th className="p-6 font-semibold text-neutral-300">Free Tier</th>
                    <th className="p-6 font-semibold text-emerald-400">1 Month</th>
                    <th className="p-6 font-semibold text-yellow-400">1 Year</th>
                    <th className="p-6 font-semibold text-violet-400">Pro Racing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.03]">
                  {comparisonFeatures.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-6 font-medium text-white">{row.name}</td>
                      <td className="p-6 text-neutral-400 font-light">{row.free}</td>
                      <td className="p-6 text-neutral-300 font-light">{row.monthly}</td>
                      <td className="p-6 text-neutral-300 font-light">{row.yearly}</td>
                      <td className="p-6 text-white font-medium">{row.pro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="max-w-3xl mx-auto mb-10">
            <div className="text-center max-w-xl mx-auto mb-12 select-none">
              <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-tight text-white mb-3">
                Pricing FAQs
              </h2>
              <p className="text-neutral-500 text-xs sm:text-sm font-light">
                Frequently asked questions regarding licensing, sync limits, and telemetry.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = expandedFaq === index;
                return (
                  <div
                    key={index}
                    className="liquid-glass rounded-2xl border border-white/5 bg-card/10 backdrop-blur-xl transition-all duration-300 overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : index)}
                      className="w-full p-6 flex items-center justify-between text-left select-none outline-none cursor-pointer"
                    >
                      <span className="font-medium text-white text-sm sm:text-base pr-4">
                        {faq.q}
                      </span>
                      <span className="shrink-0 text-white/40 hover:text-white transition-colors">
                        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="border-t border-white/5 bg-black/40 p-6 text-xs sm:text-sm font-light text-neutral-400 leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Upgrade Modal */}
      <AnimatePresence>
        {showUpgradeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Blur backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowUpgradeModal(false)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-2xl w-full bg-neutral-950 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden z-10"
            >
              {/* Glowing neon accent behind */}
              <div className="absolute -top-[20%] -left-[20%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[80px] pointer-events-none" />

              {/* Close button */}
              <button
                onClick={() => setShowUpgradeModal(false)}
                className="absolute top-6 right-6 text-white/40 hover:text-white cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title & Icon */}
              <div className="flex flex-col items-center text-center mt-2 mb-8 select-none">
                <div className="w-20 h-20 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-4 overflow-hidden select-none">
                  <img src="/asset-image/sim_gamepad_logo.png" alt="Sim Gamepad Logo" className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase">
                  Upgrade Sim Gamepad
                </h3>
                <p className="text-xs text-white/90 bg-white/5 border border-white/10 rounded-full px-4 py-1 font-mono tracking-widest uppercase mt-2">
                  {selectedPlanName}
                </p>
              </div>

              {/* Explanation text */}
              <div className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-8 space-y-5 select-none">
                <p>
                  Upgrades and transactions are handled <strong className="text-white font-medium">exclusively inside the Sim Gamepad mobile application</strong> using secure App Store and Google Play billing mechanisms.
                </p>
                <div className="text-sm text-amber-200/90 bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5 flex gap-4 items-start shadow-inner">
                  <svg className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="leading-relaxed">
                    No sign-in or payment gateways are hosted on this website for your protection and security.
                  </span>
                </div>
              </div>

              {/* Mobile App Downloads CTA */}
              <div className="space-y-4">
                <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest block text-center select-none">
                  Download & Upgrade
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Google Play Store Badge Button */}
                  <a
                    href="https://play.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-neutral-900 hover:bg-neutral-900/80 border border-white/5 hover:border-primary/20 rounded-xl p-3 transition-all duration-300 group cursor-pointer"
                  >
                    <img src="/asset-image/google_play_logo.svg" alt="Google Play Logo" className="w-6 h-6 shrink-0 object-contain" />
                    <div>
                      <div className="text-[8px] text-white/30 uppercase tracking-widest font-mono">Get it on</div>
                      <div className="text-xs font-semibold text-white/80 group-hover:text-white transition-colors">Google Play</div>
                    </div>
                  </a>

                  {/* Apple App Store Badge Button */}
                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-neutral-900 hover:bg-neutral-900/80 border border-white/5 hover:border-primary/20 rounded-xl p-3 transition-all duration-300 group cursor-pointer"
                  >
                    <svg className="w-6 h-6 text-neutral-400 group-hover:text-primary transition-colors fill-current" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94.12.01.24.02.36.02.9 0 2.01-.54 2.45-1.35z" />
                    </svg>
                    <div>
                      <div className="text-[8px] text-white/30 uppercase tracking-widest font-mono">Download on</div>
                      <div className="text-xs font-semibold text-white/80 group-hover:text-white transition-colors">App Store</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-8 text-center select-none">
                <span className="text-[10px] text-neutral-400 font-mono italic">
                  Configure once, play everywhere.
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};
