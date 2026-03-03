import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Properties", to: "/properties" },
  { label: "Trade Services", to: "/trade-services" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional pathname-driven effect
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isTransparentPage = location.pathname === "/";

  const navBg =
    scrolled || !isTransparentPage ? "bg-navy shadow-lg" : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/assets/generated/logo-rharshz-transparent.dim_300x80.png"
              alt="Rharshz Infra and Trade"
              className="h-8 lg:h-10 w-auto"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <span className="font-display font-bold text-xl tracking-widest text-gold hidden sm:block">
              RHARSHZ
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-sm font-medium tracking-wide transition-colors duration-200 hover:text-gold ${
                  location.pathname === link.to
                    ? "text-gold border-b border-gold pb-0.5"
                    : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center px-5 py-2.5 bg-gold text-navy font-body font-semibold text-sm tracking-wide rounded transition-all duration-200 hover:bg-gold-dark hover:shadow-gold"
            >
              Book Consultation
            </Link>
            <button
              type="button"
              className="lg:hidden text-white p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-sm font-medium py-3 px-4 rounded transition-colors hover:bg-white/5 hover:text-gold ${
                  location.pathname === link.to
                    ? "text-gold bg-white/5"
                    : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 bg-gold text-navy font-body font-semibold text-sm tracking-wide rounded"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
