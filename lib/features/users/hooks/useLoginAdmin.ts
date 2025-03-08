import { loginAdmin } from "@/actions/userActions";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useLoginAdmin = () => {
  return useMutation({
    mutationFn: loginAdmin,
    onError: (err) => {
      toast(err.message);
    },
    onSuccess: () => {
      toast("Logged in successfully");
    },
  });
};
