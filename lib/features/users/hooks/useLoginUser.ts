import { loginUser } from "@/actions/userActions";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useLoginUser = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      toast("Logged in successfully");
    },
    onError: (err) => {
      toast(err.message);
    },
  });
};
