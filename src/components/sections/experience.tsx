import { experience } from "@/data/experience";

import { SectionWrapper } from "../layout/section-wrapper";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionLabel } from "../ui/section-label";

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <Reveal>
        <SectionLabel index={5} label="Experience" />

        <SectionHeading>One company so far, and a lot learned.</SectionHeading>

        <div className="border-border mt-14 ml-1 border-l pl-8 md:pl-10">
          {experience.map((job) => (
            <div key={job.id} className="relative pb-12 last:pb-0">
              <span
                className="border-accent bg-background absolute top-1.5 -left-[38px] size-3 rounded-full border-2 md:-left-[46px]"
                aria-hidden="true"
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
      </Reveal>
    </SectionWrapper>
  );
}
