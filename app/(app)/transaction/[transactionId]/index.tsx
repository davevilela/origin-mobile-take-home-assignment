import { useLocalSearchParams, Stack } from 'expo-router';

import { TransactionDetailsScreen } from '~/features/transactions/screens/TransactionDetailsScreen';

export default function Screen() {
  const { transactionId } = useLocalSearchParams<{ transactionId: string }>();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Transaction',

          headerShown: true,
        }}
      />
      <TransactionDetailsScreen transactionId={transactionId} />
    </>
  );
}
