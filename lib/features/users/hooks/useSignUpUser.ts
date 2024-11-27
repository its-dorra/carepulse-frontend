import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/actions/userActions";

export const useSignUpUser = () => {
  return useMutation({
    mutationFn : signUp
  });
};
