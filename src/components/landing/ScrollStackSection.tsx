"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

type ScrollStackSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Extra scroll runway before the next section takes over */
  tall?: boolean;
};

function StackPanel({
  children,
  className,
  progress,
  reduceMotion,
}: {
  children: ReactNode;
  className: string;
  progress: MotionValue<number>;
  reduceMotion: boolean;
}) {
  const y = useTransform(progress, [0, 0.55, 1], [120, 24, 0]);
  const scale = useTransform(progress, [0, 0.55, 1], [0.94, 0.98, 1]);
  const opacity = useTransform(progress, [0, 0.35, 1], [0.35, 0.85, 1]);

  if (reduceMotion) {
    return <div className={`scroll-stack-panel ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      className={`scroll-stack-panel ${className}`}
      style={{ y, scale, opacity }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollStackSection({
  children,
  className = "",
  id,
  tall = true,
}: ScrollStackSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.12"],
  });

  return (
    <div
      ref={ref}
      id={id}
      className={`scroll-stack-slot${tall ? " scroll-stack-slot--tall" : ""}`}
    >
      <StackPanel
        className={className}
        progress={scrollYProgress}
        reduceMotion={reduceMotion}
      >
        {children}
      </StackPanel>
    </div>
  );
}
