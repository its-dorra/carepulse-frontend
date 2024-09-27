import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import { PER_PAGE } from "@/constants";
import { appointmentQueryOptions } from "@/lib/queries";
import { useEffect } from "react";

export const useAppointments = () => {
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();
  const page = Number(searchParams.get("page")) || 1;

  const { data, isPending, isError, ...props } = useQuery(
    appointmentQueryOptions(page),
  );

  const appointments = data?.appointments ?? [];
  const totalCount = data?.totalAppointmentCount?.totalCount ?? 0;

  // PRE FETCHING
  const pageCount = Math.ceil(totalCount / PER_PAGE);

  useEffect(() => {
    if (!isPending && !isError) {
      if (page < pageCount) {
        queryClient.prefetchQuery(appointmentQueryOptions(page + 1));
      }
      if (page > 1) {
        queryClient.prefetchQuery(appointmentQueryOptions(page - 1));
      }
    }
  }, [page, pageCount, isPending, isError, queryClient]);

  return { appointments, totalCount, isPending, isError, ...props };
};
