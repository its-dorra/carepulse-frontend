import { statusColors } from "@/assets";
import { generateAvatarColors } from "../utils/index";
import { TableBody } from "./ui/table";

import { AppointmentsInterface } from "../types/AppointmentsType";
import DashboardTableRow from "./DashboardTableRow";

export default function DashboardTableBody({
  appointments,
}: {
  appointments: AppointmentsInterface[];
}) {
  return (
    <TableBody className="text-[11px] font-light">
      {appointments.map((appointment) => {
        const avatarName = appointment.fullName
          .split(" ")
          .map((char) => char.at(0))
          .join("");
        const { backgroundColor, textColor } = generateAvatarColors(avatarName);

        const { background, color, icon } = statusColors[appointment.status];

        return (
          <DashboardTableRow
            key={appointment.id}
            icon={icon}
            color={color}
            textColor={textColor}
            background={background}
            backgroundColor={backgroundColor}
            appointment={appointment}
            avatarName={avatarName}
          />
        );
      })}
    </TableBody>
  );
}
