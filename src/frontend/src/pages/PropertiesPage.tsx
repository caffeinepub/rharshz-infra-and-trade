import { motion } from "motion/react";
import { useEffect } from "react";
import { PropertyCard } from "../components/PropertyCard";
import { useGetAllProperties } from "../hooks/useQueries";

export function PropertiesPage() {
  const { data: properties = [], isLoading } = useGetAllProperties();

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        }
      },
      { threshold: 0.1 },
    );
    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  });

  return (
    <main>
      {/* ── Page Hero ── */}
      <section className="relative pt-32 pb-16 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/assets/generated/property-penthouse.dim_800x600.jpg')",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="font-body text-gold/90 text-xs tracking-[0.3em] uppercase">
                Premium Portfolio
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
              Luxury Residences
            </h1>
            <p className="font-body text-white/60 max-w-xl text-sm sm:text-base">
              Handcrafted homes for discerning buyers — each property a
              statement of refined taste, prime location, and exceptional
              architecture.
            </p>
          </motion.div>
        </div>
        {/* Gold accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* ── Properties Grid ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-96 bg-silver-light rounded-lg animate-pulse"
                />
              ))}
            </div>
          ) : properties.length === 0 ? (
            <div className="text-center py-24">
              <div className="font-display text-xl text-muted-foreground mb-2">
                No properties listed yet
              </div>
              <p className="font-body text-sm text-muted-foreground">
                Check back soon for our latest luxury listings.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property, i) => (
                <motion.div
                  key={String(property.id)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-silver-light py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy mb-4">
              Looking for Your Dream Home?
            </h2>
            <p className="font-body text-muted-foreground text-sm mb-8">
              Our consultants specialize in luxury property acquisition and can
              guide you through every step of the process.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-body font-semibold text-sm tracking-wide rounded transition-all duration-200 hover:bg-gold-dark hover:shadow-gold"
            >
              Schedule a Viewing
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
