import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";
import { facadePhoto, facilityPhotos } from "@/lib/photos";
import { Reveal, Stagger, item } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sharp Engineering — 25+ Years of Precision Manufacturing" },
      { name: "description", content: "Founded in 1998 in Jaysingpur, Maharashtra. Discover Sharp Engineering's mission, journey and the team behind precision automotive components." },
      { property: "og:title", content: "About Sharp Engineering" },
      { property: "og:description", content: "25+ years machining precision automotive components for Tier-1 OEMs." },
      { property: "og:image", content: facadePhoto },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero />
      <Mission />
      <Story />
      <Values />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative isolate bg-[var(--navy-deep)] pt-32 pb-24 text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={facadePhoto} alt="" className="h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-deep)] via-[var(--navy-deep)]/80 to-[var(--navy-deep)]" />
      </div>
      <div className="container-x">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-white/80">
            About Us
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl text-balance">
            Two decades of relentless precision —
            <span className="text-[var(--orange)]"> machined into every shipment.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            From a single-lathe workshop in 1998 to a 30+ CNC certified manufacturer — Sharp
            Engineering has earned the trust of India's most demanding automotive OEMs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Mission() {
  const cards = [
    { icon: Target, title: "Mission", text: "To deliver world-class precision components that empower our automotive partners to build better, safer, more reliable vehicles." },
    { icon: Eye, title: "Vision", text: "To be the most trusted Tier-2 precision manufacturer for global automotive OEMs, recognized for quality, consistency and on-time delivery." },
    { icon: Heart, title: "Values", text: "Integrity in measurement. Discipline in process. Respect for every craftsperson on the shop floor." },
  ];
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-x">
        <Stagger className="grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              variants={item}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-[var(--orange)] hover:shadow-xl"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--orange)]/10 text-[var(--orange)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-[var(--navy)]">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Story() {
  const milestones = [
    { year: "1998", title: "Founded in Jaysingpur", text: "Sharp Engineering opens its doors with a single conventional lathe and a vision for precision." },
    { year: "2004", title: "First CNC machine", text: "Investment in our first CNC turning center marks the shift to high-precision production." },
    { year: "2010", title: "OEM partnerships", text: "Began supplying Tier-1 OEM customers with pump housings and engine components." },
    { year: "2015", title: "ISO 9001:2015 certified", text: "Achieved internationally recognized quality management certification." },
    { year: "2020", title: "Plant expansion", text: "Doubled shop-floor footprint and added VMCs, grinding cells and in-house QA lab." },
    { year: "2025", title: "30+ CNC strong", text: "Today: 30+ CNC machines, 80+ skilled workforce, 500+ component variants supplied." },
  ];
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <SectionTitle eyebrow="Our Journey" title="A timeline of precision, milestone by milestone." />
        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <img
              src={facilityPhotos[2]}
              alt="Sharp Engineering shop floor"
              className="sticky top-28 aspect-[4/5] w-full rounded-xl object-cover shadow-xl"
            />
          </Reveal>
          <Stagger className="relative space-y-10 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-border lg:before:left-3">
            {milestones.map((m) => (
              <motion.div key={m.year} variants={item} className="relative pl-10 lg:pl-14">
                <span className="absolute left-0 top-2 grid h-4 w-4 place-items-center rounded-full bg-[var(--orange)] ring-4 ring-[var(--orange)]/20 lg:left-1" />
                <div className="font-display text-sm font-bold tracking-widest text-[var(--orange)]">{m.year}</div>
                <h3 className="mt-1 font-display text-2xl font-bold text-[var(--navy)]">{m.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{m.text}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function Values() {
  const points = [
    "Right-first-time manufacturing culture",
    "100% in-process and final inspection",
    "Calibrated instruments traceable to NABL standards",
    "Skilled operators with 10+ years average tenure",
    "Lean shop-floor practices & 5S discipline",
    "Long-term partnerships over transactional business",
  ];
  return (
    <section className="bg-[var(--navy)] text-white py-20 md:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
        <SectionTitle
          invert
          eyebrow="What sets us apart"
          title="Precision is a discipline, not a destination."
          description="Our entire shop floor — from the youngest apprentice to the senior CMM inspector — is trained to obsess over micron-level details."
        />
        <Stagger className="grid gap-3">
          {points.map((p) => (
            <motion.div
              key={p}
              variants={item}
              className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--orange)]" />
              <span className="text-white/90">{p}</span>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
