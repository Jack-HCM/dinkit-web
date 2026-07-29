# dinkit-web

Holding page for [Dink'It](https://dinkitgolf.com) — waitlist/beta signup, ahead of the full marketing site.

Next.js (App Router) + Tailwind, Prisma/Neon for storage, Resend for the confirmation email. The waitlist form is a single Server Action (`src/app/actions.ts`) — no separate API layer.

## Stack

- **Framework:** Next.js 16, TypeScript, Tailwind CSS 4
- **Database:** [Neon](https://neon.tech) Postgres via Prisma (`@prisma/adapter-neon` — serverless-friendly, no connection pooling issues on Vercel)
- **Email:** [Resend](https://resend.com) for the waitlist confirmation email
- **Hosting:** Vercel

## Local setup

```bash
npm install
cp .env.example .env
# fill in DATABASE_URL, RESEND_API_KEY, RESEND_FROM_EMAIL
npx prisma generate
npx prisma migrate dev --name init   # creates the waitlist_signups table
npm run dev
```

The confirmation email only sends if `RESEND_API_KEY` is set — locally you can leave it blank and signups still work (just no email).

## Deploying

1. **Neon:** create a project, copy the pooled connection string into `DATABASE_URL`.
2. **Resend:** verify the sending domain (`dinkitgolf.com` or a subdomain like `mail.dinkitgolf.com`) under Domains, then create an API key.
3. **Vercel:** import this repo, set `DATABASE_URL`, `RESEND_API_KEY`, `RESEND_FROM_EMAIL` as env vars, deploy.
4. Run `npx prisma migrate deploy` against the production `DATABASE_URL` once (locally, or as a one-off) to create the table before the first real signup.
5. Attach the `dinkitgolf.com` domain in Vercel project settings.

## Waitlist data

Signups land in the `waitlist_signups` table (`id`, `email`, `source`, `createdAt`). Query it directly via `psql`/Neon's SQL editor, or add an export script later — there's no admin UI yet since this is just the holding page.
