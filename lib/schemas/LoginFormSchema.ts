import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

export default z.object({
  email: z.string().email({ message: "Provide a valid email." }),
  phoneNumber: z
    .string()
    .refine((number) => isValidPhoneNumber(number), {
      message: "Provide a valid phone number.",
    })
    .transform((val) => (val === "" ? "" : val)),
});
