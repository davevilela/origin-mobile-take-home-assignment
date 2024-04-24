import { QueryClient } from '@tanstack/react-query';

import { transactionServices } from './transactionsServices';
import { getReceiptUploadService } from './uploadReceiptImage';
import { transactionsQueryKeys } from '../hooks/useTransactions';
import { Transaction } from '../types/transactions';

import { supabase } from '~/lib/supabase/supabaseClient.native';

const { updateTransactionCoordinates } = transactionServices;
export const transactionsMutations = {
  updateTransactionCoordinates: {
    mutationKey: ['updateTransactionCoordinates'],
    mutationFn: updateTransactionCoordinates,
  },
  updateTransactionReceipt: {
    mutationKey: ['updateTransactionReceipt'],
    mutationFn: getReceiptUploadService(supabase),
  },
} as const;

export function setTransactionsMutationDefaults(queryClient: QueryClient) {
  queryClient.setMutationDefaults(transactionsMutations.updateTransactionCoordinates.mutationKey, {
    mutationFn: transactionsMutations.updateTransactionCoordinates.mutationFn,
    async onMutate(variables) {
      const queryKey = transactionsQueryKeys.show(`${variables.id}`);
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
      queryClient.setQueryData(transactionsQueryKeys.show(`${newData.id}`), context?.previousData);
    },
  });

  queryClient.setMutationDefaults(transactionsMutations.updateTransactionReceipt.mutationKey, {
    mutationFn: transactionsMutations.updateTransactionReceipt.mutationFn,
    async onMutate(variables) {
      const { transactionId } = variables;
      const queryKey = transactionsQueryKeys.show(`${transactionId}`);

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
      queryClient.setQueryData(
        transactionsQueryKeys.show(`${newData.transactionId}`),
        context?.previousData
      );
    },
    onSuccess(data, variables) {
      const queryKey = transactionsQueryKeys.show(`${variables.transactionId}`);

      queryClient.setQueryData<Transaction | undefined>(queryKey, (old) => {
        if (!old) return;
        return {
          ...old,
          ReceiptImage: data,
        };
      });
    },
  });

  return queryClient;
}
