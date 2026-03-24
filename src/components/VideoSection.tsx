import { FadeLeft } from "@/components/ui/Animate";

export default function VideoSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/videos/2.mp4" type="video/mp4" />
      </video>

      {/* Light overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03045E]/70 via-[#023E8A]/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <FadeLeft>
          <div className="max-w-2xl">
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex gap-1">
                <div className="w-6 h-0.5 bg-[#00B4D8]" />
                <div className="w-3 h-0.5 bg-[#90E0EF]" />
              </div>
              <span className="text-[#90E0EF] text-xs font-semibold tracking-[0.3em] uppercase">
                The Saravana Way
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8">
              Travel is the
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90E0EF] via-[#00B4D8] to-[#0096C7]">
                Ultimate
              </span>
              <br />
              Freedom
            </h2>

            <p className="text-white/80 text-lg leading-relaxed mb-5">
              Life is not measured by the number of breaths you take, but by
              the places that take your breath away. Step beyond the familiar,
              wander into the unknown, and discover a version of yourself you
              never knew existed.
            </p>
            <p className="text-white/65 leading-relaxed mb-10 text-[15px]">
              The ocean is calling. The mountains are waiting. The world is
              yours to explore. Break free from the ordinary and embrace the
              extraordinary — one unforgettable journey at a time.
            </p>

            {/* Quote */}
            <div className="border-l-4 border-[#00B4D8] pl-5 mb-10">
              <p className="text-[#90E0EF] italic text-lg font-medium">
                &quot;Not all those who wander are lost.&quot;
              </p>
              <p className="text-white/45 text-sm mt-1">— J.R.R. Tolkien</p>
            </div>

            {/* CTA */}
            <a
              href="#packages"
              className="inline-flex items-center gap-2 bg-white text-[#0077B6] font-bold px-8 py-4 rounded-full hover:bg-[#00B4D8] hover:text-white transition-all duration-300 shadow-xl hover:shadow-[0_8px_30px_rgba(0,180,216,0.4)] hover:-translate-y-0.5"
            >
              Start Your Journey
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </FadeLeft>
      </div>
    </section>
  );
}
