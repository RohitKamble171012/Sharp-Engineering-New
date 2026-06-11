import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--navy-deep)] text-white/80">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <Link to="/" className="group flex items-center">
              <img
                src="/images/logo.png"
                alt="Sharp Engineering"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <div className="font-display text-lg font-bold text-white">
              SHARP <span className="text-[var(--orange)]">ENGINEERING</span>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/65">
            ISO 9001:2015 certified manufacturer of precision-machined automotive
            components, serving Tier-1 OEMs since 1998 from Jaysingpur, Maharashtra.
          </p>
        </div>

        <div>
          <div className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Explore
          </div>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ["/about", "About Us"],
              ["/products", "Products"],
              ["/infrastructure", "Infrastructure"],
              ["/gallery", "Gallery"],
              ["/certifications", "Certifications"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="inline-flex items-center gap-1 text-white/70 transition-colors hover:text-[var(--orange)]"
                >
                  {label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Capabilities
          </div>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li>CNC Turning Centers</li>
            <li>Vertical Machining Centers</li>
            <li>Precision Grinding</li>
            <li>In-house Quality Lab</li>
            <li>±0.01 mm Tolerance</li>
          </ul>
        </div>

        <div>
          <div className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Reach Us
          </div>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--orange)]" />
              <span>Plot No. 12, Chhatrapati Shahu Co-operative Industrial Estate,\nAgar Bhag (Shirol), Jaysingpur – 416102,\nKolhapur, Maharashtra, India</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--orange)]" />
              <a href="tel:+91 8010031808" className="hover:text-white">+91 8010031808</a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--orange)]" />
              <a href="tel:+91 9850151717" className="hover:text-white">+91 98501 51717</a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--orange)]" />
              <a href="tel:+91 9850857210" className="hover:text-white">+91 9850857210</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--orange)]" />
              <a href="mailto:sharpengineering25@gmail.com" className="hover:text-white">
                sharpengineering25@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-5 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Sharp Engineering. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>ISO 9001:2015 Certified</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>Established 1998</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
