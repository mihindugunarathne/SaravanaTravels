import Image from "next/image";

const quickLinks = ["Home", "About Us", "Packages", "Why Choose Us", "Reviews", "Contact"];
const popularPackages = [
  "Kerala Backwaters",
  "Rajasthan Royal Tour",
  "Goa Beach Escape",
  "Himalayan Adventure",
  "Custom Packages",
];

export default function Footer() {
  return (
    <footer className="bg-[#03045E] text-white relative overflow-hidden">
      {/* Decorative wave top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60 Q360 0 720 30 Q1080 60 1440 0 V60 H0Z" fill="#023E8A" opacity="0.4" />
          <path d="M0 60 Q360 20 720 45 Q1080 70 1440 20 V60 H0Z" fill="#0077B6" opacity="0.2" />
        </svg>
      </div>

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0077B6]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#00B4D8]/8 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-5 group">
              <Image
                src="/assets/images/logo.jpeg"
                alt="Saravana Travels"
                width={46}
                height={46}
                className="rounded-full object-cover ring-2 ring-white/20 group-hover:ring-[#00B4D8]/50 transition-all"
              />
              <div>
                <div className="font-bold text-sm tracking-[0.2em] text-white">
                  SARAVANA
                </div>
                <div className="text-[#90E0EF] text-[10px] tracking-[0.35em]">
                  TRAVELS
                </div>
              </div>
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Your trusted travel partner for extraordinary journeys across
              India and beyond. Crafting memories since 2014.
            </p>
            <div className="flex gap-2.5">
              {[
                { l: "F", t: "Facebook" },
                { l: "I", t: "Instagram" },
                { l: "Y", t: "YouTube" },
                { l: "T", t: "Twitter" },
              ].map((s) => (
                <a
                  key={s.t}
                  href="#"
                  aria-label={s.t}
                  className="w-9 h-9 bg-white/8 rounded-full flex items-center justify-center text-xs font-bold text-[#90E0EF] hover:bg-[#0077B6] hover:text-white transition-all duration-300"
                >
                  {s.l}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-5 text-[#90E0EF]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/50 text-sm hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8]/50 group-hover:bg-[#00B4D8] transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-5 text-[#90E0EF]">
              Popular Packages
            </h4>
            <ul className="space-y-3">
              {popularPackages.map((pkg) => (
                <li key={pkg}>
                  <a
                    href="#packages"
                    className="text-white/50 text-sm hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8]/50 group-hover:bg-[#00B4D8] transition-colors" />
                    {pkg}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-5 text-[#90E0EF]">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              {[
                { icon: "📍", text: "123 Travel Street, Chennai, TN 600001" },
                { icon: "📞", text: "+91 98765 43210" },
                { icon: "✉️", text: "info@saravanaatravels.com" },
                { icon: "🕐", text: "Mon–Sat: 9:00 AM – 7:00 PM" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-2.5 text-white/50 text-sm">
                  <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
                  <span className="hover:text-white/80 transition-colors">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2024 Saravana Travels. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/30 text-sm hover:text-white/60 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
