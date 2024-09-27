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
import { useUserPinCode } from "../hooks/useUserPinCode";

export default function UserPinCodeForm({ length }: { length: number }) {
  const form = useForm<AdminFormType>({
    resolver: zodResolver(adminFormSchema),
  });

  const { mutate, isPending } = useUserPinCode();

  const onSubmit: SubmitHandler<AdminFormType> = ({ pinCode }) => {
    mutate(pinCode, {
      onSuccess: (res) => {
        console.log({ res });
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
            <InputOTP {...field} maxLength={length}>
              {Array.from({ length }).map((_, ind) => (
                <InputOTPGroup key={ind}>
                  <InputOTPSlot
                    className="h-14 w-14 border-white/20 text-3xl font-bold text-primaryGreen outline-none"
                    index={ind}
                  />
                </InputOTPGroup>
              ))}
            </InputOTP>
          )}
        />
        <Button disabled={isPending} className="w-full bg-primaryGreen">
          Verify
        </Button>
      </form>
    </Form>
  );
}
