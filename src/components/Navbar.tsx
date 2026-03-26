"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navSolid = !isHome || scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/packages", label: "Packages" },
    { href: "/why-choose-us", label: "Why Us" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        navSolid
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,119,182,0.12)] py-3 border-b border-[#0077B6]/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-[46px] w-[46px] shrink-0">
            <Image
              src="/assets/images/logo.jpeg"
              alt="Saravana Travels"
              fill
              sizes="46px"
              className="rounded-full object-cover ring-2 ring-white/40 group-hover:ring-[#00B4D8]/60 transition-all duration-300"
            />
          </div>
          <div className="hidden sm:block">
            <div
              className={`font-bold text-sm tracking-[0.2em] leading-tight transition-colors duration-300 ${
                navSolid ? "text-[#023E8A]" : "text-white"
              }`}
            >
              SARAVANA
            </div>
            <div
              className={`text-[10px] tracking-[0.35em] font-medium transition-colors duration-300 ${
                navSolid ? "text-[#0096C7]" : "text-[#90E0EF]"
              }`}
            >
              TRAVELS
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#00B4D8] after:transition-all after:duration-300 hover:after:w-full ${
                navSolid
                  ? "text-[#03045E] hover:text-[#0077B6]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 ${
              navSolid
                ? "bg-[#0077B6] text-white hover:bg-[#023E8A]"
                : "bg-white/15 backdrop-blur-sm text-white border border-white/40 hover:bg-white hover:text-[#0077B6]"
            }`}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors ${
            navSolid ? "text-[#023E8A]" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-current rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-[#0077B6]/10 shadow-xl`}
      >
        <div className="px-6 py-5 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 py-3 text-[#03045E] font-medium border-b border-gray-50 hover:text-[#0077B6] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8]"></span>
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-4 bg-[#0077B6] text-white text-center px-5 py-3 rounded-full font-semibold hover:bg-[#023E8A] transition-colors shadow-md"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
