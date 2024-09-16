import { getAppointmentsCount } from "@/lib/api/appointments";
import { useQuery } from "@tanstack/react-query";

export const useAppointmentsCount = () => {
  const { data: { statusCount } = {}, isPending } = useQuery({
    queryFn: getAppointmentsCount,
    queryKey: ["statusCount"],
  });

  return { statusCount, isPending };
};
