import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us | Saravana Travels",
  description:
    "Plan your trip with Saravana Travels — call, email, or WhatsApp. Send a short request and hear back within 24 hours.",
};

type Props = {
  searchParams?: Promise<{ package?: string; intent?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const q = searchParams ? await searchParams : {};
  return (
    <>
      <Navbar />
      <main>
        <ContactPageContent initialPackage={q.package} initialIntent={q.intent} />
      </main>
      <Footer />
    </>
  );
}
