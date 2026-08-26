"use client";

import Image from "next/image";
import { useState } from "react";

export function Avatar({
  src,
  initials,
  name,
}: {
  src: string;
  initials: string;
  name: string;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-border-subtle bg-card text-2xl font-semibold text-accent-blue sm:h-28 sm:w-28">
        {initials}
      </div>
    );
  }

  return (
    <div className="relative h-24 w-24 overflow-hidden rounded-full border border-border-subtle sm:h-28 sm:w-28">
      <Image
        src={src}
        alt={name}
        fill
        sizes="112px"
        priority
        className="object-cover"
        onError={() => setErrored(true)}
      />
    </div>
  );
}
