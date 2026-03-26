export type PackageTierId = "standard" | "premium" | "luxury";

export type PackageTier = {
  id: PackageTierId;
  name: string;
  priceLabel: string;
  priceValue: number;
  tagline: string;
  features: string[];
};

export type ItineraryDay = {
  day: number;
  title: string;
  items: string[];
};

export type PackagePageExtras = {
  /** Extra hero slides (main package image is always first slide). */
  heroExtraImages: string[];
  fourthHighlight: string;
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  gallery: string[];
  tiers: PackageTier[];
  urgency: {
    title: string;
    subtitle: string;
    badge?: string;
  };
};
