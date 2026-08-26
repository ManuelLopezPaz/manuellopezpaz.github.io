"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MateIcon } from "@/components/icons";

export function MatePredictorWidget() {
  const [showTip, setShowTip] = useState(false);

  return (
    <div
      className="group fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6"
      onMouseEnter={() => setShowTip(true)}
      onMouseLeave={() => setShowTip(false)}
      onFocus={() => setShowTip(true)}
      onBlur={() => setShowTip(false)}
    >
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute bottom-full right-0 mb-3 rounded-xl border border-border-subtle bg-card px-3 py-2 text-left shadow-lg"
          >
            <p className="whitespace-nowrap text-sm font-medium text-foreground">Coming soon</p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative opacity-35 transition-opacity duration-200 group-hover:opacity-100">
        <span
          className="mate-aura pointer-events-none absolute -inset-2 rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          aria-hidden
        />
        <div
          role="img"
          aria-label="The Mate Predictor — coming soon"
          className="relative flex h-11 w-11 cursor-default items-center justify-center rounded-full border border-accent-blue/30 bg-card text-accent-blue/60 transition-colors duration-200 group-hover:border-accent-blue/50 group-hover:text-accent-blue"
        >
          <MateIcon size={20} />
        </div>
      </div>
    </div>
  );
}
