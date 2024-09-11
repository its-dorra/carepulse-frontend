import Image from "next/image";
import { TableCell, TableRow } from "./ui/table";
import DashboardActionButton from "./DashboardActionButton";
import { AppointmentsInterface } from "../types/AppointmentsType";
import ScheduleAppointmentForm from "./ScheduleAppoitmentForm";

interface DashboardTableRow {
  backgroundColor: string;
  textColor: string;
  avatarName: string;
  appointment: AppointmentsInterface;
  background: string;
  color: string;
  icon: any;
}

export default function DashboardTableRow({
  backgroundColor,
  textColor,
  avatarName,
  appointment,
  background,
  color,
  icon,
}: DashboardTableRow) {
  return (
    <TableRow className="border-none odd:bg-foreground even:bg-transparent">
      <TableCell className="flex h-12 items-center gap-x-2 py-3">
        <div
          className="flex aspect-square w-6 items-center justify-center rounded-full p-0.5 text-[10px] font-medium"
          style={{ backgroundColor, color: textColor }}
        >
          {avatarName}
        </div>
        {appointment.fullName}
      </TableCell>
      <TableCell className="h-12 py-3">{appointment.date}</TableCell>
      <TableCell className="h-12 py-3">
        <div
          style={{ backgroundColor: background, color }}
          className="flex w-fit items-center gap-x-1 rounded-full px-2 py-1"
        >
          <Image src={icon} alt="icon" />
          <p>{appointment.status}</p>
        </div>
      </TableCell>
      <TableCell className="h-12 py-3">{appointment.doctorName}</TableCell>
      <TableCell className="flex h-12 items-center gap-x-4 py-3">
        <DashboardActionButton
          btnActionTitle="Schedule appointment"
          btnTitle="Schedule"
          isGreen
          modalTitle="Schedule appointment"
          className=""
        >
          <p className="text-n-1">
            Please fill in the following details to schedule
          </p>
          <ScheduleAppointmentForm />
        </DashboardActionButton>
        <DashboardActionButton
          btnActionTitle="Cancel appointment"
          btnTitle="Cancel"
          modalTitle="Cancel appointment"
        ></DashboardActionButton>
      </TableCell>
    </TableRow>
  );
}
