import { motion, useReducedMotion } from "motion/react";

import { fadeOnly, fadeUp, staggerContainer } from "@/lib/motion";

import { SectionWrapper } from "../layout/section-wrapper";
import { Reveal, RevealItem } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionLabel } from "../ui/section-label";

export function About() {
  const reduced = useReducedMotion() ?? false;

  return (
    <SectionWrapper id="about">
      <Reveal stagger>
        <SectionLabel index={2} label="About" />

        <div className="mt-6 grid gap-14 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
          <RevealItem>
            <SectionHeading className="mt-0">
              I like knowing how the whole thing fits together.
            </SectionHeading>
            <p className="text-foreground/80 mt-8 max-w-2xl text-lg leading-8">
              I started at Zanthium writing PHP on the backend. Within a few
              months I was working across the whole stack: React on the
              frontend, Node APIs, real-time features, and the deployments that
              put it all online.
            </p>
            <p className="text-muted mt-5 max-w-2xl leading-7">
              That variety is the part I like. One hour I&apos;m tweaking how a
              button feels, the next I&apos;m chasing a slow query or figuring
              out why a container keeps crashing. I&apos;m happy either way.
            </p>
          </RevealItem>

          <motion.dl
            className="text-sm"
            variants={reduced ? fadeOnly : staggerContainer(0.08)}
          >
            <Fact label="Based in" value="Uttarakhand, IN" />
            <Fact label="Working since" value="2024" />
            <Fact label="Now" value="Full-stack @ Zanthium" />
            <Fact label="Studying" value="MCA, Graphic Era (2027)" />
          </motion.dl>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  const reduced = useReducedMotion() ?? false;

  return (
    <motion.div
      variants={reduced ? fadeOnly : fadeUp}
      className="border-border grid grid-cols-[7rem_1fr] items-baseline gap-4 border-t py-3.5 last:border-b"
    >
      <dt className="coord not-italic">{label}</dt>
      <dd className="text-foreground font-medium">{value}</dd>
    </motion.div>
  );
}
