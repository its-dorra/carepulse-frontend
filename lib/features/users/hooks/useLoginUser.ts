import { loginUser } from "@/actions/userActions";
import { useMutation } from "@tanstack/react-query";

export const useLoginUser = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};
