import { doctorsIds } from "@/assets";
import { z } from "zod";

const scheduleAppointmentSchema = z.object({
  doctorId: z.string(),
  reasonForAppointment: z.string().min(1),
  expectedDate: z.date().min(new Date()),
});

export default scheduleAppointmentSchema;

export type ScheduleAppointment = z.infer<typeof scheduleAppointmentSchema>;
