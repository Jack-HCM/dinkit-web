"use client";

import { useActionState } from "react";
import { adminLogin } from "../actions";
import { initialAdminLoginState } from "@/lib/admin-login-state";

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(
    adminLogin,
    initialAdminLoginState
  );

  return (
    <form action={formAction} className="flex w-full max-w-[360px] flex-col gap-4">
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        autoFocus
        className="rounded-[8px] border border-[#dedede] bg-white px-4 py-3 text-[16px] text-[#212121] placeholder-[#969696] [font-family:var(--font-42dot-sans)] focus:border-[#347e55] focus:outline-none"
      />
      {state.status === "error" && (
        <p className="text-[14px] text-[#ff6b6b] [font-family:var(--font-42dot-sans)]">
          {state.message}
        </p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="rounded-[8px] bg-[#87ffad] px-4 py-3 text-[16px] font-bold text-[#133422] transition-opacity hover:opacity-90 disabled:opacity-60 [font-family:var(--font-space-grotesk)]"
      >
        {isPending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
