import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPackageSlugs, getPackageBySlug } from "@/data/travelPackages";
import { getPackagePageExtras } from "@/data/packageDetails";
import PackageDetailPageContent from "@/components/packages/PackageDetailPageContent";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPackageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return { title: "Package | Saravana Travels" };
  return {
    title: `${pkg.title} | Saravana Travels`,
    description: `${pkg.duration} · From ${pkg.priceLabel}. ${pkg.subtitle}. Book or request a custom plan with Saravana Travels.`,
  };
}

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  const detail = getPackagePageExtras(pkg.id);

  return (
    <>
      <Navbar />
      <main>
        <PackageDetailPageContent pkg={pkg} detail={detail} />
      </main>
      <Footer />
    </>
  );
}
