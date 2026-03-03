import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { PropertyCard } from "../components/PropertyCard";
import { ServiceCard } from "../components/ServiceCard";
import { useGetAllProperties, useGetAllServices } from "../hooks/useQueries";

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "150+", label: "Projects Delivered" },
  { value: "12", label: "Countries" },
  { value: "₹8000 Cr+", label: "Portfolio Value" },
];

export function HomePage() {
  const { data: properties = [] } = useGetAllProperties();
  const { data: services = [] } = useGetAllServices();

  const featuredProperties = properties.slice(0, 3);
  const featuredServices = services.slice(0, 3);

  // Scroll reveal
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        }
      },
      { threshold: 0.15 },
    );
    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  });

  return (
    <main>
      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-construction.dim_1920x1080.jpg')",
          }}
        />
        {/* Dark navy overlay with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/75 to-navy/90" />
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 3px)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="font-body text-gold/90 text-xs tracking-[0.3em] uppercase">
                Since 1999
              </span>
              <div className="w-12 h-px bg-gold" />
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              Building Tomorrow's
              <br />
              <span className="text-gold">Landmarks</span>
            </h1>

            <p className="font-body text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto tracking-wide">
              Infrastructure.&nbsp; Trade.&nbsp; Excellence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/properties"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-body font-semibold text-sm tracking-wide rounded transition-all duration-200 hover:bg-gold-dark hover:shadow-gold"
              >
                Explore Our Work
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-body font-medium text-sm tracking-wide rounded transition-all duration-200 hover:border-gold hover:text-gold"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gold/60" />
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-navy-mid border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display font-bold text-3xl sm:text-4xl text-gold mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-xs sm:text-sm text-white/50 tracking-wider uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Properties ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-gold" />
              <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
                Luxury Residences
              </span>
              <div className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4">
              Featured Properties
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Curated residences of distinction — where elite architecture meets
              premium living across India's most coveted addresses.
            </p>
          </div>

          {featuredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.map((property, i) => (
                <div
                  key={String(property.id)}
                  className={`reveal reveal-delay-${i + 1}`}
                >
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-96 bg-silver-light rounded animate-pulse"
                />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 px-8 py-4 border border-navy text-navy font-body font-semibold text-sm tracking-wide rounded transition-all duration-200 hover:bg-navy hover:text-white"
            >
              View All Properties
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services Teaser ── */}
      <section className="bg-silver-light py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-gold" />
              <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
                What We Do
              </span>
              <div className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4">
              Our Services
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              From large-scale infrastructure to precision trade operations — we
              deliver end-to-end solutions at scale.
            </p>
          </div>

          {featuredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredServices.map((service, i) => (
                <div
                  key={String(service.id)}
                  className={`reveal reveal-delay-${i + 1}`}
                >
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-48 bg-white rounded animate-pulse" />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/trade-services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-body font-semibold text-sm tracking-wide rounded transition-all duration-200 hover:bg-navy-light"
            >
              All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative bg-navy py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/infrastructure-bridge.dim_800x600.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-px bg-gold" />
              <span className="font-body text-gold/90 text-xs tracking-[0.3em] uppercase">
                Get Started
              </span>
              <div className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Ready to Build?
            </h2>
            <p className="font-body text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Partner with India's most trusted infrastructure and real estate
              group. Let's discuss your vision.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gold text-navy font-body font-bold text-base tracking-wide rounded transition-all duration-200 hover:bg-gold-dark hover:shadow-gold"
            >
              Book a Consultation
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
