import { verifyUserOTP } from "@/actions/userActions";
import { useMutation } from "@tanstack/react-query";

export const useUserPinCode = () => {
  return useMutation({
    mutationFn: verifyUserOTP,
  });
};
