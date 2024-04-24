import { Stack, useLocalSearchParams } from 'expo-router';

import { TransactionReceiptScreen } from '~/features/transactions/screens/TransactionReceiptScreen';

export default function Screen() {
  const { transactionId } = useLocalSearchParams<{ transactionId: string }>();

  return (
    <>
      <Stack.Screen
        options={{
          title: '',
          headerShadowVisible: false,
          headerShown: true,
        }}
      />
      <TransactionReceiptScreen transactionId={transactionId} />
    </>
  );
}
