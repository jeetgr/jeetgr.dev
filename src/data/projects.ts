export const projects = [
  {
    title: "Make Your Resume",
    description:
      "A resume builder with live preview as you type. Built the templates, layout engine, and a lightweight custom auth system from scratch — no third-party auth provider.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://myr.jeetgr.dev",
    github: "https://github.com/jeetgr/makeyourresume",
    image: "/projects/make-your-resume.webp",
  },
  {
    title: "Promptopia",
    description:
      "A full-stack prompt-sharing platform with server-side rendering, authentication, and protected routes for creating and managing personal prompts.",
    stack: ["Next.js", "MongoDB", "TypeScript"],
    live: "https://promptopia.jeetgr.dev",
    github: "https://github.com/jeetgr/promptopia",
    image: "/projects/promptopia.webp",
  },
] as const;
