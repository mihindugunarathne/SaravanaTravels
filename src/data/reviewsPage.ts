import type { MarqueeTestimonial } from "@/types/marquee-testimonial";

export type TravelerReview = {
  id: string;
  name: string;
  country: string;
  tripType: string;
  rating: number;
  text: string;
  /** Portrait for scrolling “More reviews” cards */
  image: string;
};

/** One highlighted story — shown large above the grid */
export const FEATURED_TRAVELER_REVIEW: TravelerReview = {
  id: "featured-1",
  name: "Kavitha & Suresh",
  country: "India",
  tripType: "Family · Rajasthan (2 kids, parents)",
  rating: 5,
  image:
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=200&h=200&fit=crop&auto=format&q=80",
  text: `We almost booked with a big online portal because the price looked lower — then we realised half the monuments weren't included. Saravana sent a day-by-day sheet with what was paid vs what we'd pay on the spot. The hotel in Jodhpur was simpler than the brochure photo suggested, but they'd told us that upfront ("older property, great location") and it was exactly what we needed with two tired kids.

When our train was delayed by four hours, someone from their team was on WhatsApp before we even asked, rebooking the driver. Not fancy talk — just got it done. We'd use them again for North India without thinking twice.`,
};

export const TRAVELER_REVIEWS: TravelerReview[] = [
  {
    id: "r1",
    name: "James O.",
    country: "United Kingdom",
    tripType: "Custom · Kerala + Tamil Nadu",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&auto=format&q=80",
    text: `Backpacker budget, not backpacker chaos. Wanted houseboat one night only — they didn't push the package. Backwaters were great; the homestay in Thekkady was a bit noisy (market road) but honestly we should've read the map they sent. Fair play.`,
  },
  {
    id: "r2",
    name: "Fatima Al-Rashid",
    country: "United Arab Emirates",
    tripType: "Honeymoon · Goa & South Goa quiet stretch",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&auto=format&q=80",
    text: `Husband wanted parties, I wanted sleep. They split the stay — two nights near the action, three further south. Quote had every transfer in rupees. No "resort fee" surprise at checkout.`,
  },
  {
    id: "r3",
    name: "Venkat Iyer",
    country: "India",
    tripType: "Solo · Himalayan (Leh route)",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format&q=80",
    text: `Altitude hit me harder than expected. Guide was patient, they moved one trek day without charging extra for the reschedule — small thing but mattered. Only minus: one hotel Wi‑Fi was basically useless; I used my own data.`,
  },
  {
    id: "r4",
    name: "Priya N.",
    country: "Singapore",
    tripType: "Family · Golden Triangle",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&auto=format&q=80",
    text: `Travelling with my mum who uses a walking stick. They flagged steps at Amber Fort before we paid — we swapped for a slower day in Jaipur instead. Mum said it was the first trip she didn't feel like a burden.`,
  },
  {
    id: "r5",
    name: "Rohit Malhotra",
    country: "India",
    tripType: "Friends group · 6 people · Goa",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format&q=80",
    text: `We changed headcount twice (one guy dropped, another joined). They redid the van size and split costs clearly on email. Beach villa was not "luxury" like Instagram — more like a solid clean place — which is what we paid for.`,
  },
  {
    id: "r6",
    name: "Elena M.",
    country: "Germany",
    tripType: "First India trip · curated 12 days",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&auto=format&q=80",
    text: `I was scared of scams and stomach issues. They gave a boring but useful doc — when to drink sealed water, which ATMs worked for us. Got mild Delhi belly anyway (my fault, street pani puri). Support line answered at 9pm local.`,
  },
  {
    id: "r7",
    name: "Anwar Hossain",
    country: "Bangladesh",
    tripType: "Business + leisure · Chennai & Pondicherry",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&auto=format&q=80",
    text: `Work meetings ran long; they shifted one sightseeing block to the next morning. Driver waited without complaining — I tipped him directly. Invoice matched what we agreed in January except one govt monument fee that went up (they'd warned fees can change).`,
  },
  {
    id: "r8",
    name: "Lakshmi Devi",
    country: "India",
    tripType: "Pilgrimage + leisure · Tamil Nadu temples",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&auto=format&q=80",
    text: `We needed early morning darshan times and vegetarian meals only. Every hotel got it right except one lunch stop — driver turned around to a different place same day. No drama.`,
  },
  {
    id: "r9",
    name: "Chris P.",
    country: "Australia",
    tripType: "Couple · Andaman",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&auto=format&q=80",
    text: `Ferry was rough — not their fault — but they had a backup hotel near the port in case we missed the connection. We didn't need it in the end. Snorkelling day was the highlight; gear was included in the price list from day one.`,
  },
];

export function travelerReviewsToMarquee(reviews: TravelerReview[]): MarqueeTestimonial[] {
  return reviews.map((r) => ({
    text: r.text,
    image: r.image,
    name: r.name,
    role: `${r.country} · ${r.tripType}`,
    rating: r.rating,
  }));
}
