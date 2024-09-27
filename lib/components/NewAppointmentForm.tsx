"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import newAppointmentSchema, {
  newAppointmentType,
} from "../schemas/newAppointmentSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./ui/form";
import CustomSelectGroup from "./ui/CustomSelectGroup";
import { doctors } from "@/assets";
import DoctorTile from "./DoctorTile";
import { SelectItem } from "./ui/select";
import CustomFormField from "./ui/CustomFormField";
import CustomCalendar from "./ui/CustomCalendar";
import { Button } from "./ui/button";
import DoctorSelectGroup from "./DoctorSelectGroup";
import { useNewAppointment } from "../features/dashboard/hooks/useNewAppointment";
import { useRouter } from "next/navigation";

export default function NewAppointmentForm() {
  const form = useForm<newAppointmentType>({
    resolver: zodResolver(newAppointmentSchema),
    defaultValues: {
      additionalComments: "",
      doctorId: "",
      expectedDate: new Date(),
      reasonOfAppointment: "",
    },
  });

  const router = useRouter();

  const { mutate, isPending } = useNewAppointment();

  const { handleSubmit, control } = form;

  const onSubmit: SubmitHandler<newAppointmentType> = (values) => {
    mutate(values, {
      onSuccess: (res) => {
        const appointmentId = res.newAppointment.id;
        router.replace(`/new-appointment/${appointmentId}/success`);
      },
    });
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <DoctorSelectGroup control={form.control} />
        <div className="flex flex-col items-center gap-x-6 gap-y-4 sm:flex-row">
          <CustomFormField
            control={control}
            name="reasonOfAppointment"
            placeholder="Annual monthly check-up"
            label="Reason for appointment"
            textArea
          />

          <CustomFormField
            control={control}
            name="additionalComments"
            label="Additional comments/notes"
            placeholder="ex: Prefer afternoon appointments, if possible"
            textArea
          />
        </div>

        <CustomCalendar
          label="Expected appointment date"
          name="expectedDate"
          form={form}
          placeholder="Select your appointment date"
          disabled
        />
        <Button disabled={isPending} className="w-full bg-primaryGreen">
          Submit and continue
        </Button>
      </form>
    </Form>
  );
}
