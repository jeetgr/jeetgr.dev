import { motion, useReducedMotion } from "motion/react";

import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionLabelProps = {
  index: number | string;
  label: string;
  className?: string;
};

export function SectionLabel({ index, label, className }: SectionLabelProps) {
  const reduced = useReducedMotion() ?? false;

  if (reduced) {
    return (
      <span className={cn("legend-key", className)} data-section={index}>
        {label}
      </span>
    );
  }

  return (
    <motion.span
      variants={fadeUp}
      data-section={index}
      className={cn("legend-key [&::before]:hidden", className)}
    >
      <motion.span
        aria-hidden="true"
        className="border-accent size-2.5 shrink-0 border"
        variants={{
          hidden: { rotate: 0, scale: 0 },
          show: {
            rotate: 45,
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 15 },
          },
        }}
      />
      {label}
    </motion.span>
  );
}
