import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import type React from "react";
import { useRef } from "react";

import { RevealItem } from "./reveal";

type Project = {
  title: string;
  description: string;
  stack: readonly string[];
  live: string;
  github: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
};

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reduced = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 20,
  });

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) {
      return;
    }
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
    if (reduced) {
      return;
    }
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <RevealItem className="project-plate group border-border grid gap-8 border-b py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
      <div className={index % 2 === 1 ? "lg:order-2" : ""}>
        <motion.div
          ref={ref}
          onPointerMove={onPointerMove}
          onPointerLeave={reset}
          style={
            reduced
              ? undefined
              : { rotateX, rotateY, transformPerspective: 900 }
          }
          className="spotlight border-border group-hover:border-border-strong bg-surface relative rounded-lg border p-2 transition-colors duration-300"
        >
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            width={project.imageWidth}
            height={project.imageHeight}
            loading="lazy"
            decoding="async"
            className="project-image aspect-video w-full rounded-md object-cover object-top transition-transform duration-300"
          />
          <span
            aria-hidden="true"
            className="text-accent-text pointer-events-none absolute top-3 right-3 font-mono text-[0.65rem] tracking-widest opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            ◹ PLOT {String(index + 1).padStart(2, "0")}
          </span>
        </motion.div>
      </div>

      <div className={index % 2 === 1 ? "lg:order-1" : ""}>
        <p className="coord">{String(index + 1).padStart(2, "0")}</p>
        <h3 className="font-display text-foreground mt-3 text-3xl font-medium tracking-tight">
          {project.title}
        </h3>
        <p className="text-foreground/80 mt-4 max-w-lg leading-7">
          {project.description}
        </p>

        <p className="coord mt-6 not-italic">{project.stack.join(" · ")}</p>

        <div className="mt-6 flex gap-6">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground decoration-accent hover:text-accent-text text-sm font-semibold underline decoration-2 underline-offset-4"
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
    </RevealItem>
  );
}
