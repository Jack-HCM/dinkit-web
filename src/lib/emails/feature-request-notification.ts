import { emailHeading, emailLayout, emailParagraph } from "./layout";

export function featureRequestNotificationEmail(name: string, email: string, message: string) {
  const subject = `New feature request: ${name}`;

  const text = `${name} sent a feature request via the Roadmap page.

Email: ${email}

Message:
${message}`;

  const html = emailLayout(
    [
      emailHeading("New feature request"),
      emailParagraph(`<strong>${name}</strong> &mdash; ${email}`),
      emailParagraph(message, { pre: true, last: true }),
    ].join("")
  );

  return { subject, text, html };
}
