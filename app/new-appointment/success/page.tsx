"use client";

import { animationData, doctors, logo } from "@/assets";
import DoctorTile from "@/lib/components/DoctorTile";
import { Separator } from "@/lib/components/ui/separator";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";

import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function SuccessApointment() {
  return (
    <main className="flex h-dvh w-dvw items-center justify-center">
      <div className="flex h-full w-full max-w-[1080px] flex-col items-center justify-start gap-y-2 p-4 py-16 md:px-14 lg:max-h-[800px]">
        <Image className="mb-16" src={logo} alt="logo" />
        <div className="flex w-full flex-col items-center space-y-4">
          <Lottie width={150} height={150} options={defaultOptions} />
          <p className="w-4/5 text-balance text-center text-[22px] font-bold md:w-[27rem] md:text-3xl">
            Your{" "}
            <span className="border-b-2 border-dotted border-b-primaryGreen text-primaryGreen">
              appointment request
            </span>{" "}
            has been successfully submitted!
          </p>
          <p className="text-center text-xs text-n-1">
            We&apos;ll be in touch shortly to confirm.
          </p>
        </div>
        <div className="mt-4 flex w-full flex-col items-center">
          <Separator className="w-5/6 bg-n-1 lg:w-4/5" />
          <div className="flex w-full flex-col items-center justify-center gap-x-4 gap-y-4 p-4 md:flex-row">
            <p className="text-n-1">Requested appountment details:</p>
            <DoctorTile
              padding="px-4 py-5"
              className="!w-fit"
              img={doctors[0].imgPath}
              name={doctors[0].name}
            />
            <div className="flex items-center gap-x-2">
              <CalendarIcon className="aspect-square w-5" />
              <p className="text-n-1">23 June 2024 - 5:00 PM</p>
            </div>
          </div>
          <Separator className="w-4/5 bg-n-1" />
        </div>
      </div>
    </main>
  );
}
