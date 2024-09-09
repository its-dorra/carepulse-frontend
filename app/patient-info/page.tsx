"use client";

import { logo, patientInfo } from "@/assets";
import PatientInfoForm from "@/lib/components/PatienInfoForm";

import Image from "next/image";

export default function PatientInfo() {
  return (
    <main className="h-dvh w-full max-w-[1180px] items-start justify-center lg:flex">
      <div className="h-full w-full space-y-4 overflow-y-auto px-14 py-16">
        <Image className="mb-16 object-cover" src={logo} alt="logo" />
        <div className="flex flex-col gap-y-8">
          <div className="space-y-2">
            <p className="text-3xl">Welcome 👋</p>
            <p className="text-xs text-n-1">Let us know more about yourself</p>
          </div>
          <PatientInfoForm />
        </div>
      </div>
      <div className="sticky right-0 top-0 hidden h-[720px] max-h-full w-[350px] pt-16 lg:block">
        <Image
          className="h-full w-full rounded-lg object-cover"
          src={patientInfo}
          alt="patient info"
        />
      </div>
    </main>
  );
}
