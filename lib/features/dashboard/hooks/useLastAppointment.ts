import { getLastAppointment } from "@/actions/appointmentsActions";
import { useQuery } from "@tanstack/react-query";

export const useLastAppointment = (appointmentId: string) => {
  return useQuery({
    queryFn: () => getLastAppointment(appointmentId),
    queryKey: ["lastAppointment", appointmentId],
  });
};
