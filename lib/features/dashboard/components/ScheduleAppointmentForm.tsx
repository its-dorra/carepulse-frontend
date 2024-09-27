"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import ScheduleAppointmentSchema, {
  ScheduleAppointment,
} from "@/lib/schemas/scheduleAppointmentSchema";
import { AppointmentsInterface, Doctor } from "@/lib/types/AppointmentsType";

import { Form } from "@/lib/components/ui/form";

import CustomCalendar from "@/lib/components/ui/CustomCalendar";
import CustomFormField from "@/lib/components/ui/CustomFormField";
import { Button } from "@/lib/components/ui/button";
import { useDoctors } from "../hooks/useDoctors";
import { useScheduleAppointment } from "../hooks/useScheduleAppointment";
import DoctorSelectGroup from "@/lib/components/DoctorSelectGroup";

export default function ScheduleAppointmentForm({
  setIsOpen,
  appointment,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  appointment: AppointmentsInterface;
}) {
  const form = useForm<ScheduleAppointment>({
    resolver: zodResolver(ScheduleAppointmentSchema),
    defaultValues: {
      doctorId: appointment.doctor.id.toString(),
      reasonForAppointment: appointment.reasonOfAppointment,
      expectedDate: new Date(appointment.expectedDate),
    },
  });

  const { mutate, isPending: isLoading } = useScheduleAppointment();

  const { handleSubmit, control } = form;

  const onSubmit: SubmitHandler<ScheduleAppointment> = ({
    doctorId,
    expectedDate,
    reasonForAppointment,
  }) => {
    mutate(
      {
        expectedDate,
        reasonOfAppointment: reasonForAppointment,
        doctorId,
        id: appointment.id,
      },
      {
        onSuccess: () => {
          setIsOpen(false);
        },
      },
    );
  };

  return (
    <Form {...form}>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <DoctorSelectGroup control={form.control} />
        <CustomFormField
          textArea
          label="Reason for appointment"
          placeholder="ex: Annual monthly check-up"
          control={control}
          name="reasonForAppointment"
        />
        <CustomCalendar
          label="Expected appointment date"
          placeholder="Select your appointment date"
          form={form}
          name="expectedDate"
          disabled
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primaryGreen"
        >
          Schedule appointment
        </Button>
      </form>
    </Form>
  );
}
