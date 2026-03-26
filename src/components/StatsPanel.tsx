"use client";

import { ScaleIn } from "@/components/ui/Animate";

export const ABOUT_STATS = [
  { number: "10+", label: "Years of Experience" },
  { number: "10K+", label: "Happy Travelers" },
  { number: "50+", label: "Destinations" },
  { number: "500+", label: "Tour Packages" },
] as const;

type StatsPanelProps = {
  showBadge?: boolean;
};

export default function StatsPanel({ showBadge = true }: StatsPanelProps) {
  return (
    <div className="relative">
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#CAF0F8] rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#90E0EF] rounded-full blur-3xl opacity-30 -z-10" />

      <div className="relative bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#0096C7] rounded-3xl p-10 shadow-2xl">
        <div className="absolute inset-0 opacity-10 overflow-hidden rounded-3xl">
          <svg viewBox="0 0 400 300" className="absolute bottom-0 w-full" fill="none">
            <path d="M0 200 Q100 150 200 200 Q300 250 400 200 V300 H0Z" fill="white" />
            <path d="M0 230 Q100 180 200 230 Q300 280 400 230 V300 H0Z" fill="white" opacity="0.5" />
          </svg>
        </div>

        <p className="text-[#90E0EF] text-xs font-semibold tracking-[0.25em] uppercase mb-7 relative z-10">
          Our Achievements
        </p>

        <div className="grid grid-cols-2 gap-4 relative z-10">
          {ABOUT_STATS.map((stat, i) => (
            <ScaleIn key={stat.label} delay={i * 0.1}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group">
                <div className="text-4xl font-bold text-white mb-1 group-hover:text-[#90E0EF] transition-colors">
                  {stat.number}
                </div>
                <div className="text-white/65 text-xs leading-tight">{stat.label}</div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>

      {showBadge && (
        <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-6 py-4 shadow-xl border border-[#CAF0F8]">
          <div className="text-xl font-bold text-[#023E8A] leading-none">Since 2014</div>
          <div className="text-[#0096C7] text-xs mt-1 font-medium">Trusted Travel Partner</div>
        </div>
      )}
    </div>
  );
}
