import { projects } from "@/data/projects";

import { SectionWrapper } from "../layout/section-wrapper";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionLabel } from "../ui/section-label";

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <Reveal>
        <SectionLabel index={4} label="A couple of things I’ve made" />

        <SectionHeading>Side projects, made to be used.</SectionHeading>
        <p className="text-muted mt-6 max-w-xl leading-7">
          These started with problems I wanted to understand better. I designed
          and built both from scratch.
        </p>

        <div className="border-border mt-14 border-t">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-card border-border grid gap-8 border-b py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  loading="lazy"
                  decoding="async"
                  className="project-image border-border aspect-video w-full border object-cover object-top shadow-[8px_8px_0_var(--color-surface)] transition-transform duration-300"
                />
              </div>

              <div>
                <h3 className="font-display text-foreground text-3xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="text-muted mt-4 max-w-lg leading-7">
                  {project.description}
                </p>

                <p className="text-muted mt-6 font-mono text-xs">
                  Built with {project.stack.join(", ")}
                </p>

                <div className="mt-7 flex gap-5">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground decoration-accent text-sm font-semibold underline decoration-2 underline-offset-4"
                  >
                    Open project ↗
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-foreground text-sm font-medium transition-colors"
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
