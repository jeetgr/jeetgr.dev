import { motion, useReducedMotion } from "motion/react";
import type React from "react";

import {
  DURATION,
  EASE,
  fadeOnly,
  fadeUp,
  staggerContainer,
} from "@/lib/motion";

import { SectionWrapper } from "../layout/section-wrapper";
import { buttonVariants } from "../ui/button";
import { Constellation } from "../ui/constellation";
import { Magnetic } from "../ui/magnetic";

export function Hero() {
  const reduced = useReducedMotion() ?? false;
  const item = reduced ? fadeOnly : fadeUp;

  return (
    <SectionWrapper
      id="home"
      divider={false}
      className="relative flex min-h-[calc(100svh-4.25rem)] flex-col justify-center overflow-hidden py-16"
    >
      <Constellation className="pointer-events-none absolute inset-0 h-full w-full mask-[radial-gradient(ellipse_75%_75%_at_70%_45%,#000_35%,transparent_85%)]" />

      <motion.div
        className="relative max-w-3xl"
        variants={reduced ? fadeOnly : staggerContainer(0.13, 0.15)}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="coord flex items-center gap-2.5">
          <motion.span
            aria-hidden="true"
            className="bg-signal inline-block size-2 rounded-full"
            animate={reduced ? undefined : { opacity: [1, 0.25, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          30.07° N · 79.02° E — Uttarakhand, India
        </motion.p>

        <h1 className="font-display text-foreground mt-6 text-[clamp(3rem,8.5vw,6.5rem)] leading-[0.92] font-semibold tracking-[-0.03em]">
          <Line reduced={reduced}>
            Jeet Gangwar — <span className="text-primary">full-stack</span>
          </Line>
          <Line reduced={reduced}>developer.</Line>
        </h1>

        <motion.p
          variants={item}
          className="text-foreground/80 mt-8 max-w-xl text-lg leading-8"
        >
          I build web apps end to end: the frontend people use, the backend
          behind it, and the servers that keep it running. About two years in,
          still figuring things out as I go.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <Magnetic>
            <a
              href="#projects"
              className={buttonVariants({ variant: "primary" })}
            >
              See the work
            </a>
          </Magnetic>
          <a
            href="/resume.pdf"
            download="Jeet-Gangwar-Fullstack-Developer.pdf"
            className="text-muted hover:text-foreground border-border hover:border-accent border-b pb-1 font-mono text-xs tracking-wide uppercase transition-colors"
          >
            Download résumé
          </a>
        </motion.div>
      </motion.div>

      {!reduced && (
        <motion.div
          aria-hidden="true"
          className="text-muted absolute bottom-6 left-5 flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.2em] uppercase sm:left-8 lg:left-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <span className="bg-border relative block h-8 w-px overflow-hidden">
            <motion.span
              className="bg-accent absolute inset-x-0 top-0 h-3"
              animate={{ y: [-12, 32] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>
          Scroll
        </motion.div>
      )}
    </SectionWrapper>
  );
}

/** A headline line that rises out from behind a mask. */
function Line({
  children,
  reduced,
}: {
  children: React.ReactNode;
  reduced: boolean;
}) {
  if (reduced) {
    return (
      <motion.span variants={fadeOnly} className="block">
        {children}
      </motion.span>
    );
  }

  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        variants={{
          hidden: { y: "110%" },
          show: {
            y: "0%",
            transition: { duration: DURATION.slow, ease: EASE },
          },
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
