import { z } from 'zod';

export default z.object({
  fullName: z.string().min(1, { message: 'Provide a valid name.' }),
  email: z.string().email({ message: 'Provide a valid email.' }),
  phoneNumber: z.string().min(8, { message: 'Provide a valid phone number.' }),
});
