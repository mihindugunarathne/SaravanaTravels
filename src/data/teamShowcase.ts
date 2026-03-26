export type TeamMemberSocial = {
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  behance?: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  social?: TeamMemberSocial;
};

/** Saravana Travels — portraits via Unsplash (allowed in next.config) */
export const SARAVANA_TEAM: TeamMember[] = [
  {
    id: "1",
    name: "Arun Kumar",
    role: "Founder & Lead Planner",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=480&fit=crop&auto=format&q=80",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: "2",
    name: "Meera Nair",
    role: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=480&fit=crop&auto=format&q=80",
    social: { linkedin: "#", instagram: "#" },
  },
  {
    id: "3",
    name: "Vikram Singh",
    role: "Destination Expert",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=480&fit=crop&auto=format&q=80",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    id: "4",
    name: "Deepa Krishnan",
    role: "Customer Success",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=480&fit=crop&auto=format&q=80",
    social: { linkedin: "#", instagram: "#" },
  },
  {
    id: "5",
    name: "Kavitha Subramanian",
    role: "Partnerships & Product",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=480&fit=crop&auto=format&q=80",
    social: { linkedin: "#" },
  },
  {
    id: "6",
    name: "Sanjay Menon",
    role: "Finance & Compliance",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=480&fit=crop&auto=format&q=80",
    social: { twitter: "#", linkedin: "#" },
  },
];
