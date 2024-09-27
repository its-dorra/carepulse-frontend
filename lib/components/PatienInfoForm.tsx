"use client";
import { useState } from "react";

import CustomFormField from "@/lib/components/ui/CustomFormField";
import CustomInput from "@/lib/components/ui/CustomInput";
import CustomRadioGroup from "@/lib/components/ui/CustomRadioGroup";
import CustomSelectGroup from "@/lib/components/ui/CustomSelectGroup";
import CustomCalendar from "@/lib/components/ui/CustomCalendar";
import { Form, FormField } from "@/lib/components/ui/form";

import { SubmitHandler, useForm } from "react-hook-form";
import { HiOutlineCloudUpload, HiOutlineUser } from "react-icons/hi";
import { z } from "zod";
import { Button } from "@/lib/components/ui/button";

import { SelectItem } from "@/lib/components/ui/select";

import patientInfoSchema, {
  identificationType as identificationTypes,
} from "@/lib/schemas/patientInfoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Dropzone from "react-dropzone";

import Image from "next/image";
import CustomPhoneInput from "../features/users/components/custom-phone-input";
import { usePersonalInfo } from "../features/users/hooks/usePersonalInfo";
import { useRouter } from "next/navigation";
import { useUser } from "../features/users/hooks/useUser";
import DoctorSelectGroup from "./DoctorSelectGroup";

