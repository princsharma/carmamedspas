"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { images } from "@/data/images";

const SPLASH_DURATION_MS = 2600;

const orbs = [
  { className: "splash-orb splash-orb--1", delay: 0 },
  { className: "splash-orb splash-orb--2", delay: 0.15 },
  { className: "splash-orb splash-orb--3", delay: 0.3 },
  { className: "splash-orb splash-orb--4", delay: 0.2 },
  { className: "splash-orb splash-orb--5", delay: 0.35 },
];

export function SplashScreen() {
  const reduceMotion = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.classList.add("splash-active");

    const timer = window.setTimeout(() => {
      setShow(false);
    }, reduceMotion ? 1200 : SPLASH_DURATION_MS);

    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("splash-active");
    };
  }, [reduceMotion]);

  const handleExitComplete = () => {
    document.body.classList.remove("splash-active");
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {show && (
        <motion.div
          className="splash"
          role="presentation"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {!reduceMotion && (
            <>
              <div className="splash-gradient" aria-hidden="true" />
              <div className="splash-shimmer" aria-hidden="true" />
              {orbs.map((orb) => (
                <motion.div
                  key={orb.className}
                  className={orb.className}
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: orb.delay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              ))}
              <div className="splash-ring splash-ring--1" aria-hidden="true" />
              <div className="splash-ring splash-ring--2" aria-hidden="true" />
            </>
          )}

          <motion.div
            className="splash-inner"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.82, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="splash-logo-wrap"
              animate={reduceMotion ? undefined : { scale: [1, 1.03, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {!reduceMotion && <div className="splash-logo-glow" aria-hidden="true" />}
              <Image
                src={images.logo.src}
                alt={images.logo.alt}
                width={220}
                height={62}
                priority
                className="splash-logo"
              />
            </motion.div>

            {!reduceMotion && (
              <motion.div
                className="splash-loader"
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <motion.span
                  className="splash-loader-fill"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    delay: 0.5,
                    duration: 1.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
