"use client";

import { Badge } from "@/components/Badge";
import { Section } from "@/components/layout/Section";
import { socials } from "@/content/content";

export function SocialsSection() {
  return (
    <Section className="mx-auto flex max-w-2xl flex-col items-center gap-5 px-4 py-12 text-center sm:px-6">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-blue">Elsewhere</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {socials.map((social) => (
          <Badge key={social.id} {...social} />
        ))}
      </div>
    </Section>
  );
}
