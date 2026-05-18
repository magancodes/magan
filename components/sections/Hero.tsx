"use client";

import { motion } from "framer-motion";

/**
 * HERO — plain text only.
 * "product · design · build" in rust serif on the slate bg.
 *  - desktop: single line, centered, large
 *  - mobile:  stacked, left-aligned, no dots (handled by globals.css)
 */

const QUOTE_LABEL = "product · design · build";

export default function Hero() {
  return (
    <header id="hero" className="hero-brutalist">
      <motion.h1
        className="hero-quote"
        aria-label={QUOTE_LABEL}
        initial={{ opacity: 0, filter: "blur(14px)", y: 12 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.25,
        }}
      >
        <span className="word">product</span>
        <span className="sep" aria-hidden>
          ·
        </span>
        <span className="word">design</span>
        <span className="sep" aria-hidden>
          ·
        </span>
        <span className="word">build</span>
      </motion.h1>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 0.55, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
      >
        scroll
      </motion.div>
    </header>
  );
}
