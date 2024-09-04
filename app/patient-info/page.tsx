"use client";

import { doctors, logo, patientInfo } from "@/assets";
import DoctorTile from "@/lib/components/DoctorTile";
import { Calendar } from "@/lib/components/ui/calendar";
import CustomFormField from "@/lib/components/ui/CustomFormField";
import CustomInput from "@/lib/components/ui/CustomInput";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/lib/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/lib/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/lib/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/components/ui/select";
import patientInfoSchema from "@/lib/schemas/patientInfoSchema";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { HiOutlinePhone, HiOutlineUser } from "react-icons/hi";
import { z } from "zod";

export default function PatientInfo() {
  const form = useForm<z.infer<typeof patientInfoSchema>>({
    resolver: zodResolver(patientInfoSchema),
    defaultValues: {
      gender: "Male",
    },
  });

  const onSubmit = function (values: z.infer<typeof patientInfoSchema>) {
    console.log(values);
  };

  return (
    <main className="h-full w-full max-w-[1080px] items-start justify-center lg:flex">
      <div className="h-full w-full space-y-4 overflow-y-auto overflow-x-clip px-14 py-16">
        <Image className="mb-16 object-cover" src={logo} alt="logo" />
        <div className="flex flex-col gap-y-8">
          <div className="space-y-2">
            <p className="text-3xl">Welcome 👋</p>
            <p className="text-xs text-n-1">Let us know more about yourself</p>
          </div>
          <div>
            <Form {...form}>
              <form
                className="space-y-8"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="space-y-4">
                  <p className="text-3xl">Personal Information</p>
                  <CustomFormField
                    control={form.control}
                    name="fullName"
                    label="Full name"
                    placeholder="Full name"
                  />

                  <div className="flex flex-col items-center gap-x-6 gap-y-4 sm:flex-row">
                    <CustomFormField
                      control={form.control}
                      name="email"
                      label="Email"
                      placeholder="dorra@codes.io"
                      icon={<HiOutlineUser />}
                    />

                    <CustomFormField
                      control={form.control}
                      name="phoneNumber"
                      label="Phone number"
                      placeholder="00 213 778 76 93 81"
                      icon={<HiOutlinePhone />}
                    />
                  </div>
                  <div className="flex h-full flex-col items-center gap-x-6 gap-y-4 sm:flex-row">
                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel className="text-[12px] text-n-1">
                            Date of birth
                          </FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <div className="rounded-lg border border-white/20 p-0.5 has-[:focus]:bg-gradient-radial">
                                  <div
                                    className={cn(
                                      "flex w-full cursor-pointer items-center bg-foreground p-2 font-normal",
                                      !field.value && "text-muted-foreground",
                                    )}
                                  >
                                    <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span className="text-sm text-n-1/50">
                                        Select your birthdate
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date: Date) =>
                                  date > new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                className="border-white bg-foreground"
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel className="text-[12px] text-n-1">
                            Gender
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex space-x-1"
                            >
                              <FormItem
                                className={`border-text-n-1 flex w-full items-center gap-x-3 space-y-0 rounded-md border border-dashed ${field.value === "Male" ? "bg-foreground" : ""} p-3`}
                              >
                                <FormControl>
                                  <RadioGroupItem
                                    className={`${field.value === "Male" ? "bg-gradient-radial" : ""}`}
                                    value="Male"
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Male
                                </FormLabel>
                              </FormItem>
                              <FormItem
                                className={`border-text-n-1 flex w-full items-center gap-x-3 space-y-0 rounded-md border border-dashed ${field.value === "Female" ? "bg-foreground" : ""} p-3`}
                              >
                                <FormControl>
                                  <RadioGroupItem
                                    className={`${field.value === "Female" ? "bg-gradient-radial" : ""}`}
                                    value="Female"
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Female
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex h-full flex-col items-center gap-x-6 gap-y-4 sm:flex-row">
                    <CustomFormField
                      control={form.control}
                      name="address"
                      label="Address"
                      placeholder="ex: 14 street, New York, NY - 5101"
                    />

                    <CustomFormField
                      control={form.control}
                      name="occupation"
                      label="Occupation"
                      placeholder="Software Engineer"
                    />
                  </div>
                  <div className="flex h-full flex-col items-center gap-x-6 gap-y-4 sm:flex-row">
                    <CustomFormField
                      control={form.control}
                      name="emergencyName"
                      label="Emergency contact"
                      placeholder="Guadrian's name"
                    />
                    <CustomFormField
                      control={form.control}
                      name="emergencyPhoneNumber"
                      label="Phone Number"
                      placeholder="ex: +1(868)579-9831"
                      icon={<HiOutlinePhone />}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-3xl">Medical Information</p>

                  <FormField
                    control={form.control}
                    name="primaryPhysician"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[12px] text-n-1">
                          Primary care physician
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="border-white/20 bg-foreground">
                              <SelectValue placeholder="Select a physician" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-foreground py-2">
                            {doctors.map((doctor) => (
                              <SelectItem
                                className="w-full"
                                key={doctor.id}
                                value={doctor.name}
                              >
                                <DoctorTile
                                  img={doctor.imgPath}
                                  name={doctor.name}
                                />
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  <div className="flex h-full flex-col items-center gap-x-6 gap-y-4 sm:flex-row">
                    <CustomFormField
                      control={form.control}
                      name="insuranceProvider"
                      label="Insurance provider"
                      placeholder="ex: BlueCross"
                    />
                    <CustomFormField
                      control={form.control}
                      name="insuranceNumber"
                      label="Insurance policy number"
                      placeholder="ex: ABCDEF1234"
                    />
                  </div>
                  <div className="flex h-full flex-col items-center gap-x-6 gap-y-4 sm:flex-row">
                    <CustomFormField
                      control={form.control}
                      name="allergies"
                      label="Allergies (if any)"
                      placeholder="ex: ABCDEF1234"
                      textArea
                    />
                    <CustomFormField
                      control={form.control}
                      name="currentMedications"
                      label="Current medications"
                      placeholder="ex: Ibuprofen 200mg, Levothyroxine 50mcg"
                      textArea
                    />
                  </div>
                  <div className="flex h-full flex-col items-center gap-x-6 gap-y-4 sm:flex-row">
                    <CustomFormField
                      control={form.control}
                      name="familyMedHistory"
                      label="Family medical history (if relevant"
                      placeholder="ex: Mother had breast cancer"
                      textArea
                    />
                    <CustomFormField
                      control={form.control}
                      name="pastMedHistory"
                      label="Past medical history"
                      placeholder="ex: Asthma diagnosis in childhood"
                      textArea
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-3xl">Identification and Verification</p>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <div className="sticky right-0 top-0 hidden h-[720px] w-[350px] pt-16 lg:block">
        <Image
          className="h-full w-full rounded-lg object-cover"
          src={patientInfo}
          alt="patient info"
        />
      </div>
    </main>
  );
}
