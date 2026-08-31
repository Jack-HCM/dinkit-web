import type { Metadata } from "next";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Login",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center gap-6 bg-[#347e55] px-6 py-20">
      <h1 className="text-[28px] font-medium text-white [font-family:var(--font-space-grotesk)]">
        Dink&apos;It Admin
      </h1>
      <LoginForm />
    </div>
  );
}
