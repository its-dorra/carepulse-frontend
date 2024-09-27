import { loginAdmin } from "@/actions/userActions";
import { useMutation } from "@tanstack/react-query";

export const useLoginAdmin = () => {
  return useMutation({ mutationFn: loginAdmin });
};
