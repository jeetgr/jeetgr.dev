import { skillGroups } from "@/data/skills";

import { SectionWrapper } from "../layout/section-wrapper";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionLabel } from "../ui/section-label";

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <Reveal>
        <SectionLabel index={3} label="What I use" />

        <SectionHeading>My day-to-day stack.</SectionHeading>

        <div className="border-border mt-14 border-t">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="border-border grid gap-4 border-b py-5 sm:grid-cols-[10rem_1fr]"
            >
              <p className="text-muted font-mono text-xs">{group.category}</p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
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
