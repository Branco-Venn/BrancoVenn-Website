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
      ctaText: "Download Free App"
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
      ctaText: "Go Premium Monthly"
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
      ctaText: "Unlock Year Pass",
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
      ctaText: "Get Pro Racing License"
    }
  ];

  const comparisonFeatures = [
    { name: "Time Limit per Session", free: "4 Minutes", monthly: "Unlimited", yearly: "Unlimited", pro: "Unlimited" },
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
      a: "The Free Tier gives you a 4-minute initial session. If you need more time, you can trigger a 30-second ad video inside the mobile app to gain an additional 30 minutes of play time. Premium plans remove this playtime limit completely."
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
            <span className="inline-block rounded-full border border-white/10 px-4 py-1 text-xs text-neutral-400 font-mono tracking-widest uppercase mb-6 bg-white/5">
              PLANNING YOUR START GRID
            </span>
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
    </PageTransition>
  );
};
