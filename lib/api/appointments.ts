import { privateAxios } from "../axiosInstances";
import { DashboardData, Doctor } from "../types/AppointmentsType";

export const getAppointments = async ({
  perPage,
  page,
}: {
  perPage: number;
  page: number;
}) => {
  const { data } = await privateAxios.post("/appointments", { perPage, page });

  return data as DashboardData;
};

interface StatusCount {
  status: "Pending" | "Scheduled" | "Cancelled";
  count: number;
}

interface getCounts {
  statusCount: StatusCount[];
}

export const getAppointmentsCount = async () => {
  const { data } = await privateAxios.get("/appointments-count");

  return data as getCounts;
};

export const scheduleAppointment = async ({
  id,
  doctorId,
  reasonOfAppointment,
  expectedDate,
}: {
  id: string;
  doctorId: string;
  reasonOfAppointment: string;
  expectedDate: Date;
}) => {
  const { data } = await privateAxios.post("/schedule-appointment", {
    id,
    doctorId,
    reasonOfAppointment,
    expectedDate,
  });
  return data as { message: string };
};

export const cancelAppointment = async ({
  id,
  reasonForCancellation,
}: {
  id: number;
  reasonForCancellation: string;
}) => {
  const { data } = await privateAxios.post("/cancel-appointment", {
    id,
    reasonForCancellation,
  });
  return data as { message: string };
};

export const getDoctors = async () => {
  const { data } = await privateAxios.get("/doctors");
  return data as { doctors: Doctor[] };
};
