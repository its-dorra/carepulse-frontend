import { z } from "zod";

const adminFormSchema = z.object({
  pinCode: z.string().min(6).max(6),
});

export type AdminForm = z.infer<typeof adminFormSchema>;

export default adminFormSchema;
