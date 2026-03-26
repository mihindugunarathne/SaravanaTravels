"use client";

import Image from "next/image";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { MarqueeTestimonial } from "@/types/marquee-testimonial";

export type { MarqueeTestimonial };

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="mb-3 flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-3.5 w-3.5 ${i < rating ? "text-[#0096C7]" : "text-[#CAF0F8]"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ text, image, name, role, rating }: MarqueeTestimonial) {
  return (
    <div className="max-w-xs w-full rounded-3xl border border-[#CAF0F8] bg-white p-8 shadow-lg shadow-[#0077B6]/10 md:p-10">
      {rating != null ? <StarRow rating={rating} /> : null}
      <p className="text-sm leading-relaxed text-[#03045E]/90">{text}</p>
      <div className="mt-5 flex items-center gap-3">
        <Image
          src={image}
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
          sizes="40px"
        />
        <div className="flex min-w-0 flex-col">
          <span className="text-sm font-medium leading-5 tracking-tight text-[#03045E]">{name}</span>
          <span className="text-sm leading-5 tracking-tight text-gray-500">{role}</span>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsColumn(props: {
  className?: string;
  testimonials: MarqueeTestimonial[];
  duration?: number;
}) {
  const reduce = useReducedMotion();
  const duration = props.duration ?? 10;

  const list = props.testimonials.map((t, i) => <TestimonialCard key={`a-${i}`} {...t} />);
  const listDuplicate = props.testimonials.map((t, i) => <TestimonialCard key={`b-${i}`} {...t} />);

  if (reduce) {
    return (
      <div className={props.className}>
        <div className="flex flex-col gap-6 pb-6 bg-white">{list}</div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${props.className ?? ""}`}>
      <motion.div
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-white"
      >
        {list}
        {listDuplicate}
      </motion.div>
    </div>
  );
}
