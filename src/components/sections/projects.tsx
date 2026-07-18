import { projects } from "@/data/projects";

import { SectionWrapper } from "../layout/section-wrapper";
import { ProjectCard } from "../ui/project-card";
import { Reveal, RevealItem } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionLabel } from "../ui/section-label";

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <Reveal stagger>
        <SectionLabel index={4} label="Projects" />

        <RevealItem>
          <SectionHeading>Two things I designed and built.</SectionHeading>
          <p className="text-muted mt-6 max-w-xl leading-7">
            Both started as something I wanted to figure out, and turned into
            things people actually use.
          </p>
        </RevealItem>

        <div className="border-border mt-14 border-t">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
