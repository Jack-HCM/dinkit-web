import { emailHeading, emailLayout, emailParagraph } from "./layout";

export function waitlistConfirmationEmail() {
  const subject = "You're on the list — Dink'It";

  const text = `You're in.

Thanks for signing up for early access to Dink'It. We'll email you as soon as beta invites open.

In the meantime, if you have thoughts on what you want a golf app to do that others don't, just reply to this email — we read everything.

— The Dink'It team

If you didn't sign up for this, you can ignore this email.`;

  const html = emailLayout(
    [
      emailHeading("You're on the list"),
      emailParagraph(
        "Thanks for signing up for early access to Dink'It. We'll email you as soon as beta invites open."
      ),
      emailParagraph(
        "In the meantime, if you have thoughts on what you want a golf app to do that others don't, just reply to this email &mdash; we read everything."
      ),
      emailParagraph("If you didn't sign up for this, you can ignore this email.", {
        muted: true,
        last: true,
      }),
    ].join("")
  );

  return { subject, text, html };
}
