// Shared HTML shell for dinkit-web's transactional emails — matches the
// app's real brand tokens (badge-mark logo, #347e55 green, sans-serif type)
// so these read as coming from the same product as the app.
const BRAND = {
  bg: "#f6f4ef",
  cardBorder: "#ddd7c9",
  green: "#347e55",
  text: "#141414",
  muted: "#8a9086",
};

const LOGO_URL = "https://dinkitgolf.com/images/email-logo.png";

export function emailLayout(bodyHtml: string): string {
  return `
  <div style="background:${BRAND.bg};padding:32px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${BRAND.text};">
    <div style="max-width:480px;margin:0 auto;background:#ffffff;border:1px solid ${BRAND.cardBorder};border-radius:12px;padding:32px;">
      <img src="${LOGO_URL}" width="40" height="40" alt="Dink'It" style="display:block;width:40px;height:40px;border-radius:9px;margin:0 0 20px;" />
      ${bodyHtml}
    </div>
  </div>`;
}

export function emailHeading(text: string): string {
  return `<h1 style="font-size:20px;font-weight:700;line-height:1.3;margin:0 0 16px;color:${BRAND.green};">${text}</h1>`;
}

export function emailParagraph(
  html: string,
  opts?: { muted?: boolean; last?: boolean; pre?: boolean }
): string {
  const color = opts?.muted ? BRAND.muted : BRAND.text;
  const fontSize = opts?.muted ? "13px" : "15px";
  const margin = opts?.last ? "0" : "0 0 16px";
  const whiteSpace = opts?.pre ? "white-space:pre-wrap;" : "";
  return `<p style="font-size:${fontSize};line-height:1.6;margin:${margin};color:${color};${whiteSpace}">${html}</p>`;
}
