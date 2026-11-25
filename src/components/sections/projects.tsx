import { caseStudies, projects } from "@/data/projects";

import { SectionWrapper } from "../layout/section-wrapper";

export function Projects() {
  return (
    <SectionWrapper id="work" title="Selected work">
      <p className="text-body max-w-[60ch] text-[17px] leading-relaxed">
        Case studies from the trading platform. The product is under NDA, so
        there are no names or screenshots here.
      </p>

      <div className="mt-10 flex flex-col gap-4">
        {caseStudies.map((study) => (
          <article
            key={study.id}
            className="border-line rounded-2xl border p-6 md:p-8"
          >
            <h3 className="font-display text-2xl leading-tight font-semibold tracking-[-0.015em] md:text-[26px]">
              {study.title}
            </h3>
            <p className="mt-1.5 text-[17px] font-medium">{study.result}</p>
            <div className="text-body mt-5 flex max-w-[62ch] flex-col gap-4 text-[17px] leading-relaxed">
              {study.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="text-muted mt-5 text-[15px]">{study.stack}</p>
          </article>
        ))}
      </div>

      <h3 className="font-display mt-20 text-2xl font-semibold tracking-[-0.015em]">
        Side projects
      </h3>
      <div className="mt-8 grid gap-x-8 gap-y-14 sm:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title}>
            <div className="bg-panel rounded-2xl px-5 pt-5">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                width={project.imageWidth}
                height={project.imageHeight}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full rounded-t-md object-cover object-top outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10"
              />
            </div>
            <h4 className="mt-5 text-[19px] font-semibold">{project.title}</h4>
            <p className="text-body mt-2 leading-relaxed">
              {project.description}
            </p>
            <p className="text-muted mt-3 text-[15px]">{project.stack}</p>
            <p className="mt-3 flex gap-5 text-[15px] font-semibold">
              <ExternalLink href={project.live}>Live site</ExternalLink>
              <ExternalLink href={project.github}>Source code</ExternalLink>
            </p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="decoration-line hover:decoration-foreground underline underline-offset-4 transition-[text-decoration-color] duration-150"
    >
      {children}
    </a>
  );
}
