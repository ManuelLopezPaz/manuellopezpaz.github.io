"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { IconComponent } from "@/lib/types";

export function Badge({
  href,
  label,
  icon: Icon,
  imageSrc,
  bg,
  size = "md",
}: {
  href: string;
  label: string;
  icon?: IconComponent;
  imageSrc?: string;
  bg?: string;
  size?: "sm" | "md";
}) {
  const dimensions = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  const iconSize = size === "sm" ? 14 : 16;
  const isPending = href.includes("[FILL IN");
  const hasNoLink = !href || isPending;
  const tooltip = isPending ? `${label} — link coming soon` : label;

  const circleClassName = `relative flex ${dimensions} shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-background ${
    imageSrc ? "" : bg ? bg : "bg-white text-neutral-900"
  } ${hasNoLink ? "cursor-not-allowed opacity-50" : ""}`;

  const content = imageSrc ? (
    <Image src={imageSrc} alt={label} fill sizes="40px" className="object-cover" />
  ) : Icon ? (
    <Icon size={iconSize} />
  ) : null;

  const tooltipEl = (
    <span className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 w-max max-w-[220px] -translate-x-1/2 rounded-lg bg-neutral-900 px-3 py-1.5 text-center text-xs leading-snug text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100">
      {tooltip}
    </span>
  );

  if (hasNoLink) {
    return (
      <span className="group relative inline-flex align-middle hover:z-20" aria-label={tooltip}>
        <span className={circleClassName}>{content}</span>
        {tooltipEl}
      </span>
    );
  }

  return (
    <span className="group relative inline-flex align-middle hover:z-20">
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={circleClassName}
      >
        {content}
      </motion.a>
      {tooltipEl}
    </span>
  );
}
