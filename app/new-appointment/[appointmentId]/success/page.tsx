import { getLastAppointment } from "@/actions/appointmentsActions";
import { animationSuccess, logo } from "@/assets";
import DoctorTile from "@/lib/components/DoctorTile";
import { Button } from "@/lib/components/ui/button";
import { Separator } from "@/lib/components/ui/separator";
import { useLastAppointment } from "@/lib/features/dashboard/hooks/useLastAppointment";
import { formatDate } from "@/lib/utils/index";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function SuccessApointment({
  params: { appointmentId },
}: {
  params: { appointmentId: string };
}) {
  const { doctors, new_appointments: appointment } =
    await getLastAppointment(appointmentId);

  if (!doctors || !appointment) return notFound();

  return (
    <main className="flex h-dvh w-dvw items-center justify-center">
      <div className="flex h-full w-full max-w-[1080px] flex-col items-center justify-start gap-y-2 p-4 py-16 md:px-14 lg:max-h-[800px]">
        <Image className="mb-16" src={logo} alt="logo" />
        <div className="flex w-full flex-col items-center space-y-4">
          <Image
            src={animationSuccess}
            width={200}
            height={200}
            alt="animation success"
            unoptimized
          />
          <p className="text-center text-[22px] font-bold md:w-[28rem] md:text-3xl">
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
              img={doctors?.imgPath || ""}
              name={doctors?.doctorName || "dr. dr "}
            />
            <div className="flex items-center gap-x-2">
              <CalendarIcon className="aspect-square w-5" />
              <p className="text-n-1">
                {formatDate(appointment.expectedDate || "")}
              </p>
            </div>
          </div>
          <Separator className="w-4/5 bg-n-1" />
          <div>
            <Button className="mt-4 bg-primaryGreen" asChild>
              <Link href="/new-appointment">New appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
