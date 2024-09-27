import { getUser } from "@/actions/userActions";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const userQueryOption = queryOptions({
  queryKey: ["user"],
  staleTime: 10 * 1000,
  queryFn: getUser,
  refetchOnMount: false,
  refetchOnWindowFocus: true,
});

export const useUser = () => {
  return useQuery(userQueryOption);
};
