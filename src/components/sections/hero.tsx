import { buttonVariants } from "../ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-5xl px-6 pt-20 pb-24 md:pt-28 md:pb-32"
    >
      <p className="enter text-body flex items-start gap-2.5 text-[15px] font-medium [--i:0]">
        <span
          aria-hidden="true"
          className="bg-available mt-[7px] inline-block size-2 shrink-0 rounded-full"
        />
        Available immediately for full-time and contract roles
      </p>

      <h1 className="enter font-display mt-7 max-w-[15ch] text-[clamp(2.75rem,7vw,5.25rem)] leading-[0.98] font-semibold tracking-[-0.035em] text-balance [--i:1]">
        I build real-time features for a trading platform with 50k+ monthly
        users.
      </h1>

      <p className="enter text-body mt-8 max-w-[56ch] text-lg leading-relaxed [--i:2] md:text-[19px]">
        I’m Jeet Gangwar, a full stack developer working in React, TypeScript
        and Node.js. As one of two engineers on the team, I own features from
        the database to the deploy.
      </p>

      <div className="enter mt-10 flex flex-wrap items-center gap-3 [--i:3]">
        <a href="mailto:hello@jeetgr.dev" className={buttonVariants()}>
          Email me
        </a>
        <a
          href="/resume.pdf"
          download="Jeet-Gangwar-Full-Stack-Developer.pdf"
          className={buttonVariants({ variant: "secondary" })}
        >
          Download résumé
        </a>
      </div>

      <p className="enter text-muted mt-6 text-[15px] [--i:3]">
        Based in Uttarakhand, India. Open to remote, including US hours, and to
        relocating within India.
      </p>
    </section>
  );
}
