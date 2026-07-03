"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 420;

export function BackToTop() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: 16, scale: 0.92 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 4v12M10 4l-4.5 4.5M10 4l4.5 4.5"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
