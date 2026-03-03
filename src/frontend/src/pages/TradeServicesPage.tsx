import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import type { Service } from "../backend.d";
import { ServiceCard } from "../components/ServiceCard";
import { useGetAllServices } from "../hooks/useQueries";

export function TradeServicesPage() {
  const { data: services = [], isLoading } = useGetAllServices();

  // Group services by category
  const grouped = services.reduce<Record<string, Service[]>>((acc, service) => {
    const cat = service.category || "General";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(service);
    return acc;
  }, {});

  const categories = Object.keys(grouped).sort();

  return (
    <main>
      {/* ── Page Hero ── */}
      <section className="relative pt-32 pb-16 bg-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/infrastructure-bridge.dim_800x600.jpg')",
          }}
        />
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
                What We Offer
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
              Infrastructure &amp; Trade Services
            </h1>
            <p className="font-body text-white/60 max-w-2xl text-sm sm:text-base">
              From civil engineering and large-scale construction to
              international commodity trade — our capabilities span the full
              lifecycle of infrastructure development.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* ── Services by Category ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-36 bg-silver-light rounded-lg animate-pulse"
                />
              ))}
            </div>
          ) : services.length === 0 ? (
            <div className="text-center py-24">
              <div className="font-display text-xl text-muted-foreground">
                Services coming soon
              </div>
            </div>
          ) : (
            <div className="space-y-14">
              {categories.map((category) => (
                <div key={category}>
                  {/* Category Heading */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-1 h-8 bg-gold rounded-full" />
                    <h2 className="font-display font-semibold text-2xl text-navy">
                      {category}
                    </h2>
                    <div className="flex-1 h-px bg-silver-light" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {grouped[category].map((service, i) => (
                      <motion.div
                        key={String(service.id)}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                      >
                        <ServiceCard service={service} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Get a Quote CTA ── */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Have a Project in Mind?
            </h2>
            <p className="font-body text-white/60 text-sm mb-8 leading-relaxed">
              Whether it's a highway, a bridge, a residential tower, or an
              international trade requirement — our team is ready to evaluate
              and execute.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gold text-navy font-body font-bold text-sm tracking-wide rounded transition-all duration-200 hover:bg-gold-dark hover:shadow-gold"
            >
              Get a Quote
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
