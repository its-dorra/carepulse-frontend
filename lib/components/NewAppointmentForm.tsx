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

export default function NewAppointmentForm() {
  const form = useForm<newAppointmentType>({
    resolver: zodResolver(newAppointmentSchema),
  });

  const { handleSubmit, control } = form;

  const onSubmit: SubmitHandler<newAppointmentType> = (values) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <CustomSelectGroup
          form={form}
          items={doctors}
          label="Doctor"
          name="doctor"
          placeholder="Select a doctor"
          render={(doctor) => (
            <SelectItem className="w-full" key={doctor.id} value={doctor.name}>
              <DoctorTile img={doctor.imgPath} name={doctor.name} />
            </SelectItem>
          )}
        />
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
        />
        <Button className="w-full bg-primaryGreen">Submit and continue</Button>
      </form>
    </Form>
  );
}
