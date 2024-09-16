"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { Form, FormField } from "../../../components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/lib/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import adminFormSchema, {
  AdminForm as AdminFormType,
} from "@/lib/schemas/adminFormSchema";
import { Button } from "../../../components/ui/button";
import { useAdmin } from "../hooks/useAdmin";

export default function AdminForm({
  length,
  closeModal,
}: {
  length: number;
  closeModal: () => void;
}) {
  const form = useForm<AdminFormType>({
    resolver: zodResolver(adminFormSchema),
  });

  const { mutate, isPending } = useAdmin();

  const onSubmit: SubmitHandler<AdminFormType> = ({ pinCode }) => {
    mutate(pinCode, {
      onSuccess: (res) => {
        console.log(res);
        closeModal();
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="pinCode"
          control={form.control}
          render={({ field }) => (
            <InputOTP {...field} maxLength={6}>
              {Array.from({ length }).map((_, ind) => (
                <InputOTPGroup key={ind}>
                  <InputOTPSlot
                    className="h-14 w-14 border-white/20 text-3xl text-primaryGreen outline-none has-[:focus]:border-primaryGreen"
                    index={ind}
                  />
                </InputOTPGroup>
              ))}
            </InputOTP>
          )}
        />
        <Button className="w-full bg-primaryGreen">Enter Admin Passkey</Button>
      </form>
    </Form>
  );
}
