"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { TravelPackage } from "@/data/travelPackages";
import type { PackagePageExtras, PackageTierId } from "@/types/packageDetail";
import { testimonialsForPackage } from "@/data/testimonials";
import { FadeUp } from "@/components/ui/Animate";
import { ImageAutoSlider } from "@/components/ui/image-auto-slider";

type Props = {
  pkg: TravelPackage;
  detail: PackagePageExtras;
};

const NAV_OFFSET = "top-[52px] md:top-[60px]";

function contactHref(pkg: TravelPackage, intent: "book" | "custom") {
  const q = new URLSearchParams();
  q.set("package", pkg.title);
  q.set("intent", intent);
  return `/contact?${q.toString()}`;
}

export default function PackageDetailPageContent({ pkg, detail }: Props) {
  const heroSlides = useMemo(
    () => [pkg.image, ...detail.heroExtraImages],
    [pkg.image, detail.heroExtraImages],
  );
  const [slide, setSlide] = useState(0);
  const [sticky, setSticky] = useState(false);
  const [tierId, setTierId] = useState<PackageTierId>("standard");

  const selectedTier = detail.tiers.find((t) => t.id === tierId) ?? detail.tiers[0];

  const reviews = useMemo(() => testimonialsForPackage(pkg.title, 3), [pkg.title]);

  const highlights = [...pkg.highlights, detail.fourthHighlight];

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 380);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [heroSlides.length]);

  const goSlide = useCallback(
    (i: number) => {
      setSlide(((i % heroSlides.length) + heroSlides.length) % heroSlides.length);
    },
    [heroSlides.length],
  );

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[72vh] md:min-h-[78vh] flex flex-col justify-end overflow-hidden pt-28 pb-10 md:pb-14">
        <div className="absolute inset-0">
          {heroSlides.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                i === slide ? "opacity-100 z-0" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                priority={i === 0}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#03045E]/90 via-[#023E8A]/65 to-[#0077B6]/45 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03045E]/75 via-transparent to-black/20 z-[1]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <FadeUp>
            {pkg.badge && (
              <span className="inline-block bg-[#00B4D8] text-[#03045E] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                {pkg.badge}
              </span>
            )}
            <p className="text-white/80 text-xs font-semibold tracking-[0.25em] uppercase mb-2">
              {pkg.destinationLabel} · {pkg.subtitle}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl drop-shadow-lg">
              {pkg.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-white/95">
              <span className="inline-flex items-center gap-2 text-sm md:text-base font-medium">
                <svg className="w-5 h-5 text-[#90E0EF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {pkg.duration}
              </span>
              <span className="hidden sm:inline h-4 w-px bg-white/30" aria-hidden />
              <div className="flex items-baseline gap-2">
                <span className="text-white/70 text-xs uppercase tracking-wide">From</span>
                <span className="text-3xl md:text-4xl font-bold text-[#90E0EF] tabular-nums">
                  {pkg.priceLabel}
                </span>
                <span className="text-white/60 text-sm">/ person</span>
              </div>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-2xl">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-2 text-white/95 text-sm md:text-[15px]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 border border-white/25">
                    <svg className="w-3.5 h-3.5 text-[#CAF0F8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
              <Link
                href={contactHref(pkg, "book")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0077B6] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#0077B6]/30 transition hover:bg-[#023E8A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Book Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={contactHref(pkg, "custom")}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/80 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Custom Plan
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goSlide(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === slide ? "w-8 bg-[#90E0EF]" : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Show slide ${i + 1}`}
                />
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Sticky summary */}
      <div
        className={`fixed left-0 right-0 z-40 border-b border-[#CAF0F8] bg-[#F0F8FF]/95 backdrop-blur-md shadow-sm transition-all duration-300 ${NAV_OFFSET} ${
          sticky ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        aria-hidden={!sticky}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-baseline gap-4 text-sm">
            <span className="font-semibold tabular-nums text-lg text-[#0077B6]">
              {selectedTier.priceLabel}
            </span>
            <span className="text-gray-500">{pkg.duration}</span>
            <span className="text-xs text-gray-400 uppercase tracking-wide hidden sm:inline">
              {selectedTier.name} tier
            </span>
          </div>
          <Link
            href={contactHref(pkg, "book")}
            className="shrink-0 rounded-xl bg-[#0077B6] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#023E8A] transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>

      <div className="bg-[#F0F8FF]">
        {/* Itinerary — vertical journey timeline */}
        <section className="py-14 md:py-20 border-b border-[#CAF0F8]" id="itinerary">
          <div className="max-w-7xl mx-auto px-6">
            <FadeUp>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
                <div>
                  <p className="text-[#0077B6] text-xs font-bold uppercase tracking-[0.2em] mb-2">
                    Your route
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#03045E]">Itinerary</h2>
                  <p className="text-gray-500 text-sm md:text-base mt-2 max-w-xl">
                    Follow the path day by day — we can stretch, combine, or skip stops on a custom plan.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#023E8A]/80 md:pb-1">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0077B6]/10 text-[#0077B6] font-bold tabular-nums">
                    {detail.itinerary.length}
                  </span>
                  <span className="font-medium">days mapped</span>
                </div>
              </div>
            </FadeUp>

            <div className="max-w-3xl">
              <div className="relative">
                {/* Spine */}
                <div
                  className="pointer-events-none absolute left-[19px] top-8 bottom-8 w-1 rounded-full bg-gradient-to-b from-[#0077B6] via-[#0096C7] to-[#90E0EF] opacity-80 sm:left-[23px]"
                  aria-hidden
                />

                <ol className="relative space-y-0">
                  {detail.itinerary.map((d, idx) => {
                    const isLast = idx === detail.itinerary.length - 1;
                    return (
                      <FadeUp key={d.day} delay={idx * 0.04}>
                        <li
                          className={`relative flex gap-4 sm:gap-6 ${isLast ? "pb-0" : "pb-10 sm:pb-12"}`}
                        >
                          {/* Milestone */}
                          <div className="relative z-10 flex shrink-0 flex-col items-center">
                            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0077B6] to-[#023E8A] text-sm sm:text-base font-bold text-white shadow-lg shadow-[#0077B6]/25 ring-4 ring-[#F0F8FF]">
                              {d.day}
                            </div>
                          </div>

                          {/* Content panel */}
                          <div className="min-w-0 flex-1 pt-0.5">
                            <div className="group relative overflow-hidden rounded-2xl border border-[#0077B6]/12 bg-white p-5 sm:p-6 shadow-[0_8px_30px_-12px_rgba(0,119,182,0.25)] transition-shadow hover:shadow-[0_12px_40px_-12px_rgba(0,119,182,0.35)]">
                              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#00B4D8]/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-70" aria-hidden />
                              <div className="relative">
                                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#0096C7] mb-1">
                                  Day {d.day}
                                </p>
                                <h3 className="text-lg sm:text-xl font-bold text-[#03045E] leading-snug">
                                  {d.title}
                                </h3>
                                <div className="mt-4 flex flex-wrap gap-2">
                                  {d.items.map((item) => (
                                    <span
                                      key={item}
                                      className="inline-flex items-center rounded-full border border-[#CAF0F8] bg-[#F0F8FF] px-3 py-1.5 text-xs sm:text-sm text-[#023E8A]/90 leading-snug"
                                    >
                                      {item}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </FadeUp>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Included / Excluded */}
        <section className="py-14 md:py-20 border-b border-[#CAF0F8]">
          <div className="max-w-7xl mx-auto px-6">
            <FadeUp>
              <h2 className="text-2xl md:text-3xl font-bold text-[#03045E] mb-10 text-center">
                What&apos;s included
              </h2>
            </FadeUp>
            <div className="grid md:grid-cols-2 gap-6">
              <FadeUp>
                <div className="rounded-2xl border border-[#90E0EF]/60 bg-white p-6 md:p-8 shadow-md h-full">
                  <h3 className="flex items-center gap-2 text-[#0077B6] font-bold text-sm uppercase tracking-widest mb-5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#CAF0F8] text-[#03045E]">
                      ✓
                    </span>
                    Included
                  </h3>
                  <ul className="space-y-3">
                    {detail.included.map((line) => (
                      <li key={line} className="flex gap-3 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-[#00B4D8] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
              <FadeUp delay={0.06}>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-md h-full">
                  <h3 className="flex items-center gap-2 text-gray-600 font-bold text-sm uppercase tracking-widest mb-5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 text-lg leading-none">
                      −
                    </span>
                    Not included
                  </h3>
                  <ul className="space-y-3">
                    {detail.excluded.map((line) => (
                      <li key={line} className="flex gap-3 text-sm text-gray-600">
                        <span className="text-gray-400 mt-0.5">·</span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Gallery — infinite auto-scroll strip */}
        <section className="py-14 md:py-20 border-b border-[#CAF0F8]" id="gallery">
          <div className="max-w-7xl mx-auto px-6">
            <FadeUp>
              <h2 className="text-2xl md:text-3xl font-bold text-[#03045E] mb-3">Gallery</h2>
              <p className="text-gray-500 text-sm md:text-base mb-8 max-w-2xl">
                Hover to pause the strip — photos from this itinerary and destination.
              </p>
            </FadeUp>
            <FadeUp delay={0.06}>
              <div className="rounded-2xl border border-[#CAF0F8] bg-gradient-to-b from-white to-[#F0F8FF] p-4 md:p-6 shadow-sm">
                <ImageAutoSlider
                  images={detail.gallery}
                  altPrefix={pkg.title}
                  durationSec={Math.min(48, Math.max(24, detail.gallery.length * 7))}
                />
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Pricing tiers */}
        <section className="py-14 md:py-20 border-b border-[#CAF0F8]" id="pricing">
          <div className="max-w-7xl mx-auto px-6">
            <FadeUp>
              <h2 className="text-2xl md:text-3xl font-bold text-[#03045E] mb-2">Pricing options</h2>
              <p className="text-gray-500 text-sm md:text-base mb-10 max-w-2xl">
                Pick a tier — we&apos;ll confirm hotels and inclusions on call or WhatsApp.
              </p>
            </FadeUp>
            <div className="grid md:grid-cols-3 gap-5">
              {detail.tiers.map((t, idx) => {
                const active = t.id === tierId;
                return (
                  <FadeUp key={t.id} delay={idx * 0.05}>
                    <button
                      type="button"
                      onClick={() => setTierId(t.id)}
                      className={`w-full text-left rounded-2xl border-2 p-6 md:p-7 transition-all h-full flex flex-col ${
                        active
                          ? "border-[#0077B6] bg-white shadow-xl shadow-[#0077B6]/15 ring-2 ring-[#0077B6]/20"
                          : "border-[#CAF0F8] bg-white/80 hover:border-[#90E0EF] hover:shadow-lg"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#0077B6]">
                          {t.name}
                        </span>
                        {t.id === "premium" && (
                          <span className="text-[10px] font-bold bg-[#CAF0F8] text-[#03045E] px-2 py-0.5 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-3xl font-bold text-[#03045E] tabular-nums mb-1">{t.priceLabel}</p>
                      <p className="text-xs text-gray-400 mb-4">per person · indicative</p>
                      <p className="text-sm font-medium text-gray-700 mb-4">{t.tagline}</p>
                      <ul className="space-y-2 flex-1">
                        {t.features.map((f) => (
                          <li key={f} className="flex gap-2 text-sm text-gray-600">
                            <svg className="w-4 h-4 text-[#00B4D8] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <span
                        className={`mt-6 block text-center text-sm font-semibold py-2.5 rounded-xl ${
                          active ? "bg-[#0077B6] text-white" : "bg-[#F0F8FF] text-[#0077B6]"
                        }`}
                      >
                        {active ? "Selected" : "Select"}
                      </span>
                    </button>
                  </FadeUp>
                );
              })}
            </div>
            <FadeUp delay={0.15}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href={contactHref(pkg, "book")}
                  className="inline-flex items-center justify-center rounded-xl bg-[#0077B6] px-6 py-3 text-sm font-semibold text-white hover:bg-[#023E8A] transition-colors"
                >
                  Book {selectedTier.name}
                </Link>
                <Link
                  href={contactHref(pkg, "custom")}
                  className="inline-flex items-center justify-center rounded-xl border-2 border-[#0077B6] px-6 py-3 text-sm font-semibold text-[#0077B6] hover:bg-[#0077B6]/5 transition-colors"
                >
                  Mix tiers / dates
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-14 md:py-20 border-b border-[#CAF0F8]">
          <div className="max-w-7xl mx-auto px-6">
            <FadeUp>
              <h2 className="text-2xl md:text-3xl font-bold text-[#03045E] mb-2">Traveler reviews</h2>
              <p className="text-gray-500 text-sm mb-10">Recent feedback from guests on similar trips.</p>
            </FadeUp>
            <div className="grid md:grid-cols-3 gap-5">
              {reviews.map((r, idx) => (
                <FadeUp key={r.id} delay={idx * 0.06}>
                  <blockquote className="rounded-2xl border border-[#CAF0F8] bg-white p-6 shadow-sm h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${r.avatarFrom} ${r.avatarTo} text-white text-sm font-bold`}
                      >
                        {r.initials}
                      </div>
                      <div>
                        <cite className="not-italic font-semibold text-[#03045E] text-sm block">{r.name}</cite>
                        <span className="text-xs text-gray-500">{r.location}</span>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mb-3" aria-label={`${r.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={i < r.rating ? "text-amber-400" : "text-gray-200"}>
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">&ldquo;{r.review}&rdquo;</p>
                    <p className="mt-4 text-xs font-medium text-[#0077B6]">{r.package}</p>
                  </blockquote>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Urgency */}
        <section className="py-14 md:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <FadeUp>
              <div className="rounded-2xl border border-[#0077B6]/25 bg-gradient-to-br from-[#023E8A] to-[#0077B6] p-8 md:p-10 text-white shadow-xl shadow-[#0077B6]/20">
                {detail.urgency.badge && (
                  <span className="inline-block bg-white/15 text-[#CAF0F8] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                    {detail.urgency.badge}
                  </span>
                )}
                <h2 className="text-xl md:text-2xl font-bold mb-3">{detail.urgency.title}</h2>
                <p className="text-white/85 text-sm md:text-base max-w-2xl leading-relaxed">
                  {detail.urgency.subtitle}
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-6">
            <FadeUp>
              <div className="rounded-3xl border border-[#CAF0F8] bg-white p-8 md:p-12 text-center shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-[#03045E] mb-3">
                  Ready for {pkg.title}?
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto mb-8 text-sm md:text-base">
                  Lock dates or tweak the itinerary — our team replies within one business day.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                  <Link
                    href={contactHref(pkg, "book")}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0077B6] px-8 py-3.5 text-base font-semibold text-white hover:bg-[#023E8A] transition-colors shadow-md"
                  >
                    Book this package
                  </Link>
                  <Link
                    href={contactHref(pkg, "custom")}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#0077B6] px-8 py-3.5 text-base font-semibold text-[#0077B6] hover:bg-[#F0F8FF] transition-colors"
                  >
                    Request a custom plan
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      </div>
    </>
  );
}
