import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Cog, Wrench, Microscope, Layers, Cpu, Ruler } from "lucide-react";
import { facilityPhotos, facadePhoto } from "@/lib/photos";
import { Reveal, Stagger, item } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({
    meta: [
      { title: "Infrastructure — 30+ CNC Machines & In-House QA | Sharp Engineering" },
      { name: "description", content: "Inside Sharp Engineering's manufacturing facility: CNC turning, VMC, grinding, drilling and full in-house quality lab in Jaysingpur." },
      { property: "og:title", content: "Infrastructure — Sharp Engineering" },
      { property: "og:description", content: "30+ CNC machines, calibrated metrology, OEM-grade quality processes." },
      { property: "og:image", content: facilityPhotos[0] },
    ],
  }),
  component: InfraPage,
});

function InfraPage() {
  const equipment = [
    { icon: Cog, name: "CNC Turning Centers", qty: "12+", spec: "Up to 400mm dia · live tooling" },
    { icon: Wrench, name: "Vertical Machining Centers", qty: "10+", spec: "4-axis · 1000×600mm bed" },
    { icon: Layers, name: "Cylindrical Grinders", qty: "4", spec: "0.4 Ra surface finish" },
    { icon: Cpu, name: "Multi-spindle Drilling", qty: "6", spec: "Production-grade throughput" },
    { icon: Microscope, name: "CMM Inspection", qty: "2", spec: "1μm resolution · NABL traceable" },
    { icon: Ruler, name: "Profile Projectors & Gauges", qty: "Full lab", spec: "100% dimensional verification" },
  ];

  return (
    <>
      <section className="bg-[var(--navy-deep)] relative isolate pt-32 pb-20 text-white overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={facilityPhotos[1]} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-deep)] via-[var(--navy-deep)]/85 to-[var(--navy-deep)]" />
        </div>
        <div className="container-x">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-white/80">
              Infrastructure
            </div>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl text-balance">
              30+ CNC machines.
              <span className="text-[var(--orange)]"> One disciplined shop floor.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/75">
              Our facility in MIDC Jaysingpur is built around a simple principle: the
              equipment, the people and the process must all be capable of repeating precision —
              shift after shift, year after year.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container-x">
          <SectionTitle
            eyebrow="Equipment"
            title="Every machine selected, calibrated and maintained for OEM-grade output."
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {equipment.map(({ icon: Icon, name, qty, spec }) => (
              <motion.div
                key={name}
                variants={item}
                className="group rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-[var(--orange)] hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-9 w-9 text-[var(--orange)]" strokeWidth={1.5} />
                  <span className="font-display text-2xl font-bold text-[var(--navy)]">{qty}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-[var(--navy)]">{name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{spec}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <SectionTitle eyebrow="Walk the floor" title="A look inside Sharp Engineering." />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facilityPhotos.map((src, i) => (
              <motion.div
                key={i}
                variants={item}
                className={`group relative overflow-hidden rounded-xl ${i % 5 === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
              >
                <img
                  src={src}
                  alt={`Facility view ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-[var(--navy)] py-16 text-white">
        <div className="container-x grid gap-6 sm:grid-cols-2 md:grid-cols-4 text-center">
          {[
            ["12,000 sqft", "Built-up area"],
            ["3 Shifts", "Operational capacity"],
            ["80+", "Skilled workforce"],
            ["±0.01mm", "Achievable tolerance"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-4xl font-extrabold text-[var(--orange)]">{n}</div>
              <div className="mt-1 text-sm uppercase tracking-wider text-white/70">{l}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
