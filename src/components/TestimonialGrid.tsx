"use client";

import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/Animate";
import { HOME_TESTIMONIALS, TRUST_BANNER_ITEMS } from "@/data/testimonials";

type TestimonialGridProps = {
  showTrustBanner?: boolean;
  className?: string;
};

export default function TestimonialGrid({
  showTrustBanner = true,
  className = "",
}: TestimonialGridProps) {
  return (
    <div className={className}>
      <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {HOME_TESTIMONIALS.map((review) => (
          <StaggerItem key={review.id}>
            <div className="bg-white rounded-2xl p-7 border border-[#CAF0F8] hover:shadow-xl hover:shadow-[#0077B6]/10 transition-all duration-300 hover:-translate-y-1 relative flex flex-col h-full">
              <div className="absolute top-5 right-6 text-[#CAF0F8] text-8xl font-serif leading-none select-none pointer-events-none">
                &ldquo;
              </div>

              <div className="flex gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-[#0096C7]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed text-sm flex-1 relative z-10">
                &ldquo;{review.review}&rdquo;
              </p>

              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-[#CAF0F8]">
                <div
                  className={`bg-gradient-to-br ${review.avatarFrom} ${review.avatarTo} w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md`}
                >
                  {review.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[#03045E] text-sm">{review.name}</div>
                  <div className="text-gray-400 text-xs truncate">{review.location}</div>
                </div>
                <span className="bg-[#F0F8FF] text-[#0077B6] border border-[#CAF0F8] text-[10px] px-2.5 py-1 rounded-full font-semibold flex-shrink-0 leading-tight">
                  {review.package}
                </span>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>

      {showTrustBanner && (
        <FadeUp delay={0.15}>
          <div className="bg-gradient-to-r from-[#023E8A] via-[#0077B6] to-[#0096C7] rounded-3xl p-10 text-white">
            <div className="flex flex-wrap items-center justify-center gap-12 text-center">
              {TRUST_BANNER_ITEMS.map((item, i) => (
                <div
                  key={item.label}
                  className={`${i < 3 ? "md:border-r border-white/20 md:pr-12" : ""}`}
                >
                  <div className="text-3xl font-bold text-white">{item.num}</div>
                  <div className="text-[#90E0EF] text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      )}
    </div>
  );
}
