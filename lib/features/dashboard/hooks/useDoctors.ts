import { getDoctors } from "@/actions/appointmentsActions";
import { useQuery } from "@tanstack/react-query";

export const useDoctors = () => {
  return useQuery({
    queryFn: () => getDoctors({}),
    queryKey: ["doctors"],
  });
};
