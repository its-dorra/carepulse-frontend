import { privateAxios } from "../axiosInstances";

export const loginAdmin = async (pinCode: string) => {
  const { data } = await privateAxios.post("auth/login-admin", { pinCode });
  return data;
};
