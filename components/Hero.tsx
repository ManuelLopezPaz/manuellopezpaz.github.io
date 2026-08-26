"use client";

import { Avatar } from "@/components/Avatar";
import { Badge } from "@/components/Badge";
import { heroIntro, institutionBadges, name } from "@/content/content";

export function Hero() {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="flex flex-col items-center gap-6 pb-6 pt-24 text-center sm:pt-32">
      <Avatar src="/avatar.jpg" initials={initials} name={name} />
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Hi, I&apos;m {name}.</h1>
      <p className="max-w-xl text-base text-foreground-muted sm:text-lg">
        {heroIntro.before}{" "}
        <span className="inline-flex items-center align-middle">
          {institutionBadges.map((badge) => (
            <Badge key={badge.id} {...badge} size="sm" />
          ))}
        </span>{" "}
        <span className="font-medium text-foreground">VU Amsterdam</span> {heroIntro.after}
      </p>
    </header>
  );
}
