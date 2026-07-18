import type { Transition, Variants } from "motion/react";

/** Shared easing so every animated surface feels like one system. */
export const EASE = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  fast: 0.35,
  base: 0.6,
  slow: 0.9,
} as const;

/** Rise + fade used by section reveals and staggered children. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.base, ease: EASE },
  },
};

/** Container that cascades its children on enter. */
export const staggerContainer = (
  staggerChildren = 0.09,
  delayChildren = 0
): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

export const spring: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 30,
  mass: 0.6,
};

/** Reduced-motion variants: no movement or blur, opacity only. */
export const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: DURATION.fast } },
};
