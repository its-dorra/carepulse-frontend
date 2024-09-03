"use client";

import { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/lib/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/lib/components/ui/form";
import { Input } from "@/lib/components/ui/input";
import loginFormSchema from "@/lib/schemas/LoginFormSchema";
import CustomInput from "./CustomInput";
import { HiOutlineMail, HiOutlinePhone, HiOutlineUser } from "react-icons/hi";

const LoginForm: FC = () => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
    },
  });

  const onSubmit = function (values: z.infer<typeof loginFormSchema>) {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <CustomInput label="Full name">
              <HiOutlineUser />
              <input
                className="w-full rounded-md border-none bg-transparent outline-none placeholder:text-n-1 focus:border-none active:border-none"
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
                className="rounded-md border-none bg-transparent outline-none placeholder:text-n-1 focus:border-none active:border-none"
                placeholder="dorra@codes.io"
                {...field}
              />
            </CustomInput>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <CustomInput label="Phone number">
              <HiOutlinePhone />
              <input
                className="rounded-md border-none bg-transparent outline-none placeholder:text-n-1 focus:border-none active:border-none"
                placeholder="00 213 778 76 91 81"
                {...field}
              />
            </CustomInput>
          )}
        />
        <Button className="bg-primaryGreen w-full" type="submit">
          Get Started
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
