import { doctorsName } from "@/assets";
import { z } from "zod";

const newAppointmentSchema = z
  .object({
    doctor: z.enum(doctorsName as [string, ...string[]]),
    reasonOfAppointment: z.string().min(1),
    additionalComments: z.string(),
    expectedDate: z.date(),
  })
  .refine(({ expectedDate }) => expectedDate <= new Date());

export default newAppointmentSchema;

export type newAppointmentType = z.infer<typeof newAppointmentSchema>;
