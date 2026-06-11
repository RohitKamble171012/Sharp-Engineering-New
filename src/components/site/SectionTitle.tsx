import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2">
          <span className="h-px w-8 bg-[var(--orange)]" />
          <span className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-[var(--orange)]">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl text-balance",
          invert ? "text-white" : "text-[var(--navy)]",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            invert ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
