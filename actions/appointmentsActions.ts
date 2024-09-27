"use server";

import privateAxios from "@/lib/axiosInstances";
import { newAppointmentType } from "@/lib/schemas/newAppointmentSchema";
import { DashboardData, Doctor } from "@/lib/types/AppointmentsType";

export const getAppointments = async ({
  perPage,
  page,
}: {
  perPage: number;
  page: number;
}) => {
  try {
    const { data } = await privateAxios.post("/appointments/get-appointments", {
      perPage,
      page,
    });

    return data as DashboardData;
  } catch (error) {
    throw error;
  }
};

interface StatusCount {
  status: "Pending" | "Scheduled" | "Cancelled";
  count: number;
}

interface getCounts {
  statusCount: StatusCount[];
}

export const getAppointmentsCount = async ({}) => {
  try {
    const { data } = await privateAxios.get("/appointments/appointments-count");

    return data as getCounts;
  } catch (error) {
    return { statusCount: [] };
  }
};

export const scheduleAppointment = async ({
  id,
  doctorId,
  reasonOfAppointment,
  expectedDate,
}: {
  id: number;
  doctorId: string;
  reasonOfAppointment: string;
  expectedDate: Date;
}) => {
  try {
    const { data } = await privateAxios.post(
      "/appointments/schedule-appointment",
      {
        id,
        doctorId,
        reasonOfAppointment,
        expectedDate,
      },
    );

    return data as { message: string };
  } catch (error) {
    throw error;
  }
};

export const cancelAppointment = async ({
  id,
  reasonForCancellation,
}: {
  id: number;
  reasonForCancellation: string;
}) => {
  const { data } = await privateAxios.post("/appointments/cancel-appointment", {
    id,
    reasonForCancellation,
  });

  return data as { message: string };
};

export const getDoctors = async ({}) => {
  try {
    const { data } = await privateAxios.get("/appointments/get-doctors");

    return data as { doctors: Doctor[] };
  } catch (error) {
    throw error;
  }
};

export const newAppointment = async (values: newAppointmentType) => {
  try {
    const { data } = await privateAxios.post(
      "/appointments/new-appointment",
      values,
    );

    return data as {
      message: string;
      newAppointment: {
        id: number;
        userId: string;
        doctorId: number;
        reasonOfAppointment: string;
        additionalComments: string | null;
        expectedDate: string;
        appointmentStatus: "Pending" | "Scheduled" | "Cancelled";
      };
    };
  } catch (error) {
    throw error;
  }
};

export const getLastAppointment = async (appointmentId: string) => {
  try {
    const { data } = await privateAxios.post("/appointments/last-appointment", {
      appointmentId,
    });

    return data.appointment as {
      doctors: {
        id: number;
        doctorName: string;
        imgPath: string;
      };
      new_appointments: {
        id: number;
        userId: string;
        doctorId: number;
        reasonOfAppointment: string;
        additionalComments: string | null;
        expectedDate: string;
        appointmentStatus: "Pending" | "Scheduled" | "Cancelled";
      };
    };
  } catch (error) {
    throw error;
  }
};
