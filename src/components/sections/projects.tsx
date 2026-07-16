import { projects } from "@/data/projects";

import { SectionWrapper } from "../layout/section-wrapper";
import { Reveal } from "../ui/reveal";

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <Reveal>
        <span className="text-muted font-mono text-xs tracking-widest">
          SEC.04 — PROJECTS
        </span>

        <h2 className="font-display text-foreground mt-6 text-3xl font-medium md:text-4xl">
          Things I've built.
        </h2>

        <div className="mt-12 flex flex-col gap-16">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="grid gap-8 md:grid-cols-2 md:items-center"
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  decoding="async"
                  className="border-border aspect-video w-full rounded-lg border object-cover"
                />
              </div>

              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <p className="text-muted font-mono text-xs">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-foreground mt-2 text-2xl font-medium">
                  {project.title}
                </h3>
                <p className="text-muted mt-4 leading-relaxed">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="border-border text-muted rounded-full border px-3 py-1 font-mono text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    Live site ↗
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground text-sm font-medium hover:underline"
                  >
                    Source ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
