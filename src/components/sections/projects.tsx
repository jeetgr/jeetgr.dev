import { projects } from "@/data/projects";

import { SectionWrapper } from "../layout/section-wrapper";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionLabel } from "../ui/section-label";

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <Reveal>
        <SectionLabel index={4} label="Projects" />

        <SectionHeading>Two things I designed and built.</SectionHeading>
        <p className="text-muted mt-6 max-w-xl leading-7">
          Both started as something I wanted to figure out, and turned into
          things people actually use.
        </p>

        <div className="border-border mt-14 border-t">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-plate border-border grid gap-8 border-b py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="border-border bg-surface border p-2">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width={project.imageWidth}
                    height={project.imageHeight}
                    loading="lazy"
                    decoding="async"
                    className="project-image aspect-video w-full object-cover object-top transition-transform duration-300"
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="coord">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="font-display text-foreground mt-3 text-3xl font-medium tracking-tight">
                  {project.title}
                </h3>
                <p className="text-foreground/80 mt-4 max-w-lg leading-7">
                  {project.description}
                </p>

                <p className="coord mt-6 not-italic">
                  {project.stack.join(" · ")}
                </p>

                <div className="mt-6 flex gap-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground decoration-accent hover:text-accent text-sm font-semibold underline decoration-2 underline-offset-4"
                  >
                    Open live ↗
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-foreground text-sm transition-colors"
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
