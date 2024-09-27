"use client";

import { FC, useState } from "react";
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
import { HiOutlineMail, HiOutlinePhone, HiOutlineUser } from "react-icons/hi";
import { PhoneInput } from "./phone-input";
import CustomPhoneInput from "./custom-phone-input";

const SignUpForm: FC = () => {
  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
    },
  });

  const {
    formState: {
      errors: { fullName, email, phoneNumber },
    },
  } = form;

  const onSubmit = function (values: z.infer<typeof SignUpFormSchema>) {};
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <CustomInput label="Full name" error={fullName?.message}>
              <div>
                <HiOutlineUser />
                <input
                  className="w-full border-none bg-transparent outline-none placeholder:text-n-1/50 focus:border-none active:border-none"
                  placeholder="Full name"
                  {...field}
                />
              </div>
            </CustomInput>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <CustomInput label="Email address" error={email?.message}>
              <HiOutlineMail />
              <input
                className="w-full rounded-md border-none bg-transparent outline-none placeholder:text-n-1/50 focus:border-none active:border-none"
                placeholder="dorra@codes.io"
                {...field}
              />
            </CustomInput>
          )}
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

        <Button className="w-full bg-primaryGreen" type="submit">
          Get Started
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
