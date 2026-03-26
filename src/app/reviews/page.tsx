import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReviewsPageContent from "@/components/reviews/ReviewsPageContent";

export const metadata: Metadata = {
  title: "Reviews | Saravana Travels",
  description:
    "Read what travelers say about Saravana Travels — real trip types, honest detail, and ratings from families, couples, and solo guests across India and abroad.",
};

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ReviewsPageContent />
      </main>
      <Footer />
    </>
  );
}
