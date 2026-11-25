export const experience = [
  {
    id: "zanthium-fullstack",
    role: "Full Stack Developer",
    company: "Zanthium Technosoft",
    location: "Rudrapur, Uttarakhand",
    period: "Oct 2024 to now",
    summary:
      "One of two engineers on trading software with 50k+ monthly active users, across frontend, backend and infrastructure.",
    points: [
      "Split the core engine out of the API so the API scales horizontally, with live updates over Redis pub/sub and Socket.io",
      "Cut the slowest user-facing query from 10s to 500ms",
      "Built session auth from scratch with 2FA, admin impersonation, role-based access and SSO into a PHP app",
      "Built data-dense React screens: virtualized tables, multi-step forms and live stats",
      "Shipped an AI support chatbot on the OpenAI API that answers FAQs and looks up account data",
      "Integrated payment gateways with webhooks, and built background jobs, cron tasks and BullMQ queues",
      "Cut hosting costs 20–30% by moving from DigitalOcean to a VPS and replacing Nginx with Caddy",
    ],
  },
  {
    id: "zanthium-php",
    role: "PHP Developer",
    company: "Zanthium Technosoft",
    location: "Rudrapur, Uttarakhand",
    period: "Jun 2024 to Oct 2024",
    summary:
      "Built and maintained PHP backend services and REST APIs, then took on React work and moved into the full-stack role within three months.",
    points: [],
  },
] as const;

export const education = [
  {
    degree: "Master of Computer Applications",
    school: "Graphic Era Deemed to be University",
    period: "2025 to 2027, in progress",
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "Kumaun University",
    period: "2021 to 2024",
  },
] as const;
