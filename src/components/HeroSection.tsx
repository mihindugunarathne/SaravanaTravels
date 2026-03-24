"use client";

import { MountFadeUp } from "@/components/ui/Animate";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] flex items-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/assets/videos/Traveler.mp4" type="video/mp4" />
      </video>

      {/* Left-side overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03045E]/55 via-[#023E8A]/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/15" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12 mt-16">
        <div className="max-w-xl">

          {/* Badge */}
          <MountFadeUp delay={0.1}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/25 text-white text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full mb-7">
              <span className="w-2 h-2 rounded-full bg-[#00B4D8] animate-pulse" />
              Welcome to Saravana Travels
            </div>
          </MountFadeUp>

          {/* Heading */}
          <MountFadeUp delay={0.25}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] mb-5 tracking-tight">
              <span className="block text-white drop-shadow-lg">
                Discover the World,
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#90E0EF] via-[#00B4D8] to-[#48CAE4]">
                Your Way
              </span>
            </h1>
          </MountFadeUp>

          {/* Subtext */}
          <MountFadeUp delay={0.4}>
            <p className="text-base md:text-lg text-white/80 mb-9 leading-relaxed font-light">
              From serene backwaters to majestic mountains, your trusted travel
              partner crafts extraordinary journeys that create memories for a
              lifetime.
            </p>
          </MountFadeUp>

          {/* Buttons */}
          <MountFadeUp delay={0.55}>
            <div className="flex flex-wrap gap-4 mb-14">
              <motion.a
                href="#packages"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#0077B6] hover:bg-[#0096C7] text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-300 shadow-lg shadow-[#0077B6]/30"
              >
                Explore Packages
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="border-2 border-white/60 text-white hover:bg-white hover:text-[#0077B6] font-semibold px-8 py-3.5 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </motion.a>
            </div>
          </MountFadeUp>

          {/* Stats */}
          <MountFadeUp delay={0.7}>
            <div className="flex items-center gap-0">
              {[
                { num: "10+", label: "Years" },
                { num: "10K+", label: "Travelers" },
                { num: "50+", label: "Destinations" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`pr-8 ${i > 0 ? "pl-8 border-l border-white/20" : ""}`}
                >
                  <div className="text-2xl font-bold text-[#90E0EF]">
                    {stat.num}
                  </div>
                  <div className="text-white/55 text-[11px] uppercase tracking-widest mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </MountFadeUp>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-6 h-9 rounded-full border-2 border-white/40 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
