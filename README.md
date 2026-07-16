# jeetgr.dev

My portfolio site.

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Runs on http://localhost:4000.

## Env

See `.env.example`. Needs Resend + Upstash Redis for the contact form.

## Useful commands

- `pnpm dev` — local dev
- `pnpm build` — production build
- `pnpm check` — lint + format
- `pnpm email:dev` — preview contact email template

## Content

Edit `src/data/` for projects, skills, experience. Section copy is in `src/components/sections/`.
