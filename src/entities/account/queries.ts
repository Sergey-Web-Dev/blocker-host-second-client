import {
  accountControllerGetAccount,
  accountControllerPatchAccount,
} from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const accountKey = ["account"];

export function useAccountQuery() {
  return useQuery({
    queryKey: accountKey,
    queryFn: accountControllerGetAccount,
    retry: 0,
    staleTime: 5 * 60 * 1000,
  });
}

export function useUpdateAccountMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: accountControllerPatchAccount,
    onSuccess(data) {
      queryClient.setQueryData(accountKey, data);
    },
    async onSettled() {
      // @ts-ignore
      await queryClient.invalidateQueries(accountKey);
    },
  });
}
