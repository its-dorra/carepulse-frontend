import { newAppointment } from "@/actions/appointmentsActions";
import { useMutation } from "@tanstack/react-query";

export const useNewAppointment = () => {
  return useMutation({ mutationFn: newAppointment });
};
