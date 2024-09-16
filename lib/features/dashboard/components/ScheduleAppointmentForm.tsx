"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import ScheduleAppointmentSchema, {
  ScheduleAppointment,
} from "@/lib/schemas/scheduleAppointmentSchema";
import { AppointmentsInterface, Doctor } from "@/lib/types/AppointmentsType";

import { RiSearchLine } from "react-icons/ri";
import { Form } from "@/lib/components/ui/form";
import CustomSelectGroup from "@/lib/components/ui/CustomSelectGroup";
import { doctors } from "@/assets";
import { SelectItem } from "@/lib/components/ui/select";
import DoctorTile from "@/lib/components/DoctorTile";
import CustomCalendar from "@/lib/components/ui/CustomCalendar";
import CustomFormField from "@/lib/components/ui/CustomFormField";
import { Button } from "@/lib/components/ui/button";
import { useDoctors } from "../hooks/useDoctors";
import { useScheduleAppointment } from "../hooks/useScheduleAppointment";

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
      doctorId: appointment.doctor.id,
      reasonForAppointment: appointment.reasonOfAppointment,
      expectedDate: new Date(appointment.expectedDate),
    },
  });

  const { mutate, isPending: isLoading } = useScheduleAppointment();

  const { data, isPending } = useDoctors();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  console.log(errors);

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
        id: `${appointment.id}`,
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
        <CustomSelectGroup<Doctor>
          disabled={isPending}
          icon={<RiSearchLine className="text-lg" />}
          form={form}
          placeholder="Select a doctor"
          label="Doctor"
          name="doctorId"
          items={data?.doctors || []}
          render={(doctor) => (
            <SelectItem className="w-full" key={doctor.id} value={doctor.id}>
              <DoctorTile img={doctor.doctorPath} name={doctor.doctorName} />
            </SelectItem>
          )}
        />
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
