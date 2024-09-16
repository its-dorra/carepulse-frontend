import { cancelAppointment } from "@/lib/api/appointments";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCancelAppointment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
      queryClient.invalidateQueries({ queryKey: ["statusCount"] });
    },
  });
};
