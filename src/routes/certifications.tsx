import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, BadgeCheck, ShieldCheck, FileCheck2 } from "lucide-react";
import { Reveal, Stagger, item } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications & Quality — ISO 9001:2015 | Sharp Engineering" },
      { name: "description", content: "Sharp Engineering is ISO 9001:2015 certified. Discover our quality processes, in-house metrology and traceability standards." },
      { property: "og:title", content: "Certifications — Sharp Engineering" },
      { property: "og:description", content: "ISO 9001:2015 certified quality management." },
    ],
  }),
  component: CertsPage,
});

function CertsPage() {
  const certs = [
    { icon: Award, title: "ISO 9001:2015", desc: "Quality Management System certification — covering every process from raw material inward to final dispatch." },
    { icon: ShieldCheck, title: "PPAP-ready Documentation", desc: "Production Part Approval Process documentation available for all OEM customers on request." },
    { icon: BadgeCheck, title: "NABL Traceable Calibration", desc: "All gauges, micrometers and inspection instruments calibrated against NABL-accredited masters." },
    { icon: FileCheck2, title: "Material Test Certificates", desc: "100% raw-material traceability with mill test certificates and in-house hardness verification." },
  ];

  const principles = [
    "Right-first-time culture across every shift",
    "Process FMEA reviewed for every new component",
    "In-process inspection at minimum 3 control points",
    "100% final dimensional inspection before dispatch",
    "Statistical Process Control for critical dimensions",
    "Non-conformance traceability with corrective-action loops",
  ];

  return (
    <>
      <section className="bg-[var(--navy-deep)] pt-32 pb-16 text-white">
        <div className="container-x">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-white/80">
              Quality & Certifications
            </div>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl text-balance">
              Quality you can
              <span className="text-[var(--orange)]"> measure, audit and trust.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/75">
              Sharp Engineering operates an ISO 9001:2015 certified quality management
              system — supported by in-house metrology, NABL-traceable calibration and
              full PPAP-ready documentation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container-x">
          <SectionTitle eyebrow="Standards" title="Certifications & quality credentials." />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
            {certs.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={item}
                className="group flex gap-5 rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-[var(--orange)] hover:shadow-xl"
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-[var(--orange)]/10 text-[var(--orange)]">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-[var(--navy)]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-[var(--navy)] py-20 md:py-28 text-white">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionTitle
            invert
            eyebrow="Quality Principles"
            title="A process for every micron."
            description="Our quality system is not a binder on a shelf — it's the daily rhythm of the shop floor."
          />
          <Stagger className="grid gap-3">
            {principles.map((p) => (
              <motion.div
                key={p}
                variants={item}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4"
              >
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[var(--orange)]" />
                <span className="text-white/90">{p}</span>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
