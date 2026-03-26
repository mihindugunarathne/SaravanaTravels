"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TRAVEL_PACKAGES,
  DESTINATION_OPTIONS,
  type TravelPackage,
} from "@/data/travelPackages";
import { PAGE_HERO_BACKGROUNDS } from "@/data/pageHeroBackgrounds";
import { FadeUp } from "@/components/ui/Animate";

const selectClass =
  "w-full min-w-0 rounded-xl border border-[#CAF0F8] bg-white px-3 py-2.5 text-sm text-[#03045E] focus:border-[#0077B6] focus:outline-none focus:ring-2 focus:ring-[#0077B6]/20";

function matchesDuration(nights: number, filter: string) {
  if (filter === "all") return true;
  if (filter === "short") return nights <= 5;
  if (filter === "medium") return nights >= 6 && nights <= 9;
  if (filter === "long") return nights >= 10;
  return true;
}

function matchesBudget(price: number, filter: string) {
  if (filter === "all") return true;
  if (filter === "under25") return price < 25000;
  if (filter === "25to35") return price >= 25000 && price <= 35000;
  if (filter === "over35") return price > 35000;
  return true;
}

function sortPackages(packages: TravelPackage[], sort: string) {
  const out = [...packages];
  if (sort === "price-asc") out.sort((a, b) => a.priceValue - b.priceValue);
  else if (sort === "price-desc") out.sort((a, b) => b.priceValue - a.priceValue);
  else {
    out.sort((a, b) => {
      if (a.popular !== b.popular) return a.popular ? -1 : 1;
      return a.priceValue - b.priceValue;
    });
  }
  return out;
}

export default function PackagesPageContent() {
  const [destination, setDestination] = useState("all");
  const [duration, setDuration] = useState("all");
  const [budget, setBudget] = useState("all");
  const [sort, setSort] = useState("popular");

  const filtered = useMemo(() => {
    const list = TRAVEL_PACKAGES.filter((p) => {
      if (destination !== "all" && p.destinationKey !== destination) return false;
      if (!matchesDuration(p.nights, duration)) return false;
      if (!matchesBudget(p.priceValue, budget)) return false;
      return true;
    });
    return sortPackages(list, sort);
  }, [destination, duration, budget, sort]);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[68vh] flex items-end overflow-hidden pt-28 pb-14 md:pb-16">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_BACKGROUNDS.packages}
            alt="Saravana Travels packages — hero background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#03045E]/48 via-[#023E8A]/28 to-[#0077B6]/18" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03045E]/32 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8]" />
                Packages
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
                Find Your Perfect{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90E0EF] via-white to-[#90E0EF]">
                  Travel Package
                </span>
              </h1>
              <p className="text-white/85 text-base md:text-lg max-w-xl leading-relaxed">
                Compare clear prices, pick your dates, and book with a team that answers—fast.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[52px] md:top-[60px] z-40 border-b border-[#CAF0F8] bg-[#F0F8FF]/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            <div>
              <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#0077B6] mb-1.5">
                Destination
              </label>
              <select
                className={selectClass}
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                aria-label="Filter by destination"
              >
                {DESTINATION_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#0077B6] mb-1.5">
                Duration
              </label>
              <select
                className={selectClass}
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                aria-label="Filter by duration"
              >
                <option value="all">Any length</option>
                <option value="short">Up to 5 nights</option>
                <option value="medium">6–9 nights</option>
                <option value="long">10+ nights</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#0077B6] mb-1.5">
                Budget
              </label>
              <select
                className={selectClass}
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                aria-label="Filter by budget"
              >
                <option value="all">Any budget</option>
                <option value="under25">Under ₹25,000</option>
                <option value="25to35">₹25,000 – ₹35,000</option>
                <option value="over35">Above ₹35,000</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#0077B6] mb-1.5">
                Sort by
              </label>
              <select
                className={selectClass}
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                aria-label="Sort packages"
              >
                <option value="popular">Popular</option>
                <option value="price-asc">Price: Low to high</option>
                <option value="price-desc">Price: High to low</option>
              </select>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Showing <strong className="text-[#0077B6]">{filtered.length}</strong>{" "}
            {filtered.length === 1 ? "package" : "packages"}
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-16 bg-[#F0F8FF] min-h-[40vh]">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-16 rounded-2xl border border-dashed border-[#CAF0F8] bg-white/60">
              <p className="text-[#03045E] font-semibold mb-2">No packages match those filters</p>
              <p className="text-gray-500 text-sm mb-6">Try widening your destination or budget.</p>
              <button
                type="button"
                onClick={() => {
                  setDestination("all");
                  setDuration("all");
                  setBudget("all");
                }}
                className="text-[#0077B6] font-semibold text-sm hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filtered.map((pkg, i) => (
                <PackageCard key={pkg.id} pkg={pkg} priority={i < 3} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Custom plan CTA */}
      <section className="py-16 md:py-20 bg-white border-t border-[#CAF0F8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="text-2xl md:text-3xl font-bold text-[#03045E] mb-3">
              Not sure which package fits you?
            </h2>
            <p className="text-gray-500 text-[15px] mb-8 max-w-lg mx-auto">
              Tell us your dates and style—we&apos;ll shortlist options and quote you clearly. No obligation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0077B6] text-white font-bold px-8 py-4 rounded-full hover:bg-[#023E8A] transition-colors shadow-lg shadow-[#0077B6]/25"
            >
              Get My Custom Plan
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

function PackageCard({
  pkg,
  priority = false,
}: {
  pkg: TravelPackage;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/packages/${pkg.slug}`}
      className="group block h-full rounded-2xl overflow-hidden bg-white border border-[#CAF0F8]/80 shadow-md hover:shadow-2xl hover:shadow-[#0077B6]/15 hover:-translate-y-1 hover:border-[#90E0EF] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0077B6]"
      aria-label={`View ${pkg.title}, from ${pkg.priceLabel}`}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
        {pkg.badge && (
          <span className="absolute top-3 right-3 bg-[#0077B6] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide shadow-md">
            {pkg.badge}
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white/75 text-[10px] uppercase tracking-widest mb-0.5">
            {pkg.subtitle}
          </p>
          <h2 className="text-white text-lg font-bold leading-tight drop-shadow-md">{pkg.title}</h2>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Price row — emphasized */}
        <div className="flex items-end justify-between gap-3 mb-4 pb-4 border-b border-[#CAF0F8]">
          <div className="flex items-center gap-1.5 text-gray-500 text-xs">
            <svg className="w-4 h-4 text-[#0077B6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{pkg.duration}</span>
          </div>
          <div className="text-right">
            <span className="block text-[10px] text-gray-400 uppercase tracking-wide">From</span>
            <span className="text-2xl font-bold text-[#0077B6] leading-none tabular-nums">
              {pkg.priceLabel}
            </span>
            <span className="block text-[10px] text-gray-400 mt-0.5">per person</span>
          </div>
        </div>

        <ul className="space-y-2 mb-5 flex-1">
          {pkg.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
              <svg className="w-4 h-4 text-[#00B4D8] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {h}
            </li>
          ))}
        </ul>

        <span className="flex items-center justify-center gap-2 w-full text-center bg-[#F0F8FF] text-[#0077B6] group-hover:bg-[#0077B6] group-hover:text-white font-semibold py-3 rounded-xl text-sm transition-colors duration-300 border border-[#CAF0F8] group-hover:border-[#0077B6]">
          View Details
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
