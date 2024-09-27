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
