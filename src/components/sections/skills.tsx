import { skillGroups } from "@/data/skills";

import { SectionWrapper } from "../layout/section-wrapper";
import { Reveal } from "../ui/reveal";
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
  return (
    <SectionWrapper id="skills">
      <Reveal>
        <SectionLabel index={3} label="Skills" />

        <SectionHeading>What I work with.</SectionHeading>

        <div className="border-border mt-12 border-t">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="border-border grid gap-3 border-b py-6 md:grid-cols-[16rem_1fr] md:gap-10"
            >
              <div>
                <h3 className="font-display text-foreground text-xl font-medium">
                  {group.category}
                </h3>
                <p className="coord mt-1 not-italic">{roles[group.category]}</p>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 md:pt-1">
                {group.items.map((item) => (
                  <li key={item} className="text-foreground/85 text-sm">
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
