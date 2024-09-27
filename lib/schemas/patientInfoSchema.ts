import { z } from "zod";

export const identificationType: [string, ...string[]] = [
  "Birth certificate",
  "Driving license",
  "Passport",
  "National ID",
];
const patientInfoSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  phoneNumber: z.string(),
  dateOfBirth: z.date(),
  gender: z.enum(["Male", "Female"]),
  address: z.string().min(8),
  occupation: z.string().min(5),
  emergencyName: z.string().min(1),
  emergencyPhoneNumber: z.string().min(1),
  doctorId: z.coerce.number(),
  insuranceProvider: z.string().min(1),
  insuranceNumber: z.string().min(5),
  allergies: z.string(),
  currentMedications: z.string().optional(),
  familyMedHistory: z.string().optional(),
  pastMedHistory: z.string().optional(),
  identificationType: z.enum(identificationType),
  identificationNumber: z.string().min(5),
  idFile: z.instanceof(File).array().optional(),
});

export default patientInfoSchema;

const postPersonalInfoSchema = patientInfoSchema.omit({
  fullName: true,
  email: true,
  phoneNumber: true,
});

export type PersonalInfo = z.infer<typeof postPersonalInfoSchema>;
