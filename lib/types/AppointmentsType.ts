export interface Doctor {
  id: number;
  doctorName: string;
  doctorPath: string;
}

export interface AppointmentsInterface {
  id: number;
  fullName: string;
  date: string;
  status: "Scheduled" | "Pending" | "Cancelled";
  doctor: Doctor;
  reasonOfAppointment: string;
  expectedDate: string;
}

export interface DashboardData {
  appointments: AppointmentsInterface[];
  totalAppointmentCount: { totalCount: number };
}
