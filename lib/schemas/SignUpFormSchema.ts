import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

export default z
  .object({
    fullName: z.string().min(1, { message: "Provide a valid name." }),
    email: z.string().email({ message: "Provide a valid email." }),
    phoneNumber: z.string(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
  })
  .refine(({ phoneNumber }) => isValidPhoneNumber(phoneNumber), {
    message: "Provide a valid phone number.",
  });
