import { skillGroups } from "@/data/skills";

import { SectionWrapper } from "../layout/section-wrapper";
import { Reveal } from "../ui/reveal";

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <Reveal>
        <span className="text-muted font-mono text-xs tracking-widest">
          SEC.03 — SKILLS
        </span>

        <h2 className="font-display text-foreground mt-6 text-3xl font-medium md:text-4xl">
          What I work with.
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {skillGroups.map((group) => (
            <div key={group.category} className="border-border border-l-2 pl-4">
              <p className="text-muted font-mono text-xs tracking-widest">
                {group.category.toUpperCase()}
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item} className="text-foreground text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
