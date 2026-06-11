import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sharp Engineering — Get a Quote" },
      { name: "description", content: "Get in touch with Sharp Engineering for precision component quotes, RFQs and partnership inquiries. Based in Jaysingpur, Kolhapur, Maharashtra." },
      { property: "og:title", content: "Contact — Sharp Engineering" },
      { property: "og:description", content: "Send your drawing — we'll respond within one business day." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    (e.target as HTMLFormElement).reset();
  }

  const info = [
    {
      icon: MapPin,
      label: "Address",
      value: "Plot No. 12, Chhatrapati Shahu Co-operative Industrial Estate,\nAgar Bhag (Shirol), Jaysingpur – 416102,\nKolhapur, Maharashtra, India",
    },
    {
  icon: Phone,
  label: "Phone",
  value: "+91 80100 31808\n+91 98501 51717\n+91 98508 57210",
  href: "tel:+918010031808",
},
    {
      icon: Mail,
      label: "Email",
      value: "sharpengineering25@gmail.com",
      href: "mailto:sharpengineering25@gmail.com",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Tuesday – Sunday · 9:00 AM – 6:00 PM IST\nMonday: Closed",
    },
  ];

  return (
    <>
      <section className="bg-[var(--navy-deep)] pt-32 pb-16 text-white">
        <div className="container-x">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-white/80">
              Contact
            </div>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl text-balance">
              Ready to discuss your
              <span className="text-[var(--orange)]"> precision component needs?</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/75">
              Reach out to us today for a consultation or quote. Our team responds
              within one business day with a feasibility review and indicative pricing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionTitle eyebrow="Reach us" title="We're listening." />
            <div className="mt-8 space-y-5">
              {info.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[var(--orange)]/10 text-[var(--orange)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
                    {href ? (
                      <a href={href} className="mt-1 block font-medium text-[var(--navy)] hover:text-[var(--orange)] whitespace-pre-line">
                        {value}
                      </a>
                    ) : (
                      <div className="mt-1 font-medium text-[var(--navy)] whitespace-pre-line">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-xl md:p-10"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[var(--orange)]" />
              <h2 className="font-display text-2xl font-bold text-[var(--navy)]">Send us a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">All fields marked * are required.</p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field label="Name *" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Email *" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <div className="mt-5">
                <label className="block">
                  <span className="text-sm font-semibold text-[var(--navy)]">Message *</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your component — material, quantity, tolerance, timeline…"
                    className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20"
                  />
                </label>
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={sent}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--orange)] px-6 py-3.5 font-semibold text-white shadow-lg transition-all hover:bg-[var(--orange-bright)] disabled:opacity-70 sm:w-auto"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Message sent
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="container-x">
          <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
            <iframe
              title="Sharp Engineering location"
              src="https://www.google.com/maps?q=Plot+No.+12+Chhatrapati+Shahu+Industrial+Estate+Jaysingpur+Kolhapur+Maharashtra&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[var(--navy)]">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20"
      />
    </label>
  );
}
