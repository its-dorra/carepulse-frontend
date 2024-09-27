import { z } from "zod";

const newAppointmentSchema = z.object({
  doctorId: z.coerce.number(),
  reasonOfAppointment: z.string().min(1),
  additionalComments: z.string().optional(),
  expectedDate: z.date().min(new Date()),
});

export default newAppointmentSchema;

export type newAppointmentType = z.infer<typeof newAppointmentSchema>;
