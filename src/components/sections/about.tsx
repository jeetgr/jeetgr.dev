import { SectionWrapper } from "../layout/section-wrapper";

export function About() {
  return (
    <SectionWrapper id="about" title="About">
      <div className="text-body flex max-w-[62ch] flex-col gap-5 text-[17px] leading-relaxed">
        <p>
          I’m a full stack developer with 2.5 years building production web apps
          in React, TypeScript and Node.js. I’m one of two engineers on a
          trading platform with 50k+ monthly active users, so I work across the
          whole stack: frontend, API, database and deployments.
        </p>
        <p>
          I started as a PHP developer in June 2024 and moved into the full
          stack role within three months by learning React on the job. I’m
          pursuing a Master of Computer Applications alongside full-time work.
        </p>
        <p>
          I use Claude Code every day. I plan each change myself, let it write
          against that plan, and review every change before I push.
        </p>
        <p>I speak Hindi and English.</p>
      </div>
    </SectionWrapper>
  );
}
