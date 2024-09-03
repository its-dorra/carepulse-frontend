import { logo, onboardingSignUpPic } from "@/assets";
import LoginForm from "@/lib/components/ui/LoginForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full max-h-[800px] w-full max-w-[980px] items-center justify-center lg:flex">
      <div className="flex h-full w-full flex-col justify-between px-16 py-8 lg:w-1/2">
        <Image className="object-cover" src={logo} alt="logo" />
        <div className="flex flex-col gap-y-8">
          <div className="space-y-4">
            <p className="text-3xl">Hi there, ....</p>
            <p className="text-sm text-n-1">Get Started with Appointments.</p>
          </div>
          <LoginForm />
        </div>
        <p className="text-n-1">©carepulse copyright</p>
      </div>
      <div className="hidden h-full w-1/2 lg:block">
        <Image
          className="h-full w-full rounded-xl object-cover"
          src={onboardingSignUpPic}
          alt="onboarding picture"
        />
      </div>
    </main>
  );
}
