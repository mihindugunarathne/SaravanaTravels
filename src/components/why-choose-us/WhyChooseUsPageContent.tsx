"use client";

import Image from "next/image";
import Link from "next/link";
import StatsPanel from "@/components/StatsPanel";
import TestimonialGrid from "@/components/TestimonialGrid";
import { PAGE_HERO_BACKGROUNDS } from "@/data/pageHeroBackgrounds";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/Animate";

const advantages = [
  {
    title: "Itemized quotes",
    line: "Hotels, transfers, and fees listed separately—no lump “package” black box.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Built around you",
    line: "Dates, pace, and stops adjusted before you pay—not a fixed brochure route.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
  {
    title: "Same team, trip week",
    line: "Planners you talk to during booking are reachable when plans change on the road.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    title: "Vetted operators",
    line: "Drivers, guides, and stays we’ve used repeatedly—not random marketplace bids.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Edits before departure",
    line: "Swap a hotel or shift a day while we’re still locking reservations.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "India-first routing",
    line: "Connections and seasonality chosen by planners who’ve done the route—not a call center script.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const comparisonRows: {
  label: string;
  saravana: string;
  other: string;
}[] = [
  {
    label: "What you see in the quote",
    saravana: "Major costs broken out; taxes and inclusions spelled out.",
    other: "Often one headline price; surcharges appear later.",
  },
  {
    label: "Itinerary shape",
    saravana: "Adjusted to your group, pace, and must-sees before confirmation.",
    other: "Fixed day-by-day templates with little room to change.",
  },
  {
    label: "Who answers mid-trip",
    saravana: "Same operations team; escalation path is clear.",
    other: "Sales line only, or outsourced desk with long hold times.",
  },
  {
    label: "Customization depth",
    saravana: "Hotels, meals, and activities tuned—not just hotel “star tier.”",
    other: "Catalog SKUs; swaps treated as exceptions.",
  },
  {
    label: "Partner vetting",
    saravana: "Repeat partners we’ve inspected or used on past groups.",
    other: "Lowest bidder or opaque aggregators.",
  },
];

function CheckCell({ good }: { good: boolean }) {
  return (
    <span
      className={`inline-flex items-center justify-center w-8 h-8 rounded-full shrink-0 ${
        good ? "bg-[#0077B6]/15 text-[#0077B6]" : "bg-gray-100 text-gray-400"
      }`}
      aria-hidden
    >
      {good ? (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
    </span>
  );
}

export default function WhyChooseUsPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[68vh] flex items-end overflow-hidden pt-28 pb-14 md:pb-16">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_BACKGROUNDS.whyChooseUs}
            alt="Saravana Travels — why choose us hero background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#03045E]/48 via-[#023E8A]/28 to-[#0077B6]/18" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03045E]/32 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <FadeUp>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#90E0EF]" />
              <span className="text-[#90E0EF] font-semibold text-xs tracking-[0.25em] uppercase">
                Saravana Travels
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl leading-tight">
              Why Travelers{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90E0EF] to-[#48CAE4]">
                Choose Us
              </span>
            </h1>
            <p className="text-white/85 text-base md:text-lg max-w-xl leading-snug">
              Clear numbers upfront, itineraries that fit your trip—not a brochure—and support that
              stays with you.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Core advantages */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#0077B6]" />
                <span className="text-[#0077B6] font-semibold text-xs tracking-[0.25em] uppercase">
                  Core advantages
                </span>
                <div className="h-px w-8 bg-[#0077B6]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#03045E]">
                What you actually get
              </h2>
            </div>
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item, i) => (
              <StaggerItem key={item.title}>
                <div className="group h-full bg-[#F0F8FF] border border-[#CAF0F8] rounded-2xl p-6 hover:shadow-lg hover:shadow-[#0077B6]/10 hover:-translate-y-0.5 transition-all duration-300">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      i % 2 === 0
                        ? "bg-[#0077B6] text-white"
                        : "bg-white text-[#0077B6] border border-[#CAF0F8]"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#03045E] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.line}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 md:py-24 bg-[#F0F8FF] border-y border-[#CAF0F8]/80">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#0077B6]" />
                <span className="text-[#0077B6] font-semibold text-xs tracking-[0.25em] uppercase">
                  Side by side
                </span>
                <div className="h-px w-8 bg-[#0077B6]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#03045E] mb-2">
                Saravana Travels vs typical agencies
              </h2>
              <p className="text-gray-500 text-sm max-w-lg mx-auto">
                Transparency, customization, and support—where the difference shows up in practice.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="overflow-x-auto rounded-2xl border border-[#CAF0F8] bg-white shadow-md shadow-[#0077B6]/5">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white">
                    <th scope="col" className="px-5 py-4 font-semibold w-[28%] rounded-tl-2xl">
                      Area
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold w-[36%]">
                      Saravana Travels
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 font-semibold w-[36%] rounded-tr-2xl text-white/90"
                    >
                      Other agencies
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={row.label}
                      className={`border-t border-[#CAF0F8] ${idx % 2 === 1 ? "bg-[#F0F8FF]/50" : ""}`}
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 font-semibold text-[#03045E] align-top"
                      >
                        {row.label}
                      </th>
                      <td className="px-5 py-4 text-gray-700 align-top">
                        <span className="flex gap-3">
                          <CheckCell good />
                          <span>{row.saravana}</span>
                        </span>
                      </td>
                      <td className="px-5 py-4 text-gray-500 align-top">
                        <span className="flex gap-3">
                          <CheckCell good={false} />
                          <span>{row.other}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Proof: stats + testimonials */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#0077B6]" />
                <span className="text-[#0077B6] font-semibold text-xs tracking-[0.25em] uppercase">
                  Proof
                </span>
                <div className="h-px w-8 bg-[#0077B6]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#03045E] mb-3">
                Numbers and real travelers
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                Same milestones and reviews you see on our homepage—no separate story here.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <FadeUp delay={0.05}>
                <StatsPanel showBadge />
              </FadeUp>
            </div>
            <div className="lg:col-span-7">
              <TestimonialGrid showTrustBanner />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-[#03045E] via-[#023E8A] to-[#0077B6] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B4D8] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#90E0EF] rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to plan with clarity?
            </h2>
            <p className="text-white/75 text-sm md:text-base mb-8 max-w-md mx-auto">
              Tell us dates, budget, and must-sees—we&apos;ll reply with a structured quote you can
              question line by line.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#023E8A] font-bold px-10 py-4 rounded-full text-base shadow-xl hover:bg-[#CAF0F8] hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Plan My Trip Now
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
