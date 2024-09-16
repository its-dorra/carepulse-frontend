import { scheduleAppointment } from "@/lib/api/appointments";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useScheduleAppointment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: scheduleAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
      queryClient.invalidateQueries({ queryKey: ["statusCount"] });
    },
  });
};
