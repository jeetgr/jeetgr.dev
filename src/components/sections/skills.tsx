import { motion, useReducedMotion } from "motion/react";

import { skillGroups } from "@/data/skills";
import { fadeOnly, fadeUp, staggerContainer } from "@/lib/motion";

import { SectionWrapper } from "../layout/section-wrapper";
import { Reveal, RevealItem } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionLabel } from "../ui/section-label";
import { Tile } from "../ui/tile";

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

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Tile
              key={group.category}
              className={group.category === "Frontend" ? "sm:col-span-2" : ""}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-foreground text-xl font-medium">
                  {group.category}
                </h3>
                <p className="coord not-italic">{roles[group.category]}</p>
              </div>
              <motion.ul
                className="mt-5 flex flex-wrap gap-x-5 gap-y-2"
                variants={reduced ? fadeOnly : staggerContainer(0.04)}
              >
                {group.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={reduced ? fadeOnly : fadeUp}
                    whileHover={reduced ? undefined : { y: -3 }}
                    className="text-foreground/85 hover:text-accent-text cursor-default text-sm transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </Tile>
          ))}
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
