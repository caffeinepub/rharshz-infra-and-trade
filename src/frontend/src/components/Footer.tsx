import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Properties", to: "/properties" },
  { label: "Trade Services", to: "/trade-services" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "rharshz.com";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-navy text-white">
      <div className="section-divider border-white/10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/logo-rharshz-transparent.dim_300x80.png"
                alt="Rharshz"
                className="h-8 w-auto"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <span className="font-display font-bold text-xl tracking-widest text-gold">
                RHARSHZ
              </span>
            </div>
            <p className="font-body text-white/60 text-sm leading-relaxed max-w-xs">
              Building Tomorrow's Landmarks — Infrastructure excellence, luxury
              real estate, and global trade services since 1999.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold/60 text-xs tracking-widest font-body uppercase">
                Est. 1999
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-white/60 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-6 tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="font-body text-sm text-white/60 leading-relaxed">
                  14th Floor, Infinity Tower,
                  <br />
                  BKC, Mumbai 400051, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <span className="font-body text-sm text-white/60">
                  +91 22 6600 8800
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <span className="font-body text-sm text-white/60">
                  info@rharshz.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40 text-center sm:text-left">
            © {year} Rharshz Infra and Trade. All Rights Reserved.
          </p>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-white/30 hover:text-white/50 transition-colors"
          >
            Built with ♥ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
