import { motion, useReducedMotion } from "motion/react";
import type React from "react";

import { fadeOnly, fadeUp, staggerContainer } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  /** Cascade direct children (wrapped in `RevealItem`) instead of one block. */
  stagger?: boolean;
  /** Delay before the first child animates in. */
  delay?: number;
  /** Gap between staggered children. */
  staggerChildren?: number;
  className?: string;
};

export function Reveal({
  children,
  stagger = false,
  delay = 0,
  staggerChildren = 0.1,
  className,
}: RevealProps) {
  const reduced = useReducedMotion() ?? false;

  if (stagger) {
    return (
      <motion.div
        className={className}
        variants={reduced ? fadeOnly : staggerContainer(staggerChildren, delay)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={reduced ? fadeOnly : fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** A single cascading child; must live inside a `Reveal stagger` container. */
export function RevealItem({
  children,
  className,
  ...props
}: React.ComponentProps<typeof motion.div>) {
  const reduced = useReducedMotion() ?? false;

  return (
    <motion.div
      className={className}
      variants={reduced ? fadeOnly : fadeUp}
      {...props}
    >
      {children}
    </motion.div>
  );
}
