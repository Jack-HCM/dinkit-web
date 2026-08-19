"use client";

import { useActionState, useState } from "react";
import { joinWaitlist } from "@/app/actions";
import { initialWaitlistState } from "@/lib/waitlist-state";

export function WaitlistForm({
  theme = "dark",
  collapsible = false,
}: {
  theme?: "dark" | "light";
  collapsible?: boolean;
}) {
  const [state, formAction, pending] = useActionState(
    joinWaitlist,
    initialWaitlistState
  );
  const [open, setOpen] = useState(!collapsible);

  if (state.status === "success") {
    return (
      <p
        role="status"
        aria-live="polite"
        className={`rounded-lg border px-5 py-4 text-center text-[15px] font-medium [font-family:var(--font-42dot-sans)] ${
          theme === "light"
            ? "border-[#87ffad]/60 bg-[#347e55]/5 text-[#1d241f]"
            : "border-[#87ffad]/40 bg-white/10 text-white"
        }`}
      >
        {state.message}
      </p>
    );
  }

  return (
    <form
      action={formAction}
      className="flex w-full max-w-[503px] flex-col items-center"
      noValidate
    >
      {/* Collapsed to a 0fr row (clipped by the overflow-hidden inner div)
          until opened — animates smoothly since fr units are transitionable,
          unlike height:auto. The button below shares the same duration/delay
          via its margin-top so it reads as one continuous push-down. */}
      <div
        className={`grid w-full transition-[grid-template-rows] duration-500 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`flex w-full flex-col gap-[22px] pb-[22px] transition-opacity duration-500 sm:flex-row sm:gap-4 ${
              open ? "opacity-100 delay-150" : "opacity-0"
            }`}
          >
            <label htmlFor="name" className="sr-only">
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required={open}
              placeholder="Your name"
              autoComplete="name"
              className="h-[52px] w-full shrink-0 rounded-[8px] border border-[#dedede] bg-white px-[19px] text-[18px] text-[#1d241f] placeholder:text-[#969696] outline-none [font-family:var(--font-42dot-sans)] focus:ring-2 focus:ring-[#87ffad] sm:flex-1"
            />

            <label htmlFor="email" className="sr-only">
              Your email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required={open}
              placeholder="Your email address"
              autoComplete="email"
              className="h-[52px] w-full shrink-0 rounded-[8px] border border-[#dedede] bg-white px-[19px] text-[18px] text-[#1d241f] placeholder:text-[#969696] outline-none [font-family:var(--font-42dot-sans)] focus:ring-2 focus:ring-[#87ffad] sm:flex-1"
            />
          </div>

          <label
            className={`flex items-center justify-center gap-3 pb-[22px] text-[14px] [font-family:var(--font-42dot-sans)] transition-opacity duration-500 ${
              theme === "light" ? "text-[#2d2d2d]" : "text-white"
            } ${open ? "opacity-100 delay-150" : "opacity-0"}`}
          >
            <input
              type="checkbox"
              name="wantsBetaTesting"
              className="size-[23px] shrink-0 cursor-pointer rounded-[6px] border-2 border-[#87ffad] accent-[#87ffad]"
            />
            I would like to beta test the app
          </label>
        </div>
      </div>

      <button
        type={open ? "submit" : "button"}
        disabled={pending}
        onClick={
          open
            ? undefined
            : (e) => {
                e.preventDefault();
                setOpen(true);
              }
        }
        className="h-[47px] rounded-[4px] bg-[#56c186] px-[16px] text-[18px] font-medium text-white transition-colors [font-family:var(--font-space-grotesk)] hover:bg-[#4aae76] disabled:opacity-60"
      >
        {pending ? "Joining…" : "Join waitlist"}
      </button>

      {state.status === "error" && (
        <p
          role="alert"
          className="mt-[22px] text-center text-sm text-[#ffb4a1] [font-family:var(--font-42dot-sans)]"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
