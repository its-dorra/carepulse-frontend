import { AppointmentsInterface } from "../types/AppointmentsType";
import { generateAvatarColors } from "../utils/index";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function DashboardTable({
  appointments,
}: {
  appointments: AppointmentsInterface[];
}) {
  return (
    <Table className="border-none">
      <TableHeader className="border-none bg-black/20">
        <TableRow className="border-none text-xs text-n-1">
          <TableHead className="rounded-tl-2xl">Patient</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Doctor</TableHead>
          <TableHead className="rounded-tr-2xl">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-xs">
        {appointments.map((appointment) => {
          const avatarName = appointment.fullName
            .split(" ")
            .map((char) => char.at(0))
            .join("");
          const { backgroundColor, textColor } =
            generateAvatarColors(avatarName);
          return (
            <TableRow
              className="border-none odd:bg-foreground even:bg-transparent"
              key={appointment.id}
            >
              <TableCell className="flex items-center gap-x-2">
                <div
                  className="flex aspect-square w-7 items-center justify-center rounded-full p-1 text-xs font-bold"
                  style={{ backgroundColor, color: textColor }}
                >
                  {avatarName}
                </div>
                {appointment.fullName}
              </TableCell>
              <TableCell>{appointment.date}</TableCell>
              <TableCell>{appointment.status}</TableCell>
              <TableCell>{appointment.doctorName}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
