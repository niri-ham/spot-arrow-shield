import * as Icons from "lucide-react";
import type { Service } from "@/data/types";

export function ServiceCard({ service }: { service: Service }) {
  const Icon =
    (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.ShieldCheck;
  return (
    <article className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-glow">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-display text-lg font-semibold leading-tight">{service.title}</h3>
      </div>
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{service.summary}</p>
      <ul className="mt-5 space-y-2">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm">
            <Icons.Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span className="text-foreground/80">{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
