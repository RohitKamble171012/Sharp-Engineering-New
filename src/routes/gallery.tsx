import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { photos } from "@/lib/photos";
import { Reveal, Stagger, item } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Sharp Engineering Facility & Components" },
      { name: "description", content: "Browse photos of Sharp Engineering's CNC shop floor, machined components and manufacturing infrastructure." },
      { property: "og:title", content: "Gallery — Sharp Engineering" },
      { property: "og:description", content: "Photos from the Sharp Engineering manufacturing floor." },
      { property: "og:image", content: photos[0] },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const prev = () => setActive((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  const next = () => setActive((i) => (i === null ? null : (i + 1) % photos.length));

  return (
    <>
      <section className="bg-[var(--navy-deep)] pt-32 pb-16 text-white">
        <div className="container-x">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-white/80">
              Gallery
            </div>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl text-balance">
              Precision, captured in
              <span className="text-[var(--orange)]"> frame after frame.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container-x">
          <SectionTitle eyebrow="Visual archive" title="Inside Sharp Engineering." />
          <Stagger className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4 [&>*]:break-inside-avoid">
            {photos.map((src, i) => (
              <motion.button
                key={i}
                variants={item}
                onClick={() => setActive(i)}
                className="group block w-full overflow-hidden rounded-lg bg-[var(--navy-deep)] focus:outline-none focus:ring-2 focus:ring-[var(--orange)]"
              >
                <img
                  src={src}
                  alt={`Photo ${i + 1}`}
                  loading="lazy"
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                />
              </motion.button>
            ))}
          </Stagger>
        </div>
      </section>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--navy-deep)]/95 p-4 backdrop-blur"
            onClick={close}
          >
            <button
              className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-[var(--orange)]"
              onClick={(e) => { e.stopPropagation(); close(); }}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              className="absolute left-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-[var(--orange)]"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-[var(--orange)]"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              src={photos[active]}
              alt=""
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 text-sm text-white/70">
              {active + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
