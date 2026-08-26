"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SpotifyIcon } from "@/components/icons";
import { spotifyProfileUrl } from "@/content/content";

type NowPlaying = {
  configured: boolean;
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumImageUrl?: string;
  songUrl?: string;
};

const POLL_INTERVAL_MS = 30000;

export function NowPlayingWidget() {
  const [data, setData] = useState<NowPlaying | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchNowPlaying = async () => {
      try {
        const res = await fetch("/api/now-playing", { cache: "no-store" });
        const json = (await res.json()) as NowPlaying;
        if (!cancelled) setData(json);
      } catch {
        if (!cancelled) setData({ configured: false, isPlaying: false });
      }
    };

    fetchNowPlaying();
    const interval = window.setInterval(fetchNowPlaying, POLL_INTERVAL_MS);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, []);

  if (!data || !data.configured || spotifyProfileUrl.includes("[FILL IN")) return null;

  const hasTrack = Boolean(data.title);
  const href = data.songUrl ?? spotifyProfileUrl;
  const contentKey = `${data.title ?? "idle"}-${data.isPlaying}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ layout: { type: "spring", stiffness: 350, damping: 28 }, opacity: { duration: 0.4 } }}
      className="fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 items-center overflow-hidden rounded-full border border-border-subtle bg-card py-1.5 pl-1.5 pr-4 shadow-lg transition-colors hover:border-accent-blue sm:bottom-6"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={contentKey}
          layout
          initial={{ opacity: 0, scale: 0.6, filter: "blur(4px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.6, filter: "blur(4px)" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex items-center gap-2.5"
        >
          {data.albumImageUrl ? (
            <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
              <Image
                src={data.albumImageUrl}
                alt={data.title ?? "Album art"}
                fill
                sizes="32px"
                className={`object-cover ${data.isPlaying ? "" : "opacity-60"}`}
              />
            </span>
          ) : (
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1DB954] text-white">
              <SpotifyIcon size={16} />
            </span>
          )}

          {hasTrack ? (
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="max-w-[10rem] truncate text-xs font-medium text-foreground sm:max-w-[14rem]">
                {data.title}
              </span>
              <span className="max-w-[10rem] truncate text-[11px] text-foreground-muted sm:max-w-[14rem]">
                {data.isPlaying ? data.artist : `${data.artist} · Paused`}
              </span>
            </span>
          ) : (
            <span className="text-xs text-foreground-muted">Not playing right now</span>
          )}

          {hasTrack && (
            <span className="flex items-end gap-0.5 pl-1" aria-hidden>
              <span
                className={`h-2 w-0.5 rounded-full ${data.isPlaying ? "eq-bar bg-accent-blue" : "bg-foreground-muted"}`}
                style={data.isPlaying ? { animationDelay: "0ms" } : undefined}
              />
              <span
                className={`h-3 w-0.5 rounded-full ${data.isPlaying ? "eq-bar bg-accent-blue" : "bg-foreground-muted"}`}
                style={data.isPlaying ? { animationDelay: "150ms" } : undefined}
              />
              <span
                className={`h-1.5 w-0.5 rounded-full ${data.isPlaying ? "eq-bar bg-accent-blue" : "bg-foreground-muted"}`}
                style={data.isPlaying ? { animationDelay: "300ms" } : undefined}
              />
            </span>
          )}
        </motion.span>
      </AnimatePresence>
    </motion.a>
  );
}
