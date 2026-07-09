import { Reveal } from "../ui/reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <span className="text-muted font-mono text-xs tracking-widest">
          SEC.02 — ABOUT
        </span>

        <div className="mt-6 grid gap-12 md:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="font-display text-foreground text-3xl font-medium md:text-4xl">
              Full-stack developer, end to end.
            </h2>
            <p className="text-muted mt-6 leading-relaxed">
              2+ years building production apps at Zanthium Technosoft — React
              and Node.js on top, PostgreSQL/MySQL underneath, Docker and Nginx
              handling deployment.
            </p>
            <p className="text-muted mt-4 leading-relaxed">
              I care most about the parts that are invisible when they work:
              clean data models, real-time state that doesn't drift, infra that
              doesn't wake you up at 2am.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <FactRow label="Based in" value="Kashipur, India" />
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
    </section>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-border border-l-2 pl-4">
      <p className="text-muted font-mono text-xs">{label}</p>
      <p className="text-foreground mt-1 text-sm">{value}</p>
    </div>
  );
}
