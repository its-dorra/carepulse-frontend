export interface AppointmentsInterface {
  id: number;
  fullName: string;
  date: string;
  status: "Scheduled" | "Pending" | "Cancelled";
  doctorName: string;
}
