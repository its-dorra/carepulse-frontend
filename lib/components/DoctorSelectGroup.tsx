"use client";

import { RiSearchLine } from "react-icons/ri";
import { Doctor } from "../types/AppointmentsType";
import CustomSelectGroup from "./ui/CustomSelectGroup";
import { SelectItem } from "./ui/select";
import DoctorTile from "./DoctorTile";
import { useDoctors } from "../features/dashboard/hooks/useDoctors";
import { Control, FieldValues } from "react-hook-form";

export default function DoctorSelectGroup({
  control,
}: {
  control: Control<any, any>;
}) {
  const { data, isPending } = useDoctors();

  return (
    <CustomSelectGroup<Doctor>
      disabled={isPending}
      icon={<RiSearchLine className="text-lg" />}
      control={control}
      placeholder="Select a doctor"
      label="Doctor"
      name="doctorId"
      items={data?.doctors || []}
      render={(doctor) => (
        <SelectItem
          className="w-full"
          key={doctor.id}
          value={doctor.id.toString()}
        >
          <DoctorTile img={doctor.doctorPath} name={doctor.doctorName} />
        </SelectItem>
      )}
    />
  );
}
