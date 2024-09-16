import { logo, onboardingSignUpPic } from "@/assets";
import AdminButton from "@/lib/features/users/components/admin-button";
import LoginForm from "@/lib/components/ui/LoginForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-dvh w-dvw items-center justify-center">
      <div className="h-full max-h-[800px] w-full max-w-[1080px] items-center justify-center lg:flex">
        <div className="flex h-full w-full flex-col justify-between px-16 py-8 lg:w-1/2">
          <Image className="object-cover" src={logo} alt="logo" />
          <div className="flex flex-col gap-y-8">
            <div className="space-y-4">
              <p className="text-3xl">Hi there, ....</p>
              <p className="text-sm text-n-1">Get Started with Appointments.</p>
            </div>
            <LoginForm />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-n-1">©carepulse copyright</p>
            <AdminButton />
          </div>
        </div>
        <div className="hidden h-full w-1/2 lg:block">
          <Image
            className="h-full w-full rounded-xl object-cover"
            src={onboardingSignUpPic}
            alt="onboarding picture"
          />
        </div>
      </div>
    </main>
  );
}
