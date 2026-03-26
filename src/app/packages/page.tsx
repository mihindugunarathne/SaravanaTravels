import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackagesPageContent from "@/components/packages/PackagesPageContent";

export const metadata: Metadata = {
  title: "Travel Packages | Saravana Travels",
  description:
    "Browse curated India travel packages with clear pricing. Filter by destination, duration, and budget. Get a custom plan if you need something tailored.",
};

export default function PackagesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PackagesPageContent />
      </main>
      <Footer />
    </>
  );
}
