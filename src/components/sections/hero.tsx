import { SectionWrapper } from "../layout/section-wrapper";
import { buttonVariants } from "../ui/button";
import { Reveal } from "../ui/reveal";
import { SectionLabel } from "../ui/section-label";

export function Hero() {
  return (
    <SectionWrapper
      id="home"
      className="flex min-h-[calc(100svh-4.5rem)] flex-col justify-center py-16 md:py-20"
    >
      <Reveal>
        <SectionLabel index={1} label="Hello, I’m Jeet." />

        <h1 className="font-display text-foreground mt-8 max-w-5xl text-[clamp(3.4rem,9vw,7.6rem)] leading-[0.9] font-semibold tracking-[-0.065em]">
          I build for the web,
          <span className="text-primary block">from front to back.</span>
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_19rem] md:items-end">
          <div>
            <p className="text-muted max-w-2xl text-lg leading-8">
              I’m a full-stack developer from Uttarakhand. At Zanthium, I work
              across React interfaces, Node services, databases, and the servers
              they run on.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className={buttonVariants({ variant: "primary" })}
              >
                See what I’ve built
              </a>
              <a
                href="/resume.pdf"
                download="Jeet-Gangwar-Fullstack-Developer.pdf"
                className={buttonVariants({ variant: "outline" })}
              >
                Résumé
              </a>
            </div>
          </div>

          <aside className="border-accent/60 text-muted rotate-[-1.5deg] border-l-2 pl-5 text-sm leading-6">
            <p className="font-display text-foreground text-lg font-semibold">
              Right now
            </p>
            <p className="mt-2">
              Working full-time, studying for my MCA, and still making time for
              side projects that teach me something new.
            </p>
          </aside>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
