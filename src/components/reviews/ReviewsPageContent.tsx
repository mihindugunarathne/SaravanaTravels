"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import {
  FEATURED_TRAVELER_REVIEW,
  TRAVELER_REVIEWS,
  travelerReviewsToMarquee,
} from "@/data/reviewsPage";
import { PAGE_HERO_BACKGROUNDS } from "@/data/pageHeroBackgrounds";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { FadeUp } from "@/components/ui/Animate";

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-[#0096C7]" : "text-[#CAF0F8]"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPageContent() {
  const featured = FEATURED_TRAVELER_REVIEW;

  const marquee = useMemo(() => travelerReviewsToMarquee(TRAVELER_REVIEWS), []);
  const firstColumn = marquee.slice(0, 3);
  const secondColumn = marquee.slice(3, 6);
  const thirdColumn = marquee.slice(6, 9);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[68vh] flex items-end overflow-hidden pt-28 pb-14 md:pb-16">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_BACKGROUNDS.reviews}
            alt="Saravana Travels — traveler reviews hero background"
            fill
            priority
            className="object-cover object-[center_35%]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#03045E]/50 via-[#023E8A]/30 to-[#0077B6]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03045E]/35 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8]" />
              Real feedback
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4 max-w-3xl drop-shadow-lg">
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90E0EF] via-white to-[#90E0EF]">
                Travelers Say
              </span>
            </h1>
            <p className="text-white/85 text-base md:text-lg max-w-xl leading-snug">
              Unedited-style notes from people who&apos;ve actually travelled with us — the good bits
              and the honest bits.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Featured review */}
      <section className="py-16 md:py-20 bg-[#F0F8FF]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#0077B6]" />
              <span className="text-[#0077B6] font-semibold text-xs tracking-[0.25em] uppercase">
                Featured story
              </span>
              <div className="h-px w-8 bg-[#0077B6]" />
            </div>
          </FadeUp>

          <FadeUp delay={0.06}>
            <article className="relative overflow-hidden rounded-3xl border border-[#CAF0F8] bg-white shadow-xl shadow-[#0077B6]/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0077B6]/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#90E0EF]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-4 bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#0096C7] p-10 lg:p-12 text-white flex flex-col justify-center">
                  <p className="text-[#90E0EF] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                    Longer read
                  </p>
                  <StarRow rating={featured.rating} />
                  <h2 className="text-2xl md:text-3xl font-bold mt-5 mb-2">{featured.name}</h2>
                  <p className="text-white/75 text-sm mb-1">{featured.country}</p>
                  <p className="text-white/90 text-sm font-medium border-l-2 border-[#90E0EF] pl-3 mt-4">
                    {featured.tripType}
                  </p>
                </div>
                <div className="lg:col-span-8 p-10 lg:p-12 lg:pl-10">
                  <span className="text-[#CAF0F8] text-7xl font-serif leading-none select-none block -mb-4">
                    &ldquo;
                  </span>
                  <p className="text-[#03045E]/90 text-base md:text-lg leading-relaxed whitespace-pre-line">
                    {featured.text}
                  </p>
                  <p className="text-gray-400 text-sm mt-6">Shared with permission.</p>
                </div>
              </div>
            </article>
          </FadeUp>
        </div>
      </section>

      {/* More reviews — vertical marquee columns */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeUp>
            <div className="mb-10 text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-[#0077B6]" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0077B6]">
                  More reviews
                </span>
                <div className="h-px w-8 bg-[#0077B6]" />
              </div>
              <h2 className="text-3xl font-bold text-[#03045E] md:text-4xl">
                From different trips &amp; places
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-gray-500">
                Ratings are self-reported; we don&apos;t edit wording except typos and privacy.
              </p>
            </div>
          </FadeUp>

          <div className="mx-auto mt-2 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          </div>
        </div>
      </section>

      {/* Video placeholder */}
      <section className="py-12 md:py-16 bg-[#F0F8FF] border-y border-[#CAF0F8]/80">
        <div className="max-w-4xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-6">
              <span className="text-[#0077B6] font-semibold text-xs tracking-[0.25em] uppercase">
                Video stories
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-[#03045E] mt-2">
                Hear travelers in their own words
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                We&apos;re collecting short clips from recent trips — check back soon.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#03045E] via-[#023E8A] to-[#0077B6] border border-[#0077B6]/30 shadow-lg">
              <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.06\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <div
                  className="w-16 h-16 rounded-full bg-white/15 border border-white/30 flex items-center justify-center mb-4 backdrop-blur-sm"
                  aria-hidden
                >
                  <svg
                    className="w-7 h-7 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white font-semibold text-sm md:text-base">Video testimonial</p>
                <p className="text-white/65 text-xs md:text-sm mt-1 max-w-sm">
                  Placeholder — embed your YouTube or Vimeo link here when ready.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-[#03045E] via-[#023E8A] to-[#0077B6] relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00B4D8] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want a trip people actually write home about?
            </h2>
            <p className="text-white/75 text-sm md:text-base mb-8">
              Tell us where you&apos;re going and what matters — we&apos;ll reply with a clear plan,
              not a sales script.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#023E8A] font-bold px-10 py-4 rounded-full text-base shadow-xl hover:bg-[#CAF0F8] hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Start Your Journey
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
