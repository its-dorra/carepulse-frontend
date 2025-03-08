import { logo } from "@/assets";
import AdminButton from "@/lib/features/users/components/admin-button";
import LoginForm from "@/lib/features/users/components/LoginForm";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login to Carepulse",
  description: "Login page of CarePulse",
};

export default function Login() {
  return (
    <div className="flex h-full w-full flex-col justify-between px-16 py-8 lg:w-1/2">
      <Image className="object-cover" src={logo} alt="logo" />
      <div className="flex flex-col gap-y-8">
        <div className="space-y-4">
          <p className="text-3xl">Hi there, ....</p>
          <p className="text-sm text-n-1">Get Started with Appointments.</p>
        </div>
        <LoginForm />
      </div>
      <div className="flex items-center gap-x-1">
        <p className="text-xs text-white/70">Don&apos;t have and account?</p>
        <Link className="text-xs text-primaryGreen" href="/signup">
          Create an account
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-n-1">©carepulse copyright</p>
        <AdminButton />
      </div>
    </div>
  );
}
