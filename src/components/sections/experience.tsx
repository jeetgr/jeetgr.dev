import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";

import { experience } from "@/data/experience";
import { spring } from "@/lib/motion";

import { SectionWrapper } from "../layout/section-wrapper";
import { Reveal, RevealItem } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionLabel } from "../ui/section-label";

export function Experience() {
  const reduced = useReducedMotion() ?? false;
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 65%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });
  const markerTop = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <SectionWrapper id="experience">
      <Reveal stagger>
        <SectionLabel index={5} label="Experience" />

        <RevealItem>
          <SectionHeading>
            One company so far, and a lot learned.
          </SectionHeading>
        </RevealItem>
      </Reveal>

      <div ref={timelineRef} className="relative mt-14 ml-1 pl-8 md:pl-10">
        {/* Base track */}
        <div
          className="bg-border absolute top-0 left-0 h-full w-px"
          aria-hidden="true"
        />
        {/* Drawn progress line, bound to scroll */}
        <motion.div
          className="bg-accent absolute top-0 left-0 w-px origin-top"
          style={{
            height: "100%",
            scaleY: reduced ? 1 : progress,
          }}
          aria-hidden="true"
        />
        {/* Surveyor marker riding the drawn line */}
        {!reduced && (
          <motion.span
            aria-hidden="true"
            className="bg-accent absolute left-[-3.5px] z-10 size-2 rotate-45 shadow-[0_0_8px_2px_var(--color-accent)]"
            style={{ top: markerTop, y: "-50%" }}
          />
        )}

        {experience.map((job) => (
          <div key={job.id} className="relative pb-12 last:pb-0">
            <motion.span
              className="border-accent bg-background absolute top-1.5 left-[-38px] size-3 rounded-full border-2 md:left-[-46px]"
              aria-hidden="true"
              initial={reduced ? undefined : { scale: 0, opacity: 0 }}
              whileInView={reduced ? undefined : { scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-40%" }}
              transition={spring}
            />
            <p className="coord">{job.period}</p>
            <h3 className="font-display text-foreground mt-2 text-2xl font-medium tracking-tight">
              {job.role}
            </h3>
            <p className="text-muted mt-1 text-sm">
              {job.company} · {job.location}
            </p>

            <ul className="mt-5 flex flex-col gap-2.5">
              {job.points.map((point) => (
                <li
                  key={point}
                  className="text-foreground/80 flex gap-3 text-sm leading-6"
                >
                  <span className="text-accent mt-0.5" aria-hidden="true">
                    ·
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
