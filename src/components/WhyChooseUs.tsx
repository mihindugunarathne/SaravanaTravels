import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/Animate";

const reasons = [
  {
    title: "10+ Years of Experience",
    desc: "Over a decade of crafting seamless travel experiences. Our seasoned team knows every detail that makes a journey truly special.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Best Price Guarantee",
    desc: "Unbeatable prices with zero hidden charges. Get the best deals on flights, hotels, and tour packages — guaranteed every time.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "24/7 Customer Support",
    desc: "Our dedicated support team is available around the clock. Wherever you are in the world, help is always just a call away.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Customized Packages",
    desc: "Every traveler is unique. We tailor itineraries to your specific interests, budget, and schedule — your trip, entirely your way.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Safe & Secure Travel",
    desc: "Your safety is our foremost priority. We partner with trusted providers and ensure all tours meet the highest safety standards.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "10,000+ Happy Clients",
    desc: "Join our ever-growing family of satisfied travelers. Thousands of five-star reviews reflect the quality and care we deliver.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-28 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/videos/Saravana_Travels.mp4" type="video/mp4" />
        <source src="/assets/videos/2.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[#03045E]/75 via-[#023E8A]/65 to-[#03045E]/80" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <FadeUp>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#90E0EF]" />
              <span className="text-[#90E0EF] font-semibold text-xs tracking-[0.25em] uppercase">
                Why Choose Us
              </span>
              <div className="h-px w-8 bg-[#90E0EF]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              The Saravana{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90E0EF] via-[#00B4D8] to-[#48CAE4]">
                Difference
              </span>
            </h2>
            <p className="text-white/65 max-w-2xl mx-auto leading-relaxed text-[15px]">
              We go beyond just booking trips. Here&apos;s what sets us apart and
              why thousands of travelers choose Saravana Travels year after year.
            </p>
          </div>
        </FadeUp>

        {/* Staggered Cards */}
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <StaggerItem key={reason.title}>
              <div className="group bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-7 hover:bg-white/18 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 h-full">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    i % 2 === 0
                      ? "bg-white/15 text-[#90E0EF] group-hover:bg-[#0077B6] group-hover:text-white"
                      : "bg-[#0077B6] text-white group-hover:bg-[#00B4D8]"
                  }`}
                >
                  {reason.icon}
                </div>
                <div className="text-white/12 text-5xl font-bold leading-none mb-1 select-none">
                  0{i + 1}
                </div>
                <h3 className="text-white text-lg font-bold mb-3">{reason.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{reason.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
