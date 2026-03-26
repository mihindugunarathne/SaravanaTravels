"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  CONTACT_EMAIL,
  CONTACT_OFFICE_ADDRESS,
  CONTACT_PHONE_DISPLAY,
  CONTACT_WORKING_HOURS,
  contactMailtoHref,
  contactTelHref,
  contactWhatsAppHref,
} from "@/data/contactInfo";
import { PAGE_HERO_BACKGROUNDS } from "@/data/pageHeroBackgrounds";
import { FadeUp, FadeLeft, FadeRight } from "@/components/ui/Animate";

const inputClass =
  "w-full border border-[#CAF0F8] bg-[#F0F8FF]/60 rounded-xl px-4 py-3 text-sm text-[#03045E] focus:outline-none focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/15 focus:bg-white transition-all placeholder:text-gray-400";

function initialMessageForPackage(pkg: string, intent?: string) {
  return intent === "custom"
    ? `I'd like a customized plan based on: ${pkg}. `
    : `I'd like to book: ${pkg}. Please share available dates and next steps. `;
}

type ContactPageContentProps = {
  initialPackage?: string;
  initialIntent?: string;
};

export default function ContactPageContent({
  initialPackage,
  initialIntent,
}: ContactPageContentProps) {
  const [formData, setFormData] = useState(() => ({
    name: "",
    email: "",
    destination: initialPackage ?? "",
    message: initialPackage ? initialMessageForPackage(initialPackage, initialIntent) : "",
  }));
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[68vh] flex items-end overflow-hidden pt-28 pb-12 md:pb-16">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_BACKGROUNDS.contact}
            alt="Saravana Travels — contact us hero background"
            fill
            priority
            className="object-cover object-[center_40%]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#03045E]/52 via-[#023E8A]/32 to-[#0077B6]/22" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03045E]/36 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
              We&apos;re here to help
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4 max-w-3xl drop-shadow-lg">
              Let&apos;s Plan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90E0EF] via-white to-[#90E0EF]">
                Your Trip
              </span>
            </h1>
            <p className="text-white/88 text-base md:text-lg max-w-xl leading-snug">
              Call, WhatsApp, or send a short note — whichever is easiest. No long forms required.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Contact options */}
      <section className="py-12 md:py-16 bg-[#F0F8FF] border-b border-[#CAF0F8]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <p className="text-center text-[#0077B6] text-xs font-semibold tracking-[0.25em] uppercase mb-8">
              Reach us your way
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {/* Phone */}
            <FadeUp delay={0.05}>
              <a
                href={contactTelHref}
                className="group flex flex-col h-full rounded-2xl border border-[#CAF0F8] bg-white p-6 shadow-md shadow-[#0077B6]/5 hover:shadow-lg hover:border-[#0077B6]/35 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F0F8FF] border border-[#CAF0F8] flex items-center justify-center text-[#0077B6] mb-4 group-hover:bg-[#0077B6] group-hover:text-white group-hover:border-[#0077B6] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#0096C7] mb-1">
                  Phone
                </span>
                <span className="text-lg font-bold text-[#03045E]">{CONTACT_PHONE_DISPLAY}</span>
                <span className="text-xs text-[#0077B6] font-medium mt-3">Tap to call →</span>
              </a>
            </FadeUp>

            {/* Email */}
            <FadeUp delay={0.1}>
              <a
                href={contactMailtoHref}
                className="group flex flex-col h-full rounded-2xl border border-[#CAF0F8] bg-white p-6 shadow-md shadow-[#0077B6]/5 hover:shadow-lg hover:border-[#0077B6]/35 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F0F8FF] border border-[#CAF0F8] flex items-center justify-center text-[#0077B6] mb-4 group-hover:bg-[#0077B6] group-hover:text-white group-hover:border-[#0077B6] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#0096C7] mb-1">
                  Email
                </span>
                <span className="text-base font-bold text-[#03045E] break-all">{CONTACT_EMAIL}</span>
                <span className="text-xs text-[#0077B6] font-medium mt-3">Open in your mail app →</span>
              </a>
            </FadeUp>

            {/* WhatsApp — highlighted */}
            <FadeUp delay={0.15}>
              <a
                href={contactWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col h-full rounded-2xl border-2 border-[#25D366]/70 bg-gradient-to-br from-white via-[#F0FFF4] to-[#E8F8EC] p-6 shadow-lg shadow-[#25D366]/15 ring-2 ring-[#25D366]/20 hover:ring-[#25D366]/45 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:scale-[1.02] md:-my-1"
              >
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider bg-[#25D366] text-white px-2.5 py-1 rounded-full">
                  Fastest reply
                </span>
                <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center text-white mb-4 shadow-md shadow-[#25D366]/30 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#128C7E] mb-1">
                  WhatsApp
                </span>
                <span className="text-lg font-bold text-[#03045E]">{CONTACT_PHONE_DISPLAY}</span>
                <p className="text-sm text-gray-600 mt-2 flex-1">
                  Same number — we usually answer texts quicker during the day.
                </p>
                <span className="text-sm font-bold text-[#128C7E] mt-4 inline-flex items-center gap-1">
                  Chat on WhatsApp
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-72 h-72 bg-[#CAF0F8]/25 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <FadeLeft className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-2xl border border-[#CAF0F8] bg-[#F0F8FF]/50 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#0077B6]/15 flex items-center justify-center text-[#0077B6]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#0077B6]">
                      Response time
                    </p>
                    <p className="text-xl font-bold text-[#03045E]">We respond within 24 hours</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Often much sooner on WhatsApp. For urgent changes while you&apos;re travelling, use
                  the same channels you used to book.
                </p>
                <div className="pt-6 border-t border-[#CAF0F8]">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#0096C7] mb-2">
                    Office
                  </p>
                  <p className="text-sm text-[#03045E] font-medium">{CONTACT_OFFICE_ADDRESS}</p>
                  <p className="text-xs text-gray-500 mt-3">{CONTACT_WORKING_HOURS}</p>
                </div>
                <Link
                  href={contactWhatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-3.5 text-sm shadow-lg shadow-[#25D366]/25 transition-all hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Prefer WhatsApp? Open chat
                </Link>
              </div>
            </FadeLeft>

            <FadeRight delay={0.08} className="lg:col-span-7 order-1 lg:order-2">
              <div className="rounded-3xl p-8 md:p-10 shadow-2xl shadow-[#0077B6]/12 border-2 border-[#0077B6]/20 bg-white">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#03045E] mb-2">
                    Send a request
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Four fields — add dates or budget in the message if you like.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-[#F0F8FF] rounded-full flex items-center justify-center mx-auto mb-5 border border-[#CAF0F8]">
                      <svg className="w-10 h-10 text-[#0077B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#03045E] mb-2">Request received</h3>
                    <p className="text-gray-500 text-sm mb-6">
                      We&apos;ll get back to you within 24 hours. For a quicker answer, message us on
                      WhatsApp.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", destination: "", message: "" });
                      }}
                      className="text-[#0077B6] font-semibold text-sm hover:text-[#023E8A] transition-colors"
                    >
                      Send another request →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#03045E] mb-1.5 uppercase tracking-wide">
                        Name <span className="text-[#0077B6]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#03045E] mb-1.5 uppercase tracking-wide">
                        Email <span className="text-[#0077B6]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#03045E] mb-1.5 uppercase tracking-wide">
                        Destination <span className="text-gray-400 font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="e.g. Kerala, Rajasthan, or “not sure yet”"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#03045E] mb-1.5 uppercase tracking-wide">
                        Message <span className="text-[#0077B6]">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Rough dates, group size, or what you want to see — even a few words helps."
                        className={`${inputClass} resize-y min-h-[120px]`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#0077B6] to-[#0096C7] hover:from-[#023E8A] hover:to-[#0077B6] text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#0077B6]/30 hover:shadow-xl hover:shadow-[#0077B6]/40 hover:-translate-y-0.5 text-base"
                    >
                      Send Request
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </button>

                    <p className="text-center text-sm text-gray-500 pt-1">
                      <span className="font-semibold text-[#0077B6]">We respond within 24 hours.</span>{" "}
                      WhatsApp is fastest for back-and-forth questions.
                    </p>
                  </form>
                )}
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-6">
              <span className="text-[#0077B6] text-xs font-semibold tracking-[0.25em] uppercase">
                Visit us
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-[#03045E] mt-2">Chennai office</h2>
              <p className="text-gray-500 text-sm mt-1 max-w-md mx-auto">{CONTACT_OFFICE_ADDRESS}</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#CAF0F8] shadow-lg shadow-[#0077B6]/8 aspect-[21/9] min-h-[220px] md:min-h-[280px] bg-[#F0F8FF]">
              <iframe
                title="Saravana Travels office — map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=80.245%2C13.045%2C80.285%2C13.075&amp;layer=mapnik&amp;marker=13.06%2C80.265"
                className="w-full h-full min-h-[220px] md:min-h-[280px] border-0 grayscale-[20%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-center text-xs text-gray-400 mt-3">
              Map is approximate — call before visiting so we can expect you.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
