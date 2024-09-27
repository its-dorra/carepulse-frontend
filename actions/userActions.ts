"use server";

import privateAxios from "@/lib/axiosInstances";
import { PersonalInfo } from "@/lib/schemas/patientInfoSchema";

import { z } from "zod";

export async function getUser({}) {
  try {
    const { data } = await privateAxios.get("/auth/user");

    return data as {
      user: {
        status: "registered" | "notRegistered";
        userId: string;
        fullName: string;
        phoneNumber: string;
        email: string;
        role: "admin" | "user";
        imgPath: string;
      };
    };
  } catch (error) {
    return { user: null };
  }
}

export async function loginAdmin(pinCode: string) {
  try {
    const parsedPinCode = z.string().min(6).max(6).parse(pinCode);

    const { data } = await privateAxios.post("/auth/login-admin", {
      pinCode: parsedPinCode,
    });

    return data as { message: string };
  } catch (error) {
    throw error;
  }
}

export async function loginUser({
  email,
  phoneNumber,
}: {
  email: string;
  phoneNumber: string;
}) {
  try {
    const { data } = await privateAxios.post("/auth/login", {
      email,
      phoneNumber,
    });

    return data as { message: string; status: "registered" | "notRegistered" };
  } catch (error) {
    throw error;
  }
}

export async function signUp({
  email,
  fullName,
  phoneNumber,
}: {
  email: string;
  fullName: string;
  phoneNumber: string;
}) {
  try {
    const { data } = await privateAxios.post("/auth/signup", {
      json: {
        email,
        fullName,
        phoneNumber,
      },
    });

    return data as { message: string };
  } catch (error) {
    throw error;
  }
}

export async function verifyUserOTP(pinCode: string) {
  try {
    const { data } = await privateAxios.post("/auth/verify-otp", {
      json: { pinCode },
    });

    return data as { status: "registered" | "notRegistered"; message: string };
  } catch (error) {
    throw error;
  }
}

export async function postPersonalInformation({
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
}: PersonalInfo) {
  const { data } = await privateAxios.post("/auth/patient-info", {
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
  });

  return data as { message: string };
}
