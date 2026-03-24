"use client";

import { useState } from "react";
import { FadeUp, FadeLeft, FadeRight } from "@/components/ui/Animate";

const contactDetails = [
  {
    label: "Our Office",
    value: "123 Travel Street, Chennai, Tamil Nadu — 600001",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 98765 43210",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "info@saravanaatravels.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Working Hours",
    value: "Monday – Saturday: 9:00 AM – 7:00 PM",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelers: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full border border-[#CAF0F8] bg-[#F0F8FF]/50 rounded-xl px-4 py-3 text-sm text-[#03045E] focus:outline-none focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/15 focus:bg-white transition-all placeholder-gray-400";

  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#CAF0F8]/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#90E0EF]/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <FadeUp>
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#0077B6]" />
            <span className="text-[#0077B6] font-semibold text-xs tracking-[0.25em] uppercase">
              Contact Us
            </span>
            <div className="h-px w-8 bg-[#0077B6]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#03045E] mb-5">
            Let&apos;s Plan Your{" "}
            <span className="text-[#0077B6]">Dream Trip</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-[15px]">
            Ready to explore the world? Get in touch and our travel experts will
            craft the perfect itinerary for you.
          </p>
        </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left — Info (2 cols) */}
          <FadeLeft className="lg:col-span-2">
            <div className="space-y-5 mb-10">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F0F8FF] border border-[#CAF0F8] rounded-xl flex items-center justify-center text-[#0077B6] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] text-[#0096C7] uppercase tracking-[0.2em] font-semibold mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-[#03045E] font-medium text-sm">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3 font-semibold">
                Follow Us
              </p>
              <div className="flex gap-2.5">
                {[
                  { label: "F", title: "Facebook" },
                  { label: "I", title: "Instagram" },
                  { label: "Y", title: "YouTube" },
                  { label: "T", title: "Twitter" },
                ].map((s) => (
                  <a
                    key={s.title}
                    href="#"
                    aria-label={s.title}
                    className="w-10 h-10 bg-[#F0F8FF] border border-[#CAF0F8] rounded-full flex items-center justify-center text-xs font-bold text-[#0077B6] hover:bg-[#0077B6] hover:text-white hover:border-[#0077B6] transition-all duration-300"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </FadeLeft>

          {/* Right — Form (3 cols) */}
          <FadeRight delay={0.1} className="lg:col-span-3">
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-[#0077B6]/8 border border-[#CAF0F8]">
            {submitted ? (
              <div className="text-center py-14">
                <div className="w-20 h-20 bg-[#F0F8FF] rounded-full flex items-center justify-center mx-auto mb-5 border border-[#CAF0F8]">
                  <svg className="w-10 h-10 text-[#0077B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#03045E] mb-3">
                  Message Sent!
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Thank you for reaching out. Our travel experts will get back
                  to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", destination: "", travelers: "", message: "" });
                  }}
                  className="mt-7 text-[#0077B6] font-semibold text-sm hover:text-[#023E8A] transition-colors"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-[#03045E]">
                    Send Us a Message
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    We&apos;ll respond within 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#03045E] mb-1.5 uppercase tracking-wide">
                      Full Name <span className="text-[#0077B6]">*</span>
                    </label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#03045E] mb-1.5 uppercase tracking-wide">
                      Email <span className="text-[#0077B6]">*</span>
                    </label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#03045E] mb-1.5 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#03045E] mb-1.5 uppercase tracking-wide">
                      Destination
                    </label>
                    <select name="destination" value={formData.destination} onChange={handleChange} className={inputClass}>
                      <option value="">Select destination</option>
                      <option value="kerala">Kerala Backwaters</option>
                      <option value="rajasthan">Rajasthan Royal Tour</option>
                      <option value="goa">Goa Beach Escape</option>
                      <option value="himalaya">Himalayan Adventure</option>
                      <option value="custom">Custom Package</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#03045E] mb-1.5 uppercase tracking-wide">
                    Number of Travelers
                  </label>
                  <select name="travelers" value={formData.travelers} onChange={handleChange} className={inputClass}>
                    <option value="">Select number</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People (Couple)</option>
                    <option value="3-5">3–5 People (Family)</option>
                    <option value="6-10">6–10 People (Group)</option>
                    <option value="10+">10+ People (Large Group)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#03045E] mb-1.5 uppercase tracking-wide">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your travel plans, preferred dates, special requirements..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0077B6] to-[#0096C7] hover:from-[#023E8A] hover:to-[#0077B6] text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#0077B6]/25 hover:shadow-[#0077B6]/40 hover:-translate-y-0.5"
                >
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            )}
          </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
