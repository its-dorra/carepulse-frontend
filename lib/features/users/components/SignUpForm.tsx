"use client";

import { FC, useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/lib/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/lib/components/ui/form";

import SignUpFormSchema from "@/lib/schemas/SignUpFormSchema";
import CustomInput from "../../../components/ui/CustomInput";
import {
  HiOutlineDotsHorizontal,
  HiOutlineMail,
  HiOutlineUser,
} from "react-icons/hi";
import { PhoneInput } from "./phone-input";
import CustomPhoneInput from "./custom-phone-input";
import CustomFormField from "@/lib/components/ui/CustomFormField";
import { useRouter } from "next/navigation";
import { useSignUpUser } from "@/lib/features/users/hooks/useSignUpUser";

const SignUpForm: FC = () => {
  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
  });
  const [isNavigating, startTransition] = useTransition();

  const router = useRouter();

  const { mutate, isPending } = useSignUpUser();

  const {
    formState: {
      isSubmitting,

      errors: { fullName, email, phoneNumber, password },
    },
  } = form;

  const onSubmit = function (values: z.infer<typeof SignUpFormSchema>) {
    mutate(values, {
      onSuccess: () => {
        startTransition(() => {
          router.replace("/new-appointment");
        });
      },
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomFormField
          control={form.control}
          name="fullName"
          icon={<HiOutlineUser className="text-xl" />}
          placeholder="Full name"
          label="Full name"
          error={fullName?.message}
        />

        <CustomFormField
          control={form.control}
          name="email"
          label="Email address"
          icon={<HiOutlineMail className="text-xl" />}
          placeholder="dorra@codes.io"
          error={email?.message}
        />

        <CustomFormField
          control={form.control}
          name="password"
          label="Password"
          icon={<HiOutlineDotsHorizontal className="text-xl" />}
          placeholder="*********"
          error={password?.message}
          inputType="password"
        />

        <div className="space-y-2">
          <CustomPhoneInput
            control={form.control}
            name="phoneNumber"
            placeholder="00 213 778 76 91 81"
            label="Phone number"
            error={phoneNumber?.message}
          />
        </div>

        <Button
          disabled={isSubmitting || isPending || isNavigating}
          className="w-full bg-primaryGreen"
          type="submit"
        >
          Get Started
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
