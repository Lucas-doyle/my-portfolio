# Email Configuration

This project uses Resend for email delivery. To enable email functionality:

## Setup Steps

1. **Create a Resend account** at https://resend.com/signup
2. **Get your API key** from the Resend dashboard
3. **Create `.env.local` file** in the project root with:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxx
   EMAIL_FROM=onboarding@resend.dev
   EMAIL_TO=bruno.silva.94410@gmail.com
   ```

## Getting Started with Resend

1. Sign up at https://resend.com/signup
2. Navigate to API Keys in the dashboard
3. Create a new API key
4. For testing, you can use the default `onboarding@resend.dev` sender
5. For production, verify your own domain in Resend

## Environment Variables

- `RESEND_API_KEY`: Your Resend API key
- `EMAIL_FROM`: Sender email (use onboarding@resend.dev for testing)
- `EMAIL_TO`: Destination email (bruno.silva.94410@gmail.com)

## Important

The `.env.local` file is already in `.gitignore` for security. Never commit your API keys!