import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";

import { buttonVariants } from "@/components/ui/button";
import { Constellation } from "@/components/ui/constellation";
import { Magnetic } from "@/components/ui/magnetic";
import { SectionLabel } from "@/components/ui/section-label";
import { fadeOnly, fadeUp, staggerContainer } from "@/lib/motion";

export function NotFound() {
  const reduced = useReducedMotion() ?? false;
  const item = reduced ? fadeOnly : fadeUp;

  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 text-center">
      <Constellation className="text-muted pointer-events-none absolute inset-0 h-full w-full mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_80%)]" />

      <motion.div
        className="relative"
        variants={reduced ? fadeOnly : staggerContainer(0.12, 0.05)}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="flex justify-center">
          <SectionLabel index="404" label="OFF THE MAP" />
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-foreground mt-6 text-[clamp(5rem,22vw,12rem)] leading-none font-semibold tracking-[-0.04em]"
        >
          4<span className="text-primary">0</span>4
        </motion.h1>

        <motion.p
          variants={item}
          className="text-muted mx-auto mt-4 max-w-sm leading-7"
        >
          No survey point here. This coordinate isn't on the map — the page you
          were looking for doesn't exist.
        </motion.p>

        <motion.p
          variants={item}
          className="coord mt-6 flex items-center justify-center gap-2.5 not-italic"
        >
          <motion.span
            aria-hidden="true"
            className="bg-destructive inline-block size-2 rounded-full"
            animate={reduced ? undefined : { opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          SIGNAL LOST · NO FIX
        </motion.p>

        <motion.div variants={item} className="mt-10 flex justify-center">
          <Magnetic>
            <Link to="/" className={buttonVariants({ size: "md" })}>
              Back to known ground
            </Link>
          </Magnetic>
        </motion.div>
      </motion.div>
    </div>
  );
}
