import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyChooseUsPageContent from "@/components/why-choose-us/WhyChooseUsPageContent";

export const metadata: Metadata = {
  title: "Why Choose Us | Saravana Travels",
  description:
    "See how Saravana Travels differs: transparent quotes, tailored itineraries, and support through your trip—compared side by side with typical agencies.",
};

export default function WhyChooseUsPage() {
  return (
    <>
      <Navbar />
      <main>
        <WhyChooseUsPageContent />
      </main>
      <Footer />
    </>
  );
}
