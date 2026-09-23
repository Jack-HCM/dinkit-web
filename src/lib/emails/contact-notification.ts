import { emailHeading, emailLayout, emailParagraph } from "./layout";

export function contactNotificationEmail(name: string, email: string, message: string) {
  const subject = `New contact message: ${name}`;

  const text = `${name} sent a message via the Contact form.

Email: ${email}

Message:
${message}`;

  const html = emailLayout(
    [
      emailHeading("New contact message"),
      emailParagraph(`<strong>${name}</strong> &mdash; ${email}`),
      emailParagraph(message, { pre: true, last: true }),
    ].join("")
  );

  return { subject, text, html };
}
