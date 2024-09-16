"use client";

import { statusColors } from "@/assets";
import { generateAvatarColors } from "@/lib/utils/index";
import { TableBody } from "@/lib/components/ui/table";

import DashboardTableRow from "./DashboardTableRow";
import { useAppointments } from "../hooks/useAppointments";
import SkeletonTableRow from "./SkeletonTableRow";

export default function DashboardTableBody() {
  const { appointments = [], isPending } = useAppointments();

  return (
    <TableBody className="text-[11px] font-light">
      {isPending ? (
        <>
          {Array.from({ length: 3 }).map((_, ind) => (
            <SkeletonTableRow key={ind} />
          ))}
        </>
      ) : (
        <>
          {appointments.map((appointment) => {
            const avatarName = appointment.fullName
              .split(" ")
              .map((char) => char.at(0))
              .join("");
            const { backgroundColor, textColor } =
              generateAvatarColors(avatarName);

            const { background, color, icon } =
              statusColors[appointment.status];

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
        </>
      )}
    </TableBody>
  );
}
