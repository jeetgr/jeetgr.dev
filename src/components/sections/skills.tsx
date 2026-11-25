import { learning, skillGroups } from "@/data/skills";

import { SectionWrapper } from "../layout/section-wrapper";

export function Skills() {
  return (
    <SectionWrapper id="skills" title="Skills">
      <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-[11rem_1fr]">
        {skillGroups.map((group) => (
          <div key={group.category} className="contents">
            <dt className="font-semibold">{group.category}</dt>
            <dd className="text-body -mt-4 leading-relaxed sm:mt-0">
              {group.items}
            </dd>
          </div>
        ))}
      </dl>
      <p className="text-muted border-line mt-8 border-t pt-6 text-[15px] leading-relaxed">
        Learning on the side: {learning}.
      </p>
    </SectionWrapper>
  );
}
