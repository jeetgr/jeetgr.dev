import { SectionWrapper } from "../layout/section-wrapper";
import { buttonVariants } from "../ui/button";
import { Contours } from "../ui/contours";
import { Reveal } from "../ui/reveal";

export function Hero() {
  return (
    <SectionWrapper
      id="home"
      divider={false}
      className="relative flex min-h-[calc(100svh-4.25rem)] flex-col justify-center overflow-hidden py-16"
    >
      <Contours className="pointer-events-none absolute -top-20 right-[-12%] h-[130%] w-[75%] opacity-90 md:right-0 md:w-[55%]" />

      <Reveal>
        <div className="relative max-w-3xl">
          <p className="coord">Uttarakhand, India</p>

          <h1 className="font-display text-foreground mt-6 text-[clamp(3rem,8.5vw,6.5rem)] leading-[0.92] font-semibold tracking-[-0.03em]">
            Jeet Gangwar — <span className="text-primary">full-stack</span>
            <br />
            developer.
          </h1>

          <p className="text-foreground/80 mt-8 max-w-xl text-lg leading-8">
            I build web apps end to end: the frontend people use, the backend
            behind it, and the servers that keep it running. About two years in,
            still figuring things out as I go.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#projects"
              className={buttonVariants({ variant: "primary" })}
            >
              See the work
            </a>
            <a
              href="/resume.pdf"
              download="Jeet-Gangwar-Fullstack-Developer.pdf"
              className="text-muted hover:text-foreground border-border hover:border-accent border-b pb-1 font-mono text-xs tracking-wide uppercase transition-colors"
            >
              Download résumé
            </a>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
