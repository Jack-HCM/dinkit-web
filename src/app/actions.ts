"use server";

import { z } from "zod";
import { db } from "@/lib/db";
import { resend, WAITLIST_FROM_EMAIL } from "@/lib/resend";
import { waitlistConfirmationEmail } from "@/lib/emails/waitlist-confirmation";

const emailSchema = z.object({
  email: z.string().trim().min(1, "Enter your email").email("Enter a valid email"),
});

export type WaitlistState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const initialWaitlistState: WaitlistState = {
  status: "idle",
  message: "",
};

export async function joinWaitlist(
  _prevState: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const parsed = emailSchema.safeParse({ email: formData.get("email") });

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Enter a valid email",
    };
  }

  const email = parsed.data.email.toLowerCase();

  try {
    await db.waitlistSignup.create({ data: { email } });
  } catch (err: unknown) {
    const isDuplicate =
      typeof err === "object" &&
      err !== null &&
      "code" in err &&
      (err as { code?: string }).code === "P2002";

    if (!isDuplicate) {
      console.error("waitlist signup insert failed", err);
      return {
        status: "error",
        message: "Something went wrong. Please try again.",
      };
    }
    // Already on the list — fall through and treat as success (idempotent).
  }

  if (process.env.RESEND_API_KEY) {
    const { subject, text, html } = waitlistConfirmationEmail();
    try {
      await resend.emails.send({
        from: WAITLIST_FROM_EMAIL,
        to: email,
        subject,
        text,
        html,
      });
    } catch (err) {
      // Signup already succeeded — a failed confirmation email shouldn't block the user.
      console.error("waitlist confirmation email failed", err);
    }
  }

  return {
    status: "success",
    message: "You're on the list — check your inbox for confirmation.",
  };
}
