"use client";

import { useActionState } from "react";
import { joinWaitlist, initialWaitlistState } from "@/app/actions";

export function WaitlistForm() {
  const [state, formAction, pending] = useActionState(
    joinWaitlist,
    initialWaitlistState
  );

  if (state.status === "success") {
    return (
      <p
        role="status"
        aria-live="polite"
        className="rounded-full border border-[#2f6b48]/30 bg-[#2f6b48]/10 px-5 py-3 text-sm font-medium text-[#1f4a32]"
      >
        {state.message}
      </p>
    );
  }

  return (
    <form
      action={formAction}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-2"
      noValidate
    >
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        placeholder="you@example.com"
        autoComplete="email"
        className="w-full flex-1 rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-[#1d241f] placeholder:text-black/35 outline-none focus:border-[#2f6b48] focus:ring-2 focus:ring-[#2f6b48]/20"
      />
      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-[#1f4a32] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#173a27] disabled:opacity-60"
      >
        {pending ? "Joining…" : "Join the waitlist"}
      </button>
      {state.status === "error" && (
        <p role="alert" className="basis-full text-sm text-[#ab4127]">
          {state.message}
        </p>
      )}
    </form>
  );
}
