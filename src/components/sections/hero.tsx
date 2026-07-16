import { SectionWrapper } from "../layout/section-wrapper";
import { buttonVariants } from "../ui/button";
import { Reveal } from "../ui/reveal";
import { SectionLabel } from "../ui/section-label";

export function Hero() {
  return (
    <SectionWrapper
      id="home"
      className="relative flex min-h-[90vh] flex-col justify-center"
    >
      <Reveal>
        <SectionLabel index={1} label="HERO" />

        <h1 className="font-display text-foreground mt-6 text-5xl leading-tight font-medium md:text-7xl">
          Jeet Gangwar
        </h1>

        <p className="text-primary mt-4 font-mono text-lg md:text-xl">
          Full-Stack Developer
        </p>

        <p className="text-muted mt-6 max-w-xl text-base leading-relaxed md:text-lg">
          I build web apps with React and Node — from the schema to the UI. Two
          years shipping production code at Zanthium Technosoft.
        </p>

        <div className="border-border bg-surface text-muted mt-8 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 font-mono text-xs">
          <span className="bg-signal size-1.5 rounded-full" />
          Uttarakhand · open to work
        </div>

        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className={buttonVariants({ variant: "primary" })}
          >
            View projects
          </a>
          <a
            href="/resume.pdf"
            download="Jeet-Gangwar-Fullstack-Developer.pdf"
            className={buttonVariants({ variant: "outline" })}
          >
            Download resume
          </a>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
