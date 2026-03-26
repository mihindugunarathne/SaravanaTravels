import Image from "next/image";
import Link from "next/link";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/Animate";

const packages = [
  {
    id: 1,
    slug: "kerala-backwaters",
    title: "Kerala Backwaters",
    subtitle: "God's Own Country",
    duration: "7 Days / 6 Nights",
    price: "₹25,999",
    from: "Starting from",
    features: ["Houseboat Stay", "Ayurvedic Spa", "Wildlife Safari", "Spice Plantation Tour"],
    badge: "Most Popular",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=320&fit=crop&auto=format&q=80",
  },
  {
    id: 2,
    slug: "rajasthan-royal-tour",
    title: "Rajasthan Royal Tour",
    subtitle: "Land of Kings",
    duration: "10 Days / 9 Nights",
    price: "₹35,999",
    from: "Starting from",
    features: ["Heritage Palace Hotels", "Desert Camel Safari", "Cultural Folk Shows", "Fort & Monument Visits"],
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=320&fit=crop&auto=format&q=80",
  },
  {
    id: 3,
    slug: "goa-beach-escape",
    title: "Goa Beach Escape",
    subtitle: "Sun, Sand & Sea",
    duration: "5 Days / 4 Nights",
    price: "₹18,999",
    from: "Starting from",
    features: ["Beach Resort Stay", "Water Sports", "Heritage Walk", "Sunset Cruise"],
    badge: "Budget Friendly",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=320&fit=crop&auto=format&q=80",
  },
  {
    id: 4,
    slug: "himalayan-adventure",
    title: "Himalayan Adventure",
    subtitle: "Roof of the World",
    duration: "8 Days / 7 Nights",
    price: "₹42,999",
    from: "Starting from",
    features: ["Scenic Trek Routes", "Monastery Visits", "River Rafting", "Snow Activities"],
    badge: "Adventure",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=320&fit=crop&auto=format&q=80",
  },
];

export default function PackagesSection() {
  return (
    <section id="packages" className="py-28 bg-[#F0F8FF]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <FadeUp>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#0077B6]" />
              <span className="text-[#0077B6] font-semibold text-xs tracking-[0.25em] uppercase">
                Our Packages
              </span>
              <div className="h-px w-8 bg-[#0077B6]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#03045E] mb-5">
              Handpicked{" "}
              <span className="text-[#0077B6]">Travel Experiences</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-[15px]">
              Choose from our carefully curated packages — each designed to
              deliver the most authentic and memorable travel experience at
              unbeatable value.
            </p>
          </div>
        </FadeUp>

        {/* Staggered Cards */}
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {packages.map((pkg, i) => (
            <StaggerItem key={pkg.id}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-[#0077B6]/15 transition-all duration-300 hover:-translate-y-2 group flex flex-col border border-[#CAF0F8]/60 h-full">

                {/* Image Header */}
                <div className="relative h-48 flex-shrink-0 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    priority={i < 4}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                  <span className="absolute top-3 right-3 bg-[#0077B6]/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide shadow-md">
                    {pkg.badge}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white/70 text-[10px] uppercase tracking-widest mb-0.5">
                      {pkg.subtitle}
                    </p>
                    <h3 className="text-white text-base font-bold leading-tight drop-shadow">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                      <svg className="w-3.5 h-3.5 text-[#0077B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {pkg.duration}
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-gray-400">{pkg.from}</div>
                      <div className="text-[#0077B6] font-bold text-base leading-tight">{pkg.price}</div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                        <svg className="w-3.5 h-3.5 text-[#00B4D8] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/packages/${pkg.slug}`}
                    className="block text-center bg-[#0077B6] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-[#023E8A] transition-colors duration-300 shadow-sm"
                  >
                    View package
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        {/* See More */}
        <FadeUp delay={0.2}>
          <div className="text-center">
            <Link
              href="/packages"
              className="group inline-flex items-center gap-2 border-2 border-[#0077B6] text-[#0077B6] font-semibold px-9 py-3.5 rounded-full hover:bg-[#0077B6] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#0077B6]/20"
            >
              See All Packages
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
