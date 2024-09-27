import onboardingSignUpPic from "./photo-1.jpg";
import onboardingSignInPic from "./photo-4.png";
import newAppointmentPic from "./photo-3.png";
import patientInfo from "./photo-2.png";
import logo from "./Logo.svg";
import DashboardCardIcon1 from "./calendar-check-02.svg";
import DashboardCardIcon2 from "./hourglass-01.svg";
import DashboardCardIcon3 from "./alert-triangle.svg";
import cancelledIcon from "./cancelledIcon.svg";
import successIcon from "./successIcon.svg";
import waitingIcon from "./waitingIcon.svg";
import animationSuccess from "./success.gif";
import { AppointmentsInterface } from "@/lib/types/AppointmentsType";

export {
  cancelledIcon,
  successIcon,
  waitingIcon,
  onboardingSignUpPic,
  onboardingSignInPic,
  patientInfo,
  logo,
  newAppointmentPic,
  animationSuccess,
};

export const doctors = [
  {
    id: "1",
    name: "Dr. Sarah Safary",
    imgPath:
      "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg",
  },
  {
    id: "2",
    name: "Dr. Ava Williams",
    imgPath:
      "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
  },
  {
    id: "3",
    name: "Dr. Adam Smith",
    imgPath:
      "https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg",
  },
];

export const doctorsIds = [...doctors.map((doctor) => doctor.id)] as const;

export const dashboardCards = [
  {
    id: 1,
    icon: DashboardCardIcon2,
    label: "Pending",
    text: "Total number of pending appointments",
    color: "#79b5ec21",
  },
  {
    id: 2,
    icon: DashboardCardIcon1,
    label: "Scheduled",
    text: "Total number of scheduled appointments",
    color: "#ffd1471a",
  },
  {
    id: 3,
    icon: DashboardCardIcon3,
    label: "Cancelled",
    text: "Total number of cancelled appointments",
    color: "#f3787726",
  },
];

export const appointments: AppointmentsInterface[] = [
  {
    id: 1,
    fullName: "John Doe",
    date: "2024-09-15T10:30:00",
    status: "Scheduled",
    doctorName: "Dr. Emily Johnson",
  },
  {
    id: 2,
    fullName: "Jane Smith",
    date: "2024-09-16T14:00:00",
    status: "Pending",
    doctorName: "Dr. Michael Lee",
  },
  {
    id: 3,
    fullName: "Robert Brown",
    date: "2024-09-17T11:15:00",
    status: "Cancelled",
    doctorName: "Dr. Sarah Martinez",
  },
  {
    id: 4,
    fullName: "Emma Wilson",
    date: "2024-09-18T09:00:00",
    status: "Scheduled",
    doctorName: "Dr. David Thompson",
  },
  {
    id: 5,
    fullName: "Alex Johnson",
    date: "2024-09-19T16:30:00",
    status: "Pending",
    doctorName: "Dr. Lisa Chen",
  },
  {
    id: 6,
    fullName: "Olivia Davis",
    date: "2024-09-20T13:45:00",
    status: "Scheduled",
    doctorName: "Dr. James Wilson",
  },
  {
    id: 7,
    fullName: "William Taylor",
    date: "2024-09-21T10:00:00",
    status: "Cancelled",
    doctorName: "Dr. Emily Johnson",
  },
  {
    id: 8,
    fullName: "Sophia Anderson",
    date: "2024-09-22T15:30:00",
    status: "Scheduled",
    doctorName: "Dr. Michael Lee",
  },
  {
    id: 9,
    fullName: "Liam Garcia",
    date: "2024-09-23T12:00:00",
    status: "Pending",
    doctorName: "Dr. Sarah Martinez",
  },
  {
    id: 10,
    fullName: "Ava Martinez",
    date: "2024-09-24T08:45:00",
    status: "Scheduled",
    doctorName: "Dr. David Thompson",
  },
];

export const statusColors = {
  Scheduled: {
    background: "#0D2A1F",
    color: "#24AE7C",
    icon: successIcon,
  },
  Pending: {
    background: "#152432",
    color: "#79B5EC",
    icon: waitingIcon,
  },
  Cancelled: {
    background: "#3E1716",
    color: "#F37877",
    icon: cancelledIcon,
  },
};
