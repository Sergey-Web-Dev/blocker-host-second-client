import {
  blockListControllerAddBlockItem,
  blockListControllerGetList,
  blockListControllerRemoveBlockItem,
} from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const blockListKey = ["block-list"] as unknown[];

export function useBlockListQuery({ q }: { q?: string }) {
  return useQuery({
    queryKey: blockListKey.concat([{ q }]),
    queryFn: () => blockListControllerGetList({ q }),
    retry: 0,
    staleTime: 5 * 60 * 1000,
  });
}

export function useAddBlockItemMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockListControllerAddBlockItem,
    onSuccess(data) {
      queryClient.setQueryData(blockListKey, data);
    },
    async onSettled() {
      //@ts-ignore
      await queryClient.invalidateQueries(blockListKey);
    },
  });
}

export function useRemovelockItemMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockListControllerRemoveBlockItem,
    onSuccess(data) {
      queryClient.setQueryData(blockListKey, data);
    },
    async onSettled() {
      //@ts-ignore
      await queryClient.invalidateQueries(blockListKey);
    },
  });
}
