import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { closingCopy } from "@/content/content";

export function ClosingCTA() {
  const isPlaceholder = closingCopy.ctaHref.includes("[FILL IN");

  return (
    <Section className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-4 pb-20 pt-8 text-center sm:px-6">
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-accent-blue to-transparent" />
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{closingCopy.heading}</h2>
      <p className="max-w-md text-base text-foreground-muted">{closingCopy.body}</p>
      {isPlaceholder ? (
        <span
          title="Email coming soon"
          className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-accent-blue/50 px-5 py-2.5 text-sm font-medium text-accent-blue opacity-50"
        >
          {closingCopy.ctaLabel}
          <ArrowRight size={16} />
        </span>
      ) : (
        <a
          href={closingCopy.ctaHref}
          className="group inline-flex items-center gap-2 rounded-full border border-accent-blue px-5 py-2.5 text-sm font-medium text-accent-blue transition-colors hover:bg-accent-blue-dim"
        >
          {closingCopy.ctaLabel}
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </a>
      )}
    </Section>
  );
}
