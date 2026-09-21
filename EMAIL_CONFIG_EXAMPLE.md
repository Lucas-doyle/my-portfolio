# Email Configuration

This project uses Resend for email delivery. The contact API fails closed:
it returns HTTP 503 unless both `RESEND_API_KEY` and `EMAIL_TO` are set.
Missing config is never treated as a successful send.

## Setup Steps

1. **Create a Resend account** at https://resend.com/signup
2. **Get your API key** from the Resend dashboard
3. **Create `.env.local` file** in the project root with:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxx
   EMAIL_FROM=onboarding@resend.dev
   EMAIL_TO=bruno.silva.94410@gmail.com
   ```
4. Restart the Next.js dev server so it picks up the new variables

## Getting Started with Resend

1. Sign up at https://resend.com/signup
2. Navigate to API Keys in the dashboard
3. Create a new API key
4. For testing, you can use the default `onboarding@resend.dev` sender
5. Until you verify your own domain, Resend only delivers to the email
   on your Resend account
6. For production, verify your own domain in Resend and set `EMAIL_FROM`
   to an address on that domain

## Environment Variables

- `RESEND_API_KEY` (required): Your Resend API key
- `EMAIL_TO` (required): Inbox that should receive portfolio messages
- `EMAIL_FROM` (optional): Sender address. Defaults to
  `onboarding@resend.dev` for testing

## Abuse protection

- Repeat posts from the same IP are limited to 5 every 10 minutes (HTTP 429)
- The form includes a hidden honeypot field. Filled honeypots get HTTP 200
  and no email is sent

## Attachments

The contact form accepts optional files through Resend attachments:

- Up to 3 files
- 5MB per file
- Images (JPEG, PNG, WebP, GIF), PDF, and plain text

## Important

The `.env.local` file is already in `.gitignore` for security. Never commit
your API keys.
