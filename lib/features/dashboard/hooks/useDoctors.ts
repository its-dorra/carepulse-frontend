import { getDoctors } from "@/lib/api/appointments";
import { useQuery } from "@tanstack/react-query";

export const useDoctors = () => {
  return useQuery({
    queryFn: getDoctors,
    queryKey: ["doctors"],
  });
};
