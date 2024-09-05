"use client";

import { doctors, logo, patientInfo } from "@/assets";
import DoctorTile from "@/lib/components/DoctorTile";

import CustomFormField from "@/lib/components/ui/CustomFormField";
import CustomInput from "@/lib/components/ui/CustomInput";

import CustomRadioGroup from "@/lib/components/ui/CustomRadioGroup";
import CustomSelectGroup from "@/lib/components/ui/CustomSelectGroup";
import DateOfBirth from "@/lib/components/ui/DateOfBirth";
import { Form, FormField } from "@/lib/components/ui/form";

import { SelectItem } from "@/lib/components/ui/select";
import patientInfoSchema, {
  identificationType,
} from "@/lib/schemas/patientInfoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Dropzone, { useDropzone } from "react-dropzone";

import Image from "next/image";
import { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  HiOutlineCloudUpload,
  HiOutlinePhone,
  HiOutlineUser,
} from "react-icons/hi";
import { z } from "zod";
import { Button } from "@/lib/components/ui/button";

export default function PatientInfo() {
  //   const onDrop = useCallback((acceptedFiles: any) => {
  //     console.log(acceptedFiles[0]);
  //   }, []);
  //   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const [preview, setPreview] = useState<ArrayBuffer | string | null>(null);
  const form = useForm<z.infer<typeof patientInfoSchema>>({
    resolver: zodResolver(patientInfoSchema),
    defaultValues: {
      //   gender: "Male",
    },
  });

  const {
    formState: { errors },
  } = form;

  if (errors) {
    console.log(errors);
  }

  const onSubmit: SubmitHandler<z.infer<typeof patientInfoSchema>> = function (
    values,
  ) {
    console.log(values);
  };

  return (
    <main className="h-dvh w-full max-w-[1080px] items-start justify-center lg:flex">
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
                    <DateOfBirth form={form} />
                    <CustomRadioGroup
                      form={form}
                      name="gender"
                      label="Gender"
                      items={["Male", "Female"]}
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
                  <CustomSelectGroup
                    form={form}
                    items={doctors}
                    name="primaryPhysician"
                    placeholder="Select a physician"
                    label="Primary care physician"
                    render={(doctor) => (
                      <SelectItem
                        className="w-full"
                        key={doctor.id}
                        value={doctor.name}
                      >
                        <DoctorTile img={doctor.imgPath} name={doctor.name} />
                      </SelectItem>
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
                  <CustomSelectGroup
                    form={form}
                    label="Identification type"
                    name="identificationType"
                    placeholder="ID type"
                    items={identificationType}
                    render={(id) => {
                      return (
                        <SelectItem className="w-full" key={id} value={id}>
                          {id}
                        </SelectItem>
                      );
                    }}
                  />

                  <CustomFormField
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
                          {preview && (
                            <Image
                              className={`${preview ? "block" : "hidden"} w-full object-contain`}
                              src={preview}
                              //   fill
                              height={320}
                              width={720}
                              alt="Selected image"
                            />
                          )}

                          <div
                            className={`${preview ? "hidden" : "block"} flex w-full items-center justify-center`}
                          >
                            <Dropzone
                              onDrop={(value) => {
                                const filereader = new FileReader();

                                filereader.onload = function () {
                                  setPreview(filereader.result);
                                };

                                filereader.readAsDataURL(value[0]);

                                // filereader

                                onChange(value);
                              }}
                            >
                              {({ getRootProps, getInputProps }) => (
                                <div
                                  className="flex w-full flex-col items-center justify-center space-y-1"
                                  {...getRootProps()}
                                  onBlur={onBlur}
                                >
                                  <input {...getInputProps()} />

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
                                </div>
                              )}
                            </Dropzone>
                          </div>
                        </CustomInput>
                      );
                    }}
                  />
                </div>
                <Button className="w-full bg-primaryGreen" type="submit">
                  Submit and continue
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <div className="sticky right-0 top-0 hidden h-[720px] max-h-full w-[350px] pt-16 lg:block">
        <Image
          className="h-full w-full rounded-lg object-cover"
          src={patientInfo}
          alt="patient info"
        />
      </div>
    </main>
  );
}
