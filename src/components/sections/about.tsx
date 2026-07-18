import { SectionWrapper } from "../layout/section-wrapper";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionLabel } from "../ui/section-label";

export function About() {
  return (
    <SectionWrapper id="about">
      <Reveal>
        <SectionLabel index={2} label="A little about me" />

        <div className="mt-8 grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
          <div>
            <SectionHeading className="mt-0">
              I like knowing how the whole thing works.
            </SectionHeading>
            <p className="text-foreground mt-8 max-w-2xl text-lg leading-8">
              I started at Zanthium as a PHP backend developer. A few months
              later, I had moved across the stack—building React screens, Node
              APIs, real-time features, and handling deployments.
            </p>
            <p className="text-muted mt-5 max-w-2xl leading-7">
              That range suits me. I enjoy polishing an interaction, but I’m
              just as happy tracing a bad query or figuring out why a container
              won’t stay up.
            </p>
          </div>

          <div className="border-border border-t pt-1 lg:mt-2">
            <FactRow label="Based in" value="Uttarakhand, India" />
            <FactRow label="Experience" value="2+ years" />
            <FactRow
              label="Currently"
              value="Full-Stack Developer @ Zanthium"
            />
            <FactRow
              label="Education"
              value="MCA, Graphic Era University (2027)"
            />
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-border grid grid-cols-[6rem_1fr] gap-4 border-b py-4">
      <p className="text-muted font-mono text-xs">{label}</p>
      <p className="text-foreground text-sm font-medium">{value}</p>
    </div>
  );
}
