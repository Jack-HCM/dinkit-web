"use client";

import { useActionState } from "react";
import { joinWaitlist } from "@/app/actions";
import { initialWaitlistState } from "@/lib/waitlist-state";

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
        className="rounded-lg border border-[#87ffad]/40 bg-white/10 px-5 py-4 text-center text-[15px] font-medium text-white [font-family:var(--font-42dot-sans)]"
      >
        {state.message}
      </p>
    );
  }

  return (
    <form
      action={formAction}
      className="flex w-full max-w-[503px] flex-col items-center gap-[22px]"
      noValidate
    >
      <div className="flex w-full flex-col gap-[22px] sm:flex-row sm:gap-4">
        <label htmlFor="name" className="sr-only">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          autoComplete="name"
          className="h-[52px] w-full shrink-0 rounded-[8px] bg-white px-[19px] text-[18px] text-[#1d241f] placeholder:text-[#969696] outline-none [font-family:var(--font-42dot-sans)] focus:ring-2 focus:ring-[#87ffad] sm:flex-1"
        />

        <label htmlFor="email" className="sr-only">
          Your email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Your email address"
          autoComplete="email"
          className="h-[52px] w-full shrink-0 rounded-[8px] bg-white px-[19px] text-[18px] text-[#1d241f] placeholder:text-[#969696] outline-none [font-family:var(--font-42dot-sans)] focus:ring-2 focus:ring-[#87ffad] sm:flex-1"
        />
      </div>

      <label className="flex items-center gap-3 text-[14px] text-white [font-family:var(--font-42dot-sans)]">
        <input
          type="checkbox"
          name="wantsBetaTesting"
          className="size-[23px] shrink-0 cursor-pointer rounded-[6px] border-2 border-[#87ffad] accent-[#87ffad]"
        />
        I would like to beta test the app
      </label>

      <button
        type="submit"
        disabled={pending}
        className="h-[47px] rounded-[4px] bg-[#56c186] px-[16px] text-[18px] font-medium text-white transition-colors [font-family:var(--font-space-grotesk)] hover:bg-[#4aae76] disabled:opacity-60"
      >
        {pending ? "Joining…" : "Join waitlist"}
      </button>

      {state.status === "error" && (
        <p
          role="alert"
          className="text-center text-sm text-[#ffb4a1] [font-family:var(--font-42dot-sans)]"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
