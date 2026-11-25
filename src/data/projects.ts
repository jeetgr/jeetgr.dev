export const caseStudies = [
  {
    id: "realtime",
    title: "Scaling real-time updates",
    result: "Live data to 1–2K concurrent connections",
    body: [
      "The trading engine and the API ran as one process, so the API couldn't scale past a single instance. I split the engine out: it stays a single instance on purpose and publishes updates over Redis pub/sub, and Socket.io delivers them to every connected client.",
      "Pub/sub is fire-and-forget, so a client that drops its connection can miss updates. Clients resync their state on reconnect. I picked Redis because we already used it for session caching.",
    ],
    stack: "Node.js, Redis pub/sub, Socket.io",
  },
  {
    id: "query",
    title: "10 seconds to 500 milliseconds",
    result: "95% faster on the slowest user-facing query",
    body: [
      "The rewards system shows live team and trading stats, and its query took 10 seconds. Moving from self-hosted Postgres in Docker to Neon brought it to 2 seconds. New indexes for the read-heavy workload took it to 500ms.",
    ],
    stack: "PostgreSQL, Neon",
  },
  {
    id: "auth",
    title: "Authentication from scratch",
    result: "Sessions, 2FA, impersonation and SSO",
    body: [
      "Session-based auth with sessions stored in PostgreSQL and cached in Redis, Google Authenticator 2FA, admin impersonation and role-based access control. Single sign-on into a separate PHP app uses short-lived JWTs.",
      "My take: JWTs are overused for login. Server-side sessions are simpler and you can revoke them. JWTs fit short handoffs between apps.",
    ],
    stack: "PostgreSQL, Redis, TOTP, JWT",
  },
] as const;

export const projects = [
  {
    title: "Make Your Resume",
    description:
      "A resume builder with a live preview as you type, email and password sign-in, and client-side templates.",
    stack: "Next.js, TypeScript, Tailwind CSS",
    live: "https://myr.jeetgr.dev",
    github: "https://github.com/jeetgr/makeyourresume",
    image: "/projects/make-your-resume.webp",
    imageWidth: 1921,
    imageHeight: 1081,
  },
  {
    title: "Promptopia",
    description:
      "A prompt-sharing app with server-side rendering, sign-in and protected routes for creating and managing your own prompts.",
    stack: "Next.js",
    live: "https://promptopia.jeetgr.dev",
    github: "https://github.com/jeetgr/promptopia",
    image: "/projects/promptopia.webp",
    imageWidth: 1921,
    imageHeight: 1081,
  },
] as const;
