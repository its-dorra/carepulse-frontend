"use client";

import { FC, useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/lib/components/ui/button";
import { Form } from "@/lib/components/ui/form";

import loginFormSchema from "@/lib/schemas/LoginFormSchema";

import {
  HiOutlineDotsHorizontal,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUser,
} from "react-icons/hi";

import CustomFormField from "@/lib/components/ui/CustomFormField";

import { useLoginUser } from "../hooks/useLoginUser";
import CustomPhoneInput from "./custom-phone-input";
import { useRouter } from "next/navigation";

const LoginForm: FC = () => {
  const router = useRouter();
  const [isNavigating, startTransition] = useTransition();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      phoneNumber: "",
      password: "",
    },
  });

  const {
    formState: {
      isSubmitting,
      errors: { email, phoneNumber, password },
    },
  } = form;

  const { mutate, isPending } = useLoginUser();

  const onSubmit = function ({
    email,
    phoneNumber,
    password,
  }: z.infer<typeof loginFormSchema>) {
    mutate(
      { email, phoneNumber, password },
      {
        onSuccess: (res) => {
          const nextRoute =
            res.status === "registered" ? "/new-appointment" : "/patient-info";

          startTransition(() => {
            router.replace(nextRoute);
          });
        },
      },
    );
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomFormField
          error={email?.message}
          control={form.control}
          name="email"
          label="Email Address"
          icon={<HiOutlineMail className="text-xl" />}
          placeholder="dorra@codes.io"
        />

        <div className="space-y-2">
          <CustomPhoneInput
            error={phoneNumber?.message}
            control={form.control}
            name="phoneNumber"
            placeholder="+213 778 76 91 81"
            label="Phone Number"
          />
        </div>

        <CustomFormField
          error={password?.message}
          control={form.control}
          name="password"
          label="Password"
          icon={<HiOutlineDotsHorizontal className="text-xl" />}
          placeholder="*************"
          inputType="password"
        />

        <Button
          disabled={isSubmitting || isPending || isNavigating}
          className="w-full bg-primaryGreen"
          type="submit"
        >
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
