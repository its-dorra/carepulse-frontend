import { doctorsName } from "@/assets";
import { z } from "zod";

const scheduleAppointmentSchema = z.object({
  doctor: z.enum(doctorsName as [string]),
  reasonForAppointment: z.string().min(1),
  expectedDate: z.date().min(new Date()),
});

export default scheduleAppointmentSchema;

export type ScheduleAppointment = z.infer<typeof scheduleAppointmentSchema>;
