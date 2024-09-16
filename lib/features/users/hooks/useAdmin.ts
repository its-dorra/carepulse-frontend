import { loginAdmin } from "@/lib/api/users";
import { useMutation } from "@tanstack/react-query";

export const useAdmin = () => {
  return useMutation({
    mutationFn: (pinCode: string) => loginAdmin(pinCode),
    mutationKey: ["admin"],
  });
};
