"use client";

import { useActionState } from "react";
import { submitFeatureRequest } from "@/app/actions";
import { initialFeatureRequestState } from "@/lib/feature-request-state";

const inputClass =
  "h-[52px] w-full rounded-[8px] border border-[#cfcfcf] bg-white px-[19px] text-[16px] text-[#1d241f] placeholder:text-[#969696] outline-none [font-family:var(--font-42dot-sans)] focus:ring-2 focus:ring-[#87ffad]";

export function FeatureRequestForm() {
  const [state, formAction, pending] = useActionState(
    submitFeatureRequest,
    initialFeatureRequestState
  );

  if (state.status === "success") {
    return (
      <p
        role="status"
        aria-live="polite"
        className="rounded-[8px] border border-[#347e55]/30 bg-[#347e55]/5 px-5 py-4 text-center text-[15px] font-medium text-[#1d241f] [font-family:var(--font-42dot-sans)]"
      >
        {state.message}
      </p>
    );
  }

  return (
    <form action={formAction} className="flex w-full flex-col gap-4" noValidate>
      <div className="flex flex-col gap-4 sm:flex-row">
        <label htmlFor="feature-request-name" className="sr-only">
          Your name
        </label>
        <input
          id="feature-request-name"
          name="name"
          type="text"
          required
          placeholder="Your Name"
          autoComplete="name"
          className={`${inputClass} sm:flex-1`}
        />

        <label htmlFor="feature-request-email" className="sr-only">
          Your email
        </label>
        <input
          id="feature-request-email"
          name="email"
          type="email"
          required
          placeholder="Your Email"
          autoComplete="email"
          className={`${inputClass} sm:flex-1`}
        />
      </div>

      <label htmlFor="feature-request-message" className="sr-only">
        Your message
      </label>
      <textarea
        id="feature-request-message"
        name="message"
        required
        placeholder="Your Message"
        rows={4}
        className="w-full resize-none rounded-[8px] border border-[#cfcfcf] bg-white px-[19px] py-[13px] text-[16px] text-[#1d241f] placeholder:text-[#969696] outline-none [font-family:var(--font-42dot-sans)] focus:ring-2 focus:ring-[#87ffad]"
      />

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={pending}
          className="h-[47px] rounded-[4px] bg-[#56c186] px-[16px] text-[18px] font-medium text-white transition-colors [font-family:var(--font-space-grotesk)] hover:bg-[#4aae76] disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send message"}
        </button>
      </div>

      {state.status === "error" && (
        <p
          role="alert"
          className="text-center text-sm text-[#c0392b] [font-family:var(--font-42dot-sans)]"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
