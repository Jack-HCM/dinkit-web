import { emailHeading, emailLayout, emailParagraph } from "./layout";

export function betaSignupNotificationEmail(name: string, email: string) {
  const subject = `New beta tester: ${name}`;

  const text = `${name} just signed up for beta testing.

Email: ${email}`;

  const html = emailLayout(
    [
      emailHeading("New beta tester signup"),
      emailParagraph(`<strong>${name}</strong> just signed up and opted in to beta test.`),
      emailParagraph(email, { last: true }),
    ].join("")
  );

  return { subject, text, html };
}
