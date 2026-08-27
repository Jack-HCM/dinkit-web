import { Resend } from "resend";

const globalForResend = globalThis as unknown as {
  resend: Resend | undefined;
};

export const resend =
  globalForResend.resend ??
  (process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : undefined);

if (process.env.NODE_ENV !== "production") globalForResend.resend = resend;

export const WAITLIST_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "Dink'It <hello@dinkitgolf.com>";

export const BETA_NOTIFICATION_EMAIL = "jack@dinkitgolf.com";
