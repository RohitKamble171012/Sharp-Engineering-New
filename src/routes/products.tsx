import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { productCatalog } from "@/lib/photos";
import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";
import { cn } from "@/lib/utils";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Precision Automotive Components | Sharp Engineering" },
      { name: "description", content: "Browse Sharp Engineering's catalogue of precision machined automotive components." },
      { property: "og:title", content: "Products — Sharp Engineering" },
      { property: "og:image", content: productCatalog[0].src },
    ],
  }),
  component: ProductsPage,
});

const categories = ["All", "Drum Gear Shift", "Drum Change", "Shafts & Axles", "Engine Components"] as const;

function ProductsPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = useMemo(
    () => (cat === "All" ? productCatalog : productCatalog.filter((p) => p.category === cat)),
    [cat],
  );

  const openLightbox = (id: number) => setLightboxIdx(filtered.findIndex((p) => p.id === id));
  const closeLightbox = () => setLightboxIdx(null);
  const prev = () => setLightboxIdx((i) => (i! > 0 ? i! - 1 : filtered.length - 1));
  const next = () => setLightboxIdx((i) => (i! < filtered.length - 1 ? i! + 1 : 0));

  const current = lightboxIdx !== null ? filtered[lightboxIdx] : null;

  return (
    <>
      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] max-w-2xl w-full rounded-xl overflow-hidden bg-[#111]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={current.src}
                alt={current.name}
                className="w-full max-h-[70vh] object-contain bg-[#F2F2F2]"
              />
              <div className="p-4 bg-[#111]">
                <p className="text-white font-bold text-lg">{current.name}</p>
                <p className="text-white/50 text-sm mt-1">{current.material} · {current.process}</p>
              </div>
              <button onClick={closeLightbox} className="absolute top-3 right-3 bg-black/60 hover:bg-black rounded-full p-1.5 text-white">
                <X size={18} />
              </button>
              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black rounded-full p-2 text-white">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black rounded-full p-2 text-white">
                <ChevronRight size={20} />
              </button>
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/40 text-xs">
                {lightboxIdx! + 1} / {filtered.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="bg-[var(--navy-deep)] pt-32 pb-16 text-white">
        <div className="container-x">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-white/80">
              Products
            </div>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl text-balance">
              Components engineered for the
              <span className="text-[var(--orange)]"> world's demanding drivetrains.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/75">
              From precision drum gear shifts to camshafts — every part is a result of disciplined
              CNC craftsmanship, verified by in-house metrology.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="container-x">
          <SectionTitle eyebrow="Catalogue" title="Filter by category." />
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={cn(
                  "rounded-full border px-5 py-2 text-sm font-semibold transition-all",
                  cat === c
                    ? "border-[var(--orange)] bg-[var(--orange)] text-white shadow-md"
                    : "border-border bg-white text-[var(--navy)] hover:border-[var(--orange)] hover:text-[var(--orange)]",
                )}
              >
                {c}
                <span className="ml-2 text-xs opacity-70">
                  {c === "All" ? productCatalog.length : productCatalog.filter((p) => p.category === c).length}
                </span>
              </button>
            ))}
          </div>

          <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-[var(--orange)] hover:shadow-2xl cursor-pointer"
                  onClick={() => openLightbox(p.id)}
                >
                  <div className="relative aspect-square overflow-hidden bg-[#F2F2F2]">
                    <img
                      src={p.src}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 rounded-md bg-[var(--orange)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      {p.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-bold text-[var(--navy)]">{p.name}</h3>
                    <dl className="mt-3 grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <dt className="text-muted-foreground">Material</dt>
                        <dd className="font-medium text-foreground">{p.material}</dd>
                      </div>
                      <div>
                        <dt className="text-muted-foreground">Process</dt>
                        <dd className="font-medium text-foreground">{p.process}</dd>
                      </div>
                    </dl>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}