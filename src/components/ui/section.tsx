import * as React from "react";
import { cn } from "@/lib/utils";

export function Section({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-12 max-w-3xl", center && "mx-auto text-center", className)}>
      {eyebrow && <p className="text-sm font-bold uppercase tracking-widest text-brand mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-5xl font-extrabold text-ink text-balance">{title}</h2>
      {description && <p className="mt-4 text-lg text-muted text-balance">{description}</p>}
    </div>
  );
}
