"use server";

import { z } from "zod";
import { db } from "@/lib/db";
import { resend, WAITLIST_FROM_EMAIL } from "@/lib/resend";
import { waitlistConfirmationEmail } from "@/lib/emails/waitlist-confirmation";
import type { WaitlistState } from "@/lib/waitlist-state";

const waitlistSchema = z.object({
  name: z.string().trim().min(1, "Enter your name"),
  email: z.string().trim().min(1, "Enter your email").email("Enter a valid email"),
});

export async function joinWaitlist(
  _prevState: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const parsed = waitlistSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Check your details and try again",
    };
  }

  const name = parsed.data.name;
  const email = parsed.data.email.toLowerCase();
  const wantsBetaTesting = formData.get("wantsBetaTesting") === "on";

  try {
    await db.waitlistSignup.create({ data: { name, email, wantsBetaTesting } });
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

  if (resend) {
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
