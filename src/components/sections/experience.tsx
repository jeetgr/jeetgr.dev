import { education, experience } from "@/data/experience";

import { SectionWrapper } from "../layout/section-wrapper";

export function Experience() {
  return (
    <SectionWrapper id="experience" title="Experience">
      <div className="flex flex-col gap-12">
        {experience.map((job) => (
          <article key={job.id}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-[19px] font-semibold">
                {job.role}, {job.company}
              </h3>
              <p className="text-muted text-[15px] tabular-nums">
                {job.period}
              </p>
            </div>
            <p className="text-body mt-3 max-w-[62ch] leading-relaxed">
              {job.summary}
            </p>
            {job.points.length > 0 && (
              <ul className="text-body marker:text-muted mt-4 flex max-w-[62ch] list-disc flex-col gap-2 pl-5 leading-relaxed">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>

      <h3 className="font-display mt-16 text-2xl font-semibold tracking-[-0.015em]">
        Education
      </h3>
      <div className="mt-6 flex flex-col gap-5">
        {education.map((item) => (
          <div
            key={item.degree}
            className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1"
          >
            <p>
              <span className="font-semibold">{item.degree}</span>
              <span className="text-body">, {item.school}</span>
            </p>
            <p className="text-muted text-[15px] tabular-nums">{item.period}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