export default function PatientInfoForm() {
  const [preview, setPreview] = useState<string | null>(null);

  const { data: user } = useUser();

  const form = useForm<z.infer<typeof patientInfoSchema>>({
    resolver: zodResolver(patientInfoSchema),
    defaultValues: {
      gender: "Male",
      address: "",
      phoneNumber: user?.user?.phoneNumber,
      pastMedHistory: "",
      occupation: "",
      insuranceProvider: "",
      allergies: "",
      insuranceNumber: "",
      identificationType: "",
      identificationNumber: "",
      currentMedications: "",
      dateOfBirth: new Date(),
      fullName: user?.user?.fullName,
      email: user?.user?.email,
      emergencyName: "",
      emergencyPhoneNumber: "",
      familyMedHistory: "",
    },
  });

  const {
    formState: {
      errors: {
        address,
        allergies,
        currentMedications,
        phoneNumber,
        pastMedHistory,
        occupation,
        insuranceProvider,
        insuranceNumber,
        identificationNumber,
        fullName,
        familyMedHistory,
        emergencyPhoneNumber,
        emergencyName,
        email,
      },
    },
  } = form;

  const { mutate, isPending } = usePersonalInfo();

  const router = useRouter();

  const onSubmit: SubmitHandler<z.infer<typeof patientInfoSchema>> = function ({
    dateOfBirth,
    gender,
    address,
    occupation,
    emergencyName,
    emergencyPhoneNumber,
    doctorId,
    insuranceProvider,
    insuranceNumber,
    allergies,
    currentMedications,
    familyMedHistory,
    pastMedHistory,
    identificationType,
    identificationNumber,
  }) {
    mutate(
      {
        dateOfBirth,
        gender,
        address,
        occupation,
        emergencyName,
        emergencyPhoneNumber,
        doctorId,
        insuranceProvider,
        insuranceNumber,
        allergies,
        currentMedications,
        familyMedHistory,
        pastMedHistory,
        identificationType,
        identificationNumber,
      },
      {
        onSuccess: () => {
          router.replace("/new-appointment");
        },
      },
    );
  };

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <p className="text-3xl">Personal Information</p>
          <CustomFormField
            error={fullName?.message}
            control={form.control}
            name="fullName"
            label="Full name"
            placeholder="Full name"
          />

          <div className="flex flex-col items-center gap-x-6 gap-y-4 sm:flex-row">
            <CustomFormField
              error={email?.message}
              control={form.control}
              name="email"
              label="Email"
              placeholder="dorra@codes.io"
              icon={<HiOutlineUser />}
            />

            <CustomPhoneInput
              error={phoneNumber?.message}
              control={form.control}
              name="phoneNumber"
              label="Phone number"
              placeholder="+213 778 76 93 81"
            />
          </div>
          <div className="flex h-full flex-col items-center gap-x-6 gap-y-4 sm:flex-row">
            <CustomCalendar
              name="dateOfBirth"
              label="Date of birth"
              placeholder="Select your birthdate"
              form={form}
            />
            <CustomRadioGroup
              form={form}
              name="gender"
              label="Gender"
              items={["Male", "Female"]}
            />
          </div>
          <div className="flex h-full flex-col items-center gap-x-6 gap-y-4 sm:flex-row">
            <CustomFormField
              error={address?.message}
              control={form.control}
              name="address"
              label="Address"
              placeholder="ex: 14 street, New York, NY - 5101"
            />

            <CustomFormField
              error={occupation?.message}
              control={form.control}
              name="occupation"
              label="Occupation"
              placeholder="Software Engineer"
            />
          </div>
          <div className="flex h-full flex-col items-center gap-x-6 gap-y-4 sm:flex-row">
            <CustomFormField
              error={emergencyName?.message}
              control={form.control}
              name="emergencyName"
              label="Emergency contact"
              placeholder="Guadrian's name"
            />
            <CustomPhoneInput
              error={emergencyPhoneNumber?.message}
              control={form.control}
              name="emergencyPhoneNumber"
              label="Phone Number"
              placeholder="ex: +1(868)579-9831"
            />
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-3xl">Medical Information</p>
          <DoctorSelectGroup control={form.control} />

          <div className="flex h-full flex-col items-center gap-x-6 gap-y-4 sm:flex-row">
            <CustomFormField
              error={insuranceProvider?.message}
              control={form.control}
              name="insuranceProvider"
              label="Insurance provider"
              placeholder="ex: BlueCross"
            />
            <CustomFormField
              error={insuranceNumber?.message}
              control={form.control}
              name="insuranceNumber"
              label="Insurance policy number"
              placeholder="ex: ABCDEF1234"
            />
          </div>
          <div className="flex h-full flex-col items-center gap-x-6 gap-y-4 sm:flex-row">
            <CustomFormField
              error={allergies?.message}
              control={form.control}
              name="allergies"
              label="Allergies (if any)"
              placeholder="ex: ABCDEF1234"
              textArea
            />
            <CustomFormField
              error={currentMedications?.message}
              control={form.control}
              name="currentMedications"
              label="Current medications"
              placeholder="ex: Ibuprofen 200mg, Levothyroxine 50mcg"
              textArea
            />
          </div>
          <div className="flex h-full flex-col items-center gap-x-6 gap-y-4 sm:flex-row">
            <CustomFormField
              error={familyMedHistory?.message}
              control={form.control}
              name="familyMedHistory"
              label="Family medical history (if relevant"
              placeholder="ex: Mother had breast cancer"
              textArea
            />
            <CustomFormField
              error={pastMedHistory?.message}
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
          <CustomSelectGroup
            disabled={false}
            control={form.control}
            label="Identification type"
            name="identificationType"
            placeholder="ID type"
            items={identificationTypes}
            render={(id) => {
              return (
                <SelectItem className="w-full" key={id} value={id}>
                  {id}
                </SelectItem>
              );
            }}
          />

          <CustomFormField
            error={identificationNumber?.message}
            control={form.control}
            name="identificationNumber"
            label="Identification number"
            placeholder="ex: 1234567"
          />
          <FormField
            control={form.control}
            name="idFile"
            render={({ field: { onChange, onBlur, value } }) => {
              return (
                <CustomInput
                  className="flex w-full items-center justify-center border-dashed bg-foreground"
                  label="Scanned Copy of Identification Document"
                >
                  <div
                    className={`${preview ? "hidden" : "block"} flex w-full items-center justify-center`}
                  >
                    <Dropzone
                      onDrop={(value) => {
                        setPreview(URL.createObjectURL(value[0]));
                        onChange(value);
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div
                          className="flex w-full flex-col items-center justify-center space-y-1"
                          {...getRootProps()}
                          onBlur={onBlur}
                        >
                          <input {...getInputProps()} type="image/*" />

                          {preview !== null ? (
                            <Image
                              className={`${preview ? "block" : "hidden"} max-h-full w-full object-contain`}
                              src={preview}
                              height={320}
                              width={720}
                              alt="Selected image"
                            />
                          ) : (
                            <>
                              <div className="flex aspect-square w-10 items-center justify-center rounded-full bg-[#2D3136] p-0.5">
                                <HiOutlineCloudUpload className="text-xl text-primaryGreen" />
                              </div>
                              <p>
                                <span className="text-primaryGreen">
                                  Click to upload
                                </span>{" "}
                                or drag and drop
                              </p>
                              <p>SVG, PNG, JPG or GIF (max 800x400px)</p>
                            </>
                          )}
                        </div>
                      )}
                    </Dropzone>
                  </div>
                </CustomInput>
              );
            }}
          />
        </div>
        <Button
          disabled={isPending}
          className="w-full bg-primaryGreen"
          type="submit"
        >
          Submit and continue
        </Button>
      </form>
    </Form>
  );
}
