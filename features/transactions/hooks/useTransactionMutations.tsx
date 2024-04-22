import { useMutation, DefaultError } from '@tanstack/react-query';

import { transactionsMutations } from '../services/transactionMutations';

export function useUpdateTransactionCoordinatesMutation() {
  const mutation = useMutation<
    ReturnType<typeof transactionsMutations.updateTransactionCoordinates.mutationFn>,
    DefaultError,
    Parameters<typeof transactionsMutations.updateTransactionCoordinates.mutationFn>[0]
  >({
    mutationKey: transactionsMutations.updateTransactionCoordinates.mutationKey,
  });

  return mutation;
}

export function useUpdateTransactionReceipt() {
  const mutation = useMutation<
    ReturnType<typeof transactionsMutations.updateTransactionReceipt.mutationFn>,
    DefaultError,
    Parameters<typeof transactionsMutations.updateTransactionReceipt.mutationFn>[0]
  >({
    mutationKey: transactionsMutations.updateTransactionReceipt.mutationKey,
  });

  return mutation;
}
