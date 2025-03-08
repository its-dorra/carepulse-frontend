import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/actions/userActions";
import { toast } from "sonner";

export const useSignUpUser = () => {
  return useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      toast("Created an account successfully");
    },
    onError: (err) => {
      toast(err.message);
    },
  });
};
