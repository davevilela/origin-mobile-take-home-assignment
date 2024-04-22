/* eslint-disable node/handle-callback-err */
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { transactionServices } from '../services/transactionsServices';
import { Transaction } from '../types/transactions';

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
  const { data: transaction, ...rest } = useQuery({
    queryKey: transactionsQueryKeys.show(id),
    queryFn: () => transactionServices.fetchTransaction(id),
    networkMode: 'offlineFirst',
  });

  return {
    transaction,
    ...rest,
  };
}
