export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[90vh] max-w-5xl flex-col justify-center px-6 py-24"
    >
      <span className="text-muted font-mono text-xs tracking-widest">
        SEC.01 — HERO
      </span>

      <h1 className="font-display text-foreground mt-6 text-5xl leading-tight font-medium md:text-7xl">
        Jeet Gangwar
      </h1>

      <p className="text-primary mt-4 font-mono text-lg md:text-xl">
        Full-Stack Developer
      </p>

      <p className="text-muted mt-6 max-w-xl text-base leading-relaxed md:text-lg">
        I build fast, reliable web applications end to end — from database
        design to the interface people actually touch. Focused on clean
        architecture and performance that holds up at scale.
      </p>

      <div className="border-border bg-surface text-muted mt-8 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 font-mono text-xs">
        <span className="bg-signal size-1.5 rounded-full" />
        jeetgr.dev · available for work
      </div>

      <div className="mt-10 flex gap-4">
        <a
          href="#projects"
          className="bg-primary text-primary-foreground rounded-md px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
        >
          View projects
        </a>
        <a
          href="/resume.pdf"
          download="Jeet Gangwar Fullstack Developer"
          className="border-border text-foreground hover:bg-surface rounded-md border px-5 py-2.5 text-sm font-medium transition-colors"
        >
          Download resume
        </a>
      </div>
    </section>
  );
}
