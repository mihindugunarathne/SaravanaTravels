import { FadeUp } from "@/components/ui/Animate";
import TestimonialGrid from "@/components/TestimonialGrid";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-28 bg-[#F0F8FF]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#0077B6]" />
              <span className="text-[#0077B6] font-semibold text-xs tracking-[0.25em] uppercase">
                Testimonials
              </span>
              <div className="h-px w-8 bg-[#0077B6]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#03045E] mb-5">
              What Our <span className="text-[#0077B6]">Clients Say</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-[15px]">
              Don&apos;t just take our word for it — hear what our happy travelers have to say about
              their experiences with Saravana Travels.
            </p>
          </div>
        </FadeUp>

        <TestimonialGrid showTrustBanner />
      </div>
    </section>
  );
}
