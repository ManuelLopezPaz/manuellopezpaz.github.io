"use client";

import { Badge } from "@/components/Badge";
import { Section } from "@/components/layout/Section";
import {
  experienceBadges,
  meParagraphs,
  projectBadges,
  uadeBadge,
} from "@/content/content";

export function MeSection() {
  return (
    <Section id="me" className="mx-auto flex max-w-2xl flex-col gap-8 px-4 py-10 sm:px-6">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-blue">Me</p>

      <p className="text-lg leading-relaxed text-foreground-muted">
        {meParagraphs.workBefore}{" "}
        <span className="inline-flex items-center -space-x-1 align-middle">
          {experienceBadges.map((badge) => (
            <Badge key={badge.id} {...badge} size="sm" />
          ))}
        </span>{" "}
        {meParagraphs.workAfter}
      </p>

      <p className="text-lg leading-relaxed text-foreground-muted">
        {meParagraphs.projectsLabel}{" "}
        <span className="inline-flex items-center -space-x-1 align-middle">
          {projectBadges.map((badge) => (
            <Badge key={badge.id} {...badge} size="sm" />
          ))}
        </span>
      </p>

      <p className="text-lg leading-relaxed text-foreground-muted">
        {meParagraphs.studyingBefore}{" "}
        <span className="inline-flex items-center align-middle">
          <Badge {...uadeBadge} size="sm" />
        </span>{" "}
        <span className="font-medium text-foreground">UADE</span>
        {meParagraphs.studyingAfter}
      </p>
    </Section>
  );
}
