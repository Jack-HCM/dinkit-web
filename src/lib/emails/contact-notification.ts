export function contactNotificationEmail(name: string, email: string, message: string) {
  const subject = `New contact message: ${name}`;

  const text = `${name} sent a message via the Contact / Feature Request form.

Email: ${email}

Message:
${message}`;

  const html = `
  <div style="background:#f6f4ef;padding:32px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1d241f;">
    <div style="max-width:480px;margin:0 auto;background:#ffffff;border:1px solid #ddd7c9;border-radius:12px;padding:32px;">
      <p style="font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#2f6b48;margin:0 0 16px;">Dink'It</p>
      <h1 style="font-family:Georgia,'Iowan Old Style','Palatino Linotype','Book Antiqua',serif;font-size:22px;line-height:1.3;margin:0 0 16px;">New contact message</h1>
      <p style="font-size:15px;line-height:1.6;margin:0 0 8px;color:#3a4038;">
        <strong>${name}</strong> &mdash; ${email}
      </p>
      <p style="font-size:15px;line-height:1.6;margin:16px 0 0;color:#3a4038;white-space:pre-wrap;">
        ${message}
      </p>
    </div>
  </div>`;

  return { subject, text, html };
}
