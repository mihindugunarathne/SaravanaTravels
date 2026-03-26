export type TravelPackage = {
  id: number;
  /** URL segment: /packages/[slug] */
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  nights: number;
  priceLabel: string;
  priceValue: number;
  highlights: [string, string, string];
  badge?: string;
  image: string;
  /** Filter: region / destination bucket */
  destinationKey: string;
  destinationLabel: string;
  popular: boolean;
};

export const TRAVEL_PACKAGES: TravelPackage[] = [
  {
    id: 1,
    slug: "kerala-backwaters",
    title: "Kerala Backwaters",
    subtitle: "God's Own Country",
    duration: "7 Days / 6 Nights",
    nights: 6,
    priceLabel: "₹25,999",
    priceValue: 25999,
    highlights: ["Houseboat stay", "Ayurvedic spa", "Wildlife safari"],
    badge: "Most Popular",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=480&fit=crop&auto=format&q=80",
    destinationKey: "kerala",
    destinationLabel: "Kerala",
    popular: true,
  },
  {
    id: 2,
    slug: "rajasthan-royal-tour",
    title: "Rajasthan Royal Tour",
    subtitle: "Land of Kings",
    duration: "10 Days / 9 Nights",
    nights: 9,
    priceLabel: "₹35,999",
    priceValue: 35999,
    highlights: ["Heritage palace hotels", "Desert camel safari", "Folk performances"],
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=480&fit=crop&auto=format&q=80",
    destinationKey: "rajasthan",
    destinationLabel: "Rajasthan",
    popular: true,
  },
  {
    id: 3,
    slug: "goa-beach-escape",
    title: "Goa Beach Escape",
    subtitle: "Sun, Sand & Sea",
    duration: "5 Days / 4 Nights",
    nights: 4,
    priceLabel: "₹18,999",
    priceValue: 18999,
    highlights: ["Beach resort stay", "Water sports", "Sunset cruise"],
    badge: "Budget Pick",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=480&fit=crop&auto=format&q=80",
    destinationKey: "goa",
    destinationLabel: "Goa",
    popular: false,
  },
  {
    id: 4,
    slug: "himalayan-adventure",
    title: "Himalayan Adventure",
    subtitle: "Roof of the World",
    duration: "8 Days / 7 Nights",
    nights: 7,
    priceLabel: "₹42,999",
    priceValue: 42999,
    highlights: ["Scenic treks", "Monastery visits", "River rafting"],
    badge: "Adventure",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=480&fit=crop&auto=format&q=80",
    destinationKey: "himalayas",
    destinationLabel: "Himalayas",
    popular: true,
  },
  {
    id: 5,
    slug: "tamil-nadu-heritage",
    title: "Tamil Nadu Heritage",
    subtitle: "Temples & spice trails",
    duration: "6 Days / 5 Nights",
    nights: 5,
    priceLabel: "₹22,499",
    priceValue: 22499,
    highlights: ["Meenakshi Temple", "Chettinad cuisine", "Pondicherry lanes"],
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&h=480&fit=crop&auto=format&q=80",
    destinationKey: "tamil-nadu",
    destinationLabel: "Tamil Nadu",
    popular: false,
  },
  {
    id: 6,
    slug: "darjeeling-sikkim",
    title: "Darjeeling & Sikkim",
    subtitle: "Tea gardens & peaks",
    duration: "7 Days / 6 Nights",
    nights: 6,
    priceLabel: "₹28,999",
    priceValue: 28999,
    highlights: ["Toy train ride", "Tiger Hill sunrise", "Gangtok monasteries"],
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=480&fit=crop&auto=format&q=80",
    destinationKey: "northeast",
    destinationLabel: "North East",
    popular: false,
  },
  {
    id: 7,
    slug: "andaman-island-hopper",
    title: "Andaman Island Hopper",
    subtitle: "Turquoise waters",
    duration: "6 Days / 5 Nights",
    nights: 5,
    priceLabel: "₹32,499",
    priceValue: 32499,
    highlights: ["Havelock beaches", "Cellular Jail", "Snorkelling"],
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=480&fit=crop&auto=format&q=80",
    destinationKey: "andaman",
    destinationLabel: "Andaman",
    popular: true,
  },
  {
    id: 8,
    slug: "golden-triangle-express",
    title: "Golden Triangle Express",
    subtitle: "Delhi · Agra · Jaipur",
    duration: "5 Days / 4 Nights",
    nights: 4,
    priceLabel: "₹19,499",
    priceValue: 19499,
    highlights: ["Taj Mahal at sunrise", "Amber Fort", "Old Delhi food walk"],
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=480&fit=crop&auto=format&q=80",
    destinationKey: "golden-triangle",
    destinationLabel: "Golden Triangle",
    popular: false,
  },
];

const uniqueDestinations = TRAVEL_PACKAGES.reduce<
  { value: string; label: string }[]
>((acc, p) => {
  if (!acc.some((x) => x.value === p.destinationKey)) {
    acc.push({ value: p.destinationKey, label: p.destinationLabel });
  }
  return acc;
}, []).sort((a, b) => a.label.localeCompare(b.label));

export const DESTINATION_OPTIONS = [
  { value: "all", label: "All destinations" },
  ...uniqueDestinations,
];

export function getPackageBySlug(slug: string): TravelPackage | undefined {
  return TRAVEL_PACKAGES.find((p) => p.slug === slug);
}

export function getAllPackageSlugs(): string[] {
  return TRAVEL_PACKAGES.map((p) => p.slug);
}
