/* eslint-disable node/handle-callback-err */
import { useInfiniteQuery, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';

import { transactionServices } from '../services/transactionsServices';
import { Transaction, TransactionPaginatedRequestBody } from '../types/transactions';

export const transactionsQueryKeys = {
  list: ['transactions'],
  show: (id: string) => [...transactionsQueryKeys.list, id],
};

export function useTransactionsInfiniteQuery({ pageSize = 10 }: { pageSize?: number } = {}) {
  const query = useInfiniteQuery({
    queryKey: transactionsQueryKeys.list,
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
  const queryClient = useQueryClient();
  const { data: transaction, ...rest } = useQuery({
    queryKey: transactionsQueryKeys.show(id),
    // staleTime: 1000,
    queryFn: () => transactionServices.fetchTransaction(id),
    networkMode: 'offlineFirst',
    initialData: () => {
      const queryData = queryClient.getQueryData<{
        pages: TransactionPaginatedRequestBody[];
        pageParams: number[];
      }>(transactionsQueryKeys.list);

      const queryPages = queryData?.pages || [];

      for (const page of queryPages) {
        const foundTransaction = page.Transactions.find(
          (transaction) => `${transaction.Id}` === id
        );
        if (foundTransaction) return foundTransaction;
      }
    },
    initialDataUpdatedAt: () =>
      queryClient.getQueryState(transactionsQueryKeys.list)?.dataUpdatedAt,
  });

  return {
    transaction,
    ...rest,
  };
}
