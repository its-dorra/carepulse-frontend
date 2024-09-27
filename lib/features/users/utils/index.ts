import { getUser as user } from "@/actions/userActions";

export const getUser = async () => {
  try {
    const data = await user({});

    return data;
  } catch (e) {
    return { user: null };
  }
};
