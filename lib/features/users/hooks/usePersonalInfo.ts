import { postPersonalInformation } from "@/actions/userActions";
import { useMutation } from "@tanstack/react-query";

export const usePersonalInfo = () => {
  return useMutation({
    mutationFn: postPersonalInformation,
  });
};
