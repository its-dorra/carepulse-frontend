"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import CancelAppointmentSchema, {
  CancelAppointment,
} from "@/lib/schemas/cancelAppointmentSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/lib/components/ui/form";
import CustomFormField from "@/lib/components/ui/CustomFormField";
import { Button } from "@/lib/components/ui/button";
import { AppointmentsInterface } from "@/lib/types/AppointmentsType";
import { useCancelAppointment } from "../hooks/useCancelAppointment";

export default function CancelAppointmentForm({
  appointment,
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  appointment: AppointmentsInterface;
}) {
  const form = useForm<CancelAppointment>({
    resolver: zodResolver(CancelAppointmentSchema),
  });
  const { mutate, isPending } = useCancelAppointment();
  const { handleSubmit, control } = form;

  const onSubmit: SubmitHandler<CancelAppointment> = ({
    reasonForCancellation,
  }) => {
    mutate(
      { id: appointment.id, reasonForCancellation },
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
        <CustomFormField
          control={control}
          name="reasonForCancellation"
          label="Reason for cancellation"
          placeholder="ex: Urgent meeting came up"
          textArea
        />
        <Button
          disabled={isPending}
          className="w-full bg-red-500"
          type="submit"
        >
          Cancel Appointment
        </Button>
      </form>
    </Form>
  );
}
