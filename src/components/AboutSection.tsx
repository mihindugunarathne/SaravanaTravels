import { FadeLeft, FadeRight, ScaleIn, FadeUp } from "@/components/ui/Animate";

const stats = [
  { number: "10+", label: "Years of Experience" },
  { number: "10K+", label: "Happy Travelers" },
  { number: "50+", label: "Destinations" },
  { number: "500+", label: "Tour Packages" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left — Stats Panel */}
          <FadeLeft>
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
                  {stats.map((stat, i) => (
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

              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-6 py-4 shadow-xl border border-[#CAF0F8]">
                <div className="text-xl font-bold text-[#023E8A] leading-none">Since 2014</div>
                <div className="text-[#0096C7] text-xs mt-1 font-medium">Trusted Travel Partner</div>
              </div>
            </div>
          </FadeLeft>

          {/* Right — Text */}
          <FadeRight delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#0077B6]" />
              <span className="text-[#0077B6] font-semibold text-xs tracking-[0.25em] uppercase">
                About Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#03045E] mb-6 leading-tight">
              Your Gateway to{" "}
              <span className="text-[#0077B6]">Extraordinary</span> Adventures
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5 text-[15px]">
              Welcome to{" "}
              <strong className="text-[#023E8A]">Saravana Travels</strong> —
              your trusted companion for unforgettable journeys. Founded with a
              passion for exploration and a commitment to excellence, we have
              been crafting memorable travel experiences for over a decade.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5 text-[15px]">
              We believe that travel is more than just visiting places — it&apos;s
              about creating stories, forging connections, and discovering the
              beauty of the world around us.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10 text-[15px]">
              From spiritual pilgrimages to adventurous treks, from luxury beach
              getaways to cultural heritage tours — Saravana Travels offers a
              wide range of packages to suit every traveler&apos;s dream and budget.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-10">
              {["Expert Guides", "Best Prices", "24/7 Support", "Custom Tours"].map((pill, i) => (
                <ScaleIn key={pill} delay={i * 0.08}>
                  <span className="inline-flex items-center gap-1.5 bg-[#F0F8FF] text-[#0077B6] text-xs font-semibold px-4 py-2 rounded-full border border-[#CAF0F8]">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {pill}
                  </span>
                </ScaleIn>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#packages"
                className="inline-flex items-center gap-2 bg-[#0077B6] hover:bg-[#023E8A] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore Packages
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" className="text-[#0077B6] font-semibold text-sm hover:text-[#023E8A] transition-colors">
                Contact Us →
              </a>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
