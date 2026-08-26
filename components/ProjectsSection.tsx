"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { TrackRecord } from "@/components/TrackRecord";
import { Section } from "@/components/layout/Section";
import { projects } from "@/content/content";

export function ProjectsSection() {
  return (
    <Section id="projects" className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-blue">Projects</p>

      <TrackRecord />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
