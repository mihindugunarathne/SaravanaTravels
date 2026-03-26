export type HomeTestimonial = {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  package: string;
  initials: string;
  avatarFrom: string;
  avatarTo: string;
};

export const HOME_TESTIMONIALS: HomeTestimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    review:
      "Saravana Travels made our Kerala honeymoon trip absolutely unforgettable! Every detail was perfectly organized — from the houseboat to the Ayurvedic spa. The team was incredibly attentive. We couldn't have asked for a better experience!",
    package: "Kerala Backwaters",
    initials: "PS",
    avatarFrom: "from-[#0077B6]",
    avatarTo: "to-[#00B4D8]",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Bangalore, Karnataka",
    rating: 5,
    review:
      "The Rajasthan Royal Tour was a dream come true! Palace hotels, camel safari at sunset, vibrant cultural shows — breathtaking. Saravana Travels handled everything seamlessly. Professional, punctual, and truly passionate about travel.",
    package: "Rajasthan Royal Tour",
    initials: "RM",
    avatarFrom: "from-[#023E8A]",
    avatarTo: "to-[#0096C7]",
  },
  {
    id: 3,
    name: "Anita Kumar",
    location: "Coimbatore, Tamil Nadu",
    rating: 5,
    review:
      "Excellent service and outstanding value! The Himalayan Adventure was a journey of a lifetime. The guides were knowledgeable and safety was their top priority. Already planning my next trip with Saravana Travels — highly recommended!",
    package: "Himalayan Adventure",
    initials: "AK",
    avatarFrom: "from-[#0096C7]",
    avatarTo: "to-[#90E0EF]",
  },
  {
    id: 4,
    name: "Vikram Desai",
    location: "Mumbai, Maharashtra",
    rating: 5,
    review:
      "Goa with Saravana Travels was stress-free from day one — great resort, smooth transfers, and honest advice on water sports. We’ll book the Andaman hopper next!",
    package: "Goa Beach Escape",
    initials: "VD",
    avatarFrom: "from-[#0077B6]",
    avatarTo: "to-[#90E0EF]",
  },
  {
    id: 5,
    name: "Lakshmi Iyer",
    location: "Trichy, Tamil Nadu",
    rating: 5,
    review:
      "The Tamil Nadu heritage circuit was perfectly paced — temples, Chettinad food, and Pondicherry without rushing. Guides were respectful and punctual.",
    package: "Tamil Nadu Heritage",
    initials: "LI",
    avatarFrom: "from-[#023E8A]",
    avatarTo: "to-[#00B4D8]",
  },
  {
    id: 6,
    name: "Jason & Mei",
    location: "Singapore",
    rating: 5,
    review:
      "Darjeeling toy train, clear Sikkim permits, and stunning views — Saravana Travels coordinated everything across two states flawlessly. Highly professional.",
    package: "Darjeeling & Sikkim",
    initials: "JM",
    avatarFrom: "from-[#0096C7]",
    avatarTo: "to-[#CAF0F8]",
  },
  {
    id: 7,
    name: "Neha Kapoor",
    location: "Hyderabad, Telangana",
    rating: 5,
    review:
      "Andaman ferries and Havelock timing can be tricky — they nailed it. Crystal-clear pricing and quick replies on WhatsApp. Already recommended to friends.",
    package: "Andaman Island Hopper",
    initials: "NK",
    avatarFrom: "from-[#0077B6]",
    avatarTo: "to-[#0096C7]",
  },
  {
    id: 8,
    name: "Arjun Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    review:
      "Golden Triangle Express delivered exactly what we needed — Taj at sunrise, smooth drives, and no hidden costs. Saravana Travels is now our go-to for India trips.",
    package: "Golden Triangle Express",
    initials: "AP",
    avatarFrom: "from-[#03045E]",
    avatarTo: "to-[#0077B6]",
  },
];

/** Prefer reviews that mention this package; otherwise show trusted social proof. */
export function testimonialsForPackage(packageTitle: string, limit = 3): HomeTestimonial[] {
  const exact = HOME_TESTIMONIALS.filter((t) => t.package === packageTitle);
  if (exact.length >= 2) return exact.slice(0, limit);
  if (exact.length === 1) {
    const rest = HOME_TESTIMONIALS.filter((t) => t.package !== packageTitle);
    return [exact[0], ...rest].slice(0, limit);
  }
  return HOME_TESTIMONIALS.slice(0, limit);
}

export const TRUST_BANNER_ITEMS = [
  { num: "10,000+", label: "Happy Clients" },
  { num: "4.9 / 5", label: "Average Rating" },
  { num: "500+", label: "5-Star Reviews" },
  { num: "98%", label: "Satisfaction Rate" },
] as const;
