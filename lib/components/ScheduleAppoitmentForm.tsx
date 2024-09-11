"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import ScheduleAppointmentSchema, {
  ScheduleAppointment,
} from "../schemas/scheduleAppointmentSchema";
import { AppointmentsInterface } from "../types/AppointmentsType";

import { RiSearchLine } from "react-icons/ri";
import { Form } from "./ui/form";
import CustomSelectGroup from "./ui/CustomSelectGroup";
import { doctors } from "@/assets";
import { SelectItem } from "./ui/select";
import DoctorTile from "./DoctorTile";
import CustomCalendar from "../components/ui/CustomCalendar";
import CustomFormField from "./ui/CustomFormField";

export default function ScheduleAppointmentForm({
  appointment,
}: {
  appointment?: AppointmentsInterface;
}) {
  const form = useForm<ScheduleAppointment>({
    resolver: zodResolver(ScheduleAppointmentSchema),
  });

  const { handleSubmit, control } = form;

  const onSubmit: SubmitHandler<ScheduleAppointment> = (values) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form className="mt-4 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <CustomSelectGroup
          icon={<RiSearchLine className="text-xl" />}
          form={form}
          placeholder="Select a doctor"
          label="Doctor"
          name="doctor"
          items={doctors}
          render={(doctor) => (
            <SelectItem className="w-full" key={doctor.id} value={doctor.name}>
              <DoctorTile img={doctor.imgPath} name={doctor.name} />
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
      </form>
    </Form>
  );
}
