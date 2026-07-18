import { experience } from "@/data/experience";

import { SectionWrapper } from "../layout/section-wrapper";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionLabel } from "../ui/section-label";

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <Reveal>
        <SectionLabel index={5} label="Where I’ve worked" />

        <SectionHeading>One company, a lot of ground covered.</SectionHeading>

        <div className="border-border mt-14 border-t">
          {experience.map((job) => (
            <div
              key={job.id}
              className="border-border grid gap-5 border-b py-8 md:grid-cols-[180px_1fr]"
            >
              <p className="text-muted font-mono text-xs">{job.period}</p>

              <div>
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-display text-foreground text-xl font-semibold tracking-tight">
                    {job.role}
                  </h3>
                  <span className="text-muted mt-1 w-full text-sm">
                    {job.company} · {job.location}
                  </span>
                </div>

                <ul className="mt-4 flex flex-col gap-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="text-muted flex gap-3 text-sm leading-6"
                    >
                      <span className="text-border-strong" aria-hidden="true">
                        —
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
