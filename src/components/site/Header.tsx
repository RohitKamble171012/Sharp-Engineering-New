import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/infrastructure", label: "Infrastructure" },
  { to: "/gallery", label: "Gallery" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--navy-deep)]/95 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(0,0,0,0.4)]"
          : "bg-transparent",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="group flex items-center gap-3 text-white">
          <Link to="/" className="group flex items-center">
            <img
              src="/images/logo.png"
              alt="Sharp Engineering"
              className="h-12 w-auto object-contain"
            />
          </Link>
          <div className="leading-tight">
            <div className="font-display text-base font-bold tracking-tight md:text-lg">
              SHARP <span className="text-[var(--orange)]">ENGINEERING</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">
              Precision Since 1998
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative rounded-md px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:text-white"
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-white" }}
            >
              {({ isActive }) => (
                <>
                  {n.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-0.5 bg-[var(--orange)] transition-transform duration-300 origin-left",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-md bg-[var(--orange)] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-900/20 transition-all hover:bg-[var(--orange-bright)] hover:-translate-y-0.5 md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Get Quote
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[var(--navy-deep)] border-t border-white/10">
          <div className="container-x flex flex-col py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-white/85 hover:bg-white/5 hover:text-white"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
