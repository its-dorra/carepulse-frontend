import { getAppointments } from "@/lib/api/appointments";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import { PER_PAGE } from "@/lib/constants";
import { useAppointmentsCount } from "./useAppointmentsCount";

export const useAppointments = () => {
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();
  const page = Number(searchParams.get("page")) || 1;

  const {
    data: { appointments, totalAppointmentCount: { totalCount = 0 } = {} } = {},
    isPending,
    isError,
  } = useQuery({
    queryFn: () => getAppointments({ perPage: PER_PAGE, page }),
    queryKey: ["dashboard", page],
  });

  // PRE FETCHING
  const pageCount = Math.ceil(totalCount! / PER_PAGE);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryFn: () => getAppointments({ perPage: PER_PAGE, page: page + 1 }),
      queryKey: ["dashboard", page + 1],
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryFn: () => getAppointments({ perPage: PER_PAGE, page: page - 1 }),
      queryKey: ["dashboard", page - 1],
    });
  }

  return { appointments, totalCount, isPending, isError };
};
