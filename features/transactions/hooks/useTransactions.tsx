/* eslint-disable node/handle-callback-err */
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo, useRef, useState } from 'react';

import { transactionServices } from '../services/transactionsServices';
import { getReceiptUploadService } from '../services/uploadReceiptImage';
import { Transaction } from '../types/transactions';

import { useSupabase } from '~/lib/supabase/useSupabase';

const keys = {
  list: ['transactions'],
  show: (id: string) => [...keys.list, id],
};

export function useTransactionsInfiniteQuery({ pageSize = 10 }: { pageSize?: number } = {}) {
  const query = useInfiniteQuery({
    queryKey: keys.list,
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      const res = await transactionServices.fetchTransactions({ page: pageParam, pageSize });
      return res;
    },
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.Page + 1;
      const maxPage = Math.ceil(lastPage.TotalRecords / lastPage.PageSize);
      return nextPage <= maxPage ? nextPage : undefined; // Only return nextPage if it exists
    },
  });

  const transactions = useMemo(
    () =>
      query.data?.pages.reduce((prev, page) => {
        return [...prev, ...page.Transactions];
      }, [] as Transaction[]),
    [query.data?.pages]
  );

  return { transactions, ...query };
}

export function useTransactionQuery({ id }: { id: string }) {
  const { data: transaction, ...rest } = useQuery({
    queryKey: keys.show(id),
    queryFn: () => transactionServices.fetchTransaction(id),
    networkMode: 'offlineFirst',
  });

  return {
    transaction,
    ...rest,
  };
}

export function useUpdateTransactionCoordinatesMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: transactionServices.updateTransactionCoordinates,
    async onMutate(variables) {
      const queryKey = keys.show(`${variables.id}`);
      await queryClient.cancelQueries({ queryKey });

      const previousData = queryClient.getQueryData(queryKey);

      queryClient.setQueryData<Transaction | undefined>(queryKey, (old) => {
        if (!old) return;
        const { id, ...rest } = variables;
        return {
          ...old,
          ...rest,
        };
      });

      return { previousData };
    },
    onError: (_, newData, context) => {
      queryClient.setQueryData(keys.show(`${newData.id}`), context?.previousData);
    },
  });

  return mutation;
}

export function useUpdateTransactionReceipt() {
  const queryClient = useQueryClient();
  const supabase = useSupabase();
  const uploadService = useRef(getReceiptUploadService(supabase)).current;

  const mutation = useMutation({
    mutationFn: uploadService,
    async onMutate(variables) {
      const { transactionId } = variables;
      const queryKey = keys.show(`${transactionId}`);

      await queryClient.cancelQueries({ queryKey });

      const previousData = queryClient.getQueryData(queryKey);

      queryClient.setQueryData<Transaction | undefined>(queryKey, (old) => {
        if (!old) return;
        const { uri } = variables;
        return {
          ...old,
          ReceiptImage: uri,
        };
      });

      return { previousData };
    },
    onError: (_, newData, context) => {
      queryClient.setQueryData(keys.show(`${newData.transactionId}`), context?.previousData);
    },
    onSuccess(data, variables) {
      const queryKey = keys.show(`${variables.transactionId}`);
      queryClient.setQueryData<Transaction | undefined>(queryKey, (old) => {
        if (!old) return;
        return {
          ...old,
          ReceiptImage: data,
        };
      });
    },
  });

  return mutation;
}
