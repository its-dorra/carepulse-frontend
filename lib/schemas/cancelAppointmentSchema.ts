import { z } from "zod";

const cancelAppointmentSchema = z.object({
  reasonForCancellation: z.string().min(1),
});

export default cancelAppointmentSchema;

export type CancelAppointment = z.infer<typeof cancelAppointmentSchema>;
