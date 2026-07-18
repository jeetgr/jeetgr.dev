import { motion, useReducedMotion } from "motion/react";

import { skillGroups } from "@/data/skills";
import { fadeOnly, fadeUp, staggerContainer } from "@/lib/motion";

import { SectionWrapper } from "../layout/section-wrapper";
import { Reveal, RevealItem } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionLabel } from "../ui/section-label";

const roles: Record<string, string> = {
  Frontend: "the part people see",
  Backend: "logic and APIs",
  Databases: "storing and querying data",
  DevOps: "shipping and running it",
  Tools: "day to day",
};

export function Skills() {
  const reduced = useReducedMotion() ?? false;

  return (
    <SectionWrapper id="skills">
      <Reveal stagger>
        <SectionLabel index={3} label="Skills" />

        <RevealItem>
          <SectionHeading>What I work with.</SectionHeading>
        </RevealItem>

        <div className="border-border mt-12 border-t">
          {skillGroups.map((group) => (
            <RevealItem
              key={group.category}
              className="border-border grid gap-3 border-b py-6 md:grid-cols-[16rem_1fr] md:gap-10"
            >
              <div>
                <h3 className="font-display text-foreground text-xl font-medium">
                  {group.category}
                </h3>
                <p className="coord mt-1 not-italic">{roles[group.category]}</p>
              </div>
              <motion.ul
                className="flex flex-wrap gap-x-6 gap-y-2 md:pt-1"
                variants={reduced ? fadeOnly : staggerContainer(0.04)}
              >
                {group.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={reduced ? fadeOnly : fadeUp}
                    whileHover={reduced ? undefined : { y: -3 }}
                    className="text-foreground/85 hover:text-accent cursor-default text-sm transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </RevealItem>
          ))}
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
