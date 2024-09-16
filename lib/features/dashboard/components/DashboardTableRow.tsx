"use client";

import Image from "next/image";
import { TableCell, TableRow } from "@/lib/components/ui/table";
import DashboardActionButton from "./DashboardActionButton";
import { AppointmentsInterface } from "@/lib/types/AppointmentsType";
import ScheduleAppointmentForm from "@/lib/features/dashboard/components/ScheduleAppointmentForm";
import { useState } from "react";
import CancelAppointmentForm from "@/lib/features/dashboard/components/CancelAppointmentForm";
import { Avatar } from "@/lib/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { formatDate } from "@/lib/utils/index";

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
  const [isOpenSchedule, setIsOpenSchedule] = useState(false);
  const [isOpenCancel, setIsOpenCancel] = useState(false);

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
      <TableCell className="h-12 py-3">
        {formatDate(appointment.date)}
      </TableCell>
      <TableCell className="h-12 py-3">
        <div
          style={{ backgroundColor: background, color }}
          className="flex w-fit items-center gap-x-1 rounded-full px-2 py-1"
        >
          <Image src={icon} className="h-3 w-3" alt="icon" />
          <p>{appointment.status}</p>
        </div>
      </TableCell>
      <TableCell className="hidden h-12 py-3 md:table-cell">
        <div className="flex items-center gap-x-2">
          <Avatar className="h-6 w-6">
            <AvatarImage
              className="aspect-square w-6 object-cover"
              src={appointment.doctor.doctorPath}
              alt=""
            />
            <AvatarFallback>{appointment.doctor.doctorName}</AvatarFallback>
          </Avatar>
          <p>{appointment.doctor.doctorName}</p>
        </div>
      </TableCell>
      <TableCell className="hidden h-12 items-center gap-x-4 py-3 md:inline-flex">
        <DashboardActionButton
          disabled={
            appointment.status === "Cancelled" ||
            appointment.status === "Scheduled"
          }
          setIsOpen={setIsOpenSchedule}
          isOpen={isOpenSchedule}
          btnActionTitle="Schedule appointment"
          btnTitle="Schedule"
          isGreen
          modalTitle="Schedule appointment"
        >
          <p className="text-n-1">
            Please fill in the following details to schedule
          </p>
          <ScheduleAppointmentForm
            appointment={appointment}
            setIsOpen={setIsOpenSchedule}
          />
        </DashboardActionButton>
        <DashboardActionButton
          disabled={
            appointment.status === "Cancelled" ||
            appointment.status === "Scheduled"
          }
          setIsOpen={setIsOpenCancel}
          isOpen={isOpenCancel}
          btnActionTitle="Cancel appointment"
          btnTitle="Cancel"
          modalTitle="Cancel appointment"
        >
          <p className="text-n-1">
            Are you sure you want to cancel your appointment
          </p>
          <CancelAppointmentForm
            appointment={appointment}
            setIsOpen={setIsOpenCancel}
          />
        </DashboardActionButton>
      </TableCell>
    </TableRow>
  );
}
