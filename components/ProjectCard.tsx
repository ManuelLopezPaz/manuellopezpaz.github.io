"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";

const statusBorder: Record<Project["status"], string> = {
  done: "border-border-subtle",
  "in-progress": "border-accent-blue/50",
  planned: "border-dashed border-border-subtle opacity-70",
};

const statusLabel: Record<Project["status"], string> = {
  done: "Done",
  "in-progress": "In progress",
  planned: "Planned",
};

const statusPill: Record<Project["status"], string> = {
  done: "border border-border-subtle text-foreground-muted",
  "in-progress": "bg-accent-blue-dim text-accent-blue",
  planned: "border border-dashed border-border-subtle text-foreground-muted",
};

export function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  const isLink = Boolean(project.href) && !project.href?.startsWith("[FILL IN");

  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-accent-blue">
          <Icon size={18} />
        </div>
        {isLink && (
          <ArrowUpRight
            size={16}
            className="text-foreground-muted opacity-0 transition-opacity group-hover:opacity-100"
          />
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
        <p className="text-sm leading-relaxed text-foreground-muted">{project.description}</p>
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusPill[project.status]}`}
        >
          {statusLabel[project.status]}
        </span>
        {project.tag && <span className="text-xs text-foreground-muted">{project.tag}</span>}
      </div>
    </>
  );

  const className = `group flex h-full flex-col gap-4 rounded-2xl border bg-card p-6 transition-colors ${
    statusBorder[project.status]
  } ${project.flagship ? "ring-1 ring-accent-blue/40" : ""}`;

  if (isLink) {
    return (
      <motion.a
        id={project.id}
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className={className}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      id={project.id}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={className}
    >
      {content}
    </motion.div>
  );
}
