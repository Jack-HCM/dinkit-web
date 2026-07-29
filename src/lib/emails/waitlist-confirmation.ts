export function waitlistConfirmationEmail() {
  const subject = "You're on the list — Dink'It";

  const text = `You're in.

Thanks for signing up for early access to Dink'It. We'll email you as soon as beta invites open.

In the meantime, if you have thoughts on what you want a golf app to do that others don't, just reply to this email — we read everything.

— The Dink'It team

If you didn't sign up for this, you can ignore this email.`;

  const html = `
  <div style="background:#f6f4ef;padding:32px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1d241f;">
    <div style="max-width:480px;margin:0 auto;background:#ffffff;border:1px solid #ddd7c9;border-radius:12px;padding:32px;">
      <p style="font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#2f6b48;margin:0 0 16px;">Dink'It</p>
      <h1 style="font-family:Georgia,'Iowan Old Style','Palatino Linotype','Book Antiqua',serif;font-size:22px;line-height:1.3;margin:0 0 16px;">You're on the list</h1>
      <p style="font-size:15px;line-height:1.6;margin:0 0 16px;color:#3a4038;">
        Thanks for signing up for early access to Dink'It. We'll email you as soon as beta invites open.
      </p>
      <p style="font-size:15px;line-height:1.6;margin:0 0 24px;color:#3a4038;">
        In the meantime, if you have thoughts on what you want a golf app to do that others don't, just reply to this email &mdash; we read everything.
      </p>
      <p style="font-size:13px;line-height:1.6;color:#8a9086;margin:0;">
        If you didn't sign up for this, you can ignore this email.
      </p>
    </div>
  </div>`;

  return { subject, text, html };
}
