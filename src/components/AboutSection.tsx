import { FadeLeft, FadeRight, ScaleIn } from "@/components/ui/Animate";
import StatsPanel from "@/components/StatsPanel";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left — Stats Panel (shared with About page) */}
          <FadeLeft>
            <StatsPanel />
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
              <a href="/contact" className="text-[#0077B6] font-semibold text-sm hover:text-[#023E8A] transition-colors">
                Contact Us →
              </a>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
