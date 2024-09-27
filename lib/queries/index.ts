import {
  getAppointments,
  getAppointmentsCount,
} from "@/actions/appointmentsActions";
import { PER_PAGE } from "@/constants";
import { queryOptions } from "@tanstack/react-query";

export const appointmentQueryOptions = (page: number) => {
  return queryOptions({
    queryFn: () => getAppointments({ perPage: PER_PAGE, page }),
    queryKey: ["dashboard", page],
    staleTime: 5 * 60 * 1000,
  });
};

export const appointmentCountQuery = queryOptions({
  queryFn: () => getAppointmentsCount({}),
  queryKey: ["statusCount"],
  staleTime: 1000 * 60 * 5,
});
