import { SectionWrapper } from "../layout/section-wrapper";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionLabel } from "../ui/section-label";
import { Tile } from "../ui/tile";

export function About() {
  return (
    <SectionWrapper id="about">
      <Reveal stagger>
        <SectionLabel index={2} label="About" />

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-3">
          <Tile className="sm:col-span-2 lg:row-span-2 lg:flex lg:flex-col lg:justify-center">
            <SectionHeading className="mt-0 text-3xl md:text-4xl">
              I like knowing how the whole thing fits together.
            </SectionHeading>
            <p className="text-foreground/80 mt-6 text-lg leading-8">
              I started at Zanthium writing PHP on the backend. Within a few
              months I was working across the whole stack: React on the
              frontend, Node APIs, real-time features, and the deployments that
              put it all online.
            </p>
            <p className="text-muted mt-5 leading-7">
              That variety is the part I like. One hour I&apos;m tweaking how a
              button feels, the next I&apos;m chasing a slow query or figuring
              out why a container keeps crashing. I&apos;m happy either way.
            </p>
          </Tile>

          <FactTile label="Based in" value="Uttarakhand, IN" />
          <FactTile label="Working since" value="2024" />
          <FactTile
            label="Now"
            value="Full-stack @ Zanthium"
            className="sm:col-span-2"
          />
          <FactTile label="Studying" value="MCA, Graphic Era (2027)" />
        </div>
      </Reveal>
    </SectionWrapper>
  );
}

function FactTile({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <Tile className={className}>
      <div className="flex h-full flex-col justify-center gap-2">
        <p className="coord not-italic">{label}</p>
        <p className="font-display text-foreground text-2xl leading-tight font-medium">
          {value}
        </p>
      </div>
    </Tile>
  );
}
