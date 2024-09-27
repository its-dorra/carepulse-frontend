import { logo } from "@/assets";
import SignUpForm from "@/lib/features/users/components/SignUpForm";
import Image from "next/image";

export default function SignUp() {
  return (
    <div className="flex h-full w-full flex-col justify-between px-16 py-8 lg:w-1/2">
      <Image className="object-cover" src={logo} alt="logo" />
      <div className="flex flex-col gap-y-8">
        <div className="space-y-4">
          <p className="text-3xl">Hi there, ....</p>
          <p className="text-sm text-n-1">Get Started with Appointments.</p>
        </div>
        <SignUpForm />
      </div>

      <p className="text-n-1">©carepulse copyright</p>
    </div>
  );
}
