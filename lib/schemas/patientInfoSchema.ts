import { z } from "zod";

export const identificationType: string[] = [
  "Birth certificate",
  "Driving license",
  "Passport",
  "National ID",
];

export default z.object({
  //   fullName: z.string().min(1),
  //   email: z.string().email(),
  //   phoneNumber: z.string(),
  //   dateOfBirth: z.date(),
  //   gender: z.enum(["Male", "Female"]),
  //   address: z.string().min(8),
  //   occupation: z.string().min(5),
  //   emergencyName: z.string().min(1),
  //   emergencyPhoneNumber: z.string().min(1),
  //   primaryPhysician: z.string().min(1),
  //   insuranceProvider: z.string().min(1),
  //   insuranceNumber: z.string().min(5),
  //   allergies: z.string(),
  //   currentMedications: z.string(),
  //   familyMedHistory: z.string(),
  //   pastMedHistory: z.string(),
  //   identificationType: z.enum([
  //     "Birth certificate",
  //     "Driving license",
  //     "Passport",
  //     "National ID",
  //   ]),
  //   identificationNumber: z.string().min(5),
  idFile: z.instanceof(File).array(),
});
