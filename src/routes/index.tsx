import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Cog,
  Gauge,
  Microscope,
  Factory,
  Award,
  Users,
  Calendar,
  Quote,
} from "lucide-react";
import { heroPhoto, facadePhoto, productCatalog, facilityPhotos } from "@/lib/photos";
import { Reveal, Stagger, item } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sharp Engineering — Precision Machined Automotive Components Since 1998" },
      { name: "description", content: "ISO 9001:2015 certified Tier-1 supplier of precision-machined pump housings, hubs, and engine components from Jaysingpur, Maharashtra." },
      { property: "og:title", content: "Sharp Engineering — Precision Machined Automotive Components" },
      { property: "og:description", content: "Trusted by Tier-1 OEMs since 1998. ±0.01mm tolerance. ISO 9001:2015 certified." },
      { property: "og:image", content: heroPhoto },
      { name: "twitter:image", content: heroPhoto },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Highlights />
      <AboutTeaser />
      <CapabilitiesGrid />
      <FeaturedProducts />
      <FacilityStrip />
      <Testimonial />
      <CTABanner />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--navy-deep)] text-white">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img
          src={heroPhoto}
          alt="Sharp Engineering manufacturing facility"
          className="h-full w-full object-cover opacity-75"  // ← was 50, now 75
        />
        {/* lighter overlay so the photo reads through */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-deep)]/50 via-[var(--navy-deep)]/40 to-[var(--navy-deep)]" />
        <div className="absolute inset-0 bg-grid" />
      </motion.div>

      <motion.div style={{ opacity }} className="container-x relative flex min-h-[100svh] flex-col justify-center pt-28 pb-20">

        {/* Badge */}
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" />
            ISO 9001:2015 Certified
          </div>
        </Reveal>

        {/* Main heading */}
        <Reveal delay={0.05}>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            SHARP
            <span className="block text-[var(--orange)]">ENGINEERING</span>
          </h1>
        </Reveal>

        {/* Body copy */}
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl leading-relaxed">
            Sharp Engineering has been a trusted manufacturer of high-precision automotive
            components since 1998. With state-of-the-art CNC and VMC machinery, we deliver
            superior quality components to leading manufacturers.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-md bg-[var(--orange)] px-6 py-3.5 font-semibold text-white shadow-xl shadow-orange-900/30 transition-all hover:bg-[var(--orange-bright)] hover:-translate-y-0.5"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition-colors hover:border-[var(--orange)] hover:bg-white/10"
            >
              Explore Products
            </Link>
          </div>
        </Reveal>

        {/* Stats strip */}
        <Reveal delay={0.25} className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-8 md:grid-cols-4">
          {[
            ["25+", "Years"],
            ["500+", "Components"],
            ["50+", "OEM Clients"],
            ["±0.01mm", "Tolerance"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl font-bold text-[var(--orange)] md:text-4xl">{n}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{l}</div>
            </div>
          ))}
        </Reveal>

      </motion.div>
    </section>
  );
}
function Marquee() {
  const products = [
    "Pump Housings",
    "Impeller Hubs",
    "Transmission Components",
    "Engine Brackets",
    "Cylinder Liners",
    "Bearing Housings",
    "Flanged Shafts",
    "Valve Bodies",
  ];

  return (
    <div className="border-y border-border bg-white py-5 overflow-hidden">
      <div className="container-x flex items-center gap-6">
        <div className="shrink-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">
          Leading producers of
        </div>
        <div className="h-4 w-px bg-border shrink-0" />
        <div className="relative flex-1 overflow-hidden">
          <motion.div
            className="flex gap-10 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 32, ease: "linear", repeat: Infinity }}
          >
            {[...products, ...products, ...products].map((p, i) => (
              <span key={i} className="inline-flex items-center gap-2.5 font-display text-base font-bold text-[var(--navy)]/40">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)] shrink-0" />
                {p}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
function Highlights() {
  const items = [
    { icon: ShieldCheck, title: "ISO 9001:2015", desc: "Quality management certified across every process and batch." },
    { icon: Gauge, title: "±0.01 mm Tolerance", desc: "Tier-1 precision verified on calibrated CMM instruments." },
    { icon: Cog, title: "30+ CNC Machines", desc: "Turning centers, VMCs and grinding cells under one roof." },
    { icon: Microscope, title: "In-house QA Lab", desc: "Hardness testers, profilometers and CMM for full traceability." },
  ];
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-x">
        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-[var(--orange)] hover:shadow-xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[var(--orange)] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              <Icon className="h-9 w-9 text-[var(--orange)]" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-xl font-bold text-[var(--navy)]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-[var(--orange)]/10" />
            <img
              src={facadePhoto}
              alt="Sharp Engineering manufacturing facility exterior"
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-[var(--navy)] p-6 text-white shadow-2xl md:block">
              <div className="font-display text-4xl font-bold text-[var(--orange)]">1998</div>
              <div className="text-xs uppercase tracking-wider text-white/70">Established</div>
            </div>
          </div>
        </Reveal>
        <div>
          <SectionTitle
            eyebrow="About Sharp Engineering"
            title="Two decades of engineering trust, machined into every component."
            description="Founded in 1998 in the industrial heart of Jaysingpur, Sharp Engineering has grown from a single-machine workshop into a 30+ CNC strong precision manufacturer — supplying critical automotive components to Tier-1 OEMs across India and abroad."
          />
          <Reveal delay={0.15} className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              [Calendar, "Founded 1998", "25+ years of continuous operations"],
              [Award, "ISO 9001:2015", "Certified quality management"],
              [Factory, "30+ CNC Machines", "VMCs, turning centers, grinders"],
              [Users, "80+ Skilled Workforce", "Engineers, operators, QC inspectors"],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof Calendar;
              return (
                <div key={t as string} className="flex items-start gap-3 rounded-lg border border-border bg-background p-4">
                  <I className="h-5 w-5 shrink-0 text-[var(--orange)]" />
                  <div>
                    <div className="font-display font-semibold text-[var(--navy)]">{t as string}</div>
                    <div className="text-xs text-muted-foreground">{d as string}</div>
                  </div>
                </div>
              );
            })}
          </Reveal>
          <Reveal delay={0.25}>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-[var(--orange)] hover:gap-3 transition-all"
            >
              Read our full story <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CapabilitiesGrid() {
  const caps = [
    { title: "CNC Turning", desc: "High-precision turning centers handling components up to 400 mm dia." },
    { title: "VMC Machining", desc: "Vertical milling for complex prismatic geometries with multi-axis setups." },
    { title: "Cylindrical Grinding", desc: "Surface finishes down to 0.4 Ra on hardened automotive shafts." },
    { title: "Drilling & Tapping", desc: "Multi-spindle setups for high-volume production efficiency." },
    { title: "Quality Inspection", desc: "CMM, profile projectors, hardness testers — full in-house lab." },
    { title: "Material Expertise", desc: "Cast iron, SG iron, EN-series steels, stainless, aluminium." },
  ];
  return (
    <section className="bg-[var(--navy)] text-white py-20 md:py-28">
      <div className="container-x">
        <SectionTitle
          invert
          align="center"
          eyebrow="Capabilities"
          title="Engineered end-to-end. From raw bar stock to ready-to-assemble part."
          description="Every machine, every process, every inspection point — all under one roof in Jaysingpur."
        />
        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-xl bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {caps.map((c, i) => (
            <motion.div
              key={c.title}
              variants={item}
              className="group relative bg-[var(--navy)] p-8 transition-colors hover:bg-[var(--navy-soft)]"
            >
              <div className="font-display text-xs font-bold tracking-widest text-[var(--orange)]">
                0{i + 1}
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{c.desc}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const featured = productCatalog.slice(0, 6);
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            eyebrow="Our Products"
            title="A catalogue built on precision and proven performance."
            description="Pump housings, impeller hubs, engine brackets, transmission components — engineered for OEM-grade reliability."
          />
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-md border border-[var(--navy)] px-5 py-3 font-semibold text-[var(--navy)] transition-all hover:bg-[var(--navy)] hover:text-white"
          >
            View All Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <motion.div
              key={p.id}
              variants={item}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-[var(--orange)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--navy-deep)]">
                <img
                  src={p.src}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-md bg-[var(--orange)] px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {p.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-[var(--navy)]">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{p.material}</span>
                  <span>{p.process}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function FacilityStrip() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <SectionTitle
          eyebrow="Infrastructure"
          title="Inside the Sharp Engineering shop floor."
          description="A glimpse into the 30+ CNC machines, calibrated tooling and quality lab that power every component we ship."
        />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facilityPhotos.slice(0, 8).map((src, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <img
                src={src}
                alt={`Sharp Engineering facility view ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </Stagger>
        <div className="mt-10 text-center">
          <Link
            to="/infrastructure"
            className="inline-flex items-center gap-2 font-semibold text-[var(--orange)] hover:gap-3 transition-all"
          >
            Explore our infrastructure <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="bg-[var(--navy-deep)] text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Quote className="mx-auto h-12 w-12 text-[var(--orange)]" />
          <blockquote className="mt-6 font-display text-2xl font-medium leading-snug text-white md:text-3xl text-balance">
            "Sharp Engineering has been our most reliable component partner for over a decade.
            Their tolerance discipline and on-time delivery rival much larger Tier-1 suppliers."
          </blockquote>
          <div className="mt-8">
            <div className="font-semibold text-[var(--orange)]">Procurement Head</div>
            <div className="text-sm text-white/60">Leading Pune-based Automotive OEM</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[var(--orange)] py-16 md:py-20">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container-x relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-4xl text-balance">
            Ready to engineer your next component with us?
          </h2>
          <p className="mt-3 max-w-xl text-white/90">
            Send us your drawing — we'll respond within one business day with a feasibility review and indicative quote.
          </p>
        </div>
        <Link
          to="/contact"
          className="group inline-flex shrink-0 items-center gap-2 rounded-md bg-[var(--navy-deep)] px-7 py-4 font-semibold text-white shadow-xl transition-all hover:-translate-y-0.5"
        >
          Request a Quote
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
