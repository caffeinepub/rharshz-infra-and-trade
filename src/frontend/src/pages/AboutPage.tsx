import { Award, Leaf, ShieldCheck, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

const values = [
  {
    icon: <Award size={28} />,
    title: "Excellence",
    description:
      "We pursue the highest standards in every project — from foundation to finish, quality is non-negotiable.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Integrity",
    description:
      "Transparent dealings, honest timelines, and accountability at every milestone define our working culture.",
  },
  {
    icon: <Zap size={28} />,
    title: "Innovation",
    description:
      "Embracing advanced construction technologies and data-driven project management to stay ahead of the curve.",
  },
  {
    icon: <Leaf size={28} />,
    title: "Sustainability",
    description:
      "Every structure we build considers its long-term environmental footprint and community impact.",
  },
];

const timeline = [
  {
    year: "1999",
    title: "Founded",
    description:
      "Rharshz Infra and Trade was incorporated in Mumbai with a vision to redefine infrastructure development across India.",
  },
  {
    year: "2005",
    title: "First Major Bridge",
    description:
      "Successfully engineered and delivered the 1.2 km Konkan Coastal Bridge — our first landmark civil infrastructure project.",
  },
  {
    year: "2010",
    title: "International Expansion",
    description:
      "Established operations in UAE, Singapore, and Kenya, bringing Indian engineering excellence to global markets.",
  },
  {
    year: "2018",
    title: "Luxury Real Estate Division",
    description:
      "Launched our premium residential portfolio — bringing the same precision and craftsmanship to luxury homes.",
  },
  {
    year: "2023",
    title: "₹8000 Cr Portfolio",
    description:
      "Crossed the ₹8000 crore mark in cumulative portfolio value, cementing our position as a national leader in infra-trade.",
  },
];

const team = [
  {
    name: "Rajiv Sharma",
    role: "Founder & Chairman",
    initials: "RS",
    bio: "Civil engineer with 30+ years of experience leading landmark projects across Asia and Africa.",
  },
  {
    name: "Priya Menon",
    role: "CEO & Managing Director",
    initials: "PM",
    bio: "MBA from IIM Ahmedabad, driving strategic expansion and operational excellence across all verticals.",
  },
  {
    name: "Arjun Kapoor",
    role: "Chief Infrastructure Officer",
    initials: "AK",
    bio: "MIT-trained structural engineer specializing in large-scale civil works, bridges, and smart city projects.",
  },
];

export function AboutPage() {
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
      {/* ── Hero Banner ── */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/infrastructure-bridge.dim_800x600.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/60" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-gold" />
              <span className="font-body text-gold/90 text-xs tracking-[0.3em] uppercase">
                Who We Are
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-white">
              About Us
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-gold" />
                  <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
                    Our Story
                  </span>
                </div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-6 leading-tight">
                  Engineering Excellence
                  <br />
                  <span className="text-gold">Since 1999</span>
                </h2>
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed text-sm sm:text-base">
                  <p>
                    Rharshz Infra and Trade began as a vision — to build
                    infrastructure that lasts generations. Founded in 1999 by
                    veteran civil engineer Rajiv Sharma, we started with a
                    single contract and an unwavering commitment to quality.
                  </p>
                  <p>
                    Over 25 years, we've grown into a multi-vertical enterprise
                    spanning large-scale civil infrastructure, luxury real
                    estate development, and strategic trade operations across 12
                    countries. Each project carries the same founding DNA:
                    precision, integrity, and lasting impact.
                  </p>
                  <p>
                    Today, with a ₹8000 crore portfolio and 150+ delivered
                    projects, Rharshz is recognized as one of India's most
                    trusted infrastructure and real estate groups — building
                    tomorrow's landmarks, today.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/assets/generated/infrastructure-bridge.dim_800x600.jpg"
                    alt="Rharshz Infrastructure"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-gold text-navy p-5 rounded-lg shadow-gold">
                  <div className="font-display font-bold text-3xl">25+</div>
                  <div className="font-body text-xs font-semibold tracking-wide uppercase mt-1">
                    Years of Trust
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="bg-silver-light py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-gold" />
              <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
                What Drives Us
              </span>
              <div className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy">
              Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-lg p-7 border border-silver-light shadow-card text-center hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-navy/5 rounded-full mx-auto mb-5">
                  <div className="text-gold">{val.icon}</div>
                </div>
                <h3 className="font-display font-semibold text-navy text-lg mb-3">
                  {val.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="reveal text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-gold" />
              <span className="font-body text-gold/90 text-xs tracking-[0.3em] uppercase">
                Our Journey
              </span>
              <div className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Milestones
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex items-start gap-8 sm:gap-0 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Left / Right Content */}
                  <div
                    className={`flex-1 ${
                      i % 2 === 0
                        ? "sm:pr-12 sm:text-right"
                        : "sm:pl-12 sm:text-left"
                    } pl-16 sm:pl-0`}
                  >
                    <div className="bg-navy-mid border border-white/10 rounded-lg p-6">
                      <div className="text-gold font-display font-bold text-xl mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-white font-display font-semibold text-base mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/50 font-body text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-6 sm:left-1/2 top-6 w-3 h-3 bg-gold rounded-full -translate-x-1/2 z-10 ring-4 ring-navy" />

                  {/* Empty spacer on other side for desktop */}
                  <div className="hidden sm:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership Team ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-gold" />
              <span className="font-body text-gold text-xs tracking-[0.3em] uppercase">
                Leadership
              </span>
              <div className="w-10 h-px bg-gold" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy">
              Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center bg-white rounded-lg p-7 border border-silver-light shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center mx-auto mb-5">
                  <span className="font-display font-bold text-xl text-gold">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-navy text-base mb-1">
                  {member.name}
                </h3>
                <div className="text-gold font-body text-xs tracking-wide mb-3">
                  {member.role}
                </div>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
