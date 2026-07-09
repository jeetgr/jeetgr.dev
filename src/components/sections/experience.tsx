import { experience } from "@/data/experience";

import { Reveal } from "../ui/reveal";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <span className="text-muted font-mono text-xs tracking-widest">
          SEC.05 — EXPERIENCE
        </span>

        <h2 className="font-display text-foreground mt-6 text-3xl font-medium md:text-4xl">
          Where I've worked.
        </h2>

        <div className="mt-12 flex flex-col">
          {experience.map((job) => (
            <div
              key={job.period}
              className="border-border grid gap-4 border-t py-8 first:border-t-0 md:grid-cols-[140px_1fr]"
            >
              <p className="text-muted font-mono text-xs">{job.period}</p>

              <div>
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-display text-foreground text-xl font-medium">
                    {job.role}
                  </h3>
                  <span className="text-muted text-sm">
                    {job.company} · {job.location}
                  </span>
                </div>

                <ul className="mt-4 flex flex-col gap-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="text-muted text-sm leading-relaxed"
                    >
                      · {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
