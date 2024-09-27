import { getUser } from "@/actions/userActions";
import { onboardingSignInPic } from "@/assets";
import Image from "next/image";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function AuthLayout({ children }: PropsWithChildren) {
  const { user } = await getUser({});

  if (user?.role === "admin") return redirect("/dashboard");
  if (user?.role === "user" && user.status === "notRegistered")
    return redirect("/patient-info");
  if (user?.role === "user" && user.status === "registered")
    return redirect("/new-appointment");

  return (
    <main className="flex h-dvh w-dvw items-center justify-center">
      <div className="h-full max-h-[800px] w-full max-w-[1080px] items-center justify-center lg:flex">
        {children}
        <div className="hidden h-full w-1/2 lg:block">
          <Image
            className="h-full w-full rounded-xl object-cover"
            src={onboardingSignInPic}
            alt="onboarding picture"
          />
        </div>
      </div>
    </main>
  );
}
