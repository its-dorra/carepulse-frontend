"use client";

import { FC } from "react";
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

import loginFormSchema from "@/lib/schemas/LoginFormSchema";
import CustomInput from "./CustomInput";
import { HiOutlineMail, HiOutlinePhone, HiOutlineUser } from "react-icons/hi";
import { PhoneInput } from "./phone-input";

const LoginForm: FC = () => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
    },
  });

  const { formState: errors } = form;

  const onSubmit = function (values: z.infer<typeof loginFormSchema>) {};
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <CustomInput label="Full name">
              <HiOutlineUser />
              <input
                className="w-full border-none bg-transparent outline-none placeholder:text-n-1/50 focus:border-none active:border-none"
                placeholder="Full name"
                {...field}
              />
            </CustomInput>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <CustomInput label="Email address">
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
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="flex flex-col justify-start">
                <FormLabel className="text-[12px] text-n-1">
                  Phone number
                </FormLabel>
                <FormControl>
                  <PhoneInput
                    defaultCountry="DZ"
                    international
                    className="placeholder:text-n-1/50"
                    placeholder="00 213 778 76 91 81"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full bg-primaryGreen" type="submit">
          Get Started
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
