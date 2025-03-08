import { logo, newAppointmentPic } from "@/assets";
import NewAppointmentForm from "@/lib/components/NewAppointmentForm";

import Image from "next/image";

export const metadata = {
  title: "New Appointment",
  description: "Request a new appointment",
};

export default function NewAppointment() {
  return (
    <main className="flex h-dvh w-dvw items-center justify-center">
      <div className="h-full max-h-[800px] w-full max-w-[1180px] items-start justify-center lg:flex">
        <div className="h-full w-full space-y-4 px-14 py-16">
          <Image className="mb-16 object-cover" src={logo} alt="logo" />
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-3xl">Hey there 👋</p>
              <p className="text-xs text-n-1">
                Request a new appointment in 10 seconds
              </p>
            </div>
            <NewAppointmentForm />
          </div>
        </div>
        <div className="sticky right-0 top-0 hidden h-[720px] max-h-full w-[350px] pt-16 lg:block">
          <Image
            className="h-full w-full rounded-lg object-cover"
            src={newAppointmentPic}
            alt="onboarding picture"
          />
        </div>
      </div>
    </main>
  );
}
