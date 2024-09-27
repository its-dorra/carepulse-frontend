
import { appointmentCountQuery } from "@/lib/queries";
import {  useQuery } from "@tanstack/react-query";

export const useAppointmentsCount = () => {
  const {
    data: { statusCount } = {},

    ...props
  } = useQuery(appointmentCountQuery);

  return { statusCount, ...props };
};
