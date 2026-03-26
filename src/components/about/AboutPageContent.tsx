"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import StatsPanel from "@/components/StatsPanel";
import TeamShowcase from "@/components/ui/team-showcase";
import { FadeUp, StaggerGrid, StaggerItem, MountFadeUp } from "@/components/ui/Animate";

const benefits = [
  {
    title: "Custom Itineraries",
    desc: "Trips built around your dates, pace, and interests—not a one-size template.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: "Local Experts",
    desc: "On-the-ground partners who know the best routes, stays, and hidden gems.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    desc: "Clear quotes upfront—no surprise fees buried in the fine print.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    desc: "Real people on call when plans shift—before and during your trip.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

/** Hero background — calm mountain & lake scene, matches ocean-blue brand */
const ABOUT_HERO_IMAGE =
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&h=960&fit=crop&auto=format&q=85";

export default function AboutPageContent() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <Image
            src={ABOUT_HERO_IMAGE}
            alt="Serene mountain lake at sunrise — travel with Saravana Travels"
            fill
            priority
            className="object-cover object-center scale-105"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#03045E]/55 via-[#023E8A]/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/15" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12 py-16">
          <div className="max-w-2xl">
            <MountFadeUp delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/25 text-white text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full mb-7">
                <span className="w-2 h-2 rounded-full bg-[#00B4D8] animate-pulse" />
                About Saravana Travels
              </div>
            </MountFadeUp>

            <MountFadeUp delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.12] mb-6 tracking-tight">
                <span className="block text-white drop-shadow-lg">
                  We Design Travel Experiences
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#90E0EF] via-[#00B4D8] to-[#48CAE4]">
                  You&apos;ll Never Forget
                </span>
              </h1>
            </MountFadeUp>

            <MountFadeUp delay={0.35}>
              <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed font-light max-w-xl">
                We remove the noise: honest advice, vetted partners, and plans you can actually follow.
              </p>
            </MountFadeUp>

            <MountFadeUp delay={0.45}>
              <motion.span
                className="inline-block"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex bg-[#0077B6] hover:bg-[#0096C7] text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-300 shadow-lg shadow-[#0077B6]/30"
                >
                  Get My Travel Plan
                </Link>
              </motion.span>
            </MountFadeUp>
          </div>
        </div>
      </section>

      {/* 2. Why we exist — story arc */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[420px] h-[420px] bg-[#CAF0F8]/40 rounded-full blur-3xl translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-72 h-72 bg-[#90E0EF]/15 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeUp>
            <div className="text-center mb-12 md:mb-14">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px w-10 bg-[#0077B6]" />
                <span className="text-[#0077B6] font-semibold text-xs tracking-[0.25em] uppercase">
                  Why we exist
                </span>
                <div className="h-px w-10 bg-[#0077B6]" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#03045E] max-w-3xl mx-auto leading-[1.15]">
                Planning a trip shouldn&apos;t feel like a{" "}
                <span className="text-[#0077B6]">second job</span>
              </h2>
              <p className="mt-5 text-gray-500 text-[15px] md:text-base max-w-xl mx-auto">
                We built Saravana Travels for one reason: to make honest, expert-backed travel the default—not the exception.
              </p>
            </div>
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 mb-12">
            <StaggerItem>
              <div className="relative h-full rounded-2xl border border-[#CAF0F8] bg-[#F0F8FF]/80 backdrop-blur-sm p-8 pt-10 shadow-sm hover:shadow-md hover:border-[#90E0EF] transition-all duration-300">
                <span className="absolute top-4 right-4 text-[#0077B6]/25 font-bold text-4xl leading-none select-none">
                  01
                </span>
                <div className="w-11 h-11 rounded-xl bg-white border border-[#CAF0F8] flex items-center justify-center text-[#0077B6] mb-5 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#03045E] mb-2">The friction</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Great trips get buried under endless tabs, conflicting advice, and weekends lost to research.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="relative h-full rounded-2xl border border-[#CAF0F8] bg-[#F0F8FF]/80 backdrop-blur-sm p-8 pt-10 shadow-sm hover:shadow-md hover:border-[#90E0EF] transition-all duration-300">
                <span className="absolute top-4 right-4 text-[#0077B6]/25 font-bold text-4xl leading-none select-none">
                  02
                </span>
                <div className="w-11 h-11 rounded-xl bg-white border border-[#CAF0F8] flex items-center justify-center text-[#0077B6] mb-5 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#03045E] mb-2">The gap</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Generic packages, hidden fees, and tips from people who&apos;ve never been there leave you guessing.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="relative h-full rounded-2xl border-2 border-[#0077B6]/30 bg-white p-8 pt-10 shadow-md hover:shadow-lg hover:border-[#0077B6]/50 transition-all duration-300 ring-1 ring-[#0077B6]/5">
                <span className="absolute top-4 right-4 text-[#0077B6]/20 font-bold text-4xl leading-none select-none">
                  03
                </span>
                <div className="w-11 h-11 rounded-xl bg-[#0077B6] flex items-center justify-center text-white mb-5 shadow-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#03045E] mb-2">Our answer</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Local experts, upfront pricing, and itineraries you can read once and trust—start to finish.
                </p>
              </div>
            </StaggerItem>
          </StaggerGrid>

          <FadeUp delay={0.12}>
            <div className="rounded-2xl bg-gradient-to-r from-[#023E8A] via-[#0077B6] to-[#0096C7] px-8 py-8 md:px-10 md:py-9 text-center md:text-left shadow-xl shadow-[#0077B6]/15">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <p className="text-white text-lg md:text-xl font-semibold leading-snug max-w-2xl">
                  You pack the bags—we handle the rest.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center gap-2 bg-white text-[#0077B6] font-bold px-6 py-3 rounded-full hover:bg-[#90E0EF] transition-colors text-sm md:text-base"
                >
                  Talk to us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 3. Key benefits */}
      <section className="py-24 bg-[#F0F8FF]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#0077B6]" />
                <span className="text-[#0077B6] font-semibold text-xs tracking-[0.25em] uppercase">
                  What you get
                </span>
                <div className="h-px w-8 bg-[#0077B6]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#03045E]">
                Built for <span className="text-[#0077B6]">trust</span> and clarity
              </h2>
            </div>
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <StaggerItem key={b.title}>
                <div className="bg-white rounded-2xl p-7 border border-[#CAF0F8] hover:shadow-xl hover:shadow-[#0077B6]/10 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                      i % 2 === 0
                        ? "bg-[#F0F8FF] text-[#0077B6]"
                        : "bg-[#0077B6] text-white"
                    }`}
                  >
                    {b.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#03045E] mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* 4. Stats — same panel as homepage */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#0077B6]" />
                <span className="text-[#0077B6] font-semibold text-xs tracking-[0.25em] uppercase">
                  By the numbers
                </span>
                <div className="h-px w-8 bg-[#0077B6]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#03045E]">
                Proof you can <span className="text-[#0077B6]">rely on</span>
              </h2>
            </div>
          </FadeUp>
          <div className="max-w-lg mx-auto">
            <FadeUp delay={0.1}>
              <StatsPanel />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 5. Team */}
      <section className="py-24 bg-[#F0F8FF]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#0077B6]" />
                <span className="text-[#0077B6] font-semibold text-xs tracking-[0.25em] uppercase">
                  Our team
                </span>
                <div className="h-px w-8 bg-[#0077B6]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#03045E]">
                People behind <span className="text-[#0077B6]">your trip</span>
              </h2>
            </div>
          </FadeUp>

          <FadeUp delay={0.06}>
            <div className="flex justify-center">
              <TeamShowcase />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <div className="bg-gradient-to-r from-[#023E8A] via-[#0077B6] to-[#0096C7] rounded-3xl px-8 py-14 md:px-14 md:py-16 text-white shadow-xl shadow-[#0077B6]/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start planning today
              </h2>
              <p className="text-white/85 text-[15px] md:text-base leading-relaxed max-w-xl mx-auto mb-8">
                Tell us your dates, budget, and travel style—we&apos;ll reply with a clear next step. No pressure, no jargon.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#0077B6] font-bold px-8 py-4 rounded-full hover:bg-[#90E0EF] transition-colors duration-300 shadow-lg"
              >
                Get My Travel Plan
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
